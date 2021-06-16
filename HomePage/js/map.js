
// var marketId = new Array();
//     marketId.push({ name : "서구청 직영점", addr : "인천 서구 탁옥로30"});
//     marketId.push({ name : "인하대 직영점", addr : "인천 미추홀구 인하로 89"});
//     marketId.push({ name : "구월동 직영점", addr : "안천 남동대로 700-1"});
//     marketId.push({ name : "영종도점", addr : "인천 중구 운남동로 3번길"});
//     marketId.push({ name : "검단사거리점", addr : "인천 서구 검단로487번길 4"});
//     marketId.push({ name : "송도신도시점", addr : "인천광역시 연수구 아트센터대로 8"});
//     marketId.push({ name : "부평구청점", addr : "인천 부평구 주부토로 143"});
// var map = null;

// var mapOptions = {
//     center: new naver.maps.LatLng(37.3595704, 127.105399),
//     zoom: 15,
//     mapTypeControl: true
// };

// function initMap() {
//     map = new naver.maps.Map('map', mapOptions);
//     map.setCursor('pointer');
// }


// $(function(){

//     marketId.push({ name : "서구청 직영점", addr : "인천 서구 탁옥로30"});
//     marketId.push({ name : "인하대 직영점", addr : "인천 미추홀구 인하로 89"});
//     marketId.push({ name : "구월동 직영점", addr : "안천 남동대로 700-1"});
//     marketId.push({ name : "영종도점", addr : "인천 중구 운남동로 3번길"});
//     marketId.push({ name : "검단사거리점", addr : "인천 서구 검단로487번길 4"});
//     marketId.push({ name : "송도신도시점", addr : "인천광역시 연수구 아트센터대로 8"});
//     marketId.push({ name : "부평구청점", addr : "인천 부평구 주부토로 143"});

// 	// enter key event
// 	// $("#key").keyup(function(e){
// 	// 	var code=(e.keyCode?e.keyCode:e.which);
// 	// 	if(code == 13){
// 	// 		findStoreName();
// 	// 	}
// 	// });
	
// 	// getStoreName();
// });



// // //전체 매장  좌표 찍기(시/도 별로 찍기)
// function getStoreName(){
	
//     // 맵 영역 초기화
//     $("#map_view").empty();
    
//     naverMapGrid($("#map_point_x").val(), $("#map_point_y").val(), data, "search_store");

//     chkCustBranch();
// 	// $.ajax({
// 	// 	type 		: 	'POST',
// 	// 	url			:	'/store/getBranch.json',		
// 	// 	contentType	:	'application/x-www-form-urlencoded; charset=UTF-8',
// 	// 	dataType	: 	'json',
// 	// 	success		:	function(data) {
			
// 	// 		if(data.length == 0){
				
// 	// 			var Tag    = "<li>";
// 	// 			Tag =Tag + "검색 조건에 해당하는 매장 정보가 없습니다.";
// 	// 			Tag =Tag + "</li>";
			
// 	// 			$('#BranchList').append(Tag);
// 	// 		}
// 	// 		else{
				
// 	// 			for(var i=0;i<data.length;i++)
// 	// 				markerId[i] = data[i].branch_id;
// 	// 			//alert($("#map_point_x").val()+","+$("#map_point_y").val()); 매장 좌표
				
// 	// 			// 맵 영역 초기화
// 	// 			$("#map_view").empty();
				
// 	// 			naverMapGrid($("#map_point_x").val(), $("#map_point_y").val(), data, "search_store");

// 	// 			chkCustBranch();
				
// 	// 		 }
// 	// 	},
// 	// 	error	:	 function(xhr, status, error)  {				
// 	// 		window.alert("매장 찾기 오류가 발생했습니다.");
// 	// 	}										
// 	// });	
// }

// // 매장명 검색
// function findStoreName(){
	
// 	var key = $("#key").val();
	
// 	if(key.length < 2){
// 		alert("검색어를 두자리 이상 입력해주세요.");
// 		return;
// 	}
		
// 	$("#map_point_x").val("");
	
// 	$('.store_search p:eq(1)').attr("style","visibility:hidden");
	
// 	// $.ajax({
// 	// 	type 		: 	'POST',
// 	// 	url			:	'/store/findBranchName.json',		
// 	// 	contentType	:	'application/x-www-form-urlencoded; charset=UTF-8',
// 	// 	data		:	{branch_nm : key},
// 	// 	dataType	: 	'json',
// 	// 	success		:	function(data) {
			
// 	// 		$('#BranchList').empty();
			
