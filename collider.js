AFRAME.registerComponent("fish",{
    init: function(){
        for( var i = 1; i <= 20; i++ ){
            var id = "fishes${i}"

            var posX = Math.floor(Math.random() * 3000 + (-1000));
            var posY = Math.floor(Math.random() * 2 + (-1));
            var posZ = Math.floor(Math.random() * 3000 + -1000);

            var position = { x: posX, y:posY, z:posZ };

            this.fish(id,position);
        }
    },
    fish: ( id,position ) => {
        var islandE1 = document.querySelector("#island")
        var FishE1 = document.createElement("a-entity");

        FishE1.setAttribute( "id", id )
        FishE1.setAttribute( "position", position )
        FishE1.setAttribute( "scale", {x:500, y:500, z:500})
        FishE1.setAttribute( "gltf-model", "./gold_fish/scene.gltf")
        FishE1.setAttribute( "animation-mixer", {})

        islandE1.appendChild(FishE1);
    }
})