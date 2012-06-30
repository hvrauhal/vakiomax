$("#create-coupons").click(function (e) {
    e.preventDefault();

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

	function find_rows() {
	    var rows, coupon_ordered;
	    e.preventDefault();
	    rows = $("#raw-rows").val().split(/[\r\n]/);
	    rows = _.filter(rows, function(row) { return row.length > 1; });
	    rows = _.map(rows, function(row) { return row.replace(/[^1xX2]/g,'').toUpperCase();});
	    rows = _.map(rows, function(row) { return row.split('');});
	    coupon_ordered = _.zip.apply(null, rows);
	    return [rows, coupon_ordered];
	}
	var rows_co = find_rows();
	var rows = rows_co[0];
	var coupon = rows_co[1];
	console.log(rows);
	console.log(coupon);
    var coupon_contents = '<p><table id="coupon-1" class="un-submitted"><tr><th>ottelu</th><th>1.</th></tr><tr><td>1.</td><td>x</td></tr></table></p>';

    var linktext = '<p><a class="btn btn-primary" target="_blank" href="' + makeVeikkausUrl(rows) + '">Siirry maksamaan &raquo;</a></p>';
    $("#coupons").append($('<div>' + coupon_contents + linktext + '</div>').html());
    })