// 	// 		if(data.length == 0)
// 	// 			//$('.store_search p[style="visibility:hidden"]').attr("style","visibility:visible");
// 	// 			$('#store_text').attr("style","display:block");
// 	// 		else{
				
// 	// 			for(var i=0;i<data.length;i++){
					
// 	// 				var coordinate = data[i].coordinate;
// 	// 				var branch_id = data[i].branch_id;
// 	// 				var branch_nm = data[i].branch_nm;
// 	// 				var rownum = data[i].rownum;
					
// 	// 				var coord = coordinate.split(",");
					
// 	// 				var branchList = "<li><a style='cursor:pointer' onClick=\"naverMapTrans('"+branch_id+"','"+coord[0]+"','"+coord[1]+"','"+i+"','"+rownum+"');\">"+branch_nm+"</a></li>";	
// 	// 				$("#BranchList").append(branchList); 

// 	// 			}
				
// 	// 			//시/구/군 초기화
// 	// 			$("#sido").val("");
// 	// 			$("#gugun").val("");
				
// 	// 			$("#BranchList li:eq(0) a").trigger("click");
// 	// 		}
// 	// 	}
// 	// });
// }



// //초기 화면 설정
// function chkCustBranch(){
	
// 	// map_point_x가 null이 아니면 초기화면임
// 	if($("#map_point_x").val() != ""){
	
// 		// 등록된 고객 매장이 없을 때 방배본점 설정 
// 		//if($("#cust_branch_id").val() == "")
// 		//	$("#cust_branch_id").val("005410");
		
// 		// 매장좌표 검색
// 		$.ajax({
// 			type 		: 'POST',
// 			url			: '/store/findStoreInfo.json',
// 			contentType	: 'application/x-www-form-urlencoded; charset=UTF-8',
// 			data		: {branch_id : $("#cust_branch_id").val()},
// 			dataType	: 'json',
// 			success		: function(data) {
					
// 				if(data.length == 0){
// 					$("#cust_branch_id").val("005410");
// 					chkCustBranch();
// 				}
					
// 				else{
// 					var coordinate = data[0].coordinate;
// 					var si = data[0].si;
// 					var gu = data[0].gu;
// 					var branch_nm = data[0].branch_nm;
						
// 					var coord = coordinate.split(",");
						
// 					$("#cust_branch_nm").val(branch_nm);
// 					$("#cust_branch_si").val(si);
// 					$("#cust_branch_gu").val(gu);
// 					$("#map_point_x").val(coord[0]);
// 					$("#map_point_y").val(coord[1]);
						
// 					// 시/도 선택
// 					for(var i=1;i<18;i++){
// 						if($("#sido option:eq("+i+")").text() == si){
// 							$("#sido option:eq("+i+")").attr("selected","selected");
// 							getGugun($("#sido option:eq("+i+")").val());
// 						}
// 					}	
// 				}		
// 			},
// 			error		: function(){
// 				alert("고객 매장 좌표 설정 실패");
// 			}
// 		});
		
		
// 	}
// }

// // 시/도로 구/군 가져오기
// function getGugun(){
	
// 	var si = $("#sido").val();
	
// 	if(si == "")
// 		return;
	
// 	$.ajax({
// 		type 		: 	'POST',
// 		url			:	'/store/getGugun.json',			
// 		contentType	:	'application/x-www-form-urlencoded; charset=UTF-8',
// 		data		:	{"si" : si},
// 		dataType	: 	'json',
// 		success		:	function(data) {
			
// 			$('#gugun').empty();
			
// 			if(data.length == 0)
// 				alert("구/군 검색 에러");	
			
// 			else{				
// 				$("#gugun").append('<option value="">시/군/구</option>');
				
// 				for(var i=0;i<data.length;i++){
					
// 					var gu = data[i].gu;
					
// 					var gugunList = "<option value=\""+gu+"\">"+gu+"</option>";
// 					$("#gugun").append(gugunList);
// 				}
// 				if($("#map_point_x").val() != ""){
// 					$("#gugun option[value='"+$("#cust_branch_gu").val()+"']").attr("selected","selected");
// 					getGugunBranchList($("#cust_branch_si").val(),$("#cust_branch_gu").val());
// 				}
// 			}
// 		}
// 	});
// }

// // 해당 구/군지역의 매장리스트 가져오기
// function getGugunBranchList(si,gu){
	
// 	var sido = si.replace(" ","");
// 	var gugun = gu.replace(" ","");
		
// 	if(sido == "세종특별자치시")
// 		sido = "세종시";
	
// 	/*if($("#map_point_x").val() == "")
// 		getBranch(sido);*/
	
