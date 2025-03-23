class GFX {
    width;
    height;
    mesh;
    buffer;
    texture;
    flush;
    free;
    constructor(width, height, mesh, buffer, texture, flush, free) {
        this.width = width;
        this.height = height;
        this.mesh = mesh;
        this.buffer = buffer;
        this.texture = texture;
        this.flush = flush;
        this.free = free;
    }
}
class Buffer {
    width;
    height;
    draw;
    clear;
    color;
    depth;
    free;
    constructor(width, height, draw, clear, color, depth, free) {
        this.width = width;
        this.height = height;
        this.draw = draw;
        this.clear = clear;
        this.color = color;
        this.depth = depth;
        this.free = free;
    }
}
let Texture$2 = class Texture {
    width;
    height;
    set;
    free;
    constructor(width, height, set, free) {
        this.width = width;
        this.height = height;
        this.set = set;
        this.free = free;
    }
};
class Mesh {
    free;
    constructor(free) {
        this.free = free;
    }
}
class MeshData {
    indices;
    positions;
    uvs;
    normals;
    tangents;
    joints;
    weights;
    constructor(indices, positions, uvs, normals, tangents, joints, weights) {
        this.indices = indices;
        this.positions = positions;
        this.uvs = uvs;
        this.normals = normals;
        this.tangents = tangents;
        this.joints = joints;
        this.weights = weights;
    }
}
class UniformFloat {
    f;
    constructor(f) {
        this.f = f;
    }
}
class UniformInt {
    i;
    constructor(i) {
        this.i = i;
    }
}
class UniformArray {
    type;
    value;
    constructor(type, value) {
        this.type = type;
        this.value = value;
    }
}

///////////////////////////////////////////////////////////////////////////////////
// The MIT License (MIT)
//
// Copyright (c) 2017 Tarek Sherif
//
// Permission is hereby granted, free of charge, to any person obtaining a copy of
// this software and associated documentation files (the "Software"), to deal in
// the Software without restriction, including without limitation the rights to
// use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of
// the Software, and to permit persons to whom the Software is furnished to do so,
// subject to the following conditions:
//
// The above copyright notice and this permission notice shall be included in all
// copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
// FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
// COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
// IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
// CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
///////////////////////////////////////////////////////////////////////////////////

// https://www.khronos.org/registry/webgl/specs/1.0/
// https://www.khronos.org/registry/webgl/specs/latest/2.0/#1.1
const GL = {
    DEPTH_BUFFER_BIT: 0x00000100,
    STENCIL_BUFFER_BIT: 0x00000400,
    COLOR_BUFFER_BIT: 0x00004000,
    POINTS: 0x0000,
    LINES: 0x0001,
    LINE_LOOP: 0x0002,
    LINE_STRIP: 0x0003,
    TRIANGLES: 0x0004,
    TRIANGLE_STRIP: 0x0005,
    TRIANGLE_FAN: 0x0006,
    ZERO: 0,
    ONE: 1,
    SRC_COLOR: 0x0300,
    ONE_MINUS_SRC_COLOR: 0x0301,
    SRC_ALPHA: 0x0302,
    ONE_MINUS_SRC_ALPHA: 0x0303,
    DST_ALPHA: 0x0304,
    ONE_MINUS_DST_ALPHA: 0x0305,
    DST_COLOR: 0x0306,
    ONE_MINUS_DST_COLOR: 0x0307,
    SRC_ALPHA_SATURATE: 0x0308,
    FUNC_ADD: 0x8006,
    BLEND_EQUATION: 0x8009,
    BLEND_EQUATION_RGB: 0x8009,
    BLEND_EQUATION_ALPHA: 0x883D,
    FUNC_SUBTRACT: 0x800A,
    FUNC_REVERSE_SUBTRACT: 0x800B,
    BLEND_DST_RGB: 0x80C8,
    BLEND_SRC_RGB: 0x80C9,
    BLEND_DST_ALPHA: 0x80CA,
    BLEND_SRC_ALPHA: 0x80CB,
    CONSTANT_COLOR: 0x8001,
    ONE_MINUS_CONSTANT_COLOR: 0x8002,
    CONSTANT_ALPHA: 0x8003,
    ONE_MINUS_CONSTANT_ALPHA: 0x8004,
    BLEND_COLOR: 0x8005,
    ARRAY_BUFFER: 0x8892,
    ELEMENT_ARRAY_BUFFER: 0x8893,
    ARRAY_BUFFER_BINDING: 0x8894,
    ELEMENT_ARRAY_BUFFER_BINDING: 0x8895,
    STREAM_DRAW: 0x88E0,
    STATIC_DRAW: 0x88E4,
    DYNAMIC_DRAW: 0x88E8,
    BUFFER_SIZE: 0x8764,
    BUFFER_USAGE: 0x8765,
    CURRENT_VERTEX_ATTRIB: 0x8626,
    FRONT: 0x0404,
    BACK: 0x0405,
    FRONT_AND_BACK: 0x0408,
    CULL_FACE: 0x0B44,
    BLEND: 0x0BE2,
    DITHER: 0x0BD0,
    STENCIL_TEST: 0x0B90,
    DEPTH_TEST: 0x0B71,
    SCISSOR_TEST: 0x0C11,
    POLYGON_OFFSET_FILL: 0x8037,
    SAMPLE_ALPHA_TO_COVERAGE: 0x809E,
    SAMPLE_COVERAGE: 0x80A0,
    NO_ERROR: 0,
    INVALID_ENUM: 0x0500,
    INVALID_VALUE: 0x0501,
    INVALID_OPERATION: 0x0502,
    OUT_OF_MEMORY: 0x0505,
    CW: 0x0900,
    CCW: 0x0901,
    LINE_WIDTH: 0x0B21,
    ALIASED_POINT_SIZE_RANGE: 0x846D,
    ALIASED_LINE_WIDTH_RANGE: 0x846E,
    CULL_FACE_MODE: 0x0B45,
    FRONT_FACE: 0x0B46,
    DEPTH_RANGE: 0x0B70,
    DEPTH_WRITEMASK: 0x0B72,
    DEPTH_CLEAR_VALUE: 0x0B73,
    DEPTH_FUNC: 0x0B74,
    STENCIL_CLEAR_VALUE: 0x0B91,
    STENCIL_FUNC: 0x0B92,
    STENCIL_FAIL: 0x0B94,
    STENCIL_PASS_DEPTH_FAIL: 0x0B95,
    STENCIL_PASS_DEPTH_PASS: 0x0B96,
    STENCIL_REF: 0x0B97,
    STENCIL_VALUE_MASK: 0x0B93,
    STENCIL_WRITEMASK: 0x0B98,
    STENCIL_BACK_FUNC: 0x8800,
    STENCIL_BACK_FAIL: 0x8801,
    STENCIL_BACK_PASS_DEPTH_FAIL: 0x8802,
    STENCIL_BACK_PASS_DEPTH_PASS: 0x8803,
    STENCIL_BACK_REF: 0x8CA3,
    STENCIL_BACK_VALUE_MASK: 0x8CA4,
    STENCIL_BACK_WRITEMASK: 0x8CA5,
    VIEWPORT: 0x0BA2,
    SCISSOR_BOX: 0x0C10,
    COLOR_CLEAR_VALUE: 0x0C22,
    COLOR_WRITEMASK: 0x0C23,
    UNPACK_ALIGNMENT: 0x0CF5,
    PACK_ALIGNMENT: 0x0D05,
    MAX_TEXTURE_SIZE: 0x0D33,
    MAX_VIEWPORT_DIMS: 0x0D3A,
    SUBPIXEL_BITS: 0x0D50,
    RED_BITS: 0x0D52,
    GREEN_BITS: 0x0D53,
    BLUE_BITS: 0x0D54,
    ALPHA_BITS: 0x0D55,
    DEPTH_BITS: 0x0D56,
    STENCIL_BITS: 0x0D57,
    POLYGON_OFFSET_UNITS: 0x2A00,
    POLYGON_OFFSET_FACTOR: 0x8038,
    TEXTURE_BINDING_2D: 0x8069,
    SAMPLE_BUFFERS: 0x80A8,
    SAMPLES: 0x80A9,
    SAMPLE_COVERAGE_VALUE: 0x80AA,
    SAMPLE_COVERAGE_INVERT: 0x80AB,
    COMPRESSED_TEXTURE_FORMATS: 0x86A3,
    DONT_CARE: 0x1100,
    FASTEST: 0x1101,
    NICEST: 0x1102,
    GENERATE_MIPMAP_HINT: 0x8192,
    BYTE: 0x1400,
    UNSIGNED_BYTE: 0x1401,
    SHORT: 0x1402,
    UNSIGNED_SHORT: 0x1403,
    INT: 0x1404,
    UNSIGNED_INT: 0x1405,
    FLOAT: 0x1406,
    DEPTH_COMPONENT: 0x1902,
    ALPHA: 0x1906,
    RGB: 0x1907,
    RGBA: 0x1908,
    LUMINANCE: 0x1909,
    LUMINANCE_ALPHA: 0x190A,
    UNSIGNED_SHORT_4_4_4_4: 0x8033,
    UNSIGNED_SHORT_5_5_5_1: 0x8034,
    UNSIGNED_SHORT_5_6_5: 0x8363,
    FRAGMENT_SHADER: 0x8B30,
    VERTEX_SHADER: 0x8B31,
    MAX_VERTEX_ATTRIBS: 0x8869,
    MAX_VERTEX_UNIFORM_VECTORS: 0x8DFB,
    MAX_VARYING_VECTORS: 0x8DFC,
    MAX_COMBINED_TEXTURE_IMAGE_UNITS: 0x8B4D,
    MAX_VERTEX_TEXTURE_IMAGE_UNITS: 0x8B4C,
    MAX_TEXTURE_IMAGE_UNITS: 0x8872,
    MAX_FRAGMENT_UNIFORM_VECTORS: 0x8DFD,
    SHADER_TYPE: 0x8B4F,
    DELETE_STATUS: 0x8B80,
    LINK_STATUS: 0x8B82,
    VALIDATE_STATUS: 0x8B83,
    ATTACHED_SHADERS: 0x8B85,
    ACTIVE_UNIFORMS: 0x8B86,
    ACTIVE_ATTRIBUTES: 0x8B89,
    SHADING_LANGUAGE_VERSION: 0x8B8C,
    CURRENT_PROGRAM: 0x8B8D,
    NEVER: 0x0200,
    LESS: 0x0201,
    EQUAL: 0x0202,
    LEQUAL: 0x0203,
    GREATER: 0x0204,
    NOTEQUAL: 0x0205,
    GEQUAL: 0x0206,
    ALWAYS: 0x0207,
    KEEP: 0x1E00,
    REPLACE: 0x1E01,
    INCR: 0x1E02,
    DECR: 0x1E03,
    INVERT: 0x150A,
    INCR_WRAP: 0x8507,
    DECR_WRAP: 0x8508,
    VENDOR: 0x1F00,
    RENDERER: 0x1F01,
    VERSION: 0x1F02,
    NEAREST: 0x2600,
    LINEAR: 0x2601,
    NEAREST_MIPMAP_NEAREST: 0x2700,
    LINEAR_MIPMAP_NEAREST: 0x2701,
    NEAREST_MIPMAP_LINEAR: 0x2702,
    LINEAR_MIPMAP_LINEAR: 0x2703,
    TEXTURE_MAG_FILTER: 0x2800,
    TEXTURE_MIN_FILTER: 0x2801,
    TEXTURE_WRAP_S: 0x2802,
    TEXTURE_WRAP_T: 0x2803,
    TEXTURE_2D: 0x0DE1,
    TEXTURE: 0x1702,
    TEXTURE_CUBE_MAP: 0x8513,
    TEXTURE_BINDING_CUBE_MAP: 0x8514,
    TEXTURE_CUBE_MAP_POSITIVE_X: 0x8515,
    TEXTURE_CUBE_MAP_NEGATIVE_X: 0x8516,
    TEXTURE_CUBE_MAP_POSITIVE_Y: 0x8517,
    TEXTURE_CUBE_MAP_NEGATIVE_Y: 0x8518,
    TEXTURE_CUBE_MAP_POSITIVE_Z: 0x8519,
    TEXTURE_CUBE_MAP_NEGATIVE_Z: 0x851A,
    MAX_CUBE_MAP_TEXTURE_SIZE: 0x851C,
    TEXTURE0: 0x84C0,
    TEXTURE1: 0x84C1,
    TEXTURE2: 0x84C2,
    TEXTURE3: 0x84C3,
    TEXTURE4: 0x84C4,
    TEXTURE5: 0x84C5,
    TEXTURE6: 0x84C6,
    TEXTURE7: 0x84C7,
    TEXTURE8: 0x84C8,
    TEXTURE9: 0x84C9,
    TEXTURE10: 0x84CA,
    TEXTURE11: 0x84CB,
    TEXTURE12: 0x84CC,
    TEXTURE13: 0x84CD,
    TEXTURE14: 0x84CE,
    TEXTURE15: 0x84CF,
    TEXTURE16: 0x84D0,
    TEXTURE17: 0x84D1,
    TEXTURE18: 0x84D2,
    TEXTURE19: 0x84D3,
    TEXTURE20: 0x84D4,
    TEXTURE21: 0x84D5,
    TEXTURE22: 0x84D6,
    TEXTURE23: 0x84D7,
    TEXTURE24: 0x84D8,
    TEXTURE25: 0x84D9,
    TEXTURE26: 0x84DA,
    TEXTURE27: 0x84DB,
    TEXTURE28: 0x84DC,
    TEXTURE29: 0x84DD,
    TEXTURE30: 0x84DE,
    TEXTURE31: 0x84DF,
    ACTIVE_TEXTURE: 0x84E0,
    REPEAT: 0x2901,
    CLAMP_TO_EDGE: 0x812F,
    MIRRORED_REPEAT: 0x8370,
    FLOAT_VEC2: 0x8B50,
    FLOAT_VEC3: 0x8B51,
    FLOAT_VEC4: 0x8B52,
    INT_VEC2: 0x8B53,
    INT_VEC3: 0x8B54,
    INT_VEC4: 0x8B55,
    BOOL: 0x8B56,
    BOOL_VEC2: 0x8B57,
    BOOL_VEC3: 0x8B58,
    BOOL_VEC4: 0x8B59,
    FLOAT_MAT2: 0x8B5A,
    FLOAT_MAT3: 0x8B5B,
    FLOAT_MAT4: 0x8B5C,
    SAMPLER_2D: 0x8B5E,
    SAMPLER_CUBE: 0x8B60,
    VERTEX_ATTRIB_ARRAY_ENABLED: 0x8622,
    VERTEX_ATTRIB_ARRAY_SIZE: 0x8623,
    VERTEX_ATTRIB_ARRAY_STRIDE: 0x8624,
    VERTEX_ATTRIB_ARRAY_TYPE: 0x8625,
    VERTEX_ATTRIB_ARRAY_NORMALIZED: 0x886A,
    VERTEX_ATTRIB_ARRAY_POINTER: 0x8645,
    VERTEX_ATTRIB_ARRAY_BUFFER_BINDING: 0x889F,
    IMPLEMENTATION_COLOR_READ_TYPE: 0x8B9A,
    IMPLEMENTATION_COLOR_READ_FORMAT: 0x8B9B,
    COMPILE_STATUS: 0x8B81,
    LOW_FLOAT: 0x8DF0,
    MEDIUM_FLOAT: 0x8DF1,
    HIGH_FLOAT: 0x8DF2,
    LOW_INT: 0x8DF3,
    MEDIUM_INT: 0x8DF4,
    HIGH_INT: 0x8DF5,
    FRAMEBUFFER: 0x8D40,
    RENDERBUFFER: 0x8D41,
    RGBA4: 0x8056,
    RGB5_A1: 0x8057,
    RGB565: 0x8D62,
    DEPTH_COMPONENT16: 0x81A5,
    STENCIL_INDEX: 0x1901,
    STENCIL_INDEX8: 0x8D48,
    DEPTH_STENCIL: 0x84F9,
    RENDERBUFFER_WIDTH: 0x8D42,
    RENDERBUFFER_HEIGHT: 0x8D43,
    RENDERBUFFER_INTERNAL_FORMAT: 0x8D44,
    RENDERBUFFER_RED_SIZE: 0x8D50,
    RENDERBUFFER_GREEN_SIZE: 0x8D51,
    RENDERBUFFER_BLUE_SIZE: 0x8D52,
    RENDERBUFFER_ALPHA_SIZE: 0x8D53,
    RENDERBUFFER_DEPTH_SIZE: 0x8D54,
    RENDERBUFFER_STENCIL_SIZE: 0x8D55,
    FRAMEBUFFER_ATTACHMENT_OBJECT_TYPE: 0x8CD0,
    FRAMEBUFFER_ATTACHMENT_OBJECT_NAME: 0x8CD1,
    FRAMEBUFFER_ATTACHMENT_TEXTURE_LEVEL: 0x8CD2,
    FRAMEBUFFER_ATTACHMENT_TEXTURE_CUBE_MAP_FACE: 0x8CD3,
    COLOR_ATTACHMENT0: 0x8CE0,
    DEPTH_ATTACHMENT: 0x8D00,
    STENCIL_ATTACHMENT: 0x8D20,
    DEPTH_STENCIL_ATTACHMENT: 0x821A,
    NONE: 0,
    FRAMEBUFFER_COMPLETE: 0x8CD5,
    FRAMEBUFFER_INCOMPLETE_ATTACHMENT: 0x8CD6,
    FRAMEBUFFER_INCOMPLETE_MISSING_ATTACHMENT: 0x8CD7,
    FRAMEBUFFER_INCOMPLETE_DIMENSIONS: 0x8CD9,
    FRAMEBUFFER_UNSUPPORTED: 0x8CDD,
    FRAMEBUFFER_BINDING: 0x8CA6,
    RENDERBUFFER_BINDING: 0x8CA7,
    MAX_RENDERBUFFER_SIZE: 0x84E8,
    INVALID_FRAMEBUFFER_OPERATION: 0x0506,
    UNPACK_FLIP_Y_WEBGL: 0x9240,
    UNPACK_PREMULTIPLY_ALPHA_WEBGL: 0x9241,
    CONTEXT_LOST_WEBGL: 0x9242,
    UNPACK_COLORSPACE_CONVERSION_WEBGL: 0x9243,
    BROWSER_DEFAULT_WEBGL: 0x9244,
    READ_BUFFER: 0x0C02,
    UNPACK_ROW_LENGTH: 0x0CF2,
    UNPACK_SKIP_ROWS: 0x0CF3,
    UNPACK_SKIP_PIXELS: 0x0CF4,
    PACK_ROW_LENGTH: 0x0D02,
    PACK_SKIP_ROWS: 0x0D03,
    PACK_SKIP_PIXELS: 0x0D04,
    COLOR: 0x1800,
    DEPTH: 0x1801,
    STENCIL: 0x1802,
    RED: 0x1903,
    RGB8: 0x8051,
    RGBA8: 0x8058,
    RGB10_A2: 0x8059,
    TEXTURE_BINDING_3D: 0x806A,
    UNPACK_SKIP_IMAGES: 0x806D,
    UNPACK_IMAGE_HEIGHT: 0x806E,
    TEXTURE_3D: 0x806F,
    TEXTURE_WRAP_R: 0x8072,
    MAX_3D_TEXTURE_SIZE: 0x8073,
    UNSIGNED_INT_2_10_10_10_REV: 0x8368,
    MAX_ELEMENTS_VERTICES: 0x80E8,
    MAX_ELEMENTS_INDICES: 0x80E9,
    TEXTURE_MIN_LOD: 0x813A,
    TEXTURE_MAX_LOD: 0x813B,
    TEXTURE_BASE_LEVEL: 0x813C,
    TEXTURE_MAX_LEVEL: 0x813D,
    MIN: 0x8007,
    MAX: 0x8008,
    DEPTH_COMPONENT24: 0x81A6,
    MAX_TEXTURE_LOD_BIAS: 0x84FD,
    TEXTURE_COMPARE_MODE: 0x884C,
    TEXTURE_COMPARE_FUNC: 0x884D,
    CURRENT_QUERY: 0x8865,
    QUERY_RESULT: 0x8866,
    QUERY_RESULT_AVAILABLE: 0x8867,
    STREAM_READ: 0x88E1,
    STREAM_COPY: 0x88E2,
    STATIC_READ: 0x88E5,
    STATIC_COPY: 0x88E6,
    DYNAMIC_READ: 0x88E9,
    DYNAMIC_COPY: 0x88EA,
    MAX_DRAW_BUFFERS: 0x8824,
    DRAW_BUFFER0: 0x8825,
    DRAW_BUFFER1: 0x8826,
    DRAW_BUFFER2: 0x8827,
    DRAW_BUFFER3: 0x8828,
    DRAW_BUFFER4: 0x8829,
    DRAW_BUFFER5: 0x882A,
    DRAW_BUFFER6: 0x882B,
    DRAW_BUFFER7: 0x882C,
    DRAW_BUFFER8: 0x882D,
    DRAW_BUFFER9: 0x882E,
    DRAW_BUFFER10: 0x882F,
    DRAW_BUFFER11: 0x8830,
    DRAW_BUFFER12: 0x8831,
    DRAW_BUFFER13: 0x8832,
    DRAW_BUFFER14: 0x8833,
    DRAW_BUFFER15: 0x8834,
    MAX_FRAGMENT_UNIFORM_COMPONENTS: 0x8B49,
    MAX_VERTEX_UNIFORM_COMPONENTS: 0x8B4A,
    SAMPLER_3D: 0x8B5F,
    SAMPLER_2D_SHADOW: 0x8B62,
    FRAGMENT_SHADER_DERIVATIVE_HINT: 0x8B8B,
    PIXEL_PACK_BUFFER: 0x88EB,
    PIXEL_UNPACK_BUFFER: 0x88EC,
    PIXEL_PACK_BUFFER_BINDING: 0x88ED,
    PIXEL_UNPACK_BUFFER_BINDING: 0x88EF,
    FLOAT_MAT2x3: 0x8B65,
    FLOAT_MAT2x4: 0x8B66,
    FLOAT_MAT3x2: 0x8B67,
    FLOAT_MAT3x4: 0x8B68,
    FLOAT_MAT4x2: 0x8B69,
    FLOAT_MAT4x3: 0x8B6A,
    SRGB: 0x8C40,
    SRGB8: 0x8C41,
    SRGB8_ALPHA8: 0x8C43,
    COMPARE_REF_TO_TEXTURE: 0x884E,
    RGBA32F: 0x8814,
    RGB32F: 0x8815,
    RGBA16F: 0x881A,
    RGB16F: 0x881B,
    VERTEX_ATTRIB_ARRAY_INTEGER: 0x88FD,
    MAX_ARRAY_TEXTURE_LAYERS: 0x88FF,
    MIN_PROGRAM_TEXEL_OFFSET: 0x8904,
    MAX_PROGRAM_TEXEL_OFFSET: 0x8905,
    MAX_VARYING_COMPONENTS: 0x8B4B,
    TEXTURE_2D_ARRAY: 0x8C1A,
    TEXTURE_BINDING_2D_ARRAY: 0x8C1D,
    R11F_G11F_B10F: 0x8C3A,
    UNSIGNED_INT_10F_11F_11F_REV: 0x8C3B,
    RGB9_E5: 0x8C3D,
    UNSIGNED_INT_5_9_9_9_REV: 0x8C3E,
    TRANSFORM_FEEDBACK_BUFFER_MODE: 0x8C7F,
    MAX_TRANSFORM_FEEDBACK_SEPARATE_COMPONENTS: 0x8C80,
    TRANSFORM_FEEDBACK_VARYINGS: 0x8C83,
    TRANSFORM_FEEDBACK_BUFFER_START: 0x8C84,
    TRANSFORM_FEEDBACK_BUFFER_SIZE: 0x8C85,
    TRANSFORM_FEEDBACK_PRIMITIVES_WRITTEN: 0x8C88,
    RASTERIZER_DISCARD: 0x8C89,
    MAX_TRANSFORM_FEEDBACK_INTERLEAVED_COMPONENTS: 0x8C8A,
    MAX_TRANSFORM_FEEDBACK_SEPARATE_ATTRIBS: 0x8C8B,
    INTERLEAVED_ATTRIBS: 0x8C8C,
    SEPARATE_ATTRIBS: 0x8C8D,
    TRANSFORM_FEEDBACK_BUFFER: 0x8C8E,
    TRANSFORM_FEEDBACK_BUFFER_BINDING: 0x8C8F,
    RGBA32UI: 0x8D70,
    RGB32UI: 0x8D71,
    RGBA16UI: 0x8D76,
    RGB16UI: 0x8D77,
    RGBA8UI: 0x8D7C,
    RGB8UI: 0x8D7D,
    RGBA32I: 0x8D82,
    RGB32I: 0x8D83,
    RGBA16I: 0x8D88,
    RGB16I: 0x8D89,
    RGBA8I: 0x8D8E,
    RGB8I: 0x8D8F,
    RED_INTEGER: 0x8D94,
    RGB_INTEGER: 0x8D98,
    RGBA_INTEGER: 0x8D99,
    SAMPLER_2D_ARRAY: 0x8DC1,
    SAMPLER_2D_ARRAY_SHADOW: 0x8DC4,
    SAMPLER_CUBE_SHADOW: 0x8DC5,
    UNSIGNED_INT_VEC2: 0x8DC6,
    UNSIGNED_INT_VEC3: 0x8DC7,
    UNSIGNED_INT_VEC4: 0x8DC8,
    INT_SAMPLER_2D: 0x8DCA,
    INT_SAMPLER_3D: 0x8DCB,
    INT_SAMPLER_CUBE: 0x8DCC,
    INT_SAMPLER_2D_ARRAY: 0x8DCF,
    UNSIGNED_INT_SAMPLER_2D: 0x8DD2,
    UNSIGNED_INT_SAMPLER_3D: 0x8DD3,
    UNSIGNED_INT_SAMPLER_CUBE: 0x8DD4,
    UNSIGNED_INT_SAMPLER_2D_ARRAY: 0x8DD7,
    DEPTH_COMPONENT32F: 0x8CAC,
    DEPTH32F_STENCIL8: 0x8CAD,
    FLOAT_32_UNSIGNED_INT_24_8_REV: 0x8DAD,
    FRAMEBUFFER_ATTACHMENT_COLOR_ENCODING: 0x8210,
    FRAMEBUFFER_ATTACHMENT_COMPONENT_TYPE: 0x8211,
    FRAMEBUFFER_ATTACHMENT_RED_SIZE: 0x8212,
    FRAMEBUFFER_ATTACHMENT_GREEN_SIZE: 0x8213,
    FRAMEBUFFER_ATTACHMENT_BLUE_SIZE: 0x8214,
    FRAMEBUFFER_ATTACHMENT_ALPHA_SIZE: 0x8215,
    FRAMEBUFFER_ATTACHMENT_DEPTH_SIZE: 0x8216,
    FRAMEBUFFER_ATTACHMENT_STENCIL_SIZE: 0x8217,
    FRAMEBUFFER_DEFAULT: 0x8218,
    UNSIGNED_INT_24_8: 0x84FA,
    DEPTH24_STENCIL8: 0x88F0,
    UNSIGNED_NORMALIZED: 0x8C17,
    DRAW_FRAMEBUFFER_BINDING: 0x8CA6,
    READ_FRAMEBUFFER: 0x8CA8,
    DRAW_FRAMEBUFFER: 0x8CA9,
    READ_FRAMEBUFFER_BINDING: 0x8CAA,
    RENDERBUFFER_SAMPLES: 0x8CAB,
    FRAMEBUFFER_ATTACHMENT_TEXTURE_LAYER: 0x8CD4,
    MAX_COLOR_ATTACHMENTS: 0x8CDF,
    COLOR_ATTACHMENT1: 0x8CE1,
    COLOR_ATTACHMENT2: 0x8CE2,
    COLOR_ATTACHMENT3: 0x8CE3,
    COLOR_ATTACHMENT4: 0x8CE4,
    COLOR_ATTACHMENT5: 0x8CE5,
    COLOR_ATTACHMENT6: 0x8CE6,
    COLOR_ATTACHMENT7: 0x8CE7,
    COLOR_ATTACHMENT8: 0x8CE8,
    COLOR_ATTACHMENT9: 0x8CE9,
    COLOR_ATTACHMENT10: 0x8CEA,
    COLOR_ATTACHMENT11: 0x8CEB,
    COLOR_ATTACHMENT12: 0x8CEC,
    COLOR_ATTACHMENT13: 0x8CED,
    COLOR_ATTACHMENT14: 0x8CEE,
    COLOR_ATTACHMENT15: 0x8CEF,
    FRAMEBUFFER_INCOMPLETE_MULTISAMPLE: 0x8D56,
    MAX_SAMPLES: 0x8D57,
    HALF_FLOAT: 0x140B,
    RG: 0x8227,
    RG_INTEGER: 0x8228,
    R8: 0x8229,
    RG8: 0x822B,
    R16F: 0x822D,
    R32F: 0x822E,
    RG16F: 0x822F,
    RG32F: 0x8230,
    R8I: 0x8231,
    R8UI: 0x8232,
    R16I: 0x8233,
    R16UI: 0x8234,
    R32I: 0x8235,
    R32UI: 0x8236,
    RG8I: 0x8237,
    RG8UI: 0x8238,
    RG16I: 0x8239,
    RG16UI: 0x823A,
    RG32I: 0x823B,
    RG32UI: 0x823C,
    VERTEX_ARRAY_BINDING: 0x85B5,
    R8_SNORM: 0x8F94,
    RG8_SNORM: 0x8F95,
    RGB8_SNORM: 0x8F96,
    RGBA8_SNORM: 0x8F97,
    SIGNED_NORMALIZED: 0x8F9C,
    COPY_READ_BUFFER: 0x8F36,
    COPY_WRITE_BUFFER: 0x8F37,
    COPY_READ_BUFFER_BINDING: 0x8F36,
    COPY_WRITE_BUFFER_BINDING: 0x8F37,
    UNIFORM_BUFFER: 0x8A11,
    UNIFORM_BUFFER_BINDING: 0x8A28,
    UNIFORM_BUFFER_START: 0x8A29,
    UNIFORM_BUFFER_SIZE: 0x8A2A,
    MAX_VERTEX_UNIFORM_BLOCKS: 0x8A2B,
    MAX_FRAGMENT_UNIFORM_BLOCKS: 0x8A2D,
    MAX_COMBINED_UNIFORM_BLOCKS: 0x8A2E,
    MAX_UNIFORM_BUFFER_BINDINGS: 0x8A2F,
    MAX_UNIFORM_BLOCK_SIZE: 0x8A30,
    MAX_COMBINED_VERTEX_UNIFORM_COMPONENTS: 0x8A31,
    MAX_COMBINED_FRAGMENT_UNIFORM_COMPONENTS: 0x8A33,
    UNIFORM_BUFFER_OFFSET_ALIGNMENT: 0x8A34,
    ACTIVE_UNIFORM_BLOCKS: 0x8A36,
    UNIFORM_TYPE: 0x8A37,
    UNIFORM_SIZE: 0x8A38,
    UNIFORM_BLOCK_INDEX: 0x8A3A,
    UNIFORM_OFFSET: 0x8A3B,
    UNIFORM_ARRAY_STRIDE: 0x8A3C,
    UNIFORM_MATRIX_STRIDE: 0x8A3D,
    UNIFORM_IS_ROW_MAJOR: 0x8A3E,
    UNIFORM_BLOCK_BINDING: 0x8A3F,
    UNIFORM_BLOCK_DATA_SIZE: 0x8A40,
    UNIFORM_BLOCK_ACTIVE_UNIFORMS: 0x8A42,
    UNIFORM_BLOCK_ACTIVE_UNIFORM_INDICES: 0x8A43,
    UNIFORM_BLOCK_REFERENCED_BY_VERTEX_SHADER: 0x8A44,
    UNIFORM_BLOCK_REFERENCED_BY_FRAGMENT_SHADER: 0x8A46,
    INVALID_INDEX: 0xFFFFFFFF,
    MAX_VERTEX_OUTPUT_COMPONENTS: 0x9122,
    MAX_FRAGMENT_INPUT_COMPONENTS: 0x9125,
    MAX_SERVER_WAIT_TIMEOUT: 0x9111,
    OBJECT_TYPE: 0x9112,
    SYNC_CONDITION: 0x9113,
    SYNC_STATUS: 0x9114,
    SYNC_FLAGS: 0x9115,
    SYNC_FENCE: 0x9116,
    SYNC_GPU_COMMANDS_COMPLETE: 0x9117,
    UNSIGNALED: 0x9118,
    SIGNALED: 0x9119,
    ALREADY_SIGNALED: 0x911A,
    TIMEOUT_EXPIRED: 0x911B,
    CONDITION_SATISFIED: 0x911C,
    WAIT_FAILED: 0x911D,
    SYNC_FLUSH_COMMANDS_BIT: 0x00000001,
    VERTEX_ATTRIB_ARRAY_DIVISOR: 0x88FE,
    ANY_SAMPLES_PASSED: 0x8C2F,
    ANY_SAMPLES_PASSED_CONSERVATIVE: 0x8D6A,
    SAMPLER_BINDING: 0x8919,
    RGB10_A2UI: 0x906F,
    INT_2_10_10_10_REV: 0x8D9F,
    TRANSFORM_FEEDBACK: 0x8E22,
    TRANSFORM_FEEDBACK_PAUSED: 0x8E23,
    TRANSFORM_FEEDBACK_ACTIVE: 0x8E24,
    TRANSFORM_FEEDBACK_BINDING: 0x8E25,
    TEXTURE_IMMUTABLE_FORMAT: 0x912F,
    MAX_ELEMENT_INDEX: 0x8D6B,
    TEXTURE_IMMUTABLE_LEVELS: 0x82DF,
    TIMEOUT_IGNORED: -1,
    MAX_CLIENT_WAIT_TIMEOUT_WEBGL: 0x9247,

    // https://www.khronos.org/registry/webgl/extensions/EXT_disjoint_timer_query_webgl2/
    QUERY_COUNTER_BITS_EXT: 0x8864,
    TIME_ELAPSED_EXT: 0x88BF,
    TIMESTAMP_EXT: 0x8E28,
    GPU_DISJOINT_EXT: 0x8FBB,

    // https://www.khronos.org/registry/webgl/extensions/EXT_texture_filter_anisotropic/
    TEXTURE_MAX_ANISOTROPY_EXT: 0x84FE,
    MAX_TEXTURE_MAX_ANISOTROPY_EXT: 0x84FF,

    // https://www.khronos.org/registry/webgl/extensions/WEBGL_debug_renderer_info/
    UNMASKED_VENDOR_WEBGL: 0x9245,
    UNMASKED_RENDERER_WEBGL: 0x9246,

    // https://www.khronos.org/registry/webgl/extensions/KHR_parallel_shader_compile/
    COMPLETION_STATUS_KHR: 0x91B1,

    // https://www.khronos.org/registry/webgl/extensions/WEBGL_compressed_texture_s3tc/
    COMPRESSED_RGB_S3TC_DXT1_EXT: 0x83F0,
    COMPRESSED_RGBA_S3TC_DXT1_EXT: 0x83F1,
    COMPRESSED_RGBA_S3TC_DXT3_EXT: 0x83F2,
    COMPRESSED_RGBA_S3TC_DXT5_EXT: 0x83F3,

    // https://www.khronos.org/registry/webgl/extensions/WEBGL_compressed_texture_s3tc_srgb/
    COMPRESSED_SRGB_S3TC_DXT1_EXT: 0x8C4C,
    COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT: 0x8C4D,
    COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT: 0x8C4E,
    COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT: 0x8C4F,

    // https://www.khronos.org/registry/webgl/extensions/WEBGL_compressed_texture_etc/
    COMPRESSED_R11_EAC: 0x9270,
    COMPRESSED_SIGNED_R11_EAC: 0x9271,
    COMPRESSED_RG11_EAC: 0x9272,
    COMPRESSED_SIGNED_RG11_EAC: 0x9273,
    COMPRESSED_RGB8_ETC2: 0x9274,
    COMPRESSED_SRGB8_ETC2: 0x9275,
    COMPRESSED_RGB8_PUNCHTHROUGH_ALPHA1_ETC2: 0x9276,
    COMPRESSED_SRGB8_PUNCHTHROUGH_ALPHA1_ETC2: 0x9277,
    COMPRESSED_RGBA8_ETC2_EAC: 0x9278,
    COMPRESSED_SRGB8_ALPHA8_ETC2_EAC: 0x9279,

    // https://www.khronos.org/registry/webgl/extensions/WEBGL_compressed_texture_pvrtc/
    COMPRESSED_RGB_PVRTC_4BPPV1_IMG: 0x8C00,
    COMPRESSED_RGB_PVRTC_2BPPV1_IMG: 0x8C01,
    COMPRESSED_RGBA_PVRTC_4BPPV1_IMG: 0x8C02,
    COMPRESSED_RGBA_PVRTC_2BPPV1_IMG: 0x8C03,

    // https://www.khronos.org/registry/webgl/extensions/WEBGL_compressed_texture_astc/
    COMPRESSED_RGBA_ASTC_4x4_KHR: 0x93B0,
    COMPRESSED_RGBA_ASTC_5x4_KHR: 0x93B1,
    COMPRESSED_RGBA_ASTC_5x5_KHR: 0x93B2,
    COMPRESSED_RGBA_ASTC_6x5_KHR: 0x93B3,
    COMPRESSED_RGBA_ASTC_6x6_KHR: 0x93B4,
    COMPRESSED_RGBA_ASTC_8x5_KHR: 0x93B5,
    COMPRESSED_RGBA_ASTC_8x6_KHR: 0x93B6,
    COMPRESSED_RGBA_ASTC_8x8_KHR: 0x93B7,
    COMPRESSED_RGBA_ASTC_10x5_KHR: 0x93B8,
    COMPRESSED_RGBA_ASTC_10x6_KHR: 0x93B9,
    COMPRESSED_RGBA_ASTC_10x8_KHR: 0x93BA,
    COMPRESSED_RGBA_ASTC_10x10_KHR: 0x93BB,
    COMPRESSED_RGBA_ASTC_12x10_KHR: 0x93BC,
    COMPRESSED_RGBA_ASTC_12x12_KHR: 0x93BD,
    COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR: 0x93D0,
    COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR: 0x93D1,
    COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR: 0x93D2,
    COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR: 0x93D3,
    COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR: 0x93D4,
    COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR: 0x93D5,
    COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR: 0x93D6,
    COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR: 0x93D7,
    COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR: 0x93D8,
    COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR: 0x93D9,
    COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR: 0x93DA,
    COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR: 0x93DB,
    COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR: 0x93DC,
    COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR: 0x93DD
};


const TYPE_SIZE = {
    [GL.BYTE]: 1,
    [GL.UNSIGNED_BYTE]: 1,
    [GL.SHORT]: 2,
    [GL.UNSIGNED_SHORT]: 2,
    [GL.INT]: 4,
    [GL.UNSIGNED_INT]: 4,
    [GL.FLOAT]: 4
};

// Internal format => [format, type]
const TEXTURE_FORMATS = {
    [GL.R8]: [ GL.RED, GL.UNSIGNED_BYTE ],
    [GL.R8_SNORM]: [ GL.RED, GL.BYTE ],
    [GL.R16F]: [ GL.RED, GL.FLOAT ],
    [GL.R32F]: [ GL.RED, GL.FLOAT ],
    [GL.R8UI]: [ GL.RED_INTEGER, GL.UNSIGNED_BYTE ],
    [GL.R8I]: [ GL.RED_INTEGER, GL.BYTE ],
    [GL.R16UI]: [ GL.RED_INTEGER, GL.UNSIGNED_SHORT ],
    [GL.R16I]: [ GL.RED_INTEGER, GL.SHORT ],
    [GL.R32UI]: [ GL.RED_INTEGER, GL.UNSIGNED_INT ],
    [GL.R32I]: [ GL.RED_INTEGER, GL.INT ],
    [GL.RG8]: [ GL.RG, GL.UNSIGNED_BYTE ],
    [GL.RG8_SNORM]: [ GL.RG, GL.BYTE ],
    [GL.RG16F]: [ GL.RG, GL.FLOAT ],
    [GL.RG32F]: [ GL.RG, GL.FLOAT ],
    [GL.RG8UI]: [ GL.RG_INTEGER, GL.UNSIGNED_BYTE ],
    [GL.RG8I]: [ GL.RG_INTEGER, GL.BYTE ],
    [GL.RG16UI]: [ GL.RG_INTEGER, GL.UNSIGNED_SHORT ],
    [GL.RG16I]: [ GL.RG_INTEGER, GL.SHORT ],
    [GL.RG32UI]: [ GL.RG_INTEGER, GL.UNSIGNED_INT ],
    [GL.RG32I]: [ GL.RG_INTEGER, GL.INT ],
    [GL.RGB8]: [ GL.RGB, GL.UNSIGNED_BYTE ],
    [GL.SRGB8]: [ GL.RGB, GL.UNSIGNED_BYTE ],
    [GL.RGB565]: [ GL.RGB, GL.UNSIGNED_SHORT_5_6_5 ],
    [GL.RGB8_SNORM]: [ GL.RGB, GL.BYTE ],
    [GL.R11F_G11F_B10F]: [ GL.RGB, GL.UNSIGNED_INT_10F_11F_11F_REV ],
    [GL.RGB9_E5]: [ GL.RGB, GL.UNSIGNED_INT_5_9_9_9_REV ],
    [GL.RGB16F]: [ GL.RGB, GL.FLOAT ],
    [GL.RGB32F]: [ GL.RGB, GL.FLOAT ],
    [GL.RGB8UI]: [ GL.RGB_INTEGER, GL.UNSIGNED_BYTE ],
    [GL.RGB8I]: [ GL.RGB_INTEGER, GL.BYTE ],
    [GL.RGB16UI]: [ GL.RGB_INTEGER, GL.UNSIGNED_SHORT ],
    [GL.RGB16I]: [ GL.RGB_INTEGER, GL.SHORT ],
    [GL.RGB32UI]: [ GL.RGB_INTEGER, GL.UNSIGNED_INT ],
    [GL.RGB32I]: [ GL.RGB_INTEGER, GL.INT ],
    [GL.RGBA8]: [ GL.RGBA, GL.UNSIGNED_BYTE ],
    [GL.SRGB8_ALPHA8]: [ GL.RGBA, GL.UNSIGNED_BYTE ],
    [GL.RGBA8_SNORM]: [ GL.RGBA, GL.BYTE ],
    [GL.RGB5_A1]: [ GL.RGBA, GL.UNSIGNED_SHORT_5_5_5_1 ],
    [GL.RGBA4]: [ GL.RGBA, GL.UNSIGNED_SHORT_4_4_4_4 ],
    [GL.RGB10_A2]: [ GL.RGBA, GL.UNSIGNED_INT_2_10_10_10_REV ],
    [GL.RGBA16F]: [ GL.RGBA, GL.FLOAT ],
    [GL.RGBA32F]: [ GL.RGBA, GL.FLOAT ],
    [GL.RGBA8UI]: [ GL.RGBA_INTEGER, GL.UNSIGNED_BYTE ],
    [GL.RGBA8I]: [ GL.RGBA_INTEGER, GL.BYTE ],
    [GL.RGB10_A2UI]: [ GL.RGBA_INTEGER, GL.UNSIGNED_INT_2_10_10_10_REV ],
    [GL.RGBA16UI]: [ GL.RGBA_INTEGER, GL.UNSIGNED_SHORT ],
    [GL.RGBA16I]: [ GL.RGBA_INTEGER, GL.SHORT ],
    [GL.RGBA32I]: [ GL.RGBA_INTEGER, GL.INT ],
    [GL.RGBA32UI]: [ GL.RGBA_INTEGER, GL.UNSIGNED_INT ],
    [GL.DEPTH_COMPONENT16]: [ GL.DEPTH_COMPONENT, GL.UNSIGNED_SHORT ],
    [GL.DEPTH_COMPONENT24]: [ GL.DEPTH_COMPONENT, GL.UNSIGNED_INT ],
    [GL.DEPTH_COMPONENT32F]: [ GL.DEPTH_COMPONENT, GL.FLOAT ],
    [GL.DEPTH24_STENCIL8]: [ GL.DEPTH_STENCIL, GL.UNSIGNED_INT_24_8 ],
    [GL.DEPTH32F_STENCIL8]: [ GL.DEPTH_STENCIL, GL.FLOAT_32_UNSIGNED_INT_24_8_REV ]
};

const COMPRESSED_TEXTURE_TYPES = {
    [GL.COMPRESSED_RGB_S3TC_DXT1_EXT]: true,
    [GL.COMPRESSED_RGBA_S3TC_DXT1_EXT]: true,
    [GL.COMPRESSED_RGBA_S3TC_DXT3_EXT]: true,
    [GL.COMPRESSED_RGBA_S3TC_DXT5_EXT]: true,
    [GL.COMPRESSED_SRGB_S3TC_DXT1_EXT]: true,
    [GL.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT]: true,
    [GL.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT]: true,
    [GL.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT]: true,
    [GL.COMPRESSED_R11_EAC]: true,
    [GL.COMPRESSED_SIGNED_R11_EAC]: true,
    [GL.COMPRESSED_RG11_EAC]: true,
    [GL.COMPRESSED_SIGNED_RG11_EAC]: true,
    [GL.COMPRESSED_RGB8_ETC2]: true,
    [GL.COMPRESSED_SRGB8_ETC2]: true,
    [GL.COMPRESSED_RGB8_PUNCHTHROUGH_ALPHA1_ETC2]: true,
    [GL.COMPRESSED_SRGB8_PUNCHTHROUGH_ALPHA1_ETC2]: true,
    [GL.COMPRESSED_RGBA8_ETC2_EAC]: true,
    [GL.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC]: true,
    [GL.COMPRESSED_RGBA_ASTC_4x4_KHR]: true,
    [GL.COMPRESSED_RGBA_ASTC_5x4_KHR]: true,
    [GL.COMPRESSED_RGBA_ASTC_5x5_KHR]: true,
    [GL.COMPRESSED_RGBA_ASTC_6x5_KHR]: true,
    [GL.COMPRESSED_RGBA_ASTC_6x6_KHR]: true,
    [GL.COMPRESSED_RGBA_ASTC_8x5_KHR]: true,
    [GL.COMPRESSED_RGBA_ASTC_8x6_KHR]: true,
    [GL.COMPRESSED_RGBA_ASTC_8x8_KHR]: true,
    [GL.COMPRESSED_RGBA_ASTC_10x5_KHR]: true,
    [GL.COMPRESSED_RGBA_ASTC_10x6_KHR]: true,
    [GL.COMPRESSED_RGBA_ASTC_10x8_KHR]: true,
    [GL.COMPRESSED_RGBA_ASTC_10x10_KHR]: true,
    [GL.COMPRESSED_RGBA_ASTC_12x10_KHR]: true,
    [GL.COMPRESSED_RGBA_ASTC_12x12_KHR]: true,
    [GL.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR]: true,
    [GL.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR]: true,
    [GL.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR]: true,
    [GL.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR]: true,
    [GL.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR]: true,
    [GL.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR]: true,
    [GL.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR]: true,
    [GL.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR]: true,
    [GL.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR]: true,
    [GL.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR]: true,
    [GL.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR]: true,
    [GL.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR]: true,
    [GL.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR]: true,
    [GL.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR]: true,
    [GL.COMPRESSED_RGB_PVRTC_4BPPV1_IMG]: true,
    [GL.COMPRESSED_RGB_PVRTC_2BPPV1_IMG]: true,
    [GL.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG]: true,
    [GL.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG]: true
};

const WEBGL_INFO = {};

const DUMMY_UNIT_ARRAY = new Array(1);

const DUMMY_OBJECT = {};

// DEPRECATED
const TEXTURE_FORMAT_DEFAULTS = {
    [GL.UNSIGNED_BYTE]: {
        [GL.RED]: GL.R8,
        [GL.RG]: GL.RG8,
        [GL.RGB]: GL.RGB8,
        [GL.RGBA]: GL.RGBA8
    },

    [GL.UNSIGNED_SHORT]: {
        [GL.DEPTH_COMPONENT]: GL.DEPTH_COMPONENT16
    },

    [GL.FLOAT]: {
        [GL.RED]: GL.R16F,
        [GL.RG]: GL.RG16F,
        [GL.RGB]: GL.RGB16F,
        [GL.RGBA]: GL.RGBA16F,
        [GL.DEPTH_COMPONENT]: GL.DEPTH_COMPONENT32F
    }
};

///////////////////////////////////////////////////////////////////////////////////
// The MIT License (MIT)
//
// Copyright (c) 2017 Tarek Sherif
//
// Permission is hereby granted, free of charge, to any person obtaining a copy of
// this software and associated documentation files (the "Software"), to deal in
// the Software without restriction, including without limitation the rights to
// use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of
// the Software, and to permit persons to whom the Software is furnished to do so,
// subject to the following conditions:
//
// The above copyright notice and this permission notice shall be included in all
// copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
// FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
// COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
// IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
// CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
///////////////////////////////////////////////////////////////////////////////////


/**
    Cubemap for environment mapping.

    @class
    @prop {WebGLRenderingContext} gl The WebGL context.
    @prop {WebGLTexture} texture Handle to the texture.
    @prop {GLEnum} type Type of data stored in the texture.
    @prop {GLEnum} format Layout of texture data.
    @prop {GLEnum} internalFormat Internal arrangement of the texture data.
    @prop {Number} currentUnit The current texture unit this cubemap is bound to.
    @prop {boolean} flipY Whether the y-axis is flipped for this cubemap.
    @prop {boolean} premultiplyAlpha Whether alpha should be pre-multiplied when loading this cubemap.
    @prop {Object} appState Tracked GL state.
*/
class Cubemap {

    constructor(gl, appState, options) {

        this.gl = gl;
        this.texture = null;
        this.appState = appState;

        this.compressed = COMPRESSED_TEXTURE_TYPES[options.internalFormat];
        
        if (options.format !== undefined) {
            console.warn("Cubemap option 'format' is deprecated and will be removed. Use 'internalFormat' with a sized format instead.");
            this.compressed = Boolean(COMPRESSED_TEXTURE_TYPES[options.format]);
            if (options.type === undefined) {
                options.type = options.format === GL.DEPTH_COMPONENT ? GL.UNSIGNED_SHORT : GL.UNSIGNED_BYTE;
            }
            if (options.internalFormat === undefined) {
                if (this.compressed) {
                    options.internalFormat = options.format;
                } else {
                    options.internalFormat = TEXTURE_FORMAT_DEFAULTS[options.type][options.format];
                }
            }
        }

        if (this.compressed) {
            // For compressed textures, just need to provide one of format, internalFormat.
            // The other will be the same.
            this.internalFormat = options.internalFormat;
            this.format = options.internalFormat;
            this.type = GL.UNSIGNED_BYTE;
        } else {
            this.internalFormat = options.internalFormat !== undefined ? options.internalFormat : GL.RGBA8;

            let formatInfo = TEXTURE_FORMATS[this.internalFormat];
            this.format = formatInfo[0];
            this.type = options.type !== undefined ? options.type : formatInfo[1];
        }
        
        // -1 indicates unbound
        this.currentUnit = -1;

        let arrayData = Array.isArray(options.negX);
        let negX = arrayData ? options.negX[0] : options.negX;

        let {
            width = negX.width,
            height = negX.height,
            flipY = false,
            premultiplyAlpha = false,
            minFilter = negX ? GL.LINEAR_MIPMAP_NEAREST : GL.NEAREST,
            magFilter = negX ? GL.LINEAR : GL.NEAREST,
            wrapS = GL.REPEAT,
            wrapT = GL.REPEAT,
            compareMode = GL.NONE,
            compareFunc = GL.LEQUAL,
            minLOD = null,
            maxLOD = null,
            baseLevel = null,
            maxLevel = null,
            maxAnisotropy = 1
        } = options;
        
        this.width = width;
        this.height = height;
        this.flipY = flipY;
        this.premultiplyAlpha = premultiplyAlpha;
        this.minFilter = minFilter;
        this.magFilter = magFilter;
        this.wrapS = wrapS;
        this.wrapT = wrapT;
        this.compareMode = compareMode;
        this.compareFunc = compareFunc;
        this.minLOD = minLOD;
        this.maxLOD = maxLOD;
        this.baseLevel = baseLevel;
        this.maxLevel = maxLevel;
        this.maxAnisotropy = Math.min(maxAnisotropy, WEBGL_INFO.MAX_TEXTURE_ANISOTROPY);
        this.mipmaps = (minFilter === GL.LINEAR_MIPMAP_NEAREST || minFilter === GL.LINEAR_MIPMAP_LINEAR);
        this.miplevelsProvided = arrayData && options.negX.length > 1;
        this.levels = this.mipmaps ? Math.floor(Math.log2(Math.min(this.width, this.height))) + 1 : 1;

        this.restore(options);
    }

    /**
        Restore cubemap after context loss.

        @method
        @param {Object} [options] Texture options.
        @param {DOMElement|ArrayBufferView} [options.negX] The image data for the negative X direction.
                Can be any format that would be accepted by texImage2D.
        @param {DOMElement|ArrayBufferView} [options.posX] The image data for the positive X direction.
                Can be any format that would be accepted by texImage2D.
        @param {DOMElement|ArrayBufferView} [options.negY] The image data for the negative Y direction.
                Can be any format that would be accepted by texImage2D.
        @param {DOMElement|ArrayBufferView} [options.posY] The image data for the positive Y direction.
                Can be any format that would be accepted by texImage2D.
        @param {DOMElement|ArrayBufferView} [options.negZ] The image data for the negative Z direction.
                Can be any format that would be accepted by texImage2D.
        @param {DOMElement|ArrayBufferView} [options.posZ] The image data for the positive Z direction.
                Can be any format that would be accepted by texImage2D.
        @return {Cubemap} The Cubemap object.
    */
    restore(options = DUMMY_OBJECT) {
        this.texture = this.gl.createTexture();

        if (this.currentUnit !== -1) {
            this.appState.textures[this.currentUnit] = null;
        }

        this.bind(0);
        this.gl.pixelStorei(GL.UNPACK_FLIP_Y_WEBGL, this.flipY);
        this.gl.pixelStorei(GL.UNPACK_PREMULTIPLY_ALPHA_WEBGL, this.premultiplyAlpha);
        this.gl.texParameteri(GL.TEXTURE_CUBE_MAP, GL.TEXTURE_MAG_FILTER, this.magFilter);
        this.gl.texParameteri(GL.TEXTURE_CUBE_MAP, GL.TEXTURE_MIN_FILTER, this.minFilter);
        this.gl.texParameteri(GL.TEXTURE_CUBE_MAP, GL.TEXTURE_WRAP_S, this.wrapS);
        this.gl.texParameteri(GL.TEXTURE_CUBE_MAP, GL.TEXTURE_WRAP_T, this.wrapT);
        this.gl.texParameteri(GL.TEXTURE_CUBE_MAP, GL.TEXTURE_COMPARE_FUNC, this.compareFunc);
        this.gl.texParameteri(GL.TEXTURE_CUBE_MAP, GL.TEXTURE_COMPARE_MODE, this.compareMode);
        
        if (this.baseLevel !== null) {
            this.gl.texParameteri(GL.TEXTURE_CUBE_MAP, GL.TEXTURE_BASE_LEVEL, this.baseLevel);
        }
        
        if (this.maxLevel !== null) {
            this.gl.texParameteri(GL.TEXTURE_CUBE_MAP, GL.TEXTURE_MAX_LEVEL, this.maxLevel);
        }
        
        if (this.minLOD !== null) {
            this.gl.texParameteri(GL.TEXTURE_CUBE_MAP, GL.TEXTURE_MIN_LOD, this.minLOD);
        }
        
        if (this.maxLOD !== null) {
            this.gl.texParameteri(GL.TEXTURE_CUBE_MAP, GL.TEXTURE_MAX_LOD, this.maxLOD);
        }

        if (this.maxAnisotropy > 1) {
            this.gl.texParameteri(GL.TEXTURE_CUBE_MAP, GL.TEXTURE_MAX_ANISOTROPY_EXT, this.maxAnisotropy);
        }

        this.gl.texStorage2D(GL.TEXTURE_CUBE_MAP, this.levels, this.internalFormat, this.width, this.height);

        let { negX, posX, negY, posY, negZ, posZ } = options;

        if (negX) {
            this.faceData(GL.TEXTURE_CUBE_MAP_NEGATIVE_X, negX);
            this.faceData(GL.TEXTURE_CUBE_MAP_POSITIVE_X, posX);
            this.faceData(GL.TEXTURE_CUBE_MAP_NEGATIVE_Y, negY);
            this.faceData(GL.TEXTURE_CUBE_MAP_POSITIVE_Y, posY);
            this.faceData(GL.TEXTURE_CUBE_MAP_NEGATIVE_Z, negZ);
            this.faceData(GL.TEXTURE_CUBE_MAP_POSITIVE_Z, posZ);
        }

        if (this.mipmaps && !this.miplevelsProvided) {
            this.gl.generateMipmap(GL.TEXTURE_CUBE_MAP);
        }

        return this;
    }

    /**
        Delete this cubemap.

        @method
        @return {Cubemap} The Cubemap object.
    */
    delete() {
        if (this.texture) {
            this.gl.deleteTexture(this.texture);
            this.texture = null;
            this.appState.textures[this.currentUnit] = null;
            this.currentUnit = -1;
        }

        return this;
    }

    // Input data for one cubemap face.
    faceData(face, data) {
        if (!Array.isArray(data)) {
            DUMMY_UNIT_ARRAY[0] = data;
            data = DUMMY_UNIT_ARRAY;
        }

        let numLevels = this.mipmaps ? data.length : 1;
        let width = this.width;
        let height = this.height;
        let i;

        if (this.compressed) {
            for (i = 0; i < numLevels; ++i) {
                this.gl.compressedTexSubImage2D(face, i, 0, 0, width, height, this.format, data[i]);
                width = Math.max(width >> 1, 1);
                height = Math.max(height >> 1, 1);
            }
        } else {
            for (i = 0; i < numLevels; ++i) {
                this.gl.texSubImage2D(face, i, 0, 0, width, height, this.format, this.type, data[i]);
                width = Math.max(width >> 1, 1);
                height = Math.max(height >> 1, 1);
            }
        }

        return this;
    }

    // Bind this cubemap to a texture unit.
    bind(unit) {
        let currentTexture = this.appState.textures[unit];
        
        if (currentTexture !== this) {
            if (currentTexture) {
                currentTexture.currentUnit = -1;
            }

            if (this.currentUnit !== -1) {
                this.appState.textures[this.currentUnit] = null;
            }

            this.gl.activeTexture(GL.TEXTURE0 + unit);
            this.gl.bindTexture(GL.TEXTURE_CUBE_MAP, this.texture);

            this.appState.textures[unit] = this;
            this.currentUnit = unit;
        }

        return this;
    }

}

///////////////////////////////////////////////////////////////////////////////////
// The MIT License (MIT)
//
// Copyright (c) 2017 Tarek Sherif
//
// Permission is hereby granted, free of charge, to any person obtaining a copy of
// this software and associated documentation files (the "Software"), to deal in
// the Software without restriction, including without limitation the rights to
// use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of
// the Software, and to permit persons to whom the Software is furnished to do so,
// subject to the following conditions:
//
// The above copyright notice and this permission notice shall be included in all
// copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
// FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
// COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
// IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
// CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
///////////////////////////////////////////////////////////////////////////////////


/**
    A DrawCall represents the program and values of associated
    attributes, uniforms and textures for a single draw call.

    @class
    @prop {WebGLRenderingContext} gl The WebGL context.
    @prop {Program} currentProgram The program to use for this draw call.
    @prop {VertexArray} currentVertexArray Vertex array to use for this draw call.
    @prop {TransformFeedback} currentTransformFeedback Transform feedback to use for this draw call.
    @prop {Array} uniformBuffers Ordered list of active uniform buffers.
    @prop {Array} uniformBlockNames Ordered list of uniform block names.
    @prop {Number} uniformBlockCount Number of active uniform blocks for this draw call.
    @prop {Object} uniformIndices Map of uniform names to indices in the uniform arrays.
    @prop {Array} uniformNames Ordered list of uniform names.
    @prop {Array} uniformValue Ordered list of uniform values.
    @prop {number} uniformCount The number of active uniforms for this draw call.
    @prop {Array} textures Array of active textures.
    @prop {number} textureCount The number of active textures for this draw call.
    @prop {GLEnum} primitive The primitive type being drawn.
    @prop {Object} appState Tracked GL state.
    @prop {GLsizei} numElements The number of element to draw.
    @prop {GLsizei} numInstances The number of instances to draw.
*/
class DrawCall {

    constructor(gl, appState, program, vertexArray = null, primitive) {
        this.gl = gl;
        this.currentProgram = program;
        this.drawPrimitive = GL.TRIANGLES;
        this.currentVertexArray = vertexArray;
        this.currentTransformFeedback = null;
        this.appState = appState;

        this.uniformIndices = {};
        this.uniformNames = new Array(WEBGL_INFO.MAX_UNIFORMS);
        this.uniformValues = new Array(WEBGL_INFO.MAX_UNIFORMS);
        this.uniformCount = 0;
        this.uniformBuffers = new Array(WEBGL_INFO.MAX_UNIFORM_BUFFERS);
        this.uniformBlockNames = new Array(WEBGL_INFO.MAX_UNIFORM_BUFFERS);
        this.uniformBlockCount = 0;
        this.textures = new Array(WEBGL_INFO.MAX_TEXTURE_UNITS);
        this.textureCount = 0;

        this.offsets = new Int32Array(1);
        this.numElements = new Int32Array(1);
        this.numInstances = new Int32Array(1);

        if (this.currentVertexArray) {
            this.numElements[0] = this.currentVertexArray.numElements;
            this.numInstances[0] = this.currentVertexArray.numInstances;
        }

        this.numDraws = 1;

        if (primitive !== undefined) {
            console.warn("Primitive argument to 'App.createDrawCall' is deprecated and will be removed. Use 'DrawCall.primitive' instead.");
            this.primitive(primitive);
        }
    }

    /**
        Set the current draw primitive for this draw call.

        @method
        @param {GLEnum} primitive Primitive to draw.
        @return {DrawCall} The DrawCall object.
    */
    primitive(primitive) {
        this.drawPrimitive = primitive;

        return this;
    }

    /**
        Set the current TransformFeedback object for draw.

        @method
        @param {TransformFeedback} transformFeedback Transform Feedback to set.
        @return {DrawCall} The DrawCall object.
    */
    transformFeedback(transformFeedback) {
        this.currentTransformFeedback = transformFeedback;

        return this;
    }

    /**
        Set the value for a uniform. Array uniforms are supported by
        using appending "[0]" to the array name and passing a flat array
        with all required values.

        @method
        @param {string} name Uniform name.
        @param {any} value Uniform value.
        @return {DrawCall} The DrawCall object.
    */
    uniform(name, value) {
        let index = this.uniformIndices[name];
        if (index === undefined) {
            index = this.uniformCount++;
            this.uniformIndices[name] = index;
            this.uniformNames[index] = name;
        }
        this.uniformValues[index] = value;

        return this;
    }

    /**
        Set texture to bind to a sampler uniform.

        @method
        @param {string} name Sampler uniform name.
        @param {Texture|Cubemap} texture Texture or Cubemap to bind.
        @return {DrawCall} The DrawCall object.
    */
    texture(name, texture) {
        let unit = this.currentProgram.samplers[name];
        this.textures[unit] = texture;

        return this;
    }

    /**
        Set uniform buffer to bind to a uniform block.

        @method
        @param {string} name Uniform block name.
        @param {UniformBuffer} buffer Uniform buffer to bind.
        @return {DrawCall} The DrawCall object.
    */
    uniformBlock(name, buffer) {
        let base = this.currentProgram.uniformBlocks[name];
        this.uniformBuffers[base] = buffer;

        return this;
    }

    /**
        Ranges in the vertex array to draw. Multiple arguments can be provided to set up
        a multi-draw.

        @method
        @param {...Array} counts Variable number of 2 or 3 element arrays, each containing:
            <ul>
                <li> (Number) Number of elements to skip at the start of the array.
                <li> (Number) Number of elements to draw.
                <li> (Number - optional) Number of instances to draw of the given range.
            </ul>
        @return {DrawCall} The DrawCall object.
    */
    drawRanges(...counts) {
        this.numDraws = counts.length;

        if (this.offsets.length < this.numDraws) {
            this.offsets = new Int32Array(this.numDraws);
        }

        if (this.numElements.length < this.numDraws) {
            this.numElements = new Int32Array(this.numDraws);
        }

        if (this.numInstances.length < this.numDraws) {
            this.numInstances = new Int32Array(this.numDraws);
        }

        for (let i = 0; i < this.numDraws; ++i) {
            let count = counts[i];

            this.offsets[i] = count[0];
            this.numElements[i] = count[1];
            this.numInstances[i] = count[2] || 1;
        }

        return this;
    }

    /**
        Draw based on current state.

        @method
        @return {DrawCall} The DrawCall object.
    */
    draw() {
        let uniformNames = this.uniformNames;
        let uniformValues = this.uniformValues;
        let uniformBuffers = this.uniformBuffers;
        let uniformBlockCount = this.currentProgram.uniformBlockCount;
        let textures = this.textures;
        let textureCount = this.currentProgram.samplerCount;
        let indexed = false;

        this.currentProgram.bind();

        if (this.currentVertexArray) {
            this.currentVertexArray.bind();
            indexed = this.currentVertexArray.indexed;
        }

        for (let uIndex = 0; uIndex < this.uniformCount; ++uIndex) {
            this.currentProgram.uniform(uniformNames[uIndex], uniformValues[uIndex]);
        }

        for (let base = 0; base < uniformBlockCount; ++base) {
            uniformBuffers[base].bind(base);
        }

        for (let tIndex = 0; tIndex < textureCount; ++tIndex) {
            textures[tIndex].bind(tIndex);
        }

        if (this.currentTransformFeedback) {
            this.currentTransformFeedback.bind();
            this.gl.beginTransformFeedback(this.drawPrimitive);
        } else if (this.appState.transformFeedback) {
            this.gl.bindTransformFeedback(GL.TRANSFORM_FEEDBACK, null);
            this.appState.transformFeedback = null;
        }

        if (WEBGL_INFO.MULTI_DRAW_INSTANCED) {
            let ext = this.appState.extensions.multiDrawInstanced;
            if (indexed) {
                ext.multiDrawElementsInstancedWEBGL(this.drawPrimitive, this.numElements, 0, this.currentVertexArray.indexType, this.offsets, 0, this.numInstances, 0, this.numDraws);
            } else {
                ext.multiDrawArraysInstancedWEBGL(this.drawPrimitive, this.offsets, 0, this.numElements, 0, this.numInstances, 0, this.numDraws);
            }
        } else if (indexed) {
            for (let i = 0; i < this.numDraws; ++i) {
                this.gl.drawElementsInstanced(this.drawPrimitive, this.numElements[i], this.currentVertexArray.indexType, this.offsets[i], this.numInstances[i]);
            }
        } else {
            for (let i = 0; i < this.numDraws; ++i) {
                this.gl.drawArraysInstanced(this.drawPrimitive, this.offsets[i], this.numElements[i], this.numInstances[i]);
            }
        }

        if (this.currentTransformFeedback) {
            this.gl.endTransformFeedback();
        }

        return this;
    }

}

///////////////////////////////////////////////////////////////////////////////////
// The MIT License (MIT)
//
// Copyright (c) 2017 Tarek Sherif
//
// Permission is hereby granted, free of charge, to any person obtaining a copy of
// this software and associated documentation files (the "Software"), to deal in
// the Software without restriction, including without limitation the rights to
// use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of
// the Software, and to permit persons to whom the Software is furnished to do so,
// subject to the following conditions:
//
// The above copyright notice and this permission notice shall be included in all
// copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
// FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
// COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
// IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
// CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
///////////////////////////////////////////////////////////////////////////////////


/**
    General-purpose texture.

    @class
    @prop {WebGLRenderingContext} gl The WebGL context.
    @prop {WebGLTexture} texture Handle to the texture.
    @prop {number} width Texture width.
    @prop {number} height Texture height.
    @prop {number} depth Texture depth.
    @prop {GLEnum} binding Binding point for the texture.
    @prop {GLEnum} type Type of data stored in the texture.
    @prop {GLEnum} format Layout of texture data.
    @prop {GLEnum} internalFormat Internal arrangement of the texture data.
    @prop {number} currentUnit The current texture unit this texture is bound to.
    @prop {boolean} is3D Whether this texture contains 3D data.
    @prop {boolean} flipY Whether the y-axis is flipped for this texture.
    @prop {boolean} premultiplyAlpha Whether alpha should be pre-multiplied when loading this texture.
    @prop {boolean} mipmaps Whether this texture is using mipmap filtering 
        (and thus should have a complete mipmap chain).
    @prop {Object} appState Tracked GL state.
*/
let Texture$1 = class Texture {
    constructor(gl, appState, binding, image, width = image.width, height = image.height, depth, is3D, options = DUMMY_OBJECT) {

        this.gl = gl;
        this.binding = binding;
        this.texture = null;
        this.width = width || 0;
        this.height = height || 0;
        this.depth = depth || 0;
        this.is3D = is3D;
        this.appState = appState;

        this.compressed = Boolean(COMPRESSED_TEXTURE_TYPES[options.internalFormat]);
        
        if (options.format !== undefined) {
            console.warn("Texture option 'format' is deprecated and will be removed. Use 'internalFormat' with a sized format instead.");
            this.compressed = Boolean(COMPRESSED_TEXTURE_TYPES[options.format]);
            if (options.type === undefined) {
                options.type = options.format === GL.DEPTH_COMPONENT ? GL.UNSIGNED_SHORT : GL.UNSIGNED_BYTE;
            }
            if (options.internalFormat === undefined) {
                if (this.compressed) {
                    options.internalFormat = options.format;
                } else {
                    options.internalFormat = TEXTURE_FORMAT_DEFAULTS[options.type][options.format];
                }
            }
        }

        if (this.compressed) {
            // For compressed textures, just need to provide one of format, internalFormat.
            // The other will be the same.
            this.internalFormat = options.internalFormat;
            this.format = this.internalFormat;
            this.type = GL.UNSIGNED_BYTE;
        } else {
            this.internalFormat = options.internalFormat !== undefined ? options.internalFormat : GL.RGBA8;

            let formatInfo = TEXTURE_FORMATS[this.internalFormat];
            this.format = formatInfo[0];
            this.type = options.type !== undefined ? options.type : formatInfo[1];
        }

        // -1 indicates unbound
        this.currentUnit = -1;

        // Sampling parameters
        let {
            minFilter = image ? GL.LINEAR_MIPMAP_NEAREST : GL.NEAREST,
            magFilter = image ? GL.LINEAR : GL.NEAREST,
            wrapS = GL.REPEAT,
            wrapT = GL.REPEAT,
            wrapR = GL.REPEAT,
            compareMode = GL.NONE,
            compareFunc = GL.LEQUAL,
            minLOD = null,
            maxLOD = null,
            baseLevel = null,
            maxLevel = null,
            maxAnisotropy = 1,
            flipY = false,
            premultiplyAlpha = false
        } = options;

        this.minFilter = minFilter;
        this.magFilter = magFilter;
        this.wrapS = wrapS;
        this.wrapT = wrapT;
        this.wrapR = wrapR;
        this.compareMode = compareMode;
        this.compareFunc = compareFunc;
        this.minLOD = minLOD;
        this.maxLOD = maxLOD;
        this.baseLevel = baseLevel;
        this.maxLevel = maxLevel;
        this.maxAnisotropy = Math.min(maxAnisotropy, WEBGL_INFO.MAX_TEXTURE_ANISOTROPY);
        this.flipY = flipY;
        this.premultiplyAlpha = premultiplyAlpha;
        this.mipmaps = (minFilter === GL.LINEAR_MIPMAP_NEAREST || minFilter === GL.LINEAR_MIPMAP_LINEAR);

        this.restore(image);
    }

    /**
        Restore texture after context loss.

        @method
        @param {DOMElement|ArrayBufferView|Array} [image] Image data. An array can be passed to manually set all levels 
            of the mipmap chain. If a single level is passed and mipmap filtering is being used,
            generateMipmap() will be called to produce the remaining levels.
        @return {Texture} The Texture object.
    */
    restore(image) {
        this.texture = null;
        this.resize(this.width, this.height, this.depth);

        if (image) {
            this.data(image);
        }

        return this;
    }

    /**
        Re-allocate texture storage.

        @method
        @param {number} width Image width.
        @param {number} height Image height.
        @param {number} [depth] Image depth or number of images. Required when passing 3D or texture array data.
        @return {Texture} The Texture object.
    */
    resize(width, height, depth) {
        depth = depth || 0;

        if (this.texture && width === this.width && height === this.height && depth === this.depth) {
            return this; 
        }

        this.gl.deleteTexture(this.texture);
        if (this.currentUnit !== -1) {
            this.appState.textures[this.currentUnit] = null;
        }

        this.texture = this.gl.createTexture();
        this.bind(Math.max(this.currentUnit, 0));

        this.width = width;
        this.height = height;
        this.depth = depth;

        this.gl.texParameteri(this.binding, GL.TEXTURE_MIN_FILTER, this.minFilter);
        this.gl.texParameteri(this.binding, GL.TEXTURE_MAG_FILTER, this.magFilter);
        this.gl.texParameteri(this.binding, GL.TEXTURE_WRAP_S, this.wrapS);
        this.gl.texParameteri(this.binding, GL.TEXTURE_WRAP_T, this.wrapT);
        this.gl.texParameteri(this.binding, GL.TEXTURE_WRAP_R, this.wrapR);
        this.gl.texParameteri(this.binding, GL.TEXTURE_COMPARE_FUNC, this.compareFunc);
        this.gl.texParameteri(this.binding, GL.TEXTURE_COMPARE_MODE, this.compareMode);
        
        if (this.minLOD !== null) {
            this.gl.texParameterf(this.binding, GL.TEXTURE_MIN_LOD, this.minLOD);
        }
        
        if (this.maxLOD !== null) {
            this.gl.texParameterf(this.binding, GL.TEXTURE_MAX_LOD, this.maxLOD);
        }
        
        if (this.baseLevel !== null) {
            this.gl.texParameteri(this.binding, GL.TEXTURE_BASE_LEVEL, this.baseLevel);
        }
        
        if (this.maxLevel !== null) {
            this.gl.texParameteri(this.binding, GL.TEXTURE_MAX_LEVEL, this.maxLevel);
        }
        
        if (this.maxAnisotropy > 1) {
            this.gl.texParameteri(this.binding, GL.TEXTURE_MAX_ANISOTROPY_EXT, this.maxAnisotropy);
        }

        let levels;
        if (this.is3D) {
            if (this.mipmaps) {
                levels = Math.floor(Math.log2(Math.max(Math.max(this.width, this.height), this.depth))) + 1;
            } else {
                levels = 1;
            }
            this.gl.texStorage3D(this.binding, levels, this.internalFormat, this.width, this.height, this.depth);
        } else {
            if (this.mipmaps) {
                levels = Math.floor(Math.log2(Math.max(this.width, this.height))) + 1;
            } else {
                levels = 1;
            }
            this.gl.texStorage2D(this.binding, levels, this.internalFormat, this.width, this.height);
        }

        return this;
    }

    /**
        Set the image data for the texture. An array can be passed to manually set all levels 
        of the mipmap chain. If a single level is passed and mipmap filtering is being used,
        generateMipmap() will be called to produce the remaining levels.
        NOTE: the data must fit the currently-allocated storage!

        @method
        @param {ImageElement|ArrayBufferView|Array} data Image data. If an array is passed, it will be 
            used to set mip map levels.
        @return {Texture} The Texture object.
    */
    data(data) {
        if (!Array.isArray(data)) {
            DUMMY_UNIT_ARRAY[0] = data;
            data = DUMMY_UNIT_ARRAY;
        }

        let numLevels = this.mipmaps ? data.length : 1;
        let width = this.width;
        let height = this.height;
        let depth = this.depth;
        let generateMipmaps = this.mipmaps && data.length === 1;
        let i;

        this.bind(Math.max(this.currentUnit, 0));
        this.gl.pixelStorei(GL.UNPACK_FLIP_Y_WEBGL, this.flipY);
        this.gl.pixelStorei(GL.UNPACK_PREMULTIPLY_ALPHA_WEBGL, this.premultiplyAlpha);

        if (this.compressed) {
            if (this.is3D) {
                for (i = 0; i < numLevels; ++i) {
                    this.gl.compressedTexSubImage3D(this.binding, i, 0, 0, 0, width, height, depth, this.format, data[i]);
                    width = Math.max(width >> 1, 1);
                    height = Math.max(height >> 1, 1);
                    depth = Math.max(depth >> 1, 1);
                }
            } else {
                for (i = 0; i < numLevels; ++i) {
                    this.gl.compressedTexSubImage2D(this.binding, i, 0, 0, width, height, this.format, data[i]);
                    width = Math.max(width >> 1, 1);
                    height = Math.max(height >> 1, 1);
                }
            }
        } else if (this.is3D) {
            for (i = 0; i < numLevels; ++i) {
                this.gl.texSubImage3D(this.binding, i, 0, 0, 0, width, height, depth, this.format, this.type, data[i]);
                width = Math.max(width >> 1, 1);
                height = Math.max(height >> 1, 1);
                depth = Math.max(depth >> 1, 1);
            }
        } else {
            for (i = 0; i < numLevels; ++i) {
                this.gl.texSubImage2D(this.binding, i, 0, 0, width, height, this.format, this.type, data[i]);
                width = Math.max(width >> 1, 1);
                height = Math.max(height >> 1, 1);
            }
        }

        if (generateMipmaps) {
            this.gl.generateMipmap(this.binding);
        }

        return this;
    }

    /**
        Delete this texture.

        @method
        @return {Texture} The Texture object.
    */
    delete() {
        if (this.texture) {
            this.gl.deleteTexture(this.texture);
            this.texture = null;

            if (this.currentUnit !== -1 && this.appState.textures[this.currentUnit] === this) {
                this.appState.textures[this.currentUnit] = null;
                this.currentUnit = -1;
            }
        }

        return this;
    }

    /**
        Bind this texture to a texture unit.

        @method
        @ignore
        @return {Texture} The Texture object.
    */
    bind(unit) {
        let currentTexture = this.appState.textures[unit];

        if (this.appState.activeTexture !== unit) {
            this.gl.activeTexture(GL.TEXTURE0 + unit);
            this.appState.activeTexture = unit;
        }
        
        if (currentTexture !== this) {
            if (currentTexture) {
                currentTexture.currentUnit = -1;
            }

            if (this.currentUnit !== -1) {
                this.appState.textures[this.currentUnit] = null;
            }

            this.gl.bindTexture(this.binding, this.texture);

            this.appState.textures[unit] = this;
            this.currentUnit = unit;
        }

        return this;
    }

};

///////////////////////////////////////////////////////////////////////////////////
// The MIT License (MIT)
//
// Copyright (c) 2017 Tarek Sherif
//
// Permission is hereby granted, free of charge, to any person obtaining a copy of
// this software and associated documentation files (the "Software"), to deal in
// the Software without restriction, including without limitation the rights to
// use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of
// the Software, and to permit persons to whom the Software is furnished to do so,
// subject to the following conditions:
//
// The above copyright notice and this permission notice shall be included in all
// copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
// FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
// COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
// IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
// CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
///////////////////////////////////////////////////////////////////////////////////


/**
    Offscreen drawing attachment.

    @class
    @prop {WebGLRenderingContext} gl The WebGL context.
    @prop {WebGLRenderbuffer} renderbuffer Handle to the renderbuffer.
    @prop {number} width Renderbuffer width.
    @prop {number} height Renderbuffer height.
    @prop {GLEnum} internalFormat Internal arrangement of the renderbuffer data.
    @prop {number} samples Number of MSAA samples.
*/
class Renderbuffer {
    constructor(gl, width, height, internalFormat, samples = 0) {
        this.gl = gl;
        this.renderbuffer = null;
        this.width = width;
        this.height = height;
        this.internalFormat = internalFormat;
        this.samples = samples;
        this.restore();
    }

    /**
        Restore renderbuffer after context loss.

        @method
        @return {Renderbuffer} The Renderbuffer object.
    */
    restore() {
        this.renderbuffer = this.gl.createRenderbuffer();
        this.resize(this.width, this.height);

        return this;
    }

    /**
        Resize the renderbuffer.

        @method
        @param {number} width New width of the renderbuffer.
        @param {number} height New height of the renderbuffer.
        @return {Renderbuffer} The Renderbuffer object.
    */
    resize(width, height) {
        this.width = width;
        this.height = height;
        this.gl.bindRenderbuffer(GL.RENDERBUFFER, this.renderbuffer);
        this.gl.renderbufferStorageMultisample(GL.RENDERBUFFER, this.samples, this.internalFormat, this.width, this.height);
        this.gl.bindRenderbuffer(GL.RENDERBUFFER, null);
        
        return this;
    }

    /**
        Delete this renderbuffer.

        @method
        @return {Renderbuffer} The Renderbuffer object.
    */
    delete() {
        this.gl.deleteRenderbuffer(this.renderbuffer);
        this.renderbuffer = null;

        return this;
    }   
}

///////////////////////////////////////////////////////////////////////////////////
// The MIT License (MIT)
//
// Copyright (c) 2017 Tarek Sherif
//
// Permission is hereby granted, free of charge, to any person obtaining a copy of
// this software and associated documentation files (the "Software"), to deal in
// the Software without restriction, including without limitation the rights to
// use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of
// the Software, and to permit persons to whom the Software is furnished to do so,
// subject to the following conditions:
//
// The above copyright notice and this permission notice shall be included in all
// copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
// FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
// COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
// IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
// CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
///////////////////////////////////////////////////////////////////////////////////


/**
    Offscreen drawing surface.

    @class
    @prop {WebGLRenderingContext} gl The WebGL context.
    @prop {WebGLFramebuffer} framebuffer Handle to the framebuffer.
    @prop {number} width Framebuffer width.
    @prop {number} height Framebuffer height.
    @prop {Array} colorAttachments Array of color attachments.
    @prop {Texture|Renderbuffer} depthAttachment Depth attachment.
    @prop {Object} appState Tracked GL state.
*/
class Framebuffer {

    constructor(gl, appState) {
        this.gl = gl;
        this.framebuffer = null;
        this.appState = appState;

        this.numColorTargets = 0;

        this.colorAttachments = [];
        this.colorAttachmentEnums = [];
        this.colorAttachmentTargets = [];
        this.depthAttachment = null;
        this.depthAttachmentTarget = null;

        this.width = 0;
        this.height = 0;

        this.restore();
    }

    /**
        Restore framebuffer after context loss.

        @method
        @return {Framebuffer} The Framebuffer object.
    */
    restore() {
        if (this.appState.drawFramebuffer === this) {
            this.appState.drawFramebuffer = null;
        }

        if (this.appState.readFramebuffer === this) {
            this.appState.readFramebuffer = null;
        }

        this.framebuffer = this.gl.createFramebuffer();

        return this;
    }

    /**
        Attach a color target to this framebuffer.

        @method
        @param {number} index Color attachment index.
        @param {Texture|Cubemap|Renderbuffer} attachment The texture, cubemap or renderbuffer to attach.
        @param {GLEnum} [target] The texture target or layer to attach. If the texture is 3D or a texture array,
            defaults to 0, otherwise to TEXTURE_2D. Ignored for renderbuffers.
        @return {Framebuffer} The Framebuffer object.
    */
    colorTarget(index, attachment, target = attachment.is3D ? 0 : GL.TEXTURE_2D) {

        if (index >= this.numColorTargets) {
            let numColorTargets = index + 1;
            this.colorAttachmentEnums.length = numColorTargets;
            this.colorAttachments.length = numColorTargets;
            this.colorAttachmentTargets.length = numColorTargets;

            for (let i = this.numColorTargets; i < numColorTargets - 1; ++i) {
                this.colorAttachmentEnums[i] = GL.NONE;
                this.colorAttachments[i] = null;
                this.colorAttachmentTargets[i] = 0;
            }

            this.numColorTargets = numColorTargets;
        }        

        this.colorAttachmentEnums[index] = GL.COLOR_ATTACHMENT0 + index;
        this.colorAttachments[index] = attachment;
        this.colorAttachmentTargets[index] = target;

        let currentFramebuffer = this.bindAndCaptureState();


        if (attachment instanceof Renderbuffer) {
            this.gl.framebufferRenderbuffer(GL.DRAW_FRAMEBUFFER, this.colorAttachmentEnums[index], GL.RENDERBUFFER, attachment.renderbuffer);
        } else if (attachment.is3D) {
            this.gl.framebufferTextureLayer(GL.DRAW_FRAMEBUFFER, this.colorAttachmentEnums[index], attachment.texture, 0, target);
        } else {
            this.gl.framebufferTexture2D(GL.DRAW_FRAMEBUFFER, this.colorAttachmentEnums[index], target, attachment.texture, 0);
        }

        this.gl.drawBuffers(this.colorAttachmentEnums);

        this.width = attachment.width;
        this.height = attachment.height;

        this.restoreState(currentFramebuffer);

        return this;
    }

    /**
        Attach a depth target to this framebuffer.

        @method
        @param {Texture|Cubemap|Renderbuffer} texture The texture, cubemap or renderbuffer to attach.
        @param {GLEnum} [target] The texture target or layer to attach. If the texture is 3D or a texture array or renderbuffer,
            defaults to 0, otherwise to TEXTURE_2D. Ignored for renderbuffers.
        @return {Framebuffer} The Framebuffer object.
    */
    depthTarget(attachment, target = attachment.is3D ? 0 : GL.TEXTURE_2D) {

        let currentFramebuffer = this.bindAndCaptureState();

        this.depthAttachment = attachment;
        this.depthAttachmentTarget = target;

        if (attachment instanceof Renderbuffer) {
            this.gl.framebufferRenderbuffer(GL.DRAW_FRAMEBUFFER, GL.DEPTH_ATTACHMENT, GL.RENDERBUFFER, attachment.renderbuffer);
        } else if (attachment.is3D) {
            this.gl.framebufferTextureLayer(GL.DRAW_FRAMEBUFFER, GL.DEPTH_ATTACHMENT, attachment.texture, 0, target);
        } else {
            this.gl.framebufferTexture2D(GL.DRAW_FRAMEBUFFER, GL.DEPTH_ATTACHMENT, target, attachment.texture, 0);
        }

        this.width = attachment.width;
        this.height = attachment.height;

        this.restoreState(currentFramebuffer);

        return this;
    }

    /**
        Resize all attachments.

        @method
        @param {number} [width=app.width] New width of the framebuffer.
        @param {number} [height=app.height] New height of the framebuffer.
        @return {Framebuffer} The Framebuffer object.
    */
    resize(width = this.gl.drawingBufferWidth, height = this.gl.drawingBufferHeight) {

        let currentFramebuffer = this.bindAndCaptureState();

        for (let i = 0; i < this.numColorTargets; ++i) {
            let attachment = this.colorAttachments[i];

            if (!attachment) {
                continue;
            }

            attachment.resize(width, height);
            if (attachment instanceof Texture$1) {
                // Texture resizing recreates the texture object.
                if (attachment.is3D) {
                    this.gl.framebufferTextureLayer(GL.DRAW_FRAMEBUFFER, this.colorAttachmentEnums[i], attachment.texture, 0, this.colorAttachmentTargets[i]);
                } else {
                    this.gl.framebufferTexture2D(GL.DRAW_FRAMEBUFFER, this.colorAttachmentEnums[i], this.colorAttachmentTargets[i], attachment.texture, 0);
                }
            }
        }

        if (this.depthAttachment) {
            this.depthAttachment.resize(width, height);
            if (this.depthAttachment instanceof Texture$1) {
                // Texture resizing recreates the texture object.
                if (this.depthAttachment.is3D) {
                    this.gl.framebufferTextureLayer(GL.DRAW_FRAMEBUFFER, GL.DEPTH_ATTACHMENT, this.depthAttachment.texture, 0, this.depthAttachmentTarget);
                } else {
                    this.gl.framebufferTexture2D(GL.DRAW_FRAMEBUFFER, GL.DEPTH_ATTACHMENT, this.depthAttachmentTarget, this.depthAttachment.texture, 0);
                }
            }
        }

        this.width = width;
        this.height = height;

        this.restoreState(currentFramebuffer);

        return this;
    }

    /**
        Delete this framebuffer.

        @method
        @return {Framebuffer} The Framebuffer object.
    */
    delete() {
        if (this.framebuffer) {
            this.gl.deleteFramebuffer(this.framebuffer);
            this.framebuffer = null;

            if (this.appState.drawFramebuffer === this) {
                this.gl.bindFramebuffer(GL.DRAW_FRAMEBUFFER, null);
                this.appState.drawFramebuffer = null;
            }

            if (this.appState.readFramebuffer === this) {
                this.gl.bindFramebuffer(GL.READ_FRAMEBUFFER, null);
                this.appState.readFramebuffer = null;
            }
        }

        return this;
    }

    /**
        Get the current status of this framebuffer.

        @method
        @return {GLEnum} The current status of this framebuffer.
    */
    getStatus() {
        let currentFramebuffer = this.bindAndCaptureState();
        let status = this.gl.checkFramebufferStatus(GL.DRAW_FRAMEBUFFER);
        this.restoreState(currentFramebuffer);

        return status;
    }

    /**
        Bind as the draw framebuffer

        @method
        @ignore
        @return {Framebuffer} The Framebuffer object.
    */
    bindForDraw() {
        if (this.appState.drawFramebuffer !== this) {
            this.gl.bindFramebuffer(GL.DRAW_FRAMEBUFFER, this.framebuffer);
            this.appState.drawFramebuffer = this;
        }

        return this;
    }

    /**
        Bind as the read framebuffer

        @method
        @ignore
        @return {Framebuffer} The Framebuffer object.
    */
    bindForRead() {
        if (this.appState.readFramebuffer !== this) {
            this.gl.bindFramebuffer(this.gl.READ_FRAMEBUFFER, this.framebuffer);
            this.appState.readFramebuffer = this;
        }

        return this;
    }

    /**
        Bind for a framebuffer state update.
        Capture current binding so we can restore it later.

        @method
        @ignore
        @return {Framebuffer} The Framebuffer object.
    */
    bindAndCaptureState() {
        let currentFramebuffer = this.appState.drawFramebuffer;

        if (currentFramebuffer !== this) {
            this.gl.bindFramebuffer(GL.DRAW_FRAMEBUFFER, this.framebuffer);
        }

        return currentFramebuffer;
    }

    /**
        Bind restore previous binding after state update

        @method
        @ignore
        @return {Framebuffer} The Framebuffer object.
    */
    restoreState(framebuffer) {
        if (framebuffer !== this) {
            this.gl.bindFramebuffer(GL.DRAW_FRAMEBUFFER, framebuffer ? framebuffer.framebuffer : null);
        }

        return this;
    }

    // TODO(Tarek): Transitional support for deprecated properties.
    get colorTextures() {
        console.error("Framebuffer.colorTextures is deprecated and will be removed. Please use Framebuffer.colorAttachments.");
        return this.colorAttachments;
    }

    get depthTexture() {
        console.error("Framebuffer.depthTexture is deprecated and will be removed. Please use Framebuffer.depthAttachment.");
        return this.depthAttachment;
    }

}

///////////////////////////////////////////////////////////////////////////////////
// The MIT License (MIT)
//
// Copyright (c) 2017 Tarek Sherif
//
// Permission is hereby granted, free of charge, to any person obtaining a copy of
// this software and associated documentation files (the "Software"), to deal in
// the Software without restriction, including without limitation the rights to
// use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of
// the Software, and to permit persons to whom the Software is furnished to do so,
// subject to the following conditions:
//
// The above copyright notice and this permission notice shall be included in all
// copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
// FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
// COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
// IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
// CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
///////////////////////////////////////////////////////////////////////////////////


/**
    WebGL shader.

    @class
    @prop {WebGLRenderingContext} gl The WebGL context.
    @prop {WebGLShader} shader The shader.
*/
class Shader {

    constructor(gl, appState, type, source) {
        this.gl = gl;
        this.appState = appState;
        this.shader = null;
        this.type = type;
        this.source = source.trim();

        this.restore();
    }

    /**
        Restore shader after context loss.

        @method
        @return {Shader} The Shader object.
    */
    restore() {
        this.shader = this.gl.createShader(this.type);
        this.gl.shaderSource(this.shader, this.source);
        this.gl.compileShader(this.shader);

        return this;
    }

    /**
        Get the shader source translated for the platform's API.

        @method
        @return {String} The translated shader source.
    */
    translatedSource() {
        if (WEBGL_INFO.DEBUG_SHADERS) {
            return this.appState.extensions.debugShaders.getTranslatedShaderSource(this.shader);
        } else {
            return "(Unavailable)";
        }
    }

    /**
        Delete this shader.

        @method
        @return {Shader} The Shader object.
    */
    delete() {
        if (this.shader) {
            this.gl.deleteShader(this.shader);
            this.shader = null;
        }

        return this;
    }


    checkCompilation() {


        let error_handler = () => {
            if(this.type == 35632) return  true
            let codetag = '//// code';
            let source_line = (source) => {
                let lines = 0;
                let chars = source.split('');
                for(let i = 0; i < chars.length; i++) {
                    let c = chars[i];
                    if(c == '\n') lines++;
                    if(source.substr(i, codetag.length) === codetag) return lines
                }
                return -1
            };
            let error_line = (err) => {
                return parseInt(err.split(':')[2])
            };
            let error_msg = (err) => {
                return err.split(':').slice(3).join(':')
            };
            if(this.source.includes(codetag)) {
                let srcline = source_line(this.source);
                let errs = this.gl.getShaderInfoLog(this.shader).split('\n').slice(0, -1);
                errs.forEach((err) => {
                    let errline = error_line(err);
                    if(errline < srcline) {
                        console.error('error before ' + codetag);
                    }// }
                    let showline = (n) => '    ' + this.source.split('\n')[errline - 1 + n];
                    console.error([
                        'line:' + (errline - srcline),
                        '    ' + showline(-2),
                        '    ' + showline(-1),
                        '>>>>' + showline(0),
                        '    ' + showline(1),
                        '    ' + showline(2),
                        error_msg(err)
                    ].join('\n'));
                });
                return true
            }
            return false
        };
        error_handler();
        return this
    }
}

///////////////////////////////////////////////////////////////////////////////////
// The MIT License (MIT)
//
// Copyright (c) 2017 Tarek Sherif
//
// Permission is hereby granted, free of charge, to any person obtaining a copy of
// this software and associated documentation files (the "Software"), to deal in
// the Software without restriction, including without limitation the rights to
// use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of
// the Software, and to permit persons to whom the Software is furnished to do so,
// subject to the following conditions:
//
// The above copyright notice and this permission notice shall be included in all
// copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
// FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
// COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
// IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
// CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
///////////////////////////////////////////////////////////////////////////////////


// Classes to manage uniform value updates, including
// caching current values.

const UNIFORM_FUNC_NAME = {};
UNIFORM_FUNC_NAME[GL.BOOL] = "uniform1i";
UNIFORM_FUNC_NAME[GL.INT] = "uniform1i";
UNIFORM_FUNC_NAME[GL.SAMPLER_2D] = "uniform1i";
UNIFORM_FUNC_NAME[GL.INT_SAMPLER_2D] = "uniform1i";
UNIFORM_FUNC_NAME[GL.UNSIGNED_INT_SAMPLER_2D] = "uniform1i";
UNIFORM_FUNC_NAME[GL.SAMPLER_2D_SHADOW] = "uniform1i";
UNIFORM_FUNC_NAME[GL.SAMPLER_2D_ARRAY] = "uniform1i";
UNIFORM_FUNC_NAME[GL.INT_SAMPLER_2D_ARRAY] = "uniform1i";
UNIFORM_FUNC_NAME[GL.UNSIGNED_INT_SAMPLER_2D_ARRAY] = "uniform1i";
UNIFORM_FUNC_NAME[GL.SAMPLER_2D_ARRAY_SHADOW] = "uniform1i";
UNIFORM_FUNC_NAME[GL.SAMPLER_CUBE] = "uniform1i";
UNIFORM_FUNC_NAME[GL.INT_SAMPLER_CUBE] = "uniform1i";
UNIFORM_FUNC_NAME[GL.UNSIGNED_INT_SAMPLER_CUBE] = "uniform1i";
UNIFORM_FUNC_NAME[GL.SAMPLER_CUBE_SHADOW] = "uniform1i";
UNIFORM_FUNC_NAME[GL.SAMPLER_3D] = "uniform1i";
UNIFORM_FUNC_NAME[GL.INT_SAMPLER_3D] = "uniform1i";
UNIFORM_FUNC_NAME[GL.UNSIGNED_INT_SAMPLER_3D] = "uniform1i";
UNIFORM_FUNC_NAME[GL.UNSIGNED_INT] = "uniform1ui";
UNIFORM_FUNC_NAME[GL.FLOAT] = "uniform1f";
UNIFORM_FUNC_NAME[GL.FLOAT_VEC2] = "uniform2f";
UNIFORM_FUNC_NAME[GL.FLOAT_VEC3] = "uniform3f";
UNIFORM_FUNC_NAME[GL.FLOAT_VEC4] = "uniform4f";
UNIFORM_FUNC_NAME[GL.INT_VEC2] = "uniform2i";
UNIFORM_FUNC_NAME[GL.INT_VEC3] = "uniform3i";
UNIFORM_FUNC_NAME[GL.INT_VEC4] = "uniform4i";
UNIFORM_FUNC_NAME[GL.UNSIGNED_INT_VEC2] = "uniform2ui";
UNIFORM_FUNC_NAME[GL.UNSIGNED_INT_VEC3] = "uniform3ui";
UNIFORM_FUNC_NAME[GL.UNSIGNED_INT_VEC4] = "uniform4ui";
UNIFORM_FUNC_NAME[GL.BOOL_VEC2] = "uniform2i";
UNIFORM_FUNC_NAME[GL.BOOL_VEC3] = "uniform3i";
UNIFORM_FUNC_NAME[GL.BOOL_VEC4] = "uniform4i";
UNIFORM_FUNC_NAME[GL.FLOAT_MAT2] = "uniformMatrix2fv";
UNIFORM_FUNC_NAME[GL.FLOAT_MAT3] = "uniformMatrix3fv";
UNIFORM_FUNC_NAME[GL.FLOAT_MAT4] = "uniformMatrix4fv";
UNIFORM_FUNC_NAME[GL.FLOAT_MAT2x3] = "uniformMatrix2x3fv";
UNIFORM_FUNC_NAME[GL.FLOAT_MAT2x4] = "uniformMatrix2x4fv";
UNIFORM_FUNC_NAME[GL.FLOAT_MAT3x2] = "uniformMatrix3x2fv";
UNIFORM_FUNC_NAME[GL.FLOAT_MAT3x4] = "uniformMatrix3x4fv";
UNIFORM_FUNC_NAME[GL.FLOAT_MAT4x2] = "uniformMatrix4x2fv";
UNIFORM_FUNC_NAME[GL.FLOAT_MAT4x3] = "uniformMatrix4x3fv";

const UNIFORM_COMPONENT_COUNT = {};
UNIFORM_COMPONENT_COUNT[GL.BOOL] = 1;
UNIFORM_COMPONENT_COUNT[GL.INT] = 1;
UNIFORM_COMPONENT_COUNT[GL.SAMPLER_2D] = 1;
UNIFORM_COMPONENT_COUNT[GL.INT_SAMPLER_2D] = 1;
UNIFORM_COMPONENT_COUNT[GL.UNSIGNED_INT_SAMPLER_2D] = 1;
UNIFORM_COMPONENT_COUNT[GL.SAMPLER_2D_SHADOW] = 1;
UNIFORM_COMPONENT_COUNT[GL.SAMPLER_2D_ARRAY] = 1;
UNIFORM_COMPONENT_COUNT[GL.INT_SAMPLER_2D_ARRAY] = 1;
UNIFORM_COMPONENT_COUNT[GL.UNSIGNED_INT_SAMPLER_2D_ARRAY] = 1;
UNIFORM_COMPONENT_COUNT[GL.SAMPLER_2D_ARRAY_SHADOW] = 1;
UNIFORM_COMPONENT_COUNT[GL.SAMPLER_CUBE] = 1;
UNIFORM_COMPONENT_COUNT[GL.INT_SAMPLER_CUBE] = 1;
UNIFORM_COMPONENT_COUNT[GL.UNSIGNED_INT_SAMPLER_CUBE] = 1;
UNIFORM_COMPONENT_COUNT[GL.SAMPLER_CUBE_SHADOW] = 1;
UNIFORM_COMPONENT_COUNT[GL.SAMPLER_3D] = 1;
UNIFORM_COMPONENT_COUNT[GL.INT_SAMPLER_3D] = 1;
UNIFORM_COMPONENT_COUNT[GL.UNSIGNED_INT_SAMPLER_3D] = 1;
UNIFORM_COMPONENT_COUNT[GL.UNSIGNED_INT] = 1;
UNIFORM_COMPONENT_COUNT[GL.FLOAT] = 1;
UNIFORM_COMPONENT_COUNT[GL.FLOAT_VEC2] = 2;
UNIFORM_COMPONENT_COUNT[GL.FLOAT_VEC3] = 3;
UNIFORM_COMPONENT_COUNT[GL.FLOAT_VEC4] = 4;
UNIFORM_COMPONENT_COUNT[GL.INT_VEC2] = 2;
UNIFORM_COMPONENT_COUNT[GL.INT_VEC3] = 3;
UNIFORM_COMPONENT_COUNT[GL.INT_VEC4] = 4;
UNIFORM_COMPONENT_COUNT[GL.UNSIGNED_INT_VEC2] = 2;
UNIFORM_COMPONENT_COUNT[GL.UNSIGNED_INT_VEC3] = 3;
UNIFORM_COMPONENT_COUNT[GL.UNSIGNED_INT_VEC4] = 4;
UNIFORM_COMPONENT_COUNT[GL.BOOL_VEC2] = 2;
UNIFORM_COMPONENT_COUNT[GL.BOOL_VEC3] = 3;
UNIFORM_COMPONENT_COUNT[GL.BOOL_VEC4] = 4;
UNIFORM_COMPONENT_COUNT[GL.FLOAT_MAT2] = 4;
UNIFORM_COMPONENT_COUNT[GL.FLOAT_MAT3] = 9;
UNIFORM_COMPONENT_COUNT[GL.FLOAT_MAT4] = 16;
UNIFORM_COMPONENT_COUNT[GL.FLOAT_MAT2x3] = 6;
UNIFORM_COMPONENT_COUNT[GL.FLOAT_MAT2x4] = 8;
UNIFORM_COMPONENT_COUNT[GL.FLOAT_MAT3x2] = 6;
UNIFORM_COMPONENT_COUNT[GL.FLOAT_MAT3x4] = 12;
UNIFORM_COMPONENT_COUNT[GL.FLOAT_MAT4x2] = 8;
UNIFORM_COMPONENT_COUNT[GL.FLOAT_MAT4x3] = 12;

const UNIFORM_CACHE_CLASS = {};
UNIFORM_CACHE_CLASS[GL.INT] = Int32Array;
UNIFORM_CACHE_CLASS[GL.SAMPLER_2D] = Int32Array;
UNIFORM_CACHE_CLASS[GL.INT_SAMPLER_2D] = Int32Array;
UNIFORM_CACHE_CLASS[GL.UNSIGNED_INT_SAMPLER_2D] = Int32Array;
UNIFORM_CACHE_CLASS[GL.SAMPLER_2D_SHADOW] = Int32Array;
UNIFORM_CACHE_CLASS[GL.SAMPLER_2D_ARRAY] = Int32Array;
UNIFORM_CACHE_CLASS[GL.INT_SAMPLER_2D_ARRAY] = Int32Array;
UNIFORM_CACHE_CLASS[GL.UNSIGNED_INT_SAMPLER_2D_ARRAY] = Int32Array;
UNIFORM_CACHE_CLASS[GL.SAMPLER_2D_ARRAY_SHADOW] = Int32Array;
UNIFORM_CACHE_CLASS[GL.SAMPLER_CUBE] = Int32Array;
UNIFORM_CACHE_CLASS[GL.INT_SAMPLER_CUBE] = Int32Array;
UNIFORM_CACHE_CLASS[GL.UNSIGNED_INT_SAMPLER_CUBE] = Int32Array;
UNIFORM_CACHE_CLASS[GL.SAMPLER_CUBE_SHADOW] = Int32Array;
UNIFORM_CACHE_CLASS[GL.SAMPLER_3D] = Int32Array;
UNIFORM_CACHE_CLASS[GL.INT_SAMPLER_3D] = Int32Array;
UNIFORM_CACHE_CLASS[GL.UNSIGNED_INT_SAMPLER_3D] = Int32Array;
UNIFORM_CACHE_CLASS[GL.UNSIGNED_INT] = Uint32Array;
UNIFORM_CACHE_CLASS[GL.FLOAT] = Float32Array;
UNIFORM_CACHE_CLASS[GL.FLOAT_VEC2] = Float32Array;
UNIFORM_CACHE_CLASS[GL.FLOAT_VEC3] = Float32Array;
UNIFORM_CACHE_CLASS[GL.FLOAT_VEC4] = Float32Array;
UNIFORM_CACHE_CLASS[GL.INT_VEC2] = Int32Array;
UNIFORM_CACHE_CLASS[GL.INT_VEC3] = Int32Array;
UNIFORM_CACHE_CLASS[GL.INT_VEC4] = Int32Array;
UNIFORM_CACHE_CLASS[GL.UNSIGNED_INT_VEC2] = Uint32Array;
UNIFORM_CACHE_CLASS[GL.UNSIGNED_INT_VEC3] = Uint32Array;
UNIFORM_CACHE_CLASS[GL.UNSIGNED_INT_VEC4] = Uint32Array;

class SingleComponentUniform {
    
    constructor(gl, handle, type) {
        this.gl = gl;
        this.handle = handle;
        this.glFuncName = UNIFORM_FUNC_NAME[type];
        this.cache = type === GL.BOOL ? false : 0;
    }

    set(value) {
        if (this.cache !== value) {
            this.gl[this.glFuncName](this.handle, value);
            this.cache = value;
        }
    }

}

class MultiNumericUniform {

    constructor(gl, handle, type, count) {
        this.gl = gl;
        this.handle = handle;
        this.glFuncName = UNIFORM_FUNC_NAME[type] + "v";
        this.count = count;
        this.cache = new UNIFORM_CACHE_CLASS[type](UNIFORM_COMPONENT_COUNT[type] * count);
    }

    set(value) {
        for (let i = 0, len = value.length; i < len; ++i) {
            if (this.cache[i] !== value[i]) {
                this.gl[this.glFuncName](this.handle, value);
                this.cache.set(value);
                return;
            }
        }
    }

}

class MultiBoolUniform {

    constructor(gl, handle, type, count) {
        this.gl = gl;
        this.handle = handle;
        this.glFuncName = UNIFORM_FUNC_NAME[type] + "v";
        this.count = count;
        this.cache = new Array(UNIFORM_COMPONENT_COUNT[type] * count).fill(false);
    }

    set(value) {
        for (let i = 0, len = value.length; i < len; ++i) {
            if (this.cache[i] !== value[i]) {
                this.gl[this.glFuncName](this.handle, value);
                for (let j = i; j < len; j++) {
                    this.cache[j] = value[j];
                }
                return;
            }
        }
    }

}

class MatrixUniform {

    constructor(gl, handle, type, count) {
        this.gl = gl;
        this.handle = handle;
        this.glFuncName = UNIFORM_FUNC_NAME[type];
        this.count = count;
        this.cache = new Float32Array(UNIFORM_COMPONENT_COUNT[type] * count);
    }

    set(value) {
        for (let i = 0, len = value.length; i < len; ++i) {
            if (this.cache[i] !== value[i]) {
                this.gl[this.glFuncName](this.handle, false, value);
                this.cache.set(value);
                return;
            }
        }
    }

}

///////////////////////////////////////////////////////////////////////////////////
// The MIT License (MIT)
//
// Copyright (c) 2017 Tarek Sherif
//
// Permission is hereby granted, free of charge, to any person obtaining a copy of
// this software and associated documentation files (the "Software"), to deal in
// the Software without restriction, including without limitation the rights to
// use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of
// the Software, and to permit persons to whom the Software is furnished to do so,
// subject to the following conditions:
//
// The above copyright notice and this permission notice shall be included in all
// copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
// FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
// COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
// IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
// CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
///////////////////////////////////////////////////////////////////////////////////


/**
    WebGL program consisting of compiled and linked vertex and fragment
    shaders.

    @class
    @prop {WebGLRenderingContext} gl The WebGL context.
    @prop {WebGLProgram} program The WebGL program.
    @prop {boolean} transformFeedback Whether this program is set up for transform feedback.
    @prop {Object} uniforms Map of uniform names to handles.
    @prop {Object} appState Tracked GL state.
*/
class Program {

    constructor(gl, appState, vsSource, fsSource, xformFeebackVars) {
        this.gl = gl;
        this.appState = appState;
        this.program = null;
        this.transformFeedbackVaryings = xformFeebackVars || null;
        this.uniforms = {};
        this.uniformBlocks = {};
        this.uniformBlockCount = 0;
        this.samplers = {};
        this.samplerCount = 0;

        this.vertexSource = null;
        this.vertexShader = null;
        this.fragmentSource = null;
        this.fragmentShader = null;
        this.linked = false;

        if (typeof vsSource === "string") {
            this.vertexSource = vsSource;
        } else {
            this.vertexShader = vsSource;
        }

        if (typeof fsSource === "string") {
            this.fragmentSource = fsSource;
        } else {
            this.fragmentShader = fsSource;
        }

        this.initialize();
    }

    /**
        Restore program after context loss. Note that this
        will stall for completion. <b>App.restorePrograms</b>
        is the preferred method for program restoration as
        it will parallelize compilation where available.

        @method
        @return {Program} The Program object.
    */
    restore() {
        this.initialize();
        this.link();
        this.checkLinkage();

        return this;
    }

    /**
        Get the vertex shader source translated for the platform's API.

        @method
        @return {String} The translated vertex shader source.
    */
    translatedVertexSource() {
        if (this.vertexShader) {
            return this.vertexShader.translatedSource();
        } else {
            let vertexShader = new Shader(this.gl, this.appState, GL.VERTEX_SHADER, this.vertexSource);
            let translatedSource = vertexShader.translatedSource();
            vertexShader.delete();
            return translatedSource;
        }
    }

    /**
        Get the fragment shader source translated for the platform's API.

        @method
        @return {String} The translated fragment shader source.
    */
    translatedFragmentSource() {
        if (this.fragmentShader) {
            return this.fragmentShader.translatedSource();
        } else {
            let fragmentShader = new Shader(this.gl, this.appState, GL.FRAGMENT_SHADER, this.fragmentSource);
            let translatedSource = fragmentShader.translatedSource();
            fragmentShader.delete();
            return translatedSource;
        }
    }

    /**
        Delete this program.

        @method
        @return {Program} The Program object.
    */
    delete() {
        if (this.program) {
            this.gl.deleteProgram(this.program);
            this.program = null;

            if (this.appState.program === this) {
                this.gl.useProgram(null);
                this.appState.program = null;
            }
        }

        return this;
    }

    // Initialize program state
    initialize() {
        if (this.appState.program === this) {
            this.gl.useProgram(null);
            this.appState.program = null;
        }

        this.linked = false;
        this.uniformBlockCount = 0;
        this.samplerCount = 0;

        if (this.vertexSource) {
            this.vertexShader = new Shader(this.gl, this.appState, GL.VERTEX_SHADER, this.vertexSource);
        }

        if (this.fragmentSource) {
            this.fragmentShader = new Shader(this.gl, this.appState, GL.FRAGMENT_SHADER, this.fragmentSource);
        }

        this.program = this.gl.createProgram();

        return this;
    }

    // Attach shaders and link program.
    // Done as a separate step to avoid stalls on compileShader
    // when doing async compile.
    link() {
        this.gl.attachShader(this.program, this.vertexShader.shader);
        this.gl.attachShader(this.program, this.fragmentShader.shader);
        if (this.transformFeedbackVaryings) {
            this.gl.transformFeedbackVaryings(this.program, this.transformFeedbackVaryings, GL.SEPARATE_ATTRIBS);
        }
        this.gl.linkProgram(this.program);

        return this;
    }

    // Check if compilation is complete
    checkCompletion() {
        if (WEBGL_INFO.PARALLEL_SHADER_COMPILE) {
            return this.gl.getProgramParameter(this.program, GL.COMPLETION_STATUS_KHR);
        }

        return true;
    }

    // Check if program linked.
    // Will stall for completion.
    checkLinkage() {
        if (this.linked) {
            return this;
        }

        if (this.gl.getProgramParameter(this.program, GL.LINK_STATUS)) {
            this.linked = true;
            this.initVariables();
        } else {
            console.error(this.gl.getProgramInfoLog(this.program));
            this.vertexShader.checkCompilation();
            this.fragmentShader.checkCompilation();
        }

        if (this.vertexSource) {
            this.vertexShader.delete();
            this.vertexShader = null;
        }

        if (this.fragmentSource) {
            this.fragmentShader.delete();
            this.fragmentShader = null;
        }

        return this;
    }

    // Get variable handles from program
    initVariables() {
        this.bind();

        let numUniforms = this.gl.getProgramParameter(this.program, GL.ACTIVE_UNIFORMS);
        let textureUnit;

        for (let i = 0; i < numUniforms; ++i) {
            let uniformInfo = this.gl.getActiveUniform(this.program, i);
            let uniformHandle = this.gl.getUniformLocation(this.program, uniformInfo.name);
            let UniformClass = null;
            let type = uniformInfo.type;
            let numElements = uniformInfo.size;

            switch (type) {
                case GL.SAMPLER_2D:
                case GL.INT_SAMPLER_2D:
                case GL.UNSIGNED_INT_SAMPLER_2D:
                case GL.SAMPLER_2D_SHADOW:
                case GL.SAMPLER_2D_ARRAY:
                case GL.INT_SAMPLER_2D_ARRAY:
                case GL.UNSIGNED_INT_SAMPLER_2D_ARRAY:
                case GL.SAMPLER_2D_ARRAY_SHADOW:
                case GL.SAMPLER_CUBE:
                case GL.INT_SAMPLER_CUBE:
                case GL.UNSIGNED_INT_SAMPLER_CUBE:
                case GL.SAMPLER_CUBE_SHADOW:
                case GL.SAMPLER_3D:
                case GL.INT_SAMPLER_3D:
                case GL.UNSIGNED_INT_SAMPLER_3D:
                    textureUnit = this.samplerCount++;
                    this.samplers[uniformInfo.name] = textureUnit;
                    this.gl.uniform1i(uniformHandle, textureUnit);
                    break;
                case GL.INT:
                case GL.UNSIGNED_INT:
                case GL.FLOAT:
                    UniformClass = numElements > 1 ? MultiNumericUniform : SingleComponentUniform;
                    break;
                case GL.BOOL:
                    UniformClass = numElements > 1 ? MultiBoolUniform : SingleComponentUniform;
                    break;
                case GL.FLOAT_VEC2:
                case GL.INT_VEC2:
                case GL.UNSIGNED_INT_VEC2:
                case GL.FLOAT_VEC3:
                case GL.INT_VEC3:
                case GL.UNSIGNED_INT_VEC3:
                case GL.FLOAT_VEC4:
                case GL.INT_VEC4:
                case GL.UNSIGNED_INT_VEC4:
                    UniformClass = MultiNumericUniform;
                    break;
                case GL.BOOL_VEC2:
                case GL.BOOL_VEC3:
                case GL.BOOL_VEC4:
                    UniformClass = MultiBoolUniform;
                    break;
                case GL.FLOAT_MAT2:
                case GL.FLOAT_MAT3:
                case GL.FLOAT_MAT4:
                case GL.FLOAT_MAT2x3:
                case GL.FLOAT_MAT2x4:
                case GL.FLOAT_MAT3x2:
                case GL.FLOAT_MAT3x4:
                case GL.FLOAT_MAT4x2:
                case GL.FLOAT_MAT4x3:
                    UniformClass = MatrixUniform;
                    break;
                default:
                    console.error("Unrecognized type for uniform ", uniformInfo.name);
                    break;
            }

            if (UniformClass) {
                this.uniforms[uniformInfo.name] = new UniformClass(this.gl, uniformHandle, type, numElements);
            }
        }

        let numUniformBlocks = this.gl.getProgramParameter(this.program, GL.ACTIVE_UNIFORM_BLOCKS);

        for (let i = 0; i < numUniformBlocks; ++i) {
            let blockName = this.gl.getActiveUniformBlockName(this.program, i);
            let blockIndex = this.gl.getUniformBlockIndex(this.program, blockName);

            let uniformBlockBase = this.uniformBlockCount++;
            this.gl.uniformBlockBinding(this.program, blockIndex, uniformBlockBase);
            this.uniformBlocks[blockName] = uniformBlockBase;
        }
    }

    // Set the value of a uniform.
    uniform(name, value) {
        // some uniforms are optimized out
        if (this.uniforms[name]) {
            this.uniforms[name].set(value);
        }

        return this;
    }

    // Use this program.
    bind() {
        if (this.appState.program !== this) {
            this.gl.useProgram(this.program);
            this.appState.program = this;
        }

        return this;
    }
}

///////////////////////////////////////////////////////////////////////////////////
// The MIT License (MIT)
//
// Copyright (c) 2017 Tarek Sherif
//
// Permission is hereby granted, free of charge, to any person obtaining a copy of
// this software and associated documentation files (the "Software"), to deal in
// the Software without restriction, including without limitation the rights to
// use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of
// the Software, and to permit persons to whom the Software is furnished to do so,
// subject to the following conditions:
//
// The above copyright notice and this permission notice shall be included in all
// copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
// FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
// COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
// IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
// CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
///////////////////////////////////////////////////////////////////////////////////


/**
    Generic query object.

    @class
    @prop {WebGLRenderingContext} gl The WebGL context.
    @prop {WebGLQuery} query Query object.
    @prop {GLEnum} target The type of information being queried.
    @prop {boolean} active Whether or not a query is currently in progress.
    @prop {Any} result The result of the query (only available after a call to ready() returns true). 
*/
class Query {

    constructor(gl, target) {
        this.gl = gl;
        this.query = null;
        this.target = target;
        this.active = false;
        this.result = null;

        this.restore();
    }

    /**
        Restore query after context loss.

        @method
        @return {Query} The Query object.
    */
    restore() {
        this.query = this.gl.createQuery();
        this.active = false;
        this.result = null;

        return this;
    }

    /**
        Begin a query.

        @method
        @return {Query} The Query object.
    */
    begin() {
        if (!this.active) {
            this.gl.beginQuery(this.target, this.query);
            this.result = null;
        }

        return this;
    }

    /**
        End a query.

        @method
        @return {Query} The Query object.
    */
    end() {
        if (!this.active) {
            this.gl.endQuery(this.target);
            this.active = true;
        }

        return this;
    }

    /**
        Check if query result is available.

        @method
        @return {boolean} If results are available.
    */
    ready() {
        if (this.active && this.gl.getQueryParameter(this.query, GL.QUERY_RESULT_AVAILABLE)) {
            this.active = false;
            // Note(Tarek): Casting because FF incorrectly returns booleans.
            // https://bugzilla.mozilla.org/show_bug.cgi?id=1422714 
            this.result = Number(this.gl.getQueryParameter(this.query, GL.QUERY_RESULT));
            return true;
        }

        return false;
    }

    /**
        Delete this query.

        @method
        @return {Query} The Query object.
    */
    delete() {
        if (this.query) {
            this.gl.deleteQuery(this.query);
            this.query = null;
        }

        return this;
    }

}

///////////////////////////////////////////////////////////////////////////////////
// The MIT License (MIT)
//
// Copyright (c) 2017 Tarek Sherif
//
// Permission is hereby granted, free of charge, to any person obtaining a copy of
// this software and associated documentation files (the "Software"), to deal in
// the Software without restriction, including without limitation the rights to
// use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of
// the Software, and to permit persons to whom the Software is furnished to do so,
// subject to the following conditions:
//
// The above copyright notice and this permission notice shall be included in all
// copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
// FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
// COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
// IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
// CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
///////////////////////////////////////////////////////////////////////////////////


/**
    Rendering timer.

    @class
    @prop {WebGLRenderingContext} gl The WebGL context.
    @prop {Object} cpuTimer Timer for CPU. Will be window.performance, if available, or window.Date.
    @prop {WebGLQuery} gpuTimerQuery Timer query object for GPU (if gpu timing is supported).
    @prop {boolean} gpuTimerQueryInProgress Whether a gpu timer query is currently in progress.
    @prop {number} cpuStartTime When the last CPU timing started.
    @prop {number} cpuTime Time spent on CPU during last timing. Only valid if ready() returns true.
    @prop {number} gpuTime Time spent on GPU during last timing. Only valid if ready() returns true.
            Will remain 0 if extension EXT_disjoint_timer_query_webgl2 is unavailable.
*/
class Timer {

    constructor(gl) {
        this.gl = gl;
        this.cpuTimer = window.performance || window.Date;

        this.gpuTimerQuery = null;

        this.cpuStartTime = 0;
        this.cpuTime = 0;
        this.gpuTime = 0;

        this.restore();
    }

    /**
        Restore timer after context loss.

        @method
        @return {Timer} The Timer object.
    */
    restore() {
        if (WEBGL_INFO.GPU_TIMER) {
            if (this.gpuTimerQuery) {
                this.gpuTimerQuery.restore();
            } else {
                this.gpuTimerQuery = new Query(this.gl, GL.TIME_ELAPSED_EXT);
            }
        }

        this.cpuStartTime = 0;
        this.cpuTime = 0;
        this.gpuTime = 0;

        return this;
    }


    /**
        Start timing.

        @method
        @return {Timer} The Timer object.
    */
    start() {
        if (WEBGL_INFO.GPU_TIMER) {
            if (!this.gpuTimerQuery.active) {
                this.gpuTimerQuery.begin();
                this.cpuStartTime = this.cpuTimer.now();
            }
        } else {
            this.cpuStartTime = this.cpuTimer.now();
        }

        return this;
    }


    /**
        Stop timing.

        @method
        @return {Timer} The Timer object.
    */
    end() {
        if (WEBGL_INFO.GPU_TIMER) {
            if (!this.gpuTimerQuery.active) {
                this.gpuTimerQuery.end();
                this.cpuTime = this.cpuTimer.now() - this.cpuStartTime;
            }
        } else {
            this.cpuTime = this.cpuTimer.now() - this.cpuStartTime;
        }

        return this;
    }

    /**
        Check if timing results are available. If
        this method returns true, the cpuTime and
        gpuTime properties will be set to valid
        values.

        @method
        @return {boolean} If results are available.
    */
    ready() {
        if (WEBGL_INFO.GPU_TIMER) {
            if (!this.gpuTimerQuery.active) {
                return false;
            }

            var gpuTimerAvailable = this.gpuTimerQuery.ready();
            var gpuTimerDisjoint = this.gl.getParameter(GL.GPU_DISJOINT_EXT);

            if (gpuTimerAvailable && !gpuTimerDisjoint) {
                this.gpuTime = this.gpuTimerQuery.result  / 1000000;
                return true;
            } else {
                return false;
            }
        } else {
            return Boolean(this.cpuStartTime);
        }
    }

    /**
        Delete this timer.

        @method
        @return {Timer} The Timer object.
    */
    delete() {
        if (this.gpuTimerQuery) {
            this.gpuTimerQuery.delete();
            this.gpuTimerQuery = null;
        }

        return this;
    }

}

///////////////////////////////////////////////////////////////////////////////////
// The MIT License (MIT)
//
// Copyright (c) 2017 Tarek Sherif
//
// Permission is hereby granted, free of charge, to any person obtaining a copy of
// this software and associated documentation files (the "Software"), to deal in
// the Software without restriction, including without limitation the rights to
// use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of
// the Software, and to permit persons to whom the Software is furnished to do so,
// subject to the following conditions:
//
// The above copyright notice and this permission notice shall be included in all
// copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
// FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
// COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
// IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
// CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
///////////////////////////////////////////////////////////////////////////////////


/**
    Tranform feedback object.

    @class
    @prop {WebGLRenderingContext} gl The WebGL context.
    @prop {WebGLTransformFeedback} transformFeedback Transform feedback object.
    @prop {Object} appState Tracked GL state.
*/
class TransformFeedback {

    constructor(gl, appState) {
        this.gl = gl;
        this.appState = appState;
        this.transformFeedback = null;

        this.restore();
    }

    /**
        Restore transform feedback after context loss.

        @method
        @return {TransformFeedback} The TransformFeedback object.
    */
    restore() {
        if (this.appState.transformFeedback === this) {
            this.appState.transformFeedback = null;
        }

        this.transformFeedback = this.gl.createTransformFeedback();

        return this;
    }

    /**
        Bind a feedback buffer to capture transform output.

        @method
        @param {number} index Index of transform feedback varying to capture.
        @param {VertexBuffer} buffer Buffer to record output into.
        @return {TransformFeedback} The TransformFeedback object.
    */
    feedbackBuffer(index, buffer) {
        this.gl.bindTransformFeedback(GL.TRANSFORM_FEEDBACK, this.transformFeedback);
        this.gl.bindBufferBase(GL.TRANSFORM_FEEDBACK_BUFFER, index, buffer.buffer);

        // TODO(Tarek): Firefox doesn't properly unbind TRANSFORM_FEEDBACK_BUFFER
        // bindings when TRANSFORM_FEEDBACK is unbound.
        // https://bugzilla.mozilla.org/show_bug.cgi?id=1541396
        this.gl.bindTransformFeedback(GL.TRANSFORM_FEEDBACK, null);
        this.gl.bindBufferBase(GL.TRANSFORM_FEEDBACK_BUFFER, index, null);

        return this;
    }

    /**
        Delete this transform feedback.

        @method
        @return {TransformFeedback} The TransformFeedback object.
    */
    delete() {
        if (this.transformFeedback) {
            this.gl.deleteTransformFeedback(this.transformFeedback);
            this.transformFeedback = null;

            if (this.appState.transformFeedback === this) {
                this.gl.bindTransformFeedback(GL.TRANSFORM_FEEDBACK, null);
                this.appState.transformFeedback = null;
            }
        }

        return this;
    }

    /**
        Bind this transform feedback.

        @method
        @ignore
        @return {TransformFeedback} The TransformFeedback object.
    */
    bind() {
        if (this.appState.transformFeedback !== this) {
            this.gl.bindTransformFeedback(GL.TRANSFORM_FEEDBACK, this.transformFeedback);
            this.appState.transformFeedback = this;
        }

        return this;
    }

}

///////////////////////////////////////////////////////////////////////////////////
// The MIT License (MIT)
//
// Copyright (c) 2017 Tarek Sherif
//
// Permission is hereby granted, free of charge, to any person obtaining a copy of
// this software and associated documentation files (the "Software"), to deal in
// the Software without restriction, including without limitation the rights to
// use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of
// the Software, and to permit persons to whom the Software is furnished to do so,
// subject to the following conditions:
//
// The above copyright notice and this permission notice shall be included in all
// copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
// FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
// COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
// IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
// CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
///////////////////////////////////////////////////////////////////////////////////


/**
    Storage for uniform data. Data is stored in std140 layout.

    @class
    @prop {WebGLRenderingContext} gl The WebGL context.
    @prop {WebGLBuffer} buffer Allocated buffer storage.
    @prop {Float32Array} data Buffer data.
    @prop {Object} dataViews Map of base data types to matching ArrayBufferViews of the buffer data.
    @prop {Array} offsets Offsets into the array for each item in the buffer.
    @prop {Array} sizes Size of the item at the given offset.
    @prop {Array} types The base type of the item at the given offset (FLOAT, INT or UNSIGNED_INT).
    @prop {number} size The size of the buffer (in 4-byte items).
    @prop {GLEnum} usage Usage pattern of the buffer.
*/
class UniformBuffer {

    constructor(gl, appState, layout, usage = gl.DYNAMIC_DRAW) {
        this.gl = gl;
        this.buffer = null;
        this.dataViews = {};
        this.offsets = new Array(layout.length);
        this.sizes = new Array(layout.length);
        this.types = new Array(layout.length);
        this.size = 0;
        this.usage = usage;
        this.appState = appState;

        // -1 indicates unbound
        this.currentBase = -1;

        for (let i = 0, len = layout.length; i < len; ++i) {
            let type = layout[i];
            switch(type) {
                case GL.FLOAT:
                case GL.INT:
                case GL.UNSIGNED_INT:
                case GL.BOOL:
                    this.offsets[i] = this.size;
                    this.sizes[i] = 1;

                    if (type === GL.INT) {
                        this.types[i] = GL.INT;
                    } else if (type === GL.UNSIGNED_INT) {
                        this.types[i] = GL.UNSIGNED_INT;
                    } else {
                        this.types[i] = GL.FLOAT;
                    }

                    this.size++;
                    break;
                case GL.FLOAT_VEC2:
                case GL.INT_VEC2:
                case GL.UNSIGNED_INT_VEC2:
                case GL.BOOL_VEC2:
                    this.size += this.size % 2;
                    this.offsets[i] = this.size;
                    this.sizes[i] = 2;

                    if (type === GL.INT_VEC2) {
                        this.types[i] = GL.INT;
                    } else if (type === GL.UNSIGNED_INT_VEC2) {
                        this.types[i] = GL.UNSIGNED_INT;
                    } else {
                        this.types[i] = GL.FLOAT;
                    }

                    this.size += 2;
                    break;
                case GL.FLOAT_VEC3:
                case GL.INT_VEC3:
                case GL.UNSIGNED_INT_VEC3:
                case GL.BOOL_VEC3:
                case GL.FLOAT_VEC4:
                case GL.INT_VEC4:
                case GL.UNSIGNED_INT_VEC4:
                case GL.BOOL_VEC4:
                    this.size += (4 - this.size % 4) % 4;
                    this.offsets[i] = this.size;
                    this.sizes[i] = 4;

                    if (type === GL.INT_VEC4 || type === GL.INT_VEC3) {
                        this.types[i] = GL.INT;
                    } else if (type === GL.UNSIGNED_INT_VEC4 || type === GL.UNSIGNED_INT_VEC3) {
                        this.types[i] = GL.UNSIGNED_INT;
                    } else {
                        this.types[i] = GL.FLOAT;
                    }

                    this.size += 4;
                    break;
                case GL.FLOAT_MAT2:
                case GL.FLOAT_MAT2x3:
                case GL.FLOAT_MAT2x4:
                    this.size += (4 - this.size % 4) % 4;
                    this.offsets[i] = this.size;
                    this.sizes[i] = 8;
                    this.types[i] = GL.FLOAT;

                    this.size += 8;
                    break;
                case GL.FLOAT_MAT3:
                case GL.FLOAT_MAT3x2:
                case GL.FLOAT_MAT3x4:
                    this.size += (4 - this.size % 4) % 4;
                    this.offsets[i] = this.size;
                    this.sizes[i] = 12;
                    this.types[i] = GL.FLOAT;

                    this.size += 12;
                    break;
                case GL.FLOAT_MAT4:
                case GL.FLOAT_MAT4x2:
                case GL.FLOAT_MAT4x3:
                    this.size += (4 - this.size % 4) % 4;
                    this.offsets[i] = this.size;
                    this.sizes[i] = 16;
                    this.types[i] = GL.FLOAT;

                    this.size += 16;
                    break;
                default:
                    console.error("Unsupported type for uniform buffer.");
            }
        }

        this.size += (4 - this.size % 4) % 4;

        this.data = new Float32Array(this.size);
        this.dataViews[GL.FLOAT] = this.data;
        this.dataViews[GL.INT] = new Int32Array(this.data.buffer);
        this.dataViews[GL.UNSIGNED_INT] = new Uint32Array(this.data.buffer);

        this.dirtyStart = this.size;
        this.dirtyEnd = 0;

        this.restore();
    }

    /**
        Restore uniform buffer after context loss.

        @method
        @return {UniformBuffer} The UniformBuffer object.
    */
    restore() {
        if (this.currentBase !== -1 && this.appState.uniformBuffers[this.currentBase] === this) {
            this.appState.uniformBuffers[this.currentBase] = null;
        }

        this.buffer = this.gl.createBuffer();
        this.gl.bindBuffer(GL.UNIFORM_BUFFER, this.buffer);
        this.gl.bufferData(GL.UNIFORM_BUFFER, this.size * 4, this.usage);
        this.gl.bindBuffer(GL.UNIFORM_BUFFER, null);

        return this;
    }

    /**
        Update data for a given item in the buffer. NOTE: Data is not
        sent the the GPU until the update() method is called!

        @method
        @param {number} index Index in the layout of item to set.
        @param {ArrayBufferView} value Value to store at the layout location.
        @return {UniformBuffer} The UniformBuffer object.
    */
    set(index, value) {
        let view = this.dataViews[this.types[index]];
        let offset = this.offsets[index];
        let size = this.sizes[index];

        if (this.sizes[index] === 1)  {
            view[offset] = value;
        } else {
            view.set(value, offset);
        }

        if (offset < this.dirtyStart) {
            this.dirtyStart = offset;
        }

        if (this.dirtyEnd < offset + size) {
            this.dirtyEnd = offset + size;
        }

        return this;
    }

    /**
        Send stored buffer data to the GPU.

        @method
        @return {UniformBuffer} The UniformBuffer object.
    */
    update() {
        if (this.dirtyStart >= this.dirtyEnd) {
            return this;
        }

        let data = this.data.subarray(this.dirtyStart, this.dirtyEnd);
        let offset = this.dirtyStart * 4;

        this.gl.bindBuffer(this.gl.UNIFORM_BUFFER, this.buffer);
        this.gl.bufferSubData(this.gl.UNIFORM_BUFFER, offset, data);
        this.gl.bindBuffer(this.gl.UNIFORM_BUFFER, null);

        this.dirtyStart = this.size;
        this.dirtyEnd = 0;

        return this;
    }

    /**
        Delete this uniform buffer.

        @method
        @return {UniformBuffer} The UniformBuffer object.
    */
    delete() {
        if (this.buffer) {
            this.gl.deleteBuffer(this.buffer);
            this.buffer = null;

            if (this.currentBase !== -1 && this.appState.uniformBuffers[this.currentBase] === this) {
                this.appState.uniformBuffers[this.currentBase] = null;
            }
        }

        return this;
    }

    /**
        Bind this uniform buffer to the given base.

        @method
        @ignore
        @return {UniformBuffer} The UniformBuffer object.
    */
    bind(base) {
        let currentBuffer = this.appState.uniformBuffers[base];

        if (currentBuffer !== this) {

            if (currentBuffer) {
                currentBuffer.currentBase = -1;
            }

            if (this.currentBase !== -1) {
                this.appState.uniformBuffers[this.currentBase] = null;
            }

            this.gl.bindBufferBase(this.gl.UNIFORM_BUFFER, base, this.buffer);
            
            this.appState.uniformBuffers[base] = this;
            this.currentBase = base;
        }

        return this;
    }

}

// Copyright (c) 2017 Tarek Sherif
//
// Permission is hereby granted, free of charge, to any person obtaining a copy of
// this software and associated documentation files (the "Software"), to deal in
// the Software without restriction, including without limitation the rights to
// use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of
// the Software, and to permit persons to whom the Software is furnished to do so,
// subject to the following conditions:
//
// The above copyright notice and this permission notice shall be included in all
// copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
// FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
// COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
// IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
// CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
///////////////////////////////////////////////////////////////////////////////////


/**
    Organizes vertex buffer and attribute state.

    @class
    @prop {WebGLRenderingContext} gl The WebGL context.
    @prop {WebGLVertexArrayObject} vertexArray Vertex array object.
    @prop {number} numElements Number of elements in the vertex array.
    @prop {boolean} indexed Whether this vertex array is set up for indexed drawing.
    @prop {GLenum} indexType Data type of the indices.
    @prop {number} numInstances Number of instances to draw with this vertex array.
    @prop {Object} appState Tracked GL state.
*/
class VertexArray {

    constructor(gl, appState) {
        this.gl = gl;
        this.appState = appState;
        this.vertexArray = null;
        this.indexType = null;
        this.indexed = false;
        this.numElements = 0;
        this.numInstances = 1;
        this.offsets = 0;
        this.numDraws = 1;
    }

    /**
        Restore vertex array after context loss.

        @method
        @return {VertexArray} The VertexArray object.
    */
    restore() {
        if (this.appState.vertexArray === this) {
            this.appState.vertexArray = null;
        }

        // re-allocate at gl level, if necessary
        if (this.vertexArray !== null) {
            this.vertexArray = this.gl.createVertexArray();
        }

        return this;
    }


    /**
        Bind an per-vertex attribute buffer to this vertex array.

        @method
        @param {number} attributeIndex The attribute location to bind to.
        @param {VertexBuffer} vertexBuffer The VertexBuffer to bind.
        @param {Object} [options] Attribute pointer options. These will override those provided in the
            VertexBuffer.
        @param {GLEnum} [options.type] Type of data stored in the buffer.
        @param {GLEnum} [options.size] Number of components per vertex.
        @param {GLEnum} [options.stride] Number of bytes between the start of data for each vertex.
        @param {GLEnum} [options.offset] Number of bytes before the start of data for the first vertex.
        @param {GLEnum} [options.normalized] Data is integer data that should be normalized to a float.
        @param {GLEnum} [options.integer] Pass data as integers.
        @return {VertexArray} The VertexArray object.
    */
    vertexAttributeBuffer(attributeIndex, vertexBuffer, options = DUMMY_OBJECT) {
        this.attributeBuffer(attributeIndex, vertexBuffer, options, false);

        return this;
    }

    /**
        Bind an per-instance attribute buffer to this vertex array.

        @method
        @param {number} attributeIndex The attribute location to bind to.
        @param {VertexBuffer} vertexBuffer The VertexBuffer to bind.
        @param {Object} [options] Attribute pointer options. These will override those provided in the
            VertexBuffer.
        @param {GLEnum} [options.type] Type of data stored in the buffer.
        @param {GLEnum} [options.size] Number of components per vertex.
        @param {GLEnum} [options.stride] Number of bytes between the start of data for each vertex.
        @param {GLEnum} [options.offset] Number of bytes before the start of data for the first vertex.
        @param {GLEnum} [options.normalized] Data is integer data that should be normalized to a float.
        @param {GLEnum} [options.integer] Pass data as integers.
        @return {VertexArray} The VertexArray object.
    */
    instanceAttributeBuffer(attributeIndex, vertexBuffer, options = DUMMY_OBJECT) {
        this.attributeBuffer(attributeIndex, vertexBuffer, options, true);

        return this;
    }

    /**
        Bind an index buffer to this vertex array.

        @method
        @param {VertexBuffer} vertexBuffer The VertexBuffer to bind.
        @return {VertexArray} The VertexArray object.
    */
    indexBuffer(vertexBuffer) {
        // allocate at gl level, if necessary
        if (this.vertexArray === null) {
            this.vertexArray = this.gl.createVertexArray();
        }

        this.bind();
        this.gl.bindBuffer(GL.ELEMENT_ARRAY_BUFFER, vertexBuffer.buffer);

        this.numElements = vertexBuffer.numItems * 3;
        this.indexType = vertexBuffer.type;
        this.indexed = true;

        return this;
    }

    /**
        Delete this vertex array.

        @method
        @return {VertexArray} The VertexArray object.
    */
    delete() {
        if (this.vertexArray) {
            this.gl.deleteVertexArray(this.vertexArray);
            this.vertexArray = null;

            if (this.appState.vertexArray === this) {
                this.gl.bindVertexArray(null);
                this.appState.vertexArray = null;
            }
        }

        return this;
    }

    // Bind this vertex array.
    bind() {
        if (this.appState.vertexArray !== this) {
            this.gl.bindVertexArray(this.vertexArray);
            this.appState.vertexArray = this;
        }

        return this;
    }

    // Generic attribute buffer attachment
    attributeBuffer(attributeIndex, vertexBuffer, options = {}, instanced) {
        // allocate at gl level, if necessary
        if (this.vertexArray === null) {
            this.vertexArray = this.gl.createVertexArray();
        }

        this.bind();
        this.gl.bindBuffer(GL.ARRAY_BUFFER, vertexBuffer.buffer);

        let {
            type = vertexBuffer.type,
            size = vertexBuffer.itemSize,
            stride = 0,
            offset = 0,
            normalized = false,
            integer = Boolean(vertexBuffer.integer && !normalized)
        } = options;

        let numColumns = vertexBuffer.numColumns;

        if (stride === 0) {
            // Set explicitly for matrix buffers
            stride = numColumns * size * TYPE_SIZE[type];
        }

        for (let i = 0; i < numColumns; ++i) {
            if (integer) {
                this.gl.vertexAttribIPointer(
                    attributeIndex + i,
                    size,
                    type,
                    stride,
                    offset + i * size * TYPE_SIZE[type]);
            } else {
                this.gl.vertexAttribPointer(
                    attributeIndex + i,
                    size,
                    type,
                    normalized,
                    stride,
                    offset + i * size * TYPE_SIZE[type]);
            }

            if (instanced) {
                this.gl.vertexAttribDivisor(attributeIndex + i, 1);
            }

            this.gl.enableVertexAttribArray(attributeIndex + i);
        }

        if (this.numDraws === 1) {
            if (instanced) {
                this.numInstances = vertexBuffer.numItems;
            } else {
                this.numElements = this.numElements || vertexBuffer.numItems;
            }
        }

        this.gl.bindBuffer(GL.ARRAY_BUFFER, null);

        return this;
    }
}

///////////////////////////////////////////////////////////////////////////////////
// The MIT License (MIT)
//
// Copyright (c) 2017 Tarek Sherif
//
// Permission is hereby granted, free of charge, to any person obtaining a copy of
// this software and associated documentation files (the "Software"), to deal in
// the Software without restriction, including without limitation the rights to
// use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of
// the Software, and to permit persons to whom the Software is furnished to do so,
// subject to the following conditions:
//
// The above copyright notice and this permission notice shall be included in all
// copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
// FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
// COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
// IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
// CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
///////////////////////////////////////////////////////////////////////////////////


const INTEGER_TYPES = {
    [GL.BYTE]: true,
    [GL.UNSIGNED_BYTE]: true,
    [GL.SHORT]: true,
    [GL.UNSIGNED_SHORT]: true,
    [GL.INT]: true,
    [GL.UNSIGNED_INT]: true
};

/**
    Storage for vertex data.

    @class
    @prop {WebGLRenderingContext} gl The WebGL context.
    @prop {WebGLBuffer} buffer Allocated buffer storage.
    @prop {GLEnum} type The type of data stored in the buffer.
    @prop {number} itemSize Number of array elements per vertex.
    @prop {number} numItems Number of vertices represented.
    @prop {GLEnum} usage The usage pattern of the buffer.
    @prop {boolean} indexArray Whether this is an index array.
    @prop {GLEnum} binding GL binding point (ARRAY_BUFFER or ELEMENT_ARRAY_BUFFER).
    @prop {Object} appState Tracked GL state.
*/
class VertexBuffer {

    constructor(gl, appState, type, itemSize, data, usage = gl.STATIC_DRAW, indexArray) {
        let numColumns;
        switch(type) {
            case GL.FLOAT_MAT4:
            case GL.FLOAT_MAT4x2:
            case GL.FLOAT_MAT4x3:
                numColumns = 4;
                break;
            case GL.FLOAT_MAT3:
            case GL.FLOAT_MAT3x2:
            case GL.FLOAT_MAT3x4:
                numColumns = 3;
                break;
            case GL.FLOAT_MAT2:
            case GL.FLOAT_MAT2x3:
            case GL.FLOAT_MAT2x4:
                numColumns = 2;
                break;
            default:
                numColumns = 1;
        }

        switch(type) {
            case GL.FLOAT_MAT4:
            case GL.FLOAT_MAT3x4:
            case GL.FLOAT_MAT2x4:
                itemSize = 4;
                type = GL.FLOAT;
                break;
            case GL.FLOAT_MAT3:
            case GL.FLOAT_MAT4x3:
            case GL.FLOAT_MAT2x3:
                itemSize = 3;
                type = GL.FLOAT;
                break;
            case GL.FLOAT_MAT2:
            case GL.FLOAT_MAT3x2:
            case GL.FLOAT_MAT4x2:
                itemSize = 2;
                type = GL.FLOAT;
                break;
        }

        let dataLength;
        let byteLength;
        if (typeof data === "number") {
            dataLength = data;
            if (type) {
                data *= TYPE_SIZE[type];
            }
            byteLength = data;
        } else {
            dataLength = data.length;
            byteLength = data.byteLength;
        }

        this.gl = gl;
        this.buffer = null;
        this.appState = appState;
        this.type = type;
        this.itemSize = itemSize;  // In bytes for interleaved arrays.
        this.numItems = type ? dataLength / (itemSize * numColumns) : byteLength / itemSize;
        this.numColumns = numColumns;
        this.byteLength = byteLength;
        this.usage = usage;
        this.indexArray = Boolean(indexArray);
        this.integer = Boolean(INTEGER_TYPES[this.type]);
        this.binding = this.indexArray ? GL.ELEMENT_ARRAY_BUFFER : GL.ARRAY_BUFFER;

        this.restore(data);
    }

    /**
        Restore vertex buffer after context loss.

        @method
        @param {ArrayBufferView|number} data Buffer data itself or the total 
            number of elements to be allocated.
        @return {VertexBuffer} The VertexBuffer object.
    */
    restore(data) {
        if (!data) {
            data = this.byteLength;
        }

        // Don't want to update vertex array bindings
        if (this.appState.vertexArray) {
            this.gl.bindVertexArray(null);
            this.appState.vertexArray = null;
        }

        this.buffer = this.gl.createBuffer();
        this.gl.bindBuffer(this.binding, this.buffer);
        this.gl.bufferData(this.binding, data, this.usage);
        this.gl.bindBuffer(this.binding, null);

        return this;
    }

    /**
        Update data in this buffer. NOTE: the data must fit
        the originally-allocated buffer!

        @method
        @param {VertexBufferView} data Data to store in the buffer.
        @return {VertexBuffer} The VertexBuffer object.
    */
    data(data) {
        // Don't want to update vertex array bindings
        if (this.appState.vertexArray) {
            this.gl.bindVertexArray(null);
            this.appState.vertexArray = null;
        }

        this.gl.bindBuffer(this.binding, this.buffer);
        this.gl.bufferSubData(this.binding, 0, data);
        this.gl.bindBuffer(this.binding, null);

        return this;
    }

    /**
        Delete this array buffer.

        @method
        @return {VertexBuffer} The VertexBuffer object.
    */
    delete() {
        if (this.buffer) {
            this.gl.deleteBuffer(this.buffer);
            this.buffer = null;
        }

        return this;
    }

}

///////////////////////////////////////////////////////////////////////////////////
// The MIT License (MIT)
//
// Copyright (c) 2017 Tarek Sherif
//
// Permission is hereby granted, free of charge, to any person obtaining a copy of
// this software and associated documentation files (the "Software"), to deal in
// the Software without restriction, including without limitation the rights to
// use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of
// the Software, and to permit persons to whom the Software is furnished to do so,
// subject to the following conditions:
//
// The above copyright notice and this permission notice shall be included in all
// copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
// FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
// COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
// IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
// CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
///////////////////////////////////////////////////////////////////////////////////


/**
    Primary entry point to PicoGL. An app will store all parts of the WebGL
    state.

    @class
    @prop {DOMElement} canvas The canvas on which this app drawing.
    @prop {WebGLRenderingContext} gl The WebGL context.
    @prop {number} width The width of the drawing surface.
    @prop {number} height The height of the drawing surface.
    @prop {Object} state Tracked GL state.
    @prop {GLEnum} clearBits Current clear mask to use with clear().
*/
class App {

    constructor(gl, canvas) {
        this.canvas = canvas;
        this.gl = gl;
        this.width = this.gl.drawingBufferWidth;
        this.height = this.gl.drawingBufferHeight;
        this.viewportX = 0;
        this.viewportY = 0;
        this.viewportWidth = 0;
        this.viewportHeight = 0;
        this.currentDrawCalls = null;
        this.emptyFragmentShader = null;

        this.state = {
            program: null,
            vertexArray: null,
            transformFeedback: null,
            activeTexture: -1,
            textures: new Array(WEBGL_INFO.MAX_TEXTURE_UNITS),
            uniformBuffers: new Array(WEBGL_INFO.MAX_UNIFORM_BUFFERS),
            freeUniformBufferBases: [],
            drawFramebuffer: null,
            readFramebuffer: null,
            extensions: {}
        };

        this.clearBits = this.gl.COLOR_BUFFER_BIT | this.gl.DEPTH_BUFFER_BIT| this.gl.STENCIL_BUFFER_BIT;

        this.cpuTime = 0;
        this.gpuTime = 0;

        this.viewport(0, 0, this.width, this.height);

        this.contextLostExt = null;
        this.contextRestoredHandler = null;

        this.initExtensions();

        this.canvas.addEventListener("webglcontextlost", (e) => {
            e.preventDefault();
        });

        this.canvas.addEventListener("webglcontextrestored", () => {
            this.initExtensions();

            if (this.contextRestoredHandler) {
                this.contextRestoredHandler();
            }
        });
    }

    /**
        Simulate context loss.

        @method
        @return {App} The App object.
    */
    loseContext() {
        if (this.contextLostExt) {
            this.contextLostExt.loseContext();
        }

        return this;
    }

    /**
        Simulate context restoration.

        @method
        @return {App} The App object.
    */
    restoreContext() {
        if (this.contextLostExt) {
            this.contextLostExt.restoreContext();
        }

        return this;
    }

    /**
        Set function to handle context restoration after loss.

        @method
        @param {function} fn Context restored handler.
        @return {App} The App object.
    */
    onContextRestored(fn) {
        this.contextRestoredHandler = fn;

        return this;
    }

    /**
        Set the color mask to selectively enable or disable particular
        color channels while rendering.

        @method
        @param {boolean} r Red channel.
        @param {boolean} g Green channel.
        @param {boolean} b Blue channel.
        @param {boolean} a Alpha channel.
        @return {App} The App object.
    */
    colorMask(r, g, b, a) {
        this.gl.colorMask(r, g, b, a);

        return this;
    }

    /**
        Set the clear color.

        @method
        @param {number} r Red channel.
        @param {number} g Green channel.
        @param {number} b Blue channel.
        @param {number} a Alpha channel.
        @return {App} The App object.
    */
    clearColor(r, g, b, a) {
        this.gl.clearColor(r, g, b, a);

        return this;
    }

    /**
        Set the clear mask bits to use when calling clear().
        E.g. app.clearMask(PicoGL.COLOR_BUFFER_BIT).

        @method
        @param {GLEnum} mask Bit mask of buffers to clear.
        @return {App} The App object.
    */
    clearMask(mask) {
        this.clearBits = mask;

        return this;
    }

    /**
        Clear the canvas

        @method
        @return {App} The App object.
    */
    clear() {
        this.gl.clear(this.clearBits);

        return this;
    }

    /**
        Bind a draw framebuffer to the WebGL context.

        @method
        @param {Framebuffer} framebuffer The Framebuffer object to bind.
        @see Framebuffer
        @return {App} The App object.
    */
    drawFramebuffer(framebuffer) {
        framebuffer.bindForDraw();

        return this;
    }

    /**
        Bind a read framebuffer to the WebGL context.

        @method
        @param {Framebuffer} framebuffer The Framebuffer object to bind.
        @see Framebuffer
        @return {App} The App object.
    */
    readFramebuffer(framebuffer) {
        framebuffer.bindForRead();

        return this;
    }

    /**
        Switch back to the default framebuffer for drawing (i.e. draw to the screen).
        Note that this method resets the viewport to match the default framebuffer.

        @method
        @return {App} The App object.
    */
    defaultDrawFramebuffer() {
        if (this.state.drawFramebuffer !== null) {
            this.gl.bindFramebuffer(this.gl.DRAW_FRAMEBUFFER, null);
            this.state.drawFramebuffer = null;
        }

        return this;
    }

    /**
        Switch back to the default framebuffer for reading (i.e. read from the screen).

        @method
        @return {App} The App object.
    */
    defaultReadFramebuffer() {
        if (this.state.readFramebuffer !== null) {
            this.gl.bindFramebuffer(this.gl.READ_FRAMEBUFFER, null);
            this.state.readFramebuffer = null;
        }

        return this;
    }

    /**
        Copy data from framebuffer attached to READ_FRAMEBUFFER to framebuffer attached to DRAW_FRAMEBUFFER.

        @method
        @param {GLEnum} mask Write mask (e.g. PicoGL.COLOR_BUFFER_BIT).
        @param {Object} [options] Blit options.
        @param {number} [options.srcStartX=0] Source start x coordinate.
        @param {number} [options.srcStartY=0] Source start y coordinate.
        @param {number} [options.srcEndX=Width of the read framebuffer] Source end x coordinate.
        @param {number} [options.srcEndY=Height of the read framebuffer] Source end y coordinate.
        @param {number} [options.dstStartX=0] Destination start x coordinate.
        @param {number} [options.dstStartY=0] Destination start y coordinate.
        @param {number} [options.dstEndX=Width of the draw framebuffer] Destination end x coordinate.
        @param {number} [options.dstEndY=Height of the draw framebuffer] Destination end y coordinate.
        @param {number} [options.filter=NEAREST] Sampling filter.
        @return {App} The App object.
    */
    blitFramebuffer(mask, options = DUMMY_OBJECT) {
        let readFramebuffer = this.state.readFramebuffer;
        let drawFramebuffer = this.state.drawFramebuffer;
        let defaultReadWidth = readFramebuffer ? readFramebuffer.width : this.width;
        let defaultReadHeight = readFramebuffer ? readFramebuffer.height : this.height;
        let defaultDrawWidth = drawFramebuffer ? drawFramebuffer.width : this.width;
        let defaultDrawHeight = drawFramebuffer ? drawFramebuffer.height : this.height;

        let {
            srcStartX = 0,
            srcStartY = 0,
            srcEndX = defaultReadWidth,
            srcEndY = defaultReadHeight,
            dstStartX = 0,
            dstStartY = 0,
            dstEndX = defaultDrawWidth,
            dstEndY = defaultDrawHeight,
            filter = GL.NEAREST
        } = options;

        this.gl.blitFramebuffer(srcStartX, srcStartY, srcEndX, srcEndY, dstStartX, dstStartY, dstEndX, dstEndY, mask, filter);

        return this;
    }

    /**
        Set the depth range.

        @method
        @param {number} near Minimum depth value.
        @param {number} far Maximum depth value.
        @return {App} The App object.
    */
    depthRange(near, far) {
        this.gl.depthRange(near, far);

        return this;
    }

    /**
        Enable depth testing.

        @method
        @return {App} The App object.
    */
    depthTest() {
        this.gl.enable(this.gl.DEPTH_TEST);

        return this;
    }

    /**
        Disable depth testing.

        @method
        @return {App} The App object.
    */
    noDepthTest() {
        this.gl.disable(this.gl.DEPTH_TEST);

        return this;
    }

    /**
        Enable or disable writing to the depth buffer.

        @method
        @param {Boolean} mask The depth mask.
        @return {App} The App object.
    */
    depthMask(mask) {
        this.gl.depthMask(mask);

        return this;
    }

    /**
        Set the depth test function. E.g. app.depthFunc(PicoGL.LEQUAL).

        @method
        @param {GLEnum} func The depth testing function to use.
        @return {App} The App object.
    */
    depthFunc(func) {
        this.gl.depthFunc(func);

        return this;
    }

    /**
        Enable blending.

        @method
        @return {App} The App object.
    */
    blend() {
        this.gl.enable(this.gl.BLEND);

        return this;
    }

    /**
        Disable blending

        @method
        @return {App} The App object.
    */
    noBlend() {
        this.gl.disable(this.gl.BLEND);

        return this;
    }

    /**
        Set the blend function. E.g. app.blendFunc(PicoGL.ONE, PicoGL.ONE_MINUS_SRC_ALPHA).

        @method
        @param {GLEnum} src The source blending weight.
        @param {GLEnum} dest The destination blending weight.
        @return {App} The App object.
    */
    blendFunc(src, dest) {
        this.gl.blendFunc(src, dest);

        return this;
    }

    /**
        Set the blend function, with separate weighting for color and alpha channels.
        E.g. app.blendFuncSeparate(PicoGL.ONE, PicoGL.ONE_MINUS_SRC_ALPHA, PicoGL.ONE, PicoGL.ONE).

        @method
        @param {GLEnum} csrc The source blending weight for the RGB channels.
        @param {GLEnum} cdest The destination blending weight for the RGB channels.
        @param {GLEnum} asrc The source blending weight for the alpha channel.
        @param {GLEnum} adest The destination blending weight for the alpha channel.
        @return {App} The App object.
    */
    blendFuncSeparate(csrc, cdest, asrc, adest) {
        this.gl.blendFuncSeparate(csrc, cdest, asrc, adest);

        return this;
    }

    /**
        Set the blend equation. E.g. app.blendEquation(PicoGL.MIN).

        @method
        @param {GLEnum} mode The operation to use in combining source and destination channels.
        @return {App} The App object.
    */
    blendEquation(mode) {
        this.gl.blendEquation(mode);

        return this;
    }

    /**
        Enable stencil testing.
        NOTE: Only works if { stencil: true } passed as a
        context attribute when creating the App!

        @method
        @return {App} The App object.
    */
    stencilTest() {
        this.gl.enable(this.gl.STENCIL_TEST);

        return this;
    }

    /**
        Disable stencil testing.

        @method
        @return {App} The App object.
    */
    noStencilTest() {
        this.gl.disable(this.gl.STENCIL_TEST);

        return this;
    }

    /**
        Set the bitmask to use for tested stencil values.
        E.g. app.stencilMask(0xFF).
        NOTE: Only works if { stencil: true } passed as a
        context attribute when creating the App!

        @method
        @param {number} mask The mask value.
        @return {App} The App object.

    */
    stencilMask(mask) {
        this.gl.stencilMask(mask);

        return this;
    }

    /**
        Set the bitmask to use for tested stencil values for a particular face orientation.
        E.g. app.stencilMaskSeparate(PicoGL.FRONT, 0xFF).
        NOTE: Only works if { stencil: true } passed as a
        context attribute when creating the App!

        @method
        @param {GLEnum} face The face orientation to apply the mask to.
        @param {number} mask The mask value.
        @return {App} The App object.
    */
    stencilMaskSeparate(face, mask) {
        this.gl.stencilMaskSeparate(face, mask);

        return this;
    }

    /**
        Set the stencil function and reference value.
        E.g. app.stencilFunc(PicoGL.EQUAL, 1, 0xFF).
        NOTE: Only works if { stencil: true } passed as a
        context attribute when creating the App!

        @method
        @param {GLEnum} func The testing function.
        @param {number} ref The reference value.
        @param {GLEnum} mask The bitmask to use against tested values before applying
            the stencil function.
        @return {App} The App object.
    */
    stencilFunc(func, ref, mask) {
        this.gl.stencilFunc(func, ref, mask);

        return this;
    }

    /**
        Set the stencil function and reference value for a particular face orientation.
        E.g. app.stencilFuncSeparate(PicoGL.FRONT, PicoGL.EQUAL, 1, 0xFF).
        NOTE: Only works if { stencil: true } passed as a
        context attribute when creating the App!

        @method
        @param {GLEnum} face The face orientation to apply the function to.
        @param {GLEnum} func The testing function.
        @param {number} ref The reference value.
        @param {GLEnum} mask The bitmask to use against tested values before applying
            the stencil function.
        @return {App} The App object.
    */
    stencilFuncSeparate(face, func, ref, mask) {
        this.gl.stencilFuncSeparate(face, func, ref, mask);

        return this;
    }

    /**
        Set the operations for updating stencil buffer values.
        E.g. app.stencilOp(PicoGL.KEEP, PicoGL.KEEP, PicoGL.REPLACE).
        NOTE: Only works if { stencil: true } passed as a
        context attribute when creating the App!

        @method
        @param {GLEnum} stencilFail Operation to apply if the stencil test fails.
        @param {GLEnum} depthFail Operation to apply if the depth test fails.
        @param {GLEnum} pass Operation to apply if the both the depth and stencil tests pass.
        @return {App} The App object.
    */
    stencilOp(stencilFail, depthFail, pass) {
        this.gl.stencilOp(stencilFail, depthFail, pass);

        return this;
    }

    /**
        Set the operations for updating stencil buffer values for a particular face orientation.
        E.g. app.stencilOpSeparate(PicoGL.FRONT, PicoGL.KEEP, PicoGL.KEEP, PicoGL.REPLACE).
        NOTE: Only works if { stencil: true } passed as a
        context attribute when creating the App!

        @method
        @param {GLEnum} face The face orientation to apply the operations to.
        @param {GLEnum} stencilFail Operation to apply if the stencil test fails.
        @param {GLEnum} depthFail Operation to apply if the depth test fails.
        @param {GLEnum} pass Operation to apply if the both the depth and stencil tests pass.
        @return {App} The App object.
    */
    stencilOpSeparate(face, stencilFail, depthFail, pass) {
        this.gl.stencilOpSeparate(face, stencilFail, depthFail, pass);

        return this;
    }


    /**
        Enable scissor testing.

        @method
        @return {App} The App object.
    */
    scissorTest() {
        this.gl.enable(this.gl.SCISSOR_TEST);

        return this;
    }

    /**
        Disable scissor testing.

        @method
        @return {App} The App object.
    */
    noScissorTest() {
        this.gl.disable(this.gl.SCISSOR_TEST);

        return this;
    }

    /**
        Define the scissor box.

        @method
        @return {App} The App object.
    */
    scissor(x, y, width, height) {
        this.gl.scissor(x, y, width, height);

        return this;
    }

    /**
        Enable rasterization step.

        @method
        @return {App} The App object.
    */
    rasterize() {
        this.gl.disable(this.gl.RASTERIZER_DISCARD);

        return this;
    }

    /**
        Disable rasterization step.

        @method
        @return {App} The App object.
    */
    noRasterize() {
        this.gl.enable(this.gl.RASTERIZER_DISCARD);

        return this;
    }

    /**
        Enable backface culling.

        @method
        @return {App} The App object.
    */
    cullBackfaces() {
        this.gl.enable(this.gl.CULL_FACE);

        return this;
    }

    /**
        Disable backface culling.

        @method
        @return {App} The App object.
    */
    drawBackfaces() {
        this.gl.disable(this.gl.CULL_FACE);

        return this;
    }

    /**
        Read a pixel's color value from the currently-bound framebuffer.

        @method
        @param {number} x The x coordinate of the pixel.
        @param {number} y The y coordinate of the pixel.
        @param {ArrayBufferView} outColor Typed array to store the pixel's color.
        @param {object} [options] Options.
        @param {GLEnum} [options.type=UNSIGNED_BYTE] Type of data stored in the read framebuffer.
        @param {GLEnum} [options.format=RGBA] Read framebuffer data format.
        @return {App} The App object.
    */
    readPixel(x, y, outColor, options = DUMMY_OBJECT) {
        let {
            format = GL.RGBA,
            type = GL.UNSIGNED_BYTE
        } = options;

        this.gl.readPixels(x, y, 1, 1, format, type, outColor);

        return this;
    }

    /**
        Set the viewport.

        @method
        @param {number} x Left bound of the viewport rectangle.
        @param {number} y Lower bound of the viewport rectangle.
        @param {number} width Width of the viewport rectangle.
        @param {number} height Height of the viewport rectangle.
        @return {App} The App object.
    */
    viewport(x, y, width, height) {

        if (this.viewportWidth !== width || this.viewportHeight !== height ||
                this.viewportX !== x || this.viewportY !== y) {
            this.viewportX = x;
            this.viewportY = y;
            this.viewportWidth = width;
            this.viewportHeight = height;
            this.gl.viewport(x, y, this.viewportWidth, this.viewportHeight);
        }

        return this;
    }

    /**
        Set the viewport to the full canvas.

        @method
        @return {App} The App object.
    */
    defaultViewport() {
        this.viewport(0, 0, this.width, this.height);

        return this;
    }

    /**
        Resize the drawing surface.

        @method
        @param {number} width The new canvas width.
        @param {number} height The new canvas height.
        @return {App} The App object.
    */
    resize(width, height) {
        this.canvas.width = width;
        this.canvas.height = height;

        this.width = this.gl.drawingBufferWidth;
        this.height = this.gl.drawingBufferHeight;
        this.viewport(0, 0, this.width, this.height);

        return this;
    }

    /**
        Create a program synchronously. It is highly recommended to use <b>createPrograms</b> instead as
            that method will compile shaders in parallel where possible.
        @method
        @param {Shader|string} vertexShader Vertex shader object or source code.
        @param {Shader|string} fragmentShader Fragment shader object or source code.
        @param {Array} [xformFeedbackVars] Transform feedback varyings.
        @return {Program} New Program object.
    */
    createProgram(vsSource, fsSource, xformFeedbackVars) {
        return new Program(this.gl, this.state, vsSource, fsSource, xformFeedbackVars)
            .link()
            .checkLinkage();
    }

    /**
        Create several programs. Preferred method for program creation as it will compile shaders
        in parallel where possible.

        @method
        @param {...Array} sources Variable number of 2 or 3 element arrays, each containing:
            <ul>
                <li> (Shader|string) Vertex shader object or source code.
                <li> (Shader|string) Fragment shader object or source code.
                <li> (Array - optional) Array of names of transform feedback varyings.
            </ul>
        @return {Promise} Promise that will resolve to an array of Programs when compilation and
            linking are complete for all programs.
    */
    createPrograms(...sources) {
        return new Promise((resolve, reject) => {
            let numPrograms = sources.length;
            let programs = new Array(numPrograms);
            let pendingPrograms = new Array(numPrograms);
            let numPending = numPrograms;

            for (let i = 0; i < numPrograms; ++i) {
                let source = sources[i];
                let vsSource = source[0];
                let fsSource = source[1];
                let xformFeedbackVars = source[2];
                programs[i] = new Program(this.gl, this.state, vsSource, fsSource, xformFeedbackVars);
                pendingPrograms[i] = programs[i];
            }

            for (let i = 0; i < numPrograms; ++i) {
                programs[i].link();
            }

            let poll = () => {
                let linked = 0;
                for (let i = 0; i < numPending; ++i) {
                    if (pendingPrograms[i].checkCompletion()) {
                        pendingPrograms[i].checkLinkage();
                        if (pendingPrograms[i].linked) {
                            ++linked;
                        } else {
                            reject(new Error("Program linkage failed"));
                            return;
                        }
                    } else {
                        pendingPrograms[i - linked] = pendingPrograms[i];
                    }
                }

                numPending -= linked;

                if (numPending === 0) {
                    resolve(programs);
                } else {
                    requestAnimationFrame(poll);
                }
            };

            poll();
        });
    }

    /**
        Restore several programs after a context loss. Will do so in parallel where available.

        @method
        @param {...Program} sources Variable number of programs to restore.

        @return {Promise} Promise that will resolve once all programs have been restored.
    */
    restorePrograms(...programs) {
        return new Promise((resolve, reject) => {
            let numPrograms = programs.length;
            let pendingPrograms = programs.slice();
            let numPending = numPrograms;

            for (let i = 0; i < numPrograms; ++i) {
                programs[i].initialize();
            }

            for (let i = 0; i < numPrograms; ++i) {
                programs[i].link();
            }

            for (let i = 0; i < numPrograms; ++i) {
                programs[i].checkCompletion();
            }

            let poll = () => {
                let linked = 0;
                for (let i = 0; i < numPending; ++i) {
                    if (pendingPrograms[i].checkCompletion()) {
                        pendingPrograms[i].checkLinkage();
                        if (pendingPrograms[i].linked) {
                            ++linked;
                        } else {
                            reject(new Error("Program linkage failed"));
                            return;
                        }
                    } else {
                        pendingPrograms[i - linked] = pendingPrograms[i];
                    }
                }

                numPending -= linked;

                if (numPending === 0) {
                    resolve();
                } else {
                    requestAnimationFrame(poll);
                }
            };

            poll();
        });
    }

    /**
        Create a shader. Creating a shader separately from a program allows for
        shader reuse.

        @method
        @param {GLEnum} type Shader type.
        @param {string} source Shader source.
        @return {Shader} New Shader object.
    */
    createShader(type, source) {
        return new Shader(this.gl, this.state, type, source);
    }

    /**
        Create a vertex array.

        @method
        @return {VertexArray} New VertexArray object.
    */
    createVertexArray() {
        return new VertexArray(this.gl, this.state);
    }

    /**
        Create a transform feedback object.

        @method
        @return {TransformFeedback} New TransformFeedback object.
    */
    createTransformFeedback() {
        return new TransformFeedback(this.gl, this.state);
    }

    /**
        Create a vertex buffer.

        @method
        @param {GLEnum} type The data type stored in the vertex buffer.
        @param {number} itemSize Number of elements per vertex.
        @param {ArrayBufferView|number} data Buffer data itself or the total
            number of elements to be allocated.
        @param {GLEnum} [usage=STATIC_DRAW] Buffer usage.
        @return {VertexBuffer} New VertexBuffer object.
    */
    createVertexBuffer(type, itemSize, data, usage) {
        return new VertexBuffer(this.gl, this.state, type, itemSize, data, usage);
    }

    /**
        Create a per-vertex matrix buffer. Matrix buffers ensure that columns
        are correctly split across attribute locations.

        @method
        @param {GLEnum} type The data type stored in the matrix buffer. Valid types
        are FLOAT_MAT4, FLOAT_MAT4x2, FLOAT_MAT4x3, FLOAT_MAT3, FLOAT_MAT3x2,
        FLOAT_MAT3x4, FLOAT_MAT2, FLOAT_MAT2x3, FLOAT_MAT2x4.
        @param {ArrayBufferView} data Matrix buffer data.
        @param {GLEnum} [usage=STATIC_DRAW] Buffer usage.
        @return {VertexBuffer} New VertexBuffer object.
    */
    createMatrixBuffer(type, data, usage) {
        return new VertexBuffer(this.gl, this.state, type, 0, data, usage);
    }

    /**
        Create an buffer without any structure information. Structure
        must be fully specified when binding to a VertexArray.

        @method
        @param {number} bytesPerVertex Number of bytes per vertex.
        @param {ArrayBufferView|number} data Buffer data itself or the total
            number of bytes to be allocated.
        @param {GLEnum} [usage=STATIC_DRAW] Buffer usage.
        @return {VertexBuffer} New VertexBuffer object.
    */
    createInterleavedBuffer(bytesPerVertex, data, usage) {
        return new VertexBuffer(this.gl, this.state, null, bytesPerVertex, data, usage);
    }

    /**
        Create an index buffer.

        @method
        @param {GLEnum} type The data type stored in the index buffer.
        @param {number} itemSize Number of elements per primitive.
        @param {ArrayBufferView} data Index buffer data.
        @param {GLEnum} [usage=STATIC_DRAW] Buffer usage.
        @return {VertexBuffer} New VertexBuffer object.
    */
    createIndexBuffer(type, itemSize, data, usage) {
        return new VertexBuffer(this.gl, this.state, type, itemSize, data, usage, true);
    }

    /**
        Create a uniform buffer in std140 layout. NOTE: FLOAT_MAT2, FLOAT_MAT3x2, FLOAT_MAT4x2,
        FLOAT_MAT3, FLOAT_MAT2x3, FLOAT_MAT4x3 are supported, but must be manually padded to
        4-float column alignment by the application!

        @method
        @param {Array} layout Array indicating the order and types of items to
                        be stored in the buffer.
        @param {GLEnum} [usage=DYNAMIC_DRAW] Buffer usage.
        @return {UniformBuffer} New UniformBuffer object.
    */
    createUniformBuffer(layout, usage) {
        return new UniformBuffer(this.gl, this.state, layout, usage);
    }

    /**
        Create a 2D texture. Can be used in several ways depending on the type of texture data:
        <ul>
            <li><b>app.createTexture2D(ImageElement, options)</b>: Create texture from a DOM image element.
            <li><b>app.createTexture2D(TypedArray, width, height, options)</b>: Create texture from a typed array.
            <li><b>app.createTexture2D(width, height, options)</b>: Create empty texture.
        </ul>

        @method
        @param {DOMElement|ArrayBufferView|Array} [image] Image data. An array can be passed to manually set all levels
            of the mipmap chain. If a single level is passed and mipmap filtering is being used,
            generateMipmap() will be called to produce the remaining levels.
        @param {number} [width] Texture width. Required for array or empty data.
        @param {number} [height] Texture height. Required for array or empty data.
        @param {Object} [options] Texture options.
        @param {GLEnum} [options.internalFormat=RGBA8] Texture data internal format. Must be a sized format.
        @param {GLEnum} [options.type] Type of data stored in the texture. Default based on
            <b>internalFormat</b>.
        @param {boolean} [options.flipY=false] Whether the y-axis should be flipped when unpacking the texture.
        @param {boolean} [options.premultiplyAlpha=false] Whether the alpha channel should be pre-multiplied when unpacking the texture.
        @param {GLEnum} [options.minFilter] Minification filter. Defaults to
            LINEAR_MIPMAP_NEAREST if image data is provided, NEAREST otherwise.
        @param {GLEnum} [options.magFilter] Magnification filter. Defaults to LINEAR
            if image data is provided, NEAREST otherwise.
        @param {GLEnum} [options.wrapS=REPEAT] Horizontal wrap mode.
        @param {GLEnum} [options.wrapT=REPEAT] Vertical wrap mode.
        @param {GLEnum} [options.compareMode=NONE] Comparison mode.
        @param {GLEnum} [options.compareFunc=LEQUAL] Comparison function.
        @param {GLEnum} [options.baseLevel] Base mipmap level.
        @param {GLEnum} [options.maxLevel] Maximum mipmap level.
        @param {GLEnum} [options.minLOD] Mimimum level of detail.
        @param {GLEnum} [options.maxLOD] Maximum level of detail.
        @param {GLEnum} [options.maxAnisotropy] Maximum anisotropy in filtering.
        @return {Texture} New Texture object.
    */
    createTexture2D(image, width, height, options) {
        if (typeof image === "number") {
            // Create empty texture just give width/height.
            options = height;
            height = width;
            width = image;
            image = null;
        } else if (height === undefined) {
            // Passing in a DOM element. Height/width not required.
            options = width;
            width = image.width;
            height = image.height;
        }

        return new Texture$1(this.gl, this.state, this.gl.TEXTURE_2D, image, width, height, undefined, false, options);
    }

    /**
        Create a 2D texture array.

        @method
        @param {ArrayBufferView|Array} image Pixel data. An array can be passed to manually set all levels
            of the mipmap chain. If a single level is passed and mipmap filtering is being used,
            generateMipmap() will be called to produce the remaining levels.
        @param {number} width Texture width.
        @param {number} height Texture height.
        @param {number} size Number of images in the array.
        @param {Object} [options] Texture options.
        @param {GLEnum} [options.internalFormat=RGBA8] Texture data internal format. Must be a sized format.
        @param {GLEnum} [options.type] Type of data stored in the texture. Default based on
            <b>internalFormat</b>.
        @param {boolean} [options.flipY=false] Whether the y-axis should be flipped when unpacking the texture.
        @param {GLEnum} [options.minFilter] Minification filter. Defaults to
            LINEAR_MIPMAP_NEAREST if image data is provided, NEAREST otherwise.
        @param {GLEnum} [options.magFilter] Magnification filter. Defaults to LINEAR
            if image data is provided, NEAREST otherwise.
        @param {GLEnum} [options.wrapS=REPEAT] Horizontal wrap mode.
        @param {GLEnum} [options.wrapT=REPEAT] Vertical wrap mode.
        @param {GLEnum} [options.wrapR=REPEAT] Depth wrap mode.
        @param {GLEnum} [options.compareMode=NONE] Comparison mode.
        @param {GLEnum} [options.compareFunc=LEQUAL] Comparison function.
        @param {GLEnum} [options.baseLevel] Base mipmap level.
        @param {GLEnum} [options.maxLevel] Maximum mipmap level.
        @param {GLEnum} [options.minLOD] Mimimum level of detail.
        @param {GLEnum} [options.maxLOD] Maximum level of detail.
        @param {GLEnum} [options.maxAnisotropy] Maximum anisotropy in filtering.
        @return {Texture} New Texture object.
    */
    createTextureArray(image, width, height, depth, options) {
        if (typeof image === "number") {
            // Create empty texture just give width/height/depth.
            options = depth;
            depth = height;
            height = width;
            width = image;
            image = null;
        }
        return new Texture$1(this.gl, this.state, this.gl.TEXTURE_2D_ARRAY, image, width, height, depth, true, options);
    }

    /**
        Create a 3D texture.

        @method
        @param {ArrayBufferView|Array} image Pixel data. An array can be passed to manually set all levels
            of the mipmap chain. If a single level is passed and mipmap filtering is being used,
            generateMipmap() will be called to produce the remaining levels.
        @param {number} width Texture width.
        @param {number} height Texture height.
        @param {number} depth Texture depth.
        @param {Object} [options] Texture options.
        @param {GLEnum} [options.internalFormat=RGBA8] Texture data internal format. Must be a sized format.
        @param {GLEnum} [options.type] Type of data stored in the texture. Default based on
            <b>internalFormat</b>.
        @param {boolean} [options.flipY=false] Whether the y-axis should be flipped when unpacking the texture.
        @param {GLEnum} [options.minFilter] Minification filter. Defaults to
            LINEAR_MIPMAP_NEAREST if image data is provided, NEAREST otherwise.
        @param {GLEnum} [options.magFilter] Magnification filter. Defaults to LINEAR
            if image data is provided, NEAREST otherwise.
        @param {GLEnum} [options.wrapS=REPEAT] Horizontal wrap mode.
        @param {GLEnum} [options.wrapT=REPEAT] Vertical wrap mode.
        @param {GLEnum} [options.wrapR=REPEAT] Depth wrap mode.
        @param {GLEnum} [options.compareMode=NONE] Comparison mode.
        @param {GLEnum} [options.compareFunc=LEQUAL] Comparison function.
        @param {GLEnum} [options.baseLevel] Base mipmap level.
        @param {GLEnum} [options.maxLevel] Maximum mipmap level.
        @param {GLEnum} [options.minLOD] Mimimum level of detail.
        @param {GLEnum} [options.maxLOD] Maximum level of detail.
        @param {GLEnum} [options.maxAnisotropy] Maximum anisotropy in filtering.
        @return {Texture} New Texture object.
    */
    createTexture3D(image, width, height, depth, options) {
        if (typeof image === "number") {
            // Create empty texture just give width/height/depth.
            options = depth;
            depth = height;
            height = width;
            width = image;
            image = null;
        }
        return new Texture$1(this.gl, this.state, this.gl.TEXTURE_3D, image, width, height, depth, true, options);
    }

    /**
        Create a cubemap.

        @method
        @param {Object} options Texture options.
        @param {DOMElement|ArrayBufferView} [options.negX] The image data for the negative X direction.
                Can be any format that would be accepted by texImage2D.
        @param {DOMElement|ArrayBufferView} [options.posX] The image data for the positive X direction.
                Can be any format that would be accepted by texImage2D.
        @param {DOMElement|ArrayBufferView} [options.negY] The image data for the negative Y direction.
                Can be any format that would be accepted by texImage2D.
        @param {DOMElement|ArrayBufferView} [options.posY] The image data for the positive Y direction.
                Can be any format that would be accepted by texImage2D.
        @param {DOMElement|ArrayBufferView} [options.negZ] The image data for the negative Z direction.
                Can be any format that would be accepted by texImage2D.
        @param {DOMElement|ArrayBufferView} [options.posZ] The image data for the positive Z direction.
                Can be any format that would be accepted by texImage2D.
        @param {number} [options.width] Cubemap side width. Defaults to the width of negX if negX is an image.
        @param {number} [options.height] Cubemap side height. Defaults to the height of negX if negX is an image.
        @param {GLEnum} [options.internalFormat=RGBA8] Texture data internal format. Must be a sized format.
        @param {GLEnum} [options.type] Type of data stored in the texture. Default based on
            <b>internalFormat</b>.
        @param {boolean} [options.flipY=false] Whether the y-axis should be flipped when unpacking the image.
        @param {boolean} [options.premultiplyAlpha=false] Whether the alpha channel should be pre-multiplied when unpacking the image.
        @param {GLEnum} [options.minFilter] Minification filter. Defaults to
            LINEAR_MIPMAP_NEAREST if image data is provided, NEAREST otherwise.
        @param {GLEnum} [options.magFilter] Magnification filter. Defaults to LINEAR
            if image data is provided, NEAREST otherwise.
        @param {GLEnum} [options.wrapS=REPEAT] Horizontal wrap mode.
        @param {GLEnum} [options.wrapT=REPEAT] Vertical wrap mode.
        @param {GLEnum} [options.compareMode=NONE] Comparison mode.
        @param {GLEnum} [options.compareFunc=LEQUAL] Comparison function.
        @param {GLEnum} [options.baseLevel] Base mipmap level.
        @param {GLEnum} [options.maxLevel] Maximum mipmap level.
        @param {GLEnum} [options.minLOD] Mimimum level of detail.
        @param {GLEnum} [options.maxLOD] Maximum level of detail.
        @param {GLEnum} [options.maxAnisotropy] Maximum anisotropy in filtering.
        @return {Cubemap} New Cubemap object.
    */
    createCubemap(options) {
        return new Cubemap(this.gl, this.state, options);
    }

    /**
        Create a renderbuffer.

        @method
        @param {number} width Renderbuffer width.
        @param {number} height Renderbuffer height.
        @param {GLEnum} internalFormat Internal arrangement of the renderbuffer data.
        @param {number} [samples=0] Number of MSAA samples.
        @return {Renderbuffer} New Renderbuffer object.
    */
    createRenderbuffer(width, height, internalFormat, samples = 0) {
        return new Renderbuffer(this.gl, width, height, internalFormat, samples);
    }

    /**
        Create a framebuffer.

        @method
        @return {Framebuffer} New Framebuffer object.
    */
    createFramebuffer() {
        return new Framebuffer(this.gl, this.state);
    }

    /**
        Create a query.

        @method
        @param {GLEnum} target Information to query.
        @return {Query} New Query object.
    */
    createQuery(target) {
        return new Query(this.gl, target);
    }

    /**
        Create a timer.

        @method
        @return {Timer} New Timer object.
    */
    createTimer() {
        return new Timer(this.gl);
    }

    /**
        Create a DrawCall. A DrawCall manages the state associated with
        a WebGL draw call including a program and associated vertex data, textures,
        uniforms and uniform blocks.

        @method
        @param {Program} program The program to use for this DrawCall.
        @param {VertexArray} [vertexArray=null] Vertex data to use for drawing.
        @return {DrawCall} New DrawCall object.
    */
    createDrawCall(program, vertexArray, primitive) {
        return new DrawCall(this.gl, this.state, program, vertexArray, primitive);
    }

    // Enable extensions
    initExtensions() {
        this.gl.getExtension("EXT_color_buffer_float");
        this.gl.getExtension("OES_texture_float_linear");
        this.gl.getExtension("WEBGL_compressed_texture_s3tc");
        this.gl.getExtension("WEBGL_compressed_texture_s3tc_srgb");
        this.gl.getExtension("WEBGL_compressed_texture_etc");
        this.gl.getExtension("WEBGL_compressed_texture_astc");
        this.gl.getExtension("WEBGL_compressed_texture_pvrtc");
        this.gl.getExtension("EXT_disjoint_timer_query_webgl2");
        this.gl.getExtension("EXT_disjoint_timer_query");
        this.gl.getExtension("EXT_texture_filter_anisotropic");

        this.state.extensions.debugShaders = this.gl.getExtension("WEBGL_debug_shaders");
        this.contextLostExt = this.gl.getExtension("WEBGL_lose_context");

        // Draft extensions
        this.gl.getExtension("KHR_parallel_shader_compile");
        this.state.extensions.multiDrawInstanced = this.gl.getExtension("WEBGL_multi_draw_instanced");
    }

}

///////////////////////////////////////////////////////////////////////////////////
// The MIT License (MIT)
//
// Copyright (c) 2017 Tarek Sherif
//
// Permission is hereby granted, free of charge, to any person obtaining a copy of
// this software and associated documentation files (the "Software"), to deal in
// the Software without restriction, including without limitation the rights to
// use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of
// the Software, and to permit persons to whom the Software is furnished to do so,
// subject to the following conditions:
//
// The above copyright notice and this permission notice shall be included in all
// copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
// FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
// COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
// IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
// CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
///////////////////////////////////////////////////////////////////////////////////


let webglInfoInitialized = false;

/**
    Global PicoGL module. For convenience, all WebGL enums are stored
    as properties of PicoGL (e.g. PicoGL.FLOAT, PicoGL.ONE_MINUS_SRC_ALPHA).

    @namespace PicoGL
*/
const PicoGL = Object.assign({
    version: "0.15.1",

    WEBGL_INFO,

    /**
        Create a PicoGL app. The app is the primary entry point to PicoGL. It stores
        the canvas, the WebGL context and all WebGL state.

        @function PicoGL.createApp
        @param {DOMElement} canvas The canvas on which to create the WebGL context.
        @param {Object} [contextAttributes] Context attributes to pass when calling getContext().
        @return {App} New App object.
    */
    createApp(canvas, contextAttributes) {
        let gl = canvas.getContext("webgl2", contextAttributes);
        if (!webglInfoInitialized) {
            WEBGL_INFO.MAX_TEXTURE_UNITS = gl.getParameter(GL.MAX_COMBINED_TEXTURE_IMAGE_UNITS);
            WEBGL_INFO.MAX_UNIFORM_BUFFERS = gl.getParameter(GL.MAX_UNIFORM_BUFFER_BINDINGS);
            WEBGL_INFO.MAX_UNIFORMS = Math.min(
                gl.getParameter(GL.MAX_VERTEX_UNIFORM_VECTORS),
                gl.getParameter(GL.MAX_FRAGMENT_UNIFORM_VECTORS)
            );
            WEBGL_INFO.SAMPLES = gl.getParameter(GL.SAMPLES);
            WEBGL_INFO.VENDOR = "(Unknown)";
            WEBGL_INFO.RENDERER = "(Unknown)";

            // Extensions
            WEBGL_INFO.FLOAT_RENDER_TARGETS = Boolean(gl.getExtension("EXT_color_buffer_float"));
            WEBGL_INFO.LINEAR_FLOAT_TEXTURES = Boolean(gl.getExtension("OES_texture_float_linear"));
            WEBGL_INFO.S3TC_TEXTURES = Boolean(gl.getExtension("WEBGL_compressed_texture_s3tc"));
            WEBGL_INFO.S3TC_SRGB_TEXTURES = Boolean(gl.getExtension("WEBGL_compressed_texture_s3tc_srgb"));
            WEBGL_INFO.ETC_TEXTURES = Boolean(gl.getExtension("WEBGL_compressed_texture_etc"));
            WEBGL_INFO.ASTC_TEXTURES = Boolean(gl.getExtension("WEBGL_compressed_texture_astc"));
            WEBGL_INFO.PVRTC_TEXTURES = Boolean(gl.getExtension("WEBGL_compressed_texture_pvrtc"));
            WEBGL_INFO.LOSE_CONTEXT = Boolean(gl.getExtension("WEBGL_lose_context"));
            WEBGL_INFO.DEBUG_SHADERS = Boolean(gl.getExtension("WEBGL_debug_shaders"));
            WEBGL_INFO.GPU_TIMER = Boolean(gl.getExtension("EXT_disjoint_timer_query_webgl2") || gl.getExtension("EXT_disjoint_timer_query"));
            
            WEBGL_INFO.TEXTURE_ANISOTROPY = Boolean(gl.getExtension("EXT_texture_filter_anisotropic"));
            WEBGL_INFO.MAX_TEXTURE_ANISOTROPY = WEBGL_INFO.TEXTURE_ANISOTROPY ? gl.getParameter(GL.MAX_TEXTURE_MAX_ANISOTROPY_EXT) : 1;

            WEBGL_INFO.DEBUG_RENDERER_INFO = Boolean(gl.getExtension("WEBGL_debug_renderer_info"));
            if (WEBGL_INFO.DEBUG_RENDERER_INFO) {
                WEBGL_INFO.VENDOR = gl.getParameter(GL.UNMASKED_VENDOR_WEBGL);
                WEBGL_INFO.RENDERER = gl.getParameter(GL.UNMASKED_RENDERER_WEBGL);
            }

            // Draft extensions
            WEBGL_INFO.PARALLEL_SHADER_COMPILE = Boolean(gl.getExtension("KHR_parallel_shader_compile"));
            WEBGL_INFO.MULTI_DRAW_INSTANCED = Boolean(gl.getExtension("WEBGL_multi_draw_instanced"));

            webglInfoInitialized = true;
        }
        return new App(gl, canvas);
    }
}, GL);

const mapget = (m, k, init) => {
    if (!m.has(k))
        m.set(k, init());
    let v = m.get(k);
    if (v === undefined) {
        return init();
    }
    return v;
};

let prefix = 'x_';
let math = `
    const float pi = 3.1415926535897932384626433832795;
    // https://en.wikipedia.org/wiki/Waveform
    // #define sine(x)     smoothstep(0., 1., wave(x))
    // #define square(x)   step(0.5, wave(x))
    // #define sawtooth(x) mod(wave(x), 1.)
    float priv_lwave(float t) {
        return 1. - abs(mod(t, 1.) * 2. - 1.);
    }
    float wave(float t) {
        return smoothstep(0., 1., priv_lwave(t));
        // not the same: ...
        // return sin(t * pi * 2. - pi * 0.5) * 0.5 + 0.5; // CHECK
    }
    /*
        vec2 bezier(vec2 a, vec2 b, vec2 c, vec2 d, float t) {
            return pow(1. - t, 3.) * a + 3. * pow(1. - t, 2.) * t * b + 3. * (1. - t) * pow(t, 2.) * c + pow(t, 3.) * d;
        }
        float ease(float x, float y, float a, float b, float t) {
            return bezier(vec2(0.), vec2(x, y), vec2(a, b), vec2(1.), t).y;
        }
    */
    // rescale: a/b == rescale(a, 0, b, 0, 1)
    float rescale(float x, float amin, float amax, float bmin, float bmax) {
        float a = amax - amin;
        float b = bmax - bmin;
        return (x - amin) * b / a + bmin;
    }
    // float range(float amin, float amax, float bmin, float bmax, float x) {
    //     float a = amax - amin;
    //     float b = bmax - bmin;
    //     return (x - amin) * b / a + bmin;
    // }
`;
let matrices = `
    mat4 translate(float x, float y, float z) {
        return mat4(
            1, 0, 0, 0,
            0, 1, 0, 0,
            0, 0, 1, 0,
            x, y, z, 1
        );
    }
    mat4 rotatex(float a) {
        float c = cos(a);
        float s = sin(a);
        return mat4(
            1, 0, 0, 0,
            0, c, s, 0,
            0,-s, c, 0,
            0, 0, 0, 1
        );
    }
    mat4 rotatey(float a) {
        float c = cos(a);
        float s = sin(a);
        return mat4(
            c, 0,-s, 0,
            0, 1, 0, 0,
            s, 0, c, 0,
            0, 0, 0, 1
        );
    }
    mat4 rotatez(float a) {
        float c = cos(a);
        float s = sin(a);
        return mat4(
            c, s, 0, 0,
           -s, c, 0, 0,
            0, 0, 1, 0,
            0, 0, 0, 1
        );
    }
    mat4 scale(float x, float y, float z) {
        return mat4(
            x, 0, 0, 0,
            0, y, 0, 0,
            0, 0, z, 0,
            0, 0, 0, 1
        );
    }


    float hfov2v(float hfov, float aspect) {
        return 2. * atan(tan(hfov * 0.5) / aspect);
    }
    float vfov2h(float vfov, float aspect) {
        return 2. * atan(tan(vfov * 0.5) * aspect);
    }
    // float f = 1. / tan(radians(fov) * 0.5);
    // infinite far: [10]: -1, [14]: -2 * near
    mat4 perspective_vfov_r(float vfov, float aspect, float near, float far) {
        float f = tan(pi * 0.5 - 0.5 * vfov);
        float rangeinv = 1.0 / (near - far);
        return mat4(
            f / aspect, 0,                            0,  0,
                     0, f,                            0,  0,
                     0, 0, (near + far) * rangeinv * 1., -1,
                     0, 0,  near * far  * rangeinv * 2.,  0
        );
    }
    mat4 perspective(float fov, float aspect, float near, float far) {
        return perspective_vfov_r(radians(fov), aspect, near, far);
    }





    mat4 frustum(float left, float right, float bottom, float top, float near, float far) {
        float dx = right - left;
        float dy = top - bottom;
        float dz = near - far;
        return mat4(
            2. * near / dx, 0, 0, 0,
            0, 2. * near / dy, 0, 0,
            (left + right) / dx, (top + bottom) / dy, far / dz, -1,
            0, 0, near * far / dz, 0
        );
    }

    mat4 ortho(float left, float right, float top, float bottom, float near, float far) {
        float w = 1. / (right - left);
        float h = 1. / (top - bottom);
        float p = 1. / (far - near);
        float x = (right + left) * w;     // far + near is 1, far - near is 1
        float y = (top + bottom) * h;
        float z = (far + near) * p;
        return transpose(mat4(
            2. * w,      0,       0, -x,
                0, 2. * h,       0, -y,
                0,      0, -2. * p, -z,
                0,      0,       0,  1
        ));
    }


    // mat4 ortho_2(float left, float right, float top, float bottom, float near, float far) {
    //     return mat4(
    //         2. / (right - left),      0,       0, 0,
    //         0,                     2. / (top - bottom),       0, 0,
    //             0,      0,                     2. / (far - near), 0,
    //         (right + left) / (right-left), (top + bottom) / (top-bottom), (far + near) / (far-near),  1
    //     );
    // }




    const mat4 orthoquad = mat4( // ortho(-0.5, 0.5, 0.5, -0.5, 0., 1.)
        2., 0,  0,   0,
        0,  2., 0,  -0,
        0,  0, -2., -1.,
        0,  0,  0,   1.
    );
    // const mat4 orthoquad = mat4(
    //     1, 0, 0, -0,
    //     0, 1, 0, -0,
    //     0, 0, -1, -0,
    //     0, 0, 0, 1
    // );




    // vec3 rvec_dir(mat3 m, vec3 dir) {
    //     return vec3(
    //         m[0].x * dir.x + m[1].x * dir.y + m[2].x * dir.z,
    //         m[0].y * dir.x + m[1].y * dir.y + m[2].y * dir.z,
    //         m[0].z * dir.x + m[1].z * dir.y + m[2].z * dir.z
    //     );
    // }
    vec3 position(mat4 m) {
        return m[3].xyz;
    }
    // mat3 rotation(mat3 m, vec3 scale) {
    //     return mat3(m[0] * (1./scale.x), m[1] * (1./scale.y), m[2] * (1./scale.z));
    // }
        //  position
        //  rotation
        //  scaledup
    vec3 get_scale(mat4 m) {
        vec3 s = vec3(length(m[0].xyz), length(m[1].xyz), length(m[2].xyz));
        float det = determinant(m);
        if(det < 0.) s.x = -s.x;
        return s;
    }
    vec3[3] decompose_unsafe(mat4 m) {
        vec3 p = position(m);
        vec3 s = get_scale(m);
        m[0].xyz *= 1. / s.x;
        m[1].xyz *= 1. / s.y;
        m[2].xyz *= 1. / s.z;
		float m11 = m[0].x, m12 = m[1].x, m13 = m[2].x;
        float m21 = m[0].y, m22 = m[1].y, m23 = m[2].y;
		float m31 = m[0].z, m32 = m[1].z, m33 = m[2].z;
        // euler xyz
        float y = asin(clamp(m13, -1., 1.));
        float x, z;
        if(abs(m13) < 0.9999999) {
            x = atan(-m23, m33);
            z = atan(-m12, m11);
        }
        else {
            x = atan(m32, m22);
            z = 0.;
        }
        vec3[3] r;
        r[0] = p;
        r[1] = vec3(x, y, z);
        r[2] = s;
        return r;
    }

    mat4 lookatup(vec3 eye, vec3 t, vec3 up) {
        vec3 p = eye;
        vec3 z = normalize(p - t);
        vec3 x = normalize(cross(up, z));
        vec3 y = normalize(cross(z, x));
        return mat4(
            x[0], x[1], x[2], 0,
            y[0], y[1], y[2], 0,
            z[0], z[1], z[2], 0,
            p[0], p[1], p[2], 1
        );
    }
    mat4 lookat(vec3 eye, vec3 t) {
        return lookatup(eye, t, vec3(0, 1, 0));
    }

    // float length_sq(vec3 a) {
    //     return a.x * a.x + a.y *a. y + a.z * a.z;
    // }
    // mat4 threejs_lookat(vec3 eye, vec3 target, vec3 up) {
    //     vec3 z = eye - target;
    //     if(length_sq(z) == 0.) z.z = 1.; // eye and target are in the same position
    //     z = normalize(z);
    //     vec3 x = cross(up, z);
    //     if(length_sq(x) == 0.) { // up and z are parallel
    //         if(abs(up.z) == 1.) z.x += 0.0001;
    //         else                z.z += 0.0001;
    //         z = normalize(z);
    //         x = cross(up, z);
    //     }
    //     x = normalize(x);
    //     vec3 y = cross(z, x);
    //     return mat4(
    //         x[0], x[1], x[2], 0,
    //         y[0], y[1], y[2], 0,
    //         z[0], z[1], z[2], 0,
    //         eye[0], eye[1], eye[2], 1
    //     );
    // }
    // mat4 lookat(mat4 m, vec3 target) {
    //     vec3 eye = position(m);
    //     vec3 up = vec3(0, 1, 0);
    //     return threejs_lookat(eye, target, up);
    // }


    // mat4 lookatz(mat4 m, vec3 t) {
    //     vec3 up = upvec(m);
    //     return lookatup(m, t, up);
    // }

    // vec3 upvec(mat4 m) {
    //     return normalize(vec3(m[1][0], m[1][1], m[1][2]));
    // }

    // mat4 billboard(mat4 m, mat4 camera) {
    //     vec3 up = upvec(camera);
    //     return lookatup(m, -position(camera), up);
    // }
    // mat4 billboardz(mat4 m, mat4 camera) {
    //     return lookatup(m, -position(camera), vec3(0, 1, 0));
    // }
`;
// 1000 _ 0.03
//   15 _ 0.1
let lights = `

bool wrap(vec2 uv) {
    return uv.x < 0. || uv.x > 1. || uv.y < 0. || uv.y > 1.;
}

    float diffuse(vec3 light, vec3 pos, vec3 normal) {
        vec3 dist = light - pos.xyz;
        return max(0., dot(normal, normalize(dist)));
    }
    float specular(vec3 light, vec3 pos, vec3 normal, vec3 eye, float shininess) {
        vec3 lightpos = light;
        vec3 eyedir = normalize(eye - pos.xyz);
        vec3 lightdir = normalize(lightpos - pos.xyz);
        vec3 halfv = normalize(eyedir + lightdir);
        return pow(max(dot(normal, halfv), 0.), shininess);
    }
    // https://danielilett.com/2019-06-12-tut2-3-fresnel/
    float fresnel(vec3 pos, vec3 normal, vec3 eye) {
        vec3 v = normalize(eye - pos.xyz);
        return 1. - dot(normal, v);
    }

    // projective texture mapping
    // vec2 projuv(mat4 view, mat4 proj, vec3 pos) {
    //     vec4 uv = proj * inverse(view) * vec4(pos, 1);
    //     if(uv.w < 0.) return vec2(-1);
    //     return (uv.xy / uv.w) * 0.5 + 0.5;
    // }


    bool do_light(vec3 light, vec3 pos, vec3 normal) {
        vec3 dir = normalize(light - pos);
        return dot(dir, normal) >= 0.;
    }

    vec2 projuv(mat4 view, mat4 proj, vec3 pos, vec3 normal) {
        if(!do_light(position(view), pos, normal)) return vec2(-1);
        vec4 uv = proj * inverse(view) * vec4(pos, 1);
        if(uv.w <= 0.) return vec2(-1);
        if(-uv.w <= uv.x && uv.x <= uv.w && -uv.w <= uv.y && uv.y <= uv.w && -uv.w <= uv.z && uv.z <= uv.w) {
            return (uv.xy / uv.w) * 0.5 + 0.5;
        }        
        return vec2(-1);
    }
    vec2 sphereuv(vec3 n) {
        return vec2(
            0.5 + atan(n.z, n.x) / (pi * 2.),
            0.5 - asin(n.y) / pi
        );
    }
    vec2 spotmap_x(mat4 view, vec3 pos) {
        vec3 dist = normalize(position(view) - pos.xyz);
        vec3 ray = dist * mat3(view);
        return sphereuv(ray * mat3(rotatey(pi / -2.)));
    }
    vec2 spotmap_nope(mat4 view, vec3 pos, float angle) {
        if(angle != 1.) return vec2(-1);
        return spotmap_x(view, pos);
    }

    vec2 spotuv(mat4 light, vec3 pos, vec3 normal) {
        if(!do_light(position(light), pos, normal)) return vec2(-1);
        // light *= rotatex(0.000000001);
        return spotmap_x(light, pos);
    }

    float dist(vec3 light, vec3 pos, float d) {
        float n = distance(light, pos);
        return 1. - rescale(clamp(n, 0., d), 0., d, 0., 1.);
    }



    float shadow(mat4 light, mat4 proj, sampler2D map, vec4 pos, float bias) {
        vec4 fpos = proj * inverse(light) * pos;
        vec3 uv = fpos.xyz / fpos.w;
        uv = uv * 0.5 + 0.5;
        float r = 0.;
        if(!wrap(uv.xy)) {
            float closestDepth = texture(map, uv.xy).r; 
            float currentDepth = uv.z;
            r = currentDepth - bias > closestDepth  ? 1.0 : 0.0; 
        }
        return r;
    }


    vec3 cubeuv(vec3 v) {
        float faceIndex;
        vec3 vAbs = abs(v);
        float ma;
        vec2 uv;
        if(vAbs.z >= vAbs.x && vAbs.z >= vAbs.y) {
            faceIndex = v.z < 0.0 ? 5.0 : 4.0;
            ma = 0.5 / vAbs.z;
            uv = vec2(v.z < 0.0 ? -v.x : v.x, -v.y);
        }
        else if(vAbs.y >= vAbs.x) {
            faceIndex = v.y < 0.0 ? 2.0 : 3.0;
            ma = 0.5 / vAbs.y;
            uv = vec2(v.x, v.y < 0.0 ? -v.z : v.z);
        }
        else {
            faceIndex = v.x < 0.0 ? 1.0 : 0.0;
            ma = 0.5 / vAbs.x;
            uv = vec2(v.x < 0.0 ? v.z : -v.z, -v.y);
        }
        return vec3(uv * ma + 0.5, faceIndex);
    }

    vec4 cubemap(vec3 dir, sampler2D right, sampler2D left, sampler2D top, sampler2D bottom, sampler2D front, sampler2D back) {
        vec3 st = cubeuv(dir);
        if(st[2] == 0.) return texture(right,  st.xy);
        if(st[2] == 1.) return texture(left,   st.xy);
        if(st[2] == 2.) return texture(top,    st.xy);
        if(st[2] == 3.) return texture(bottom, st.xy);
        if(st[2] == 4.) return texture(front,  st.xy);
        // if(st[2] == 5.)
        return texture(back,   st.xy);
    }


    vec3 reflex(vec3 pos, vec3 normal, vec3 eye) {
        vec3 I = normalize(eye - pos);
        vec3 R = reflect(I, normalize(normal));              
        return R;
    }
    vec3 refrax(vec3 pos, vec3 normal, vec3 eye, float ratio) {
        vec3 I = -normalize(eye - pos);
        vec3 R = -refract(I, normalize(normal), ratio);
        return R;
    }

    // https://www.clicktorelease.com/blog/creating-spherical-environment-mapping-shader/
    vec2 matcap(vec3 eye, vec3 normal) {
        vec3 r = reflect(eye, normal);
        float m = 2. * sqrt( pow( r.x, 2. ) + pow( r.y, 2. ) + pow( r.z + 1., 2. ) );
        vec2 vN = r.xy / m + .5;
        return vN;
    }
`;
let surface = `
    // mr doob
    // vec3 normalgen(sampler2D h, vec2 uv) {
    //     ivec2 size = textureSize(h, 0);
    //     float px = 1. / float(size.x);// + 0.01;
    //     float py = 1. / float(size.y);// + 0.01;
    //     // px = 0.1;
    //     // px = 0.1;
    //  // float h00 = texture(h, uv + vec2(-px, -py)).r;
    //     float h10 = texture(h, uv + vec2( 0., -py)).r;
    //  // float h20 = texture(h, uv + vec2( px, -py)).r;
    //     float h01 = texture(h, uv + vec2(-px,  0.)).r;
    //     float h21 = texture(h, uv + vec2( px,  0.)).r;
    //  // float h02 = texture(h, uv + vec2(-px,  py)).r;
    //     float h12 = texture(h, uv + vec2( 0.,  py)).r;
    //  // float h22 = texture(h, uv + vec2( px,  py)).r;
    //     vec3 c = vec3((h21 - h01) + 0.5, (h12 - h10) + 0.5, 1);
    //     return c;
    // }
    float sampleSobel(sampler2D t, vec2 uv)
    {
        float weight = 1.0;
        float f = 1. - texture(t, uv).r;
        return f * weight - (weight * 0.5);
    }
    // https://www.shadertoy.com/view/Xtd3DS
    vec3 normalgen(sampler2D t, vec2 uv)
    {   
        ivec2 size = textureSize(t, 0);
        float x = 1. / float(size.x);
        float y = 1. / float(size.y);
        // float x = 1. / 900.;
        // float y = 1. / 900.;
        
        // |-1  0  1|
        // |-2  0  2| 
        // |-1  0  1|
        
        float gX = 0.0;
        gX += -1.0 * sampleSobel(t, uv + vec2(-x, -y));
        gX += -2.0 * sampleSobel(t, uv + vec2(-x,  0));
        gX += -1.0 * sampleSobel(t, uv + vec2(-x, +y));
        gX += +1.0 * sampleSobel(t, uv + vec2(+x, -y));
        gX += +2.0 * sampleSobel(t, uv + vec2(+x,  0));
        gX += +1.0 * sampleSobel(t, uv + vec2(+x, +y));
        
        // |-1 -2 -1|
        // | 0  0  0| 
        // | 1  2  1|
        
        float gY = 0.0;
        gY += -1.0 * sampleSobel(t, uv + vec2(-x, -y));
        gY += -2.0 * sampleSobel(t, uv + vec2( 0, -y));
        gY += -1.0 * sampleSobel(t, uv + vec2(+x, -y));
        gY += +1.0 * sampleSobel(t, uv + vec2(-x, +y));
        gY += +2.0 * sampleSobel(t, uv + vec2( 0, +y));
        gY += +1.0 * sampleSobel(t, uv + vec2(+x, +y));
        
    
        vec2 f = vec2(sqrt(gX * gX + gY * gY), atan(-gY, -gX));
        vec2 gradientDirection = f.x * vec2(cos(f.y), sin(f.y));
        vec3 normal = normalize(vec3(gradientDirection, 1.0));
        // normal.x = -normal.x;
        return normal * 0.5 + 0.5;
    }    
    //vec3 normalmap(vec3 normal, vec3 tangent, vec3 bitangent, sampler2D t, vec2 uv, float scale) {
    vec3 normalmap(mat3 tbn, sampler2D t, vec2 uv, float scale) {
        vec3 n = texture(t, uv).xyz * 2.0 - 1.0;
        // n.z *= -0.01;
        n.xy *= scale;
        return normalize(tbn * n);
    }
    vec2 parallax_f(vec2 uv, vec3 viewdir, sampler2D hmap, float scale, float quality) {
        const float min = 10.;
        float max = 512. * quality;
        float n = mix(max, min, abs(dot(vec3(0, 0, 1), viewdir)));  
        float depth = 1. / n;
        float c = 0.;
        vec2 P = viewdir.xy / viewdir.z * scale;
        vec2 delta = P / n;
        vec2 cuv = uv;
        float ch = texture(hmap, cuv).r;
        while(c < ch) {
            cuv -= delta;
            ch = texture(hmap, cuv).r;  
            c += depth;  
        }
        vec2 prev = cuv + delta;
        float after  = ch - c;
        float before = texture(hmap, prev).r - c + depth;
        float weight = after / (after - before);
        vec2 r = prev * weight + cuv * (1. - weight);
        return r;
    }
    // vec2 parallax(vec3 normal, vec3 tangent, vec3 bitangent, vec3 eye, vec3 pos, vec2 uv, sampler2D hmap, float scale) {
    // vec2 parallax(vec3 normal, vec3 tangent, vec3 bitangent, sampler2D hmap, vec2 uv, float scale, vec3 pos, vec3 eye) {
    vec2 parallax(mat3 tbn, sampler2D t, vec2 uv, float scale, float quality, vec3 pos, vec3 eye) {
        mat3 ttbn = transpose(tbn);
        
        ivec2 size = textureSize(t, 0);
        float asp = float(size.x) / float(size.y);

        // asp = 1.;

        eye.y *= asp;
        pos.y *= asp;

        vec3 tbnv = ttbn * eye;
        vec3 tbnp = ttbn * pos.xyz;
        vec3 vdir = normalize(tbnv - tbnp);
        return parallax_f(uv, vdir, t, scale, quality);
    }
`;
let particles = `
    // float[4] catmullrom_init_c(float x0, float x1, float t0, float t1) {
    //     return float[4](
    //         x0,
    //         t0,
    //         -3. * x0 + 3. * x1 - 2. * t0 - t1,
    //         2. * x0 - 2. * x1 + t0 + t1
    //     );
    // }
    // float[4] catmullrom_init(float x0, float x1, float x2, float x3, float tension) {
    //     return catmullrom_init_c(x1, x2, tension * (x2 - x0), tension * (x3 - x1));
    // }
    // float[4] catmullrom_init_nonuni(float x0, float x1, float x2, float x3, float dt0, float dt1, float dt2) {
    //     float t1 = (x1 - x0) / dt0 - (x2 - x0) / (dt0 + dt1) + (x2 - x1) / dt1;
    //     float t2 = (x2 - x1) / dt1 - (x3 - x1) / (dt1 + dt2) + (x3 - x2) / dt2;
    //     t1 *= dt1;
    //     t2 *= dt1;
    //     return catmullrom_init_c(x1, x2, t1, t2);
    // }
    // float catmullrom_calc(float[4] c, float t) {
    //     float t2 = t * t;
    //     float t3 = t2 * t;
    //     return c[0] + c[1] * t + c[2] * t2 + c[3] * t3;
    // }
    // float distance_to_squared(vec3 a, vec3 b) {
    //     float dx = a.x - b.x;
    //     float dy = a.y - b.y;
    //     float dz = a.z - b.z;
    //     return dx * dx + dy * dy + dz * dz;
    // }
    // vec3 catmullrom(vec3[4] p, float tension, float t) {
    //     t = mod(t, 1.);
    //     int LENGTH = 4;
    //     float pp = float(LENGTH - 1) * t;
    //     int ip = int(floor(pp));
    //     float weight = pp - float(ip);
    //     if(weight == 0. && ip == (LENGTH - 1)) {
    //         ip = LENGTH - 2;
    //         weight = 1.;
    //     }
    //     vec3 p0 = (p[0] - p[1]) + p[0];
    //     vec3 p1 = p[ip % LENGTH];
    //     vec3 p2 = p[(ip + 1) % LENGTH];
    //     vec3 p3 = (p[LENGTH - 1] - p[LENGTH - 2]) + p[LENGTH - 1];
    //     // non-uniform
    //     float centripetal = 0.25;
    //     float chordal = 0.5;
    //     float pw = centripetal;
    //     float dt0 = pow(distance_to_squared(p0, p1), pw);
    //     float dt1 = pow(distance_to_squared(p1, p2), pw);
    //     float dt2 = pow(distance_to_squared(p2, p3), pw);
    //     if(dt1 < 1e-4) dt1 = 1.;
    //     if(dt0 < 1e-4) dt0 = dt1;
    //     if(dt2 < 1e-4) dt2 = dt1;
    //     return vec3(
    //         catmullrom_calc(catmullrom_init_nonuni(p0.x, p1.x, p2.x, p3.x, dt0, dt1, dt2), weight),
    //         catmullrom_calc(catmullrom_init_nonuni(p0.y, p1.y, p2.y, p3.y, dt0, dt1, dt2), weight),
    //         catmullrom_calc(catmullrom_init_nonuni(p0.z, p1.z, p2.z, p3.z, dt0, dt1, dt2), weight)
    //     );
    //     // uniform
    //     // tension = 0.7;
    //     return vec3(
    //         catmullrom_calc(catmullrom_init(p0.x, p1.x, p2.x, p3.x, tension), weight),
    //         catmullrom_calc(catmullrom_init(p0.y, p1.y, p2.y, p3.y, tension), weight),
    //         catmullrom_calc(catmullrom_init(p0.z, p1.z, p2.z, p3.z, tension), weight)
    //     );
    // }
    vec3 catmullrom(vec3[4] p, float tension, float t) {
        // Cardinal Spline Matrix
        // https://www.shadertoy.com/view/MlGSz3
        float T = tension;
        mat4 CRM = mat4(-T,        2.0 - T,  T - 2.0,         T,
                               2.0 * T,  T - 3.0,  3.0 - 2.0 * T,  -T,
                              -T,        0.0,      T,               0.0,
                               0.0,      1.0,      0.0,             0.0);
        vec3 G1 = p[0];
        vec3 G2 = p[1];
        vec3 G3 = p[2];
        vec3 G4 = p[3];
        vec3 A = G1 * CRM[0][0] + G2 * CRM[0][1] + G3 * CRM[0][2] + G4 * CRM[0][3];
        vec3 B = G1 * CRM[1][0] + G2 * CRM[1][1] + G3 * CRM[1][2] + G4 * CRM[1][3];
        vec3 C = G1 * CRM[2][0] + G2 * CRM[2][1] + G3 * CRM[2][2] + G4 * CRM[2][3];
        vec3 D = G1 * CRM[3][0] + G2 * CRM[3][1] + G3 * CRM[3][2] + G4 * CRM[3][3];
        return t * (t * (t * A + B) + C) + D;
    }
    // vec3 curvepath(vec3[16] p, int size, float t) {
    //     t = mod(t, 1.);
    //     int i = int(floor(rescale(t, 0., 1., 0., float(size - 3))));
    //     float d = 1. / float(size - 3);
    //     float dt = mod(t, d);
    //     vec3[4] v = vec3[4](p[i], p[i + 1], p[i + 2], p[i + 3]);
    //     float x = 1. / 3.;
    //     return catmullrom(v, 1., rescale(dt, 0., d, x, x + x));
    // }
    vec3 curvepath(vec3[64] p, float[64] ts, int size, float t) {
        t = mod(t, 1.);
        int i = int(floor(rescale(t, 0., 1., 0., float(size - 3))));
        float d = 1. / float(size - 3);
        float dt = mod(t, d);
        vec3[4] v = vec3[4](p[i], p[i + 1], p[i + 2], p[i + 3]);
        return catmullrom(v, ts[i + 1], rescale(dt, 0., d, 0., 1.));
    }
//
//let span =
    float randi2(int a, int b) {
        vec2 st = vec2(a, b);
        return fract(
            sin(
                dot(st, vec2(12.9898, 78.233))
            ) * 43758.5453123
        );
    }
    vec3 span(int seed, float range, float min, float offset, float time) {
        float life = randi2(seed, 0) * range + min;
        float off = randi2(seed, 1) * offset;
        float n = off + time / life;
        int cycle = int(n) + 2; // +2 to avoid overlap of randi2
        float t = fract(n);
        return vec3(cycle, t, seed);
    }
    const int START = 0;
    const int START_RAND = 1;
    const int END = 2;
    const int END_RAND = 3;
    float emit_field(float[4] v, float t, float r1, float r2) {
        return mix(
            v[START] + rescale(r1, 0., 1., -v[START_RAND], v[START_RAND]),
            v[END]   + rescale(r2, 0., 1., -v[END_RAND],   v[END_RAND]),
            t
        );
    }
    mat4 emit(vec3 span, vec3[4] points, float[4] angle, float[4] size) {
        int c = int(span.x);
        float t = span.y;
        int seed = int(span.z);
        #define r() randi2(seed, c++)
        vec3 a = points[START];
        vec3 ar = points[START_RAND];
        vec3 b = points[END];
        vec3 br = points[END_RAND];
        a.x += rescale(r(), 0., 1., -ar.x, ar.x);
        a.y += rescale(r(), 0., 1., -ar.y, ar.y);
        a.z += rescale(r(), 0., 1., -ar.z, ar.z);
        b.x += rescale(r(), 0., 1., -br.x, br.x);
        b.y += rescale(r(), 0., 1., -br.y, br.y);
        b.z += rescale(r(), 0., 1., -br.z, br.z);
        vec3 p_ = mix(a, b, t);
        float an = emit_field(angle, t, r(), r());
        float sz = emit_field(size,  t, r(), r());
        #undef r
        return translate(p_.x, p_.y, p_.z) * rotatez(an) * scale(sz, sz, sz);
    }
    mat4 emitcurve(vec3 span, vec3[64] ps, vec3[64] ds, float[64] ts, int length, float[4] angle, float[4] size) {
        int c = int(span.x);
        float t = span.y;
        int seed = int(span.z);
        #define r() randi2(seed, c++)
        vec3[64] q;
        for(int i = 0; i < length; i++) {
            q[i] = vec3(
                ps[i].x + rescale(r(), 0., 1., -ds[i].x, ds[i].x),
                ps[i].y + rescale(r(), 0., 1., -ds[i].y, ds[i].y),
                ps[i].z + rescale(r(), 0., 1., -ds[i].z, ds[i].z)
            );
        }
        vec3 p_ = curvepath(q, ts, length, t);
        float an = emit_field(angle, t, r(), r());
        float sz = emit_field(size,  t, r(), r());
        #undef r
        return translate(p_.x, p_.y, p_.z) * rotatez(an) * scale(sz, sz, sz);
    }
//
// let slash = 
    float slash_hard(vec4 p_, float a, float b, float c, float d, float time) {
        float t = mod(time, a + b + c + d);
        if(t < a) return (t / a - p_.r) > 0.? p_.a : 0.;
        t -= a;
        if(t < b) return p_.a;
        t -= b;
        if(t < c) return (t / c - p_.r) > 0.? 0. : p_.a;
        return 0.;
    }
    float slash_one(float r, float a, float t, float n) {
        float tn = t / n;
        float f = tn - r;
        float o = 0.5;
        o = mix(o, 0., tn); // float o = 1. - tn;
        if(f < 0.) return 0.;
        if(f < o) {
            return mix(0., a, rescale(f, 0., o, 0., 1.));
        }
        return 1.;
    }
    float slash(float pr, float pa, float a, float b, float c, float d, float time) {
        float t = mod(time, a + b + abs(c) + d);
        if(t < a) {
            return slash_one(pr, pa, t, a);
        }
        t -= a;
        if(t < b) {
            return pa;
        }
        t -= b;
        if(c < 0. && t < -c) {
            return slash_one(pr, pa, -c - t, -c);
        }
        if(t < c) {
            return 1. - slash_one(pr, pa, t, c);
        }
        return 0.;
    }
`;
let color = `
    vec3 rgbtohsv(vec3 c) {
        vec4 K = vec4(0.0, -1.0 / 3.0, 2.0 / 3.0, -1.0);
        vec4 p_ = mix(vec4(c.bg, K.wz), vec4(c.gb, K.xy), step(c.b, c.g));
        vec4 q = mix(vec4(p_.xyw, c.r), vec4(c.r, p_.yzx), step(p_.x, c.r));
        float d = q.x - min(q.w, q.y);
        float e = 1.0e-10;
        return vec3(abs(q.z + (q.w - q.y) / (6.0 * d + e)), d / (q.x + e), q.x);
    }
    vec3 hsvtorgb(vec3 c) {
        vec4 K = vec4(1.0, 2.0 / 3.0, 1.0 / 3.0, 3.0);
        vec3 p = abs(fract(c.xxx + K.xyz) * 6.0 - K.www);
        return c.z * mix(K.xxx, clamp(p - K.xxx, 0.0, 1.0), c.y);
    }
    vec4 hue(vec4 c, float v) {
        vec3 hsv = rgbtohsv(c.rgb);
        hsv.x += v;
        c.rgb = hsvtorgb(hsv);
        return c;
    }
    vec4 invert(vec4 c) {
        return vec4(1.-c.r, 1.-c.g, 1.-c.b, c.a);
    }
`;
let filters = `
    // vec4 blur_13(sampler2D image, vec2 uv, vec2 strength) {
    //     vec4 color = vec4(0.0);
    //     vec2 off1 = vec2(1.411764705882353) * strength;
    //     vec2 off2 = vec2(3.2941176470588234) * strength;
    //     vec2 off3 = vec2(5.176470588235294) * strength;
    //     color += texture(image, uv) * 0.1964825501511404;
    //     color += texture(image, uv + off1) * 0.2969069646728344;
    //     color += texture(image, uv - off1) * 0.2969069646728344;
    //     color += texture(image, uv + off2) * 0.09447039785044732;
    //     color += texture(image, uv - off2) * 0.09447039785044732;
    //     color += texture(image, uv + off3) * 0.010381362401148057;
    //     color += texture(image, uv - off3) * 0.010381362401148057;
    //     return color;
    // }
    // vec4 hblur(sampler2D t, vec2 uv, float strength) {
    //     return blur_13(t, uv, vec2(strength, 0));
    // }
    // vec4 vblur(sampler2D t, vec2 uv, float strength) {
    //     return blur_13(t, uv, vec2(0, strength));
    // }

    vec4 blur_13(sampler2D image, vec2 uv, vec2 direction) {	
        vec4 color = vec4(0.0);	
        vec2 off1 = vec2(1.411764705882353) * direction;	
        vec2 off2 = vec2(3.2941176470588234) * direction;	
        vec2 off3 = vec2(5.176470588235294) * direction;	
        color += texture(image, uv) * 0.1964825501511404;	
        color += texture(image, uv + off1) * 0.2969069646728344;	
        color += texture(image, uv - off1) * 0.2969069646728344;	
        color += texture(image, uv + off2) * 0.09447039785044732;	
        color += texture(image, uv - off2) * 0.09447039785044732;	
        color += texture(image, uv + off3) * 0.010381362401148057;	
        color += texture(image, uv - off3) * 0.010381362401148057;	
        return color;	
    }	
    vec4 hblur(sampler2D t, vec2 uv, float strength) {	
        return blur_13(t, uv, vec2(strength, 0));	
    }	
    vec4 vblur(sampler2D t, vec2 uv, float strength) {
        return blur_13(t, uv, vec2(0, strength));
    }
//
//let zoomblur = 
    vec4 zoomblur(sampler2D img, vec2 uv, float x, float y, float strength) {
        vec2 inc = (vec2(x, 1. - y) - uv) * strength;
        vec4 sum;
        sum += texture(img, uv - inc * 4.) * 0.051;
        sum += texture(img, uv - inc * 3.) * 0.0918;
        sum += texture(img, uv - inc * 2.) * 0.12245;
        sum += texture(img, uv - inc * 1.) * 0.1531;
        sum += texture(img, uv + inc * 0.) * 0.1633;
        sum += texture(img, uv + inc * 1.) * 0.1531;
        sum += texture(img, uv + inc * 2.) * 0.12245;
        sum += texture(img, uv + inc * 3.) * 0.0918;
        sum += texture(img, uv + inc * 4.) * 0.051;
        return sum;
    }
    // vec4 zoomblur2(sampler2D img, vec2 uv, float x, float y, float sa, float sb) {
    //     vec2 inc = (vec2(x, 1. - y) - uv) * vec2(sa, sb);
    //     vec4 sum;
    //     sum += texture(img, uv - inc * 4.) * 0.051;
    //     sum += texture(img, uv - inc * 3.) * 0.0918;
    //     sum += texture(img, uv - inc * 2.) * 0.12245;
    //     sum += texture(img, uv - inc * 1.) * 0.1531;
    //     sum += texture(img, uv + inc * 0.) * 0.1633;
    //     sum += texture(img, uv + inc * 1.) * 0.1531;
    //     sum += texture(img, uv + inc * 2.) * 0.12245;
    //     sum += texture(img, uv + inc * 3.) * 0.0918;
    //     sum += texture(img, uv + inc * 4.) * 0.051;
    //     return sum;
    // }
    float sobel(sampler2D t, vec2 uv, float x, float y) { // x and y are strength
        vec4 h = vec4(0);
        h -= texture(t, vec2(uv.x - x, uv.y - y)) * 1.;
        h -= texture(t, vec2(uv.x - x, uv.y    )) * 2.;
        h -= texture(t, vec2(uv.x - x, uv.y + y)) * 1.;
        h += texture(t, vec2(uv.x + x, uv.y - y)) * 1.;
        h += texture(t, vec2(uv.x + x, uv.y    )) * 2.;
        h += texture(t, vec2(uv.x + x, uv.y + y)) * 1.;
        vec4 v_ = vec4(0);
        v_ -= texture(t, vec2(uv.x - x, uv.y - y)) * 1.;
        v_ -= texture(t, vec2(uv.x    , uv.y - y)) * 2.;
        v_ -= texture(t, vec2(uv.x + x, uv.y - y)) * 1.;
        v_ += texture(t, vec2(uv.x - x, uv.y + y)) * 1.;
        v_ += texture(t, vec2(uv.x    , uv.y + y)) * 2.;
        v_ += texture(t, vec2(uv.x + x, uv.y + y)) * 1.;
        vec3 edge = sqrt(h.rgb * h.rgb + v_.rgb * v_.rgb);
        return (edge.x + edge.y + edge.z) / 3.;
    }
    // https://www.shadertoy.com/view/XlsXRB
    float outline_x(sampler2D t, vec2 uv, float samples_dx, bool inside) {
        vec2 size = vec2(textureSize(t, 0));
        ivec2 iuv = ivec2(int(uv.x * size.x), int(uv.y * size.y));
        float samples = round(samples_dx * size.x);
        int isamples = int(samples);
        float d = samples;
        for(int x = -isamples; x != isamples; x++) {
            for(int y = -isamples; y != isamples; y++) {
                float a = texelFetch(t, iuv + ivec2(x, y), 0).a;
                if(inside) a = 1. - a;
                // if(dot(normalize(vec2(x, y)), normalize(vec2(0, -5))) < 0.75) continue;
                if(a > 0.5) {
                    d = min(d, length(vec2(x, y)));
                }
            }
        }
        d = clamp(d, 0., samples) / samples;
        // d = clamp(d, 0., 1.); // may be over -0.00000001
        return 1. - d;
    }
    float outline(sampler2D t, vec2 uv, float samples_dx) {
        return outline_x(t, uv, samples_dx, false);
    }





    const float[64] ssao_noise = float[64](
        -0.7123168110847473, 0.7018580436706543, 0., 0., -0.6823078393936157, -0.7310649752616882, 0., 0., 0.8779285550117493, -0.47879165410995483, 0., 0., 0.7977963089942932, 0.602927029132843, 0., 0., 0.15651366114616394, -0.9876757860183716, 0., 0., 0.9920237064361572, -0.12605135142803192, 0., 0., -0.8378090262413025, -0.5459634065628052, 0., 0., 0.6735560297966003, 0.7391361594200134, 0., 0., 0.02000349946320057, 0.999799907207489, 0., 0., 0.30650821328163147, -0.9518679976463318, 0., 0., -0.4286597669124603, 0.903465986251831, 0., 0., 0.7592897415161133, 0.6507527232170105, 0., 0., 0.9918479919433594, -0.1274268627166748, 0., 0., 0.7089933753013611, -0.7052151560783386, 0., 0., 0.9855568408966064, 0.1693449169397354, 0., 0., 0.4421997368335724, -0.8969166278839111, 0., 0.
    );
    vec4 table_get(vec4[16] table, int i, int j) {
        return table[i * 4 + j];
    }
    vec3 ssao_noise_lookup(float x, float y) {
        // float[64] T = ssao_noise;
        // vec4[24] table;
        // table[0] = vec4(T[0],  T[1],  T[2],  T[3]);
        // table[1] = vec4(T[4],  T[5],  T[6],  T[7]);
        // table[2] = vec4(T[8],  T[9],  T[10], T[11]);
        // table[3] = vec4(T[12], T[13], T[14], T[15]);
        // table[4] = table[0];
        // table[5] = vec4(T[16], T[17], T[18], T[19]);
        // table[6] = vec4(T[20], T[21], T[22], T[23]);
        // table[7] = vec4(T[24], T[25], T[26], T[27]);
        // table[8] = vec4(T[28], T[29], T[30], T[31]);
        // table[9] = table[5];
        // table[10] = vec4(T[32], T[33], T[34], T[35]);
        // table[11] = vec4(T[36], T[37], T[38], T[39]);
        // table[12] = vec4(T[40], T[41], T[42], T[43]);
        // table[13] = vec4(T[44], T[45], T[46], T[47]);
        // table[14] = table[10];
        // table[15] = vec4(T[48], T[49], T[50], T[51]);
        // table[16] = vec4(T[52], T[53], T[54], T[55]);
        // table[17] = vec4(T[56], T[57], T[58], T[59]);
        // table[18] = vec4(T[60], T[61], T[62], T[63]);
        // table[19] = table[15];
        // table[20] = table[0];
        // table[21] = table[1];
        // table[22] = table[2];
        // table[23] = table[3];
        float[64] T = ssao_noise;
        vec4[16] table;
        table[0] =  vec4(T[0],  T[1],  T[2],  T[3]);
        table[1] =  vec4(T[4],  T[5],  T[6],  T[7]);
        table[2] =  vec4(T[8],  T[9],  T[10], T[11]);
        table[3] =  vec4(T[12], T[13], T[14], T[15]);
        table[4] =  vec4(T[16], T[17], T[18], T[19]);
        table[5] =  vec4(T[20], T[21], T[22], T[23]);
        table[6] =  vec4(T[24], T[25], T[26], T[27]);
        table[7] =  vec4(T[28], T[29], T[30], T[31]);
        table[8] =  vec4(T[32], T[33], T[34], T[35]);
        table[9] =  vec4(T[36], T[37], T[38], T[39]);
        table[10] = vec4(T[40], T[41], T[42], T[43]);
        table[11] = vec4(T[44], T[45], T[46], T[47]);
        table[12] = vec4(T[48], T[49], T[50], T[51]);
        table[13] = vec4(T[52], T[53], T[54], T[55]);
        table[14] = vec4(T[56], T[57], T[58], T[59]);
        table[15] = vec4(T[60], T[61], T[62], T[63]);

        x = mod(x, 1.);
        y = mod(y, 1.);
        float yy = y * 4.;
        float xx = x * 4.;

        int j = int(floor(xx));
        float jd = fract(xx);
        int j2 = j + 1;
        if(j2 == 4) j2 = 0;
        
        int i = int(floor(yy));
        float id = fract(yy);
        int i2 = i + 1;
        if(i2 == 4) i2 = 0;

        vec4 a = table_get(table, i,  j);
        vec4 b = table_get(table, i,  j2);
        // vec4 c = table_get(table, i2, j2);
        vec4 d = table_get(table, i2, j);

        vec4 X = mix(a, b, jd);
        vec4 Y = mix(a, d, id);
        vec4 R = (X + Y) / 2.;

        return vec3(R.xyz);
    }
    
    float[192] ssao_kernel = float[192](-0.09374634215485403,-0.000375369488122982,0.01754888749241413,0.017984001619785535,-0.04356818942450886,0.03569104774985324,-0.043783772268963614,-0.03428895654049228,0.06042799265745649,-0.049004574674518894,-0.06304131859385166,0.027820859347207735,-0.03586738716809315,-0.061326853471432886,0.03525915815457384,-0.06871109333104407,0.01440255699091857,0.04853617849294936,-0.07251809166741986,0.014862179462582895,0.044602699837812995,-0.004731613274647387,-0.017119952135333877,0.0010520665356540406,0.004400121280317265,0.0081662423060754,0.0024589850574472513,0.02537708481215369,0.040274072947467134,0.038324930598352736,-0.007138754764226268,0.049238945168016926,0.006914354524334151,-0.03812673535532064,0.031884808551242524,0.02335045312675197,-0.055864272680788835,-0.006359346492396586,0.0535015245616255,-0.009584547833344784,-0.011422438717361047,0.010290444556246493,0.021175210042685355,0.008931455967788389,0.011879037149721137,-0.004793906537912411,0.012239745521245257,0.13845648606007668,-0.12320928777467297,-0.03853214341372054,0.03412892884776708,-0.08198963874808374,-0.0695686376581193,0.08181684092432585,0.01823509576170111,-0.04889349713193072,0.03762078575423584,-0.032004831476432356,-0.052774232426097925,0.04569333909528465,0.0940348428347339,0.10626822873154232,0.09972482655676185,0.007802552274548907,0.005133272072566735,0.002166986454912428,0.07866566481805626,0.1552667569400362,0.07852789908155675,-0.03798069797314559,-0.0502937747707072,0.11348609067133583,-0.002146962492623746,-0.20358790691639203,0.06879590114599042,-0.11591459015942243,-0.1218945568148924,0.03321024826595269,-0.027859925696481828,0.020007218450851617,0.014431493454092136,0.052639650429022834,0.056978184034887906,0.007799340007003614,0.031220462682335793,0.16666673577793695,0.010408441481931355,-0.03762052936151246,0.03275710650902212,0.004346024772262918,-0.0130415503531828,0.06797832940740839,0.1999559866974219,-0.042058242343440556,-0.22307173108637188,0.12414794904835745,0.12561713530566443,-0.18244935949291594,0.18400526123373917,-0.16826845611664232,0.0803426684231622,0.1623067171427741,0.14300190679782254,0.1837605876166513,0.006462688612661839,0.11952513771136124,-0.3324093275082819,0.03137726320181103,-0.17258251668034924,0.011217030790295497,0.03996294616883077,0.2113137917319127,0.03779921619255335,0.07011234335317412,0.1634120795831472,-0.06457250655616936,0.11192856623922605,-0.19992681370486173,-0.3392611456024551,0.15736686389572502,0.30014044700952447,-0.02073647740507387,0.17808231831412402,-0.11875919251439018,-0.1751823944565052,0.36157555075342246,-0.3425712118794504,0.016253681339188523,0.16911073962736342,0.16933453937240683,-0.1772008093683016,0.07905365814824468,-0.21845331969168105,0.037079630424815185,0.393764176967778,-0.2086258507041632,-0.29730180456336996,0.007498636375080457,-0.002646146646925911,0.008584992115597294,0.0350626152112999,-0.09889040746774319,-0.015992421153517632,0.1328136203632947,-0.1974356421528559,0.0485295866318073,0.04025833872279758,0.32849577823378845,-0.2881668991695629,0.12646953557617205,0.20828762680152946,0.03234418544741987,0.06099372996636346,0.12544830224195277,0.0785383512646071,0.10857925036501055,-0.26441094277718147,-0.2216408863852765,0.2635546996574406,-0.17758098372840736,0.22486559143510249,0.28015606633562423,-0.21150219089628147,0.005408811711959217,0.04227624334243415,-0.15864015220389596,-0.21092533958378795,0.45207521628208824,0.09108306426946074,0.06849434139019694,0.14582484416096658,-0.48576565292941276,0.3269469461022946,0.560117393154986,-0.19101145455923585,-0.08707745185721452,0.2095832167054974,0.3330429107637653,0.4361984010525983,0.5965322553062029,0.18626542472931382,-0.13442625118145018,0.09891189581983724,-0.23747211790531572,0.302296765488922,0.243641847704324,0.0514500352700186,-0.04402159188998558,0.4888981072719507,0.0018009241897987776,0.03609386481524951,0.014861843655224498);

    float ssao(float w, float h, mat4 proj, mat4 camera, sampler2D tpos, sampler2D tnormal, vec2 uv, float radius, float bias) {
        vec2 noise_scale = vec2(w / 4., h / 4.); // noise_texture.size()
        vec3 pos = (inverse(camera) * texture(tpos, uv)).xyz;
        vec3 q = (mat3(transpose(camera))) * texture(tnormal, uv).xyz;
        vec3 normal = (q.xyz);
        float xx = mod(uv.x * noise_scale.x, 1.);
        float yy = mod(uv.y * noise_scale.y, 1.);
        // vec3 rvec = texture(noise, vec2(xx, yy)).xyz;
        vec3 rvec = ssao_noise_lookup(xx, yy);
        vec3 tangent   = normalize(rvec - normal * dot(rvec, normal));
        vec3 bitangent = cross(normal, tangent);
        mat3 TBN       = mat3(tangent, bitangent, normal);
        float occlusion = 0.;
        for(int i = 0; i < 192; i += 3) {
            vec3 s = TBN * vec3(
                ssao_kernel[i],
                ssao_kernel[i + 1],
                ssao_kernel[i + 2]
            );
            s = pos + s * radius; 
            vec4 offset = vec4(s, 1);
            offset      = proj * offset;
            offset.xyz /= offset.w;
            offset.xyz  = offset.xyz * 0.5 + 0.5;
            float depth = (inverse(camera) * texture(tpos, offset.xy)).z;
            float range = smoothstep(0., 1., radius / abs(pos.z - depth));
            occlusion += (depth >= s.z + bias? 1. : 0.) * range;
        }  
        occlusion = 1. - clamp(occlusion / 64., 0., 1.);
        return occlusion;
    }











`;
let misc = `
    float aspect(sampler2D t) {
        ivec2 size = textureSize(t, 0);
        return float(size.x) / float(size.y);
    }

    // mat4 quat2mat(vec4 q) {
    //     float x2 = q.x + q.x, y2 = q.y + q.y, z2 = q.z + q.z;
    //     float xx = q.x * x2,  xy = q.x * y2,  xz = q.x * z2;
    //     float yy = q.y * y2,  yz = q.y * z2,  zz = q.z * z2;
    //     float wx = q.w * x2,  wy = q.w * y2,  wz = q.w * z2;
    //     vec3 s = vec3(1);
    //     mat4 m = mat4(1);
    //     m[0][0] = (1. - (yy + zz)) * s.x;
    //     m[1][0] = (xy + wz) * s.x;
    //     m[2][0] = (xz - wy) * s.x;
    //     m[0][1] = (xy - wz) * s.y;
    //     m[1][1] = (1. - (xx + zz)) * s.y;
    //     m[2][1] = (yz + wx) * s.y;
    //     m[0][2] = (xz + wy) * s.z;
    //     m[1][2] = (yz - wx) * s.z;
    //     m[2][2] = (1. - (xx + yy)) * s.z;
    //     return transpose(m); /////////////////////////////////////////////////////////
    // }
    // mat4 clip_x(sampler2D s, uvec4 joints, vec4 weights, float time) {
    //     vec4 head = texelFetch(s, ivec2(0, 0), 0);
    //     float length = head.x;
    //     // if(length == 0.) return mat4(1);
    //     float fps = head.y;
    //     int bones = int(head.z);
    //     if(bones <= 1) return mat4(1);
    //     float t = mod(time, length);
    //     int frame = int(t * fps);
    //     mat4 r = mat4(0);
    //     int size = textureSize(s, 0).x;
    //     for(int i = 0; i < 4; i++) {
    //         int p = 1 + frame * bones * 2 + (int(joints[i]) + 1) * 2;

    //         int x = p % size;
    //         int y = p / size;
    //         int x2 = (p + 1) % size;
    //         int y2 = (p + 1) / size;


    //         // int x = int(floor(mod(float(p), float(size))));
    //         // int y = int(floor(   float(p) / float(size)));
    //         // int x2 = int(floor(mod(float(p + 1), float(size))));
    //         // int y2 = int(floor(   float(p + 1) / float(size)));


    //         // x = p - (y * size);
    //         vec3 a =  texelFetch(s, ivec2(x, y), 0).xyz;
    //         vec4 aq = texelFetch(s, ivec2(x2, y2), 0);

    //         // vec3 a =  texelFetch(s, ivec2(p, 0), 0).xyz;
    //         // vec4 aq = texelFetch(s, ivec2(p + 1, 0), 0);
    //         r += (translate(a.x, a.y, a.z) * quat2mat(aq)) * weights[i];
    //     }
    //     return r;
    // }

    // float texel(sampler2D s, int p) {
    //     int channels = 4;
    //     int width = textureSize(s, 0).x * channels;
    //     int x = p % width;
    //     int y = p / width;
    //     vec4 tex = texelFetch(s, ivec2(x / channels, y), 0);
    //     int offset = x % channels;
    //     return tex[offset];
    // }
    mat4 clip_item(sampler2D s, int p, int size) {
        int x1 = p % size;
        int y1 = p / size;
        int x2 = (p + 1) % size;
        int y2 = (p + 1) / size;
        int x3 = (p + 2) % size;
        int y3 = (p + 2) / size;
        int x4 = (p + 3) % size;
        int y4 = (p + 3) / size;
        vec4 a = texelFetch(s, ivec2(x1, y1), 0);
        vec4 b = texelFetch(s, ivec2(x2, y2), 0);
        vec4 c = texelFetch(s, ivec2(x3, y3), 0);
        vec4 d = texelFetch(s, ivec2(x4, y4), 0);
        return mat4(a, b, c, d);
    }
    mat4 clip(sampler2D s, uvec4 joints, vec4 weights, float time) {
        vec4 head = texelFetch(s, ivec2(0, 0), 0);
        float length = head.x;
        float fps = head.y;
        int stride = int(head.z);
        float t = mod(time, length);
        int frame = int(t * fps);
        int size = textureSize(s, 0).x;
        int p = 1 + frame * stride * 4 + 0;
        mat4 r = clip_item(s, p, size);
        if(stride <= 1) return r;
        mat4 q = mat4(0);
        for(int i = 0; i < 4; i++) {
            int p = 1 + frame * stride * 4 + (int(joints[i]) + 1) * 4;
            q += clip_item(s, p, size) * weights[i];
        }
        return r * q;
    }

// dist
    // https://www.iquilezles.org/www/articles/intersectors/intersectors.htm
    // https://www.geometrictools.com/Source/Distance3D.html
    // r = 0.0025
    // distrayseg
    // if m is 1, returns depth
    //    when 0, just 0 (overlap)
    // float distrayseg(vec3 ro, vec3 rd, vec3 pa, vec3 pb, float r, float m, float none) {
    //     vec3 ba = pb - pa;
    //     vec3 oa = ro - pa;
    //     float baba = dot(ba, ba);
    //     float bard = dot(ba, rd);
    //     float baoa = dot(ba, oa);
    //     float rdoa = dot(rd, oa);
    //     float oaoa = dot(oa, oa);
    //     float a = baba        - bard * bard;
    //     float b = baba * rdoa - baoa * bard;
    //     float c = baba * oaoa - baoa * baoa - r * r * baba;
    //     float h = b * b - a * c;
    //     if(h >= 0.) {
    //         float t = (-b - sqrt(h)) / a;
    //         float y = baoa + t * bard;
    //         if(y > 0. && y < baba) { // body
    //             return t * m;
    //         }
    //         vec3 oc = (y <= 0.)? oa : ro - pb; // caps
    //         b = dot(rd, oc);
    //         c = dot(oc, oc) - r * r;
    //         h = b * b - c;
    //         if(h > 0.) return -b - sqrt(h);
    //     }
    //     return none;
    // }

    // px and py are the pivot points; (-0.5, -0.5 is top left, 0.5, 0.5 is bottom right)
    mat4 sprite(float tw, float th, float x, float y, float w, float h, float r, float px, float py) {
        mat4 m = ortho(-tw / 2., tw / 2., th / 2., -th / 2., 0., 1.);
        m *= translate(x + w / 2. - tw / 2., -y - h / 2. + th / 2., 0.);
        m *= translate(px * w, -py * h, 0.);
        m *= rotatez(r);
        m *= scale(w, h, 1.);
        m *= translate(-px, py, 0.);
        return m;                
    }


`;
let blend = (name, f) => `
    float ` + name + `_f(float Sc, float Dc) {
        return ` + f + `;
    }
    // vec4 ` + name + `(vec4 Sca, vec4 Dca) {
    vec4 ` + name + `(vec4 Dca, vec4 Sca) {
        vec3 Sc = Sca.a == 0.? vec3(0) : Sca.rgb / Sca.a;
        vec3 Dc = Dca.a == 0.? vec3(0) : Dca.rgb / Dca.a;
        float Sa = Sca.a;
        float Da = Dca.a;
        float X = 1.;
        float Y = 1.;
        float Z = 1.;
        float r = ` + name + `_f(Sc.r, Dc.r) * Sa * Da + Y * Sca.r * (1.-Da) + Z * Dca.r * (1.-Sa);
        float g = ` + name + `_f(Sc.g, Dc.g) * Sa * Da + Y * Sca.g * (1.-Da) + Z * Dca.g * (1.-Sa);
        float b = ` + name + `_f(Sc.b, Dc.b) * Sa * Da + Y * Sca.b * (1.-Da) + Z * Dca.b * (1.-Sa);
        float a = X * Sa * Da  + Y * Sa  * (1.-Da) + Z * Da  * (1.-Sa);
        return vec4(r, g, b, a);
    }
`;
let blendmodes = `
    ` + blend('blend', `Sc`) + `
    // dissolve
    ` + blend('darken', `min(Sc, Dc)`) + `
    ` + blend('multiply', `Sc * Dc`) + `
    ` + blend('colorburn', `(Sc == 0.)? 0. : 1. - min(1., (1. - Dc) / Sc)`) + `
    ` + blend('linearburn', `max(Dc + Sc - 1., 0.)`) + `
    // darker color
    ` + blend('lighten', `max(Sc, Dc)`) + `
    ` + blend('screen', `Sc + Dc - (Sc * Dc)`) + `
    ` + blend('colordodge', `(Sc == 1.)? 1. : min(1., Dc / (1. - Sc))`) + `
    ` + blend('addition', `Sc + Dc`) + ` // linear dodge
    // lighter color
    ` + blend('overlay', `
        (2. * Dc <= 1.)?
            2. * Sc * Dc
        :
            1. - 2. * (1. - Dc) * (1. - Sc)
    `) + `
    ` + blend('softlight', `
        (2. * Sc <= 1.)?
            Dc - (1. - 2. * Sc) * Dc * (1. - Dc)
        : (2. * Sc > 1. && 4. * Dc <= 1.)?
            Dc + (2. * Sc - 1.) * (4. * Dc * (4. * Dc + 1.) * (Dc - 1.) + 7. * Dc)
        :
            Dc + (2. * Sc - 1.) * (pow(Dc, 0.5) - Dc)`) + `
    ` + blend('hardlight', `(2. * Sc <= 1.)? 2. * Sc * Dc : 1. - 2. * (1. - Dc) * (1. - Sc)`) + `
    // vividlight
    // linearlight
    // pinlight
    // hardmix
    ` + blend('difference', `abs(Dc - Sc)`) + `
    ` + blend('exclusion', `Sc + Dc - 2. * Sc * Dc`) + `
    ` + blend('subtract', `Dc - Sc`) + `
    // divide
    // hue
    // saturation
    // color
    // luminosity
`;
let ETC = `
    // vec3[2] ray(mat4 proj, mat4 camera, vec2 uv) {
    //     proj[2][2] = -1.;
    //     proj[3][2] = -1.;
    //     vec3 ro = position(camera);
    //     vec4 ndc = vec4(uv * 2. - 1., 1., 1.);
    //     vec3 rd = normalize((camera * inverse(proj) * ndc).xyz);
    //     return vec3[2](ro, rd);
    // }

    // // i is image, s screen
    // vec2 uvfit(vec2 uv, float i, float s) {
    //     uv -= 0.5;
    //     if(s > i) uv.x = s * uv.x / i;
    //     else      uv.y = (1. / s) * uv.y / (1. / i);
    //     uv += 0.5;
    //     return uv;
    // }
    // vec2 uvscale(vec2 uv, float n) {
    //     uv -= 0.5;
    //     uv *= 1. / n;
    //     uv += 0.5;
    //     return uv;
    // }

    vec2 mirror(vec2 uv) {
        uv.x = mod(uv.x, 2.);
        uv.y = mod(uv.y, 2.);
        if(uv.x > 1.) uv.x = 1. - (uv.x - 1.);
        if(uv.y > 1.) uv.y = 1. - (uv.y - 1.);
        return uv;
    }

    // float disp(sampler2D disp, vec2 uv, float time, float scale) {
    //     uv *= scale;
    //     uv += time;
    //     return textureLod(disp, mirror(uv), 0.).x;
    // }

    float vnoise_F(vec2 p) {
        #define rand(f) fract(sin(f) * 10000.)   
        #define rand2d(x, y) rand(x + y * 100.)    // OG 10000.
        float sw = rand2d(floor(p.x), floor(p.y));
        float se = rand2d(ceil(p.x),  floor(p.y));
        float nw = rand2d(floor(p.x), ceil(p.y));
        float ne = rand2d(ceil(p.x),  ceil(p.y));
        #undef rand
        #undef rand2d
        vec2 inter = smoothstep(0., 1., fract(p));
        float s = mix(sw, se, inter.x);
        float n = mix(nw, ne, inter.x);
        return mix(s, n, inter.y);
    }
    // float fbm(vec2 p) {
    //     float total = 0.0;
    //     total += vnoise_F(p);
    //     total += vnoise_F(p * 2.) / 2.;
    //     total += vnoise_F(p * 4.) / 4.;
    //     total += vnoise_F(p * 8.) / 8.;
    //     total += vnoise_F(p * 16.) / 16.;
    //     total /= 1. + 1./2. + 1./4. + 1./8. + 1./16.;
    //     return total;
    // }
    float vnoise(vec2 p, int octs) {
        float total = 0.;
        float div = 0.;
        for(int i = 0; i < octs; i++) {
            float mul = pow(2., float(i));
            total += vnoise_F(p * mul) / mul;
            div += 1. / mul;
        }
        return total / div;
    }


`;
let shaderlib = `
    ` + math + `
    ` + matrices + `
    ` + lights + `
    ` + surface + `
    ` + particles + `
    ` + color + `
    ` + filters + `
    ` + misc + `
    ` + blendmodes + `
    ` + ETC + `
`;
let shadertag = '//// code';
let shader = (code, types) => {
    let global = prefix;
    let $code = code + (code.includes(' vertex(') ? '' : //# includes
        `
        mat4 vertex(vx a) {
            return orthoquad;
        }    
    `);
    let vmats = $code.includes('mat4 vertex(') ? 1 : //# includes
        $code.includes('mat4[3] vertex(') ? 2 : //# includes
            0;
    let pvm = vmats == 2;
    let pcols = $code.includes('vec4 pixel(') ? 1 : //# includes
        $code.includes('vec4[2] pixel(') ? 2 :
            $code.includes('vec4[3] pixel(') ? 3 :
                $code.includes('vec4[4] pixel(') ? 4 :
                    $code.includes('vec5 pixel(') ? 5 : //# includes
                        // $code.includes('vec4f[2] pixel(')? 6 :
                        // $code.includes('vec4f[3] pixel(')? 7 :
                        // $code.includes('vec4f[4] pixel(')? 8 :
                        0;
    let uniforms = types.map(([k, t]) => 'uniform ' + t + ' ' + global + k + ';').join('\n'); //# map join
    let args = types.map(([k, t]) => t === 'sampler2D' ? '' : t + ' ' + k + ';').join('\n'); //# map join
    let init = types.map(([k, t]) => t === 'sampler2D' ? '' : ', ' + global + k + '').join(''); //# map join
    let ret = types.map(([k, t]) => t === 'sampler2D' ? k : '').filter(_ => _).join('|'); //# map filter join
    let re = new RegExp('(^|\\W)(v|p|a)\\.(' + ret + ')(\\W|$)', 'g'); //# RegExp
    $code = $code.replace(re, (m, _, a, b, c) => {
        return _ + global + b + c;
    }); //# replace
    // console.log('CODE ', $code)
    let glsl = `#version 300 es
        precision highp float;
        precision highp int;
        ` + shaderlib + `
        ` + shadertag + `
        ` + uniforms + `
        struct vx {
            int instance;
            uvec4 joints;
            vec4 weights;
            ` + args + `
        };
        struct px {
            int instance;
            vec2 uv;
            bool front;
            float depth;
            ivec2 st;
            ` + (pvm ? `
                vec3 pos;
                float posw;
                vec3 normal;
                // vec3 vpos;
                // vec3 vnormal;
                mat3 tbn;
                vec3 eye;`
        : '') + `
            ` + args + `
        };
        struct vec5 { vec4 _v4; float _f; };
        // f -> nowrite
    `;
    let vertex = glsl + `
        #define discard 0.
        ` + $code + `
        layout(location=0) in  vec4 a_pos;
        layout(location=1) in  vec2 a_uv;
        layout(location=2) in  vec3 a_normal;
        layout(location=3) in  vec4 a_tangent;
        layout(location=4) in uvec4 a_joints;
        layout(location=5) in  vec4 a_weights;
        out vec4 v_pos;
        out vec2 v_uv;
        out vec3 v_normal;
        out vec3 v_tangent;
        out vec3 v_bitangent;
        
        // out vec4 v_vpos;
        // out vec3 v_vnormal;

        flat out vec3 v_eye;
        flat out int  v_instance;
        void main()	{
            vx args = vx(
                gl_InstanceID,
                a_joints,
                a_weights
                ` + init + `
            );            
            mat4 m = mat4(1);
            mat4 v = mat4(1);
            mat4 p = mat4(1);
            ` + (pvm ? `
                mat4[3] pvm = vertex(args);
                p = pvm[0];
                v = pvm[1];
                m = pvm[2];`
        : `
                m = vertex(args);
            `) + `
            gl_Position = (p * v * m) * a_pos;
            v_uv = a_uv;
            v_instance = gl_InstanceID;
            ` + (pvm ? `
                v_pos = m * a_pos;
                // v_vpos = (v * m) * a_pos;

                mat3 nm = mat3(transpose(inverse(m)));
                v_normal = normalize(nm * a_normal);

                // mat3 vnm = mat3(transpose(inverse(v * m)));
                // v_vnormal = normalize(vnm * a_normal);

                v_tangent = normalize(nm * a_tangent.xyz);
                v_bitangent = normalize(cross(v_normal, v_tangent) * a_tangent.w);
                v_eye = position(inverse(v));`
        : '') + `
        }`;
    let pixel = glsl + `
        ` + $code + `
        in vec4 v_pos;
        in vec2 v_uv;
        in vec3 v_normal;
        in vec3 v_tangent;
        in vec3 v_bitangent;

        // in vec4 v_vpos;
        // in vec3 v_vnormal;

        flat in vec3 v_eye;
        flat in int v_instance;
        out vec4[${pcols === 4 ? '4' : pcols === 3 ? '3' : pcols === 2 ? '2' : '1'}] color; // resizes?
        void main() {
            vec3 normal = normalize(v_normal);
            vec3 tangent = normalize(v_tangent);
            vec3 bitangent = normalize(v_bitangent);
            // vec3 vnormal = normalize(v_vnormal);
            px args = px(
                v_instance,
                v_uv,
                gl_FrontFacing,
                gl_FragCoord.z,
                ivec2(gl_FragCoord.xy)
                // 1.0 - (gl_FragCoord.z / gl_FragCoord.w) / 10000.
                ` + (pvm ? `,
                    v_pos.xyz,
                    v_pos.w,
                    normal,
                    // v_vpos.xyz,
                    // vnormal,
                    mat3(tangent, bitangent, normal),
                    v_eye`
        : '') + `
                ` + init + `
            );
            ` + (pcols == 1 ? `
                vec4 c = pixel(args);
                color[0] = c;
            ` :
        pcols == 2 ? `
                vec4[2] c = pixel(args);
                color[0] = c[0];
                color[1] = c[1];
            ` :
            pcols == 3 ? `
                vec4[3] c = pixel(args);
                color[0] = c[0];
                color[1] = c[1];
                color[2] = c[2];
            ` :
                pcols == 4 ? `
                vec4[4] c = pixel(args);
                color[0] = c[0];
                color[1] = c[1];
                color[2] = c[2];
                color[3] = c[3];
            ` :
                    pcols == 5 ? `
                vec5 c = pixel(args);
                color[0] = c._v4;
                gl_FragDepth = c._f;
            ` :
                        pcols == 0 ? `
                color[0] = vec4(0);
            ` :
                            (() => { throw pcols; })()) + `
        }`;
    // console.log(vertex, pixel)
    return [vertex, pixel];
};

class PeakMesh extends Mesh {
    vao;
    constructor(mesh, vao) {
        super(mesh.free);
        this.vao = vao;
    }
}
class PeakTexture extends Texture$2 {
    tex;
    constructor(texture, tex) {
        super(texture.width, texture.height, texture.set, texture.free);
        this.tex = tex;
    }
}
class DefaultFramebuffer {
}
class Peak {
    width;
    height;
    mesh;
    program;
    texture;
    fbo;
    clear;
    blit;
    draw;
    free;
    constructor(width, height, mesh, program, texture, fbo, clear, blit, draw, free) {
        this.width = width;
        this.height = height;
        this.mesh = mesh;
        this.program = program;
        this.texture = texture;
        this.fbo = fbo;
        this.clear = clear;
        this.blit = blit;
        this.draw = draw;
        this.free = free;
    }
    static struct = (o) => {
        return new Peak(o.width, o.height, o.mesh, o.program, o.texture, o.fbo, o.clear, o.blit, o.draw, o.free);
    };
}
class State {
    app;
    drawcalls;
    constructor(app, drawcalls) {
        this.app = app;
        this.drawcalls = drawcalls;
    }
    static struct = (o) => {
        return new State(o.app, o.drawcalls);
    };
}
let Mesh_struct = (o) => {
    return new Mesh(o.free);
};
let Texture_struct$1 = (o) => {
    return new Texture$2(o.width, o.height, o.set, o.free);
};
const width = (state) => () => {
    return state.app.width;
};
const height = (state) => () => {
    return state.app.height;
};
const mesh = (state) => (mesh_data) => {
    let vbufs = [];
    let attr = (vao, n, type, item_size, data, is_int) => {
        let buf = state.app.createVertexBuffer(type, item_size, data);
        vbufs.push(buf);
        let options = is_int ? Object.fromEntries([['integer', PicoGL.VERTEX_ATTRIB_ARRAY_INTEGER]]) : undefined;
        return vao.vertexAttributeBuffer(n, buf, options);
    };
    let u = PicoGL.UNSIGNED_INT;
    let f = PicoGL.FLOAT;
    let vao = state.app.createVertexArray();
    let ibuf = state.app.createIndexBuffer(u, 3, mesh_data.indices);
    vbufs.push(ibuf);
    vao.indexBuffer(ibuf);
    attr(vao, 0, f, 3, mesh_data.positions, false);
    attr(vao, 1, f, 2, mesh_data.uvs, false);
    attr(vao, 2, f, 3, mesh_data.normals, false);
    attr(vao, 3, f, 4, mesh_data.tangents, false);
    attr(vao, 4, u, 4, mesh_data.joints, true);
    attr(vao, 5, f, 4, mesh_data.weights, false);
    let mesh = Mesh_struct({ free: () => {
            vbufs.forEach((vbuf) => vbuf.delete());
            vbufs = [];
            let values = Array.from(state.drawcalls.entries());
            values.forEach((value) => {
                value[0];
                let m = value[1];
                return m.delete(vao);
            });
            return vao.delete();
        } });
    return new PeakMesh(mesh, vao);
};
const program = (state) => (vertex, fragment) => {
    return state.app.createProgram(vertex, fragment);
};
const texture = (state) => (pixels, w, h, isdata, flip, wraps, wrapt) => {
    let wrap = (w) => {
        if (w === 'clamp')
            return PicoGL.CLAMP_TO_EDGE;
        if (w === 'repeat')
            return PicoGL.REPEAT;
        if (w === 'mirror')
            return PicoGL.MIRRORED_REPEAT;
        throw (w);
    };
    let internal_format = pixels.constructor === Float32Array ? PicoGL.RGBA32F : PicoGL.RGBA8;
    let option_data = [['internalFormat', internal_format], ['minFilter', PicoGL.NEAREST], ['magFilter', PicoGL.NEAREST], ['wrapS', wrap(wraps)], ['wrapT', wrap(wrapt)]];
    let option_raw = [['internalFormat', internal_format], ['premultiplyAlpha', true], ['maxAnisotropy', PicoGL.WEBGL_INFO.MAX_TEXTURE_ANISOTROPY], ['flipY', flip], ['wrapS', wrap(wraps)], ['wrapT', wrap(wrapt)]];
    let options = isdata ? option_data : option_raw;
    let create_texture = () => {
        if (pixels instanceof ImageBitmap && flip) {
            let c = document.createElement('canvas');
            c.width = pixels.width;
            c.height = pixels.height;
            c.getContext('2d')?.drawImage(pixels, 0, 0, c.width, c.height);
            pixels = c;
        }
        if (pixels instanceof HTMLImageElement || pixels instanceof HTMLCanvasElement) {
            return state.app.createTexture2D(pixels, Object.fromEntries(options));
        }
        return state.app.createTexture2D(pixels, w, h, Object.fromEntries(options));
    };
    let tex = create_texture();
    let texture = Texture_struct$1({
        width: () => w,
        height: () => h,
        set: (pixels) => tex.data(pixels),
        free: () => tex.delete()
    });
    return new PeakTexture(texture, tex);
};
const fbo = (state) => (w, h, msaa, depth, colors) => {
    let renderbuf = (w, h, internal_format) => {
        return state.app.createRenderbuffer(w, h, internal_format, PicoGL.WEBGL_INFO.SAMPLES);
    };
    let fbo = state.app.createFramebuffer();
    if (depth) {
        let internal_format = PicoGL.DEPTH_COMPONENT32F;
        let options = Object.fromEntries([['internalFormat', internal_format]]);
        let target = msaa ? renderbuf(w, h, internal_format) : state.app.createTexture2D(w, h, options);
        fbo.depthTarget(target);
    }
    colors.forEach((tex, index) => {
        let internal_format = tex === 'rgba32f' ? PicoGL.RGBA32F : PicoGL.RGBA8;
        let options = [['internalFormat', internal_format], ['premultiplyAlpha', true], ['flipY', true], ['wrapS', PicoGL.CLAMP_TO_EDGE], ['wrapT', PicoGL.CLAMP_TO_EDGE], ['maxAnisotropy', PicoGL.WEBGL_INFO.MAX_TEXTURE_ANISOTROPY]];
        let target = msaa ? renderbuf(w, h, internal_format) : state.app.createTexture2D(w, h, Object.fromEntries(options));
        return fbo.colorTarget(index, target);
    });
    return fbo;
};
const clear = (state) => (fbo, color, depth) => {
    let bits = PicoGL.STENCIL_BUFFER_BIT;
    if (color)
        bits = bits | PicoGL.COLOR_BUFFER_BIT;
    if (depth)
        bits = bits | PicoGL.DEPTH_BUFFER_BIT;
    state.app.clearBits = bits;
    state.app.depthMask(true);
    if (fbo instanceof DefaultFramebuffer) {
        state.app.defaultDrawFramebuffer();
    }
    else {
        state.app.drawFramebuffer(fbo);
    }
    return state.app.clearColor(0, 0, 0, 0).clear();
};
const blit = (state) => (draw, read, color, depth) => {
    if (draw instanceof DefaultFramebuffer) {
        state.app.defaultDrawFramebuffer();
    }
    else {
        state.app.drawFramebuffer(draw);
    }
    if (read instanceof DefaultFramebuffer) {
        state.app.defaultReadFramebuffer();
    }
    else {
        state.app.readFramebuffer(read);
    }
    let mask = 0;
    if (color)
        mask = mask | PicoGL.COLOR_BUFFER_BIT;
    if (depth)
        mask = mask | PicoGL.DEPTH_BUFFER_BIT;
    state.app.depthMask(true);
    return state.app.blitFramebuffer(mask);
};
const draw = (state) => (fbo, mesh, program, uniforms, instances, depth, mask, blend, cull, w, h) => {
    let programs = mapget(state.drawcalls, program, () => new Map());
    let drawcall = mapget(programs, mesh.vao, () => state.app.createDrawCall(program, mesh.vao));
    mesh.vao.numInstances = instances;
    drawcall.numInstances[0] = instances;
    let uniformv = Object.keys(program.uniforms);
    let samplerv = Object.keys(program.samplers);
    let has = (k) => uniformv.includes(k) || samplerv.includes(k);
    uniforms.forEach((uniform, key) => {
        if (!has(prefix + key))
            return;
        if (uniform instanceof PeakTexture) {
            drawcall.texture(prefix + key, uniform.tex);
            return;
        }
        if (uniform instanceof UniformFloat) {
            drawcall.uniform(prefix + key, uniform.f);
            return;
        }
        if (uniform instanceof UniformInt) {
            drawcall.uniform(prefix + key, uniform.i);
            return;
        }
        if (uniform instanceof UniformArray) {
            drawcall.uniform(prefix + key, uniform.value);
            return;
        }
        if (typeof (uniform) === 'number') {
            drawcall.uniform(prefix + key, uniform);
            return;
        }
    });
    state.app.viewport(0, 0, w, h);
    if (depth)
        state.app.depthTest();
    else
        state.app.noDepthTest();
    state.app.depthFunc(PicoGL.LEQUAL);
    state.app.depthMask(mask);
    let one = PicoGL.ONE;
    let one_minus_src_alpha = PicoGL.ONE_MINUS_SRC_ALPHA;
    let dst_color = PicoGL.DST_COLOR;
    let one_minus_src_color = PicoGL.ONE_MINUS_SRC_COLOR;
    state.app.blend();
    if (blend === 'normal') {
        state.app.blendFuncSeparate(one, one_minus_src_alpha, one, one_minus_src_alpha);
    }
    if (blend === 'add') {
        state.app.blendFuncSeparate(one, one, one, one);
    }
    if (blend === 'multiply') {
        state.app.blendFuncSeparate(dst_color, one_minus_src_alpha, one, one_minus_src_alpha);
    }
    if (blend === 'screen') {
        state.app.blendFuncSeparate(one, one_minus_src_color, one, one_minus_src_alpha);
    }
    if (cull === 'none') {
        state.app.drawBackfaces();
    }
    else {
        state.app.cullBackfaces();
        if (cull === 'back') {
            state.app.gl.cullFace(PicoGL.BACK);
        }
        if (cull === 'front') {
            state.app.gl.cullFace(PicoGL.FRONT);
        }
        if (cull === 'both') {
            state.app.gl.cullFace(PicoGL.FRONT_AND_BACK);
        }
    }
    if (fbo instanceof DefaultFramebuffer) {
        state.app.defaultDrawFramebuffer();
    }
    else {
        state.app.drawFramebuffer(fbo);
    }
    return drawcall.draw();
};
const free = (state) => () => {
    return state.drawcalls = new Map();
};
const peak = (canvas) => {
    let app = PicoGL.createApp(canvas, Object.fromEntries([['alpha', true], ['antialias', true], ['depth', false], ['stencil', false], ['premultipliedAlpha', true]]));
    let state = new State(app, new Map());
    return new Peak(width(state), height(state), mesh(state), program(state), texture(state), fbo(state), clear(state), blit(state), draw(state), free(state));
};

class MSAANone {
    constructor() { }
    static struct = (o) => {
        return new MSAANone();
    };
}
let GFX_struct = (o) => {
    return new GFX(o.width, o.height, o.mesh, o.buffer, o.texture, o.flush, o.free);
};
let Buffer_struct = (o) => {
    return new Buffer(o.width, o.height, o.draw, o.clear, o.color, o.depth, o.free);
};
let Texture_struct = (o) => {
    return new Texture$2(o.width, o.height, o.set, o.free);
};
let u32 = Uint32Array;
let f32 = Float32Array;
let quad_mesh = new MeshData(new u32([0, 2, 1, 2, 3, 1]), new f32([-0.5, 0.5, 0, 0.5, 0.5, 0, -0.5, -0.5, 0, 0.5, -0.5, 0]), new f32([0, 1, 1, 1, 0, 0, 1, 0]), new f32([0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1]), new f32([1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1]), new u32([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]), new f32([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]));
/**
 * Creates the graphics context
 * @param canvas
 * @returns
 */
const gfx = (canvas) => {
    let peak$1 = peak(canvas);
    let quad = peak$1.mesh(quad_mesh);
    let programs = new Map();
    let draw = (fbo, w, h, dc) => {
        let dc_mesh = dc.mesh ?? quad;
        let dc_shader = dc.shader ?? '';
        let dc_uniforms = dc.uniforms ?? new Array();
        let dc_instances = dc.instances ?? 1;
        let dc_depth = dc.depth ?? false;
        let dc_mask = dc.mask ?? true;
        let dc_blend = dc.blend ?? 'normal';
        let dc_cull = dc.cull ?? 'back';
        let dc_clear = dc.clear ?? false;
        if (dc_clear)
            peak$1.clear(fbo, true, true);
        dc_uniforms.push(['aspect', new UniformFloat(w / h)]);
        dc_uniforms.push(['instances', new UniformInt(dc_instances)]);
        let types = [];
        dc_uniforms.forEach(([key, value]) => {
            let type = (() => {
                if (value instanceof Texture$2) {
                    return 'sampler2D';
                }
                if (value instanceof UniformFloat) {
                    return 'float';
                }
                if (value instanceof UniformInt) {
                    return 'int';
                }
                if (value instanceof UniformArray) {
                    return value.type;
                }
                if (typeof (value) === 'number') {
                    return 'float';
                }
                throw new Error();
            })();
            return types.push([key, type]);
        });
        let hash = types.flat().join(',');
        let program = mapget(programs, hash + dc_shader, () => {
            let shader$1 = shader(dc_shader, types);
            return peak$1.program(shader$1[0], shader$1[1]);
        });
        if (dc_mesh instanceof PeakMesh) {
            peak$1.draw(fbo, dc_mesh, program, new Map(dc_uniforms), dc_instances, dc_depth, dc_mask, dc_blend, dc_cull, w, h);
        }
    };
    // let new_drawcall:() => DrawCall = () => {
    //     return DrawCall.struct({ mesh:quad.mesh, shader:'', uniforms:new Map<string, Uniform>(), instances:1, depth:false, mask:true, blend:new BlendNormal(), cull:new CullBack(), clear:false })
    // }
    return GFX_struct({ free: () => {
            peak$1.free();
            quad.free();
            let values = Array.from(programs.values());
            values.forEach((pico_program) => pico_program.delete());
            return programs = new Map();
        }, width: () => {
            return peak$1.width();
        }, height: () => {
            return peak$1.height();
        }, flush: (buffer) => {
            return draw(new DefaultFramebuffer(), peak$1.width(), peak$1.height(), {
                clear: true,
                uniforms: [
                    ['buf', buffer.color()]
                ],
                shader: `
                vec4 pixel(px p) {
                    return texture(p.buf, p.uv);
                }
            `
            });
        }, mesh: (mesh_data) => {
            return peak$1.mesh(mesh_data);
        }, texture: (pixels, texture_options_f) => {
            let isdata = pixels instanceof Float32Array;
            let flip = isdata ? false : true;
            let w = -1;
            let h = -1;
            if (pixels instanceof HTMLVideoElement) {
                w = pixels.videoWidth;
                h = pixels.videoHeight;
            }
            if (pixels instanceof Float32Array) {
                let size = Math.ceil(Math.sqrt(pixels.length / 4));
                let v = new Float32Array(size * size * 4);
                v.set(pixels, 0);
                pixels = v;
                w = size;
                h = size;
            }
            if (pixels instanceof HTMLCanvasElement) {
                w = pixels.width;
                h = pixels.height;
            }
            if (pixels instanceof HTMLImageElement) {
                w = pixels.width;
                h = pixels.height;
            }
            if (pixels instanceof ImageBitmap) {
                w = pixels.width;
                h = pixels.height;
            }
            if (pixels instanceof OffscreenCanvas) {
                w = pixels.width;
                h = pixels.height;
            }
            // let options = new TextureOptions(w, h, flip, new WrapClamp(), new WrapClamp())
            // if(texture_options_f) texture_options_f(options)
            let options_width = texture_options_f?.width ?? w;
            let options_height = texture_options_f?.height ?? h;
            let options_flip = texture_options_f?.flip ?? flip;
            let options_wraps = texture_options_f?.wraps ?? 'clamp';
            let options_wrapt = texture_options_f?.wrapt ?? 'clamp';
            if (options_width === -1 || options_height === -1)
                throw (w);
            return peak$1.texture(pixels, options_width, options_height, isdata, options_flip, options_wraps, options_wrapt);
        }, buffer: (buffer_options_f) => {
            let buffer_options_width = buffer_options_f?.width ?? peak$1.width();
            let buffer_options_height = buffer_options_f?.height ?? peak$1.height();
            let buffer_options_msaa = buffer_options_f?.msaa ?? false;
            let buffer_options_depth = buffer_options_f?.depth ?? false;
            let buffer_options_colors = buffer_options_f?.colors ?? ['rgba8'];
            let fbo = peak$1.fbo(buffer_options_width, buffer_options_height, false, buffer_options_depth, buffer_options_colors);
            let msaa = new MSAANone();
            if (buffer_options_msaa) {
                msaa = peak$1.fbo(buffer_options_width, buffer_options_height, true, buffer_options_depth, buffer_options_colors);
                peak$1.clear(msaa, true, true);
            }
            peak$1.clear(fbo, true, true);
            let online = false;
            let sync = () => {
                if (msaa instanceof MSAANone)
                    return;
                if (online === false) {
                    peak$1.blit(fbo, msaa, true, true);
                    online = true;
                }
            };
            let wrap_texture = (picogl_texture) => {
                let texture = Texture_struct({ width: () => picogl_texture.width, height: () => picogl_texture.height, set: (pixels) => {
                        throw (picogl_texture);
                    }, free: () => {
                        throw (picogl_texture);
                    } });
                return new PeakTexture(texture, picogl_texture);
            };
            return Buffer_struct({ free: () => {
                    let free_fbo = (fbo) => {
                        if (fbo.depthAttachment) {
                            fbo.depthAttachment.delete();
                        }
                        fbo.colorAttachments.forEach((color_attachment) => {
                            return color_attachment.delete();
                        });
                        return fbo.delete();
                    };
                    free_fbo(fbo);
                    if (msaa instanceof MSAANone === false && msaa instanceof DefaultFramebuffer === false) {
                        free_fbo(msaa);
                    }
                }, width: () => {
                    return buffer_options_width;
                }, height: () => {
                    return buffer_options_height;
                }, color: (n = 0) => {
                    sync();
                    return wrap_texture(fbo.colorAttachments[n]);
                }, depth: () => {
                    sync();
                    return wrap_texture(fbo.depthAttachment);
                }, clear: (color = true, depth = true) => {
                    online = true;
                    if (msaa instanceof MSAANone === false) {
                        peak$1.clear(msaa, color, depth);
                    }
                    return peak$1.clear(fbo, color, depth);
                }, draw: (drawcall) => {
                    // let drawcall = new_drawcall()
                    // drawcall_f(drawcall)
                    online = false;
                    if (msaa instanceof MSAANone === false) {
                        draw(msaa, buffer_options_width, buffer_options_height, drawcall);
                    }
                    else {
                        draw(fbo, buffer_options_width, buffer_options_height, drawcall);
                    }
                } });
        } });
};

let fitrect = (w, h, ow, oh) => {
    let r = w / h;
    let or = ow / oh;
    let f = (r >= or) ? ow / w : oh / h;
    return [w * f, h * f];
};

class Events {
    keys;
    ptrs;
    clicks;
    constructor(keys, ptrs, clicks) {
        this.keys = keys;
        this.ptrs = ptrs;
        this.clicks = clicks;
    }
}
class KeyEvent {
    time;
    mods;
    action;
    code;
    key;
    constructor(time, mods, action, code, key) {
        this.time = time;
        this.mods = mods;
        this.action = action;
        this.code = code;
        this.key = key;
    }
}
class PtrEvent {
    time;
    mods;
    action;
    device;
    id;
    x;
    y;
    button;
    buttons;
    pressure;
    constructor(time, mods, action, device, id, x, y, button, buttons, pressure) {
        this.time = time;
        this.mods = mods;
        this.action = action;
        this.device = device;
        this.id = id;
        this.x = x;
        this.y = y;
        this.button = button;
        this.buttons = buttons;
        this.pressure = pressure;
    }
}
class ClickEvent {
    time;
    mods;
    x;
    y;
    double;
    constructor(time, mods, x, y, double) {
        this.time = time;
        this.mods = mods;
        this.x = x;
        this.y = y;
        this.double = double;
    }
}
const key_event = (e, action) => {
    return new KeyEvent(Date.now(), [], action, e.code, e.key);
};
const ptr_event = (e, action, view) => {
    let device = e.pointerType;
    let id = e.pointerId;
    let bc = view.getBoundingClientRect();
    let x = (e.x - bc.x) / bc.width;
    let y = (e.y - bc.y) / bc.height;
    return new PtrEvent(Date.now(), [], action, device, id, x, y, e.button, [], e.pressure);
};
const click_event = (e, double, view) => {
    let bc = view.getBoundingClientRect();
    let x = (e.x - bc.x) / bc.width;
    let y = (e.y - bc.y) / bc.height;
    return new ClickEvent(Date.now(), [], x, y, double);
};
const events = (win, doc, view) => {
    let keysdown = new Map();
    let keys = [];
    let ptrs = [];
    let clicks = [];
    win.addEventListener('keydown', (e) => {
        if (keysdown.has(e.code))
            return;
        keys.push(key_event(e, 'down'));
        keysdown.set(e.code, true);
    });
    win.addEventListener('keyup', (e) => {
        keys.push(key_event(e, 'up'));
        keysdown.delete(e.code);
    });
    doc.addEventListener('pointerdown', (e) => ptrs.push(ptr_event(e, 'down', view)));
    doc.addEventListener('pointerup', (e) => ptrs.push(ptr_event(e, 'up', view)));
    doc.addEventListener('pointermove', (e) => ptrs.push(ptr_event(e, 'move', view)));
    doc.addEventListener('click', (e) => clicks.push(click_event(e, false, view)));
    doc.addEventListener('dblclick', (e) => clicks.push(click_event(e, true, view)));
    return () => {
        let events = new Events(keys, ptrs, clicks);
        keys = [];
        ptrs = [];
        clicks = [];
        return events;
    };
};
class Input {
    time;
    delta;
    key;
    keys;
    ptrs;
    clicks;
    constructor(time, delta, key, keys, ptrs, clicks) {
        this.time = time;
        this.delta = delta;
        this.key = key;
        this.keys = keys;
        this.ptrs = ptrs;
        this.clicks = clicks;
    }
}
const keystate = (m, keys) => {
    keys.forEach((key) => {
        if (key.action === 'down')
            m.set(key.code, true);
        if (key.action === 'up')
            m.set(key.code, false);
    });
};
const ticker = (win, doc, view, f, show_fps, c_off) => {
    let fps = 0;
    let time = Date.now();
    let delta = time;
    let esync = events(win, doc, view);
    let keys = new Map();
    // let doc_hidden = false
    let animate = async () => {
        let now = Date.now();
        let t = (now - time) * 0.001;
        let r = (now - delta) * 0.001;
        delta = now;
        fps += 1;
        let e = esync();
        keystate(keys, e.keys);
        let input = new Input(t, r, (code) => keys.get(code) ? true : false, e.keys, e.ptrs, e.clicks);
        let call = await f(input);
        view.getContext('2d')?.drawImage(c_off, 0, 0);
        if (call === false)
            return;
        // if(doc_hidden) set_timeout(animate)
        // else requestAnimationFrame(animate)
        requestAnimationFrame(animate);
        // if(doc_hidden) console.log('doc hidden', true)
        // console.log('doc', doc_hidden)
        // setTimeout(animate 1000 / 10)
    };
    // doc.addEventListener('visibilitychange', () => {
    //     doc_hidden = doc.hidden? true : false
    //     if(doc_hidden) set_timeout(animate)
    // })
    animate();
    {
        setInterval(() => {
            console.log(fps);
            fps = 0;
        }, 1000);
    }
};
const run = async (app, path) => {
    document.body.style.display = 'flex';
    document.body.style.justifyContent = 'center';
    document.body.style.alignItems = 'center';
    document.body.style.height = '100vh';
    document.body.style.margin = '0';
    document.body.style.backgroundColor = 'black';
    let c = document.createElement('canvas');
    // c.style.position = 'absolute'
    // c.style.top = '0'
    // c.style.right = '1.5%'
    // c.style.border = '2px solid black'
    // c.style.width = '40%'
    document.body.append(c);
    let c_off = document.createElement('canvas');
    let t = await app(path, (w, h) => {
        c_off.width = w;
        c_off.height = h;
        c.width = w;
        c.height = h;
        c.style.position = 'absolute';
        let resize = () => {
            let [a, b] = fitrect(w, h, window.innerWidth, window.innerHeight);
            c.style.width = a + 'px';
            c.style.height = b + 'px';
        };
        window.onresize = resize;
        resize();
        return c_off;
    });
    if (!t)
        return;
    ticker(window, document, c, t, true, c_off);
};

/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */
const REVISION = '166';

const UVMapping = 300;
const RepeatWrapping = 1000;
const ClampToEdgeWrapping = 1001;
const MirroredRepeatWrapping = 1002;
const LinearFilter = 1006;
const LinearMipmapLinearFilter = 1008;
const UnsignedByteType = 1009;
const FloatType = 1015;
const RGBAFormat = 1023;

// Color space string identifiers, matching CSS Color Module Level 4 and WebGPU names where available.
const NoColorSpace = '';

const StaticDrawUsage = 35044;

const WebGLCoordinateSystem = 2000;
const WebGPUCoordinateSystem = 2001;

/**
 * https://github.com/mrdoob/eventdispatcher.js/
 */

class EventDispatcher {

	addEventListener( type, listener ) {

		if ( this._listeners === undefined ) this._listeners = {};

		const listeners = this._listeners;

		if ( listeners[ type ] === undefined ) {

			listeners[ type ] = [];

		}

		if ( listeners[ type ].indexOf( listener ) === -1 ) {

			listeners[ type ].push( listener );

		}

	}

	hasEventListener( type, listener ) {

		if ( this._listeners === undefined ) return false;

		const listeners = this._listeners;

		return listeners[ type ] !== undefined && listeners[ type ].indexOf( listener ) !== -1;

	}

	removeEventListener( type, listener ) {

		if ( this._listeners === undefined ) return;

		const listeners = this._listeners;
		const listenerArray = listeners[ type ];

		if ( listenerArray !== undefined ) {

			const index = listenerArray.indexOf( listener );

			if ( index !== -1 ) {

				listenerArray.splice( index, 1 );

			}

		}

	}

	dispatchEvent( event ) {

		if ( this._listeners === undefined ) return;

		const listeners = this._listeners;
		const listenerArray = listeners[ event.type ];

		if ( listenerArray !== undefined ) {

			event.target = this;

			// Make a copy, in case listeners are removed while iterating.
			const array = listenerArray.slice( 0 );

			for ( let i = 0, l = array.length; i < l; i ++ ) {

				array[ i ].call( this, event );

			}

			event.target = null;

		}

	}

}

const _lut = [ '00', '01', '02', '03', '04', '05', '06', '07', '08', '09', '0a', '0b', '0c', '0d', '0e', '0f', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '1a', '1b', '1c', '1d', '1e', '1f', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '2a', '2b', '2c', '2d', '2e', '2f', '30', '31', '32', '33', '34', '35', '36', '37', '38', '39', '3a', '3b', '3c', '3d', '3e', '3f', '40', '41', '42', '43', '44', '45', '46', '47', '48', '49', '4a', '4b', '4c', '4d', '4e', '4f', '50', '51', '52', '53', '54', '55', '56', '57', '58', '59', '5a', '5b', '5c', '5d', '5e', '5f', '60', '61', '62', '63', '64', '65', '66', '67', '68', '69', '6a', '6b', '6c', '6d', '6e', '6f', '70', '71', '72', '73', '74', '75', '76', '77', '78', '79', '7a', '7b', '7c', '7d', '7e', '7f', '80', '81', '82', '83', '84', '85', '86', '87', '88', '89', '8a', '8b', '8c', '8d', '8e', '8f', '90', '91', '92', '93', '94', '95', '96', '97', '98', '99', '9a', '9b', '9c', '9d', '9e', '9f', 'a0', 'a1', 'a2', 'a3', 'a4', 'a5', 'a6', 'a7', 'a8', 'a9', 'aa', 'ab', 'ac', 'ad', 'ae', 'af', 'b0', 'b1', 'b2', 'b3', 'b4', 'b5', 'b6', 'b7', 'b8', 'b9', 'ba', 'bb', 'bc', 'bd', 'be', 'bf', 'c0', 'c1', 'c2', 'c3', 'c4', 'c5', 'c6', 'c7', 'c8', 'c9', 'ca', 'cb', 'cc', 'cd', 'ce', 'cf', 'd0', 'd1', 'd2', 'd3', 'd4', 'd5', 'd6', 'd7', 'd8', 'd9', 'da', 'db', 'dc', 'dd', 'de', 'df', 'e0', 'e1', 'e2', 'e3', 'e4', 'e5', 'e6', 'e7', 'e8', 'e9', 'ea', 'eb', 'ec', 'ed', 'ee', 'ef', 'f0', 'f1', 'f2', 'f3', 'f4', 'f5', 'f6', 'f7', 'f8', 'f9', 'fa', 'fb', 'fc', 'fd', 'fe', 'ff' ];

// http://stackoverflow.com/questions/105034/how-to-create-a-guid-uuid-in-javascript/21963136#21963136
function generateUUID() {

	const d0 = Math.random() * 0xffffffff | 0;
	const d1 = Math.random() * 0xffffffff | 0;
	const d2 = Math.random() * 0xffffffff | 0;
	const d3 = Math.random() * 0xffffffff | 0;
	const uuid = _lut[ d0 & 0xff ] + _lut[ d0 >> 8 & 0xff ] + _lut[ d0 >> 16 & 0xff ] + _lut[ d0 >> 24 & 0xff ] + '-' +
			_lut[ d1 & 0xff ] + _lut[ d1 >> 8 & 0xff ] + '-' + _lut[ d1 >> 16 & 0x0f | 0x40 ] + _lut[ d1 >> 24 & 0xff ] + '-' +
			_lut[ d2 & 0x3f | 0x80 ] + _lut[ d2 >> 8 & 0xff ] + '-' + _lut[ d2 >> 16 & 0xff ] + _lut[ d2 >> 24 & 0xff ] +
			_lut[ d3 & 0xff ] + _lut[ d3 >> 8 & 0xff ] + _lut[ d3 >> 16 & 0xff ] + _lut[ d3 >> 24 & 0xff ];

	// .toLowerCase() here flattens concatenated strings to save heap memory space.
	return uuid.toLowerCase();

}

function clamp( value, min, max ) {

	return Math.max( min, Math.min( max, value ) );

}

function denormalize( value, array ) {

	switch ( array.constructor ) {

		case Float32Array:

			return value;

		case Uint32Array:

			return value / 4294967295.0;

		case Uint16Array:

			return value / 65535.0;

		case Uint8Array:

			return value / 255.0;

		case Int32Array:

			return Math.max( value / 2147483647.0, -1 );

		case Int16Array:

			return Math.max( value / 32767.0, -1 );

		case Int8Array:

			return Math.max( value / 127.0, -1 );

		default:

			throw new Error( 'Invalid component type.' );

	}

}

function normalize( value, array ) {

	switch ( array.constructor ) {

		case Float32Array:

			return value;

		case Uint32Array:

			return Math.round( value * 4294967295.0 );

		case Uint16Array:

			return Math.round( value * 65535.0 );

		case Uint8Array:

			return Math.round( value * 255.0 );

		case Int32Array:

			return Math.round( value * 2147483647.0 );

		case Int16Array:

			return Math.round( value * 32767.0 );

		case Int8Array:

			return Math.round( value * 127.0 );

		default:

			throw new Error( 'Invalid component type.' );

	}

}

class Vector2 {

	constructor( x = 0, y = 0 ) {

		Vector2.prototype.isVector2 = true;

		this.x = x;
		this.y = y;

	}

	get width() {

		return this.x;

	}

	set width( value ) {

		this.x = value;

	}

	get height() {

		return this.y;

	}

	set height( value ) {

		this.y = value;

	}

	set( x, y ) {

		this.x = x;
		this.y = y;

		return this;

	}

	setScalar( scalar ) {

		this.x = scalar;
		this.y = scalar;

		return this;

	}

	setX( x ) {

		this.x = x;

		return this;

	}

	setY( y ) {

		this.y = y;

		return this;

	}

	setComponent( index, value ) {

		switch ( index ) {

			case 0: this.x = value; break;
			case 1: this.y = value; break;
			default: throw new Error( 'index is out of range: ' + index );

		}

		return this;

	}

	getComponent( index ) {

		switch ( index ) {

			case 0: return this.x;
			case 1: return this.y;
			default: throw new Error( 'index is out of range: ' + index );

		}

	}

	clone() {

		return new this.constructor( this.x, this.y );

	}

	copy( v ) {

		this.x = v.x;
		this.y = v.y;

		return this;

	}

	add( v ) {

		this.x += v.x;
		this.y += v.y;

		return this;

	}

	addScalar( s ) {

		this.x += s;
		this.y += s;

		return this;

	}

	addVectors( a, b ) {

		this.x = a.x + b.x;
		this.y = a.y + b.y;

		return this;

	}

	addScaledVector( v, s ) {

		this.x += v.x * s;
		this.y += v.y * s;

		return this;

	}

	sub( v ) {

		this.x -= v.x;
		this.y -= v.y;

		return this;

	}

	subScalar( s ) {

		this.x -= s;
		this.y -= s;

		return this;

	}

	subVectors( a, b ) {

		this.x = a.x - b.x;
		this.y = a.y - b.y;

		return this;

	}

	multiply( v ) {

		this.x *= v.x;
		this.y *= v.y;

		return this;

	}

	multiplyScalar( scalar ) {

		this.x *= scalar;
		this.y *= scalar;

		return this;

	}

	divide( v ) {

		this.x /= v.x;
		this.y /= v.y;

		return this;

	}

	divideScalar( scalar ) {

		return this.multiplyScalar( 1 / scalar );

	}

	applyMatrix3( m ) {

		const x = this.x, y = this.y;
		const e = m.elements;

		this.x = e[ 0 ] * x + e[ 3 ] * y + e[ 6 ];
		this.y = e[ 1 ] * x + e[ 4 ] * y + e[ 7 ];

		return this;

	}

	min( v ) {

		this.x = Math.min( this.x, v.x );
		this.y = Math.min( this.y, v.y );

		return this;

	}

	max( v ) {

		this.x = Math.max( this.x, v.x );
		this.y = Math.max( this.y, v.y );

		return this;

	}

	clamp( min, max ) {

		// assumes min < max, componentwise

		this.x = Math.max( min.x, Math.min( max.x, this.x ) );
		this.y = Math.max( min.y, Math.min( max.y, this.y ) );

		return this;

	}

	clampScalar( minVal, maxVal ) {

		this.x = Math.max( minVal, Math.min( maxVal, this.x ) );
		this.y = Math.max( minVal, Math.min( maxVal, this.y ) );

		return this;

	}

	clampLength( min, max ) {

		const length = this.length();

		return this.divideScalar( length || 1 ).multiplyScalar( Math.max( min, Math.min( max, length ) ) );

	}

	floor() {

		this.x = Math.floor( this.x );
		this.y = Math.floor( this.y );

		return this;

	}

	ceil() {

		this.x = Math.ceil( this.x );
		this.y = Math.ceil( this.y );

		return this;

	}

	round() {

		this.x = Math.round( this.x );
		this.y = Math.round( this.y );

		return this;

	}

	roundToZero() {

		this.x = Math.trunc( this.x );
		this.y = Math.trunc( this.y );

		return this;

	}

	negate() {

		this.x = - this.x;
		this.y = - this.y;

		return this;

	}

	dot( v ) {

		return this.x * v.x + this.y * v.y;

	}

	cross( v ) {

		return this.x * v.y - this.y * v.x;

	}

	lengthSq() {

		return this.x * this.x + this.y * this.y;

	}

	length() {

		return Math.sqrt( this.x * this.x + this.y * this.y );

	}

	manhattanLength() {

		return Math.abs( this.x ) + Math.abs( this.y );

	}

	normalize() {

		return this.divideScalar( this.length() || 1 );

	}

	angle() {

		// computes the angle in radians with respect to the positive x-axis

		const angle = Math.atan2( - this.y, - this.x ) + Math.PI;

		return angle;

	}

	angleTo( v ) {

		const denominator = Math.sqrt( this.lengthSq() * v.lengthSq() );

		if ( denominator === 0 ) return Math.PI / 2;

		const theta = this.dot( v ) / denominator;

		// clamp, to handle numerical problems

		return Math.acos( clamp( theta, -1, 1 ) );

	}

	distanceTo( v ) {

		return Math.sqrt( this.distanceToSquared( v ) );

	}

	distanceToSquared( v ) {

		const dx = this.x - v.x, dy = this.y - v.y;
		return dx * dx + dy * dy;

	}

	manhattanDistanceTo( v ) {

		return Math.abs( this.x - v.x ) + Math.abs( this.y - v.y );

	}

	setLength( length ) {

		return this.normalize().multiplyScalar( length );

	}

	lerp( v, alpha ) {

		this.x += ( v.x - this.x ) * alpha;
		this.y += ( v.y - this.y ) * alpha;

		return this;

	}

	lerpVectors( v1, v2, alpha ) {

		this.x = v1.x + ( v2.x - v1.x ) * alpha;
		this.y = v1.y + ( v2.y - v1.y ) * alpha;

		return this;

	}

	equals( v ) {

		return ( ( v.x === this.x ) && ( v.y === this.y ) );

	}

	fromArray( array, offset = 0 ) {

		this.x = array[ offset ];
		this.y = array[ offset + 1 ];

		return this;

	}

	toArray( array = [], offset = 0 ) {

		array[ offset ] = this.x;
		array[ offset + 1 ] = this.y;

		return array;

	}

	fromBufferAttribute( attribute, index ) {

		this.x = attribute.getX( index );
		this.y = attribute.getY( index );

		return this;

	}

	rotateAround( center, angle ) {

		const c = Math.cos( angle ), s = Math.sin( angle );

		const x = this.x - center.x;
		const y = this.y - center.y;

		this.x = x * c - y * s + center.x;
		this.y = x * s + y * c + center.y;

		return this;

	}

	random() {

		this.x = Math.random();
		this.y = Math.random();

		return this;

	}

	*[ Symbol.iterator ]() {

		yield this.x;
		yield this.y;

	}

}

class Matrix3 {

	constructor( n11, n12, n13, n21, n22, n23, n31, n32, n33 ) {

		Matrix3.prototype.isMatrix3 = true;

		this.elements = [

			1, 0, 0,
			0, 1, 0,
			0, 0, 1

		];

		if ( n11 !== undefined ) {

			this.set( n11, n12, n13, n21, n22, n23, n31, n32, n33 );

		}

	}

	set( n11, n12, n13, n21, n22, n23, n31, n32, n33 ) {

		const te = this.elements;

		te[ 0 ] = n11; te[ 1 ] = n21; te[ 2 ] = n31;
		te[ 3 ] = n12; te[ 4 ] = n22; te[ 5 ] = n32;
		te[ 6 ] = n13; te[ 7 ] = n23; te[ 8 ] = n33;

		return this;

	}

	identity() {

		this.set(

			1, 0, 0,
			0, 1, 0,
			0, 0, 1

		);

		return this;

	}

	copy( m ) {

		const te = this.elements;
		const me = m.elements;

		te[ 0 ] = me[ 0 ]; te[ 1 ] = me[ 1 ]; te[ 2 ] = me[ 2 ];
		te[ 3 ] = me[ 3 ]; te[ 4 ] = me[ 4 ]; te[ 5 ] = me[ 5 ];
		te[ 6 ] = me[ 6 ]; te[ 7 ] = me[ 7 ]; te[ 8 ] = me[ 8 ];

		return this;

	}

	extractBasis( xAxis, yAxis, zAxis ) {

		xAxis.setFromMatrix3Column( this, 0 );
		yAxis.setFromMatrix3Column( this, 1 );
		zAxis.setFromMatrix3Column( this, 2 );

		return this;

	}

	setFromMatrix4( m ) {

		const me = m.elements;

		this.set(

			me[ 0 ], me[ 4 ], me[ 8 ],
			me[ 1 ], me[ 5 ], me[ 9 ],
			me[ 2 ], me[ 6 ], me[ 10 ]

		);

		return this;

	}

	multiply( m ) {

		return this.multiplyMatrices( this, m );

	}

	premultiply( m ) {

		return this.multiplyMatrices( m, this );

	}

	multiplyMatrices( a, b ) {

		const ae = a.elements;
		const be = b.elements;
		const te = this.elements;

		const a11 = ae[ 0 ], a12 = ae[ 3 ], a13 = ae[ 6 ];
		const a21 = ae[ 1 ], a22 = ae[ 4 ], a23 = ae[ 7 ];
		const a31 = ae[ 2 ], a32 = ae[ 5 ], a33 = ae[ 8 ];

		const b11 = be[ 0 ], b12 = be[ 3 ], b13 = be[ 6 ];
		const b21 = be[ 1 ], b22 = be[ 4 ], b23 = be[ 7 ];
		const b31 = be[ 2 ], b32 = be[ 5 ], b33 = be[ 8 ];

		te[ 0 ] = a11 * b11 + a12 * b21 + a13 * b31;
		te[ 3 ] = a11 * b12 + a12 * b22 + a13 * b32;
		te[ 6 ] = a11 * b13 + a12 * b23 + a13 * b33;

		te[ 1 ] = a21 * b11 + a22 * b21 + a23 * b31;
		te[ 4 ] = a21 * b12 + a22 * b22 + a23 * b32;
		te[ 7 ] = a21 * b13 + a22 * b23 + a23 * b33;

		te[ 2 ] = a31 * b11 + a32 * b21 + a33 * b31;
		te[ 5 ] = a31 * b12 + a32 * b22 + a33 * b32;
		te[ 8 ] = a31 * b13 + a32 * b23 + a33 * b33;

		return this;

	}

	multiplyScalar( s ) {

		const te = this.elements;

		te[ 0 ] *= s; te[ 3 ] *= s; te[ 6 ] *= s;
		te[ 1 ] *= s; te[ 4 ] *= s; te[ 7 ] *= s;
		te[ 2 ] *= s; te[ 5 ] *= s; te[ 8 ] *= s;

		return this;

	}

	determinant() {

		const te = this.elements;

		const a = te[ 0 ], b = te[ 1 ], c = te[ 2 ],
			d = te[ 3 ], e = te[ 4 ], f = te[ 5 ],
			g = te[ 6 ], h = te[ 7 ], i = te[ 8 ];

		return a * e * i - a * f * h - b * d * i + b * f * g + c * d * h - c * e * g;

	}

	invert() {

		const te = this.elements,

			n11 = te[ 0 ], n21 = te[ 1 ], n31 = te[ 2 ],
			n12 = te[ 3 ], n22 = te[ 4 ], n32 = te[ 5 ],
			n13 = te[ 6 ], n23 = te[ 7 ], n33 = te[ 8 ],

			t11 = n33 * n22 - n32 * n23,
			t12 = n32 * n13 - n33 * n12,
			t13 = n23 * n12 - n22 * n13,

			det = n11 * t11 + n21 * t12 + n31 * t13;

		if ( det === 0 ) return this.set( 0, 0, 0, 0, 0, 0, 0, 0, 0 );

		const detInv = 1 / det;

		te[ 0 ] = t11 * detInv;
		te[ 1 ] = ( n31 * n23 - n33 * n21 ) * detInv;
		te[ 2 ] = ( n32 * n21 - n31 * n22 ) * detInv;

		te[ 3 ] = t12 * detInv;
		te[ 4 ] = ( n33 * n11 - n31 * n13 ) * detInv;
		te[ 5 ] = ( n31 * n12 - n32 * n11 ) * detInv;

		te[ 6 ] = t13 * detInv;
		te[ 7 ] = ( n21 * n13 - n23 * n11 ) * detInv;
		te[ 8 ] = ( n22 * n11 - n21 * n12 ) * detInv;

		return this;

	}

	transpose() {

		let tmp;
		const m = this.elements;

		tmp = m[ 1 ]; m[ 1 ] = m[ 3 ]; m[ 3 ] = tmp;
		tmp = m[ 2 ]; m[ 2 ] = m[ 6 ]; m[ 6 ] = tmp;
		tmp = m[ 5 ]; m[ 5 ] = m[ 7 ]; m[ 7 ] = tmp;

		return this;

	}

	getNormalMatrix( matrix4 ) {

		return this.setFromMatrix4( matrix4 ).invert().transpose();

	}

	transposeIntoArray( r ) {

		const m = this.elements;

		r[ 0 ] = m[ 0 ];
		r[ 1 ] = m[ 3 ];
		r[ 2 ] = m[ 6 ];
		r[ 3 ] = m[ 1 ];
		r[ 4 ] = m[ 4 ];
		r[ 5 ] = m[ 7 ];
		r[ 6 ] = m[ 2 ];
		r[ 7 ] = m[ 5 ];
		r[ 8 ] = m[ 8 ];

		return this;

	}

	setUvTransform( tx, ty, sx, sy, rotation, cx, cy ) {

		const c = Math.cos( rotation );
		const s = Math.sin( rotation );

		this.set(
			sx * c, sx * s, - sx * ( c * cx + s * cy ) + cx + tx,
			- sy * s, sy * c, - sy * ( - s * cx + c * cy ) + cy + ty,
			0, 0, 1
		);

		return this;

	}

	//

	scale( sx, sy ) {

		this.premultiply( _m3.makeScale( sx, sy ) );

		return this;

	}

	rotate( theta ) {

		this.premultiply( _m3.makeRotation( - theta ) );

		return this;

	}

	translate( tx, ty ) {

		this.premultiply( _m3.makeTranslation( tx, ty ) );

		return this;

	}

	// for 2D Transforms

	makeTranslation( x, y ) {

		if ( x.isVector2 ) {

			this.set(

				1, 0, x.x,
				0, 1, x.y,
				0, 0, 1

			);

		} else {

			this.set(

				1, 0, x,
				0, 1, y,
				0, 0, 1

			);

		}

		return this;

	}

	makeRotation( theta ) {

		// counterclockwise

		const c = Math.cos( theta );
		const s = Math.sin( theta );

		this.set(

			c, - s, 0,
			s, c, 0,
			0, 0, 1

		);

		return this;

	}

	makeScale( x, y ) {

		this.set(

			x, 0, 0,
			0, y, 0,
			0, 0, 1

		);

		return this;

	}

	//

	equals( matrix ) {

		const te = this.elements;
		const me = matrix.elements;

		for ( let i = 0; i < 9; i ++ ) {

			if ( te[ i ] !== me[ i ] ) return false;

		}

		return true;

	}

	fromArray( array, offset = 0 ) {

		for ( let i = 0; i < 9; i ++ ) {

			this.elements[ i ] = array[ i + offset ];

		}

		return this;

	}

	toArray( array = [], offset = 0 ) {

		const te = this.elements;

		array[ offset ] = te[ 0 ];
		array[ offset + 1 ] = te[ 1 ];
		array[ offset + 2 ] = te[ 2 ];

		array[ offset + 3 ] = te[ 3 ];
		array[ offset + 4 ] = te[ 4 ];
		array[ offset + 5 ] = te[ 5 ];

		array[ offset + 6 ] = te[ 6 ];
		array[ offset + 7 ] = te[ 7 ];
		array[ offset + 8 ] = te[ 8 ];

		return array;

	}

	clone() {

		return new this.constructor().fromArray( this.elements );

	}

}

const _m3 = /*@__PURE__*/ new Matrix3();

function arrayNeedsUint32( array ) {

	// assumes larger values usually on last

	for ( let i = array.length - 1; i >= 0; -- i ) {

		if ( array[ i ] >= 65535 ) return true; // account for PRIMITIVE_RESTART_FIXED_INDEX, #24565

	}

	return false;

}

function createElementNS( name ) {

	return document.createElementNS( 'http://www.w3.org/1999/xhtml', name );

}

const _cache = {};

function warnOnce( message ) {

	if ( message in _cache ) return;

	_cache[ message ] = true;

	console.warn( message );

}


function SRGBToLinear( c ) {

	return ( c < 0.04045 ) ? c * 0.0773993808 : Math.pow( c * 0.9478672986 + 0.0521327014, 2.4 );

}

let _canvas;

class ImageUtils {

	static getDataURL( image ) {

		if ( /^data:/i.test( image.src ) ) {

			return image.src;

		}

		if ( typeof HTMLCanvasElement === 'undefined' ) {

			return image.src;

		}

		let canvas;

		if ( image instanceof HTMLCanvasElement ) {

			canvas = image;

		} else {

			if ( _canvas === undefined ) _canvas = createElementNS( 'canvas' );

			_canvas.width = image.width;
			_canvas.height = image.height;

			const context = _canvas.getContext( '2d' );

			if ( image instanceof ImageData ) {

				context.putImageData( image, 0, 0 );

			} else {

				context.drawImage( image, 0, 0, image.width, image.height );

			}

			canvas = _canvas;

		}

		if ( canvas.width > 2048 || canvas.height > 2048 ) {

			console.warn( 'THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons', image );

			return canvas.toDataURL( 'image/jpeg', 0.6 );

		} else {

			return canvas.toDataURL( 'image/png' );

		}

	}

	static sRGBToLinear( image ) {

		if ( ( typeof HTMLImageElement !== 'undefined' && image instanceof HTMLImageElement ) ||
			( typeof HTMLCanvasElement !== 'undefined' && image instanceof HTMLCanvasElement ) ||
			( typeof ImageBitmap !== 'undefined' && image instanceof ImageBitmap ) ) {

			const canvas = createElementNS( 'canvas' );

			canvas.width = image.width;
			canvas.height = image.height;

			const context = canvas.getContext( '2d' );
			context.drawImage( image, 0, 0, image.width, image.height );

			const imageData = context.getImageData( 0, 0, image.width, image.height );
			const data = imageData.data;

			for ( let i = 0; i < data.length; i ++ ) {

				data[ i ] = SRGBToLinear( data[ i ] / 255 ) * 255;

			}

			context.putImageData( imageData, 0, 0 );

			return canvas;

		} else if ( image.data ) {

			const data = image.data.slice( 0 );

			for ( let i = 0; i < data.length; i ++ ) {

				if ( data instanceof Uint8Array || data instanceof Uint8ClampedArray ) {

					data[ i ] = Math.floor( SRGBToLinear( data[ i ] / 255 ) * 255 );

				} else {

					// assuming float

					data[ i ] = SRGBToLinear( data[ i ] );

				}

			}

			return {
				data: data,
				width: image.width,
				height: image.height
			};

		} else {

			console.warn( 'THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied.' );
			return image;

		}

	}

}

let _sourceId = 0;

class Source {

	constructor( data = null ) {

		this.isSource = true;

		Object.defineProperty( this, 'id', { value: _sourceId ++ } );

		this.uuid = generateUUID();

		this.data = data;
		this.dataReady = true;

		this.version = 0;

	}

	set needsUpdate( value ) {

		if ( value === true ) this.version ++;

	}

	toJSON( meta ) {

		const isRootObject = ( meta === undefined || typeof meta === 'string' );

		if ( ! isRootObject && meta.images[ this.uuid ] !== undefined ) {

			return meta.images[ this.uuid ];

		}

		const output = {
			uuid: this.uuid,
			url: ''
		};

		const data = this.data;

		if ( data !== null ) {

			let url;

			if ( Array.isArray( data ) ) {

				// cube texture

				url = [];

				for ( let i = 0, l = data.length; i < l; i ++ ) {

					if ( data[ i ].isDataTexture ) {

						url.push( serializeImage( data[ i ].image ) );

					} else {

						url.push( serializeImage( data[ i ] ) );

					}

				}

			} else {

				// texture

				url = serializeImage( data );

			}

			output.url = url;

		}

		if ( ! isRootObject ) {

			meta.images[ this.uuid ] = output;

		}

		return output;

	}

}

function serializeImage( image ) {

	if ( ( typeof HTMLImageElement !== 'undefined' && image instanceof HTMLImageElement ) ||
		( typeof HTMLCanvasElement !== 'undefined' && image instanceof HTMLCanvasElement ) ||
		( typeof ImageBitmap !== 'undefined' && image instanceof ImageBitmap ) ) {

		// default images

		return ImageUtils.getDataURL( image );

	} else {

		if ( image.data ) {

			// images of DataTexture

			return {
				data: Array.from( image.data ),
				width: image.width,
				height: image.height,
				type: image.data.constructor.name
			};

		} else {

			console.warn( 'THREE.Texture: Unable to serialize Texture.' );
			return {};

		}

	}

}

let _textureId = 0;

class Texture extends EventDispatcher {

	constructor( image = Texture.DEFAULT_IMAGE, mapping = Texture.DEFAULT_MAPPING, wrapS = ClampToEdgeWrapping, wrapT = ClampToEdgeWrapping, magFilter = LinearFilter, minFilter = LinearMipmapLinearFilter, format = RGBAFormat, type = UnsignedByteType, anisotropy = Texture.DEFAULT_ANISOTROPY, colorSpace = NoColorSpace ) {

		super();

		this.isTexture = true;

		Object.defineProperty( this, 'id', { value: _textureId ++ } );

		this.uuid = generateUUID();

		this.name = '';

		this.source = new Source( image );
		this.mipmaps = [];

		this.mapping = mapping;
		this.channel = 0;

		this.wrapS = wrapS;
		this.wrapT = wrapT;

		this.magFilter = magFilter;
		this.minFilter = minFilter;

		this.anisotropy = anisotropy;

		this.format = format;
		this.internalFormat = null;
		this.type = type;

		this.offset = new Vector2( 0, 0 );
		this.repeat = new Vector2( 1, 1 );
		this.center = new Vector2( 0, 0 );
		this.rotation = 0;

		this.matrixAutoUpdate = true;
		this.matrix = new Matrix3();

		this.generateMipmaps = true;
		this.premultiplyAlpha = false;
		this.flipY = true;
		this.unpackAlignment = 4;	// valid values: 1, 2, 4, 8 (see http://www.khronos.org/opengles/sdk/docs/man/xhtml/glPixelStorei.xml)

		this.colorSpace = colorSpace;

		this.userData = {};

		this.version = 0;
		this.onUpdate = null;

		this.isRenderTargetTexture = false; // indicates whether a texture belongs to a render target or not
		this.pmremVersion = 0; // indicates whether this texture should be processed by PMREMGenerator or not (only relevant for render target textures)

	}

	get image() {

		return this.source.data;

	}

	set image( value = null ) {

		this.source.data = value;

	}

	updateMatrix() {

		this.matrix.setUvTransform( this.offset.x, this.offset.y, this.repeat.x, this.repeat.y, this.rotation, this.center.x, this.center.y );

	}

	clone() {

		return new this.constructor().copy( this );

	}

	copy( source ) {

		this.name = source.name;

		this.source = source.source;
		this.mipmaps = source.mipmaps.slice( 0 );

		this.mapping = source.mapping;
		this.channel = source.channel;

		this.wrapS = source.wrapS;
		this.wrapT = source.wrapT;

		this.magFilter = source.magFilter;
		this.minFilter = source.minFilter;

		this.anisotropy = source.anisotropy;

		this.format = source.format;
		this.internalFormat = source.internalFormat;
		this.type = source.type;

		this.offset.copy( source.offset );
		this.repeat.copy( source.repeat );
		this.center.copy( source.center );
		this.rotation = source.rotation;

		this.matrixAutoUpdate = source.matrixAutoUpdate;
		this.matrix.copy( source.matrix );

		this.generateMipmaps = source.generateMipmaps;
		this.premultiplyAlpha = source.premultiplyAlpha;
		this.flipY = source.flipY;
		this.unpackAlignment = source.unpackAlignment;
		this.colorSpace = source.colorSpace;

		this.userData = JSON.parse( JSON.stringify( source.userData ) );

		this.needsUpdate = true;

		return this;

	}

	toJSON( meta ) {

		const isRootObject = ( meta === undefined || typeof meta === 'string' );

		if ( ! isRootObject && meta.textures[ this.uuid ] !== undefined ) {

			return meta.textures[ this.uuid ];

		}

		const output = {

			metadata: {
				version: 4.6,
				type: 'Texture',
				generator: 'Texture.toJSON'
			},

			uuid: this.uuid,
			name: this.name,

			image: this.source.toJSON( meta ).uuid,

			mapping: this.mapping,
			channel: this.channel,

			repeat: [ this.repeat.x, this.repeat.y ],
			offset: [ this.offset.x, this.offset.y ],
			center: [ this.center.x, this.center.y ],
			rotation: this.rotation,

			wrap: [ this.wrapS, this.wrapT ],

			format: this.format,
			internalFormat: this.internalFormat,
			type: this.type,
			colorSpace: this.colorSpace,

			minFilter: this.minFilter,
			magFilter: this.magFilter,
			anisotropy: this.anisotropy,

			flipY: this.flipY,

			generateMipmaps: this.generateMipmaps,
			premultiplyAlpha: this.premultiplyAlpha,
			unpackAlignment: this.unpackAlignment

		};

		if ( Object.keys( this.userData ).length > 0 ) output.userData = this.userData;

		if ( ! isRootObject ) {

			meta.textures[ this.uuid ] = output;

		}

		return output;

	}

	dispose() {

		this.dispatchEvent( { type: 'dispose' } );

	}

	transformUv( uv ) {

		if ( this.mapping !== UVMapping ) return uv;

		uv.applyMatrix3( this.matrix );

		if ( uv.x < 0 || uv.x > 1 ) {

			switch ( this.wrapS ) {

				case RepeatWrapping:

					uv.x = uv.x - Math.floor( uv.x );
					break;

				case ClampToEdgeWrapping:

					uv.x = uv.x < 0 ? 0 : 1;
					break;

				case MirroredRepeatWrapping:

					if ( Math.abs( Math.floor( uv.x ) % 2 ) === 1 ) {

						uv.x = Math.ceil( uv.x ) - uv.x;

					} else {

						uv.x = uv.x - Math.floor( uv.x );

					}

					break;

			}

		}

		if ( uv.y < 0 || uv.y > 1 ) {

			switch ( this.wrapT ) {

				case RepeatWrapping:

					uv.y = uv.y - Math.floor( uv.y );
					break;

				case ClampToEdgeWrapping:

					uv.y = uv.y < 0 ? 0 : 1;
					break;

				case MirroredRepeatWrapping:

					if ( Math.abs( Math.floor( uv.y ) % 2 ) === 1 ) {

						uv.y = Math.ceil( uv.y ) - uv.y;

					} else {

						uv.y = uv.y - Math.floor( uv.y );

					}

					break;

			}

		}

		if ( this.flipY ) {

			uv.y = 1 - uv.y;

		}

		return uv;

	}

	set needsUpdate( value ) {

		if ( value === true ) {

			this.version ++;
			this.source.needsUpdate = true;

		}

	}

	set needsPMREMUpdate( value ) {

		if ( value === true ) {

			this.pmremVersion ++;

		}

	}

}

Texture.DEFAULT_IMAGE = null;
Texture.DEFAULT_MAPPING = UVMapping;
Texture.DEFAULT_ANISOTROPY = 1;

class Quaternion {

	constructor( x = 0, y = 0, z = 0, w = 1 ) {

		this.isQuaternion = true;

		this._x = x;
		this._y = y;
		this._z = z;
		this._w = w;

	}

	static slerpFlat( dst, dstOffset, src0, srcOffset0, src1, srcOffset1, t ) {

		// fuzz-free, array-based Quaternion SLERP operation

		let x0 = src0[ srcOffset0 + 0 ],
			y0 = src0[ srcOffset0 + 1 ],
			z0 = src0[ srcOffset0 + 2 ],
			w0 = src0[ srcOffset0 + 3 ];

		const x1 = src1[ srcOffset1 + 0 ],
			y1 = src1[ srcOffset1 + 1 ],
			z1 = src1[ srcOffset1 + 2 ],
			w1 = src1[ srcOffset1 + 3 ];

		if ( t === 0 ) {

			dst[ dstOffset + 0 ] = x0;
			dst[ dstOffset + 1 ] = y0;
			dst[ dstOffset + 2 ] = z0;
			dst[ dstOffset + 3 ] = w0;
			return;

		}

		if ( t === 1 ) {

			dst[ dstOffset + 0 ] = x1;
			dst[ dstOffset + 1 ] = y1;
			dst[ dstOffset + 2 ] = z1;
			dst[ dstOffset + 3 ] = w1;
			return;

		}

		if ( w0 !== w1 || x0 !== x1 || y0 !== y1 || z0 !== z1 ) {

			let s = 1 - t;
			const cos = x0 * x1 + y0 * y1 + z0 * z1 + w0 * w1,
				dir = ( cos >= 0 ? 1 : -1 ),
				sqrSin = 1 - cos * cos;

			// Skip the Slerp for tiny steps to avoid numeric problems:
			if ( sqrSin > Number.EPSILON ) {

				const sin = Math.sqrt( sqrSin ),
					len = Math.atan2( sin, cos * dir );

				s = Math.sin( s * len ) / sin;
				t = Math.sin( t * len ) / sin;

			}

			const tDir = t * dir;

			x0 = x0 * s + x1 * tDir;
			y0 = y0 * s + y1 * tDir;
			z0 = z0 * s + z1 * tDir;
			w0 = w0 * s + w1 * tDir;

			// Normalize in case we just did a lerp:
			if ( s === 1 - t ) {

				const f = 1 / Math.sqrt( x0 * x0 + y0 * y0 + z0 * z0 + w0 * w0 );

				x0 *= f;
				y0 *= f;
				z0 *= f;
				w0 *= f;

			}

		}

		dst[ dstOffset ] = x0;
		dst[ dstOffset + 1 ] = y0;
		dst[ dstOffset + 2 ] = z0;
		dst[ dstOffset + 3 ] = w0;

	}

	static multiplyQuaternionsFlat( dst, dstOffset, src0, srcOffset0, src1, srcOffset1 ) {

		const x0 = src0[ srcOffset0 ];
		const y0 = src0[ srcOffset0 + 1 ];
		const z0 = src0[ srcOffset0 + 2 ];
		const w0 = src0[ srcOffset0 + 3 ];

		const x1 = src1[ srcOffset1 ];
		const y1 = src1[ srcOffset1 + 1 ];
		const z1 = src1[ srcOffset1 + 2 ];
		const w1 = src1[ srcOffset1 + 3 ];

		dst[ dstOffset ] = x0 * w1 + w0 * x1 + y0 * z1 - z0 * y1;
		dst[ dstOffset + 1 ] = y0 * w1 + w0 * y1 + z0 * x1 - x0 * z1;
		dst[ dstOffset + 2 ] = z0 * w1 + w0 * z1 + x0 * y1 - y0 * x1;
		dst[ dstOffset + 3 ] = w0 * w1 - x0 * x1 - y0 * y1 - z0 * z1;

		return dst;

	}

	get x() {

		return this._x;

	}

	set x( value ) {

		this._x = value;
		this._onChangeCallback();

	}

	get y() {

		return this._y;

	}

	set y( value ) {

		this._y = value;
		this._onChangeCallback();

	}

	get z() {

		return this._z;

	}

	set z( value ) {

		this._z = value;
		this._onChangeCallback();

	}

	get w() {

		return this._w;

	}

	set w( value ) {

		this._w = value;
		this._onChangeCallback();

	}

	set( x, y, z, w ) {

		this._x = x;
		this._y = y;
		this._z = z;
		this._w = w;

		this._onChangeCallback();

		return this;

	}

	clone() {

		return new this.constructor( this._x, this._y, this._z, this._w );

	}

	copy( quaternion ) {

		this._x = quaternion.x;
		this._y = quaternion.y;
		this._z = quaternion.z;
		this._w = quaternion.w;

		this._onChangeCallback();

		return this;

	}

	setFromEuler( euler, update = true ) {

		const x = euler._x, y = euler._y, z = euler._z, order = euler._order;

		// http://www.mathworks.com/matlabcentral/fileexchange/
		// 	20696-function-to-convert-between-dcm-euler-angles-quaternions-and-euler-vectors/
		//	content/SpinCalc.m

		const cos = Math.cos;
		const sin = Math.sin;

		const c1 = cos( x / 2 );
		const c2 = cos( y / 2 );
		const c3 = cos( z / 2 );

		const s1 = sin( x / 2 );
		const s2 = sin( y / 2 );
		const s3 = sin( z / 2 );

		switch ( order ) {

			case 'XYZ':
				this._x = s1 * c2 * c3 + c1 * s2 * s3;
				this._y = c1 * s2 * c3 - s1 * c2 * s3;
				this._z = c1 * c2 * s3 + s1 * s2 * c3;
				this._w = c1 * c2 * c3 - s1 * s2 * s3;
				break;

			case 'YXZ':
				this._x = s1 * c2 * c3 + c1 * s2 * s3;
				this._y = c1 * s2 * c3 - s1 * c2 * s3;
				this._z = c1 * c2 * s3 - s1 * s2 * c3;
				this._w = c1 * c2 * c3 + s1 * s2 * s3;
				break;

			case 'ZXY':
				this._x = s1 * c2 * c3 - c1 * s2 * s3;
				this._y = c1 * s2 * c3 + s1 * c2 * s3;
				this._z = c1 * c2 * s3 + s1 * s2 * c3;
				this._w = c1 * c2 * c3 - s1 * s2 * s3;
				break;

			case 'ZYX':
				this._x = s1 * c2 * c3 - c1 * s2 * s3;
				this._y = c1 * s2 * c3 + s1 * c2 * s3;
				this._z = c1 * c2 * s3 - s1 * s2 * c3;
				this._w = c1 * c2 * c3 + s1 * s2 * s3;
				break;

			case 'YZX':
				this._x = s1 * c2 * c3 + c1 * s2 * s3;
				this._y = c1 * s2 * c3 + s1 * c2 * s3;
				this._z = c1 * c2 * s3 - s1 * s2 * c3;
				this._w = c1 * c2 * c3 - s1 * s2 * s3;
				break;

			case 'XZY':
				this._x = s1 * c2 * c3 - c1 * s2 * s3;
				this._y = c1 * s2 * c3 - s1 * c2 * s3;
				this._z = c1 * c2 * s3 + s1 * s2 * c3;
				this._w = c1 * c2 * c3 + s1 * s2 * s3;
				break;

			default:
				console.warn( 'THREE.Quaternion: .setFromEuler() encountered an unknown order: ' + order );

		}

		if ( update === true ) this._onChangeCallback();

		return this;

	}

	setFromAxisAngle( axis, angle ) {

		// http://www.euclideanspace.com/maths/geometry/rotations/conversions/angleToQuaternion/index.htm

		// assumes axis is normalized

		const halfAngle = angle / 2, s = Math.sin( halfAngle );

		this._x = axis.x * s;
		this._y = axis.y * s;
		this._z = axis.z * s;
		this._w = Math.cos( halfAngle );

		this._onChangeCallback();

		return this;

	}

	setFromRotationMatrix( m ) {

		// http://www.euclideanspace.com/maths/geometry/rotations/conversions/matrixToQuaternion/index.htm

		// assumes the upper 3x3 of m is a pure rotation matrix (i.e, unscaled)

		const te = m.elements,

			m11 = te[ 0 ], m12 = te[ 4 ], m13 = te[ 8 ],
			m21 = te[ 1 ], m22 = te[ 5 ], m23 = te[ 9 ],
			m31 = te[ 2 ], m32 = te[ 6 ], m33 = te[ 10 ],

			trace = m11 + m22 + m33;

		if ( trace > 0 ) {

			const s = 0.5 / Math.sqrt( trace + 1.0 );

			this._w = 0.25 / s;
			this._x = ( m32 - m23 ) * s;
			this._y = ( m13 - m31 ) * s;
			this._z = ( m21 - m12 ) * s;

		} else if ( m11 > m22 && m11 > m33 ) {

			const s = 2.0 * Math.sqrt( 1.0 + m11 - m22 - m33 );

			this._w = ( m32 - m23 ) / s;
			this._x = 0.25 * s;
			this._y = ( m12 + m21 ) / s;
			this._z = ( m13 + m31 ) / s;

		} else if ( m22 > m33 ) {

			const s = 2.0 * Math.sqrt( 1.0 + m22 - m11 - m33 );

			this._w = ( m13 - m31 ) / s;
			this._x = ( m12 + m21 ) / s;
			this._y = 0.25 * s;
			this._z = ( m23 + m32 ) / s;

		} else {

			const s = 2.0 * Math.sqrt( 1.0 + m33 - m11 - m22 );

			this._w = ( m21 - m12 ) / s;
			this._x = ( m13 + m31 ) / s;
			this._y = ( m23 + m32 ) / s;
			this._z = 0.25 * s;

		}

		this._onChangeCallback();

		return this;

	}

	setFromUnitVectors( vFrom, vTo ) {

		// assumes direction vectors vFrom and vTo are normalized

		let r = vFrom.dot( vTo ) + 1;

		if ( r < Number.EPSILON ) {

			// vFrom and vTo point in opposite directions

			r = 0;

			if ( Math.abs( vFrom.x ) > Math.abs( vFrom.z ) ) {

				this._x = - vFrom.y;
				this._y = vFrom.x;
				this._z = 0;
				this._w = r;

			} else {

				this._x = 0;
				this._y = - vFrom.z;
				this._z = vFrom.y;
				this._w = r;

			}

		} else {

			// crossVectors( vFrom, vTo ); // inlined to avoid cyclic dependency on Vector3

			this._x = vFrom.y * vTo.z - vFrom.z * vTo.y;
			this._y = vFrom.z * vTo.x - vFrom.x * vTo.z;
			this._z = vFrom.x * vTo.y - vFrom.y * vTo.x;
			this._w = r;

		}

		return this.normalize();

	}

	angleTo( q ) {

		return 2 * Math.acos( Math.abs( clamp( this.dot( q ), -1, 1 ) ) );

	}

	rotateTowards( q, step ) {

		const angle = this.angleTo( q );

		if ( angle === 0 ) return this;

		const t = Math.min( 1, step / angle );

		this.slerp( q, t );

		return this;

	}

	identity() {

		return this.set( 0, 0, 0, 1 );

	}

	invert() {

		// quaternion is assumed to have unit length

		return this.conjugate();

	}

	conjugate() {

		this._x *= -1;
		this._y *= -1;
		this._z *= -1;

		this._onChangeCallback();

		return this;

	}

	dot( v ) {

		return this._x * v._x + this._y * v._y + this._z * v._z + this._w * v._w;

	}

	lengthSq() {

		return this._x * this._x + this._y * this._y + this._z * this._z + this._w * this._w;

	}

	length() {

		return Math.sqrt( this._x * this._x + this._y * this._y + this._z * this._z + this._w * this._w );

	}

	normalize() {

		let l = this.length();

		if ( l === 0 ) {

			this._x = 0;
			this._y = 0;
			this._z = 0;
			this._w = 1;

		} else {

			l = 1 / l;

			this._x = this._x * l;
			this._y = this._y * l;
			this._z = this._z * l;
			this._w = this._w * l;

		}

		this._onChangeCallback();

		return this;

	}

	multiply( q ) {

		return this.multiplyQuaternions( this, q );

	}

	premultiply( q ) {

		return this.multiplyQuaternions( q, this );

	}

	multiplyQuaternions( a, b ) {

		// from http://www.euclideanspace.com/maths/algebra/realNormedAlgebra/quaternions/code/index.htm

		const qax = a._x, qay = a._y, qaz = a._z, qaw = a._w;
		const qbx = b._x, qby = b._y, qbz = b._z, qbw = b._w;

		this._x = qax * qbw + qaw * qbx + qay * qbz - qaz * qby;
		this._y = qay * qbw + qaw * qby + qaz * qbx - qax * qbz;
		this._z = qaz * qbw + qaw * qbz + qax * qby - qay * qbx;
		this._w = qaw * qbw - qax * qbx - qay * qby - qaz * qbz;

		this._onChangeCallback();

		return this;

	}

	slerp( qb, t ) {

		if ( t === 0 ) return this;
		if ( t === 1 ) return this.copy( qb );

		const x = this._x, y = this._y, z = this._z, w = this._w;

		// http://www.euclideanspace.com/maths/algebra/realNormedAlgebra/quaternions/slerp/

		let cosHalfTheta = w * qb._w + x * qb._x + y * qb._y + z * qb._z;

		if ( cosHalfTheta < 0 ) {

			this._w = - qb._w;
			this._x = - qb._x;
			this._y = - qb._y;
			this._z = - qb._z;

			cosHalfTheta = - cosHalfTheta;

		} else {

			this.copy( qb );

		}

		if ( cosHalfTheta >= 1.0 ) {

			this._w = w;
			this._x = x;
			this._y = y;
			this._z = z;

			return this;

		}

		const sqrSinHalfTheta = 1.0 - cosHalfTheta * cosHalfTheta;

		if ( sqrSinHalfTheta <= Number.EPSILON ) {

			const s = 1 - t;
			this._w = s * w + t * this._w;
			this._x = s * x + t * this._x;
			this._y = s * y + t * this._y;
			this._z = s * z + t * this._z;

			this.normalize(); // normalize calls _onChangeCallback()

			return this;

		}

		const sinHalfTheta = Math.sqrt( sqrSinHalfTheta );
		const halfTheta = Math.atan2( sinHalfTheta, cosHalfTheta );
		const ratioA = Math.sin( ( 1 - t ) * halfTheta ) / sinHalfTheta,
			ratioB = Math.sin( t * halfTheta ) / sinHalfTheta;

		this._w = ( w * ratioA + this._w * ratioB );
		this._x = ( x * ratioA + this._x * ratioB );
		this._y = ( y * ratioA + this._y * ratioB );
		this._z = ( z * ratioA + this._z * ratioB );

		this._onChangeCallback();

		return this;

	}

	slerpQuaternions( qa, qb, t ) {

		return this.copy( qa ).slerp( qb, t );

	}

	random() {

		// sets this quaternion to a uniform random unit quaternnion

		// Ken Shoemake
		// Uniform random rotations
		// D. Kirk, editor, Graphics Gems III, pages 124-132. Academic Press, New York, 1992.

		const theta1 = 2 * Math.PI * Math.random();
		const theta2 = 2 * Math.PI * Math.random();

		const x0 = Math.random();
		const r1 = Math.sqrt( 1 - x0 );
		const r2 = Math.sqrt( x0 );

		return this.set(
			r1 * Math.sin( theta1 ),
			r1 * Math.cos( theta1 ),
			r2 * Math.sin( theta2 ),
			r2 * Math.cos( theta2 ),
		);

	}

	equals( quaternion ) {

		return ( quaternion._x === this._x ) && ( quaternion._y === this._y ) && ( quaternion._z === this._z ) && ( quaternion._w === this._w );

	}

	fromArray( array, offset = 0 ) {

		this._x = array[ offset ];
		this._y = array[ offset + 1 ];
		this._z = array[ offset + 2 ];
		this._w = array[ offset + 3 ];

		this._onChangeCallback();

		return this;

	}

	toArray( array = [], offset = 0 ) {

		array[ offset ] = this._x;
		array[ offset + 1 ] = this._y;
		array[ offset + 2 ] = this._z;
		array[ offset + 3 ] = this._w;

		return array;

	}

	fromBufferAttribute( attribute, index ) {

		this._x = attribute.getX( index );
		this._y = attribute.getY( index );
		this._z = attribute.getZ( index );
		this._w = attribute.getW( index );

		this._onChangeCallback();

		return this;

	}

	toJSON() {

		return this.toArray();

	}

	_onChange( callback ) {

		this._onChangeCallback = callback;

		return this;

	}

	_onChangeCallback() {}

	*[ Symbol.iterator ]() {

		yield this._x;
		yield this._y;
		yield this._z;
		yield this._w;

	}

}

class Vector3 {

	constructor( x = 0, y = 0, z = 0 ) {

		Vector3.prototype.isVector3 = true;

		this.x = x;
		this.y = y;
		this.z = z;

	}

	set( x, y, z ) {

		if ( z === undefined ) z = this.z; // sprite.scale.set(x,y)

		this.x = x;
		this.y = y;
		this.z = z;

		return this;

	}

	setScalar( scalar ) {

		this.x = scalar;
		this.y = scalar;
		this.z = scalar;

		return this;

	}

	setX( x ) {

		this.x = x;

		return this;

	}

	setY( y ) {

		this.y = y;

		return this;

	}

	setZ( z ) {

		this.z = z;

		return this;

	}

	setComponent( index, value ) {

		switch ( index ) {

			case 0: this.x = value; break;
			case 1: this.y = value; break;
			case 2: this.z = value; break;
			default: throw new Error( 'index is out of range: ' + index );

		}

		return this;

	}

	getComponent( index ) {

		switch ( index ) {

			case 0: return this.x;
			case 1: return this.y;
			case 2: return this.z;
			default: throw new Error( 'index is out of range: ' + index );

		}

	}

	clone() {

		return new this.constructor( this.x, this.y, this.z );

	}

	copy( v ) {

		this.x = v.x;
		this.y = v.y;
		this.z = v.z;

		return this;

	}

	add( v ) {

		this.x += v.x;
		this.y += v.y;
		this.z += v.z;

		return this;

	}

	addScalar( s ) {

		this.x += s;
		this.y += s;
		this.z += s;

		return this;

	}

	addVectors( a, b ) {

		this.x = a.x + b.x;
		this.y = a.y + b.y;
		this.z = a.z + b.z;

		return this;

	}

	addScaledVector( v, s ) {

		this.x += v.x * s;
		this.y += v.y * s;
		this.z += v.z * s;

		return this;

	}

	sub( v ) {

		this.x -= v.x;
		this.y -= v.y;
		this.z -= v.z;

		return this;

	}

	subScalar( s ) {

		this.x -= s;
		this.y -= s;
		this.z -= s;

		return this;

	}

	subVectors( a, b ) {

		this.x = a.x - b.x;
		this.y = a.y - b.y;
		this.z = a.z - b.z;

		return this;

	}

	multiply( v ) {

		this.x *= v.x;
		this.y *= v.y;
		this.z *= v.z;

		return this;

	}

	multiplyScalar( scalar ) {

		this.x *= scalar;
		this.y *= scalar;
		this.z *= scalar;

		return this;

	}

	multiplyVectors( a, b ) {

		this.x = a.x * b.x;
		this.y = a.y * b.y;
		this.z = a.z * b.z;

		return this;

	}

	applyEuler( euler ) {

		return this.applyQuaternion( _quaternion$4.setFromEuler( euler ) );

	}

	applyAxisAngle( axis, angle ) {

		return this.applyQuaternion( _quaternion$4.setFromAxisAngle( axis, angle ) );

	}

	applyMatrix3( m ) {

		const x = this.x, y = this.y, z = this.z;
		const e = m.elements;

		this.x = e[ 0 ] * x + e[ 3 ] * y + e[ 6 ] * z;
		this.y = e[ 1 ] * x + e[ 4 ] * y + e[ 7 ] * z;
		this.z = e[ 2 ] * x + e[ 5 ] * y + e[ 8 ] * z;

		return this;

	}

	applyNormalMatrix( m ) {

		return this.applyMatrix3( m ).normalize();

	}

	applyMatrix4( m ) {

		const x = this.x, y = this.y, z = this.z;
		const e = m.elements;

		const w = 1 / ( e[ 3 ] * x + e[ 7 ] * y + e[ 11 ] * z + e[ 15 ] );

		this.x = ( e[ 0 ] * x + e[ 4 ] * y + e[ 8 ] * z + e[ 12 ] ) * w;
		this.y = ( e[ 1 ] * x + e[ 5 ] * y + e[ 9 ] * z + e[ 13 ] ) * w;
		this.z = ( e[ 2 ] * x + e[ 6 ] * y + e[ 10 ] * z + e[ 14 ] ) * w;

		return this;

	}

	applyQuaternion( q ) {

		// quaternion q is assumed to have unit length

		const vx = this.x, vy = this.y, vz = this.z;
		const qx = q.x, qy = q.y, qz = q.z, qw = q.w;

		// t = 2 * cross( q.xyz, v );
		const tx = 2 * ( qy * vz - qz * vy );
		const ty = 2 * ( qz * vx - qx * vz );
		const tz = 2 * ( qx * vy - qy * vx );

		// v + q.w * t + cross( q.xyz, t );
		this.x = vx + qw * tx + qy * tz - qz * ty;
		this.y = vy + qw * ty + qz * tx - qx * tz;
		this.z = vz + qw * tz + qx * ty - qy * tx;

		return this;

	}

	project( camera ) {

		return this.applyMatrix4( camera.matrixWorldInverse ).applyMatrix4( camera.projectionMatrix );

	}

	unproject( camera ) {

		return this.applyMatrix4( camera.projectionMatrixInverse ).applyMatrix4( camera.matrixWorld );

	}

	transformDirection( m ) {

		// input: THREE.Matrix4 affine matrix
		// vector interpreted as a direction

		const x = this.x, y = this.y, z = this.z;
		const e = m.elements;

		this.x = e[ 0 ] * x + e[ 4 ] * y + e[ 8 ] * z;
		this.y = e[ 1 ] * x + e[ 5 ] * y + e[ 9 ] * z;
		this.z = e[ 2 ] * x + e[ 6 ] * y + e[ 10 ] * z;

		return this.normalize();

	}

	divide( v ) {

		this.x /= v.x;
		this.y /= v.y;
		this.z /= v.z;

		return this;

	}

	divideScalar( scalar ) {

		return this.multiplyScalar( 1 / scalar );

	}

	min( v ) {

		this.x = Math.min( this.x, v.x );
		this.y = Math.min( this.y, v.y );
		this.z = Math.min( this.z, v.z );

		return this;

	}

	max( v ) {

		this.x = Math.max( this.x, v.x );
		this.y = Math.max( this.y, v.y );
		this.z = Math.max( this.z, v.z );

		return this;

	}

	clamp( min, max ) {

		// assumes min < max, componentwise

		this.x = Math.max( min.x, Math.min( max.x, this.x ) );
		this.y = Math.max( min.y, Math.min( max.y, this.y ) );
		this.z = Math.max( min.z, Math.min( max.z, this.z ) );

		return this;

	}

	clampScalar( minVal, maxVal ) {

		this.x = Math.max( minVal, Math.min( maxVal, this.x ) );
		this.y = Math.max( minVal, Math.min( maxVal, this.y ) );
		this.z = Math.max( minVal, Math.min( maxVal, this.z ) );

		return this;

	}

	clampLength( min, max ) {

		const length = this.length();

		return this.divideScalar( length || 1 ).multiplyScalar( Math.max( min, Math.min( max, length ) ) );

	}

	floor() {

		this.x = Math.floor( this.x );
		this.y = Math.floor( this.y );
		this.z = Math.floor( this.z );

		return this;

	}

	ceil() {

		this.x = Math.ceil( this.x );
		this.y = Math.ceil( this.y );
		this.z = Math.ceil( this.z );

		return this;

	}

	round() {

		this.x = Math.round( this.x );
		this.y = Math.round( this.y );
		this.z = Math.round( this.z );

		return this;

	}

	roundToZero() {

		this.x = Math.trunc( this.x );
		this.y = Math.trunc( this.y );
		this.z = Math.trunc( this.z );

		return this;

	}

	negate() {

		this.x = - this.x;
		this.y = - this.y;
		this.z = - this.z;

		return this;

	}

	dot( v ) {

		return this.x * v.x + this.y * v.y + this.z * v.z;

	}

	// TODO lengthSquared?

	lengthSq() {

		return this.x * this.x + this.y * this.y + this.z * this.z;

	}

	length() {

		return Math.sqrt( this.x * this.x + this.y * this.y + this.z * this.z );

	}

	manhattanLength() {

		return Math.abs( this.x ) + Math.abs( this.y ) + Math.abs( this.z );

	}

	normalize() {

		return this.divideScalar( this.length() || 1 );

	}

	setLength( length ) {

		return this.normalize().multiplyScalar( length );

	}

	lerp( v, alpha ) {

		this.x += ( v.x - this.x ) * alpha;
		this.y += ( v.y - this.y ) * alpha;
		this.z += ( v.z - this.z ) * alpha;

		return this;

	}

	lerpVectors( v1, v2, alpha ) {

		this.x = v1.x + ( v2.x - v1.x ) * alpha;
		this.y = v1.y + ( v2.y - v1.y ) * alpha;
		this.z = v1.z + ( v2.z - v1.z ) * alpha;

		return this;

	}

	cross( v ) {

		return this.crossVectors( this, v );

	}

	crossVectors( a, b ) {

		const ax = a.x, ay = a.y, az = a.z;
		const bx = b.x, by = b.y, bz = b.z;

		this.x = ay * bz - az * by;
		this.y = az * bx - ax * bz;
		this.z = ax * by - ay * bx;

		return this;

	}

	projectOnVector( v ) {

		const denominator = v.lengthSq();

		if ( denominator === 0 ) return this.set( 0, 0, 0 );

		const scalar = v.dot( this ) / denominator;

		return this.copy( v ).multiplyScalar( scalar );

	}

	projectOnPlane( planeNormal ) {

		_vector$c.copy( this ).projectOnVector( planeNormal );

		return this.sub( _vector$c );

	}

	reflect( normal ) {

		// reflect incident vector off plane orthogonal to normal
		// normal is assumed to have unit length

		return this.sub( _vector$c.copy( normal ).multiplyScalar( 2 * this.dot( normal ) ) );

	}

	angleTo( v ) {

		const denominator = Math.sqrt( this.lengthSq() * v.lengthSq() );

		if ( denominator === 0 ) return Math.PI / 2;

		const theta = this.dot( v ) / denominator;

		// clamp, to handle numerical problems

		return Math.acos( clamp( theta, -1, 1 ) );

	}

	distanceTo( v ) {

		return Math.sqrt( this.distanceToSquared( v ) );

	}

	distanceToSquared( v ) {

		const dx = this.x - v.x, dy = this.y - v.y, dz = this.z - v.z;

		return dx * dx + dy * dy + dz * dz;

	}

	manhattanDistanceTo( v ) {

		return Math.abs( this.x - v.x ) + Math.abs( this.y - v.y ) + Math.abs( this.z - v.z );

	}

	setFromSpherical( s ) {

		return this.setFromSphericalCoords( s.radius, s.phi, s.theta );

	}

	setFromSphericalCoords( radius, phi, theta ) {

		const sinPhiRadius = Math.sin( phi ) * radius;

		this.x = sinPhiRadius * Math.sin( theta );
		this.y = Math.cos( phi ) * radius;
		this.z = sinPhiRadius * Math.cos( theta );

		return this;

	}

	setFromCylindrical( c ) {

		return this.setFromCylindricalCoords( c.radius, c.theta, c.y );

	}

	setFromCylindricalCoords( radius, theta, y ) {

		this.x = radius * Math.sin( theta );
		this.y = y;
		this.z = radius * Math.cos( theta );

		return this;

	}

	setFromMatrixPosition( m ) {

		const e = m.elements;

		this.x = e[ 12 ];
		this.y = e[ 13 ];
		this.z = e[ 14 ];

		return this;

	}

	setFromMatrixScale( m ) {

		const sx = this.setFromMatrixColumn( m, 0 ).length();
		const sy = this.setFromMatrixColumn( m, 1 ).length();
		const sz = this.setFromMatrixColumn( m, 2 ).length();

		this.x = sx;
		this.y = sy;
		this.z = sz;

		return this;

	}

	setFromMatrixColumn( m, index ) {

		return this.fromArray( m.elements, index * 4 );

	}

	setFromMatrix3Column( m, index ) {

		return this.fromArray( m.elements, index * 3 );

	}

	setFromEuler( e ) {

		this.x = e._x;
		this.y = e._y;
		this.z = e._z;

		return this;

	}

	setFromColor( c ) {

		this.x = c.r;
		this.y = c.g;
		this.z = c.b;

		return this;

	}

	equals( v ) {

		return ( ( v.x === this.x ) && ( v.y === this.y ) && ( v.z === this.z ) );

	}

	fromArray( array, offset = 0 ) {

		this.x = array[ offset ];
		this.y = array[ offset + 1 ];
		this.z = array[ offset + 2 ];

		return this;

	}

	toArray( array = [], offset = 0 ) {

		array[ offset ] = this.x;
		array[ offset + 1 ] = this.y;
		array[ offset + 2 ] = this.z;

		return array;

	}

	fromBufferAttribute( attribute, index ) {

		this.x = attribute.getX( index );
		this.y = attribute.getY( index );
		this.z = attribute.getZ( index );

		return this;

	}

	random() {

		this.x = Math.random();
		this.y = Math.random();
		this.z = Math.random();

		return this;

	}

	randomDirection() {

		// https://mathworld.wolfram.com/SpherePointPicking.html

		const theta = Math.random() * Math.PI * 2;
		const u = Math.random() * 2 - 1;
		const c = Math.sqrt( 1 - u * u );

		this.x = c * Math.cos( theta );
		this.y = u;
		this.z = c * Math.sin( theta );

		return this;

	}

	*[ Symbol.iterator ]() {

		yield this.x;
		yield this.y;
		yield this.z;

	}

}

const _vector$c = /*@__PURE__*/ new Vector3();
const _quaternion$4 = /*@__PURE__*/ new Quaternion();

class Box3 {

	constructor( min = new Vector3( + Infinity, + Infinity, + Infinity ), max = new Vector3( - Infinity, - Infinity, - Infinity ) ) {

		this.isBox3 = true;

		this.min = min;
		this.max = max;

	}

	set( min, max ) {

		this.min.copy( min );
		this.max.copy( max );

		return this;

	}

	setFromArray( array ) {

		this.makeEmpty();

		for ( let i = 0, il = array.length; i < il; i += 3 ) {

			this.expandByPoint( _vector$b.fromArray( array, i ) );

		}

		return this;

	}

	setFromBufferAttribute( attribute ) {

		this.makeEmpty();

		for ( let i = 0, il = attribute.count; i < il; i ++ ) {

			this.expandByPoint( _vector$b.fromBufferAttribute( attribute, i ) );

		}

		return this;

	}

	setFromPoints( points ) {

		this.makeEmpty();

		for ( let i = 0, il = points.length; i < il; i ++ ) {

			this.expandByPoint( points[ i ] );

		}

		return this;

	}

	setFromCenterAndSize( center, size ) {

		const halfSize = _vector$b.copy( size ).multiplyScalar( 0.5 );

		this.min.copy( center ).sub( halfSize );
		this.max.copy( center ).add( halfSize );

		return this;

	}

	setFromObject( object, precise = false ) {

		this.makeEmpty();

		return this.expandByObject( object, precise );

	}

	clone() {

		return new this.constructor().copy( this );

	}

	copy( box ) {

		this.min.copy( box.min );
		this.max.copy( box.max );

		return this;

	}

	makeEmpty() {

		this.min.x = this.min.y = this.min.z = + Infinity;
		this.max.x = this.max.y = this.max.z = - Infinity;

		return this;

	}

	isEmpty() {

		// this is a more robust check for empty than ( volume <= 0 ) because volume can get positive with two negative axes

		return ( this.max.x < this.min.x ) || ( this.max.y < this.min.y ) || ( this.max.z < this.min.z );

	}

	getCenter( target ) {

		return this.isEmpty() ? target.set( 0, 0, 0 ) : target.addVectors( this.min, this.max ).multiplyScalar( 0.5 );

	}

	getSize( target ) {

		return this.isEmpty() ? target.set( 0, 0, 0 ) : target.subVectors( this.max, this.min );

	}

	expandByPoint( point ) {

		this.min.min( point );
		this.max.max( point );

		return this;

	}

	expandByVector( vector ) {

		this.min.sub( vector );
		this.max.add( vector );

		return this;

	}

	expandByScalar( scalar ) {

		this.min.addScalar( - scalar );
		this.max.addScalar( scalar );

		return this;

	}

	expandByObject( object, precise = false ) {

		// Computes the world-axis-aligned bounding box of an object (including its children),
		// accounting for both the object's, and children's, world transforms

		object.updateWorldMatrix( false, false );

		const geometry = object.geometry;

		if ( geometry !== undefined ) {

			const positionAttribute = geometry.getAttribute( 'position' );

			// precise AABB computation based on vertex data requires at least a position attribute.
			// instancing isn't supported so far and uses the normal (conservative) code path.

			if ( precise === true && positionAttribute !== undefined && object.isInstancedMesh !== true ) {

				for ( let i = 0, l = positionAttribute.count; i < l; i ++ ) {

					if ( object.isMesh === true ) {

						object.getVertexPosition( i, _vector$b );

					} else {

						_vector$b.fromBufferAttribute( positionAttribute, i );

					}

					_vector$b.applyMatrix4( object.matrixWorld );
					this.expandByPoint( _vector$b );

				}

			} else {

				if ( object.boundingBox !== undefined ) {

					// object-level bounding box

					if ( object.boundingBox === null ) {

						object.computeBoundingBox();

					}

					_box$4.copy( object.boundingBox );


				} else {

					// geometry-level bounding box

					if ( geometry.boundingBox === null ) {

						geometry.computeBoundingBox();

					}

					_box$4.copy( geometry.boundingBox );

				}

				_box$4.applyMatrix4( object.matrixWorld );

				this.union( _box$4 );

			}

		}

		const children = object.children;

		for ( let i = 0, l = children.length; i < l; i ++ ) {

			this.expandByObject( children[ i ], precise );

		}

		return this;

	}

	containsPoint( point ) {

		return point.x < this.min.x || point.x > this.max.x ||
			point.y < this.min.y || point.y > this.max.y ||
			point.z < this.min.z || point.z > this.max.z ? false : true;

	}

	containsBox( box ) {

		return this.min.x <= box.min.x && box.max.x <= this.max.x &&
			this.min.y <= box.min.y && box.max.y <= this.max.y &&
			this.min.z <= box.min.z && box.max.z <= this.max.z;

	}

	getParameter( point, target ) {

		// This can potentially have a divide by zero if the box
		// has a size dimension of 0.

		return target.set(
			( point.x - this.min.x ) / ( this.max.x - this.min.x ),
			( point.y - this.min.y ) / ( this.max.y - this.min.y ),
			( point.z - this.min.z ) / ( this.max.z - this.min.z )
		);

	}

	intersectsBox( box ) {

		// using 6 splitting planes to rule out intersections.
		return box.max.x < this.min.x || box.min.x > this.max.x ||
			box.max.y < this.min.y || box.min.y > this.max.y ||
			box.max.z < this.min.z || box.min.z > this.max.z ? false : true;

	}

	intersectsSphere( sphere ) {

		// Find the point on the AABB closest to the sphere center.
		this.clampPoint( sphere.center, _vector$b );

		// If that point is inside the sphere, the AABB and sphere intersect.
		return _vector$b.distanceToSquared( sphere.center ) <= ( sphere.radius * sphere.radius );

	}

	intersectsPlane( plane ) {

		// We compute the minimum and maximum dot product values. If those values
		// are on the same side (back or front) of the plane, then there is no intersection.

		let min, max;

		if ( plane.normal.x > 0 ) {

			min = plane.normal.x * this.min.x;
			max = plane.normal.x * this.max.x;

		} else {

			min = plane.normal.x * this.max.x;
			max = plane.normal.x * this.min.x;

		}

		if ( plane.normal.y > 0 ) {

			min += plane.normal.y * this.min.y;
			max += plane.normal.y * this.max.y;

		} else {

			min += plane.normal.y * this.max.y;
			max += plane.normal.y * this.min.y;

		}

		if ( plane.normal.z > 0 ) {

			min += plane.normal.z * this.min.z;
			max += plane.normal.z * this.max.z;

		} else {

			min += plane.normal.z * this.max.z;
			max += plane.normal.z * this.min.z;

		}

		return ( min <= - plane.constant && max >= - plane.constant );

	}

	intersectsTriangle( triangle ) {

		if ( this.isEmpty() ) {

			return false;

		}

		// compute box center and extents
		this.getCenter( _center );
		_extents.subVectors( this.max, _center );

		// translate triangle to aabb origin
		_v0$2.subVectors( triangle.a, _center );
		_v1$7.subVectors( triangle.b, _center );
		_v2$4.subVectors( triangle.c, _center );

		// compute edge vectors for triangle
		_f0.subVectors( _v1$7, _v0$2 );
		_f1.subVectors( _v2$4, _v1$7 );
		_f2.subVectors( _v0$2, _v2$4 );

		// test against axes that are given by cross product combinations of the edges of the triangle and the edges of the aabb
		// make an axis testing of each of the 3 sides of the aabb against each of the 3 sides of the triangle = 9 axis of separation
		// axis_ij = u_i x f_j (u0, u1, u2 = face normals of aabb = x,y,z axes vectors since aabb is axis aligned)
		let axes = [
			0, - _f0.z, _f0.y, 0, - _f1.z, _f1.y, 0, - _f2.z, _f2.y,
			_f0.z, 0, - _f0.x, _f1.z, 0, - _f1.x, _f2.z, 0, - _f2.x,
			- _f0.y, _f0.x, 0, - _f1.y, _f1.x, 0, - _f2.y, _f2.x, 0
		];
		if ( ! satForAxes( axes, _v0$2, _v1$7, _v2$4, _extents ) ) {

			return false;

		}

		// test 3 face normals from the aabb
		axes = [ 1, 0, 0, 0, 1, 0, 0, 0, 1 ];
		if ( ! satForAxes( axes, _v0$2, _v1$7, _v2$4, _extents ) ) {

			return false;

		}

		// finally testing the face normal of the triangle
		// use already existing triangle edge vectors here
		_triangleNormal.crossVectors( _f0, _f1 );
		axes = [ _triangleNormal.x, _triangleNormal.y, _triangleNormal.z ];

		return satForAxes( axes, _v0$2, _v1$7, _v2$4, _extents );

	}

	clampPoint( point, target ) {

		return target.copy( point ).clamp( this.min, this.max );

	}

	distanceToPoint( point ) {

		return this.clampPoint( point, _vector$b ).distanceTo( point );

	}

	getBoundingSphere( target ) {

		if ( this.isEmpty() ) {

			target.makeEmpty();

		} else {

			this.getCenter( target.center );

			target.radius = this.getSize( _vector$b ).length() * 0.5;

		}

		return target;

	}

	intersect( box ) {

		this.min.max( box.min );
		this.max.min( box.max );

		// ensure that if there is no overlap, the result is fully empty, not slightly empty with non-inf/+inf values that will cause subsequence intersects to erroneously return valid values.
		if ( this.isEmpty() ) this.makeEmpty();

		return this;

	}

	union( box ) {

		this.min.min( box.min );
		this.max.max( box.max );

		return this;

	}

	applyMatrix4( matrix ) {

		// transform of empty box is an empty box.
		if ( this.isEmpty() ) return this;

		// NOTE: I am using a binary pattern to specify all 2^3 combinations below
		_points[ 0 ].set( this.min.x, this.min.y, this.min.z ).applyMatrix4( matrix ); // 000
		_points[ 1 ].set( this.min.x, this.min.y, this.max.z ).applyMatrix4( matrix ); // 001
		_points[ 2 ].set( this.min.x, this.max.y, this.min.z ).applyMatrix4( matrix ); // 010
		_points[ 3 ].set( this.min.x, this.max.y, this.max.z ).applyMatrix4( matrix ); // 011
		_points[ 4 ].set( this.max.x, this.min.y, this.min.z ).applyMatrix4( matrix ); // 100
		_points[ 5 ].set( this.max.x, this.min.y, this.max.z ).applyMatrix4( matrix ); // 101
		_points[ 6 ].set( this.max.x, this.max.y, this.min.z ).applyMatrix4( matrix ); // 110
		_points[ 7 ].set( this.max.x, this.max.y, this.max.z ).applyMatrix4( matrix ); // 111

		this.setFromPoints( _points );

		return this;

	}

	translate( offset ) {

		this.min.add( offset );
		this.max.add( offset );

		return this;

	}

	equals( box ) {

		return box.min.equals( this.min ) && box.max.equals( this.max );

	}

}

const _points = [
	/*@__PURE__*/ new Vector3(),
	/*@__PURE__*/ new Vector3(),
	/*@__PURE__*/ new Vector3(),
	/*@__PURE__*/ new Vector3(),
	/*@__PURE__*/ new Vector3(),
	/*@__PURE__*/ new Vector3(),
	/*@__PURE__*/ new Vector3(),
	/*@__PURE__*/ new Vector3()
];

const _vector$b = /*@__PURE__*/ new Vector3();

const _box$4 = /*@__PURE__*/ new Box3();

// triangle centered vertices

const _v0$2 = /*@__PURE__*/ new Vector3();
const _v1$7 = /*@__PURE__*/ new Vector3();
const _v2$4 = /*@__PURE__*/ new Vector3();

// triangle edge vectors

const _f0 = /*@__PURE__*/ new Vector3();
const _f1 = /*@__PURE__*/ new Vector3();
const _f2 = /*@__PURE__*/ new Vector3();

const _center = /*@__PURE__*/ new Vector3();
const _extents = /*@__PURE__*/ new Vector3();
const _triangleNormal = /*@__PURE__*/ new Vector3();
const _testAxis = /*@__PURE__*/ new Vector3();

function satForAxes( axes, v0, v1, v2, extents ) {

	for ( let i = 0, j = axes.length - 3; i <= j; i += 3 ) {

		_testAxis.fromArray( axes, i );
		// project the aabb onto the separating axis
		const r = extents.x * Math.abs( _testAxis.x ) + extents.y * Math.abs( _testAxis.y ) + extents.z * Math.abs( _testAxis.z );
		// project all 3 vertices of the triangle onto the separating axis
		const p0 = v0.dot( _testAxis );
		const p1 = v1.dot( _testAxis );
		const p2 = v2.dot( _testAxis );
		// actual test, basically see if either of the most extreme of the triangle points intersects r
		if ( Math.max( - Math.max( p0, p1, p2 ), Math.min( p0, p1, p2 ) ) > r ) {

			// points of the projected triangle are outside the projected half-length of the aabb
			// the axis is separating and we can exit
			return false;

		}

	}

	return true;

}

const _box$3 = /*@__PURE__*/ new Box3();
const _v1$6 = /*@__PURE__*/ new Vector3();
const _v2$3 = /*@__PURE__*/ new Vector3();

class Sphere {

	constructor( center = new Vector3(), radius = -1 ) {

		this.isSphere = true;

		this.center = center;
		this.radius = radius;

	}

	set( center, radius ) {

		this.center.copy( center );
		this.radius = radius;

		return this;

	}

	setFromPoints( points, optionalCenter ) {

		const center = this.center;

		if ( optionalCenter !== undefined ) {

			center.copy( optionalCenter );

		} else {

			_box$3.setFromPoints( points ).getCenter( center );

		}

		let maxRadiusSq = 0;

		for ( let i = 0, il = points.length; i < il; i ++ ) {

			maxRadiusSq = Math.max( maxRadiusSq, center.distanceToSquared( points[ i ] ) );

		}

		this.radius = Math.sqrt( maxRadiusSq );

		return this;

	}

	copy( sphere ) {

		this.center.copy( sphere.center );
		this.radius = sphere.radius;

		return this;

	}

	isEmpty() {

		return ( this.radius < 0 );

	}

	makeEmpty() {

		this.center.set( 0, 0, 0 );
		this.radius = -1;

		return this;

	}

	containsPoint( point ) {

		return ( point.distanceToSquared( this.center ) <= ( this.radius * this.radius ) );

	}

	distanceToPoint( point ) {

		return ( point.distanceTo( this.center ) - this.radius );

	}

	intersectsSphere( sphere ) {

		const radiusSum = this.radius + sphere.radius;

		return sphere.center.distanceToSquared( this.center ) <= ( radiusSum * radiusSum );

	}

	intersectsBox( box ) {

		return box.intersectsSphere( this );

	}

	intersectsPlane( plane ) {

		return Math.abs( plane.distanceToPoint( this.center ) ) <= this.radius;

	}

	clampPoint( point, target ) {

		const deltaLengthSq = this.center.distanceToSquared( point );

		target.copy( point );

		if ( deltaLengthSq > ( this.radius * this.radius ) ) {

			target.sub( this.center ).normalize();
			target.multiplyScalar( this.radius ).add( this.center );

		}

		return target;

	}

	getBoundingBox( target ) {

		if ( this.isEmpty() ) {

			// Empty sphere produces empty bounding box
			target.makeEmpty();
			return target;

		}

		target.set( this.center, this.center );
		target.expandByScalar( this.radius );

		return target;

	}

	applyMatrix4( matrix ) {

		this.center.applyMatrix4( matrix );
		this.radius = this.radius * matrix.getMaxScaleOnAxis();

		return this;

	}

	translate( offset ) {

		this.center.add( offset );

		return this;

	}

	expandByPoint( point ) {

		if ( this.isEmpty() ) {

			this.center.copy( point );

			this.radius = 0;

			return this;

		}

		_v1$6.subVectors( point, this.center );

		const lengthSq = _v1$6.lengthSq();

		if ( lengthSq > ( this.radius * this.radius ) ) {

			// calculate the minimal sphere

			const length = Math.sqrt( lengthSq );

			const delta = ( length - this.radius ) * 0.5;

			this.center.addScaledVector( _v1$6, delta / length );

			this.radius += delta;

		}

		return this;

	}

	union( sphere ) {

		if ( sphere.isEmpty() ) {

			return this;

		}

		if ( this.isEmpty() ) {

			this.copy( sphere );

			return this;

		}

		if ( this.center.equals( sphere.center ) === true ) {

			 this.radius = Math.max( this.radius, sphere.radius );

		} else {

			_v2$3.subVectors( sphere.center, this.center ).setLength( sphere.radius );

			this.expandByPoint( _v1$6.copy( sphere.center ).add( _v2$3 ) );

			this.expandByPoint( _v1$6.copy( sphere.center ).sub( _v2$3 ) );

		}

		return this;

	}

	equals( sphere ) {

		return sphere.center.equals( this.center ) && ( sphere.radius === this.radius );

	}

	clone() {

		return new this.constructor().copy( this );

	}

}

class Matrix4 {

	constructor( n11, n12, n13, n14, n21, n22, n23, n24, n31, n32, n33, n34, n41, n42, n43, n44 ) {

		Matrix4.prototype.isMatrix4 = true;

		this.elements = [

			1, 0, 0, 0,
			0, 1, 0, 0,
			0, 0, 1, 0,
			0, 0, 0, 1

		];

		if ( n11 !== undefined ) {

			this.set( n11, n12, n13, n14, n21, n22, n23, n24, n31, n32, n33, n34, n41, n42, n43, n44 );

		}

	}

	set( n11, n12, n13, n14, n21, n22, n23, n24, n31, n32, n33, n34, n41, n42, n43, n44 ) {

		const te = this.elements;

		te[ 0 ] = n11; te[ 4 ] = n12; te[ 8 ] = n13; te[ 12 ] = n14;
		te[ 1 ] = n21; te[ 5 ] = n22; te[ 9 ] = n23; te[ 13 ] = n24;
		te[ 2 ] = n31; te[ 6 ] = n32; te[ 10 ] = n33; te[ 14 ] = n34;
		te[ 3 ] = n41; te[ 7 ] = n42; te[ 11 ] = n43; te[ 15 ] = n44;

		return this;

	}

	identity() {

		this.set(

			1, 0, 0, 0,
			0, 1, 0, 0,
			0, 0, 1, 0,
			0, 0, 0, 1

		);

		return this;

	}

	clone() {

		return new Matrix4().fromArray( this.elements );

	}

	copy( m ) {

		const te = this.elements;
		const me = m.elements;

		te[ 0 ] = me[ 0 ]; te[ 1 ] = me[ 1 ]; te[ 2 ] = me[ 2 ]; te[ 3 ] = me[ 3 ];
		te[ 4 ] = me[ 4 ]; te[ 5 ] = me[ 5 ]; te[ 6 ] = me[ 6 ]; te[ 7 ] = me[ 7 ];
		te[ 8 ] = me[ 8 ]; te[ 9 ] = me[ 9 ]; te[ 10 ] = me[ 10 ]; te[ 11 ] = me[ 11 ];
		te[ 12 ] = me[ 12 ]; te[ 13 ] = me[ 13 ]; te[ 14 ] = me[ 14 ]; te[ 15 ] = me[ 15 ];

		return this;

	}

	copyPosition( m ) {

		const te = this.elements, me = m.elements;

		te[ 12 ] = me[ 12 ];
		te[ 13 ] = me[ 13 ];
		te[ 14 ] = me[ 14 ];

		return this;

	}

	setFromMatrix3( m ) {

		const me = m.elements;

		this.set(

			me[ 0 ], me[ 3 ], me[ 6 ], 0,
			me[ 1 ], me[ 4 ], me[ 7 ], 0,
			me[ 2 ], me[ 5 ], me[ 8 ], 0,
			0, 0, 0, 1

		);

		return this;

	}

	extractBasis( xAxis, yAxis, zAxis ) {

		xAxis.setFromMatrixColumn( this, 0 );
		yAxis.setFromMatrixColumn( this, 1 );
		zAxis.setFromMatrixColumn( this, 2 );

		return this;

	}

	makeBasis( xAxis, yAxis, zAxis ) {

		this.set(
			xAxis.x, yAxis.x, zAxis.x, 0,
			xAxis.y, yAxis.y, zAxis.y, 0,
			xAxis.z, yAxis.z, zAxis.z, 0,
			0, 0, 0, 1
		);

		return this;

	}

	extractRotation( m ) {

		// this method does not support reflection matrices

		const te = this.elements;
		const me = m.elements;

		const scaleX = 1 / _v1$5.setFromMatrixColumn( m, 0 ).length();
		const scaleY = 1 / _v1$5.setFromMatrixColumn( m, 1 ).length();
		const scaleZ = 1 / _v1$5.setFromMatrixColumn( m, 2 ).length();

		te[ 0 ] = me[ 0 ] * scaleX;
		te[ 1 ] = me[ 1 ] * scaleX;
		te[ 2 ] = me[ 2 ] * scaleX;
		te[ 3 ] = 0;

		te[ 4 ] = me[ 4 ] * scaleY;
		te[ 5 ] = me[ 5 ] * scaleY;
		te[ 6 ] = me[ 6 ] * scaleY;
		te[ 7 ] = 0;

		te[ 8 ] = me[ 8 ] * scaleZ;
		te[ 9 ] = me[ 9 ] * scaleZ;
		te[ 10 ] = me[ 10 ] * scaleZ;
		te[ 11 ] = 0;

		te[ 12 ] = 0;
		te[ 13 ] = 0;
		te[ 14 ] = 0;
		te[ 15 ] = 1;

		return this;

	}

	makeRotationFromEuler( euler ) {

		const te = this.elements;

		const x = euler.x, y = euler.y, z = euler.z;
		const a = Math.cos( x ), b = Math.sin( x );
		const c = Math.cos( y ), d = Math.sin( y );
		const e = Math.cos( z ), f = Math.sin( z );

		if ( euler.order === 'XYZ' ) {

			const ae = a * e, af = a * f, be = b * e, bf = b * f;

			te[ 0 ] = c * e;
			te[ 4 ] = - c * f;
			te[ 8 ] = d;

			te[ 1 ] = af + be * d;
			te[ 5 ] = ae - bf * d;
			te[ 9 ] = - b * c;

			te[ 2 ] = bf - ae * d;
			te[ 6 ] = be + af * d;
			te[ 10 ] = a * c;

		} else if ( euler.order === 'YXZ' ) {

			const ce = c * e, cf = c * f, de = d * e, df = d * f;

			te[ 0 ] = ce + df * b;
			te[ 4 ] = de * b - cf;
			te[ 8 ] = a * d;

			te[ 1 ] = a * f;
			te[ 5 ] = a * e;
			te[ 9 ] = - b;

			te[ 2 ] = cf * b - de;
			te[ 6 ] = df + ce * b;
			te[ 10 ] = a * c;

		} else if ( euler.order === 'ZXY' ) {

			const ce = c * e, cf = c * f, de = d * e, df = d * f;

			te[ 0 ] = ce - df * b;
			te[ 4 ] = - a * f;
			te[ 8 ] = de + cf * b;

			te[ 1 ] = cf + de * b;
			te[ 5 ] = a * e;
			te[ 9 ] = df - ce * b;

			te[ 2 ] = - a * d;
			te[ 6 ] = b;
			te[ 10 ] = a * c;

		} else if ( euler.order === 'ZYX' ) {

			const ae = a * e, af = a * f, be = b * e, bf = b * f;

			te[ 0 ] = c * e;
			te[ 4 ] = be * d - af;
			te[ 8 ] = ae * d + bf;

			te[ 1 ] = c * f;
			te[ 5 ] = bf * d + ae;
			te[ 9 ] = af * d - be;

			te[ 2 ] = - d;
			te[ 6 ] = b * c;
			te[ 10 ] = a * c;

		} else if ( euler.order === 'YZX' ) {

			const ac = a * c, ad = a * d, bc = b * c, bd = b * d;

			te[ 0 ] = c * e;
			te[ 4 ] = bd - ac * f;
			te[ 8 ] = bc * f + ad;

			te[ 1 ] = f;
			te[ 5 ] = a * e;
			te[ 9 ] = - b * e;

			te[ 2 ] = - d * e;
			te[ 6 ] = ad * f + bc;
			te[ 10 ] = ac - bd * f;

		} else if ( euler.order === 'XZY' ) {

			const ac = a * c, ad = a * d, bc = b * c, bd = b * d;

			te[ 0 ] = c * e;
			te[ 4 ] = - f;
			te[ 8 ] = d * e;

			te[ 1 ] = ac * f + bd;
			te[ 5 ] = a * e;
			te[ 9 ] = ad * f - bc;

			te[ 2 ] = bc * f - ad;
			te[ 6 ] = b * e;
			te[ 10 ] = bd * f + ac;

		}

		// bottom row
		te[ 3 ] = 0;
		te[ 7 ] = 0;
		te[ 11 ] = 0;

		// last column
		te[ 12 ] = 0;
		te[ 13 ] = 0;
		te[ 14 ] = 0;
		te[ 15 ] = 1;

		return this;

	}

	makeRotationFromQuaternion( q ) {

		return this.compose( _zero, q, _one );

	}

	lookAt( eye, target, up ) {

		const te = this.elements;

		_z.subVectors( eye, target );

		if ( _z.lengthSq() === 0 ) {

			// eye and target are in the same position

			_z.z = 1;

		}

		_z.normalize();
		_x.crossVectors( up, _z );

		if ( _x.lengthSq() === 0 ) {

			// up and z are parallel

			if ( Math.abs( up.z ) === 1 ) {

				_z.x += 0.0001;

			} else {

				_z.z += 0.0001;

			}

			_z.normalize();
			_x.crossVectors( up, _z );

		}

		_x.normalize();
		_y.crossVectors( _z, _x );

		te[ 0 ] = _x.x; te[ 4 ] = _y.x; te[ 8 ] = _z.x;
		te[ 1 ] = _x.y; te[ 5 ] = _y.y; te[ 9 ] = _z.y;
		te[ 2 ] = _x.z; te[ 6 ] = _y.z; te[ 10 ] = _z.z;

		return this;

	}

	multiply( m ) {

		return this.multiplyMatrices( this, m );

	}

	premultiply( m ) {

		return this.multiplyMatrices( m, this );

	}

	multiplyMatrices( a, b ) {

		const ae = a.elements;
		const be = b.elements;
		const te = this.elements;

		const a11 = ae[ 0 ], a12 = ae[ 4 ], a13 = ae[ 8 ], a14 = ae[ 12 ];
		const a21 = ae[ 1 ], a22 = ae[ 5 ], a23 = ae[ 9 ], a24 = ae[ 13 ];
		const a31 = ae[ 2 ], a32 = ae[ 6 ], a33 = ae[ 10 ], a34 = ae[ 14 ];
		const a41 = ae[ 3 ], a42 = ae[ 7 ], a43 = ae[ 11 ], a44 = ae[ 15 ];

		const b11 = be[ 0 ], b12 = be[ 4 ], b13 = be[ 8 ], b14 = be[ 12 ];
		const b21 = be[ 1 ], b22 = be[ 5 ], b23 = be[ 9 ], b24 = be[ 13 ];
		const b31 = be[ 2 ], b32 = be[ 6 ], b33 = be[ 10 ], b34 = be[ 14 ];
		const b41 = be[ 3 ], b42 = be[ 7 ], b43 = be[ 11 ], b44 = be[ 15 ];

		te[ 0 ] = a11 * b11 + a12 * b21 + a13 * b31 + a14 * b41;
		te[ 4 ] = a11 * b12 + a12 * b22 + a13 * b32 + a14 * b42;
		te[ 8 ] = a11 * b13 + a12 * b23 + a13 * b33 + a14 * b43;
		te[ 12 ] = a11 * b14 + a12 * b24 + a13 * b34 + a14 * b44;

		te[ 1 ] = a21 * b11 + a22 * b21 + a23 * b31 + a24 * b41;
		te[ 5 ] = a21 * b12 + a22 * b22 + a23 * b32 + a24 * b42;
		te[ 9 ] = a21 * b13 + a22 * b23 + a23 * b33 + a24 * b43;
		te[ 13 ] = a21 * b14 + a22 * b24 + a23 * b34 + a24 * b44;

		te[ 2 ] = a31 * b11 + a32 * b21 + a33 * b31 + a34 * b41;
		te[ 6 ] = a31 * b12 + a32 * b22 + a33 * b32 + a34 * b42;
		te[ 10 ] = a31 * b13 + a32 * b23 + a33 * b33 + a34 * b43;
		te[ 14 ] = a31 * b14 + a32 * b24 + a33 * b34 + a34 * b44;

		te[ 3 ] = a41 * b11 + a42 * b21 + a43 * b31 + a44 * b41;
		te[ 7 ] = a41 * b12 + a42 * b22 + a43 * b32 + a44 * b42;
		te[ 11 ] = a41 * b13 + a42 * b23 + a43 * b33 + a44 * b43;
		te[ 15 ] = a41 * b14 + a42 * b24 + a43 * b34 + a44 * b44;

		return this;

	}

	multiplyScalar( s ) {

		const te = this.elements;

		te[ 0 ] *= s; te[ 4 ] *= s; te[ 8 ] *= s; te[ 12 ] *= s;
		te[ 1 ] *= s; te[ 5 ] *= s; te[ 9 ] *= s; te[ 13 ] *= s;
		te[ 2 ] *= s; te[ 6 ] *= s; te[ 10 ] *= s; te[ 14 ] *= s;
		te[ 3 ] *= s; te[ 7 ] *= s; te[ 11 ] *= s; te[ 15 ] *= s;

		return this;

	}

	determinant() {

		const te = this.elements;

		const n11 = te[ 0 ], n12 = te[ 4 ], n13 = te[ 8 ], n14 = te[ 12 ];
		const n21 = te[ 1 ], n22 = te[ 5 ], n23 = te[ 9 ], n24 = te[ 13 ];
		const n31 = te[ 2 ], n32 = te[ 6 ], n33 = te[ 10 ], n34 = te[ 14 ];
		const n41 = te[ 3 ], n42 = te[ 7 ], n43 = te[ 11 ], n44 = te[ 15 ];

		//TODO: make this more efficient
		//( based on http://www.euclideanspace.com/maths/algebra/matrix/functions/inverse/fourD/index.htm )

		return (
			n41 * (
				+ n14 * n23 * n32
				 - n13 * n24 * n32
				 - n14 * n22 * n33
				 + n12 * n24 * n33
				 + n13 * n22 * n34
				 - n12 * n23 * n34
			) +
			n42 * (
				+ n11 * n23 * n34
				 - n11 * n24 * n33
				 + n14 * n21 * n33
				 - n13 * n21 * n34
				 + n13 * n24 * n31
				 - n14 * n23 * n31
			) +
			n43 * (
				+ n11 * n24 * n32
				 - n11 * n22 * n34
				 - n14 * n21 * n32
				 + n12 * n21 * n34
				 + n14 * n22 * n31
				 - n12 * n24 * n31
			) +
			n44 * (
				- n13 * n22 * n31
				 - n11 * n23 * n32
				 + n11 * n22 * n33
				 + n13 * n21 * n32
				 - n12 * n21 * n33
				 + n12 * n23 * n31
			)

		);

	}

	transpose() {

		const te = this.elements;
		let tmp;

		tmp = te[ 1 ]; te[ 1 ] = te[ 4 ]; te[ 4 ] = tmp;
		tmp = te[ 2 ]; te[ 2 ] = te[ 8 ]; te[ 8 ] = tmp;
		tmp = te[ 6 ]; te[ 6 ] = te[ 9 ]; te[ 9 ] = tmp;

		tmp = te[ 3 ]; te[ 3 ] = te[ 12 ]; te[ 12 ] = tmp;
		tmp = te[ 7 ]; te[ 7 ] = te[ 13 ]; te[ 13 ] = tmp;
		tmp = te[ 11 ]; te[ 11 ] = te[ 14 ]; te[ 14 ] = tmp;

		return this;

	}

	setPosition( x, y, z ) {

		const te = this.elements;

		if ( x.isVector3 ) {

			te[ 12 ] = x.x;
			te[ 13 ] = x.y;
			te[ 14 ] = x.z;

		} else {

			te[ 12 ] = x;
			te[ 13 ] = y;
			te[ 14 ] = z;

		}

		return this;

	}

	invert() {

		// based on http://www.euclideanspace.com/maths/algebra/matrix/functions/inverse/fourD/index.htm
		const te = this.elements,

			n11 = te[ 0 ], n21 = te[ 1 ], n31 = te[ 2 ], n41 = te[ 3 ],
			n12 = te[ 4 ], n22 = te[ 5 ], n32 = te[ 6 ], n42 = te[ 7 ],
			n13 = te[ 8 ], n23 = te[ 9 ], n33 = te[ 10 ], n43 = te[ 11 ],
			n14 = te[ 12 ], n24 = te[ 13 ], n34 = te[ 14 ], n44 = te[ 15 ],

			t11 = n23 * n34 * n42 - n24 * n33 * n42 + n24 * n32 * n43 - n22 * n34 * n43 - n23 * n32 * n44 + n22 * n33 * n44,
			t12 = n14 * n33 * n42 - n13 * n34 * n42 - n14 * n32 * n43 + n12 * n34 * n43 + n13 * n32 * n44 - n12 * n33 * n44,
			t13 = n13 * n24 * n42 - n14 * n23 * n42 + n14 * n22 * n43 - n12 * n24 * n43 - n13 * n22 * n44 + n12 * n23 * n44,
			t14 = n14 * n23 * n32 - n13 * n24 * n32 - n14 * n22 * n33 + n12 * n24 * n33 + n13 * n22 * n34 - n12 * n23 * n34;

		const det = n11 * t11 + n21 * t12 + n31 * t13 + n41 * t14;

		if ( det === 0 ) return this.set( 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 );

		const detInv = 1 / det;

		te[ 0 ] = t11 * detInv;
		te[ 1 ] = ( n24 * n33 * n41 - n23 * n34 * n41 - n24 * n31 * n43 + n21 * n34 * n43 + n23 * n31 * n44 - n21 * n33 * n44 ) * detInv;
		te[ 2 ] = ( n22 * n34 * n41 - n24 * n32 * n41 + n24 * n31 * n42 - n21 * n34 * n42 - n22 * n31 * n44 + n21 * n32 * n44 ) * detInv;
		te[ 3 ] = ( n23 * n32 * n41 - n22 * n33 * n41 - n23 * n31 * n42 + n21 * n33 * n42 + n22 * n31 * n43 - n21 * n32 * n43 ) * detInv;

		te[ 4 ] = t12 * detInv;
		te[ 5 ] = ( n13 * n34 * n41 - n14 * n33 * n41 + n14 * n31 * n43 - n11 * n34 * n43 - n13 * n31 * n44 + n11 * n33 * n44 ) * detInv;
		te[ 6 ] = ( n14 * n32 * n41 - n12 * n34 * n41 - n14 * n31 * n42 + n11 * n34 * n42 + n12 * n31 * n44 - n11 * n32 * n44 ) * detInv;
		te[ 7 ] = ( n12 * n33 * n41 - n13 * n32 * n41 + n13 * n31 * n42 - n11 * n33 * n42 - n12 * n31 * n43 + n11 * n32 * n43 ) * detInv;

		te[ 8 ] = t13 * detInv;
		te[ 9 ] = ( n14 * n23 * n41 - n13 * n24 * n41 - n14 * n21 * n43 + n11 * n24 * n43 + n13 * n21 * n44 - n11 * n23 * n44 ) * detInv;
		te[ 10 ] = ( n12 * n24 * n41 - n14 * n22 * n41 + n14 * n21 * n42 - n11 * n24 * n42 - n12 * n21 * n44 + n11 * n22 * n44 ) * detInv;
		te[ 11 ] = ( n13 * n22 * n41 - n12 * n23 * n41 - n13 * n21 * n42 + n11 * n23 * n42 + n12 * n21 * n43 - n11 * n22 * n43 ) * detInv;

		te[ 12 ] = t14 * detInv;
		te[ 13 ] = ( n13 * n24 * n31 - n14 * n23 * n31 + n14 * n21 * n33 - n11 * n24 * n33 - n13 * n21 * n34 + n11 * n23 * n34 ) * detInv;
		te[ 14 ] = ( n14 * n22 * n31 - n12 * n24 * n31 - n14 * n21 * n32 + n11 * n24 * n32 + n12 * n21 * n34 - n11 * n22 * n34 ) * detInv;
		te[ 15 ] = ( n12 * n23 * n31 - n13 * n22 * n31 + n13 * n21 * n32 - n11 * n23 * n32 - n12 * n21 * n33 + n11 * n22 * n33 ) * detInv;

		return this;

	}

	scale( v ) {

		const te = this.elements;
		const x = v.x, y = v.y, z = v.z;

		te[ 0 ] *= x; te[ 4 ] *= y; te[ 8 ] *= z;
		te[ 1 ] *= x; te[ 5 ] *= y; te[ 9 ] *= z;
		te[ 2 ] *= x; te[ 6 ] *= y; te[ 10 ] *= z;
		te[ 3 ] *= x; te[ 7 ] *= y; te[ 11 ] *= z;

		return this;

	}

	getMaxScaleOnAxis() {

		const te = this.elements;

		const scaleXSq = te[ 0 ] * te[ 0 ] + te[ 1 ] * te[ 1 ] + te[ 2 ] * te[ 2 ];
		const scaleYSq = te[ 4 ] * te[ 4 ] + te[ 5 ] * te[ 5 ] + te[ 6 ] * te[ 6 ];
		const scaleZSq = te[ 8 ] * te[ 8 ] + te[ 9 ] * te[ 9 ] + te[ 10 ] * te[ 10 ];

		return Math.sqrt( Math.max( scaleXSq, scaleYSq, scaleZSq ) );

	}

	makeTranslation( x, y, z ) {

		if ( x.isVector3 ) {

			this.set(

				1, 0, 0, x.x,
				0, 1, 0, x.y,
				0, 0, 1, x.z,
				0, 0, 0, 1

			);

		} else {

			this.set(

				1, 0, 0, x,
				0, 1, 0, y,
				0, 0, 1, z,
				0, 0, 0, 1

			);

		}

		return this;

	}

	makeRotationX( theta ) {

		const c = Math.cos( theta ), s = Math.sin( theta );

		this.set(

			1, 0, 0, 0,
			0, c, - s, 0,
			0, s, c, 0,
			0, 0, 0, 1

		);

		return this;

	}

	makeRotationY( theta ) {

		const c = Math.cos( theta ), s = Math.sin( theta );

		this.set(

			 c, 0, s, 0,
			 0, 1, 0, 0,
			- s, 0, c, 0,
			 0, 0, 0, 1

		);

		return this;

	}

	makeRotationZ( theta ) {

		const c = Math.cos( theta ), s = Math.sin( theta );

		this.set(

			c, - s, 0, 0,
			s, c, 0, 0,
			0, 0, 1, 0,
			0, 0, 0, 1

		);

		return this;

	}

	makeRotationAxis( axis, angle ) {

		// Based on http://www.gamedev.net/reference/articles/article1199.asp

		const c = Math.cos( angle );
		const s = Math.sin( angle );
		const t = 1 - c;
		const x = axis.x, y = axis.y, z = axis.z;
		const tx = t * x, ty = t * y;

		this.set(

			tx * x + c, tx * y - s * z, tx * z + s * y, 0,
			tx * y + s * z, ty * y + c, ty * z - s * x, 0,
			tx * z - s * y, ty * z + s * x, t * z * z + c, 0,
			0, 0, 0, 1

		);

		return this;

	}

	makeScale( x, y, z ) {

		this.set(

			x, 0, 0, 0,
			0, y, 0, 0,
			0, 0, z, 0,
			0, 0, 0, 1

		);

		return this;

	}

	makeShear( xy, xz, yx, yz, zx, zy ) {

		this.set(

			1, yx, zx, 0,
			xy, 1, zy, 0,
			xz, yz, 1, 0,
			0, 0, 0, 1

		);

		return this;

	}

	compose( position, quaternion, scale ) {

		const te = this.elements;

		const x = quaternion._x, y = quaternion._y, z = quaternion._z, w = quaternion._w;
		const x2 = x + x,	y2 = y + y, z2 = z + z;
		const xx = x * x2, xy = x * y2, xz = x * z2;
		const yy = y * y2, yz = y * z2, zz = z * z2;
		const wx = w * x2, wy = w * y2, wz = w * z2;

		const sx = scale.x, sy = scale.y, sz = scale.z;

		te[ 0 ] = ( 1 - ( yy + zz ) ) * sx;
		te[ 1 ] = ( xy + wz ) * sx;
		te[ 2 ] = ( xz - wy ) * sx;
		te[ 3 ] = 0;

		te[ 4 ] = ( xy - wz ) * sy;
		te[ 5 ] = ( 1 - ( xx + zz ) ) * sy;
		te[ 6 ] = ( yz + wx ) * sy;
		te[ 7 ] = 0;

		te[ 8 ] = ( xz + wy ) * sz;
		te[ 9 ] = ( yz - wx ) * sz;
		te[ 10 ] = ( 1 - ( xx + yy ) ) * sz;
		te[ 11 ] = 0;

		te[ 12 ] = position.x;
		te[ 13 ] = position.y;
		te[ 14 ] = position.z;
		te[ 15 ] = 1;

		return this;

	}

	decompose( position, quaternion, scale ) {

		const te = this.elements;

		let sx = _v1$5.set( te[ 0 ], te[ 1 ], te[ 2 ] ).length();
		const sy = _v1$5.set( te[ 4 ], te[ 5 ], te[ 6 ] ).length();
		const sz = _v1$5.set( te[ 8 ], te[ 9 ], te[ 10 ] ).length();

		// if determine is negative, we need to invert one scale
		const det = this.determinant();
		if ( det < 0 ) sx = - sx;

		position.x = te[ 12 ];
		position.y = te[ 13 ];
		position.z = te[ 14 ];

		// scale the rotation part
		_m1$4.copy( this );

		const invSX = 1 / sx;
		const invSY = 1 / sy;
		const invSZ = 1 / sz;

		_m1$4.elements[ 0 ] *= invSX;
		_m1$4.elements[ 1 ] *= invSX;
		_m1$4.elements[ 2 ] *= invSX;

		_m1$4.elements[ 4 ] *= invSY;
		_m1$4.elements[ 5 ] *= invSY;
		_m1$4.elements[ 6 ] *= invSY;

		_m1$4.elements[ 8 ] *= invSZ;
		_m1$4.elements[ 9 ] *= invSZ;
		_m1$4.elements[ 10 ] *= invSZ;

		quaternion.setFromRotationMatrix( _m1$4 );

		scale.x = sx;
		scale.y = sy;
		scale.z = sz;

		return this;

	}

	makePerspective( left, right, top, bottom, near, far, coordinateSystem = WebGLCoordinateSystem ) {

		const te = this.elements;
		const x = 2 * near / ( right - left );
		const y = 2 * near / ( top - bottom );

		const a = ( right + left ) / ( right - left );
		const b = ( top + bottom ) / ( top - bottom );

		let c, d;

		if ( coordinateSystem === WebGLCoordinateSystem ) {

			c = - ( far + near ) / ( far - near );
			d = ( -2 * far * near ) / ( far - near );

		} else if ( coordinateSystem === WebGPUCoordinateSystem ) {

			c = - far / ( far - near );
			d = ( - far * near ) / ( far - near );

		} else {

			throw new Error( 'THREE.Matrix4.makePerspective(): Invalid coordinate system: ' + coordinateSystem );

		}

		te[ 0 ] = x;	te[ 4 ] = 0;	te[ 8 ] = a; 	te[ 12 ] = 0;
		te[ 1 ] = 0;	te[ 5 ] = y;	te[ 9 ] = b; 	te[ 13 ] = 0;
		te[ 2 ] = 0;	te[ 6 ] = 0;	te[ 10 ] = c; 	te[ 14 ] = d;
		te[ 3 ] = 0;	te[ 7 ] = 0;	te[ 11 ] = -1;	te[ 15 ] = 0;

		return this;

	}

	makeOrthographic( left, right, top, bottom, near, far, coordinateSystem = WebGLCoordinateSystem ) {

		const te = this.elements;
		const w = 1.0 / ( right - left );
		const h = 1.0 / ( top - bottom );
		const p = 1.0 / ( far - near );

		const x = ( right + left ) * w;
		const y = ( top + bottom ) * h;

		let z, zInv;

		if ( coordinateSystem === WebGLCoordinateSystem ) {

			z = ( far + near ) * p;
			zInv = -2 * p;

		} else if ( coordinateSystem === WebGPUCoordinateSystem ) {

			z = near * p;
			zInv = -1 * p;

		} else {

			throw new Error( 'THREE.Matrix4.makeOrthographic(): Invalid coordinate system: ' + coordinateSystem );

		}

		te[ 0 ] = 2 * w;	te[ 4 ] = 0;		te[ 8 ] = 0; 		te[ 12 ] = - x;
		te[ 1 ] = 0; 		te[ 5 ] = 2 * h;	te[ 9 ] = 0; 		te[ 13 ] = - y;
		te[ 2 ] = 0; 		te[ 6 ] = 0;		te[ 10 ] = zInv;	te[ 14 ] = - z;
		te[ 3 ] = 0; 		te[ 7 ] = 0;		te[ 11 ] = 0;		te[ 15 ] = 1;

		return this;

	}

	equals( matrix ) {

		const te = this.elements;
		const me = matrix.elements;

		for ( let i = 0; i < 16; i ++ ) {

			if ( te[ i ] !== me[ i ] ) return false;

		}

		return true;

	}

	fromArray( array, offset = 0 ) {

		for ( let i = 0; i < 16; i ++ ) {

			this.elements[ i ] = array[ i + offset ];

		}

		return this;

	}

	toArray( array = [], offset = 0 ) {

		const te = this.elements;

		array[ offset ] = te[ 0 ];
		array[ offset + 1 ] = te[ 1 ];
		array[ offset + 2 ] = te[ 2 ];
		array[ offset + 3 ] = te[ 3 ];

		array[ offset + 4 ] = te[ 4 ];
		array[ offset + 5 ] = te[ 5 ];
		array[ offset + 6 ] = te[ 6 ];
		array[ offset + 7 ] = te[ 7 ];

		array[ offset + 8 ] = te[ 8 ];
		array[ offset + 9 ] = te[ 9 ];
		array[ offset + 10 ] = te[ 10 ];
		array[ offset + 11 ] = te[ 11 ];

		array[ offset + 12 ] = te[ 12 ];
		array[ offset + 13 ] = te[ 13 ];
		array[ offset + 14 ] = te[ 14 ];
		array[ offset + 15 ] = te[ 15 ];

		return array;

	}

}

const _v1$5 = /*@__PURE__*/ new Vector3();
const _m1$4 = /*@__PURE__*/ new Matrix4();
const _zero = /*@__PURE__*/ new Vector3( 0, 0, 0 );
const _one = /*@__PURE__*/ new Vector3( 1, 1, 1 );
const _x = /*@__PURE__*/ new Vector3();
const _y = /*@__PURE__*/ new Vector3();
const _z = /*@__PURE__*/ new Vector3();

const _matrix$2 = /*@__PURE__*/ new Matrix4();
const _quaternion$3 = /*@__PURE__*/ new Quaternion();

class Euler {

	constructor( x = 0, y = 0, z = 0, order = Euler.DEFAULT_ORDER ) {

		this.isEuler = true;

		this._x = x;
		this._y = y;
		this._z = z;
		this._order = order;

	}

	get x() {

		return this._x;

	}

	set x( value ) {

		this._x = value;
		this._onChangeCallback();

	}

	get y() {

		return this._y;

	}

	set y( value ) {

		this._y = value;
		this._onChangeCallback();

	}

	get z() {

		return this._z;

	}

	set z( value ) {

		this._z = value;
		this._onChangeCallback();

	}

	get order() {

		return this._order;

	}

	set order( value ) {

		this._order = value;
		this._onChangeCallback();

	}

	set( x, y, z, order = this._order ) {

		this._x = x;
		this._y = y;
		this._z = z;
		this._order = order;

		this._onChangeCallback();

		return this;

	}

	clone() {

		return new this.constructor( this._x, this._y, this._z, this._order );

	}

	copy( euler ) {

		this._x = euler._x;
		this._y = euler._y;
		this._z = euler._z;
		this._order = euler._order;

		this._onChangeCallback();

		return this;

	}

	setFromRotationMatrix( m, order = this._order, update = true ) {

		// assumes the upper 3x3 of m is a pure rotation matrix (i.e, unscaled)

		const te = m.elements;
		const m11 = te[ 0 ], m12 = te[ 4 ], m13 = te[ 8 ];
		const m21 = te[ 1 ], m22 = te[ 5 ], m23 = te[ 9 ];
		const m31 = te[ 2 ], m32 = te[ 6 ], m33 = te[ 10 ];

		switch ( order ) {

			case 'XYZ':

				this._y = Math.asin( clamp( m13, -1, 1 ) );

				if ( Math.abs( m13 ) < 0.9999999 ) {

					this._x = Math.atan2( - m23, m33 );
					this._z = Math.atan2( - m12, m11 );

				} else {

					this._x = Math.atan2( m32, m22 );
					this._z = 0;

				}

				break;

			case 'YXZ':

				this._x = Math.asin( - clamp( m23, -1, 1 ) );

				if ( Math.abs( m23 ) < 0.9999999 ) {

					this._y = Math.atan2( m13, m33 );
					this._z = Math.atan2( m21, m22 );

				} else {

					this._y = Math.atan2( - m31, m11 );
					this._z = 0;

				}

				break;

			case 'ZXY':

				this._x = Math.asin( clamp( m32, -1, 1 ) );

				if ( Math.abs( m32 ) < 0.9999999 ) {

					this._y = Math.atan2( - m31, m33 );
					this._z = Math.atan2( - m12, m22 );

				} else {

					this._y = 0;
					this._z = Math.atan2( m21, m11 );

				}

				break;

			case 'ZYX':

				this._y = Math.asin( - clamp( m31, -1, 1 ) );

				if ( Math.abs( m31 ) < 0.9999999 ) {

					this._x = Math.atan2( m32, m33 );
					this._z = Math.atan2( m21, m11 );

				} else {

					this._x = 0;
					this._z = Math.atan2( - m12, m22 );

				}

				break;

			case 'YZX':

				this._z = Math.asin( clamp( m21, -1, 1 ) );

				if ( Math.abs( m21 ) < 0.9999999 ) {

					this._x = Math.atan2( - m23, m22 );
					this._y = Math.atan2( - m31, m11 );

				} else {

					this._x = 0;
					this._y = Math.atan2( m13, m33 );

				}

				break;

			case 'XZY':

				this._z = Math.asin( - clamp( m12, -1, 1 ) );

				if ( Math.abs( m12 ) < 0.9999999 ) {

					this._x = Math.atan2( m32, m22 );
					this._y = Math.atan2( m13, m11 );

				} else {

					this._x = Math.atan2( - m23, m33 );
					this._y = 0;

				}

				break;

			default:

				console.warn( 'THREE.Euler: .setFromRotationMatrix() encountered an unknown order: ' + order );

		}

		this._order = order;

		if ( update === true ) this._onChangeCallback();

		return this;

	}

	setFromQuaternion( q, order, update ) {

		_matrix$2.makeRotationFromQuaternion( q );

		return this.setFromRotationMatrix( _matrix$2, order, update );

	}

	setFromVector3( v, order = this._order ) {

		return this.set( v.x, v.y, v.z, order );

	}

	reorder( newOrder ) {

		// WARNING: this discards revolution information -bhouston

		_quaternion$3.setFromEuler( this );

		return this.setFromQuaternion( _quaternion$3, newOrder );

	}

	equals( euler ) {

		return ( euler._x === this._x ) && ( euler._y === this._y ) && ( euler._z === this._z ) && ( euler._order === this._order );

	}

	fromArray( array ) {

		this._x = array[ 0 ];
		this._y = array[ 1 ];
		this._z = array[ 2 ];
		if ( array[ 3 ] !== undefined ) this._order = array[ 3 ];

		this._onChangeCallback();

		return this;

	}

	toArray( array = [], offset = 0 ) {

		array[ offset ] = this._x;
		array[ offset + 1 ] = this._y;
		array[ offset + 2 ] = this._z;
		array[ offset + 3 ] = this._order;

		return array;

	}

	_onChange( callback ) {

		this._onChangeCallback = callback;

		return this;

	}

	_onChangeCallback() {}

	*[ Symbol.iterator ]() {

		yield this._x;
		yield this._y;
		yield this._z;
		yield this._order;

	}

}

Euler.DEFAULT_ORDER = 'XYZ';

class Layers {

	constructor() {

		this.mask = 1 | 0;

	}

	set( channel ) {

		this.mask = ( 1 << channel | 0 ) >>> 0;

	}

	enable( channel ) {

		this.mask |= 1 << channel | 0;

	}

	enableAll() {

		this.mask = 0xffffffff | 0;

	}

	toggle( channel ) {

		this.mask ^= 1 << channel | 0;

	}

	disable( channel ) {

		this.mask &= ~ ( 1 << channel | 0 );

	}

	disableAll() {

		this.mask = 0;

	}

	test( layers ) {

		return ( this.mask & layers.mask ) !== 0;

	}

	isEnabled( channel ) {

		return ( this.mask & ( 1 << channel | 0 ) ) !== 0;

	}

}

let _object3DId = 0;

const _v1$4 = /*@__PURE__*/ new Vector3();
const _q1 = /*@__PURE__*/ new Quaternion();
const _m1$3 = /*@__PURE__*/ new Matrix4();
const _target = /*@__PURE__*/ new Vector3();

const _position$3 = /*@__PURE__*/ new Vector3();
const _scale$2 = /*@__PURE__*/ new Vector3();
const _quaternion$2 = /*@__PURE__*/ new Quaternion();

const _xAxis = /*@__PURE__*/ new Vector3( 1, 0, 0 );
const _yAxis = /*@__PURE__*/ new Vector3( 0, 1, 0 );
const _zAxis = /*@__PURE__*/ new Vector3( 0, 0, 1 );

const _addedEvent = { type: 'added' };
const _removedEvent = { type: 'removed' };

const _childaddedEvent = { type: 'childadded', child: null };
const _childremovedEvent = { type: 'childremoved', child: null };

class Object3D extends EventDispatcher {

	constructor() {

		super();

		this.isObject3D = true;

		Object.defineProperty( this, 'id', { value: _object3DId ++ } );

		this.uuid = generateUUID();

		this.name = '';
		this.type = 'Object3D';

		this.parent = null;
		this.children = [];

		this.up = Object3D.DEFAULT_UP.clone();

		const position = new Vector3();
		const rotation = new Euler();
		const quaternion = new Quaternion();
		const scale = new Vector3( 1, 1, 1 );

		function onRotationChange() {

			quaternion.setFromEuler( rotation, false );

		}

		function onQuaternionChange() {

			rotation.setFromQuaternion( quaternion, undefined, false );

		}

		rotation._onChange( onRotationChange );
		quaternion._onChange( onQuaternionChange );

		Object.defineProperties( this, {
			position: {
				configurable: true,
				enumerable: true,
				value: position
			},
			rotation: {
				configurable: true,
				enumerable: true,
				value: rotation
			},
			quaternion: {
				configurable: true,
				enumerable: true,
				value: quaternion
			},
			scale: {
				configurable: true,
				enumerable: true,
				value: scale
			},
			modelViewMatrix: {
				value: new Matrix4()
			},
			normalMatrix: {
				value: new Matrix3()
			}
		} );

		this.matrix = new Matrix4();
		this.matrixWorld = new Matrix4();

		this.matrixAutoUpdate = Object3D.DEFAULT_MATRIX_AUTO_UPDATE;

		this.matrixWorldAutoUpdate = Object3D.DEFAULT_MATRIX_WORLD_AUTO_UPDATE; // checked by the renderer
		this.matrixWorldNeedsUpdate = false;

		this.layers = new Layers();
		this.visible = true;

		this.castShadow = false;
		this.receiveShadow = false;

		this.frustumCulled = true;
		this.renderOrder = 0;

		this.animations = [];

		this.userData = {};

	}

	onBeforeShadow( /* renderer, object, camera, shadowCamera, geometry, depthMaterial, group */ ) {}

	onAfterShadow( /* renderer, object, camera, shadowCamera, geometry, depthMaterial, group */ ) {}

	onBeforeRender( /* renderer, scene, camera, geometry, material, group */ ) {}

	onAfterRender( /* renderer, scene, camera, geometry, material, group */ ) {}

	applyMatrix4( matrix ) {

		if ( this.matrixAutoUpdate ) this.updateMatrix();

		this.matrix.premultiply( matrix );

		this.matrix.decompose( this.position, this.quaternion, this.scale );

	}

	applyQuaternion( q ) {

		this.quaternion.premultiply( q );

		return this;

	}

	setRotationFromAxisAngle( axis, angle ) {

		// assumes axis is normalized

		this.quaternion.setFromAxisAngle( axis, angle );

	}

	setRotationFromEuler( euler ) {

		this.quaternion.setFromEuler( euler, true );

	}

	setRotationFromMatrix( m ) {

		// assumes the upper 3x3 of m is a pure rotation matrix (i.e, unscaled)

		this.quaternion.setFromRotationMatrix( m );

	}

	setRotationFromQuaternion( q ) {

		// assumes q is normalized

		this.quaternion.copy( q );

	}

	rotateOnAxis( axis, angle ) {

		// rotate object on axis in object space
		// axis is assumed to be normalized

		_q1.setFromAxisAngle( axis, angle );

		this.quaternion.multiply( _q1 );

		return this;

	}

	rotateOnWorldAxis( axis, angle ) {

		// rotate object on axis in world space
		// axis is assumed to be normalized
		// method assumes no rotated parent

		_q1.setFromAxisAngle( axis, angle );

		this.quaternion.premultiply( _q1 );

		return this;

	}

	rotateX( angle ) {

		return this.rotateOnAxis( _xAxis, angle );

	}

	rotateY( angle ) {

		return this.rotateOnAxis( _yAxis, angle );

	}

	rotateZ( angle ) {

		return this.rotateOnAxis( _zAxis, angle );

	}

	translateOnAxis( axis, distance ) {

		// translate object by distance along axis in object space
		// axis is assumed to be normalized

		_v1$4.copy( axis ).applyQuaternion( this.quaternion );

		this.position.add( _v1$4.multiplyScalar( distance ) );

		return this;

	}

	translateX( distance ) {

		return this.translateOnAxis( _xAxis, distance );

	}

	translateY( distance ) {

		return this.translateOnAxis( _yAxis, distance );

	}

	translateZ( distance ) {

		return this.translateOnAxis( _zAxis, distance );

	}

	localToWorld( vector ) {

		this.updateWorldMatrix( true, false );

		return vector.applyMatrix4( this.matrixWorld );

	}

	worldToLocal( vector ) {

		this.updateWorldMatrix( true, false );

		return vector.applyMatrix4( _m1$3.copy( this.matrixWorld ).invert() );

	}

	lookAt( x, y, z ) {

		// This method does not support objects having non-uniformly-scaled parent(s)

		if ( x.isVector3 ) {

			_target.copy( x );

		} else {

			_target.set( x, y, z );

		}

		const parent = this.parent;

		this.updateWorldMatrix( true, false );

		_position$3.setFromMatrixPosition( this.matrixWorld );

		if ( this.isCamera || this.isLight ) {

			_m1$3.lookAt( _position$3, _target, this.up );

		} else {

			_m1$3.lookAt( _target, _position$3, this.up );

		}

		this.quaternion.setFromRotationMatrix( _m1$3 );

		if ( parent ) {

			_m1$3.extractRotation( parent.matrixWorld );
			_q1.setFromRotationMatrix( _m1$3 );
			this.quaternion.premultiply( _q1.invert() );

		}

	}

	add( object ) {

		if ( arguments.length > 1 ) {

			for ( let i = 0; i < arguments.length; i ++ ) {

				this.add( arguments[ i ] );

			}

			return this;

		}

		if ( object === this ) {

			console.error( 'THREE.Object3D.add: object can\'t be added as a child of itself.', object );
			return this;

		}

		if ( object && object.isObject3D ) {

			object.removeFromParent();
			object.parent = this;
			this.children.push( object );

			object.dispatchEvent( _addedEvent );

			_childaddedEvent.child = object;
			this.dispatchEvent( _childaddedEvent );
			_childaddedEvent.child = null;

		} else {

			console.error( 'THREE.Object3D.add: object not an instance of THREE.Object3D.', object );

		}

		return this;

	}

	remove( object ) {

		if ( arguments.length > 1 ) {

			for ( let i = 0; i < arguments.length; i ++ ) {

				this.remove( arguments[ i ] );

			}

			return this;

		}

		const index = this.children.indexOf( object );

		if ( index !== -1 ) {

			object.parent = null;
			this.children.splice( index, 1 );

			object.dispatchEvent( _removedEvent );

			_childremovedEvent.child = object;
			this.dispatchEvent( _childremovedEvent );
			_childremovedEvent.child = null;

		}

		return this;

	}

	removeFromParent() {

		const parent = this.parent;

		if ( parent !== null ) {

			parent.remove( this );

		}

		return this;

	}

	clear() {

		return this.remove( ... this.children );

	}

	attach( object ) {

		// adds object as a child of this, while maintaining the object's world transform

		// Note: This method does not support scene graphs having non-uniformly-scaled nodes(s)

		this.updateWorldMatrix( true, false );

		_m1$3.copy( this.matrixWorld ).invert();

		if ( object.parent !== null ) {

			object.parent.updateWorldMatrix( true, false );

			_m1$3.multiply( object.parent.matrixWorld );

		}

		object.applyMatrix4( _m1$3 );

		object.removeFromParent();
		object.parent = this;
		this.children.push( object );

		object.updateWorldMatrix( false, true );

		object.dispatchEvent( _addedEvent );

		_childaddedEvent.child = object;
		this.dispatchEvent( _childaddedEvent );
		_childaddedEvent.child = null;

		return this;

	}

	getObjectById( id ) {

		return this.getObjectByProperty( 'id', id );

	}

	getObjectByName( name ) {

		return this.getObjectByProperty( 'name', name );

	}

	getObjectByProperty( name, value ) {

		if ( this[ name ] === value ) return this;

		for ( let i = 0, l = this.children.length; i < l; i ++ ) {

			const child = this.children[ i ];
			const object = child.getObjectByProperty( name, value );

			if ( object !== undefined ) {

				return object;

			}

		}

		return undefined;

	}

	getObjectsByProperty( name, value, result = [] ) {

		if ( this[ name ] === value ) result.push( this );

		const children = this.children;

		for ( let i = 0, l = children.length; i < l; i ++ ) {

			children[ i ].getObjectsByProperty( name, value, result );

		}

		return result;

	}

	getWorldPosition( target ) {

		this.updateWorldMatrix( true, false );

		return target.setFromMatrixPosition( this.matrixWorld );

	}

	getWorldQuaternion( target ) {

		this.updateWorldMatrix( true, false );

		this.matrixWorld.decompose( _position$3, target, _scale$2 );

		return target;

	}

	getWorldScale( target ) {

		this.updateWorldMatrix( true, false );

		this.matrixWorld.decompose( _position$3, _quaternion$2, target );

		return target;

	}

	getWorldDirection( target ) {

		this.updateWorldMatrix( true, false );

		const e = this.matrixWorld.elements;

		return target.set( e[ 8 ], e[ 9 ], e[ 10 ] ).normalize();

	}

	raycast( /* raycaster, intersects */ ) {}

	traverse( callback ) {

		callback( this );

		const children = this.children;

		for ( let i = 0, l = children.length; i < l; i ++ ) {

			children[ i ].traverse( callback );

		}

	}

	traverseVisible( callback ) {

		if ( this.visible === false ) return;

		callback( this );

		const children = this.children;

		for ( let i = 0, l = children.length; i < l; i ++ ) {

			children[ i ].traverseVisible( callback );

		}

	}

	traverseAncestors( callback ) {

		const parent = this.parent;

		if ( parent !== null ) {

			callback( parent );

			parent.traverseAncestors( callback );

		}

	}

	updateMatrix() {

		this.matrix.compose( this.position, this.quaternion, this.scale );

		this.matrixWorldNeedsUpdate = true;

	}

	updateMatrixWorld( force ) {

		if ( this.matrixAutoUpdate ) this.updateMatrix();

		if ( this.matrixWorldNeedsUpdate || force ) {

			if ( this.matrixWorldAutoUpdate === true ) {

				if ( this.parent === null ) {

					this.matrixWorld.copy( this.matrix );

				} else {

					this.matrixWorld.multiplyMatrices( this.parent.matrixWorld, this.matrix );

				}

			}

			this.matrixWorldNeedsUpdate = false;

			force = true;

		}

		// make sure descendants are updated if required

		const children = this.children;

		for ( let i = 0, l = children.length; i < l; i ++ ) {

			const child = children[ i ];

			child.updateMatrixWorld( force );

		}

	}

	updateWorldMatrix( updateParents, updateChildren ) {

		const parent = this.parent;

		if ( updateParents === true && parent !== null ) {

			parent.updateWorldMatrix( true, false );

		}

		if ( this.matrixAutoUpdate ) this.updateMatrix();

		if ( this.matrixWorldAutoUpdate === true ) {

			if ( this.parent === null ) {

				this.matrixWorld.copy( this.matrix );

			} else {

				this.matrixWorld.multiplyMatrices( this.parent.matrixWorld, this.matrix );

			}

		}

		// make sure descendants are updated

		if ( updateChildren === true ) {

			const children = this.children;

			for ( let i = 0, l = children.length; i < l; i ++ ) {

				const child = children[ i ];

				child.updateWorldMatrix( false, true );

			}

		}

	}

	toJSON( meta ) {

		// meta is a string when called from JSON.stringify
		const isRootObject = ( meta === undefined || typeof meta === 'string' );

		const output = {};

		// meta is a hash used to collect geometries, materials.
		// not providing it implies that this is the root object
		// being serialized.
		if ( isRootObject ) {

			// initialize meta obj
			meta = {
				geometries: {},
				materials: {},
				textures: {},
				images: {},
				shapes: {},
				skeletons: {},
				animations: {},
				nodes: {}
			};

			output.metadata = {
				version: 4.6,
				type: 'Object',
				generator: 'Object3D.toJSON'
			};

		}

		// standard Object3D serialization

		const object = {};

		object.uuid = this.uuid;
		object.type = this.type;

		if ( this.name !== '' ) object.name = this.name;
		if ( this.castShadow === true ) object.castShadow = true;
		if ( this.receiveShadow === true ) object.receiveShadow = true;
		if ( this.visible === false ) object.visible = false;
		if ( this.frustumCulled === false ) object.frustumCulled = false;
		if ( this.renderOrder !== 0 ) object.renderOrder = this.renderOrder;
		if ( Object.keys( this.userData ).length > 0 ) object.userData = this.userData;

		object.layers = this.layers.mask;
		object.matrix = this.matrix.toArray();
		object.up = this.up.toArray();

		if ( this.matrixAutoUpdate === false ) object.matrixAutoUpdate = false;

		// object specific properties

		if ( this.isInstancedMesh ) {

			object.type = 'InstancedMesh';
			object.count = this.count;
			object.instanceMatrix = this.instanceMatrix.toJSON();
			if ( this.instanceColor !== null ) object.instanceColor = this.instanceColor.toJSON();

		}

		if ( this.isBatchedMesh ) {

			object.type = 'BatchedMesh';
			object.perObjectFrustumCulled = this.perObjectFrustumCulled;
			object.sortObjects = this.sortObjects;

			object.drawRanges = this._drawRanges;
			object.reservedRanges = this._reservedRanges;

			object.visibility = this._visibility;
			object.active = this._active;
			object.bounds = this._bounds.map( bound => ( {
				boxInitialized: bound.boxInitialized,
				boxMin: bound.box.min.toArray(),
				boxMax: bound.box.max.toArray(),

				sphereInitialized: bound.sphereInitialized,
				sphereRadius: bound.sphere.radius,
				sphereCenter: bound.sphere.center.toArray()
			} ) );

			object.maxInstanceCount = this._maxInstanceCount;
			object.maxVertexCount = this._maxVertexCount;
			object.maxIndexCount = this._maxIndexCount;

			object.geometryInitialized = this._geometryInitialized;
			object.geometryCount = this._geometryCount;

			object.matricesTexture = this._matricesTexture.toJSON( meta );

			if ( this._colorsTexture !== null ) object.colorsTexture = this._colorsTexture.toJSON( meta );

			if ( this.boundingSphere !== null ) {

				object.boundingSphere = {
					center: object.boundingSphere.center.toArray(),
					radius: object.boundingSphere.radius
				};

			}

			if ( this.boundingBox !== null ) {

				object.boundingBox = {
					min: object.boundingBox.min.toArray(),
					max: object.boundingBox.max.toArray()
				};

			}

		}

		//

		function serialize( library, element ) {

			if ( library[ element.uuid ] === undefined ) {

				library[ element.uuid ] = element.toJSON( meta );

			}

			return element.uuid;

		}

		if ( this.isScene ) {

			if ( this.background ) {

				if ( this.background.isColor ) {

					object.background = this.background.toJSON();

				} else if ( this.background.isTexture ) {

					object.background = this.background.toJSON( meta ).uuid;

				}

			}

			if ( this.environment && this.environment.isTexture && this.environment.isRenderTargetTexture !== true ) {

				object.environment = this.environment.toJSON( meta ).uuid;

			}

		} else if ( this.isMesh || this.isLine || this.isPoints ) {

			object.geometry = serialize( meta.geometries, this.geometry );

			const parameters = this.geometry.parameters;

			if ( parameters !== undefined && parameters.shapes !== undefined ) {

				const shapes = parameters.shapes;

				if ( Array.isArray( shapes ) ) {

					for ( let i = 0, l = shapes.length; i < l; i ++ ) {

						const shape = shapes[ i ];

						serialize( meta.shapes, shape );

					}

				} else {

					serialize( meta.shapes, shapes );

				}

			}

		}

		if ( this.isSkinnedMesh ) {

			object.bindMode = this.bindMode;
			object.bindMatrix = this.bindMatrix.toArray();

			if ( this.skeleton !== undefined ) {

				serialize( meta.skeletons, this.skeleton );

				object.skeleton = this.skeleton.uuid;

			}

		}

		if ( this.material !== undefined ) {

			if ( Array.isArray( this.material ) ) {

				const uuids = [];

				for ( let i = 0, l = this.material.length; i < l; i ++ ) {

					uuids.push( serialize( meta.materials, this.material[ i ] ) );

				}

				object.material = uuids;

			} else {

				object.material = serialize( meta.materials, this.material );

			}

		}

		//

		if ( this.children.length > 0 ) {

			object.children = [];

			for ( let i = 0; i < this.children.length; i ++ ) {

				object.children.push( this.children[ i ].toJSON( meta ).object );

			}

		}

		//

		if ( this.animations.length > 0 ) {

			object.animations = [];

			for ( let i = 0; i < this.animations.length; i ++ ) {

				const animation = this.animations[ i ];

				object.animations.push( serialize( meta.animations, animation ) );

			}

		}

		if ( isRootObject ) {

			const geometries = extractFromCache( meta.geometries );
			const materials = extractFromCache( meta.materials );
			const textures = extractFromCache( meta.textures );
			const images = extractFromCache( meta.images );
			const shapes = extractFromCache( meta.shapes );
			const skeletons = extractFromCache( meta.skeletons );
			const animations = extractFromCache( meta.animations );
			const nodes = extractFromCache( meta.nodes );

			if ( geometries.length > 0 ) output.geometries = geometries;
			if ( materials.length > 0 ) output.materials = materials;
			if ( textures.length > 0 ) output.textures = textures;
			if ( images.length > 0 ) output.images = images;
			if ( shapes.length > 0 ) output.shapes = shapes;
			if ( skeletons.length > 0 ) output.skeletons = skeletons;
			if ( animations.length > 0 ) output.animations = animations;
			if ( nodes.length > 0 ) output.nodes = nodes;

		}

		output.object = object;

		return output;

		// extract data from the cache hash
		// remove metadata on each item
		// and return as array
		function extractFromCache( cache ) {

			const values = [];
			for ( const key in cache ) {

				const data = cache[ key ];
				delete data.metadata;
				values.push( data );

			}

			return values;

		}

	}

	clone( recursive ) {

		return new this.constructor().copy( this, recursive );

	}

	copy( source, recursive = true ) {

		this.name = source.name;

		this.up.copy( source.up );

		this.position.copy( source.position );
		this.rotation.order = source.rotation.order;
		this.quaternion.copy( source.quaternion );
		this.scale.copy( source.scale );

		this.matrix.copy( source.matrix );
		this.matrixWorld.copy( source.matrixWorld );

		this.matrixAutoUpdate = source.matrixAutoUpdate;

		this.matrixWorldAutoUpdate = source.matrixWorldAutoUpdate;
		this.matrixWorldNeedsUpdate = source.matrixWorldNeedsUpdate;

		this.layers.mask = source.layers.mask;
		this.visible = source.visible;

		this.castShadow = source.castShadow;
		this.receiveShadow = source.receiveShadow;

		this.frustumCulled = source.frustumCulled;
		this.renderOrder = source.renderOrder;

		this.animations = source.animations.slice();

		this.userData = JSON.parse( JSON.stringify( source.userData ) );

		if ( recursive === true ) {

			for ( let i = 0; i < source.children.length; i ++ ) {

				const child = source.children[ i ];
				this.add( child.clone() );

			}

		}

		return this;

	}

}

Object3D.DEFAULT_UP = /*@__PURE__*/ new Vector3( 0, 1, 0 );
Object3D.DEFAULT_MATRIX_AUTO_UPDATE = true;
Object3D.DEFAULT_MATRIX_WORLD_AUTO_UPDATE = true;

const _vector$9 = /*@__PURE__*/ new Vector3();
const _vector2$1 = /*@__PURE__*/ new Vector2();

class BufferAttribute {

	constructor( array, itemSize, normalized = false ) {

		if ( Array.isArray( array ) ) {

			throw new TypeError( 'THREE.BufferAttribute: array should be a Typed Array.' );

		}

		this.isBufferAttribute = true;

		this.name = '';

		this.array = array;
		this.itemSize = itemSize;
		this.count = array !== undefined ? array.length / itemSize : 0;
		this.normalized = normalized;

		this.usage = StaticDrawUsage;
		this._updateRange = { offset: 0, count: -1 };
		this.updateRanges = [];
		this.gpuType = FloatType;

		this.version = 0;

	}

	onUploadCallback() {}

	set needsUpdate( value ) {

		if ( value === true ) this.version ++;

	}

	get updateRange() {

		warnOnce( 'THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead.' ); // @deprecated, r159
		return this._updateRange;

	}

	setUsage( value ) {

		this.usage = value;

		return this;

	}

	addUpdateRange( start, count ) {

		this.updateRanges.push( { start, count } );

	}

	clearUpdateRanges() {

		this.updateRanges.length = 0;

	}

	copy( source ) {

		this.name = source.name;
		this.array = new source.array.constructor( source.array );
		this.itemSize = source.itemSize;
		this.count = source.count;
		this.normalized = source.normalized;

		this.usage = source.usage;
		this.gpuType = source.gpuType;

		return this;

	}

	copyAt( index1, attribute, index2 ) {

		index1 *= this.itemSize;
		index2 *= attribute.itemSize;

		for ( let i = 0, l = this.itemSize; i < l; i ++ ) {

			this.array[ index1 + i ] = attribute.array[ index2 + i ];

		}

		return this;

	}

	copyArray( array ) {

		this.array.set( array );

		return this;

	}

	applyMatrix3( m ) {

		if ( this.itemSize === 2 ) {

			for ( let i = 0, l = this.count; i < l; i ++ ) {

				_vector2$1.fromBufferAttribute( this, i );
				_vector2$1.applyMatrix3( m );

				this.setXY( i, _vector2$1.x, _vector2$1.y );

			}

		} else if ( this.itemSize === 3 ) {

			for ( let i = 0, l = this.count; i < l; i ++ ) {

				_vector$9.fromBufferAttribute( this, i );
				_vector$9.applyMatrix3( m );

				this.setXYZ( i, _vector$9.x, _vector$9.y, _vector$9.z );

			}

		}

		return this;

	}

	applyMatrix4( m ) {

		for ( let i = 0, l = this.count; i < l; i ++ ) {

			_vector$9.fromBufferAttribute( this, i );

			_vector$9.applyMatrix4( m );

			this.setXYZ( i, _vector$9.x, _vector$9.y, _vector$9.z );

		}

		return this;

	}

	applyNormalMatrix( m ) {

		for ( let i = 0, l = this.count; i < l; i ++ ) {

			_vector$9.fromBufferAttribute( this, i );

			_vector$9.applyNormalMatrix( m );

			this.setXYZ( i, _vector$9.x, _vector$9.y, _vector$9.z );

		}

		return this;

	}

	transformDirection( m ) {

		for ( let i = 0, l = this.count; i < l; i ++ ) {

			_vector$9.fromBufferAttribute( this, i );

			_vector$9.transformDirection( m );

			this.setXYZ( i, _vector$9.x, _vector$9.y, _vector$9.z );

		}

		return this;

	}

	set( value, offset = 0 ) {

		// Matching BufferAttribute constructor, do not normalize the array.
		this.array.set( value, offset );

		return this;

	}

	getComponent( index, component ) {

		let value = this.array[ index * this.itemSize + component ];

		if ( this.normalized ) value = denormalize( value, this.array );

		return value;

	}

	setComponent( index, component, value ) {

		if ( this.normalized ) value = normalize( value, this.array );

		this.array[ index * this.itemSize + component ] = value;

		return this;

	}

	getX( index ) {

		let x = this.array[ index * this.itemSize ];

		if ( this.normalized ) x = denormalize( x, this.array );

		return x;

	}

	setX( index, x ) {

		if ( this.normalized ) x = normalize( x, this.array );

		this.array[ index * this.itemSize ] = x;

		return this;

	}

	getY( index ) {

		let y = this.array[ index * this.itemSize + 1 ];

		if ( this.normalized ) y = denormalize( y, this.array );

		return y;

	}

	setY( index, y ) {

		if ( this.normalized ) y = normalize( y, this.array );

		this.array[ index * this.itemSize + 1 ] = y;

		return this;

	}

	getZ( index ) {

		let z = this.array[ index * this.itemSize + 2 ];

		if ( this.normalized ) z = denormalize( z, this.array );

		return z;

	}

	setZ( index, z ) {

		if ( this.normalized ) z = normalize( z, this.array );

		this.array[ index * this.itemSize + 2 ] = z;

		return this;

	}

	getW( index ) {

		let w = this.array[ index * this.itemSize + 3 ];

		if ( this.normalized ) w = denormalize( w, this.array );

		return w;

	}

	setW( index, w ) {

		if ( this.normalized ) w = normalize( w, this.array );

		this.array[ index * this.itemSize + 3 ] = w;

		return this;

	}

	setXY( index, x, y ) {

		index *= this.itemSize;

		if ( this.normalized ) {

			x = normalize( x, this.array );
			y = normalize( y, this.array );

		}

		this.array[ index + 0 ] = x;
		this.array[ index + 1 ] = y;

		return this;

	}

	setXYZ( index, x, y, z ) {

		index *= this.itemSize;

		if ( this.normalized ) {

			x = normalize( x, this.array );
			y = normalize( y, this.array );
			z = normalize( z, this.array );

		}

		this.array[ index + 0 ] = x;
		this.array[ index + 1 ] = y;
		this.array[ index + 2 ] = z;

		return this;

	}

	setXYZW( index, x, y, z, w ) {

		index *= this.itemSize;

		if ( this.normalized ) {

			x = normalize( x, this.array );
			y = normalize( y, this.array );
			z = normalize( z, this.array );
			w = normalize( w, this.array );

		}

		this.array[ index + 0 ] = x;
		this.array[ index + 1 ] = y;
		this.array[ index + 2 ] = z;
		this.array[ index + 3 ] = w;

		return this;

	}

	onUpload( callback ) {

		this.onUploadCallback = callback;

		return this;

	}

	clone() {

		return new this.constructor( this.array, this.itemSize ).copy( this );

	}

	toJSON() {

		const data = {
			itemSize: this.itemSize,
			type: this.array.constructor.name,
			array: Array.from( this.array ),
			normalized: this.normalized
		};

		if ( this.name !== '' ) data.name = this.name;
		if ( this.usage !== StaticDrawUsage ) data.usage = this.usage;

		return data;

	}

}

class Uint16BufferAttribute extends BufferAttribute {

	constructor( array, itemSize, normalized ) {

		super( new Uint16Array( array ), itemSize, normalized );

	}

}

class Uint32BufferAttribute extends BufferAttribute {

	constructor( array, itemSize, normalized ) {

		super( new Uint32Array( array ), itemSize, normalized );

	}

}


class Float32BufferAttribute extends BufferAttribute {

	constructor( array, itemSize, normalized ) {

		super( new Float32Array( array ), itemSize, normalized );

	}

}

let _id$2 = 0;

const _m1$2 = /*@__PURE__*/ new Matrix4();
const _obj = /*@__PURE__*/ new Object3D();
const _offset = /*@__PURE__*/ new Vector3();
const _box$2 = /*@__PURE__*/ new Box3();
const _boxMorphTargets = /*@__PURE__*/ new Box3();
const _vector$8 = /*@__PURE__*/ new Vector3();

class BufferGeometry extends EventDispatcher {

	constructor() {

		super();

		this.isBufferGeometry = true;

		Object.defineProperty( this, 'id', { value: _id$2 ++ } );

		this.uuid = generateUUID();

		this.name = '';
		this.type = 'BufferGeometry';

		this.index = null;
		this.attributes = {};

		this.morphAttributes = {};
		this.morphTargetsRelative = false;

		this.groups = [];

		this.boundingBox = null;
		this.boundingSphere = null;

		this.drawRange = { start: 0, count: Infinity };

		this.userData = {};

	}

	getIndex() {

		return this.index;

	}

	setIndex( index ) {

		if ( Array.isArray( index ) ) {

			this.index = new ( arrayNeedsUint32( index ) ? Uint32BufferAttribute : Uint16BufferAttribute )( index, 1 );

		} else {

			this.index = index;

		}

		return this;

	}

	getAttribute( name ) {

		return this.attributes[ name ];

	}

	setAttribute( name, attribute ) {

		this.attributes[ name ] = attribute;

		return this;

	}

	deleteAttribute( name ) {

		delete this.attributes[ name ];

		return this;

	}

	hasAttribute( name ) {

		return this.attributes[ name ] !== undefined;

	}

	addGroup( start, count, materialIndex = 0 ) {

		this.groups.push( {

			start: start,
			count: count,
			materialIndex: materialIndex

		} );

	}

	clearGroups() {

		this.groups = [];

	}

	setDrawRange( start, count ) {

		this.drawRange.start = start;
		this.drawRange.count = count;

	}

	applyMatrix4( matrix ) {

		const position = this.attributes.position;

		if ( position !== undefined ) {

			position.applyMatrix4( matrix );

			position.needsUpdate = true;

		}

		const normal = this.attributes.normal;

		if ( normal !== undefined ) {

			const normalMatrix = new Matrix3().getNormalMatrix( matrix );

			normal.applyNormalMatrix( normalMatrix );

			normal.needsUpdate = true;

		}

		const tangent = this.attributes.tangent;

		if ( tangent !== undefined ) {

			tangent.transformDirection( matrix );

			tangent.needsUpdate = true;

		}

		if ( this.boundingBox !== null ) {

			this.computeBoundingBox();

		}

		if ( this.boundingSphere !== null ) {

			this.computeBoundingSphere();

		}

		return this;

	}

	applyQuaternion( q ) {

		_m1$2.makeRotationFromQuaternion( q );

		this.applyMatrix4( _m1$2 );

		return this;

	}

	rotateX( angle ) {

		// rotate geometry around world x-axis

		_m1$2.makeRotationX( angle );

		this.applyMatrix4( _m1$2 );

		return this;

	}

	rotateY( angle ) {

		// rotate geometry around world y-axis

		_m1$2.makeRotationY( angle );

		this.applyMatrix4( _m1$2 );

		return this;

	}

	rotateZ( angle ) {

		// rotate geometry around world z-axis

		_m1$2.makeRotationZ( angle );

		this.applyMatrix4( _m1$2 );

		return this;

	}

	translate( x, y, z ) {

		// translate geometry

		_m1$2.makeTranslation( x, y, z );

		this.applyMatrix4( _m1$2 );

		return this;

	}

	scale( x, y, z ) {

		// scale geometry

		_m1$2.makeScale( x, y, z );

		this.applyMatrix4( _m1$2 );

		return this;

	}

	lookAt( vector ) {

		_obj.lookAt( vector );

		_obj.updateMatrix();

		this.applyMatrix4( _obj.matrix );

		return this;

	}

	center() {

		this.computeBoundingBox();

		this.boundingBox.getCenter( _offset ).negate();

		this.translate( _offset.x, _offset.y, _offset.z );

		return this;

	}

	setFromPoints( points ) {

		const position = [];

		for ( let i = 0, l = points.length; i < l; i ++ ) {

			const point = points[ i ];
			position.push( point.x, point.y, point.z || 0 );

		}

		this.setAttribute( 'position', new Float32BufferAttribute( position, 3 ) );

		return this;

	}

	computeBoundingBox() {

		if ( this.boundingBox === null ) {

			this.boundingBox = new Box3();

		}

		const position = this.attributes.position;
		const morphAttributesPosition = this.morphAttributes.position;

		if ( position && position.isGLBufferAttribute ) {

			console.error( 'THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.', this );

			this.boundingBox.set(
				new Vector3( - Infinity, - Infinity, - Infinity ),
				new Vector3( + Infinity, + Infinity, + Infinity )
			);

			return;

		}

		if ( position !== undefined ) {

			this.boundingBox.setFromBufferAttribute( position );

			// process morph attributes if present

			if ( morphAttributesPosition ) {

				for ( let i = 0, il = morphAttributesPosition.length; i < il; i ++ ) {

					const morphAttribute = morphAttributesPosition[ i ];
					_box$2.setFromBufferAttribute( morphAttribute );

					if ( this.morphTargetsRelative ) {

						_vector$8.addVectors( this.boundingBox.min, _box$2.min );
						this.boundingBox.expandByPoint( _vector$8 );

						_vector$8.addVectors( this.boundingBox.max, _box$2.max );
						this.boundingBox.expandByPoint( _vector$8 );

					} else {

						this.boundingBox.expandByPoint( _box$2.min );
						this.boundingBox.expandByPoint( _box$2.max );

					}

				}

			}

		} else {

			this.boundingBox.makeEmpty();

		}

		if ( isNaN( this.boundingBox.min.x ) || isNaN( this.boundingBox.min.y ) || isNaN( this.boundingBox.min.z ) ) {

			console.error( 'THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.', this );

		}

	}

	computeBoundingSphere() {

		if ( this.boundingSphere === null ) {

			this.boundingSphere = new Sphere();

		}

		const position = this.attributes.position;
		const morphAttributesPosition = this.morphAttributes.position;

		if ( position && position.isGLBufferAttribute ) {

			console.error( 'THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.', this );

			this.boundingSphere.set( new Vector3(), Infinity );

			return;

		}

		if ( position ) {

			// first, find the center of the bounding sphere

			const center = this.boundingSphere.center;

			_box$2.setFromBufferAttribute( position );

			// process morph attributes if present

			if ( morphAttributesPosition ) {

				for ( let i = 0, il = morphAttributesPosition.length; i < il; i ++ ) {

					const morphAttribute = morphAttributesPosition[ i ];
					_boxMorphTargets.setFromBufferAttribute( morphAttribute );

					if ( this.morphTargetsRelative ) {

						_vector$8.addVectors( _box$2.min, _boxMorphTargets.min );
						_box$2.expandByPoint( _vector$8 );

						_vector$8.addVectors( _box$2.max, _boxMorphTargets.max );
						_box$2.expandByPoint( _vector$8 );

					} else {

						_box$2.expandByPoint( _boxMorphTargets.min );
						_box$2.expandByPoint( _boxMorphTargets.max );

					}

				}

			}

			_box$2.getCenter( center );

			// second, try to find a boundingSphere with a radius smaller than the
			// boundingSphere of the boundingBox: sqrt(3) smaller in the best case

			let maxRadiusSq = 0;

			for ( let i = 0, il = position.count; i < il; i ++ ) {

				_vector$8.fromBufferAttribute( position, i );

				maxRadiusSq = Math.max( maxRadiusSq, center.distanceToSquared( _vector$8 ) );

			}

			// process morph attributes if present

			if ( morphAttributesPosition ) {

				for ( let i = 0, il = morphAttributesPosition.length; i < il; i ++ ) {

					const morphAttribute = morphAttributesPosition[ i ];
					const morphTargetsRelative = this.morphTargetsRelative;

					for ( let j = 0, jl = morphAttribute.count; j < jl; j ++ ) {

						_vector$8.fromBufferAttribute( morphAttribute, j );

						if ( morphTargetsRelative ) {

							_offset.fromBufferAttribute( position, j );
							_vector$8.add( _offset );

						}

						maxRadiusSq = Math.max( maxRadiusSq, center.distanceToSquared( _vector$8 ) );

					}

				}

			}

			this.boundingSphere.radius = Math.sqrt( maxRadiusSq );

			if ( isNaN( this.boundingSphere.radius ) ) {

				console.error( 'THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.', this );

			}

		}

	}

	computeTangents() {

		const index = this.index;
		const attributes = this.attributes;

		// based on http://www.terathon.com/code/tangent.html
		// (per vertex tangents)

		if ( index === null ||
			 attributes.position === undefined ||
			 attributes.normal === undefined ||
			 attributes.uv === undefined ) {

			console.error( 'THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)' );
			return;

		}

		const positionAttribute = attributes.position;
		const normalAttribute = attributes.normal;
		const uvAttribute = attributes.uv;

		if ( this.hasAttribute( 'tangent' ) === false ) {

			this.setAttribute( 'tangent', new BufferAttribute( new Float32Array( 4 * positionAttribute.count ), 4 ) );

		}

		const tangentAttribute = this.getAttribute( 'tangent' );

		const tan1 = [], tan2 = [];

		for ( let i = 0; i < positionAttribute.count; i ++ ) {

			tan1[ i ] = new Vector3();
			tan2[ i ] = new Vector3();

		}

		const vA = new Vector3(),
			vB = new Vector3(),
			vC = new Vector3(),

			uvA = new Vector2(),
			uvB = new Vector2(),
			uvC = new Vector2(),

			sdir = new Vector3(),
			tdir = new Vector3();

		function handleTriangle( a, b, c ) {

			vA.fromBufferAttribute( positionAttribute, a );
			vB.fromBufferAttribute( positionAttribute, b );
			vC.fromBufferAttribute( positionAttribute, c );

			uvA.fromBufferAttribute( uvAttribute, a );
			uvB.fromBufferAttribute( uvAttribute, b );
			uvC.fromBufferAttribute( uvAttribute, c );

			vB.sub( vA );
			vC.sub( vA );

			uvB.sub( uvA );
			uvC.sub( uvA );

			const r = 1.0 / ( uvB.x * uvC.y - uvC.x * uvB.y );

			// silently ignore degenerate uv triangles having coincident or colinear vertices

			if ( ! isFinite( r ) ) return;

			sdir.copy( vB ).multiplyScalar( uvC.y ).addScaledVector( vC, - uvB.y ).multiplyScalar( r );
			tdir.copy( vC ).multiplyScalar( uvB.x ).addScaledVector( vB, - uvC.x ).multiplyScalar( r );

			tan1[ a ].add( sdir );
			tan1[ b ].add( sdir );
			tan1[ c ].add( sdir );

			tan2[ a ].add( tdir );
			tan2[ b ].add( tdir );
			tan2[ c ].add( tdir );

		}

		let groups = this.groups;

		if ( groups.length === 0 ) {

			groups = [ {
				start: 0,
				count: index.count
			} ];

		}

		for ( let i = 0, il = groups.length; i < il; ++ i ) {

			const group = groups[ i ];

			const start = group.start;
			const count = group.count;

			for ( let j = start, jl = start + count; j < jl; j += 3 ) {

				handleTriangle(
					index.getX( j + 0 ),
					index.getX( j + 1 ),
					index.getX( j + 2 )
				);

			}

		}

		const tmp = new Vector3(), tmp2 = new Vector3();
		const n = new Vector3(), n2 = new Vector3();

		function handleVertex( v ) {

			n.fromBufferAttribute( normalAttribute, v );
			n2.copy( n );

			const t = tan1[ v ];

			// Gram-Schmidt orthogonalize

			tmp.copy( t );
			tmp.sub( n.multiplyScalar( n.dot( t ) ) ).normalize();

			// Calculate handedness

			tmp2.crossVectors( n2, t );
			const test = tmp2.dot( tan2[ v ] );
			const w = ( test < 0.0 ) ? -1 : 1.0;

			tangentAttribute.setXYZW( v, tmp.x, tmp.y, tmp.z, w );

		}

		for ( let i = 0, il = groups.length; i < il; ++ i ) {

			const group = groups[ i ];

			const start = group.start;
			const count = group.count;

			for ( let j = start, jl = start + count; j < jl; j += 3 ) {

				handleVertex( index.getX( j + 0 ) );
				handleVertex( index.getX( j + 1 ) );
				handleVertex( index.getX( j + 2 ) );

			}

		}

	}

	computeVertexNormals() {

		const index = this.index;
		const positionAttribute = this.getAttribute( 'position' );

		if ( positionAttribute !== undefined ) {

			let normalAttribute = this.getAttribute( 'normal' );

			if ( normalAttribute === undefined ) {

				normalAttribute = new BufferAttribute( new Float32Array( positionAttribute.count * 3 ), 3 );
				this.setAttribute( 'normal', normalAttribute );

			} else {

				// reset existing normals to zero

				for ( let i = 0, il = normalAttribute.count; i < il; i ++ ) {

					normalAttribute.setXYZ( i, 0, 0, 0 );

				}

			}

			const pA = new Vector3(), pB = new Vector3(), pC = new Vector3();
			const nA = new Vector3(), nB = new Vector3(), nC = new Vector3();
			const cb = new Vector3(), ab = new Vector3();

			// indexed elements

			if ( index ) {

				for ( let i = 0, il = index.count; i < il; i += 3 ) {

					const vA = index.getX( i + 0 );
					const vB = index.getX( i + 1 );
					const vC = index.getX( i + 2 );

					pA.fromBufferAttribute( positionAttribute, vA );
					pB.fromBufferAttribute( positionAttribute, vB );
					pC.fromBufferAttribute( positionAttribute, vC );

					cb.subVectors( pC, pB );
					ab.subVectors( pA, pB );
					cb.cross( ab );

					nA.fromBufferAttribute( normalAttribute, vA );
					nB.fromBufferAttribute( normalAttribute, vB );
					nC.fromBufferAttribute( normalAttribute, vC );

					nA.add( cb );
					nB.add( cb );
					nC.add( cb );

					normalAttribute.setXYZ( vA, nA.x, nA.y, nA.z );
					normalAttribute.setXYZ( vB, nB.x, nB.y, nB.z );
					normalAttribute.setXYZ( vC, nC.x, nC.y, nC.z );

				}

			} else {

				// non-indexed elements (unconnected triangle soup)

				for ( let i = 0, il = positionAttribute.count; i < il; i += 3 ) {

					pA.fromBufferAttribute( positionAttribute, i + 0 );
					pB.fromBufferAttribute( positionAttribute, i + 1 );
					pC.fromBufferAttribute( positionAttribute, i + 2 );

					cb.subVectors( pC, pB );
					ab.subVectors( pA, pB );
					cb.cross( ab );

					normalAttribute.setXYZ( i + 0, cb.x, cb.y, cb.z );
					normalAttribute.setXYZ( i + 1, cb.x, cb.y, cb.z );
					normalAttribute.setXYZ( i + 2, cb.x, cb.y, cb.z );

				}

			}

			this.normalizeNormals();

			normalAttribute.needsUpdate = true;

		}

	}

	normalizeNormals() {

		const normals = this.attributes.normal;

		for ( let i = 0, il = normals.count; i < il; i ++ ) {

			_vector$8.fromBufferAttribute( normals, i );

			_vector$8.normalize();

			normals.setXYZ( i, _vector$8.x, _vector$8.y, _vector$8.z );

		}

	}

	toNonIndexed() {

		function convertBufferAttribute( attribute, indices ) {

			const array = attribute.array;
			const itemSize = attribute.itemSize;
			const normalized = attribute.normalized;

			const array2 = new array.constructor( indices.length * itemSize );

			let index = 0, index2 = 0;

			for ( let i = 0, l = indices.length; i < l; i ++ ) {

				if ( attribute.isInterleavedBufferAttribute ) {

					index = indices[ i ] * attribute.data.stride + attribute.offset;

				} else {

					index = indices[ i ] * itemSize;

				}

				for ( let j = 0; j < itemSize; j ++ ) {

					array2[ index2 ++ ] = array[ index ++ ];

				}

			}

			return new BufferAttribute( array2, itemSize, normalized );

		}

		//

		if ( this.index === null ) {

			console.warn( 'THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed.' );
			return this;

		}

		const geometry2 = new BufferGeometry();

		const indices = this.index.array;
		const attributes = this.attributes;

		// attributes

		for ( const name in attributes ) {

			const attribute = attributes[ name ];

			const newAttribute = convertBufferAttribute( attribute, indices );

			geometry2.setAttribute( name, newAttribute );

		}

		// morph attributes

		const morphAttributes = this.morphAttributes;

		for ( const name in morphAttributes ) {

			const morphArray = [];
			const morphAttribute = morphAttributes[ name ]; // morphAttribute: array of Float32BufferAttributes

			for ( let i = 0, il = morphAttribute.length; i < il; i ++ ) {

				const attribute = morphAttribute[ i ];

				const newAttribute = convertBufferAttribute( attribute, indices );

				morphArray.push( newAttribute );

			}

			geometry2.morphAttributes[ name ] = morphArray;

		}

		geometry2.morphTargetsRelative = this.morphTargetsRelative;

		// groups

		const groups = this.groups;

		for ( let i = 0, l = groups.length; i < l; i ++ ) {

			const group = groups[ i ];
			geometry2.addGroup( group.start, group.count, group.materialIndex );

		}

		return geometry2;

	}

	toJSON() {

		const data = {
			metadata: {
				version: 4.6,
				type: 'BufferGeometry',
				generator: 'BufferGeometry.toJSON'
			}
		};

		// standard BufferGeometry serialization

		data.uuid = this.uuid;
		data.type = this.type;
		if ( this.name !== '' ) data.name = this.name;
		if ( Object.keys( this.userData ).length > 0 ) data.userData = this.userData;

		if ( this.parameters !== undefined ) {

			const parameters = this.parameters;

			for ( const key in parameters ) {

				if ( parameters[ key ] !== undefined ) data[ key ] = parameters[ key ];

			}

			return data;

		}

		// for simplicity the code assumes attributes are not shared across geometries, see #15811

		data.data = { attributes: {} };

		const index = this.index;

		if ( index !== null ) {

			data.data.index = {
				type: index.array.constructor.name,
				array: Array.prototype.slice.call( index.array )
			};

		}

		const attributes = this.attributes;

		for ( const key in attributes ) {

			const attribute = attributes[ key ];

			data.data.attributes[ key ] = attribute.toJSON( data.data );

		}

		const morphAttributes = {};
		let hasMorphAttributes = false;

		for ( const key in this.morphAttributes ) {

			const attributeArray = this.morphAttributes[ key ];

			const array = [];

			for ( let i = 0, il = attributeArray.length; i < il; i ++ ) {

				const attribute = attributeArray[ i ];

				array.push( attribute.toJSON( data.data ) );

			}

			if ( array.length > 0 ) {

				morphAttributes[ key ] = array;

				hasMorphAttributes = true;

			}

		}

		if ( hasMorphAttributes ) {

			data.data.morphAttributes = morphAttributes;
			data.data.morphTargetsRelative = this.morphTargetsRelative;

		}

		const groups = this.groups;

		if ( groups.length > 0 ) {

			data.data.groups = JSON.parse( JSON.stringify( groups ) );

		}

		const boundingSphere = this.boundingSphere;

		if ( boundingSphere !== null ) {

			data.data.boundingSphere = {
				center: boundingSphere.center.toArray(),
				radius: boundingSphere.radius
			};

		}

		return data;

	}

	clone() {

		return new this.constructor().copy( this );

	}

	copy( source ) {

		// reset

		this.index = null;
		this.attributes = {};
		this.morphAttributes = {};
		this.groups = [];
		this.boundingBox = null;
		this.boundingSphere = null;

		// used for storing cloned, shared data

		const data = {};

		// name

		this.name = source.name;

		// index

		const index = source.index;

		if ( index !== null ) {

			this.setIndex( index.clone( data ) );

		}

		// attributes

		const attributes = source.attributes;

		for ( const name in attributes ) {

			const attribute = attributes[ name ];
			this.setAttribute( name, attribute.clone( data ) );

		}

		// morph attributes

		const morphAttributes = source.morphAttributes;

		for ( const name in morphAttributes ) {

			const array = [];
			const morphAttribute = morphAttributes[ name ]; // morphAttribute: array of Float32BufferAttributes

			for ( let i = 0, l = morphAttribute.length; i < l; i ++ ) {

				array.push( morphAttribute[ i ].clone( data ) );

			}

			this.morphAttributes[ name ] = array;

		}

		this.morphTargetsRelative = source.morphTargetsRelative;

		// groups

		const groups = source.groups;

		for ( let i = 0, l = groups.length; i < l; i ++ ) {

			const group = groups[ i ];
			this.addGroup( group.start, group.count, group.materialIndex );

		}

		// bounding box

		const boundingBox = source.boundingBox;

		if ( boundingBox !== null ) {

			this.boundingBox = boundingBox.clone();

		}

		// bounding sphere

		const boundingSphere = source.boundingSphere;

		if ( boundingSphere !== null ) {

			this.boundingSphere = boundingSphere.clone();

		}

		// draw range

		this.drawRange.start = source.drawRange.start;
		this.drawRange.count = source.drawRange.count;

		// user data

		this.userData = source.userData;

		return this;

	}

	dispose() {

		this.dispatchEvent( { type: 'dispose' } );

	}

}

class SphereGeometry extends BufferGeometry {

	constructor( radius = 1, widthSegments = 32, heightSegments = 16, phiStart = 0, phiLength = Math.PI * 2, thetaStart = 0, thetaLength = Math.PI ) {

		super();

		this.type = 'SphereGeometry';

		this.parameters = {
			radius: radius,
			widthSegments: widthSegments,
			heightSegments: heightSegments,
			phiStart: phiStart,
			phiLength: phiLength,
			thetaStart: thetaStart,
			thetaLength: thetaLength
		};

		widthSegments = Math.max( 3, Math.floor( widthSegments ) );
		heightSegments = Math.max( 2, Math.floor( heightSegments ) );

		const thetaEnd = Math.min( thetaStart + thetaLength, Math.PI );

		let index = 0;
		const grid = [];

		const vertex = new Vector3();
		const normal = new Vector3();

		// buffers

		const indices = [];
		const vertices = [];
		const normals = [];
		const uvs = [];

		// generate vertices, normals and uvs

		for ( let iy = 0; iy <= heightSegments; iy ++ ) {

			const verticesRow = [];

			const v = iy / heightSegments;

			// special case for the poles

			let uOffset = 0;

			if ( iy === 0 && thetaStart === 0 ) {

				uOffset = 0.5 / widthSegments;

			} else if ( iy === heightSegments && thetaEnd === Math.PI ) {

				uOffset = -0.5 / widthSegments;

			}

			for ( let ix = 0; ix <= widthSegments; ix ++ ) {

				const u = ix / widthSegments;

				// vertex

				vertex.x = - radius * Math.cos( phiStart + u * phiLength ) * Math.sin( thetaStart + v * thetaLength );
				vertex.y = radius * Math.cos( thetaStart + v * thetaLength );
				vertex.z = radius * Math.sin( phiStart + u * phiLength ) * Math.sin( thetaStart + v * thetaLength );

				vertices.push( vertex.x, vertex.y, vertex.z );

				// normal

				normal.copy( vertex ).normalize();
				normals.push( normal.x, normal.y, normal.z );

				// uv

				uvs.push( u + uOffset, 1 - v );

				verticesRow.push( index ++ );

			}

			grid.push( verticesRow );

		}

		// indices

		for ( let iy = 0; iy < heightSegments; iy ++ ) {

			for ( let ix = 0; ix < widthSegments; ix ++ ) {

				const a = grid[ iy ][ ix + 1 ];
				const b = grid[ iy ][ ix ];
				const c = grid[ iy + 1 ][ ix ];
				const d = grid[ iy + 1 ][ ix + 1 ];

				if ( iy !== 0 || thetaStart > 0 ) indices.push( a, b, d );
				if ( iy !== heightSegments - 1 || thetaEnd < Math.PI ) indices.push( b, c, d );

			}

		}

		// build geometry

		this.setIndex( indices );
		this.setAttribute( 'position', new Float32BufferAttribute( vertices, 3 ) );
		this.setAttribute( 'normal', new Float32BufferAttribute( normals, 3 ) );
		this.setAttribute( 'uv', new Float32BufferAttribute( uvs, 2 ) );

	}

	copy( source ) {

		super.copy( source );

		this.parameters = Object.assign( {}, source.parameters );

		return this;

	}

	static fromJSON( data ) {

		return new SphereGeometry( data.radius, data.widthSegments, data.heightSegments, data.phiStart, data.phiLength, data.thetaStart, data.thetaLength );

	}

}

if ( typeof __THREE_DEVTOOLS__ !== 'undefined' ) {

	__THREE_DEVTOOLS__.dispatchEvent( new CustomEvent( 'register', { detail: {
		revision: REVISION,
	} } ) );

}

if ( typeof window !== 'undefined' ) {

	if ( window.__THREE__ ) ; else {

		window.__THREE__ = REVISION;

	}

}

/**
 * @param {BufferGeometry} geometry
 * @param {number} tolerance
 * @return {BufferGeometry}
 */
function mergeVertices( geometry, tolerance = 1e-4 ) {

	tolerance = Math.max( tolerance, Number.EPSILON );

	// Generate an index buffer if the geometry doesn't have one, or optimize it
	// if it's already available.
	const hashToIndex = {};
	const indices = geometry.getIndex();
	const positions = geometry.getAttribute( 'position' );
	const vertexCount = indices ? indices.count : positions.count;

	// next value for triangle indices
	let nextIndex = 0;

	// attributes and new attribute arrays
	const attributeNames = Object.keys( geometry.attributes );
	const tmpAttributes = {};
	const tmpMorphAttributes = {};
	const newIndices = [];
	const getters = [ 'getX', 'getY', 'getZ', 'getW' ];
	const setters = [ 'setX', 'setY', 'setZ', 'setW' ];

	// Initialize the arrays, allocating space conservatively. Extra
	// space will be trimmed in the last step.
	for ( let i = 0, l = attributeNames.length; i < l; i ++ ) {

		const name = attributeNames[ i ];
		const attr = geometry.attributes[ name ];

		tmpAttributes[ name ] = new attr.constructor(
			new attr.array.constructor( attr.count * attr.itemSize ),
			attr.itemSize,
			attr.normalized
		);

		const morphAttributes = geometry.morphAttributes[ name ];
		if ( morphAttributes ) {

			if ( ! tmpMorphAttributes[ name ] ) tmpMorphAttributes[ name ] = [];
			morphAttributes.forEach( ( morphAttr, i ) => {

				const array = new morphAttr.array.constructor( morphAttr.count * morphAttr.itemSize );
				tmpMorphAttributes[ name ][ i ] = new morphAttr.constructor( array, morphAttr.itemSize, morphAttr.normalized );

			} );

		}

	}

	// convert the error tolerance to an amount of decimal places to truncate to
	const halfTolerance = tolerance * 0.5;
	const exponent = Math.log10( 1 / tolerance );
	const hashMultiplier = Math.pow( 10, exponent );
	const hashAdditive = halfTolerance * hashMultiplier;
	for ( let i = 0; i < vertexCount; i ++ ) {

		const index = indices ? indices.getX( i ) : i;

		// Generate a hash for the vertex attributes at the current index 'i'
		let hash = '';
		for ( let j = 0, l = attributeNames.length; j < l; j ++ ) {

			const name = attributeNames[ j ];
			const attribute = geometry.getAttribute( name );
			const itemSize = attribute.itemSize;

			for ( let k = 0; k < itemSize; k ++ ) {

				// double tilde truncates the decimal value
				hash += `${ ~ ~ ( attribute[ getters[ k ] ]( index ) * hashMultiplier + hashAdditive ) },`;

			}

		}

		// Add another reference to the vertex if it's already
		// used by another index
		if ( hash in hashToIndex ) {

			newIndices.push( hashToIndex[ hash ] );

		} else {

			// copy data to the new index in the temporary attributes
			for ( let j = 0, l = attributeNames.length; j < l; j ++ ) {

				const name = attributeNames[ j ];
				const attribute = geometry.getAttribute( name );
				const morphAttributes = geometry.morphAttributes[ name ];
				const itemSize = attribute.itemSize;
				const newArray = tmpAttributes[ name ];
				const newMorphArrays = tmpMorphAttributes[ name ];

				for ( let k = 0; k < itemSize; k ++ ) {

					const getterFunc = getters[ k ];
					const setterFunc = setters[ k ];
					newArray[ setterFunc ]( nextIndex, attribute[ getterFunc ]( index ) );

					if ( morphAttributes ) {

						for ( let m = 0, ml = morphAttributes.length; m < ml; m ++ ) {

							newMorphArrays[ m ][ setterFunc ]( nextIndex, morphAttributes[ m ][ getterFunc ]( index ) );

						}

					}

				}

			}

			hashToIndex[ hash ] = nextIndex;
			newIndices.push( nextIndex );
			nextIndex ++;

		}

	}

	// generate result BufferGeometry
	const result = geometry.clone();
	for ( const name in geometry.attributes ) {

		const tmpAttribute = tmpAttributes[ name ];

		result.setAttribute( name, new tmpAttribute.constructor(
			tmpAttribute.array.slice( 0, nextIndex * tmpAttribute.itemSize ),
			tmpAttribute.itemSize,
			tmpAttribute.normalized,
		) );

		if ( ! ( name in tmpMorphAttributes ) ) continue;

		for ( let j = 0; j < tmpMorphAttributes[ name ].length; j ++ ) {

			const tmpMorphAttribute = tmpMorphAttributes[ name ][ j ];

			result.morphAttributes[ name ][ j ] = new tmpMorphAttribute.constructor(
				tmpMorphAttribute.array.slice( 0, nextIndex * tmpMorphAttribute.itemSize ),
				tmpMorphAttribute.itemSize,
				tmpMorphAttribute.normalized,
			);

		}

	}

	// indices

	result.setIndex( newIndices );

	return result;

}

new Matrix4();

const interleaved = (a) => {
    a.itemSize;
    let stride = a.data.stride;
    let offset = a.offset;
    let v = [];
    for (let i = offset; i < a.data.array.length; i += stride) {
        v.push(a.data.array[i], a.data.array[i + 1], a.data.array[i + 2], a.data.array[i + 3]);
    }
    return v;
};
const attribute = (a) => {
    if (a.constructor.name.endsWith('InterleavedBufferAttribute')) {
        return interleaved(a);
    }
    return a.array;
};
const iattribute = (a) => {
    return new Uint32Array(attribute(a));
};
const fattribute = (a) => {
    return new Float32Array(attribute(a));
};
const geometry = (g) => {
    let unit = g.attributes.position.array.length / 3;
    if (!g.attributes.uv) {
        let a = new Float32Array(unit * 2);
        g.setAttribute('uv', new BufferAttribute(a, 2, false));
    }
    if (!g.index) {
        g = mergeVertices(g);
    }
    if (!g.attributes.normal) {
        g.computeVertexNormals();
    }
    g.computeTangents();
    return new MeshData(iattribute(g.index), fattribute(g.attributes.position), fattribute(g.attributes.uv), fattribute(g.attributes.normal), fattribute(g.attributes.tangent), g.attributes.skinIndex ? iattribute(g.attributes.skinIndex) : new Uint32Array(unit * 4), g.attributes.skinWeight ? fattribute(g.attributes.skinWeight) : new Float32Array(unit * 4));
};

const translate = (x, y, z) => {
    return [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, x, y, z, 1];
};
const perspective_vfov_r = (vfov, aspect, near, far) => {
    let f = Math.tan(Math.PI * 0.5 - 0.5 * vfov);
    let rangeinv = 1 / (near - far);
    return [f / aspect, 0, 0, 0, 0, f, 0, 0, 0, 0, (near + far) * rangeinv * 1, -1, 0, 0, near * far * rangeinv * 2, 0];
};
const radians = (degrees) => {
    return degrees * Math.PI / 180;
};
const perspective = (fov, aspect, near, far) => {
    return perspective_vfov_r(radians(fov), aspect, near, far);
};
const mul = (a, b) => {
    return [a[0] * b[0] + a[4] * b[1] + a[8] * b[2] + a[12] * b[3], a[1] * b[0] + a[5] * b[1] + a[9] * b[2] + a[13] * b[3], a[2] * b[0] + a[6] * b[1] + a[10] * b[2] + a[14] * b[3], a[3] * b[0] + a[7] * b[1] + a[11] * b[2] + a[15] * b[3], a[0] * b[4] + a[4] * b[5] + a[8] * b[6] + a[12] * b[7], a[1] * b[4] + a[5] * b[5] + a[9] * b[6] + a[13] * b[7], a[2] * b[4] + a[6] * b[5] + a[10] * b[6] + a[14] * b[7], a[3] * b[4] + a[7] * b[5] + a[11] * b[6] + a[15] * b[7], a[0] * b[8] + a[4] * b[9] + a[8] * b[10] + a[12] * b[11], a[1] * b[8] + a[5] * b[9] + a[9] * b[10] + a[13] * b[11], a[2] * b[8] + a[6] * b[9] + a[10] * b[10] + a[14] * b[11], a[3] * b[8] + a[7] * b[9] + a[11] * b[10] + a[15] * b[11], a[0] * b[12] + a[4] * b[13] + a[8] * b[14] + a[12] * b[15], a[1] * b[12] + a[5] * b[13] + a[9] * b[14] + a[13] * b[15], a[2] * b[12] + a[6] * b[13] + a[10] * b[14] + a[14] * b[15], a[3] * b[12] + a[7] * b[13] + a[11] * b[14] + a[15] * b[15]];
};
// function invertMatrix(m) {
//     let inv = [];
//     let det;
//     let i;
//     inv[0] = m[5] * m[10] * m[15] -
//              m[5] * m[11] * m[14] -
//              m[9] * m[6] * m[15] +
//              m[9] * m[7] * m[14] +
//              m[13] * m[6] * m[11] -
//              m[13] * m[7] * m[10];
//     inv[1] = -m[1] * m[10] * m[15] +
//               m[1] * m[11] * m[14] +
//               m[9] * m[2] * m[15] -
//               m[9] * m[3] * m[14] -
//               m[13] * m[2] * m[11] +
//               m[13] * m[3] * m[10];
//     inv[2] = m[1] * m[6] * m[15] -
//              m[1] * m[7] * m[14] -
//              m[5] * m[2] * m[15] +
//              m[5] * m[3] * m[14] +
//              m[13] * m[2] * m[7] -
//              m[13] * m[3] * m[6];
//     inv[3] = -m[1] * m[6] * m[11] +
//               m[1] * m[7] * m[10] +
//               m[5] * m[2] * m[11] -
//               m[5] * m[3] * m[10] -
//               m[9] * m[2] * m[7] +
//               m[9] * m[3] * m[6];
//     inv[4] = -m[4] * m[10] * m[15] +
//               m[4] * m[11] * m[14] +
//               m[8] * m[6] * m[15] -
//               m[8] * m[7] * m[14] -
//               m[12] * m[6] * m[11] +
//               m[12] * m[7] * m[10];
//     inv[5] = m[0] * m[10] * m[15] -
//              m[0] * m[11] * m[14] -
//              m[8] * m[2] * m[15] +
//              m[8] * m[3] * m[14] +
//              m[12] * m[2] * m[11] -
//              m[12] * m[3] * m[10];
//     inv[6] = -m[0] * m[6] * m[15] +
//               m[0] * m[7] * m[14] +
//               m[4] * m[2] * m[15] -
//               m[4] * m[3] * m[14] -
//               m[12] * m[2] * m[7] +
//               m[12] * m[3] * m[6];
//     inv[7] = m[0] * m[6] * m[11] -
//              m[0] * m[7] * m[10] -
//              m[4] * m[2] * m[11] +
//              m[4] * m[3] * m[10] +
//              m[8] * m[2] * m[7] -
//              m[8] * m[3] * m[6];
//     inv[8] = m[4] * m[9] * m[15] -
//              m[4] * m[11] * m[13] -
//              m[8] * m[5] * m[15] +
//              m[8] * m[7] * m[13] +
//              m[12] * m[5] * m[11] -
//              m[12] * m[7] * m[9];
//     inv[9] = -m[0] * m[9] * m[15] +
//               m[0] * m[11] * m[13] +
//               m[8] * m[1] * m[15] -
//               m[8] * m[3] * m[13] -
//               m[12] * m[1] * m[11] +
//               m[12] * m[3] * m[9];
//     inv[10] = m[0] * m[5] * m[15] -
//               m[0] * m[7] * m[13] -
//               m[4] * m[1] * m[15] +
//               m[4] * m[3] * m[13] +
//               m[12] * m[1] * m[7] -
//               m[12] * m[3] * m[5];
//     inv[11] = -m[0] * m[5] * m[11] +
//                m[0] * m[7] * m[9] +
//                m[4] * m[1] * m[11] -
//                m[4] * m[3] * m[9] -
//                m[8] * m[1] * m[7] +
//                m[8] * m[3] * m[5];
//     inv[12] = -m[4] * m[9] * m[14] +
//                m[4] * m[10] * m[13] +
//                m[8] * m[5] * m[14] -
//                m[8] * m[6] * m[13] -
//                m[12] * m[5] * m[10] +
//                m[12] * m[6] * m[9];
//     inv[13] = m[0] * m[9] * m[14] -
//               m[0] * m[10] * m[13] -
//               m[8] * m[1] * m[14] +
//               m[8] * m[2] * m[13] +
//               m[12] * m[1] * m[10] -
//               m[12] * m[2] * m[9];
//     inv[14] = -m[0] * m[5] * m[14] +
//                m[0] * m[6] * m[13] +
//                m[4] * m[1] * m[14] -
//                m[4] * m[2] * m[13] -
//                m[12] * m[1] * m[6] +
//                m[12] * m[2] * m[5];
//     inv[15] = m[0] * m[5] * m[10] -
//               m[0] * m[6] * m[9] -
//               m[4] * m[1] * m[10] +
//               m[4] * m[2] * m[9] +
//               m[8] * m[1] * m[6] -
//               m[8] * m[2] * m[5];
//     det = m[0] * inv[0] + m[1] * inv[4] + m[2] * inv[8] + m[3] * inv[12];
//     if (det === 0) return null;
//     det = 1.0 / det;
//     for (i = 0; i < 16; i++) {
//         inv[i] *= det;
//     }
//     return inv;
// }

new Vector3();

// export type sphere = () => MeshData
const sphere = () => {
    return geometry(new SphereGeometry());
};

/* esm.sh - peerjs@1.5.4 */
let __Process$ = {};
var sr=Object.create;var ke=Object.defineProperty;var or=Object.getOwnPropertyDescriptor;var ar=Object.getOwnPropertyNames;var cr=Object.getPrototypeOf,fr=Object.prototype.hasOwnProperty;var hr=(t,e)=>()=>(e||t((e={exports:{}}).exports,e),e.exports),Q=(t,e)=>{for(var r in e)ke(t,r,{get:e[r],enumerable:true});},pr=(t,e,r,n)=>{if(e&&typeof e=="object"||typeof e=="function")for(let i of ar(e))!fr.call(t,i)&&i!==r&&ke(t,i,{get:()=>e[i],enumerable:!(n=or(e,i))||n.enumerable});return t};var Rt=(t,e,r)=>(r=t!=null?sr(cr(t)):{},pr(!t||!t.__esModule?ke(r,"default",{value:t,enumerable:true}):r,t));var it=hr((tn,nt)=>{var u={};u.generateIdentifier=function(){return Math.random().toString(36).substring(2,12)};u.localCName=u.generateIdentifier();u.splitLines=function(t){return t.trim().split(`
`).map(e=>e.trim())};u.splitSections=function(t){return t.split(`
m=`).map((r,n)=>(n>0?"m="+r:r).trim()+`\r
`)};u.getDescription=function(t){let e=u.splitSections(t);return e&&e[0]};u.getMediaSections=function(t){let e=u.splitSections(t);return e.shift(),e};u.matchPrefix=function(t,e){return u.splitLines(t).filter(r=>r.indexOf(e)===0)};u.parseCandidate=function(t){let e;t.indexOf("a=candidate:")===0?e=t.substring(12).split(" "):e=t.substring(10).split(" ");let r={foundation:e[0],component:{1:"rtp",2:"rtcp"}[e[1]]||e[1],protocol:e[2].toLowerCase(),priority:parseInt(e[3],10),ip:e[4],address:e[4],port:parseInt(e[5],10),type:e[7]};for(let n=8;n<e.length;n+=2)switch(e[n]){case "raddr":r.relatedAddress=e[n+1];break;case "rport":r.relatedPort=parseInt(e[n+1],10);break;case "tcptype":r.tcpType=e[n+1];break;case "ufrag":r.ufrag=e[n+1],r.usernameFragment=e[n+1];break;default:r[e[n]]===void 0&&(r[e[n]]=e[n+1]);break}return r};u.writeCandidate=function(t){let e=[];e.push(t.foundation);let r=t.component;r==="rtp"?e.push(1):r==="rtcp"?e.push(2):e.push(r),e.push(t.protocol.toUpperCase()),e.push(t.priority),e.push(t.address||t.ip),e.push(t.port);let n=t.type;return e.push("typ"),e.push(n),n!=="host"&&t.relatedAddress&&t.relatedPort&&(e.push("raddr"),e.push(t.relatedAddress),e.push("rport"),e.push(t.relatedPort)),t.tcpType&&t.protocol.toLowerCase()==="tcp"&&(e.push("tcptype"),e.push(t.tcpType)),(t.usernameFragment||t.ufrag)&&(e.push("ufrag"),e.push(t.usernameFragment||t.ufrag)),"candidate:"+e.join(" ")};u.parseIceOptions=function(t){return t.substring(14).split(" ")};u.parseRtpMap=function(t){let e=t.substring(9).split(" "),r={payloadType:parseInt(e.shift(),10)};return e=e[0].split("/"),r.name=e[0],r.clockRate=parseInt(e[1],10),r.channels=e.length===3?parseInt(e[2],10):1,r.numChannels=r.channels,r};u.writeRtpMap=function(t){let e=t.payloadType;t.preferredPayloadType!==void 0&&(e=t.preferredPayloadType);let r=t.channels||t.numChannels||1;return "a=rtpmap:"+e+" "+t.name+"/"+t.clockRate+(r!==1?"/"+r:"")+`\r
`};u.parseExtmap=function(t){let e=t.substring(9).split(" ");return {id:parseInt(e[0],10),direction:e[0].indexOf("/")>0?e[0].split("/")[1]:"sendrecv",uri:e[1],attributes:e.slice(2).join(" ")}};u.writeExtmap=function(t){return "a=extmap:"+(t.id||t.preferredId)+(t.direction&&t.direction!=="sendrecv"?"/"+t.direction:"")+" "+t.uri+(t.attributes?" "+t.attributes:"")+`\r
`};u.parseFmtp=function(t){let e={},r,n=t.substring(t.indexOf(" ")+1).split(";");for(let i=0;i<n.length;i++)r=n[i].trim().split("="),e[r[0].trim()]=r[1];return e};u.writeFmtp=function(t){let e="",r=t.payloadType;if(t.preferredPayloadType!==void 0&&(r=t.preferredPayloadType),t.parameters&&Object.keys(t.parameters).length){let n=[];Object.keys(t.parameters).forEach(i=>{t.parameters[i]!==void 0?n.push(i+"="+t.parameters[i]):n.push(i);}),e+="a=fmtp:"+r+" "+n.join(";")+`\r
`;}return e};u.parseRtcpFb=function(t){let e=t.substring(t.indexOf(" ")+1).split(" ");return {type:e.shift(),parameter:e.join(" ")}};u.writeRtcpFb=function(t){let e="",r=t.payloadType;return t.preferredPayloadType!==void 0&&(r=t.preferredPayloadType),t.rtcpFeedback&&t.rtcpFeedback.length&&t.rtcpFeedback.forEach(n=>{e+="a=rtcp-fb:"+r+" "+n.type+(n.parameter&&n.parameter.length?" "+n.parameter:"")+`\r
`;}),e};u.parseSsrcMedia=function(t){let e=t.indexOf(" "),r={ssrc:parseInt(t.substring(7,e),10)},n=t.indexOf(":",e);return n>-1?(r.attribute=t.substring(e+1,n),r.value=t.substring(n+1)):r.attribute=t.substring(e+1),r};u.parseSsrcGroup=function(t){let e=t.substring(13).split(" ");return {semantics:e.shift(),ssrcs:e.map(r=>parseInt(r,10))}};u.getMid=function(t){let e=u.matchPrefix(t,"a=mid:")[0];if(e)return e.substring(6)};u.parseFingerprint=function(t){let e=t.substring(14).split(" ");return {algorithm:e[0].toLowerCase(),value:e[1].toUpperCase()}};u.getDtlsParameters=function(t,e){return {role:"auto",fingerprints:u.matchPrefix(t+e,"a=fingerprint:").map(u.parseFingerprint)}};u.writeDtlsParameters=function(t,e){let r="a=setup:"+e+`\r
`;return t.fingerprints.forEach(n=>{r+="a=fingerprint:"+n.algorithm+" "+n.value+`\r
`;}),r};u.parseCryptoLine=function(t){let e=t.substring(9).split(" ");return {tag:parseInt(e[0],10),cryptoSuite:e[1],keyParams:e[2],sessionParams:e.slice(3)}};u.writeCryptoLine=function(t){return "a=crypto:"+t.tag+" "+t.cryptoSuite+" "+(typeof t.keyParams=="object"?u.writeCryptoKeyParams(t.keyParams):t.keyParams)+(t.sessionParams?" "+t.sessionParams.join(" "):"")+`\r
`};u.parseCryptoKeyParams=function(t){if(t.indexOf("inline:")!==0)return null;let e=t.substring(7).split("|");return {keyMethod:"inline",keySalt:e[0],lifeTime:e[1],mkiValue:e[2]?e[2].split(":")[0]:void 0,mkiLength:e[2]?e[2].split(":")[1]:void 0}};u.writeCryptoKeyParams=function(t){return t.keyMethod+":"+t.keySalt+(t.lifeTime?"|"+t.lifeTime:"")+(t.mkiValue&&t.mkiLength?"|"+t.mkiValue+":"+t.mkiLength:"")};u.getCryptoParameters=function(t,e){return u.matchPrefix(t+e,"a=crypto:").map(u.parseCryptoLine)};u.getIceParameters=function(t,e){let r=u.matchPrefix(t+e,"a=ice-ufrag:")[0],n=u.matchPrefix(t+e,"a=ice-pwd:")[0];return r&&n?{usernameFragment:r.substring(12),password:n.substring(10)}:null};u.writeIceParameters=function(t){let e="a=ice-ufrag:"+t.usernameFragment+`\r
a=ice-pwd:`+t.password+`\r
`;return t.iceLite&&(e+=`a=ice-lite\r
`),e};u.parseRtpParameters=function(t){let e={codecs:[],headerExtensions:[],fecMechanisms:[],rtcp:[]},n=u.splitLines(t)[0].split(" ");e.profile=n[2];for(let s=3;s<n.length;s++){let o=n[s],a=u.matchPrefix(t,"a=rtpmap:"+o+" ")[0];if(a){let f=u.parseRtpMap(a),c=u.matchPrefix(t,"a=fmtp:"+o+" ");switch(f.parameters=c.length?u.parseFmtp(c[0]):{},f.rtcpFeedback=u.matchPrefix(t,"a=rtcp-fb:"+o+" ").map(u.parseRtcpFb),e.codecs.push(f),f.name.toUpperCase()){case "RED":case "ULPFEC":e.fecMechanisms.push(f.name.toUpperCase());break;}}}u.matchPrefix(t,"a=extmap:").forEach(s=>{e.headerExtensions.push(u.parseExtmap(s));});let i=u.matchPrefix(t,"a=rtcp-fb:* ").map(u.parseRtcpFb);return e.codecs.forEach(s=>{i.forEach(o=>{s.rtcpFeedback.find(f=>f.type===o.type&&f.parameter===o.parameter)||s.rtcpFeedback.push(o);});}),e};u.writeRtpDescription=function(t,e){let r="";r+="m="+t+" ",r+=e.codecs.length>0?"9":"0",r+=" "+(e.profile||"UDP/TLS/RTP/SAVPF")+" ",r+=e.codecs.map(i=>i.preferredPayloadType!==void 0?i.preferredPayloadType:i.payloadType).join(" ")+`\r
`,r+=`c=IN IP4 0.0.0.0\r
`,r+=`a=rtcp:9 IN IP4 0.0.0.0\r
`,e.codecs.forEach(i=>{r+=u.writeRtpMap(i),r+=u.writeFmtp(i),r+=u.writeRtcpFb(i);});let n=0;return e.codecs.forEach(i=>{i.maxptime>n&&(n=i.maxptime);}),n>0&&(r+="a=maxptime:"+n+`\r
`),e.headerExtensions&&e.headerExtensions.forEach(i=>{r+=u.writeExtmap(i);}),r};u.parseRtpEncodingParameters=function(t){let e=[],r=u.parseRtpParameters(t),n=r.fecMechanisms.indexOf("RED")!==-1,i=r.fecMechanisms.indexOf("ULPFEC")!==-1,s=u.matchPrefix(t,"a=ssrc:").map(h=>u.parseSsrcMedia(h)).filter(h=>h.attribute==="cname"),o=s.length>0&&s[0].ssrc,a,f=u.matchPrefix(t,"a=ssrc-group:FID").map(h=>h.substring(17).split(" ").map(l=>parseInt(l,10)));f.length>0&&f[0].length>1&&f[0][0]===o&&(a=f[0][1]),r.codecs.forEach(h=>{if(h.name.toUpperCase()==="RTX"&&h.parameters.apt){let p={ssrc:o,codecPayloadType:parseInt(h.parameters.apt,10)};o&&a&&(p.rtx={ssrc:a}),e.push(p),n&&(p=JSON.parse(JSON.stringify(p)),p.fec={ssrc:o,mechanism:i?"red+ulpfec":"red"},e.push(p));}}),e.length===0&&o&&e.push({ssrc:o});let c=u.matchPrefix(t,"b=");return c.length&&(c[0].indexOf("b=TIAS:")===0?c=parseInt(c[0].substring(7),10):c[0].indexOf("b=AS:")===0?c=parseInt(c[0].substring(5),10)*1e3*.95-50*40*8:c=void 0,e.forEach(h=>{h.maxBitrate=c;})),e};u.parseRtcpParameters=function(t){let e={},r=u.matchPrefix(t,"a=ssrc:").map(s=>u.parseSsrcMedia(s)).filter(s=>s.attribute==="cname")[0];r&&(e.cname=r.value,e.ssrc=r.ssrc);let n=u.matchPrefix(t,"a=rtcp-rsize");e.reducedSize=n.length>0,e.compound=n.length===0;let i=u.matchPrefix(t,"a=rtcp-mux");return e.mux=i.length>0,e};u.writeRtcpParameters=function(t){let e="";return t.reducedSize&&(e+=`a=rtcp-rsize\r
`),t.mux&&(e+=`a=rtcp-mux\r
`),t.ssrc!==void 0&&t.cname&&(e+="a=ssrc:"+t.ssrc+" cname:"+t.cname+`\r
`),e};u.parseMsid=function(t){let e,r=u.matchPrefix(t,"a=msid:");if(r.length===1)return e=r[0].substring(7).split(" "),{stream:e[0],track:e[1]};let n=u.matchPrefix(t,"a=ssrc:").map(i=>u.parseSsrcMedia(i)).filter(i=>i.attribute==="msid");if(n.length>0)return e=n[0].value.split(" "),{stream:e[0],track:e[1]}};u.parseSctpDescription=function(t){let e=u.parseMLine(t),r=u.matchPrefix(t,"a=max-message-size:"),n;r.length>0&&(n=parseInt(r[0].substring(19),10)),isNaN(n)&&(n=65536);let i=u.matchPrefix(t,"a=sctp-port:");if(i.length>0)return {port:parseInt(i[0].substring(12),10),protocol:e.fmt,maxMessageSize:n};let s=u.matchPrefix(t,"a=sctpmap:");if(s.length>0){let o=s[0].substring(10).split(" ");return {port:parseInt(o[0],10),protocol:o[1],maxMessageSize:n}}};u.writeSctpDescription=function(t,e){let r=[];return t.protocol!=="DTLS/SCTP"?r=["m="+t.kind+" 9 "+t.protocol+" "+e.protocol+`\r
`,`c=IN IP4 0.0.0.0\r
`,"a=sctp-port:"+e.port+`\r
`]:r=["m="+t.kind+" 9 "+t.protocol+" "+e.port+`\r
`,`c=IN IP4 0.0.0.0\r
`,"a=sctpmap:"+e.port+" "+e.protocol+` 65535\r
`],e.maxMessageSize!==void 0&&r.push("a=max-message-size:"+e.maxMessageSize+`\r
`),r.join("")};u.generateSessionId=function(){return Math.random().toString().substr(2,22)};u.writeSessionBoilerplate=function(t,e,r){let n,i=e!==void 0?e:2;return t?n=t:n=u.generateSessionId(),`v=0\r
o=`+(r||"thisisadapterortc")+" "+n+" "+i+` IN IP4 127.0.0.1\r
s=-\r
t=0 0\r
`};u.getDirection=function(t,e){let r=u.splitLines(t);for(let n=0;n<r.length;n++)switch(r[n]){case "a=sendrecv":case "a=sendonly":case "a=recvonly":case "a=inactive":return r[n].substring(2);}return e?u.getDirection(e):"sendrecv"};u.getKind=function(t){return u.splitLines(t)[0].split(" ")[0].substring(2)};u.isRejected=function(t){return t.split(" ",2)[1]==="0"};u.parseMLine=function(t){let r=u.splitLines(t)[0].substring(2).split(" ");return {kind:r[0],port:parseInt(r[1],10),protocol:r[2],fmt:r.slice(3).join(" ")}};u.parseOLine=function(t){let r=u.matchPrefix(t,"o=")[0].substring(2).split(" ");return {username:r[0],sessionId:r[1],sessionVersion:parseInt(r[2],10),netType:r[3],addressType:r[4],address:r[5]}};u.isValidSDP=function(t){if(typeof t!="string"||t.length===0)return  false;let e=u.splitLines(t);for(let r=0;r<e.length;r++)if(e[r].length<2||e[r].charAt(1)!=="=")return  false;return  true};typeof nt=="object"&&(nt.exports=u);});var Ee=class{constructor(){this.encoder=new TextEncoder,this._pieces=[],this._parts=[];}append_buffer(e){this.flush(),this._parts.push(e);}append(e){this._pieces.push(e);}flush(){if(this._pieces.length>0){let e=new Uint8Array(this._pieces);this._parts.push(e),this._pieces=[];}}toArrayBuffer(){let e=[];for(let r of this._parts)e.push(r);return ur(e).buffer}};function ur(t){let e=0;for(let i of t)e+=i.byteLength;let r=new Uint8Array(e),n=0;for(let i of t){let s=new Uint8Array(i.buffer,i.byteOffset,i.byteLength);r.set(s,n),n+=i.byteLength;}return r}function De(t){return new Re(t).unpack()}function Ie(t){let e=new Pe,r=e.pack(t);return r instanceof Promise?r.then(()=>e.getBuffer()):e.getBuffer()}var Re=class{constructor(e){this.index=0,this.dataBuffer=e,this.dataView=new Uint8Array(this.dataBuffer),this.length=this.dataBuffer.byteLength;}unpack(){let e=this.unpack_uint8();if(e<128)return e;if((e^224)<32)return (e^224)-32;let r;if((r=e^160)<=15)return this.unpack_raw(r);if((r=e^176)<=15)return this.unpack_string(r);if((r=e^144)<=15)return this.unpack_array(r);if((r=e^128)<=15)return this.unpack_map(r);switch(e){case 192:return null;case 193:return;case 194:return  false;case 195:return  true;case 202:return this.unpack_float();case 203:return this.unpack_double();case 204:return this.unpack_uint8();case 205:return this.unpack_uint16();case 206:return this.unpack_uint32();case 207:return this.unpack_uint64();case 208:return this.unpack_int8();case 209:return this.unpack_int16();case 210:return this.unpack_int32();case 211:return this.unpack_int64();case 212:return;case 213:return;case 214:return;case 215:return;case 216:return r=this.unpack_uint16(),this.unpack_string(r);case 217:return r=this.unpack_uint32(),this.unpack_string(r);case 218:return r=this.unpack_uint16(),this.unpack_raw(r);case 219:return r=this.unpack_uint32(),this.unpack_raw(r);case 220:return r=this.unpack_uint16(),this.unpack_array(r);case 221:return r=this.unpack_uint32(),this.unpack_array(r);case 222:return r=this.unpack_uint16(),this.unpack_map(r);case 223:return r=this.unpack_uint32(),this.unpack_map(r)}}unpack_uint8(){let e=this.dataView[this.index]&255;return this.index++,e}unpack_uint16(){let e=this.read(2),r=(e[0]&255)*256+(e[1]&255);return this.index+=2,r}unpack_uint32(){let e=this.read(4),r=((e[0]*256+e[1])*256+e[2])*256+e[3];return this.index+=4,r}unpack_uint64(){let e=this.read(8),r=((((((e[0]*256+e[1])*256+e[2])*256+e[3])*256+e[4])*256+e[5])*256+e[6])*256+e[7];return this.index+=8,r}unpack_int8(){let e=this.unpack_uint8();return e<128?e:e-256}unpack_int16(){let e=this.unpack_uint16();return e<32768?e:e-65536}unpack_int32(){let e=this.unpack_uint32();return e<2**31?e:e-2**32}unpack_int64(){let e=this.unpack_uint64();return e<2**63?e:e-2**64}unpack_raw(e){if(this.length<this.index+e)throw new Error(`BinaryPackFailure: index is out of range ${this.index} ${e} ${this.length}`);let r=this.dataBuffer.slice(this.index,this.index+e);return this.index+=e,r}unpack_string(e){let r=this.read(e),n=0,i="",s,o;for(;n<e;)s=r[n],s<160?(o=s,n++):(s^192)<32?(o=(s&31)<<6|r[n+1]&63,n+=2):(s^224)<16?(o=(s&15)<<12|(r[n+1]&63)<<6|r[n+2]&63,n+=3):(o=(s&7)<<18|(r[n+1]&63)<<12|(r[n+2]&63)<<6|r[n+3]&63,n+=4),i+=String.fromCodePoint(o);return this.index+=e,i}unpack_array(e){let r=new Array(e);for(let n=0;n<e;n++)r[n]=this.unpack();return r}unpack_map(e){let r={};for(let n=0;n<e;n++){let i=this.unpack();r[i]=this.unpack();}return r}unpack_float(){let e=this.unpack_uint32(),r=e>>31,n=(e>>23&255)-127,i=e&8388607|8388608;return (r===0?1:-1)*i*2**(n-23)}unpack_double(){let e=this.unpack_uint32(),r=this.unpack_uint32(),n=e>>31,i=(e>>20&2047)-1023,o=(e&1048575|1048576)*2**(i-20)+r*2**(i-52);return (n===0?1:-1)*o}read(e){let r=this.index;if(r+e<=this.length)return this.dataView.subarray(r,r+e);throw new Error("BinaryPackFailure: read index out of range")}},Pe=class{getBuffer(){return this._bufferBuilder.toArrayBuffer()}pack(e){if(typeof e=="string")this.pack_string(e);else if(typeof e=="number")Math.floor(e)===e?this.pack_integer(e):this.pack_double(e);else if(typeof e=="boolean")e===true?this._bufferBuilder.append(195):e===false&&this._bufferBuilder.append(194);else if(e===void 0)this._bufferBuilder.append(192);else if(typeof e=="object")if(e===null)this._bufferBuilder.append(192);else {let r=e.constructor;if(e instanceof Array){let n=this.pack_array(e);if(n instanceof Promise)return n.then(()=>this._bufferBuilder.flush())}else if(e instanceof ArrayBuffer)this.pack_bin(new Uint8Array(e));else if("BYTES_PER_ELEMENT"in e){let n=e;this.pack_bin(new Uint8Array(n.buffer,n.byteOffset,n.byteLength));}else if(e instanceof Date)this.pack_string(e.toString());else {if(e instanceof Blob)return e.arrayBuffer().then(n=>{this.pack_bin(new Uint8Array(n)),this._bufferBuilder.flush();});if(r==Object||r.toString().startsWith("class")){let n=this.pack_object(e);if(n instanceof Promise)return n.then(()=>this._bufferBuilder.flush())}else throw new Error(`Type "${r.toString()}" not yet supported`)}}else throw new Error(`Type "${typeof e}" not yet supported`);this._bufferBuilder.flush();}pack_bin(e){let r=e.length;if(r<=15)this.pack_uint8(160+r);else if(r<=65535)this._bufferBuilder.append(218),this.pack_uint16(r);else if(r<=4294967295)this._bufferBuilder.append(219),this.pack_uint32(r);else throw new Error("Invalid length");this._bufferBuilder.append_buffer(e);}pack_string(e){let r=this._textEncoder.encode(e),n=r.length;if(n<=15)this.pack_uint8(176+n);else if(n<=65535)this._bufferBuilder.append(216),this.pack_uint16(n);else if(n<=4294967295)this._bufferBuilder.append(217),this.pack_uint32(n);else throw new Error("Invalid length");this._bufferBuilder.append_buffer(r);}pack_array(e){let r=e.length;if(r<=15)this.pack_uint8(144+r);else if(r<=65535)this._bufferBuilder.append(220),this.pack_uint16(r);else if(r<=4294967295)this._bufferBuilder.append(221),this.pack_uint32(r);else throw new Error("Invalid length");let n=i=>{if(i<r){let s=this.pack(e[i]);return s instanceof Promise?s.then(()=>n(i+1)):n(i+1)}};return n(0)}pack_integer(e){if(e>=-32&&e<=127)this._bufferBuilder.append(e&255);else if(e>=0&&e<=255)this._bufferBuilder.append(204),this.pack_uint8(e);else if(e>=-128&&e<=127)this._bufferBuilder.append(208),this.pack_int8(e);else if(e>=0&&e<=65535)this._bufferBuilder.append(205),this.pack_uint16(e);else if(e>=-32768&&e<=32767)this._bufferBuilder.append(209),this.pack_int16(e);else if(e>=0&&e<=4294967295)this._bufferBuilder.append(206),this.pack_uint32(e);else if(e>=-2147483648&&e<=2147483647)this._bufferBuilder.append(210),this.pack_int32(e);else if(e>=-9223372036854776e3&&e<=9223372036854776e3)this._bufferBuilder.append(211),this.pack_int64(e);else if(e>=0&&e<=18446744073709552e3)this._bufferBuilder.append(207),this.pack_uint64(e);else throw new Error("Invalid integer")}pack_double(e){let r=0;e<0&&(r=1,e=-e);let n=Math.floor(Math.log(e)/Math.LN2),i=e/2**n-1,s=Math.floor(i*2**52),o=2**32,a=r<<31|n+1023<<20|s/o&1048575,f=s%o;this._bufferBuilder.append(203),this.pack_int32(a),this.pack_int32(f);}pack_object(e){let r=Object.keys(e),n=r.length;if(n<=15)this.pack_uint8(128+n);else if(n<=65535)this._bufferBuilder.append(222),this.pack_uint16(n);else if(n<=4294967295)this._bufferBuilder.append(223),this.pack_uint32(n);else throw new Error("Invalid length");let i=s=>{if(s<r.length){let o=r[s];if(e.hasOwnProperty(o)){this.pack(o);let a=this.pack(e[o]);if(a instanceof Promise)return a.then(()=>i(s+1))}return i(s+1)}};return i(0)}pack_uint8(e){this._bufferBuilder.append(e);}pack_uint16(e){this._bufferBuilder.append(e>>8),this._bufferBuilder.append(e&255);}pack_uint32(e){let r=e&4294967295;this._bufferBuilder.append((r&4278190080)>>>24),this._bufferBuilder.append((r&16711680)>>>16),this._bufferBuilder.append((r&65280)>>>8),this._bufferBuilder.append(r&255);}pack_uint64(e){let r=e/4294967296,n=e%2**32;this._bufferBuilder.append((r&4278190080)>>>24),this._bufferBuilder.append((r&16711680)>>>16),this._bufferBuilder.append((r&65280)>>>8),this._bufferBuilder.append(r&255),this._bufferBuilder.append((n&4278190080)>>>24),this._bufferBuilder.append((n&16711680)>>>16),this._bufferBuilder.append((n&65280)>>>8),this._bufferBuilder.append(n&255);}pack_int8(e){this._bufferBuilder.append(e&255);}pack_int16(e){this._bufferBuilder.append((e&65280)>>8),this._bufferBuilder.append(e&255);}pack_int32(e){this._bufferBuilder.append(e>>>24&255),this._bufferBuilder.append((e&16711680)>>>16),this._bufferBuilder.append((e&65280)>>>8),this._bufferBuilder.append(e&255);}pack_int64(e){let r=Math.floor(e/4294967296),n=e%2**32;this._bufferBuilder.append((r&4278190080)>>>24),this._bufferBuilder.append((r&16711680)>>>16),this._bufferBuilder.append((r&65280)>>>8),this._bufferBuilder.append(r&255),this._bufferBuilder.append((n&4278190080)>>>24),this._bufferBuilder.append((n&16711680)>>>16),this._bufferBuilder.append((n&65280)>>>8),this._bufferBuilder.append(n&255);}constructor(){this._bufferBuilder=new Ee,this._textEncoder=new TextEncoder;}};var Dt=true,It=true;function z(t,e,r){let n=t.match(e);return n&&n.length>=r&&parseInt(n[r],10)}function T(t,e,r){if(!t.RTCPeerConnection)return;let n=t.RTCPeerConnection.prototype,i=n.addEventListener;n.addEventListener=function(o,a){if(o!==e)return i.apply(this,arguments);let f=c=>{let h=r(c);h&&(a.handleEvent?a.handleEvent(h):a(h));};return this._eventMap=this._eventMap||{},this._eventMap[e]||(this._eventMap[e]=new Map),this._eventMap[e].set(a,f),i.apply(this,[o,f])};let s=n.removeEventListener;n.removeEventListener=function(o,a){if(o!==e||!this._eventMap||!this._eventMap[e])return s.apply(this,arguments);if(!this._eventMap[e].has(a))return s.apply(this,arguments);let f=this._eventMap[e].get(a);return this._eventMap[e].delete(a),this._eventMap[e].size===0&&delete this._eventMap[e],Object.keys(this._eventMap).length===0&&delete this._eventMap,s.apply(this,[o,f])},Object.defineProperty(n,"on"+e,{get(){return this["_on"+e]},set(o){this["_on"+e]&&(this.removeEventListener(e,this["_on"+e]),delete this["_on"+e]),o&&this.addEventListener(e,this["_on"+e]=o);},enumerable:true,configurable:true});}function Mt(t){return typeof t!="boolean"?new Error("Argument type: "+typeof t+". Please use a boolean."):(Dt=t,t?"adapter.js logging disabled":"adapter.js logging enabled")}function At(t){return typeof t!="boolean"?new Error("Argument type: "+typeof t+". Please use a boolean."):(It=!t,"adapter.js deprecation warnings "+(t?"disabled":"enabled"))}function ee(){if(typeof window=="object"){if(Dt)return;typeof console<"u"&&typeof console.log=="function"&&console.log.apply(console,arguments);}}function A(t,e){It&&console.warn(t+" is deprecated, please use "+e+" instead.");}function Ut(t){let e={browser:null,version:null};if(typeof t>"u"||!t.navigator||!t.navigator.userAgent)return e.browser="Not a browser.",e;let{navigator:r}=t;if(r.userAgentData&&r.userAgentData.brands){let n=r.userAgentData.brands.find(i=>i.brand==="Chromium");if(n)return {browser:"chrome",version:parseInt(n.version,10)}}if(r.mozGetUserMedia)e.browser="firefox",e.version=z(r.userAgent,/Firefox\/(\d+)\./,1);else if(r.webkitGetUserMedia||t.isSecureContext===false&&t.webkitRTCPeerConnection)e.browser="chrome",e.version=z(r.userAgent,/Chrom(e|ium)\/(\d+)\./,2);else if(t.RTCPeerConnection&&r.userAgent.match(/AppleWebKit\/(\d+)\./))e.browser="safari",e.version=z(r.userAgent,/AppleWebKit\/(\d+)\./,1),e.supportsUnifiedPlan=t.RTCRtpTransceiver&&"currentDirection"in t.RTCRtpTransceiver.prototype;else return e.browser="Not a supported browser.",e;return e}function Pt(t){return Object.prototype.toString.call(t)==="[object Object]"}function Ae(t){return Pt(t)?Object.keys(t).reduce(function(e,r){let n=Pt(t[r]),i=n?Ae(t[r]):t[r],s=n&&!Object.keys(i).length;return i===void 0||s?e:Object.assign(e,{[r]:i})},{}):t}function Me(t,e,r){!e||r.has(e.id)||(r.set(e.id,e),Object.keys(e).forEach(n=>{n.endsWith("Id")?Me(t,t.get(e[n]),r):n.endsWith("Ids")&&e[n].forEach(i=>{Me(t,t.get(i),r);});}));}function Ue(t,e,r){let n=r?"outbound-rtp":"inbound-rtp",i=new Map;if(e===null)return i;let s=[];return t.forEach(o=>{o.type==="track"&&o.trackIdentifier===e.id&&s.push(o);}),s.forEach(o=>{t.forEach(a=>{a.type===n&&a.trackId===o.id&&Me(t,a,i);});}),i}var ne={};Q(ne,{fixNegotiationNeeded:()=>Fe,shimAddTrackRemoveTrack:()=>ze,shimAddTrackRemoveTrackWithNative:()=>wt,shimGetSendersWithDtmf:()=>Le,shimGetUserMedia:()=>te,shimMediaStream:()=>Oe,shimOnTrack:()=>we,shimPeerConnection:()=>re,shimSenderReceiverGetStats:()=>Be});var Ot=ee;function te(t,e){let r=t&&t.navigator;if(!r.mediaDevices)return;let n=function(a){if(typeof a!="object"||a.mandatory||a.optional)return a;let f={};return Object.keys(a).forEach(c=>{if(c==="require"||c==="advanced"||c==="mediaSource")return;let h=typeof a[c]=="object"?a[c]:{ideal:a[c]};h.exact!==void 0&&typeof h.exact=="number"&&(h.min=h.max=h.exact);let p=function(l,m){return l?l+m.charAt(0).toUpperCase()+m.slice(1):m==="deviceId"?"sourceId":m};if(h.ideal!==void 0){f.optional=f.optional||[];let l={};typeof h.ideal=="number"?(l[p("min",c)]=h.ideal,f.optional.push(l),l={},l[p("max",c)]=h.ideal,f.optional.push(l)):(l[p("",c)]=h.ideal,f.optional.push(l));}h.exact!==void 0&&typeof h.exact!="number"?(f.mandatory=f.mandatory||{},f.mandatory[p("",c)]=h.exact):["min","max"].forEach(l=>{h[l]!==void 0&&(f.mandatory=f.mandatory||{},f.mandatory[p(l,c)]=h[l]);});}),a.advanced&&(f.optional=(f.optional||[]).concat(a.advanced)),f},i=function(a,f){if(e.version>=61)return f(a);if(a=JSON.parse(JSON.stringify(a)),a&&typeof a.audio=="object"){let c=function(h,p,l){p in h&&!(l in h)&&(h[l]=h[p],delete h[p]);};a=JSON.parse(JSON.stringify(a)),c(a.audio,"autoGainControl","googAutoGainControl"),c(a.audio,"noiseSuppression","googNoiseSuppression"),a.audio=n(a.audio);}if(a&&typeof a.video=="object"){let c=a.video.facingMode;c=c&&(typeof c=="object"?c:{ideal:c});let h=e.version<66;if(c&&(c.exact==="user"||c.exact==="environment"||c.ideal==="user"||c.ideal==="environment")&&!(r.mediaDevices.getSupportedConstraints&&r.mediaDevices.getSupportedConstraints().facingMode&&!h)){delete a.video.facingMode;let p;if(c.exact==="environment"||c.ideal==="environment"?p=["back","rear"]:(c.exact==="user"||c.ideal==="user")&&(p=["front"]),p)return r.mediaDevices.enumerateDevices().then(l=>{l=l.filter(g=>g.kind==="videoinput");let m=l.find(g=>p.some(y=>g.label.toLowerCase().includes(y)));return !m&&l.length&&p.includes("back")&&(m=l[l.length-1]),m&&(a.video.deviceId=c.exact?{exact:m.deviceId}:{ideal:m.deviceId}),a.video=n(a.video),Ot("chrome: "+JSON.stringify(a)),f(a)})}a.video=n(a.video);}return Ot("chrome: "+JSON.stringify(a)),f(a)},s=function(a){return e.version>=64?a:{name:{PermissionDeniedError:"NotAllowedError",PermissionDismissedError:"NotAllowedError",InvalidStateError:"NotAllowedError",DevicesNotFoundError:"NotFoundError",ConstraintNotSatisfiedError:"OverconstrainedError",TrackStartError:"NotReadableError",MediaDeviceFailedDueToShutdown:"NotAllowedError",MediaDeviceKillSwitchOn:"NotAllowedError",TabCaptureError:"AbortError",ScreenCaptureError:"AbortError",DeviceCaptureError:"AbortError"}[a.name]||a.name,message:a.message,constraint:a.constraint||a.constraintName,toString(){return this.name+(this.message&&": ")+this.message}}},o=function(a,f,c){i(a,h=>{r.webkitGetUserMedia(h,f,p=>{c&&c(s(p));});});};if(r.getUserMedia=o.bind(r),r.mediaDevices.getUserMedia){let a=r.mediaDevices.getUserMedia.bind(r.mediaDevices);r.mediaDevices.getUserMedia=function(f){return i(f,c=>a(c).then(h=>{if(c.audio&&!h.getAudioTracks().length||c.video&&!h.getVideoTracks().length)throw h.getTracks().forEach(p=>{p.stop();}),new DOMException("","NotFoundError");return h},h=>Promise.reject(s(h))))};}}function Oe(t){t.MediaStream=t.MediaStream||t.webkitMediaStream;}function we(t){if(typeof t=="object"&&t.RTCPeerConnection&&!("ontrack"in t.RTCPeerConnection.prototype)){Object.defineProperty(t.RTCPeerConnection.prototype,"ontrack",{get(){return this._ontrack},set(r){this._ontrack&&this.removeEventListener("track",this._ontrack),this.addEventListener("track",this._ontrack=r);},enumerable:true,configurable:true});let e=t.RTCPeerConnection.prototype.setRemoteDescription;t.RTCPeerConnection.prototype.setRemoteDescription=function(){return this._ontrackpoly||(this._ontrackpoly=n=>{n.stream.addEventListener("addtrack",i=>{let s;t.RTCPeerConnection.prototype.getReceivers?s=this.getReceivers().find(a=>a.track&&a.track.id===i.track.id):s={track:i.track};let o=new Event("track");o.track=i.track,o.receiver=s,o.transceiver={receiver:s},o.streams=[n.stream],this.dispatchEvent(o);}),n.stream.getTracks().forEach(i=>{let s;t.RTCPeerConnection.prototype.getReceivers?s=this.getReceivers().find(a=>a.track&&a.track.id===i.id):s={track:i};let o=new Event("track");o.track=i,o.receiver=s,o.transceiver={receiver:s},o.streams=[n.stream],this.dispatchEvent(o);});},this.addEventListener("addstream",this._ontrackpoly)),e.apply(this,arguments)};}else T(t,"track",e=>(e.transceiver||Object.defineProperty(e,"transceiver",{value:{receiver:e.receiver}}),e));}function Le(t){if(typeof t=="object"&&t.RTCPeerConnection&&!("getSenders"in t.RTCPeerConnection.prototype)&&"createDTMFSender"in t.RTCPeerConnection.prototype){let e=function(i,s){return {track:s,get dtmf(){return this._dtmf===void 0&&(s.kind==="audio"?this._dtmf=i.createDTMFSender(s):this._dtmf=null),this._dtmf},_pc:i}};if(!t.RTCPeerConnection.prototype.getSenders){t.RTCPeerConnection.prototype.getSenders=function(){return this._senders=this._senders||[],this._senders.slice()};let i=t.RTCPeerConnection.prototype.addTrack;t.RTCPeerConnection.prototype.addTrack=function(a,f){let c=i.apply(this,arguments);return c||(c=e(this,a),this._senders.push(c)),c};let s=t.RTCPeerConnection.prototype.removeTrack;t.RTCPeerConnection.prototype.removeTrack=function(a){s.apply(this,arguments);let f=this._senders.indexOf(a);f!==-1&&this._senders.splice(f,1);};}let r=t.RTCPeerConnection.prototype.addStream;t.RTCPeerConnection.prototype.addStream=function(s){this._senders=this._senders||[],r.apply(this,[s]),s.getTracks().forEach(o=>{this._senders.push(e(this,o));});};let n=t.RTCPeerConnection.prototype.removeStream;t.RTCPeerConnection.prototype.removeStream=function(s){this._senders=this._senders||[],n.apply(this,[s]),s.getTracks().forEach(o=>{let a=this._senders.find(f=>f.track===o);a&&this._senders.splice(this._senders.indexOf(a),1);});};}else if(typeof t=="object"&&t.RTCPeerConnection&&"getSenders"in t.RTCPeerConnection.prototype&&"createDTMFSender"in t.RTCPeerConnection.prototype&&t.RTCRtpSender&&!("dtmf"in t.RTCRtpSender.prototype)){let e=t.RTCPeerConnection.prototype.getSenders;t.RTCPeerConnection.prototype.getSenders=function(){let n=e.apply(this,[]);return n.forEach(i=>i._pc=this),n},Object.defineProperty(t.RTCRtpSender.prototype,"dtmf",{get(){return this._dtmf===void 0&&(this.track.kind==="audio"?this._dtmf=this._pc.createDTMFSender(this.track):this._dtmf=null),this._dtmf}});}}function Be(t){if(!(typeof t=="object"&&t.RTCPeerConnection&&t.RTCRtpSender&&t.RTCRtpReceiver))return;if(!("getStats"in t.RTCRtpSender.prototype)){let r=t.RTCPeerConnection.prototype.getSenders;r&&(t.RTCPeerConnection.prototype.getSenders=function(){let s=r.apply(this,[]);return s.forEach(o=>o._pc=this),s});let n=t.RTCPeerConnection.prototype.addTrack;n&&(t.RTCPeerConnection.prototype.addTrack=function(){let s=n.apply(this,arguments);return s._pc=this,s}),t.RTCRtpSender.prototype.getStats=function(){let s=this;return this._pc.getStats().then(o=>Ue(o,s.track,true))};}if(!("getStats"in t.RTCRtpReceiver.prototype)){let r=t.RTCPeerConnection.prototype.getReceivers;r&&(t.RTCPeerConnection.prototype.getReceivers=function(){let i=r.apply(this,[]);return i.forEach(s=>s._pc=this),i}),T(t,"track",n=>(n.receiver._pc=n.srcElement,n)),t.RTCRtpReceiver.prototype.getStats=function(){let i=this;return this._pc.getStats().then(s=>Ue(s,i.track,false))};}if(!("getStats"in t.RTCRtpSender.prototype&&"getStats"in t.RTCRtpReceiver.prototype))return;let e=t.RTCPeerConnection.prototype.getStats;t.RTCPeerConnection.prototype.getStats=function(){if(arguments.length>0&&arguments[0]instanceof t.MediaStreamTrack){let n=arguments[0],i,s,o;return this.getSenders().forEach(a=>{a.track===n&&(i?o=true:i=a);}),this.getReceivers().forEach(a=>(a.track===n&&(s?o=true:s=a),a.track===n)),o||i&&s?Promise.reject(new DOMException("There are more than one sender or receiver for the track.","InvalidAccessError")):i?i.getStats():s?s.getStats():Promise.reject(new DOMException("There is no sender or receiver for the track.","InvalidAccessError"))}return e.apply(this,arguments)};}function wt(t){t.RTCPeerConnection.prototype.getLocalStreams=function(){return this._shimmedLocalStreams=this._shimmedLocalStreams||{},Object.keys(this._shimmedLocalStreams).map(o=>this._shimmedLocalStreams[o][0])};let e=t.RTCPeerConnection.prototype.addTrack;t.RTCPeerConnection.prototype.addTrack=function(o,a){if(!a)return e.apply(this,arguments);this._shimmedLocalStreams=this._shimmedLocalStreams||{};let f=e.apply(this,arguments);return this._shimmedLocalStreams[a.id]?this._shimmedLocalStreams[a.id].indexOf(f)===-1&&this._shimmedLocalStreams[a.id].push(f):this._shimmedLocalStreams[a.id]=[a,f],f};let r=t.RTCPeerConnection.prototype.addStream;t.RTCPeerConnection.prototype.addStream=function(o){this._shimmedLocalStreams=this._shimmedLocalStreams||{},o.getTracks().forEach(c=>{if(this.getSenders().find(p=>p.track===c))throw new DOMException("Track already exists.","InvalidAccessError")});let a=this.getSenders();r.apply(this,arguments);let f=this.getSenders().filter(c=>a.indexOf(c)===-1);this._shimmedLocalStreams[o.id]=[o].concat(f);};let n=t.RTCPeerConnection.prototype.removeStream;t.RTCPeerConnection.prototype.removeStream=function(o){return this._shimmedLocalStreams=this._shimmedLocalStreams||{},delete this._shimmedLocalStreams[o.id],n.apply(this,arguments)};let i=t.RTCPeerConnection.prototype.removeTrack;t.RTCPeerConnection.prototype.removeTrack=function(o){return this._shimmedLocalStreams=this._shimmedLocalStreams||{},o&&Object.keys(this._shimmedLocalStreams).forEach(a=>{let f=this._shimmedLocalStreams[a].indexOf(o);f!==-1&&this._shimmedLocalStreams[a].splice(f,1),this._shimmedLocalStreams[a].length===1&&delete this._shimmedLocalStreams[a];}),i.apply(this,arguments)};}function ze(t,e){if(!t.RTCPeerConnection)return;if(t.RTCPeerConnection.prototype.addTrack&&e.version>=65)return wt(t);let r=t.RTCPeerConnection.prototype.getLocalStreams;t.RTCPeerConnection.prototype.getLocalStreams=function(){let h=r.apply(this);return this._reverseStreams=this._reverseStreams||{},h.map(p=>this._reverseStreams[p.id])};let n=t.RTCPeerConnection.prototype.addStream;t.RTCPeerConnection.prototype.addStream=function(h){if(this._streams=this._streams||{},this._reverseStreams=this._reverseStreams||{},h.getTracks().forEach(p=>{if(this.getSenders().find(m=>m.track===p))throw new DOMException("Track already exists.","InvalidAccessError")}),!this._reverseStreams[h.id]){let p=new t.MediaStream(h.getTracks());this._streams[h.id]=p,this._reverseStreams[p.id]=h,h=p;}n.apply(this,[h]);};let i=t.RTCPeerConnection.prototype.removeStream;t.RTCPeerConnection.prototype.removeStream=function(h){this._streams=this._streams||{},this._reverseStreams=this._reverseStreams||{},i.apply(this,[this._streams[h.id]||h]),delete this._reverseStreams[this._streams[h.id]?this._streams[h.id].id:h.id],delete this._streams[h.id];},t.RTCPeerConnection.prototype.addTrack=function(h,p){if(this.signalingState==="closed")throw new DOMException("The RTCPeerConnection's signalingState is 'closed'.","InvalidStateError");let l=[].slice.call(arguments,1);if(l.length!==1||!l[0].getTracks().find(y=>y===h))throw new DOMException("The adapter.js addTrack polyfill only supports a single  stream which is associated with the specified track.","NotSupportedError");if(this.getSenders().find(y=>y.track===h))throw new DOMException("Track already exists.","InvalidAccessError");this._streams=this._streams||{},this._reverseStreams=this._reverseStreams||{};let g=this._streams[p.id];if(g)g.addTrack(h),Promise.resolve().then(()=>{this.dispatchEvent(new Event("negotiationneeded"));});else {let y=new t.MediaStream([h]);this._streams[p.id]=y,this._reverseStreams[y.id]=p,this.addStream(y);}return this.getSenders().find(y=>y.track===h)};function s(c,h){let p=h.sdp;return Object.keys(c._reverseStreams||[]).forEach(l=>{let m=c._reverseStreams[l],g=c._streams[m.id];p=p.replace(new RegExp(g.id,"g"),m.id);}),new RTCSessionDescription({type:h.type,sdp:p})}function o(c,h){let p=h.sdp;return Object.keys(c._reverseStreams||[]).forEach(l=>{let m=c._reverseStreams[l],g=c._streams[m.id];p=p.replace(new RegExp(m.id,"g"),g.id);}),new RTCSessionDescription({type:h.type,sdp:p})}["createOffer","createAnswer"].forEach(function(c){let h=t.RTCPeerConnection.prototype[c],p={[c](){let l=arguments;return arguments.length&&typeof arguments[0]=="function"?h.apply(this,[g=>{let y=s(this,g);l[0].apply(null,[y]);},g=>{l[1]&&l[1].apply(null,g);},arguments[2]]):h.apply(this,arguments).then(g=>s(this,g))}};t.RTCPeerConnection.prototype[c]=p[c];});let a=t.RTCPeerConnection.prototype.setLocalDescription;t.RTCPeerConnection.prototype.setLocalDescription=function(){return !arguments.length||!arguments[0].type?a.apply(this,arguments):(arguments[0]=o(this,arguments[0]),a.apply(this,arguments))};let f=Object.getOwnPropertyDescriptor(t.RTCPeerConnection.prototype,"localDescription");Object.defineProperty(t.RTCPeerConnection.prototype,"localDescription",{get(){let c=f.get.apply(this);return c.type===""?c:s(this,c)}}),t.RTCPeerConnection.prototype.removeTrack=function(h){if(this.signalingState==="closed")throw new DOMException("The RTCPeerConnection's signalingState is 'closed'.","InvalidStateError");if(!h._pc)throw new DOMException("Argument 1 of RTCPeerConnection.removeTrack does not implement interface RTCRtpSender.","TypeError");if(!(h._pc===this))throw new DOMException("Sender was not created by this connection.","InvalidAccessError");this._streams=this._streams||{};let l;Object.keys(this._streams).forEach(m=>{this._streams[m].getTracks().find(y=>h.track===y)&&(l=this._streams[m]);}),l&&(l.getTracks().length===1?this.removeStream(this._reverseStreams[l.id]):l.removeTrack(h.track),this.dispatchEvent(new Event("negotiationneeded")));};}function re(t,e){!t.RTCPeerConnection&&t.webkitRTCPeerConnection&&(t.RTCPeerConnection=t.webkitRTCPeerConnection),t.RTCPeerConnection&&e.version<53&&["setLocalDescription","setRemoteDescription","addIceCandidate"].forEach(function(r){let n=t.RTCPeerConnection.prototype[r],i={[r](){return arguments[0]=new(r==="addIceCandidate"?t.RTCIceCandidate:t.RTCSessionDescription)(arguments[0]),n.apply(this,arguments)}};t.RTCPeerConnection.prototype[r]=i[r];});}function Fe(t,e){T(t,"negotiationneeded",r=>{let n=r.target;if(!((e.version<72||n.getConfiguration&&n.getConfiguration().sdpSemantics==="plan-b")&&n.signalingState!=="stable"))return r});}var oe={};Q(oe,{shimAddTransceiver:()=>Je,shimCreateAnswer:()=>We,shimCreateOffer:()=>Ke,shimGetDisplayMedia:()=>Lt,shimGetParameters:()=>He,shimGetUserMedia:()=>ie,shimOnTrack:()=>Ne,shimPeerConnection:()=>se,shimRTCDataChannel:()=>Ge,shimReceiverGetStats:()=>je,shimRemoveStream:()=>Ve,shimSenderGetStats:()=>$e});function ie(t,e){let r=t&&t.navigator,n=t&&t.MediaStreamTrack;if(r.getUserMedia=function(i,s,o){A("navigator.getUserMedia","navigator.mediaDevices.getUserMedia"),r.mediaDevices.getUserMedia(i).then(s,o);},!(e.version>55&&"autoGainControl"in r.mediaDevices.getSupportedConstraints())){let i=function(o,a,f){a in o&&!(f in o)&&(o[f]=o[a],delete o[a]);},s=r.mediaDevices.getUserMedia.bind(r.mediaDevices);if(r.mediaDevices.getUserMedia=function(o){return typeof o=="object"&&typeof o.audio=="object"&&(o=JSON.parse(JSON.stringify(o)),i(o.audio,"autoGainControl","mozAutoGainControl"),i(o.audio,"noiseSuppression","mozNoiseSuppression")),s(o)},n&&n.prototype.getSettings){let o=n.prototype.getSettings;n.prototype.getSettings=function(){let a=o.apply(this,arguments);return i(a,"mozAutoGainControl","autoGainControl"),i(a,"mozNoiseSuppression","noiseSuppression"),a};}if(n&&n.prototype.applyConstraints){let o=n.prototype.applyConstraints;n.prototype.applyConstraints=function(a){return this.kind==="audio"&&typeof a=="object"&&(a=JSON.parse(JSON.stringify(a)),i(a,"autoGainControl","mozAutoGainControl"),i(a,"noiseSuppression","mozNoiseSuppression")),o.apply(this,[a])};}}}function Lt(t,e){t.navigator.mediaDevices&&"getDisplayMedia"in t.navigator.mediaDevices||t.navigator.mediaDevices&&(t.navigator.mediaDevices.getDisplayMedia=function(n){if(!(n&&n.video)){let i=new DOMException("getDisplayMedia without video constraints is undefined");return i.name="NotFoundError",i.code=8,Promise.reject(i)}return n.video===true?n.video={mediaSource:e}:n.video.mediaSource=e,t.navigator.mediaDevices.getUserMedia(n)});}function Ne(t){typeof t=="object"&&t.RTCTrackEvent&&"receiver"in t.RTCTrackEvent.prototype&&!("transceiver"in t.RTCTrackEvent.prototype)&&Object.defineProperty(t.RTCTrackEvent.prototype,"transceiver",{get(){return {receiver:this.receiver}}});}function se(t,e){if(typeof t!="object"||!(t.RTCPeerConnection||t.mozRTCPeerConnection))return;!t.RTCPeerConnection&&t.mozRTCPeerConnection&&(t.RTCPeerConnection=t.mozRTCPeerConnection),e.version<53&&["setLocalDescription","setRemoteDescription","addIceCandidate"].forEach(function(i){let s=t.RTCPeerConnection.prototype[i],o={[i](){return arguments[0]=new(i==="addIceCandidate"?t.RTCIceCandidate:t.RTCSessionDescription)(arguments[0]),s.apply(this,arguments)}};t.RTCPeerConnection.prototype[i]=o[i];});let r={inboundrtp:"inbound-rtp",outboundrtp:"outbound-rtp",candidatepair:"candidate-pair",localcandidate:"local-candidate",remotecandidate:"remote-candidate"},n=t.RTCPeerConnection.prototype.getStats;t.RTCPeerConnection.prototype.getStats=function(){let[s,o,a]=arguments;return n.apply(this,[s||null]).then(f=>{if(e.version<53&&!o)try{f.forEach(c=>{c.type=r[c.type]||c.type;});}catch(c){if(c.name!=="TypeError")throw c;f.forEach((h,p)=>{f.set(p,Object.assign({},h,{type:r[h.type]||h.type}));});}return f}).then(o,a)};}function $e(t){if(!(typeof t=="object"&&t.RTCPeerConnection&&t.RTCRtpSender)||t.RTCRtpSender&&"getStats"in t.RTCRtpSender.prototype)return;let e=t.RTCPeerConnection.prototype.getSenders;e&&(t.RTCPeerConnection.prototype.getSenders=function(){let i=e.apply(this,[]);return i.forEach(s=>s._pc=this),i});let r=t.RTCPeerConnection.prototype.addTrack;r&&(t.RTCPeerConnection.prototype.addTrack=function(){let i=r.apply(this,arguments);return i._pc=this,i}),t.RTCRtpSender.prototype.getStats=function(){return this.track?this._pc.getStats(this.track):Promise.resolve(new Map)};}function je(t){if(!(typeof t=="object"&&t.RTCPeerConnection&&t.RTCRtpSender)||t.RTCRtpSender&&"getStats"in t.RTCRtpReceiver.prototype)return;let e=t.RTCPeerConnection.prototype.getReceivers;e&&(t.RTCPeerConnection.prototype.getReceivers=function(){let n=e.apply(this,[]);return n.forEach(i=>i._pc=this),n}),T(t,"track",r=>(r.receiver._pc=r.srcElement,r)),t.RTCRtpReceiver.prototype.getStats=function(){return this._pc.getStats(this.track)};}function Ve(t){!t.RTCPeerConnection||"removeStream"in t.RTCPeerConnection.prototype||(t.RTCPeerConnection.prototype.removeStream=function(r){A("removeStream","removeTrack"),this.getSenders().forEach(n=>{n.track&&r.getTracks().includes(n.track)&&this.removeTrack(n);});});}function Ge(t){t.DataChannel&&!t.RTCDataChannel&&(t.RTCDataChannel=t.DataChannel);}function Je(t){if(!(typeof t=="object"&&t.RTCPeerConnection))return;let e=t.RTCPeerConnection.prototype.addTransceiver;e&&(t.RTCPeerConnection.prototype.addTransceiver=function(){this.setParametersPromises=[];let n=arguments[1]&&arguments[1].sendEncodings;n===void 0&&(n=[]),n=[...n];let i=n.length>0;i&&n.forEach(o=>{if("rid"in o&&!/^[a-z0-9]{0,16}$/i.test(o.rid))throw new TypeError("Invalid RID value provided.");if("scaleResolutionDownBy"in o&&!(parseFloat(o.scaleResolutionDownBy)>=1))throw new RangeError("scale_resolution_down_by must be >= 1.0");if("maxFramerate"in o&&!(parseFloat(o.maxFramerate)>=0))throw new RangeError("max_framerate must be >= 0.0")});let s=e.apply(this,arguments);if(i){let{sender:o}=s,a=o.getParameters();(!("encodings"in a)||a.encodings.length===1&&Object.keys(a.encodings[0]).length===0)&&(a.encodings=n,o.sendEncodings=n,this.setParametersPromises.push(o.setParameters(a).then(()=>{delete o.sendEncodings;}).catch(()=>{delete o.sendEncodings;})));}return s});}function He(t){if(!(typeof t=="object"&&t.RTCRtpSender))return;let e=t.RTCRtpSender.prototype.getParameters;e&&(t.RTCRtpSender.prototype.getParameters=function(){let n=e.apply(this,arguments);return "encodings"in n||(n.encodings=[].concat(this.sendEncodings||[{}])),n});}function Ke(t){if(!(typeof t=="object"&&t.RTCPeerConnection))return;let e=t.RTCPeerConnection.prototype.createOffer;t.RTCPeerConnection.prototype.createOffer=function(){return this.setParametersPromises&&this.setParametersPromises.length?Promise.all(this.setParametersPromises).then(()=>e.apply(this,arguments)).finally(()=>{this.setParametersPromises=[];}):e.apply(this,arguments)};}function We(t){if(!(typeof t=="object"&&t.RTCPeerConnection))return;let e=t.RTCPeerConnection.prototype.createAnswer;t.RTCPeerConnection.prototype.createAnswer=function(){return this.setParametersPromises&&this.setParametersPromises.length?Promise.all(this.setParametersPromises).then(()=>e.apply(this,arguments)).finally(()=>{this.setParametersPromises=[];}):e.apply(this,arguments)};}var ae={};Q(ae,{shimAudioContext:()=>rt,shimCallbacksAPI:()=>qe,shimConstraints:()=>Bt,shimCreateOfferLegacy:()=>tt,shimGetUserMedia:()=>Ze,shimLocalStreamsAPI:()=>Ye,shimRTCIceServerUrls:()=>Qe,shimRemoteStreamsAPI:()=>Xe,shimTrackEventTransceiver:()=>et});function Ye(t){if(!(typeof t!="object"||!t.RTCPeerConnection)){if("getLocalStreams"in t.RTCPeerConnection.prototype||(t.RTCPeerConnection.prototype.getLocalStreams=function(){return this._localStreams||(this._localStreams=[]),this._localStreams}),!("addStream"in t.RTCPeerConnection.prototype)){let e=t.RTCPeerConnection.prototype.addTrack;t.RTCPeerConnection.prototype.addStream=function(n){this._localStreams||(this._localStreams=[]),this._localStreams.includes(n)||this._localStreams.push(n),n.getAudioTracks().forEach(i=>e.call(this,i,n)),n.getVideoTracks().forEach(i=>e.call(this,i,n));},t.RTCPeerConnection.prototype.addTrack=function(n,...i){return i&&i.forEach(s=>{this._localStreams?this._localStreams.includes(s)||this._localStreams.push(s):this._localStreams=[s];}),e.apply(this,arguments)};}"removeStream"in t.RTCPeerConnection.prototype||(t.RTCPeerConnection.prototype.removeStream=function(r){this._localStreams||(this._localStreams=[]);let n=this._localStreams.indexOf(r);if(n===-1)return;this._localStreams.splice(n,1);let i=r.getTracks();this.getSenders().forEach(s=>{i.includes(s.track)&&this.removeTrack(s);});});}}function Xe(t){if(!(typeof t!="object"||!t.RTCPeerConnection)&&("getRemoteStreams"in t.RTCPeerConnection.prototype||(t.RTCPeerConnection.prototype.getRemoteStreams=function(){return this._remoteStreams?this._remoteStreams:[]}),!("onaddstream"in t.RTCPeerConnection.prototype))){Object.defineProperty(t.RTCPeerConnection.prototype,"onaddstream",{get(){return this._onaddstream},set(r){this._onaddstream&&(this.removeEventListener("addstream",this._onaddstream),this.removeEventListener("track",this._onaddstreampoly)),this.addEventListener("addstream",this._onaddstream=r),this.addEventListener("track",this._onaddstreampoly=n=>{n.streams.forEach(i=>{if(this._remoteStreams||(this._remoteStreams=[]),this._remoteStreams.includes(i))return;this._remoteStreams.push(i);let s=new Event("addstream");s.stream=i,this.dispatchEvent(s);});});}});let e=t.RTCPeerConnection.prototype.setRemoteDescription;t.RTCPeerConnection.prototype.setRemoteDescription=function(){let n=this;return this._onaddstreampoly||this.addEventListener("track",this._onaddstreampoly=function(i){i.streams.forEach(s=>{if(n._remoteStreams||(n._remoteStreams=[]),n._remoteStreams.indexOf(s)>=0)return;n._remoteStreams.push(s);let o=new Event("addstream");o.stream=s,n.dispatchEvent(o);});}),e.apply(n,arguments)};}}function qe(t){if(typeof t!="object"||!t.RTCPeerConnection)return;let e=t.RTCPeerConnection.prototype,r=e.createOffer,n=e.createAnswer,i=e.setLocalDescription,s=e.setRemoteDescription,o=e.addIceCandidate;e.createOffer=function(c,h){let p=arguments.length>=2?arguments[2]:arguments[0],l=r.apply(this,[p]);return h?(l.then(c,h),Promise.resolve()):l},e.createAnswer=function(c,h){let p=arguments.length>=2?arguments[2]:arguments[0],l=n.apply(this,[p]);return h?(l.then(c,h),Promise.resolve()):l};let a=function(f,c,h){let p=i.apply(this,[f]);return h?(p.then(c,h),Promise.resolve()):p};e.setLocalDescription=a,a=function(f,c,h){let p=s.apply(this,[f]);return h?(p.then(c,h),Promise.resolve()):p},e.setRemoteDescription=a,a=function(f,c,h){let p=o.apply(this,[f]);return h?(p.then(c,h),Promise.resolve()):p},e.addIceCandidate=a;}function Ze(t){let e=t&&t.navigator;if(e.mediaDevices&&e.mediaDevices.getUserMedia){let r=e.mediaDevices,n=r.getUserMedia.bind(r);e.mediaDevices.getUserMedia=i=>n(Bt(i));}!e.getUserMedia&&e.mediaDevices&&e.mediaDevices.getUserMedia&&(e.getUserMedia=function(n,i,s){e.mediaDevices.getUserMedia(n).then(i,s);}.bind(e));}function Bt(t){return t&&t.video!==void 0?Object.assign({},t,{video:Ae(t.video)}):t}function Qe(t){if(!t.RTCPeerConnection)return;let e=t.RTCPeerConnection;t.RTCPeerConnection=function(n,i){if(n&&n.iceServers){let s=[];for(let o=0;o<n.iceServers.length;o++){let a=n.iceServers[o];a.urls===void 0&&a.url?(A("RTCIceServer.url","RTCIceServer.urls"),a=JSON.parse(JSON.stringify(a)),a.urls=a.url,delete a.url,s.push(a)):s.push(n.iceServers[o]);}n.iceServers=s;}return new e(n,i)},t.RTCPeerConnection.prototype=e.prototype,"generateCertificate"in e&&Object.defineProperty(t.RTCPeerConnection,"generateCertificate",{get(){return e.generateCertificate}});}function et(t){typeof t=="object"&&t.RTCTrackEvent&&"receiver"in t.RTCTrackEvent.prototype&&!("transceiver"in t.RTCTrackEvent.prototype)&&Object.defineProperty(t.RTCTrackEvent.prototype,"transceiver",{get(){return {receiver:this.receiver}}});}function tt(t){let e=t.RTCPeerConnection.prototype.createOffer;t.RTCPeerConnection.prototype.createOffer=function(n){if(n){typeof n.offerToReceiveAudio<"u"&&(n.offerToReceiveAudio=!!n.offerToReceiveAudio);let i=this.getTransceivers().find(o=>o.receiver.track.kind==="audio");n.offerToReceiveAudio===false&&i?i.direction==="sendrecv"?i.setDirection?i.setDirection("sendonly"):i.direction="sendonly":i.direction==="recvonly"&&(i.setDirection?i.setDirection("inactive"):i.direction="inactive"):n.offerToReceiveAudio===true&&!i&&this.addTransceiver("audio",{direction:"recvonly"}),typeof n.offerToReceiveVideo<"u"&&(n.offerToReceiveVideo=!!n.offerToReceiveVideo);let s=this.getTransceivers().find(o=>o.receiver.track.kind==="video");n.offerToReceiveVideo===false&&s?s.direction==="sendrecv"?s.setDirection?s.setDirection("sendonly"):s.direction="sendonly":s.direction==="recvonly"&&(s.setDirection?s.setDirection("inactive"):s.direction="inactive"):n.offerToReceiveVideo===true&&!s&&this.addTransceiver("video",{direction:"recvonly"});}return e.apply(this,arguments)};}function rt(t){typeof t!="object"||t.AudioContext||(t.AudioContext=t.webkitAudioContext);}var st={};Q(st,{removeExtmapAllowMixed:()=>he,shimAddIceCandidateNullOrEmpty:()=>j,shimConnectionState:()=>fe,shimMaxMessageSize:()=>N,shimParameterlessSetLocalDescription:()=>V,shimRTCIceCandidate:()=>F,shimRTCIceCandidateRelayProtocol:()=>ce,shimSendThrowTypeError:()=>$});var U=Rt(it());function F(t){if(!t.RTCIceCandidate||t.RTCIceCandidate&&"foundation"in t.RTCIceCandidate.prototype)return;let e=t.RTCIceCandidate;t.RTCIceCandidate=function(n){if(typeof n=="object"&&n.candidate&&n.candidate.indexOf("a=")===0&&(n=JSON.parse(JSON.stringify(n)),n.candidate=n.candidate.substring(2)),n.candidate&&n.candidate.length){let i=new e(n),s=U.default.parseCandidate(n.candidate);for(let o in s)o in i||Object.defineProperty(i,o,{value:s[o]});return i.toJSON=function(){return {candidate:i.candidate,sdpMid:i.sdpMid,sdpMLineIndex:i.sdpMLineIndex,usernameFragment:i.usernameFragment}},i}return new e(n)},t.RTCIceCandidate.prototype=e.prototype,T(t,"icecandidate",r=>(r.candidate&&Object.defineProperty(r,"candidate",{value:new t.RTCIceCandidate(r.candidate),writable:"false"}),r));}function ce(t){!t.RTCIceCandidate||t.RTCIceCandidate&&"relayProtocol"in t.RTCIceCandidate.prototype||T(t,"icecandidate",e=>{if(e.candidate){let r=U.default.parseCandidate(e.candidate.candidate);r.type==="relay"&&(e.candidate.relayProtocol={0:"tls",1:"tcp",2:"udp"}[r.priority>>24]);}return e});}function N(t,e){if(!t.RTCPeerConnection)return;"sctp"in t.RTCPeerConnection.prototype||Object.defineProperty(t.RTCPeerConnection.prototype,"sctp",{get(){return typeof this._sctp>"u"?null:this._sctp}});let r=function(a){if(!a||!a.sdp)return  false;let f=U.default.splitSections(a.sdp);return f.shift(),f.some(c=>{let h=U.default.parseMLine(c);return h&&h.kind==="application"&&h.protocol.indexOf("SCTP")!==-1})},n=function(a){let f=a.sdp.match(/mozilla...THIS_IS_SDPARTA-(\d+)/);if(f===null||f.length<2)return  -1;let c=parseInt(f[1],10);return c!==c?-1:c},i=function(a){let f=65536;return e.browser==="firefox"&&(e.version<57?a===-1?f=16384:f=2147483637:e.version<60?f=e.version===57?65535:65536:f=2147483637),f},s=function(a,f){let c=65536;e.browser==="firefox"&&e.version===57&&(c=65535);let h=U.default.matchPrefix(a.sdp,"a=max-message-size:");return h.length>0?c=parseInt(h[0].substring(19),10):e.browser==="firefox"&&f!==-1&&(c=2147483637),c},o=t.RTCPeerConnection.prototype.setRemoteDescription;t.RTCPeerConnection.prototype.setRemoteDescription=function(){if(this._sctp=null,e.browser==="chrome"&&e.version>=76){let{sdpSemantics:f}=this.getConfiguration();f==="plan-b"&&Object.defineProperty(this,"sctp",{get(){return typeof this._sctp>"u"?null:this._sctp},enumerable:true,configurable:true});}if(r(arguments[0])){let f=n(arguments[0]),c=i(f),h=s(arguments[0],f),p;c===0&&h===0?p=Number.POSITIVE_INFINITY:c===0||h===0?p=Math.max(c,h):p=Math.min(c,h);let l={};Object.defineProperty(l,"maxMessageSize",{get(){return p}}),this._sctp=l;}return o.apply(this,arguments)};}function $(t){if(!(t.RTCPeerConnection&&"createDataChannel"in t.RTCPeerConnection.prototype))return;function e(n,i){let s=n.send;n.send=function(){let a=arguments[0],f=a.length||a.size||a.byteLength;if(n.readyState==="open"&&i.sctp&&f>i.sctp.maxMessageSize)throw new TypeError("Message too large (can send a maximum of "+i.sctp.maxMessageSize+" bytes)");return s.apply(n,arguments)};}let r=t.RTCPeerConnection.prototype.createDataChannel;t.RTCPeerConnection.prototype.createDataChannel=function(){let i=r.apply(this,arguments);return e(i,this),i},T(t,"datachannel",n=>(e(n.channel,n.target),n));}function fe(t){if(!t.RTCPeerConnection||"connectionState"in t.RTCPeerConnection.prototype)return;let e=t.RTCPeerConnection.prototype;Object.defineProperty(e,"connectionState",{get(){return {completed:"connected",checking:"connecting"}[this.iceConnectionState]||this.iceConnectionState},enumerable:true,configurable:true}),Object.defineProperty(e,"onconnectionstatechange",{get(){return this._onconnectionstatechange||null},set(r){this._onconnectionstatechange&&(this.removeEventListener("connectionstatechange",this._onconnectionstatechange),delete this._onconnectionstatechange),r&&this.addEventListener("connectionstatechange",this._onconnectionstatechange=r);},enumerable:true,configurable:true}),["setLocalDescription","setRemoteDescription"].forEach(r=>{let n=e[r];e[r]=function(){return this._connectionstatechangepoly||(this._connectionstatechangepoly=i=>{let s=i.target;if(s._lastConnectionState!==s.connectionState){s._lastConnectionState=s.connectionState;let o=new Event("connectionstatechange",i);s.dispatchEvent(o);}return i},this.addEventListener("iceconnectionstatechange",this._connectionstatechangepoly)),n.apply(this,arguments)};});}function he(t,e){if(!t.RTCPeerConnection||e.browser==="chrome"&&e.version>=71||e.browser==="safari"&&e.version>=605)return;let r=t.RTCPeerConnection.prototype.setRemoteDescription;t.RTCPeerConnection.prototype.setRemoteDescription=function(i){if(i&&i.sdp&&i.sdp.indexOf(`
a=extmap-allow-mixed`)!==-1){let s=i.sdp.split(`
`).filter(o=>o.trim()!=="a=extmap-allow-mixed").join(`
`);t.RTCSessionDescription&&i instanceof t.RTCSessionDescription?arguments[0]=new t.RTCSessionDescription({type:i.type,sdp:s}):i.sdp=s;}return r.apply(this,arguments)};}function j(t,e){if(!(t.RTCPeerConnection&&t.RTCPeerConnection.prototype))return;let r=t.RTCPeerConnection.prototype.addIceCandidate;!r||r.length===0||(t.RTCPeerConnection.prototype.addIceCandidate=function(){return arguments[0]?(e.browser==="chrome"&&e.version<78||e.browser==="firefox"&&e.version<68||e.browser==="safari")&&arguments[0]&&arguments[0].candidate===""?Promise.resolve():r.apply(this,arguments):(arguments[1]&&arguments[1].apply(null),Promise.resolve())});}function V(t,e){if(!(t.RTCPeerConnection&&t.RTCPeerConnection.prototype))return;let r=t.RTCPeerConnection.prototype.setLocalDescription;!r||r.length===0||(t.RTCPeerConnection.prototype.setLocalDescription=function(){let i=arguments[0]||{};if(typeof i!="object"||i.type&&i.sdp)return r.apply(this,arguments);if(i={type:i.type,sdp:i.sdp},!i.type)switch(this.signalingState){case "stable":case "have-local-offer":case "have-remote-pranswer":i.type="offer";break;default:i.type="answer";break}return i.sdp||i.type!=="offer"&&i.type!=="answer"?r.apply(this,[i]):(i.type==="offer"?this.createOffer:this.createAnswer).apply(this).then(o=>r.apply(this,[o]))});}var lr=Rt(it());function zt({window:t}={},e={shimChrome:true,shimFirefox:true,shimSafari:true}){let r=ee,n=Ut(t),i={browserDetails:n,commonShim:st,extractVersion:z,disableLog:Mt,disableWarnings:At,sdp:lr};switch(n.browser){case "chrome":if(!ne||!re||!e.shimChrome)return r("Chrome shim is not included in this adapter release."),i;if(n.version===null)return r("Chrome shim can not determine version, not shimming."),i;r("adapter.js shimming chrome."),i.browserShim=ne,j(t,n),V(t),te(t,n),Oe(t),re(t,n),we(t),ze(t,n),Le(t),Be(t),Fe(t,n),F(t),ce(t),fe(t),N(t,n),$(t),he(t,n);break;case "firefox":if(!oe||!se||!e.shimFirefox)return r("Firefox shim is not included in this adapter release."),i;r("adapter.js shimming firefox."),i.browserShim=oe,j(t,n),V(t),ie(t,n),se(t,n),Ne(t),Ve(t),$e(t),je(t),Ge(t),Je(t),He(t),Ke(t),We(t),F(t),fe(t),N(t,n),$(t);break;case "safari":if(!ae||!e.shimSafari)return r("Safari shim is not included in this adapter release."),i;r("adapter.js shimming safari."),i.browserShim=ae,j(t,n),V(t),Qe(t),tt(t),qe(t),Ye(t),Xe(t),et(t),Ze(t),rt(t),F(t),ce(t),N(t,n),$(t),he(t,n);break;default:r("Unsupported browser!");break}return i}var dr=zt({window:typeof window>"u"?void 0:window}),ot=dr;var R=4294967295;function pe(t,e,r){var n=Math.floor(r/4294967296),i=r;t.setUint32(e,n),t.setUint32(e+4,i);}function ue(t,e){var r=t.getInt32(e),n=t.getUint32(e+4);return r*4294967296+n}var at,ct,ft,le=(typeof __Process$>"u"||((at=__Process$?.env)===null||at===void 0?void 0:at.TEXT_ENCODING)!=="never")&&typeof TextEncoder<"u"&&typeof TextDecoder<"u";var G=le?new TextEncoder:void 0;le?typeof __Process$<"u"&&((ct=__Process$?.env)===null||ct===void 0?void 0:ct.TEXT_ENCODING)!=="force"?200:0:R;function mr(t,e,r){e.set(G.encode(t),r);}function gr(t,e,r){G.encodeInto(t,e.subarray(r));}G?.encodeInto?gr:mr;var yr=4096;function de(t,e,r){for(var n=e,i=n+r,s=[],o="";n<i;){var a=t[n++];if(!(a&128))s.push(a);else if((a&224)===192){var f=t[n++]&63;s.push((a&31)<<6|f);}else if((a&240)===224){var f=t[n++]&63,c=t[n++]&63;s.push((a&31)<<12|f<<6|c);}else if((a&248)===240){var f=t[n++]&63,c=t[n++]&63,h=t[n++]&63,p=(a&7)<<18|f<<12|c<<6|h;p>65535&&(p-=65536,s.push(p>>>10&1023|55296),p=56320|p&1023),s.push(p);}else s.push(a);s.length>=yr&&(o+=String.fromCharCode.apply(String,s),s.length=0);}return s.length>0&&(o+=String.fromCharCode.apply(String,s)),o}le?new TextDecoder:null;le?typeof __Process$<"u"&&((ft=__Process$?.env)===null||ft===void 0?void 0:ft.TEXT_DECODER)!=="force"?200:0:R;var J=function(){function t(e,r){this.type=e,this.data=r;}return t}();var _r=function(){var t=function(e,r){return t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(n,i){n.__proto__=i;}||function(n,i){for(var s in i)Object.prototype.hasOwnProperty.call(i,s)&&(n[s]=i[s]);},t(e,r)};return function(e,r){if(typeof r!="function"&&r!==null)throw new TypeError("Class extends value "+String(r)+" is not a constructor or null");t(e,r);function n(){this.constructor=e;}e.prototype=r===null?Object.create(r):(n.prototype=r.prototype,new n);}}(),b=function(t){_r(e,t);function e(r){var n=t.call(this,r)||this,i=Object.create(e.prototype);return Object.setPrototypeOf(n,i),Object.defineProperty(n,"name",{configurable:true,enumerable:false,value:e.name}),n}return e}(Error);var xr=-1,Cr=4294967296-1,Sr=17179869184-1;function br(t){var e=t.sec,r=t.nsec;if(e>=0&&r>=0&&e<=Sr)if(r===0&&e<=Cr){var n=new Uint8Array(4),i=new DataView(n.buffer);return i.setUint32(0,e),n}else {var s=e/4294967296,o=e&4294967295,n=new Uint8Array(8),i=new DataView(n.buffer);return i.setUint32(0,r<<2|s&3),i.setUint32(4,o),n}else {var n=new Uint8Array(12),i=new DataView(n.buffer);return i.setUint32(0,r),pe(i,4,e),n}}function Tr(t){var e=t.getTime(),r=Math.floor(e/1e3),n=(e-r*1e3)*1e6,i=Math.floor(n/1e9);return {sec:r+i,nsec:n-i*1e9}}function kr(t){if(t instanceof Date){var e=Tr(t);return br(e)}else return null}function Er(t){var e=new DataView(t.buffer,t.byteOffset,t.byteLength);switch(t.byteLength){case 4:{var r=e.getUint32(0),n=0;return {sec:r,nsec:n}}case 8:{var i=e.getUint32(0),s=e.getUint32(4),r=(i&3)*4294967296+s,n=i>>>2;return {sec:r,nsec:n}}case 12:{var r=ue(e,4),n=e.getUint32(0);return {sec:r,nsec:n}}default:throw new b("Unrecognized data size for timestamp (expected 4, 8, or 12): ".concat(t.length))}}function Rr(t){var e=Er(t);return new Date(e.sec*1e3+e.nsec/1e6)}var Ht={type:xr,encode:kr,decode:Rr};(function(){function t(){this.builtInEncoders=[],this.builtInDecoders=[],this.encoders=[],this.decoders=[],this.register(Ht);}return t.prototype.register=function(e){var r=e.type,n=e.encode,i=e.decode;if(r>=0)this.encoders[r]=n,this.decoders[r]=i;else {var s=1+r;this.builtInEncoders[s]=n,this.builtInDecoders[s]=i;}},t.prototype.tryToEncode=function(e,r){for(var n=0;n<this.builtInEncoders.length;n++){var i=this.builtInEncoders[n];if(i!=null){var s=i(e,r);if(s!=null){var o=-1-n;return new J(o,s)}}}for(var n=0;n<this.encoders.length;n++){var i=this.encoders[n];if(i!=null){var s=i(e,r);if(s!=null){var o=n;return new J(o,s)}}}return e instanceof J?e:null},t.prototype.decode=function(e,r,n){var i=r<0?this.builtInDecoders[-1-r]:this.decoders[r];return i?i(e,r,n):new J(r,e)},t.defaultCodec=new t,t})();var Ir=16,Mr=16,Wt=function(){function t(e,r){e===void 0&&(e=Ir),r===void 0&&(r=Mr),this.maxKeyLength=e,this.maxLengthPerKey=r,this.hit=0,this.miss=0,this.caches=[];for(var n=0;n<this.maxKeyLength;n++)this.caches.push([]);}return t.prototype.canBeCached=function(e){return e>0&&e<=this.maxKeyLength},t.prototype.find=function(e,r,n){var i=this.caches[n-1];e:for(var s=0,o=i;s<o.length;s++){for(var a=o[s],f=a.bytes,c=0;c<n;c++)if(f[c]!==e[r+c])continue e;return a.str}return null},t.prototype.store=function(e,r){var n=this.caches[e.length-1],i={bytes:e,str:r};n.length>=this.maxLengthPerKey?n[Math.random()*n.length|0]=i:n.push(i);},t.prototype.decode=function(e,r,n){var i=this.find(e,r,n);if(i!=null)return this.hit++,i;this.miss++;var s=de(e,r,n),o=Uint8Array.prototype.slice.call(e,r,r+n);return this.store(o,s),s},t}();var dt=new DataView(new ArrayBuffer(0));new Uint8Array(dt.buffer);var lt=function(){try{dt.getInt8(0);}catch(t){return t.constructor}throw new Error("never reached")}();new lt("Insufficient data");new Wt;function I(t,e,r,n){Object.defineProperty(t,e,{get:r,set:n,enumerable:true,configurable:true});}var ve=class{constructor(){this.chunkedMTU=16300,this._dataCount=1,this.chunk=e=>{let r=[],n=e.byteLength,i=Math.ceil(n/this.chunkedMTU),s=0,o=0;for(;o<n;){let a=Math.min(n,o+this.chunkedMTU),f=e.slice(o,a),c={__peerData:this._dataCount,n:s,data:f,total:i};r.push(c),o=a,s++;}return this._dataCount++,r};}};function jr(t){let e=0;for(let i of t)e+=i.byteLength;let r=new Uint8Array(e),n=0;for(let i of t)r.set(i,n),n+=i.byteLength;return r}var gt=ot.default||ot,K=new class{isWebRTCSupported(){return typeof RTCPeerConnection<"u"}isBrowserSupported(){let t=this.getBrowser(),e=this.getVersion();return this.supportedBrowsers.includes(t)?t==="chrome"?e>=this.minChromeVersion:t==="firefox"?e>=this.minFirefoxVersion:t==="safari"?!this.isIOS&&e>=this.minSafariVersion:false:false}getBrowser(){return gt.browserDetails.browser}getVersion(){return gt.browserDetails.version||0}isUnifiedPlanSupported(){let t=this.getBrowser(),e=gt.browserDetails.version||0;if(t==="chrome"&&e<this.minChromeVersion)return  false;if(t==="firefox"&&e>=this.minFirefoxVersion)return  true;if(!window.RTCRtpTransceiver||!("currentDirection"in RTCRtpTransceiver.prototype))return  false;let r,n=false;try{r=new RTCPeerConnection,r.addTransceiver("audio"),n=!0;}catch{}finally{r&&r.close();}return n}toString(){return `Supports:
    browser:${this.getBrowser()}
    version:${this.getVersion()}
    isIOS:${this.isIOS}
    isWebRTCSupported:${this.isWebRTCSupported()}
    isBrowserSupported:${this.isBrowserSupported()}
    isUnifiedPlanSupported:${this.isUnifiedPlanSupported()}`}constructor(){this.isIOS=typeof navigator<"u"?["iPad","iPhone","iPod"].includes(navigator.platform):false,this.supportedBrowsers=["firefox","chrome","safari"],this.minFirefoxVersion=59,this.minChromeVersion=72,this.minSafariVersion=605;}},Vr=t=>!t||/^[A-Za-z0-9]+(?:[ _-][A-Za-z0-9]+)*$/.test(t),nr=()=>Math.random().toString(36).slice(2),er={iceServers:[{urls:"stun:stun.l.google.com:19302"},{urls:["turn:eu-0.turn.peerjs.com:3478","turn:us-0.turn.peerjs.com:3478"],username:"peerjs",credential:"peerjsp"}],sdpSemantics:"unified-plan"},yt=class extends ve{noop(){}blobToArrayBuffer(e,r){let n=new FileReader;return n.onload=function(i){i.target&&r(i.target.result);},n.readAsArrayBuffer(e),n}binaryStringToArrayBuffer(e){let r=new Uint8Array(e.length);for(let n=0;n<e.length;n++)r[n]=e.charCodeAt(n)&255;return r.buffer}isSecure(){return location.protocol==="https:"}constructor(...e){super(...e),this.CLOUD_HOST="0.peerjs.com",this.CLOUD_PORT=443,this.chunkedBrowsers={Chrome:1,chrome:1},this.defaultConfig=er,this.browser=K.getBrowser(),this.browserVersion=K.getVersion(),this.pack=Ie,this.unpack=De,this.supports=function(){let r={browser:K.isBrowserSupported(),webRTC:K.isWebRTCSupported(),audioVideo:false,data:false,binaryBlob:false,reliable:false};if(!r.webRTC)return r;let n;try{n=new RTCPeerConnection(er),r.audioVideo=!0;let i;try{i=n.createDataChannel("_PEERJSTEST",{ordered:!0}),r.data=!0,r.reliable=!!i.ordered;try{i.binaryType="blob",r.binaryBlob=!K.isIOS;}catch{}}catch{}finally{i&&i.close();}}catch{}finally{n&&n.close();}return r}(),this.validateId=Vr,this.randomToken=nr;}},S=new yt,Gr="PeerJS: ",tr;(function(t){t[t.Disabled=0]="Disabled",t[t.Errors=1]="Errors",t[t.Warnings=2]="Warnings",t[t.All=3]="All";})(tr||(tr={}));var vt=class{get logLevel(){return this._logLevel}set logLevel(e){this._logLevel=e;}log(...e){this._logLevel>=3&&this._print(3,...e);}warn(...e){this._logLevel>=2&&this._print(2,...e);}error(...e){this._logLevel>=1&&this._print(1,...e);}setLogFunction(e){this._print=e;}_print(e,...r){let n=[Gr,...r];for(let i in n)n[i]instanceof Error&&(n[i]="("+n[i].name+") "+n[i].message);e>=3?console.log(...n):e>=2?console.warn("WARNING",...n):e>=1&&console.error("ERROR",...n);}constructor(){this._logLevel=0;}},d=new vt,kt={},Jr=Object.prototype.hasOwnProperty,C="~";function Y(){}Object.create&&(Y.prototype=Object.create(null),new Y().__proto__||(C=false));function Hr(t,e,r){this.fn=t,this.context=e,this.once=r||false;}function ir(t,e,r,n,i){if(typeof r!="function")throw new TypeError("The listener must be a function");var s=new Hr(r,n||t,i),o=C?C+e:e;return t._events[o]?t._events[o].fn?t._events[o]=[t._events[o],s]:t._events[o].push(s):(t._events[o]=s,t._eventsCount++),t}function ye(t,e){--t._eventsCount===0?t._events=new Y:delete t._events[e];}function x(){this._events=new Y,this._eventsCount=0;}x.prototype.eventNames=function(){var e=[],r,n;if(this._eventsCount===0)return e;for(n in r=this._events)Jr.call(r,n)&&e.push(C?n.slice(1):n);return Object.getOwnPropertySymbols?e.concat(Object.getOwnPropertySymbols(r)):e};x.prototype.listeners=function(e){var r=C?C+e:e,n=this._events[r];if(!n)return [];if(n.fn)return [n.fn];for(var i=0,s=n.length,o=new Array(s);i<s;i++)o[i]=n[i].fn;return o};x.prototype.listenerCount=function(e){var r=C?C+e:e,n=this._events[r];return n?n.fn?1:n.length:0};x.prototype.emit=function(e,r,n,i,s,o){var a=C?C+e:e;if(!this._events[a])return  false;var f=this._events[a],c=arguments.length,h,p;if(f.fn){switch(f.once&&this.removeListener(e,f.fn,void 0,true),c){case 1:return f.fn.call(f.context),true;case 2:return f.fn.call(f.context,r),true;case 3:return f.fn.call(f.context,r,n),true;case 4:return f.fn.call(f.context,r,n,i),true;case 5:return f.fn.call(f.context,r,n,i,s),true;case 6:return f.fn.call(f.context,r,n,i,s,o),true}for(p=1,h=new Array(c-1);p<c;p++)h[p-1]=arguments[p];f.fn.apply(f.context,h);}else {var l=f.length,m;for(p=0;p<l;p++)switch(f[p].once&&this.removeListener(e,f[p].fn,void 0,true),c){case 1:f[p].fn.call(f[p].context);break;case 2:f[p].fn.call(f[p].context,r);break;case 3:f[p].fn.call(f[p].context,r,n);break;case 4:f[p].fn.call(f[p].context,r,n,i);break;default:if(!h)for(m=1,h=new Array(c-1);m<c;m++)h[m-1]=arguments[m];f[p].fn.apply(f[p].context,h);}}return  true};x.prototype.on=function(e,r,n){return ir(this,e,r,n,false)};x.prototype.once=function(e,r,n){return ir(this,e,r,n,true)};x.prototype.removeListener=function(e,r,n,i){var s=C?C+e:e;if(!this._events[s])return this;if(!r)return ye(this,s),this;var o=this._events[s];if(o.fn)o.fn===r&&(!i||o.once)&&(!n||o.context===n)&&ye(this,s);else {for(var a=0,f=[],c=o.length;a<c;a++)(o[a].fn!==r||i&&!o[a].once||n&&o[a].context!==n)&&f.push(o[a]);f.length?this._events[s]=f.length===1?f[0]:f:ye(this,s);}return this};x.prototype.removeAllListeners=function(e){var r;return e?(r=C?C+e:e,this._events[r]&&ye(this,r)):(this._events=new Y,this._eventsCount=0),this};x.prototype.off=x.prototype.removeListener;x.prototype.addListener=x.prototype.on;x.prefixed=C;x.EventEmitter=x;kt=x;var M={};I(M,"ConnectionType",()=>E);I(M,"PeerErrorType",()=>v);I(M,"BaseConnectionErrorType",()=>X);I(M,"DataConnectionErrorType",()=>q);I(M,"SerializationType",()=>B);I(M,"SocketEventType",()=>k);I(M,"ServerMessageType",()=>_);var E;(function(t){t.Data="data",t.Media="media";})(E||(E={}));var v;(function(t){t.BrowserIncompatible="browser-incompatible",t.Disconnected="disconnected",t.InvalidID="invalid-id",t.InvalidKey="invalid-key",t.Network="network",t.PeerUnavailable="peer-unavailable",t.SslUnavailable="ssl-unavailable",t.ServerError="server-error",t.SocketError="socket-error",t.SocketClosed="socket-closed",t.UnavailableID="unavailable-id",t.WebRTC="webrtc";})(v||(v={}));var X;(function(t){t.NegotiationFailed="negotiation-failed",t.ConnectionClosed="connection-closed";})(X||(X={}));var q;(function(t){t.NotOpenYet="not-open-yet",t.MessageToBig="message-too-big";})(q||(q={}));var B;(function(t){t.Binary="binary",t.BinaryUTF8="binary-utf8",t.JSON="json",t.None="raw";})(B||(B={}));var k;(function(t){t.Message="message",t.Disconnected="disconnected",t.Error="error",t.Close="close";})(k||(k={}));var _;(function(t){t.Heartbeat="HEARTBEAT",t.Candidate="CANDIDATE",t.Offer="OFFER",t.Answer="ANSWER",t.Open="OPEN",t.Error="ERROR",t.IdTaken="ID-TAKEN",t.InvalidKey="INVALID-KEY",t.Leave="LEAVE",t.Expire="EXPIRE";})(_||(_={}));var Et={};Et=JSON.parse('{"name":"peerjs","version":"1.5.4","keywords":["peerjs","webrtc","p2p","rtc"],"description":"PeerJS client","homepage":"https://peerjs.com","bugs":{"url":"https://github.com/peers/peerjs/issues"},"repository":{"type":"git","url":"https://github.com/peers/peerjs"},"license":"MIT","contributors":["Michelle Bu <michelle@michellebu.com>","afrokick <devbyru@gmail.com>","ericz <really.ez@gmail.com>","Jairo <kidandcat@gmail.com>","Jonas Gloning <34194370+jonasgloning@users.noreply.github.com>","Jairo Caro-Accino Viciana <jairo@galax.be>","Carlos Caballero <carlos.caballero.gonzalez@gmail.com>","hc <hheennrryy@gmail.com>","Muhammad Asif <capripio@gmail.com>","PrashoonB <prashoonbhattacharjee@gmail.com>","Harsh Bardhan Mishra <47351025+HarshCasper@users.noreply.github.com>","akotynski <aleksanderkotbury@gmail.com>","lmb <i@lmb.io>","Jairooo <jairocaro@msn.com>","Moritz St\xFCckler <moritz.stueckler@gmail.com>","Simon <crydotsnakegithub@gmail.com>","Denis Lukov <denismassters@gmail.com>","Philipp Hancke <fippo@andyet.net>","Hans Oksendahl <hansoksendahl@gmail.com>","Jess <jessachandler@gmail.com>","khankuan <khankuan@gmail.com>","DUODVK <kurmanov.work@gmail.com>","XiZhao <kwang1imsa@gmail.com>","Matthias Lohr <matthias@lohr.me>","=frank tree <=frnktrb@googlemail.com>","Andre Eckardt <aeckardt@outlook.com>","Chris Cowan <agentme49@gmail.com>","Alex Chuev <alex@chuev.com>","alxnull <alxnull@e.mail.de>","Yemel Jardi <angel.jardi@gmail.com>","Ben Parnell <benjaminparnell.94@gmail.com>","Benny Lichtner <bennlich@gmail.com>","fresheneesz <bitetrudpublic@gmail.com>","bob.barstead@exaptive.com <bob.barstead@exaptive.com>","chandika <chandika@gmail.com>","emersion <contact@emersion.fr>","Christopher Van <cvan@users.noreply.github.com>","eddieherm <edhermoso@gmail.com>","Eduardo Pinho <enet4mikeenet@gmail.com>","Evandro Zanatta <ezanatta@tray.net.br>","Gardner Bickford <gardner@users.noreply.github.com>","Gian Luca <gianluca.cecchi@cynny.com>","PatrickJS <github@gdi2290.com>","jonnyf <github@jonathanfoss.co.uk>","Hizkia Felix <hizkifw@gmail.com>","Hristo Oskov <hristo.oskov@gmail.com>","Isaac Madwed <i.madwed@gmail.com>","Ilya Konanykhin <ilya.konanykhin@gmail.com>","jasonbarry <jasbarry@me.com>","Jonathan Burke <jonathan.burke.1311@googlemail.com>","Josh Hamit <josh.hamit@gmail.com>","Jordan Austin <jrax86@gmail.com>","Joel Wetzell <jwetzell@yahoo.com>","xizhao <kevin.wang@cloudera.com>","Alberto Torres <kungfoobar@gmail.com>","Jonathan Mayol <mayoljonathan@gmail.com>","Jefferson Felix <me@jsfelix.dev>","Rolf Erik Lekang <me@rolflekang.com>","Kevin Mai-Husan Chia <mhchia@users.noreply.github.com>","Pepijn de Vos <pepijndevos@gmail.com>","JooYoung <qkdlql@naver.com>","Tobias Speicher <rootcommander@gmail.com>","Steve Blaurock <sblaurock@gmail.com>","Kyrylo Shegeda <shegeda@ualberta.ca>","Diwank Singh Tomer <singh@diwank.name>","So\u0308ren Balko <Soeren.Balko@gmail.com>","Arpit Solanki <solankiarpit1997@gmail.com>","Yuki Ito <yuki@gnnk.net>","Artur Zayats <zag2art@gmail.com>"],"funding":{"type":"opencollective","url":"https://opencollective.com/peer"},"collective":{"type":"opencollective","url":"https://opencollective.com/peer"},"files":["dist/*"],"sideEffects":["lib/global.ts","lib/supports.ts"],"main":"dist/bundler.cjs","module":"dist/bundler.mjs","browser-minified":"dist/peerjs.min.js","browser-unminified":"dist/peerjs.js","browser-minified-msgpack":"dist/serializer.msgpack.mjs","types":"dist/types.d.ts","engines":{"node":">= 14"},"targets":{"types":{"source":"lib/exports.ts"},"main":{"source":"lib/exports.ts","sourceMap":{"inlineSources":true}},"module":{"source":"lib/exports.ts","includeNodeModules":["eventemitter3"],"sourceMap":{"inlineSources":true}},"browser-minified":{"context":"browser","outputFormat":"global","optimize":true,"engines":{"browsers":"chrome >= 83, edge >= 83, firefox >= 80, safari >= 15"},"source":"lib/global.ts"},"browser-unminified":{"context":"browser","outputFormat":"global","optimize":false,"engines":{"browsers":"chrome >= 83, edge >= 83, firefox >= 80, safari >= 15"},"source":"lib/global.ts"},"browser-minified-msgpack":{"context":"browser","outputFormat":"esmodule","isLibrary":true,"optimize":true,"engines":{"browsers":"chrome >= 83, edge >= 83, firefox >= 102, safari >= 15"},"source":"lib/dataconnection/StreamConnection/MsgPack.ts"}},"scripts":{"contributors":"git-authors-cli --print=false && prettier --write package.json && git add package.json package-lock.json && git commit -m \\"chore(contributors): update and sort contributors list\\"","check":"tsc --noEmit && tsc -p e2e/tsconfig.json --noEmit","watch":"parcel watch","build":"rm -rf dist && parcel build","prepublishOnly":"npm run build","test":"jest","test:watch":"jest --watch","coverage":"jest --coverage --collectCoverageFrom=\\"./lib/**\\"","format":"prettier --write .","format:check":"prettier --check .","semantic-release":"semantic-release","e2e":"wdio run e2e/wdio.local.conf.ts","e2e:bstack":"wdio run e2e/wdio.bstack.conf.ts"},"devDependencies":{"@parcel/config-default":"^2.9.3","@parcel/packager-ts":"^2.9.3","@parcel/transformer-typescript-tsc":"^2.9.3","@parcel/transformer-typescript-types":"^2.9.3","@semantic-release/changelog":"^6.0.1","@semantic-release/git":"^10.0.1","@swc/core":"^1.3.27","@swc/jest":"^0.2.24","@types/jasmine":"^4.3.4","@wdio/browserstack-service":"^8.11.2","@wdio/cli":"^8.11.2","@wdio/globals":"^8.11.2","@wdio/jasmine-framework":"^8.11.2","@wdio/local-runner":"^8.11.2","@wdio/spec-reporter":"^8.11.2","@wdio/types":"^8.10.4","http-server":"^14.1.1","jest":"^29.3.1","jest-environment-jsdom":"^29.3.1","mock-socket":"^9.0.0","parcel":"^2.9.3","prettier":"^3.0.0","semantic-release":"^21.0.0","ts-node":"^10.9.1","typescript":"^5.0.0","wdio-geckodriver-service":"^5.0.1"},"dependencies":{"@msgpack/msgpack":"^2.8.0","eventemitter3":"^4.0.7","peerjs-js-binarypack":"^2.1.0","webrtc-adapter":"^9.0.0"},"alias":{"process":false,"buffer":false}}');var _t=class extends kt.EventEmitter{constructor(e,r,n,i,s,o=5e3){super(),this.pingInterval=o,this._disconnected=true,this._messagesQueue=[];let a=e?"wss://":"ws://";this._baseUrl=a+r+":"+n+i+"peerjs?key="+s;}start(e,r){this._id=e;let n=`${this._baseUrl}&id=${e}&token=${r}`;this._socket||!this._disconnected||(this._socket=new WebSocket(n+"&version="+Et.version),this._disconnected=false,this._socket.onmessage=i=>{let s;try{s=JSON.parse(i.data),d.log("Server message received:",s);}catch{d.log("Invalid server message",i.data);return}this.emit(k.Message,s);},this._socket.onclose=i=>{this._disconnected||(d.log("Socket closed.",i),this._cleanup(),this._disconnected=true,this.emit(k.Disconnected));},this._socket.onopen=()=>{this._disconnected||(this._sendQueuedMessages(),d.log("Socket open"),this._scheduleHeartbeat());});}_scheduleHeartbeat(){this._wsPingTimer=setTimeout(()=>{this._sendHeartbeat();},this.pingInterval);}_sendHeartbeat(){if(!this._wsOpen()){d.log("Cannot send heartbeat, because socket closed");return}let e=JSON.stringify({type:_.Heartbeat});this._socket.send(e),this._scheduleHeartbeat();}_wsOpen(){return !!this._socket&&this._socket.readyState===1}_sendQueuedMessages(){let e=[...this._messagesQueue];this._messagesQueue=[];for(let r of e)this.send(r);}send(e){if(this._disconnected)return;if(!this._id){this._messagesQueue.push(e);return}if(!e.type){this.emit(k.Error,"Invalid message");return}if(!this._wsOpen())return;let r=JSON.stringify(e);this._socket.send(r);}close(){this._disconnected||(this._cleanup(),this._disconnected=true);}_cleanup(){this._socket&&(this._socket.onopen=this._socket.onmessage=this._socket.onclose=null,this._socket.close(),this._socket=void 0),clearTimeout(this._wsPingTimer);}},_e=class{constructor(e){this.connection=e;}startConnection(e){let r=this._startPeerConnection();if(this.connection.peerConnection=r,this.connection.type===E.Media&&e._stream&&this._addTracksToConnection(e._stream,r),e.originator){let n=this.connection,i={ordered:!!e.reliable},s=r.createDataChannel(n.label,i);n._initializeDataChannel(s),this._makeOffer();}else this.handleSDP("OFFER",e.sdp);}_startPeerConnection(){d.log("Creating RTCPeerConnection.");let e=new RTCPeerConnection(this.connection.provider.options.config);return this._setupListeners(e),e}_setupListeners(e){let r=this.connection.peer,n=this.connection.connectionId,i=this.connection.type,s=this.connection.provider;d.log("Listening for ICE candidates."),e.onicecandidate=o=>{!o.candidate||!o.candidate.candidate||(d.log(`Received ICE candidates for ${r}:`,o.candidate),s.socket.send({type:_.Candidate,payload:{candidate:o.candidate,type:i,connectionId:n},dst:r}));},e.oniceconnectionstatechange=()=>{switch(e.iceConnectionState){case "failed":d.log("iceConnectionState is failed, closing connections to "+r),this.connection.emitError(X.NegotiationFailed,"Negotiation of connection to "+r+" failed."),this.connection.close();break;case "closed":d.log("iceConnectionState is closed, closing connections to "+r),this.connection.emitError(X.ConnectionClosed,"Connection to "+r+" closed."),this.connection.close();break;case "disconnected":d.log("iceConnectionState changed to disconnected on the connection with "+r);break;case "completed":e.onicecandidate=()=>{};break}this.connection.emit("iceStateChanged",e.iceConnectionState);},d.log("Listening for data channel"),e.ondatachannel=o=>{d.log("Received data channel");let a=o.channel;s.getConnection(r,n)._initializeDataChannel(a);},d.log("Listening for remote stream"),e.ontrack=o=>{d.log("Received remote stream");let a=o.streams[0],f=s.getConnection(r,n);if(f.type===E.Media){let c=f;this._addStreamToMediaConnection(a,c);}};}cleanup(){d.log("Cleaning up PeerConnection to "+this.connection.peer);let e=this.connection.peerConnection;if(!e)return;this.connection.peerConnection=null,e.onicecandidate=e.oniceconnectionstatechange=e.ondatachannel=e.ontrack=()=>{};let r=e.signalingState!=="closed",n=false,i=this.connection.dataChannel;i&&(n=!!i.readyState&&i.readyState!=="closed"),(r||n)&&e.close();}async _makeOffer(){let e=this.connection.peerConnection,r=this.connection.provider;try{let n=await e.createOffer(this.connection.options.constraints);d.log("Created offer."),this.connection.options.sdpTransform&&typeof this.connection.options.sdpTransform=="function"&&(n.sdp=this.connection.options.sdpTransform(n.sdp)||n.sdp);try{await e.setLocalDescription(n),d.log("Set localDescription:",n,`for:${this.connection.peer}`);let i={sdp:n,type:this.connection.type,connectionId:this.connection.connectionId,metadata:this.connection.metadata};if(this.connection.type===E.Data){let s=this.connection;i={...i,label:s.label,reliable:s.reliable,serialization:s.serialization};}r.socket.send({type:_.Offer,payload:i,dst:this.connection.peer});}catch(i){i!="OperationError: Failed to set local offer sdp: Called in wrong state: kHaveRemoteOffer"&&(r.emitError(v.WebRTC,i),d.log("Failed to setLocalDescription, ",i));}}catch(n){r.emitError(v.WebRTC,n),d.log("Failed to createOffer, ",n);}}async _makeAnswer(){let e=this.connection.peerConnection,r=this.connection.provider;try{let n=await e.createAnswer();d.log("Created answer."),this.connection.options.sdpTransform&&typeof this.connection.options.sdpTransform=="function"&&(n.sdp=this.connection.options.sdpTransform(n.sdp)||n.sdp);try{await e.setLocalDescription(n),d.log("Set localDescription:",n,`for:${this.connection.peer}`),r.socket.send({type:_.Answer,payload:{sdp:n,type:this.connection.type,connectionId:this.connection.connectionId},dst:this.connection.peer});}catch(i){r.emitError(v.WebRTC,i),d.log("Failed to setLocalDescription, ",i);}}catch(n){r.emitError(v.WebRTC,n),d.log("Failed to create answer, ",n);}}async handleSDP(e,r){r=new RTCSessionDescription(r);let n=this.connection.peerConnection,i=this.connection.provider;d.log("Setting remote description",r);let s=this;try{await n.setRemoteDescription(r),d.log(`Set remoteDescription:${e} for:${this.connection.peer}`),e==="OFFER"&&await s._makeAnswer();}catch(o){i.emitError(v.WebRTC,o),d.log("Failed to setRemoteDescription, ",o);}}async handleCandidate(e){d.log("handleCandidate:",e);try{await this.connection.peerConnection.addIceCandidate(e),d.log(`Added ICE candidate for:${this.connection.peer}`);}catch(r){this.connection.provider.emitError(v.WebRTC,r),d.log("Failed to handleCandidate, ",r);}}_addTracksToConnection(e,r){if(d.log(`add tracks from stream ${e.id} to peer connection`),!r.addTrack)return d.error("Your browser does't support RTCPeerConnection#addTrack. Ignored.");e.getTracks().forEach(n=>{r.addTrack(n,e);});}_addStreamToMediaConnection(e,r){d.log(`add stream ${e.id} to media connection ${r.connectionId}`),r.addStream(e);}},xe=class extends kt.EventEmitter{emitError(e,r){d.error("Error:",r),this.emit("error",new xt(`${e}`,r));}},xt=class extends Error{constructor(e,r){typeof r=="string"?super(r):(super(),Object.assign(this,r)),this.type=e;}},Ce=class extends xe{get open(){return this._open}constructor(e,r,n){super(),this.peer=e,this.provider=r,this.options=n,this._open=false,this.metadata=n.metadata;}},Se=class t extends Ce{static#e=this.ID_PREFIX="mc_";get type(){return E.Media}get localStream(){return this._localStream}get remoteStream(){return this._remoteStream}constructor(e,r,n){super(e,r,n),this._localStream=this.options._stream,this.connectionId=this.options.connectionId||t.ID_PREFIX+S.randomToken(),this._negotiator=new _e(this),this._localStream&&this._negotiator.startConnection({_stream:this._localStream,originator:true});}_initializeDataChannel(e){this.dataChannel=e,this.dataChannel.onopen=()=>{d.log(`DC#${this.connectionId} dc connection success`),this.emit("willCloseOnRemote");},this.dataChannel.onclose=()=>{d.log(`DC#${this.connectionId} dc closed for:`,this.peer),this.close();};}addStream(e){d.log("Receiving stream",e),this._remoteStream=e,super.emit("stream",e);}handleMessage(e){let r=e.type,n=e.payload;switch(e.type){case _.Answer:this._negotiator.handleSDP(r,n.sdp),this._open=true;break;case _.Candidate:this._negotiator.handleCandidate(n.candidate);break;default:d.warn(`Unrecognized message type:${r} from peer:${this.peer}`);break}}answer(e,r={}){if(this._localStream){d.warn("Local stream already exists on this MediaConnection. Are you answering a call twice?");return}this._localStream=e,r&&r.sdpTransform&&(this.options.sdpTransform=r.sdpTransform),this._negotiator.startConnection({...this.options._payload,_stream:e});let n=this.provider._getMessages(this.connectionId);for(let i of n)this.handleMessage(i);this._open=true;}close(){this._negotiator&&(this._negotiator.cleanup(),this._negotiator=null),this._localStream=null,this._remoteStream=null,this.provider&&(this.provider._removeConnection(this),this.provider=null),this.options&&this.options._stream&&(this.options._stream=null),this.open&&(this._open=false,super.emit("close"));}},Ct=class{constructor(e){this._options=e;}_buildRequest(e){let r=this._options.secure?"https":"http",{host:n,port:i,path:s,key:o}=this._options,a=new URL(`${r}://${n}:${i}${s}${o}/${e}`);return a.searchParams.set("ts",`${Date.now()}${Math.random()}`),a.searchParams.set("version",Et.version),fetch(a.href,{referrerPolicy:this._options.referrerPolicy})}async retrieveId(){try{let e=await this._buildRequest("id");if(e.status!==200)throw new Error(`Error. Status:${e.status}`);return e.text()}catch(e){d.error("Error retrieving ID",e);let r="";throw this._options.path==="/"&&this._options.host!==S.CLOUD_HOST&&(r=" If you passed in a `path` to your self-hosted PeerServer, you'll also need to pass in that same path when creating a new Peer."),new Error("Could not get an ID from the server."+r)}}async listAllPeers(){try{let e=await this._buildRequest("peers");if(e.status!==200){if(e.status===401){let r="";throw this._options.host===S.CLOUD_HOST?r="It looks like you're using the cloud server. You can email team@peerjs.com to enable peer listing for your API key.":r="You need to enable `allow_discovery` on your self-hosted PeerServer to use this feature.",new Error("It doesn't look like you have permission to list peers IDs. "+r)}throw new Error(`Error. Status:${e.status}`)}return e.json()}catch(e){throw d.error("Error retrieving list peers",e),new Error("Could not get list peers from the server."+e)}}},D=class t extends Ce{static#e=this.ID_PREFIX="dc_";static#t=this.MAX_BUFFERED_AMOUNT=8388608;get type(){return E.Data}constructor(e,r,n){super(e,r,n),this.connectionId=this.options.connectionId||t.ID_PREFIX+nr(),this.label=this.options.label||this.connectionId,this.reliable=!!this.options.reliable,this._negotiator=new _e(this),this._negotiator.startConnection(this.options._payload||{originator:true,reliable:this.reliable});}_initializeDataChannel(e){this.dataChannel=e,this.dataChannel.onopen=()=>{d.log(`DC#${this.connectionId} dc connection success`),this._open=true,this.emit("open");},this.dataChannel.onmessage=r=>{d.log(`DC#${this.connectionId} dc onmessage:`,r.data);},this.dataChannel.onclose=()=>{d.log(`DC#${this.connectionId} dc closed for:`,this.peer),this.close();};}close(e){if(e?.flush){this.send({__peerData:{type:"close"}});return}this._negotiator&&(this._negotiator.cleanup(),this._negotiator=null),this.provider&&(this.provider._removeConnection(this),this.provider=null),this.dataChannel&&(this.dataChannel.onopen=null,this.dataChannel.onmessage=null,this.dataChannel.onclose=null,this.dataChannel=null),this.open&&(this._open=false,super.emit("close"));}send(e,r=false){if(!this.open){this.emitError(q.NotOpenYet,"Connection is not open. You should listen for the `open` event before sending messages.");return}return this._send(e,r)}async handleMessage(e){let r=e.payload;switch(e.type){case _.Answer:await this._negotiator.handleSDP(e.type,r.sdp);break;case _.Candidate:await this._negotiator.handleCandidate(r.candidate);break;default:d.warn("Unrecognized message type:",e.type,"from peer:",this.peer);break}}},Z=class extends D{get bufferSize(){return this._bufferSize}_initializeDataChannel(e){super._initializeDataChannel(e),this.dataChannel.binaryType="arraybuffer",this.dataChannel.addEventListener("message",r=>this._handleDataMessage(r));}_bufferedSend(e){(this._buffering||!this._trySend(e))&&(this._buffer.push(e),this._bufferSize=this._buffer.length);}_trySend(e){if(!this.open)return  false;if(this.dataChannel.bufferedAmount>D.MAX_BUFFERED_AMOUNT)return this._buffering=true,setTimeout(()=>{this._buffering=false,this._tryBuffer();},50),false;try{this.dataChannel.send(e);}catch(r){return d.error(`DC#:${this.connectionId} Error when sending:`,r),this._buffering=true,this.close(),false}return  true}_tryBuffer(){if(!this.open||this._buffer.length===0)return;let e=this._buffer[0];this._trySend(e)&&(this._buffer.shift(),this._bufferSize=this._buffer.length,this._tryBuffer());}close(e){if(e?.flush){this.send({__peerData:{type:"close"}});return}this._buffer=[],this._bufferSize=0,super.close();}constructor(...e){super(...e),this._buffer=[],this._bufferSize=0,this._buffering=false;}},W=class extends Z{close(e){super.close(e),this._chunkedData={};}constructor(e,r,n){super(e,r,n),this.chunker=new ve,this.serialization=B.Binary,this._chunkedData={};}_handleDataMessage({data:e}){let r=De(e),n=r.__peerData;if(n){if(n.type==="close"){this.close();return}this._handleChunk(r);return}this.emit("data",r);}_handleChunk(e){let r=e.__peerData,n=this._chunkedData[r]||{data:[],count:0,total:e.total};if(n.data[e.n]=new Uint8Array(e.data),n.count++,this._chunkedData[r]=n,n.total===n.count){delete this._chunkedData[r];let i=jr(n.data);this._handleDataMessage({data:i});}}_send(e,r){let n=Ie(e);if(n instanceof Promise)return this._send_blob(n);if(!r&&n.byteLength>this.chunker.chunkedMTU){this._sendChunks(n);return}this._bufferedSend(n);}async _send_blob(e){let r=await e;if(r.byteLength>this.chunker.chunkedMTU){this._sendChunks(r);return}this._bufferedSend(r);}_sendChunks(e){let r=this.chunker.chunk(e);d.log(`DC#${this.connectionId} Try to send ${r.length} chunks...`);for(let n of r)this.send(n,true);}},St=class extends Z{_handleDataMessage({data:e}){super.emit("data",e);}_send(e,r){this._bufferedSend(e);}constructor(...e){super(...e),this.serialization=B.None;}},bt=class extends Z{_handleDataMessage({data:e}){let r=this.parse(this.decoder.decode(e)),n=r.__peerData;if(n&&n.type==="close"){this.close();return}this.emit("data",r);}_send(e,r){let n=this.encoder.encode(this.stringify(e));if(n.byteLength>=S.chunkedMTU){this.emitError(q.MessageToBig,"Message too big for JSON channel");return}this._bufferedSend(n);}constructor(...e){super(...e),this.serialization=B.JSON,this.encoder=new TextEncoder,this.decoder=new TextDecoder,this.stringify=JSON.stringify,this.parse=JSON.parse;}};var be=class t extends xe{static#e=this.DEFAULT_KEY="peerjs";get id(){return this._id}get options(){return this._options}get open(){return this._open}get socket(){return this._socket}get connections(){let e=Object.create(null);for(let[r,n]of this._connections)e[r]=n;return e}get destroyed(){return this._destroyed}get disconnected(){return this._disconnected}constructor(e,r){super(),this._serializers={raw:St,json:bt,binary:W,"binary-utf8":W,default:W},this._id=null,this._lastServerId=null,this._destroyed=false,this._disconnected=false,this._open=false,this._connections=new Map,this._lostMessages=new Map;let n;if(e&&e.constructor==Object?r=e:e&&(n=e.toString()),r={debug:0,host:S.CLOUD_HOST,port:S.CLOUD_PORT,path:"/",key:t.DEFAULT_KEY,token:S.randomToken(),config:S.defaultConfig,referrerPolicy:"strict-origin-when-cross-origin",serializers:{},...r},this._options=r,this._serializers={...this._serializers,...this.options.serializers},this._options.host==="/"&&(this._options.host=window.location.hostname),this._options.path&&(this._options.path[0]!=="/"&&(this._options.path="/"+this._options.path),this._options.path[this._options.path.length-1]!=="/"&&(this._options.path+="/")),this._options.secure===void 0&&this._options.host!==S.CLOUD_HOST?this._options.secure=S.isSecure():this._options.host==S.CLOUD_HOST&&(this._options.secure=true),this._options.logFunction&&d.setLogFunction(this._options.logFunction),d.logLevel=this._options.debug||0,this._api=new Ct(r),this._socket=this._createServerConnection(),!S.supports.audioVideo&&!S.supports.data){this._delayedAbort(v.BrowserIncompatible,"The current browser does not support WebRTC");return}if(n&&!S.validateId(n)){this._delayedAbort(v.InvalidID,`ID "${n}" is invalid`);return}n?this._initialize(n):this._api.retrieveId().then(i=>this._initialize(i)).catch(i=>this._abort(v.ServerError,i));}_createServerConnection(){let e=new _t(this._options.secure,this._options.host,this._options.port,this._options.path,this._options.key,this._options.pingInterval);return e.on(k.Message,r=>{this._handleMessage(r);}),e.on(k.Error,r=>{this._abort(v.SocketError,r);}),e.on(k.Disconnected,()=>{this.disconnected||(this.emitError(v.Network,"Lost connection to server."),this.disconnect());}),e.on(k.Close,()=>{this.disconnected||this._abort(v.SocketClosed,"Underlying socket is already closed.");}),e}_initialize(e){this._id=e,this.socket.start(e,this._options.token);}_handleMessage(e){let r=e.type,n=e.payload,i=e.src;switch(r){case _.Open:this._lastServerId=this.id,this._open=true,this.emit("open",this.id);break;case _.Error:this._abort(v.ServerError,n.msg);break;case _.IdTaken:this._abort(v.UnavailableID,`ID "${this.id}" is taken`);break;case _.InvalidKey:this._abort(v.InvalidKey,`API KEY "${this._options.key}" is invalid`);break;case _.Leave:d.log(`Received leave message from ${i}`),this._cleanupPeer(i),this._connections.delete(i);break;case _.Expire:this.emitError(v.PeerUnavailable,`Could not connect to peer ${i}`);break;case _.Offer:{let s=n.connectionId,o=this.getConnection(i,s);if(o&&(o.close(),d.warn(`Offer received for existing Connection ID:${s}`)),n.type===E.Media){let f=new Se(i,this,{connectionId:s,_payload:n,metadata:n.metadata});o=f,this._addConnection(i,o),this.emit("call",f);}else if(n.type===E.Data){let f=new this._serializers[n.serialization](i,this,{connectionId:s,_payload:n,metadata:n.metadata,label:n.label,serialization:n.serialization,reliable:n.reliable});o=f,this._addConnection(i,o),this.emit("connection",f);}else {d.warn(`Received malformed connection type:${n.type}`);return}let a=this._getMessages(s);for(let f of a)o.handleMessage(f);break}default:{if(!n){d.warn(`You received a malformed message from ${i} of type ${r}`);return}let s=n.connectionId,o=this.getConnection(i,s);o&&o.peerConnection?o.handleMessage(e):s?this._storeMessage(s,e):d.warn("You received an unrecognized message:",e);break}}}_storeMessage(e,r){this._lostMessages.has(e)||this._lostMessages.set(e,[]),this._lostMessages.get(e).push(r);}_getMessages(e){let r=this._lostMessages.get(e);return r?(this._lostMessages.delete(e),r):[]}connect(e,r={}){if(r={serialization:"default",...r},this.disconnected){d.warn("You cannot connect to a new Peer because you called .disconnect() on this Peer and ended your connection with the server. You can create a new Peer to reconnect, or call reconnect on this peer if you believe its ID to still be available."),this.emitError(v.Disconnected,"Cannot connect to new Peer after disconnecting from server.");return}let n=new this._serializers[r.serialization](e,this,r);return this._addConnection(e,n),n}call(e,r,n={}){if(this.disconnected){d.warn("You cannot connect to a new Peer because you called .disconnect() on this Peer and ended your connection with the server. You can create a new Peer to reconnect."),this.emitError(v.Disconnected,"Cannot connect to new Peer after disconnecting from server.");return}if(!r){d.error("To call a peer, you must provide a stream from your browser's `getUserMedia`.");return}let i=new Se(e,this,{...n,_stream:r});return this._addConnection(e,i),i}_addConnection(e,r){d.log(`add connection ${r.type}:${r.connectionId} to peerId:${e}`),this._connections.has(e)||this._connections.set(e,[]),this._connections.get(e).push(r);}_removeConnection(e){let r=this._connections.get(e.peer);if(r){let n=r.indexOf(e);n!==-1&&r.splice(n,1);}this._lostMessages.delete(e.connectionId);}getConnection(e,r){let n=this._connections.get(e);if(!n)return null;for(let i of n)if(i.connectionId===r)return i;return null}_delayedAbort(e,r){setTimeout(()=>{this._abort(e,r);},0);}_abort(e,r){d.error("Aborting!"),this.emitError(e,r),this._lastServerId?this.disconnect():this.destroy();}destroy(){this.destroyed||(d.log(`Destroy peer with ID:${this.id}`),this.disconnect(),this._cleanup(),this._destroyed=true,this.emit("close"));}_cleanup(){for(let e of this._connections.keys())this._cleanupPeer(e),this._connections.delete(e);this.socket.removeAllListeners();}_cleanupPeer(e){let r=this._connections.get(e);if(r)for(let n of r)n.close();}disconnect(){if(this.disconnected)return;let e=this.id;d.log(`Disconnect peer with ID:${e}`),this._disconnected=true,this._open=false,this.socket.close(),this._lastServerId=e,this._id=null,this.emit("disconnected",e);}reconnect(){if(this.disconnected&&!this.destroyed)d.log(`Attempting reconnection to server with ID ${this._lastServerId}`),this._disconnected=false,this._initialize(this._lastServerId);else {if(this.destroyed)throw new Error("This peer cannot reconnect to the server. It has already been destroyed.");if(!this.disconnected&&!this.open)d.error("In a hurry? We're still trying to make the initial connection!");else throw new Error(`Peer ${this.id} cannot reconnect because it is not disconnected from the server!`)}}listAllPeers(e=r=>{}){this._api.listAllPeers().then(r=>e(r)).catch(r=>this._abort(v.ServerError,r));}};

class Client {
    id;
    audio;
    video;
    close;
    input;
    state;
    data;
    constructor(id, audio, video, close, input, state, data) {
        this.id = id;
        this.audio = audio;
        this.video = video;
        this.close = close;
        this.input = input;
        this.state = state;
        this.data = data;
    }
}
let no_client = (data) => new Client(() => 0, () => 0, () => 0, () => 0, () => new Input(0, 0, () => false, [], [], []), () => 'empty', () => data);
// type Camera = [Mat4, Mat4]
let camera = (host, proj, eye) => {
    let def = [proj, translate(0, 0, 0)];
    if (host.init === false)
        return def;
    if (host.xr_support === false)
        return def;
    if (host.xr_cameras === null)
        return def;
    return host.xr_cameras[eye];
};
class HostClient {
    id;
    conn;
    canvas;
    canvas_sync;
    state;
    data;
    input;
    audio_context;
    audio_destination;
    init;
    xr_support;
    xr_cameras;
    xr_hands;
    constructor(id, conn, canvas, canvas_sync, state, data, input, audio_context, audio_destination, init, xr_support, xr_cameras, xr_hands) {
        this.id = id;
        this.conn = conn;
        this.canvas = canvas;
        this.canvas_sync = canvas_sync;
        this.state = state;
        this.data = data;
        this.input = input;
        this.audio_context = audio_context;
        this.audio_destination = audio_destination;
        this.init = init;
        this.xr_support = xr_support;
        this.xr_cameras = xr_cameras;
        this.xr_hands = xr_hands;
    }
}
let peer_on_connection = (peer) => new Promise((resolve) => {
    peer.on('open', (id) => {
        resolve(id);
    });
});
// function randomIntBetween(min:number, max:number) {
//     return Math.floor(Math.random() * (max - min + 1)) + min
// }
// let genkey = (size:number) => {
//     let chars = 'qwertyupasdfghkzxcnm23456789'.split('')
//     let key = ''
//     for(let i = 0; i < size; i++) {
//         key += chars[randomIntBetween(0, chars.length)]
//     }
//     return key
// }
const host = (newdata, args) => {
    let h = null;
    return {
        open: (code) => {
            if (h !== null)
                throw new Error();
            h = new_host(code, newdata, args);
            return h.open();
        },
        clients: () => {
            if (h === null)
                return [];
            return h.clients();
        }
    };
};
let new_host = (code, newdata, args) => {
    let players = args?.slots;
    //
    let ps = players_new(players);
    let clients = [];
    let ids = 0;
    let baseid = 'playcon-';
    let peer = new be(baseid + code, { secure: false, /* reliable:false */ });
    peer.on('error', (error) => {
        console.error(error);
    });
    let id = null;
    peer_on_connection(peer).then((hostid) => {
        id = hostid.slice(baseid.length);
        peer.on('connection', (conn) => {
            ids++;
            let keys = new Map();
            let input = new Input(0, 0, (key) => keys.get(key) ? true : false, [], [], []);
            let host_client = new HostClient(ids, conn, document.createElement('canvas'), false, 'connect', newdata(), input, null, null, false, false, null, null);
            conn.on('open', () => {
                clients.push(host_client);
                conn.on('data', (p2p_data) => {
                    let then = () => conn.send('');
                    let data = JSON.parse(p2p_data);
                    if (data?.log === true) {
                        console.warn(data?.text);
                        return then();
                    }
                    if (data?.login) {
                        host_client.init = true;
                        host_client.xr_support = data?.xr ? true : false;
                        return then();
                    }
                    if (host_client.init === false)
                        return then();
                    host_client.xr_cameras = data.xr_mat4s;
                    host_client.xr_hands = data.xr_hands;
                    host_client.input.keys = host_client.input.keys.concat(data.keys);
                    host_client.input.ptrs = host_client.input.ptrs.concat(data.ptrs);
                    host_client.input.clicks = host_client.input.clicks.concat(data.clicks);
                    data.keys.forEach((key) => {
                        keys.set(key.code, key.action === 'down');
                    });
                    then();
                });
            });
            conn.on('close', () => {
                host_client.state = 'closed';
            });
        });
    });
    let sync = () => {
        clients = clients.filter((c) => {
            c.input = new Input(0, 0, c.input.key, [], [], []);
            if (c.state === 'connect') {
                c.state = 'ready';
            }
            return c.state === 'ready';
        });
    };
    return {
        open: () => new Promise((resolve) => {
            let poll = () => {
                if (id === null)
                    setTimeout(poll, 1);
                else
                    resolve();
            };
            poll();
        }),
        // ready: () => {
        //     return id !== null
        // },
        // url: (base:string = '') => base + id,
        clients: () => {
            let r = clients.map((c) => {
                let id = () => c.id;
                let audio = (src) => {
                    if (c.audio_context !== null) {
                        let audioElement = new Audio(src);
                        let source = c.audio_context.createMediaElementSource(audioElement);
                        if (c.audio_destination !== null) {
                            source.connect(c.audio_destination);
                        }
                        audioElement.loop = false;
                        audioElement.play();
                    }
                };
                let video = (proj, render) => {
                    if (c.init === false)
                        return;
                    let r = camera(c, proj, 0);
                    let out = render(r[0], r[1]);
                    if (c.canvas_sync === false) {
                        let audio_context = new AudioContext();
                        if (audio_context.state === 'suspended')
                            return;
                        c.canvas_sync = true;
                        c.canvas.width = out.width * (c.xr_support ? 2 : 1);
                        c.canvas.height = out.height;
                        let stream = c.canvas.captureStream(60);
                        c.audio_context = audio_context;
                        c.audio_destination = c.audio_context.createMediaStreamDestination();
                        let audio_track = c.audio_destination.stream.getAudioTracks()[0];
                        stream.addTrack(audio_track);
                        peer.call(c.conn.peer, stream);
                    }
                    c.canvas.getContext('2d')?.drawImage(out, 0, 0, out.width, out.height);
                    if (c.xr_support === false)
                        return;
                    r = camera(c, proj, 1);
                    out = render(r[0], r[1]);
                    c.canvas.getContext('2d')?.drawImage(out, out.width, 0, out.width, out.height);
                    if (c.xr_hands === null)
                        return;
                    let hand = (h) => {
                        h.forEach((m) => {
                            let x = out.width / 2 + m[12] * out.width;
                            let y = out.height / 2 + (-m[13]) * out.height;
                            let ctx = c.canvas.getContext('2d');
                            ctx.beginPath();
                            ctx.arc(x, y, 5, 0, Math.PI * 2);
                            ctx.fillStyle = "black";
                            ctx.fill();
                        });
                    };
                    hand(c.xr_hands[0]);
                    hand(c.xr_hands[1]);
                };
                let close = () => { };
                let c_input = c.input;
                let input = () => c_input;
                let c_state = c.state;
                let state = () => c_state;
                let data = () => c.data;
                return new Client(id, audio, video, close, input, state, data);
            });
            sync();
            if (ps !== null)
                r = ps.from_clients(r, newdata);
            return r;
        }
    };
};
let players_new = (n) => {
    let v = [];
    for (let i = 0; i < n; i++) {
        v.push(0);
    }
    let self = {
        join: (id) => {
            for (let i = 0; i < n; i++) {
                if (v[i] === 0) {
                    v[i] = id;
                    return true;
                }
            }
            return false;
        },
        leave: (id) => {
            for (let i = 0; i < n; i++) {
                if (v[i] === id) {
                    v[i] = 0;
                    return true;
                }
            }
            return false;
        },
        get: (id) => {
            for (let i = 0; i < n; i++) {
                if (v[i] === id) {
                    return i + 1;
                }
            }
            return 0;
        },
        from_clients: (clients, newdata) => {
            clients.forEach((c) => {
                if (c.state() === 'connect') {
                    if (self.join(c.id()) === false) {
                        c.close();
                    }
                }
            });
            let r = v.map((cid) => {
                let i = clients.findIndex((c) => c.id() === cid);
                if (i !== -1)
                    return clients[i];
                return no_client(newdata());
            });
            clients.forEach((c) => {
                if (c.state() === 'closed') {
                    self.leave(c.id());
                }
            });
            return r;
        }
    };
    return self;
};

class Player {
    x;
    z;
    constructor(x, z) {
        this.x = x;
        this.z = z;
    }
}
let app = async (path, canvas) => {
    // let rtc = 'https://playcon.github.io/?id='
    let out = canvas(1000, 1000);
    let g = gfx(out);
    let buf = g.buffer({ depth: true });
    let sphere_mesh = g.mesh(sphere());
    let h = host(() => new Player(0, 0), { slots: 3 });
    let p = new Player(0, 0);
    // let x = 0
    // let z = 0
    let spheres = [];
    for (let x = -10; x < 10; x += 2) {
        spheres.push([x, Math.random() * 10, -2 - Math.random() * 10]);
    }
    return async (input) => {
        if (input.keys.some((k) => k.code === 'KeyX' && k.action === 'up')) {
            let rtc = 'http://localhost:777/C:/@astor/@gkit/rtc/rtc.html?id=';
            let code = 'eee';
            h.open(code);
            console.log(rtc + code);
        }
        let clients = h.clients();
        let players = [[input, p]].concat(clients.map((c) => [c.input(), c.data()]));
        players.forEach(([i, p]) => {
            if (i.key('KeyA'))
                p.x -= 0.01;
            if (i.key('KeyD'))
                p.x += 0.01;
            if (i.key('KeyW'))
                p.z -= 0.01;
            if (i.key('KeyS'))
                p.z += 0.01;
        });
        clients.forEach((c) => {
            if (c.input().clicks.length) {
                c.audio('13_jammer.ogg');
            }
            if (c.input().ptrs.length) ;
        });
        let render = (p, proj, view) => {
            view = mul(translate(p.x, 0, p.z), view);
            buf.clear();
            buf.draw({
                shader: `
                    vec4 pixel(px p) {
                        return vec4(1, 1, 0, 1);
                    }
                `
            });
            spheres.forEach(([x, y, z]) => {
                buf.draw({
                    depth: true,
                    mesh: sphere_mesh,
                    uniforms: [
                        ['x', x],
                        ['y', y],
                        ['z', z],
                        ['proj', new UniformArray('mat4', proj)],
                        ['view', new UniformArray('mat4', view)],
                        ['time', input.time]
                    ],
                    shader: `
                        mat4[3] vertex(vx v) {
                            mat4 model = translate(v.x, v.y, v.z);
                            return mat4[3](v.proj, inverse(v.view), model);
                        }
                        vec4 pixel(px p) {
                            return hue(vec4(p.normal.x, p.normal.y, p.normal.z, 1), 0.);
                        }
                    `
                });
            });
            g.flush(buf);
        };
        let proj = perspective(90, g.width() / g.height(), 0.1, 1000);
        clients.forEach((c, i) => {
            if (c.id() === 0)
                return;
            c.video(proj, (proj, view) => {
                // console.log(proj, view)
                render(c.data(), proj, view);
                return out;
            });
        });
        render(p, proj, translate(0, 0, 0));
    };
};
let main = () => run(app, '');

export { app, main };
