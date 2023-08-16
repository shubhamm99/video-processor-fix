import { BackgroundConfig } from '../helpers/backgroundHelper';
import { PostProcessingConfig } from '../helpers/postProcessingHelper';
import { SegmentationConfig } from '../helpers/segmentationHelper';
import { SourcePlayback } from '../helpers/sourceHelper';
export declare function buildWebGL2Pipeline(sourcePlayback: SourcePlayback, backgroundImage: HTMLImageElement | null, backgroundConfig: BackgroundConfig, segmentationConfig: SegmentationConfig, canvas: HTMLCanvasElement, tflite: any, benchmark: any, debounce: boolean): {
    render: () => Promise<void>;
    updatePostProcessingConfig: (postProcessingConfig: PostProcessingConfig) => void;
    cleanUp: () => void;
};
