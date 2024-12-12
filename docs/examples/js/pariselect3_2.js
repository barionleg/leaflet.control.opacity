// cnew 48.85, 2.35, 3
// new 48.849801, 2.343920, 3
// old 48.675, 1.183, 3
// blond setview 51.505, -0.09, 13
let map;
(function() {
  map = L.map('map').setView([48.85, 2.35], 13);
  map.addGoogleMutant();
  map.whenReady(function() {
    img = L.distortableImageOverlay('ibm.png', {
      corners: [
        L.latLng(48.898449, 2.238906),
        L.latLng(48.900255, 2.415374),
        L.latLng(48.806053, 2.226890),
        L.latLng(48.805148, 2.423613),
      ],
      mode: 'lock',
    });
    // create a second image
    img2 = L.distortableImageOverlay('raibm.png', {
      corners: [
        L.latLng(48.898449, 2.238906),
        L.latLng(48.900255, 2.415374),
        L.latLng(48.806053, 2.226890),
        L.latLng(48.805148, 2.423613),
      ],
            mode: 'lock',
    });
       img3 = L.distortableImageOverlay('ibm.png', {
      corners: [
        L.latLng(48.690941, 2.122176),
        L.latLng(48.700006, 2.328170),
        L.latLng(48.612011, 2.126296),
        L.latLng(48.597481, 2.409194),
      ],
      actions: [
        L.DistortAction,
        L.FreeRotateAction,
        L.LockAction,
        L.OpacityAction,
        L.DeleteAction,
        L.StackAction,
      ],
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
  });
})();
