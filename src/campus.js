import * as THREE from "three";

export function createCampus(scene, movingCircle) {
  const grassGeometry = new THREE.PlaneGeometry(300, 300);
  const grassMaterial = new THREE.MeshLambertMaterial({ color: 0x2e8b57 });
  const grass = new THREE.Mesh(grassGeometry, grassMaterial);
  grass.rotation.x = -Math.PI / 2;
  scene.add(grass);

  const roadMaterial = new THREE.MeshLambertMaterial({ color: 0xa9a9a9 });
  const road = new THREE.Mesh(new THREE.PlaneGeometry(10, 150), roadMaterial);
  road.position.set(0, 0.01, 0);
  road.rotation.x = -Math.PI / 2;
  scene.add(road);

  const buildingMaterial = new THREE.MeshLambertMaterial({ color: 0xffe135 });

  const building1 = new THREE.Mesh(
    new THREE.BoxGeometry(20, 10, 50),
    buildingMaterial
  );
  building1.position.set(-50, 5, 40);
  scene.add(building1);

  const building2 = new THREE.Mesh(
    new THREE.BoxGeometry(20, 10, 50),
    buildingMaterial
  );
  building2.position.set(-50, 5, -60);
  scene.add(building2);

  const treeTrunkMaterial = new THREE.MeshLambertMaterial({ color: 0x8b4513 });
  const treeLeafMaterial = new THREE.MeshLambertMaterial({ color: 0x006400 });

  for (let i = 0; i < 10; i++) {
    const trunk = new THREE.Mesh(
      new THREE.CylinderGeometry(1, 1, 10),
      treeTrunkMaterial
    );
    trunk.position.set(15, 5, -70 + i * 15);
    scene.add(trunk);

    const leaves = new THREE.Mesh(
      new THREE.SphereGeometry(5, 16, 16),
      treeLeafMaterial
    );
    leaves.position.set(15, 15, -70 + i * 15);
    scene.add(leaves);
  }

  const roundaboutMaterial = new THREE.MeshLambertMaterial({ color: 0xdcdcdc });
  const roundabout = new THREE.Mesh(
    new THREE.TorusGeometry(25, 1, 16, 100),
    roundaboutMaterial
  );
  roundabout.position.set(0, 0.5, 0);
  roundabout.rotation.x = -Math.PI / 2;
  scene.add(roundabout);

  scene.add(movingCircle); // Add the moving circle to the scene
}
