$("#create-coupons").click(function (e) {
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
	rows_co = find_rows();
	rows = rows_co[0];
	coupon = rows_co[1];
	console.log(rows);
	console.log(coupon);
	$("#coupons").append($('<div><p><table id="coupon-1" class="un-submitted"><tr><th>ottelu</th><th>1.</th></tr><tr><td>1.</td><td>x</td></tr></table></p><p><a class="btn btn-primary" href="#">Siirry maksamaan &raquo;</a></p></div>').html());
    })