// 	$.ajax({
// 		type 		: 	'POST',
// 		url			:	'/store/getGugunBranchList.json',		
// 		contentType	:	'application/x-www-form-urlencoded; charset=UTF-8',
// 		data		:	{si  : sido,
// 						 gu : gugun},
// 		dataType	: 	'json',
// 		success		:	function(data) {
			
// 			$('#BranchList').empty();
			
// 			if(data.length == 0){ // 해당 지역에 매장이 존재하지 않을 때
				
// 				var Tag    = "<li>";
// 				Tag =Tag + "검색 조건에 해당하는 매장 정보가 없습니다.";
// 				Tag =Tag + "</li>";
			
// 				$('#BranchList').append(Tag);
// 			}
// 			else{	// 해당 지역에 매장이 존재할 때
				
// 				for(var i=0;i<data.length;i++){
					
// 					var coordinate = data[i].coordinate;
// 					var branch_id = data[i].branch_id;
// 					var branch_nm = data[i].branch_nm;
// 					var rownum    = data[i].rownum;
					
// 					var coord = coordinate.split(",");
					
// 					var branchList = "<li><a style='cursor:pointer' onClick=\"naverMapTrans('"+branch_id+"','"+coord[0]+"','"+coord[1]+"','"+i+"','"+rownum+"');\">"+branch_nm+"</a></li>";	
// 					$("#BranchList").append(branchList);
// 				}
				
// 				if($("#map_point_x").val() != ""){
// 					for(var i=0;i<data.length;i++){
// 						if($("#BranchList li:eq("+i+")").text() == $("#cust_branch_nm").val())
// 							$("#BranchList li:eq("+i+") a").trigger("click");
// 					}
// 				}
// 				else
// 					$("#BranchList li:eq(0) a").trigger("click");
// 			}
// 		},
// 		error	:	 function(xhr, status, error)  {				
// 			window.alert("매장 찾기 오류가 발생했습니다.");
// 		}										
// 	});	
// }



// //매장 상세 정보 표시
// function StoreDetaliView(branch_id){

// 	$.ajax({
// 		type 		: 'POST',
// 		url			: '/store/findStoreInfo.json',
// 		contentType	: 'application/x-www-form-urlencoded; charset=UTF-8',
// 		data		: {branch_id : branch_id},
// 		dataType	: 'json',
// 		success		: function(data) {
				
// 			if(data.length == 0)
// 				alert("해당 매장의 정보 없음");
				
// 			else{
				
// 				var branch_nm 		= data[0].branch_nm;
// 				var branch_tel1 	= data[0].branch_tel1;
// 				var si 				= data[0].si;
// 				var gu 				= data[0].gu;
// 				var dong 			= data[0].dong;
// 				var bunji 			= data[0].bunji;
// 				var building 		= data[0].building;
// 				var day_shop_time 	= data[0].day_shop_time;
// 				var day_deli_time	= data[0].day_deli_time;
// 				var day_pack_time 	= data[0].day_pack_time;
// 				var week_shop_time 	= data[0].week_shop_time;
// 				var week_deli_time 	= data[0].week_deli_time;
// 				var week_pack_time 	= data[0].week_pack_time;
// 				var isPack 			= data[0].isPack;
// 				var isSal 			= data[0].isSal;
// 				var isYoghury 		= data[0].isYoghury;
// 				var isParking 		= data[0].isParking;
// 				var isDelivery 		= data[0].isDelivery;
// 				var isFranchise 	= data[0].isFranchise;
// 				var isBuffet        = data[0].isBuffet;
// 				//var map_memo 		= data[0].map_memo;
// 				//var car_memo 		= data[0].car_memo;
// 				var addr_append 	= data[0].map_memo;//addr_append 2014.12.16 CJW
// 				var addr_doro       = data[0].addr_doro;
// 				var event_title 	= data[0].branch_event_title;
// 				var branch_event 	= data[0].branch_event;
// 				var pack_disc 		= data[0].pack_disc;
				
// 				// 매장 데이터 초기화
// 				$(".branch_data").empty();
				
// 				//-------------- 매장명 ----------------

// 				$(".branch_nm").append("미스터피자 "+branch_nm);					

				
// 				//-------------- 매장 전화번호 ----------------
					
// 					if(branch_tel1 == null)
// 						$(".branch_tel1").append("-");
					
// 					else{
// 						var tel = branch_tel1.replace(/-/gi,"");
// 						//alert(tel);
		
