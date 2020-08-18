$("#fenButton").on("click",function () {
	let fenStr = $("#fenIn").val();
	translateFEN(fenStr);
	PrintBoard();
});