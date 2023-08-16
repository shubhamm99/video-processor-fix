import { SegmentationConfig } from '../helpers/segmentationHelper';
export declare function buildLoadSegmentationStage(gl: WebGL2RenderingContext, vertexShader: WebGLShader, positionBuffer: WebGLBuffer, texCoordBuffer: WebGLBuffer, segmentationConfig: SegmentationConfig, tflite: any, outputTexture: WebGLTexture): {
    render: () => void;
    cleanUp: () => void;
};
