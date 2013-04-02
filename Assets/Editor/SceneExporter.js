#pragma strict


@MenuItem("Tools/Export Scenes")
static function ToolsExportScenes() {
	var sceneNames = ["External1", "External2"];

	#if UNITY_IPHONE
		var target = BuildTarget.iPhone;
	#elif UNITY_ANDROID
		var target = BuildTarget.Android;
	#else
		var target = BuildTarget.WebPlayer;
	#endif

	for (var name in sceneNames) {
		var levels1 : String[] = ["Assets/" + name + ".unity"];
		BuildPipeline.BuildStreamedSceneAssetBundle(levels1, "Assets/StreamingAssets/" + name + ".unity3d", target);
	}
}
