#pragma strict

function Start () {
	var path = "file://" + Application.streamingAssetsPath + "/Streamed-External.unity3d";
	var www = WWW(path);
	yield www;

	if (www.error) {
		Debug.LogError(www.error);
	} else {
		var bundle = www.assetBundle;
		Application.LoadLevel("External");
	}
}
