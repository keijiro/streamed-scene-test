#pragma strict

var prefab : GameObject;

function Start() {
	yield WaitForSeconds(0.2);
	Instantiate(prefab, transform.position, transform.rotation);
}