function deleteRecord(id){
	$.ajax({
		method: "POST",
		url: "/matches/delete",
		data: { 'id':id},
		success:function(){
			location.reload();
		}
	})
}