function makeVeikkausUrl(cleaned_up_rows) {
    var lauantaivakio_gametype = 1;
    var address="https://www.veikkaus.fi/mobile?area=wagering&game=sport&op=checkGame&t=" + lauantaivakio_gametype + "&type=normal";
    for (var i = 0; i < cleaned_up_rows.length; i++) {
        var aRow = cleaned_up_rows[i];
        for (var j=0; j < aRow.length; j++) {
            var rowNum = (i + 1).toString(16);
            var gameId = (j + 1).toString(16);
            var gameResult = aRow[j];
            address += "&I" + rowNum + gameId + "=" + gameResult;
        }
    }
    return address;
}

$("#create-coupons").click(function (e) {
    e.preventDefault();


	function find_rows() {
	    var rows;
	    e.preventDefault();
	    rows = $("#raw-rows").val().split(/[\r\n]/);
	    rows = _.filter(rows, function(row) { return row.length > 1; });
	    rows = _.map(rows, function(row) { return row.replace(/[^1xX2]/g,'').toUpperCase();});
	    rows = _.map(rows, function(row) { return row.split('');});
	    return rows;
	}
	var rows = find_rows();

    function add_a_coupon(rows) {
        var coupon = _.zip.apply(null, rows)
        var coupon_contents = '<p>' + '<table id="coupon" class="un-submitted">';
        coupon_contents += '<thead><tr><th></th>' + _.map(_.range(coupon[0].length),function (i) {
            return '<th>' + ++i + '.</th>'
        }).join('') + '</tr></thead>'
        coupon_contents += _.map(_.zip(_.range(coupon.length), coupon),function (index_row) {
            var index = index_row[0];
            var row = index_row[1];
            return '<tr>' + '<th>' + ++index +
                '. kohde</th>' + _.map(row,function (elem) {
                return '<td>' + elem + '</td>';
            }).join('') + '</tr>';
        }).join('')
//        '<tr><td>1.</td><td>x</td></tr>' +
        coupon_contents +=
            '</table>' +
                '</p>';
        var linktext = '<p><a class="btn btn-primary siirry" target="_blank" href="' + makeVeikkausUrl(rows) + '">Siirry maksamaan &raquo;</a></p>';
        var new_coupon = '<div>' + coupon_contents + linktext + '</div>';
        $("#coupons").append($(new_coupon).html());
        $("#raw-rows").val("");
    }
    while (rows.length > 0) {
        add_a_coupon(_.first(rows, 11));
        rows = _.rest(rows, 11);
    }
})

$('body').on('click', '.siirry', function (e) {
    $(this).removeClass('btn-primary');
    $(this).text('Siirry maksamaan uudestaan');
});

