import {
    gfx,
    run,
    App,
    host,
    Mat4,
    perspective,
    translate,
    Input,
    image,
    blit,
    Texture
} from '../../@gkit/gkit.js'

type Action = 'rock' | 'paper' | 'scissor'

class Player {
    constructor(
        public hp:number,
        public action:Action | '',
        public img:Texture,
        public turn:'1p' | '2p'
    ) {}
}

type Result = 'draw' | '1p' | '2p'

let solve = (a:Action, b:Action):Result => {
    if(a === b) return 'draw'
    if(a === 'rock') {
        return b === 'paper'? '1p' : '2p'
    }
    if(a === 'paper') {
        return b === 'scissor'? '1p' : '2p'
    }
    if(a === 'scissor') {
        return b === 'rock'? '1p' : '2p'
    }
    throw new Error()
}

const damage = 0.21 // to avoid stupid precision problems
const wait = 0.0075
const enemy_hp_framex = 400
const enemy_hp_framey = 400

let handle_input = (i:Input):Action | '' => {
    if(i.clicks.length !== 0) {
        let x = i.clicks[0].x
        let y = i.clicks[0].y
        if(y > 0.7) {
            if(x < 0.333) return 'rock'
            if(x < 0.666) return 'paper'
            return 'scissor'
        }
    }
    if(i.key('KeyA')) return 'rock'
    if(i.key('KeyS')) return 'paper'
    if(i.key('KeyD')) return 'scissor'
    return ''
}

export let app:App = async (path, canvas) => {
    let out = canvas(1000, 1000)
    let g = gfx(out)
    let buf = g.buffer()
    let a_img = g.texture(await image(path + 'a.png'))
    let b_img = g.texture(await image(path + 'b.png'))
    let action_texs = [
        g.texture(await image(path + '0.png')),
        g.texture(await image(path + '1.png')),
        g.texture(await image(path + '2.png')),
        g.texture(await image(path + '3.png'))
    ]
    let action_texture = (action:Action | '') => {
        if(action === '')        return action_texs[0]
        if(action === 'rock')    return action_texs[1]
        if(action === 'paper')   return action_texs[2]
        if(action === 'scissor') return action_texs[3]
        throw new Error()
    }
    let action_enemy_texs = [
        g.texture(await image(path + 'e1.png')),
        g.texture(await image(path + 'e2.png')),
        g.texture(await image(path + 'e3.png'))
    ]
    let action_enemy_texture = (action:Action) => {
        if(action === 'rock')    return action_enemy_texs[0]
        if(action === 'paper')   return action_enemy_texs[1]
        if(action === 'scissor') return action_enemy_texs[2]
        throw new Error()
    }
    let hp_100 = g.texture(await image(path + 'hp_100.png'))
    let hp_80 =  g.texture(await image(path + 'hp_80.png'))
    let hp_60 =  g.texture(await image(path + 'hp_60.png'))
    let hp_40 =  g.texture(await image(path + 'hp_40.png'))
    let hp_20 =  g.texture(await image(path + 'hp_20.png'))
    let hp_0 =   g.texture(await image(path + 'hp_0.png'))
    let hp_texture = (hp:number) => {
        if(hp < 0.1) return hp_0
        if(hp < 0.3) return hp_20
        if(hp < 0.5) return hp_40
        if(hp < 0.7) return hp_60
        if(hp < 0.9) return hp_80
        return hp_100

    }
    let showdown_img = g.texture(await image(path + 'showdown.png'))
    let idle_img =     g.texture(await image(path + 'idle.png'))
    let end_1p =       g.texture(await image(path + 'end_1p.png'))
    let end_2p =       g.texture(await image(path + 'end_2p.png'))
    let end_draw =     g.texture(await image(path + 'end_draw.png'))
    let h = host(() => new Player(1, '', b_img, '2p'), { slots:1, title:'uClient Demo - $' })
    // await h.open(prompt('Enter Key')?? 'abc')
    await h.open('abc')
    let p = new Player(1, '', a_img, '1p')
    let showdown = 0
    let result:Result | '' = ''
    let end = 0
    return async (input) => {
        let clients = h.clients()
        let players = [[input, p]].concat(clients.map((c) => [c.input(), c.data()])) as [Input, Player][]
        if(players.length === 2) {
            let a = players[0]
            let b = players[1]
            if(showdown === 0 && a[1].action !== '' && b[1].action !== '') {
                showdown = 1
                result = solve(a[1].action, b[1].action)
            }
            if(showdown !== 0) {
                showdown -= wait
                showdown = Math.max(showdown, 0)
                if(showdown === 0) {
                    if(result === '1p' || result === 'draw') {
                        b[1].hp -= damage
                    }
                    if(result === '2p' || result === 'draw') {
                        a[1].hp -= damage
                    }
                    result = ''
                    a[1].action = ''
                    b[1].action = ''
                }
            }
            if(showdown === 0) {
                if(a[1].action === '') a[1].action = handle_input(a[0])
                if(b[1].action === '') b[1].action = handle_input(b[0])
            }
            if(end === 0 && showdown === 0 && (a[1].hp <= 0 || b[1].hp <= 0)) {
                end = 1
            }
            if(end !== 0) {
                end -= wait * 0.5
                end = Math.max(end, 0)
                if(end === 0) {
                    a[1].hp = 1
                    b[1].hp = 1
                }
            }
        }
        let render = (p:Player, enemy:Player, proj:Mat4, view:Mat4) => {
            // view = mul(translate(0, 0, 0), view)
            buf.clear()
            buf.draw({
                shader: `
                    vec4 pixel(px p) {
                        return vec4(1);
                    }
                `
            })
            blit(buf, p.img)
            blit(buf, action_texture(p.action))
            blit(buf, hp_texture(p.hp))
            blit(buf, hp_texture(enemy.hp), enemy_hp_framex, enemy_hp_framey)
            blit(buf, showdown_img, 0, 0, { alpha:showdown })
            if(p.action !== '' && enemy.action === '') {
                blit(buf, idle_img)
            }
            if(showdown !== 0 && enemy.action !== '') { // second expression makes no sense
                blit(buf, action_enemy_texture(enemy.action))
            }
            if(end !== 0) {
                if(p.hp <= 0 && enemy.hp <= 0) blit(buf, end_draw)
                else if(p.hp <= 0) blit(buf, p.turn === '1p'? end_1p : end_2p)
                else blit(buf, p.turn === '1p'? end_2p : end_1p)
            }
            g.flush(buf)
        }
        let proj = perspective(90, g.width() / g.height(), 0.1, 1000)
        clients.forEach((c, i) => {
            if(c.id() === 0) return
            c.video(proj, (proj, view) => {
                render(c.data(), p, proj, view)
                return out
            })
        })
        render(p, clients[0]?.data(), proj, translate(0, 0, 0))
    }
}

export let main = () => run(app, '')
