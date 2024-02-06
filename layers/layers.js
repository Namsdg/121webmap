var wms_layers = [];

var format_121_0 = new ol.format.GeoJSON();
var features_121_0 = format_121_0.readFeatures(json_121_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_121_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_121_0.addFeatures(features_121_0);
var lyr_121_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_121_0, 
                style: style_121_0,
                interactive: true,
    title: '121<br />\
    <img src="styles/legend/121_0_0.png" /> Missing data for extrapolation<br />\
    <img src="styles/legend/121_0_1.png" /> Off Target<br />\
    <img src="styles/legend/121_0_2.png" /> On Target<br />\
    <img src="styles/legend/121_0_3.png" /> <br />'
        });

lyr_121_0.setVisible(true);
var layersList = [lyr_121_0];
lyr_121_0.set('fieldAliases', {'poverty rate in 2015': 'poverty rate in 2015', 'Census tract': 'Census tract', 'poverty rate in 2020': 'poverty rate in 2020', 'Average rate of change in poverty rate (2015 to 2020)': 'Average rate of change in poverty rate (2015 to 2020)', 'projected poverty rate in 2030': 'projected poverty rate in 2030', 'target achievement in 2030': 'target achievement in 2030', 'numerical target': 'numerical target', });
lyr_121_0.set('fieldImages', {'poverty rate in 2015': 'TextEdit', 'Census tract': 'TextEdit', 'poverty rate in 2020': 'TextEdit', 'Average rate of change in poverty rate (2015 to 2020)': 'TextEdit', 'projected poverty rate in 2030': 'TextEdit', 'target achievement in 2030': 'TextEdit', 'numerical target': 'TextEdit', });
lyr_121_0.set('fieldLabels', {'poverty rate in 2015': 'no label', 'Census tract': 'no label', 'poverty rate in 2020': 'no label', 'Average rate of change in poverty rate (2015 to 2020)': 'no label', 'projected poverty rate in 2030': 'no label', 'target achievement in 2030': 'no label', 'numerical target': 'no label', });
lyr_121_0.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});