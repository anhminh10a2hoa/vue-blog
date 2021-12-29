<script lang="ts">
import { defineComponent } from 'vue';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

export default defineComponent({
  name: 'Header',
  data: function () {
    return {};
  },
  mounted() {
    this.init();
  },
  methods: {
    init: function () {
      let container: null | HTMLElement = document.querySelector('.scene');
      //Create scene
      if (container) {
        const clW = container.clientWidth;
        const clH = container.clientHeight;
        let scene = new THREE.Scene();

        const fov = 25;
        const aspect = clW / clH;
        const near = 0.1;
        const far = 1000;

        //Camera setup
        const scale = clH * 0.005 + 1.8;
        let camera = new THREE.OrthographicCamera(-scale, scale, scale, -scale, 0.01, 50000);
        camera.position.set(0, 5, 30);

        const ambient = new THREE.AmbientLight(0x404040, 2);
        scene.add(ambient);

        const light = new THREE.DirectionalLight(0xffffff, 2);
        light.position.set(50, 50, 100);
        scene.add(light);
        //Renderer
        let renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
        renderer.setSize(clW, clH);
        renderer.setPixelRatio(window.devicePixelRatio);

        container.appendChild(renderer.domElement);

        //Load Model
        let loader = new GLTFLoader();
        loader.load('/src/assets/computer/scene.gltf', function (gltf: any) {
          scene.add(gltf.scene);
          let girl = gltf.scene.children[0];
          const animate = () => {
            requestAnimationFrame(animate);
            girl.rotation.z += 0.005;
            renderer.render(scene, camera);
          };
          animate();
        });

        const onWindowResize = () => {
          console.log('hello');
          camera.aspect = clW / clH;
          camera.updateProjectionMatrix();

          renderer.setSize(clW, clH);
        };

        window.addEventListener('resize', onWindowResize);
      }
    }
  }
});
</script>

<template>
  <div class="scene"></div>
</template>

<style lang="scss">
.scene {
  position: relative;
  max-width: $screen-max-width;
  width: 100%;
  height: $screen-max-width;
}
</style>
