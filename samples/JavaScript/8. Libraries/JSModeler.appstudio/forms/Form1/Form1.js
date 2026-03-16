 //August 25, 2015
 //Contributed by Adrian Nicolaiev
 //Website http://www.tobem.com
 //LinkedIn https://www.linkedin.com/in/nicolaiev

 //JSModeler is a JavaScript framework to create and visualize 3D models.

 //At http://www.tobem.com/JSModeler you can see a Cuboid example.
 //A NSBasic "Container" was used to host JSModeler CANVAS.
 //"Container" is really a very powerful recent feature in AppStudio.

 //Source code: http://pastebin.com/iR55paRd

 //Some more info:
 //JSModeler https://github.com/kovacsv/JSModeler/wiki
 //Three https://github.com/mrdoob/three.js
 //Robotic Arm http://kovacsv.github.io/JSModeler/documentation/examples/robot/robot.html
 //Lego Builder http://kovacsv.github.io/JSModeler/documentation/examples/legobuilder.html

var meshes;

Form1.onshow = function() {
 var viewerSettings,canvas,body,color;
  viewerSettings = {  cameraEyePosition : [-2.0, -1.5, 1.0],  cameraCenterPosition : [0.0, 0.0, 0.0],  cameraUpVector : [0, 0, 1]  };

  canvas = JSModelerContainer1;
  viewer = new JSM.ThreeViewer ();
  viewer.Start (canvas, viewerSettings);

  body = JSM.GenerateCuboid (1, 1.6, 1);
  meshes = JSM.ConvertBodyToThreeMeshes (body);
  color = new THREE.Color (0, .8, 1);
  meshes[0].material.Color = color;
  meshes[0].material.ambient = color;
  viewer.AddMeshes (meshes);

  viewer.Draw();

  timerRef = setInterval(ChangePosition, 10);
};

Slider1_input.onslide = function() {
  ChangeColor();
};

Slider2_input.onslide = function() {
  ChangeColor();
};

Slider3_input.onslide = function() {
  ChangeColor();
};

function ChangeColor() {
 var color;
  var color = new THREE.Color (Slider1.getValue()/100, Slider2.getValue()/100, Slider3.getValue()/100);
  meshes[0].material.color = color;
  meshes[0].material.ambient = color;
  viewer.Draw();

}

function ChangePosition() {
  meshes[0].rotation.x += 0.01;
  meshes[0].rotation.y += 0.01;
  meshes[0].rotation.z -= 0.01;
  viewer.Draw();
}