// 						if(tel.substring(0,2) == "02"){
// 							if(tel.length == 9)
// 								$(".branch_tel1").append(tel.substring(0,2)+"-"+tel.substring(2,5)+"-"+tel.substring(5,9));
// 							else
// 								$(".branch_tel1").append(tel.substring(0,2)+"-"+tel.substring(2,6)+"-"+tel.substring(6,10));
// 						}
// 						else{
// 							if(tel.length == 10)
// 								$(".branch_tel1").append(tel.substring(0,3)+"-"+tel.substring(3,6)+"-"+tel.substring(6,10));
// 							else
// 								$(".branch_tel1").append(tel.substring(0,3)+"-"+tel.substring(3,7)+"-"+tel.substring(7,11));
// 						}
// 					}	

				
				
// 				//$(".branch_tel1").append(branch_tel1);
// 				//-------------- 매장 주소 ----------------
// 				if(bunji == null) bunji = "";
// 				if(building == null) building = "";
// 				if(addr_append == "") addr_append = "-";
				

// 				$(".branch_addr").append(si+" "+gu+" "+dong+" "+bunji+" "+building);
// 				$(".branch_daddr").append(addr_append); // 매장 상세주소
// 				$(".branch_addr_doro").append(addr_doro);	

				

// 				//-------------- 영업 시간 ----------------
				
// 				if(day_shop_time == null) day_shop_time = "내점 불가";
// 				if(day_deli_time == null) day_deli_time = "배달 불가";
// 				if(day_pack_time == null) day_pack_time = "포장 불가";
// 				if(week_shop_time == null) week_shop_time = "내점 불가";
// 				if(week_deli_time == null) week_deli_time = "배달 불가";
// 				if(week_pack_time == null) week_pack_time = "포장 불가";
				
				
// 				var day_time = "<th scope='row'>평일</th>"; 
// 				day_time 	+= "<td>"+day_shop_time.replace("-"," ~ ")+"</td>";
// 				day_time 	+= "<td>"+day_deli_time.replace("-"," ~ ")+"</td>";
// 				day_time 	+= "<td>"+day_pack_time.replace("-"," ~ ")+"</td>";
				
// 				$(".day_time").append(day_time);
				
// 				var week_time = "<th scope='row'>주말</th>"; 
// 				week_time 	+= "<td>"+week_shop_time.replace("-"," ~ ")+"</td>";
// 				week_time 	+= "<td>"+week_deli_time.replace("-"," ~ ")+"</td>";
// 				week_time 	+= "<td>"+week_pack_time.replace("-"," ~ ")+"</td>";
				
// 				$(".week_time").append(week_time);
				
// 				//-------------- 안내 아이콘 ----------------
// 				$(".store_ico img").addClass("hide");
				
// 				//alert(isPack+isSal+isYoghury+isParking+isDelivery);
				
// 				if(isPack == 'Y'){
// 					$(".vOrder_btn").parent().removeClass("hide");
					
// 					if(pack_disc == "20")
// 						$(".store_ico img:eq(0)").removeClass("hide"); // 방문포장 20%
// 					else if(pack_disc == "30")
// 						$(".store_ico img:eq(1)").removeClass("hide"); // 방문포장 30%
// 					else if(pack_disc == "40")
// 						$(".store_ico img:eq(2)").removeClass("hide"); // 방문포장 30%
// 				}
// 				else
// 					$(".vOrder_btn").parent().addClass("hide");
				
// 				if(isSal == 'Y') $(".store_ico img:eq(3)").removeClass("hide");
// 				if(isYoghury == 'Y') $(".store_ico img:eq(4)").removeClass("hide");
// 				if(isParking == 'Y') $(".store_ico img:eq(5)").removeClass("hide");
// 				if(isDelivery == 'Y') $(".store_ico img:eq(6)").removeClass("hide");
// 				if(isFranchise == 'Y') $(".store_ico img:eq(7)").removeClass("hide");
// 				if(isBuffet == 'Y') $(".store_ico img:eq(8)").removeClass("hide");
				
// 				//-------------- 대중교통  ---------------- << 대중교통과 관련한 정확한 데이터가 필요함.
// 				//$(".pub_trans").append(addr_append);
				
// 				//-------------- 매장 이벤트 ----------------
// 				var event = branch_event.replace(/&lt;BR&gt;/gi,"<br>");
				
// 				if(event_title != "" && event != ""){
// 					$(".branch_event").append(event_title+"<br>");
// 					$(".branch_event").append(event);
// 				}
				
// 				//-------------- 방문포장 주문버튼 ----------------
// 				$(".vOrder_btn").attr("href","/order/visitOrder?branch_id="+branch_id);
				
// 			}		
// 		},
// 		error		: function(){
// 			alert("매장 정보 검색 실패");
// 		}
// 	});
	
// }




// var oMap;
// var oSize;
// var oLabel1;
// var infoWindow;

