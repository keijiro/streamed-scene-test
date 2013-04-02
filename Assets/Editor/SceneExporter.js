#pragma strict

@MenuItem("Tools/Export Scene")
static function ToolsExportScene() {
	var levels : String[] = ["Assets/External.unity"];
    BuildPipeline.BuildStreamedSceneAssetBundle(levels, "Assets/StreamingAssets/Streamed-External.unity3d", BuildTarget.WebPlayer);
}