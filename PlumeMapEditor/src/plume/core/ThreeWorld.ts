namespace plume {
    export class ThreeWorld{
        public scene:THREE.Scene
        public camera:THREE.PerspectiveCamera
        public renderer:THREE.WebGLRenderer
        private cube:THREE.Mesh
        constructor(){
            this.scene = new THREE.Scene()
            this.camera = new THREE.PerspectiveCamera(45,window.innerWidth/window.innerHeight,1,2000)
            this.renderer = new THREE.WebGLRenderer()
            this.init()
        }
        private init(){
            this.camera.position.set(-40,40,40)
            this.camera.lookAt(this.scene.position)
            this.renderer.setClearColor(0x222222)
            this.renderer.setSize(window.innerWidth,window.innerHeight)
            
            document.body.appendChild( this.renderer.domElement );
            this.scene = new THREE.Scene();
            this.scene.background = new THREE.Color( 0xa0a0a0 );
            this.scene.fog = new THREE.Fog( 0xa0a0a0, 200, 1000 );

            let light = new THREE.HemisphereLight(0x0000ff, 0x00ff00, 0.6);
            light.position.set( 0, 100, 0 );
            this.scene.add( light );

            let light2 = new THREE.DirectionalLight( 0xffffff );
            light2.position.set( 0, 200, 100 );
            light2.castShadow = true;
            light2.shadow.camera.top = 180;
            light2.shadow.camera.bottom = - 100;
            light2.shadow.camera.left = - 120;
            light2.shadow.camera.right = 120;
            this.scene.add( light2 );

            // ground
            var mesh = new THREE.Mesh( new THREE.PlaneBufferGeometry( 2000, 2000 ), new THREE.MeshPhongMaterial( { color: 0x999999, depthWrite: false } ) );
            mesh.rotation.x = - Math.PI / 2;
            mesh.receiveShadow = true;
            this.scene.add( mesh );

            var grid = new THREE.GridHelper( 2000, 20, 0x000000, 0x000000 );
            grid.material.opacity = 0.2;
            grid.material.transparent = true;
            this.scene.add( grid );

            var geometry = new THREE.BoxGeometry(10, 10, 10);
            var material = new THREE.MeshBasicMaterial({
                color: 0x00ff7c,
                wireframe: true,
                wireframeLinewidth: 1
            });

            this.cube = new THREE.Mesh(geometry, material);
            this.scene.add(this.cube);
            this.scene.add(new THREE.AxesHelper(10))
        }

        public onWindowResize = ()=>{
            this.camera.aspect = window.innerWidth / window.innerHeight;
            this.camera.updateProjectionMatrix();
            this.renderer.setSize( window.innerWidth, window.innerHeight );       
        }

        public render(){
            this.cube.rotateX(0.1);
            this.cube.rotateY(0.1);
            this.renderer.render(this.scene,this.camera)
        }
    }
}