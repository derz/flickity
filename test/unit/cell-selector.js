/* globals matchesSelector */

QUnit.test( 'cellSelector', function( assert ) {
  'use strict';

  var elem = document.querySelector('#cell-selector');

  var flkty = new Flickity( elem, {
    cellSelector: '.cell',
  } );

  var cellsMatchSelector = true;
  var i;
  for ( i = 0; i < flkty.cells.length; i++ ) {
    var cell = flkty.cells[i];
    var isMatch = matchesSelector( cell.element, flkty.options.cellSelector );
    cellsMatchSelector = cellsMatchSelector && isMatch;
  }

  // getCellElements()
  var cellElems = flkty.getCellElements();
  var queriedCellElems = elem.querySelectorAll( flkty.options.cellSelector );
  assert.equal( cellElems.length, flkty.cells.length,
      'getCellElements returns corrent number of elements' );
  for ( i = 0; i < cellElems.length; i++ ) {
    assert.equal( cellElems[i], queriedCellElems[i],
        'cell element same as queried cell element' );
  }

  assert.ok( cellsMatchSelector, 'all cell elements match cellSelector' );


} );
