var canvas = document.getElementById("renderCanvas"); // Get the canvas element
        var engine = new BABYLON.Engine(canvas, true); // Generate the BABYLON 3D engine
        window.addEventListener('resize', function(){
                engine.resize();
        });

        /******* Add the create scene function ******/
        var createScene = function () {

            // Create the scene space
            const scene = new BABYLON.Scene(engine);
            scene.clearColor = new BABYLON.Color3(0,0,0);

            // Add a camera to the scene and attach it to the canvas
            const camera = new BABYLON.FreeCamera('camera',new BABYLON.Vector3(0, 0, -3));

            // Add lights to the scene
            var light1 = new BABYLON.HemisphericLight("light1", new BABYLON.Vector3(1, 1, 3), scene);
            var light2 = new BABYLON.PointLight("light2", new BABYLON.Vector3(0, 1, -1), scene);
            

            // Add and manipulate meshes in the scene
           let box = BABYLON.MeshBuilder.CreateBox('box', {}, scene);
           box.rotate(BABYLON.Axis.Y, Math.PI/6, BABYLON.Space.World);

           //creating sound
           let soundtrack = new BABYLON.Sound("sound","")

            return scene;
        };
        /******* End of the create scene function ******/

        var scene = createScene(); //Call the createScene function

        // Register a render loop to repeatedly render the scene
        engine.runRenderLoop(() => {
                scene.render();
        })