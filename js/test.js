var canvas = document.getElementById("renderCanvas"); // Get the canvas element
        let engine = new BABYLON.Engine(canvas, true); // Generate the BABYLON 3D engine
        window.addEventListener('resize', function(){
                engine.resize();
        });

        /******* Add the create scene function ******/
        var createScene = function () {

            // Create the scene space
            const scene = new BABYLON.Scene(engine);
            scene.clearColor = new BABYLON.Color3(0,0,0);

            // Add a camera to the scene and attach it to the canvas
            //const camera = new BABYLON.FreeCamera('camera',new BABYLON.Vector3(0, 0, -3));
            let camera = new BABYLON.ArcRotateCamera("Camera", 3 * Math.PI / 2, Math.PI / 2, 0, BABYLON.Vector3.Zero(), scene);
            camera.attachControl(canvas,true);
            camera.lowerRadiusLimit = 6;
            camera.upperRadiusLimit = 20;
            camera.useBouncingBehavior = true;

            // Add lights to the scene
            let light1 = new BABYLON.HemisphericLight("light1", new BABYLON.Vector3(1, 1, 3), scene);
            let light2 = new BABYLON.PointLight("light2", new BABYLON.Vector3(0, 1, -1), scene);
            
            let points;
            let lines;
            for(let i = 0; i<15; i++){
                    for(let j = 0; j< 10; j++){
                 points = [
                        
                        //Viereck
                       /* new BABYLON.Vector3(-4 + i/4,-4 + i/4,i/4),
                        new BABYLON.Vector3(4 - i/4,-4 + i/4, i/4),
                        new BABYLON.Vector3(4 - i/4,4 - i/4,i/4),
                        new BABYLON.Vector3(-4 + i/4,4 - i/4,i/4),
                        new BABYLON.Vector3(-4 + i/4,-4 + i/4,i/4)*/

                        //Brille
                        /*new BABYLON.Vector3(0,0,i),
                        new BABYLON.Vector3(1 + i /4,-1- i /4,i),
                        new BABYLON.Vector3(1 + i /4,1,i),
                        new BABYLON.Vector3(-1- i /4,1,i),
                        new BABYLON.Vector3(-1 - i /4,-1- i /4,i),
                        new BABYLON.Vector3(0,0,i)*/

                        //C C C C C C C C C C
                        /*new BABYLON.Vector3(0,-0.25,0),
                        new BABYLON.Vector3(0,0.5,0),
                        new BABYLON.Vector3(0.25,0.75,0),
                        new BABYLON.Vector3(0.5,0.75,0),
                        new BABYLON.Vector3(0.75,0.5,0),
                        new BABYLON.Vector3(0.75,0.25,0),
                        new BABYLON.Vector3(0.5, 0.25,0),
                        new BABYLON.Vector3(0.5, 0.45, 0),
                        new BABYLON.Vector3(0.25,0.45,0),
                        new BABYLON.Vector3(0.25,-0.25, 0),
                        new BABYLON.Vector3(0.5,-0.25,0),
                        new BABYLON.Vector3(0.5,0,0),
                        new BABYLON.Vector3(0.75,0,0),
                        new BABYLON.Vector3(0.75, -0.25,0),
                        new BABYLON.Vector3(0.5,-0.5,0),
                        new BABYLON.Vector3(0.25,-0.5,0),
                        new BABYLON.Vector3(0, -0.25,0)*/

                        //HERZ
                        /*new BABYLON.Vector3(0*Math.sin(i),2*Math.sin(i),0),
                        new BABYLON.Vector3(-1*Math.sin(i),2.5*Math.sin(i),0),
                        new BABYLON.Vector3(-1.5*Math.sin(i),2.5*Math.sin(i),0),
                        new BABYLON.Vector3(-2*Math.sin(i),2*Math.sin(i),0),
                        new BABYLON.Vector3(-1.5*Math.sin(i),1*Math.sin(i),0),
                        new BABYLON.Vector3(0*Math.sin(i),0*Math.sin(i),0),
                        new BABYLON.Vector3(1.5*Math.sin(i),1*Math.sin(i),0),
                        new BABYLON.Vector3(2*Math.sin(i),2*Math.sin(i),0),
                        new BABYLON.Vector3(1.5*Math.sin(i),2.5*Math.sin(i),0),
                        new BABYLON.Vector3(1*Math.sin(i),2.5*Math.sin(i),0),
                        new BABYLON.Vector3(0*Math.sin(i),2*Math.sin(i),0)*/
                        
                
                        
                  
                        
                ]

                 lines = BABYLON.MeshBuilder.CreateLines("lines",{points: points}, scene);
                //lines.position = new BABYLON.Vector3(-10.1+ i*1.5,-6.9 + j*1.5,0);
                //lines.position = new BABYLON.Vector3(-23 + i*3 ,-13 + j*3 ,20); //Herz
                //lines.color = new BABYLON.Color3(i / 2,0, i / 10); //Herz
        }
}


          
           //lines.rotate(BABYLON.Axis.Y, M, BABYLON.Space.WORLD);

            return scene;
        };
        /******* End of the create scene function ******/

        var scene = createScene(); //Call the createScene function

        // Register a render loop to repeatedly render the scene
        engine.runRenderLoop(() => {
                scene.render();
        })