// var oMarkerBranchId = new Array();
// var oMarkerName = new Array();
// var oMarkerAddr = new Array();
// var oMarkerTel1 = new Array();
// var oMarkerPackDisc = new Array();
// var oMarkerPack = new Array();
// var oMarkerDelivery = new Array();
// var oMarkerSal = new Array();
// var oMarkerYoghury = new Array();
// var oMarkerParking = new Array();
// var oMarkerDoro = new Array();
// var oMarkerFranchise = new Array();
// var oMarkerBuffet = new Array();
// // 네이버 지도 생성
// function naverMapGrid(branch_x, branch_y, branch, page){
// 	//var oPoint = new naver.maps.LatLng(branch_y, branch_x);
// 	//naver.maps.setDefaultPoint('LatLng');
	
// 	var oPoint = new naver.maps.Point(branch_x, branch_y);

// 	if(page == "search_store")
// 		oSize = new naver.maps.Size(778, 345);
// 	else if(page == "visitOrder")
// 		oSize = new naver.maps.Size(660, 348);
	
// 	oMap = new naver.maps.Map('map_view' ,{
// 		useStyleMap: true,
// 		zoom:12,
// 		center : oPoint,
// 		mapTypes: new naver.maps.MapTypeRegistry({
//             'normal': naver.maps.NaverMapTypeOption.getNormalMap({
//                 projection: naver.maps.TM128Coord
//             }),
//             'terrain': naver.maps.NaverMapTypeOption.getTerrainMap({
//                 projection: naver.maps.TM128Coord
//             }),
//             'satellite': naver.maps.NaverMapTypeOption.getSatelliteMap({
//                 projection: naver.maps.TM128Coord
//             }),
//             'hybrid': naver.maps.NaverMapTypeOption.getHybridMap({
//                 projection: naver.maps.TM128Coord
//             })
//         }),
// 		scrollWheel : true,
// 		draggable : true,
// 		disableDoubleClickZoom : false,
// 		mapTypeControl: false,
// 		size : oSize,
// 		zoomControl : true,
// 		zoomControlOptions : {
// 			position: naver.maps.Position.TOP_RIGHT
// 		}
// 	});

	
// 	naver.maps.Event.once(oMap, 'init_stylemap', function () {
// 		var labelMapType = new naver.maps.NaverStyleMapTypeOption.getNormalLabelLayer();
// 	    var labelMapTypeRegistry = new naver.maps.MapTypeRegistry({
//             'normal': naver.maps.NaverMapTypeOption.getNormalMap({
//                 projection: naver.maps.TM128Coord
//             }),
//             'terrain': naver.maps.NaverMapTypeOption.getTerrainMap({
//                 projection: naver.maps.TM128Coord
//             }),
//             'satellite': naver.maps.NaverMapTypeOption.getSatelliteMap({
//                 projection: naver.maps.TM128Coord
//             }),
//             'hybrid': naver.maps.NaverMapTypeOption.getHybridMap({
//                 projection: naver.maps.TM128Coord
//             })
//         });
        
// 	    var labelLayer = new naver.maps.Layer('label', labelMapTypeRegistry);
// 	    labelLayer.setMap(oMap);
		
// 	});
	
// 	$.each(branch, function(index){	
// 		// 마커 생성
// 		var branch_coord = branch[index].coordinate;
// 		var coord = branch_coord.split(',');
// 		var branch_point = new naver.maps.Point(coord[0],coord[1]);
		
// 		// 매장 전화번호 설정
// 		var tel = branch[index].branch_tel1;
		
// 		if(tel == null)
// 			tel = "";
		
// 		tel = tel.replace(/-/gi,"");

// 		if(tel.substring(0,2) == "02"){
// 			if(tel.length == 9)
// 				tel = tel.substring(0,2)+"-"+tel.substring(2,5)+"-"+tel.substring(5,9);
// 			else
// 				tel = tel.substring(0,2)+"-"+tel.substring(2,6)+"-"+tel.substring(6,10);
// 		}
// 		else{
// 			if(tel.length == 10)
// 				tel = tel.substring(0,3)+"-"+tel.substring(3,6)+"-"+tel.substring(6,10);
// 			else
// 				tel = tel.substring(0,3)+"-"+tel.substring(3,7)+"-"+tel.substring(7,11);
// 		}
		
// 		var si = branch[index].si;
// 		var gu = branch[index].gu;
// 		var dong = branch[index].dong;
// 		var bunji = branch[index].bunji;
// 		var building = branch[index].building;
		
// 		if(dong == null)
// 			dong = "";
// 		if(bunji == null)
// 			bunji = "";
// 		if(building == null)
// 			building = "";
		
