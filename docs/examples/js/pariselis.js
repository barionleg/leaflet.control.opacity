// cnew 48.85, 2.35, 3
// new 48.849801, 2.343920, 3
// old 48.675, 1.183, 3
// blond setview 51.505, -0.09, 13

let map;

(function() {
  map = L.map('map').setView([48.856301, 2.321205], 12);
  map.addGoogleMutant();

  map.whenReady(function() {
    img = L.distortableImageOverlay('ibm.png', {
      corners: [
        L.latLng(48.895647, 2.186279),
        L.latLng(48.930845, 2.435532),
        L.latLng(48.765015, 2.212029),
        L.latLng(48.802793, 2.478447),
      ],
  
          mode: 'lock',

    });

    // create a second image
    img2 = L.distortableImageOverlay('raibm.png', {
      corners: [
        L.latLng(48.898130, 2.240524),
        L.latLng(48.910993, 2.415619),
        L.latLng(48.804828, 2.240524),
        L.latLng(48.813646, 2.440338),
      ],
 mode: 'lock',
 
    });

       img3 = L.distortableImageOverlay('t_db_map.png', {
      corners: [
        L.latLng(48.910316, 2.214775),
        L.latLng(48.908285, 2.443771),
        L.latLng(48.807994, 2.213745),
        L.latLng(48.807542, 2.437592),
      ],
 mode: 'lock',
   
    });
    img4 = L.distortableImageOverlay('raibm.png', {
      actions: [
        L.ScaleAction,
        L.DistortAction,
        L.RotateAction,
        L.FreeRotateAction,
        L.LockAction,
        L.OpacityAction,
        L.DeleteAction,
        L.StackAction,
      ],
      corners: [
        L.latLng(48.668273, 2.649520),
        L.latLng(48.663738, 2.932418),
        L.latLng(48.503848, 2.601455),
        L.latLng(48.502028, 2.871993),
      ],
    });
    imgGroup = L.distortableCollection().addTo(map);

    /* TODO: make an addLayers func */

    imgGroup = L.distortableCollection().addTo(map);

    /* TODO: make an addLayers func */
    imgGroup.addLayer(img);
    imgGroup.addLayer(img2);
    imgGroup.addLayer(img3);



  });
})();
