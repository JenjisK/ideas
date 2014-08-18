Je vais détailler ici la structure provisoire de la scène. Il s'agit d'une structure basée sur celle d'Unity3d. Elle est bien sûr moins complète mais me semble coller avec les ambitions du moteur 2d. **Pas encore de méthodes**

* GameObject
  * Name {*string*}
  * Parent {*GameObject*}
  * Childs {*Array of GameObject*}
  * x {*float*}
  * y {*float*}
  * z {*float*} (il s'agit de la rotation)
  * Meshes {*Array of Mesh*} (un objet peut avoir plusieurs meshes, surtout s'il est présent sur plusieurs layers)
  * Colliders {*Array of Collider*} (idem. C'est même plus courant que pour les meshs en 2d, je pense)
  * AudioSources {*Array of AudioSource*} (Cf. plus bas et plus tard pour ce qu'est un "*AudioSource*")
  * AudioListeners {*Array of AudioListener*}
  * Cameras {*Array of Camera*}
* Mesh
  * Image {*Image*} (le format Js d'images OU un format perso. En effet ces images feront office de Sprite; je vais donc avoir besoin de définir la position de départ et de fin pour l'image à afficher, partie d'une image plus grande. Pour le moment ces données sont directement renseignées dans le prototype ("la classe") Mesh)
  * x {*float*}
  * y {*float*}
  * z {*float*}
  * width {*int*}
  * height {*int*}
  * sx {*int*} (position de départ du Sprite sur l'image. Demandes si tu vois pas de quoi je parle)
  * sy {*int*} (idem)
  * swidth {*int*} (...)
  * sheight {*int*} (...)
* AudioSource : j'y travaille. J'ai donc momentanément sauté la classe Collider qui s'annonce ardue.