// 		var addr = si+" "+gu+" "+dong+" "+bunji+" "+building;
// 		// info window contents
// 		oMarkerBranchId[index] = branch[index].branch_id;
// 		oMarkerName[index] = branch[index].branch_nm;
// 		oMarkerAddr[index] = addr;
// 		oMarkerDoro[index] = branch[index].addr_doro;
// 		oMarkerTel1[index] = tel;
// 		oMarkerPackDisc[index] = branch[index].pack_disc;
// 		oMarkerPack[index] = branch[index].isPack;
// 		oMarkerDelivery[index] = branch[index].isDelivery;
// 		oMarkerSal[index] = branch[index].isSal;
// 		oMarkerYoghury[index] = branch[index].isYoghury;
// 		oMarkerParking[index] = branch[index].isParking;
// 		oMarkerFranchise[index] = branch[index].isFranchise;
// 		oMarkerBuffet[index] = branch[index].isBuffet;
		
// 		// Marker
// 		var oMarker1 = new naver.maps.Marker({
// 			title : branch[index].branch_nm,
// 			position : branch_point,
// 		    icon: {
// 		        content: '<img src="/images/store/ico_map_point.png">',
// 		        size: new naver.maps.Size(39, 45),
// 		        anchor: new naver.maps.Size(20, 45)
// 		    }
// 		});  // 기본매장 마커 생성 
// 		oMarker1.setMap(oMap);
		
// 		// 마커 클릭 시 인포 윈도우 표시
// 		naver.maps.Event.addListener(oMarker1, 'click', function(e) {
// 			var oTarget = e.overlay;
// 			var oMarkerTitle = oTarget.getTitle();
// 			var oMarkerId = 0;

// 			if (oTarget instanceof naver.maps.Marker) {

// 				if (e.clickCoveredMarker) {
// 					return;
// 				}
// 				for(var i=0; i<oMarkerName.length; i++){
// 					if(oMarkerName[i]==oMarkerTitle){
// 						oMarkerId=i;
// 						break;
// 					}
// 				}
				
// 				var content = '<div class="nmap_infowindow_content" style="left: 0px; right: auto; top: auto; bottom: 55px;">' + 
// 				'<div id="info'+oMarkerId+'">' + 
// 				'<ul><li class="btn_close"><input onclick=\'javascript:infoWindow.close();\' type="button" value="X"/></li>' + 
// 				'<li class="tit">'+oMarkerName[oMarkerId]+'</li>' + 
// 				'<li>'+oMarkerAddr[oMarkerId]+'</li>' + 
// 				'<li>'+oMarkerTel1[oMarkerId]+'</li>' + 
// 				'<li>방문포장 '+oMarkerPackDisc[oMarkerId]+'%</li><li class="ic_img">'; 
						
// 				if(oMarkerPack[oMarkerId] == 'Y' && oMarkerPackDisc[oMarkerId] == 20)
// 					content += '<img class="ico" src="/images/store/ico_packing2.gif" alt="방문포장 시 20% 할인" />';

// 				if(oMarkerPack[oMarkerId] == 'Y' && oMarkerPackDisc[oMarkerId] == 30)
// 					content += '<img class="ico" src="/images/store/ico_packing.gif" alt="방문포장 시 30% 할인" />';
				
// 				if(oMarkerPack[oMarkerId] == 'Y' && oMarkerPackDisc[oMarkerId] == 40)
// 					content += '<img class="ico" src="//cdn.mrpizza.co.kr/2014_resources/images/store/ico_packing3.gif" alt="방문포장 시 40% 할인" />';
							
// 				if(oMarkerSal[oMarkerId] == 'Y')
// 					content += '<img class="ico" src="/images/store/ico_salad.gif" alt="샐러드바" />';
						
// 				if(oMarkerYoghury[oMarkerId] == 'Y')
// 					content += '<img class="ico" src="/images/store/ico_yogurt.gif" alt="요거트바" />';
						
// 				if(oMarkerParking[oMarkerId] == 'Y')
// 					content += '<img class="ico" src="/images/store/ico_parking.gif" alt="주차시설" />';
						
// 				if(oMarkerDelivery[oMarkerId] == 'Y')
// 					content += '<img class="ico" src="/images/store/ico_delivery.gif" alt="배달" />';
				
// 				if(oMarkerFranchise[oMarkerFranchise] == 'Y')
// 					content += '<img class="ico" src="/images/store/ico_restaurant.gif" alt="레스토랑" />';
					
