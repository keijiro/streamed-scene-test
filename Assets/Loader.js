#pragma strict

var sceneNames = ["External1", "External2"];

private var bundles = ArrayList();

function Start() {
	DontDestroyOnLoad(gameObject);

	for (var name in sceneNames) {
		var www = WWW("file://" + Application.streamingAssetsPath + "/" + name + ".unity3d");
		yield www;

		if (www.error) {
			Debug.LogError(www.error);
		} else {
			bundles.Add(www.assetBundle);
		}
	}

	while (true) {
		Application.LoadLevel(sceneNames[0]);

		yield WaitForSeconds(1);

		Application.LoadLevel(sceneNames[1]);

		yield WaitForSeconds(1);

		Application.LoadLevel(sceneNames[0]);

		yield WaitForSeconds(1);

		Application.LoadLevelAdditive(sceneNames[1]);

		yield WaitForSeconds(1);

		Application.LoadLevelAdditive(sceneNames[0]);

		yield WaitForSeconds(1);
	}
}