// 				if(oMarkerBuffet[oMarkerBuffet] == 'Y')
// 					content += '<img class="ico" src="//cdn.mrpizza.co.kr/2014_resources/images/store/ico_buffet.gif" alt="뷔페" />';

// 				content += '</li></ul></div></div>';
				
// 				infoWindow = new naver.maps.InfoWindow(); // - info window 생성
				
// 				oMap.setCenter(branch_point);
// 				infoWindow.setOptions({
// 					content : content,
// 					disableAnchor : true,
// 					pixelOffset: new naver.maps.Point(200,  -55)
// 				});
// 				infoWindow.open(oMap, branch_point);
// 				// 매장 상세 정보 표시
// 				StoreDetaliView(oMarkerBranchId[oMarkerId]);
// 			}
// 		});
// 	});
// }


// //선택한 매장으로 지도 좌표 설정
// function naverMapTrans(branch_id, branch_x ,branch_y, i, rownum)
// {	
// 	$("#BranchList li").removeClass("on");
// 	$("#BranchList li:eq("+i+")").addClass("on");
	
// 	var oPoint = new naver.maps.Point(branch_x, branch_y);
	
// 	// 마커 클릭 시 인포 윈도우 표시
	
// 	var i;
// 	var oMarkerId = 0;

// 	//alert(markerId.length);
	
// 	for(i=0;i<markerId.length;i++){
// 		if(markerId[i] == branch_id){
// 			oMarkerId = i;
// 			break;
// 		}
// 	}
	
		

// 	var content = '<div class="nmap_infowindow_content" style="left: 0px; right: auto; top: auto; bottom: 55px;">' + 
// 	'<div id="info'+oMarkerId+'">' + 
// 	'<ul><li class="btn_close"><input onclick=\'javascript:infoWindow.close();\' type="button" value="X"/></li>' + 
// 	'<li class="tit">'+oMarkerName[oMarkerId]+'</li>' + 
// 	'<li>'+oMarkerAddr[oMarkerId]+'</li>' + 
// 	'<li>'+oMarkerTel1[oMarkerId]+'</li>' + 
// 	'<li>방문포장 '+oMarkerPackDisc[oMarkerId]+'%</li><li class="ic_img">'; 
			
// 	if(oMarkerPack[oMarkerId] == 'Y' && oMarkerPackDisc[oMarkerId] == 20)
// 		content += '<img class="ico" src="/images/store/ico_packing2.gif" alt="방문포장 시 20% 할인" />';

// 	if(oMarkerPack[oMarkerId] == 'Y' && oMarkerPackDisc[oMarkerId] == 30)
// 		content += '<img class="ico" src="/images/store/ico_packing.gif" alt="방문포장 시 30% 할인" />';
	
// 	if(oMarkerPack[oMarkerId] == 'Y' && oMarkerPackDisc[oMarkerId] == 40)
// 		content += '<img class="ico" src="//cdn.mrpizza.co.kr/2014_resources/images/store/ico_packing3.gif" alt="방문포장 시 40% 할인" />';
				
// 	if(oMarkerSal[oMarkerId] == 'Y')
// 		content += '<img class="ico" src="/images/store/ico_salad.gif" alt="샐러드바" />';
			
// 	if(oMarkerYoghury[oMarkerId] == 'Y')
// 		content += '<img class="ico" src="/images/store/ico_yogurt.gif" alt="요거트바" />';
			
// 	if(oMarkerParking[oMarkerId] == 'Y')
// 		content += '<img class="ico" src="/images/store/ico_parking.gif" alt="주차시설" />';
			
// 	if(oMarkerDelivery[oMarkerId] == 'Y')
// 		content += '<img class="ico" src="/images/store/ico_delivery.gif" alt="배달" />';
	
// 	if(oMarkerFranchise[oMarkerFranchise] == 'Y')
// 		content += '<img class="ico" src="/images/store/ico_restaurant.gif" alt="레스토랑" />';
		
// 	if(oMarkerBuffet[oMarkerBuffet] == 'Y')
// 		content += '<img class="ico" src="//cdn.mrpizza.co.kr/2014_resources/images/store/ico_buffet.gif" alt="뷔페" />';

// 	content += '</li></ul></div></div>';
		


// 	infoWindow = new naver.maps.InfoWindow();
	
// 	oMap.setCenter(oPoint);	
// 	infoWindow.setOptions({
// 		content : content,
// 		disableAnchor : true,
// 		pixelOffset: new naver.maps.Point(200, -55)
// 	});
// 	infoWindow.open(oMap, oPoint);
	
// 	// 매장 상세 정보 표시
// 	StoreDetaliView(branch_id);
// }





var map = new naver.maps.Map("map", {
    center: new naver.maps.LatLng(37.3595316, 127.1052133),
    zoom: 18,
    mapTypeControl: true
});

var infoWindow = new naver.maps.InfoWindow({
    anchorSkew: true
});

map.setCursor('pointer');

function initGeocoder() {
    if (!map.isStyleMapReady) {
        return;
    }

    map.addListener('click', function(e) {
        searchCoordinateToAddress(e.coord);
    });

	$("#key").keyup(function(e){
		var code=(e.keyCode?e.keyCode:e.which);
		if(code == 13){
			searchCoordinateToAddress($('#address').val());
		}
	});

    $('#submit').on('click', function(e) {
        e.preventDefault();

        searchAddressToCoordinate($('#address').val());
    });

    searchAddressToCoordinate('인천 서구 탁옥로30');

}



function searchCoordinateToAddress(latlng) {

    infoWindow.close();

    naver.maps.Service.reverseGeocode({
        coords: latlng,
        orders: [
            naver.maps.Service.OrderType.ADDR,
            naver.maps.Service.OrderType.ROAD_ADDR
        ].join(',')
    }, function(status, response) {
        if (status === naver.maps.Service.Status.ERROR) {
            return alert('Something Wrong!');
        }

        var items = response.v2.results,
            address = '',
            htmlAddresses = [];

        for (var i=0, ii=items.length, item, addrType; i<ii; i++) {
            item = items[i];
            address = makeAddress(item) || '';
            addrType = item.name === 'roadaddr' ? '[도로명 주소]' : '[지번 주소]';

            htmlAddresses.push((i+1) +'. '+ addrType +' '+ address);
        }

        infoWindow.setContent([
            '<div style="padding:10px;min-width:200px;line-height:150%;">',
            '<h4 style="margin-top:5px;">검색 좌표</h4><br />',
            htmlAddresses.join('<br />'),
            '</div>'
        ].join('\n'));

        infoWindow.open(map, latlng);
    });
}

function searchAddressToCoordinate(address) {
    naver.maps.Service.geocode({
        query: address
    }, function(status, response) {
        if (status === naver.maps.Service.Status.ERROR) {
            return alert('Something Wrong!');
        }

        if (response.v2.meta.totalCount === 0) {
            return alert('totalCount' + response.v2.meta.totalCount);
        }

        var htmlAddresses = [],
            item = response.v2.addresses[0],
            point = new naver.maps.Point(item.x, item.y);

        if (item.roadAddress) {
            htmlAddresses.push('[도로명 주소] ' + item.roadAddress);
        }

        if (item.jibunAddress) {
            htmlAddresses.push('[지번 주소] ' + item.jibunAddress);
        }
        infoWindow.setContent([
            '<div style="padding:10px;min-width:200px;line-height:150%;">',
            '<h4 style="margin-top:5px;">검색 주소 : '+ address +'</h4><br />',
            htmlAddresses.join('<br />'),
            '</div>'
        ].join('\n'));

        map.setCenter(point);
        infoWindow.open(map, point);
    });
}


function makeAddress(item) {
    if (!item) {
        return;
    }

    var name = item.name,
        region = item.region,
        land = item.land,
        isRoadAddress = name === 'roadaddr';

    var sido = '', sigugun = '', dongmyun = '', ri = '', rest = '';

    if (hasArea(region.area1)) {
        sido = region.area1.name;
    }

    if (hasArea(region.area2)) {
        sigugun = region.area2.name;
    }

    if (hasArea(region.area3)) {
        dongmyun = region.area3.name;
    }

    if (hasArea(region.area4)) {
        ri = region.area4.name;
    }

    if (land) {
        if (hasData(land.number1)) {
            if (hasData(land.type) && land.type === '2') {
                rest += '산';
            }

            rest += land.number1;

            if (hasData(land.number2)) {
                rest += ('-' + land.number2);
            }
        }

        if (isRoadAddress === true) {
            if (checkLastString(dongmyun, '면')) {
                ri = land.name;
            } else {
                dongmyun = land.name;
                ri = '';
            }

            if (hasAddition(land.addition0)) {
                rest += ' ' + land.addition0.value;
            }
        }
    }

    return [sido, sigugun, dongmyun, ri, rest].join(' ');
}

function hasArea(area) {
    return !!(area && area.name && area.name !== '');
}

function hasData(data) {
    return !!(data && data !== '');
}

function checkLastString (word, lastString) {
    return new RegExp(lastString + '$').test(word);
}

function hasAddition (addition) {
    return !!(addition && addition.value);
}

naver.maps.onJSContentLoaded = initGeocoder;
naver.maps.Event.once(map, 'init_stylemap', initGeocoder);