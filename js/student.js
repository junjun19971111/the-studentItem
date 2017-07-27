'use strict';
function addStudent() {
    let student = new Object();
    student.name = document.getElementById("name").value;
    student.sex = document.getElementById("sex").value;
    student.id = document.getElementById("id").value;
    student.klass = document.getElementById("klass").value;
    student.math = document.getElementById("math").value;
    student.chinese = document.getElementById("chinese").value;
    student.english = document.getElementById("english").value;
    student.code = document.getElementById("code").value;
    if(student.name&&student.sex&&student.id&&student.klass&&student.math&&student.chinese&&student.english&&student.code){
        alert(`成功录入学生${student.name}的信息`);
        localStorage.setItem(student.id,JSON.stringify(student));
    }
    else {
        alert('请将信息填写完全');
    }
}
function slectStudent() {
    var input_id=document.getElementById("inputId").value;
    let output="";
    var result=document.getElementById("result");
    input_id=input_id.split(',');
    for(let i =0;i<input_id.length;i++){
        var student1=JSON.parse(localStorage.getItem(input_id[i]));
        student1.allScore=parseFloat(student1.math)+parseFloat(student1.chinese)+parseFloat(student1.english)+parseFloat(student1.code);
        student1.avg=student1.allScore/4;
        output+=`<tr>
                            <th>${student1.name}</th>
                            <th>${student1.math}</th>
                            <th>${student1.chinese}</th>
                            <th>${student1.english}</th>
                            <th>${student1.code}</th>
                            <th>${student1.avg}</th>
                            <th>${student1.allScore}</th>
                      </tr>
                        `;
        }
        output+=`<br><div>
                            <button style="font-size: 12px" class="btn  btn-danger btn-sm" data-toggle="modal" data-target="#myModal">
	删除
</button>
<!-- 模态框（Modal） -->
<div class="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
	<div class="modal-dialog">
		<div class="modal-content">
			<div class="modal-header">
				<button type="button" class="close" data-dismiss="modal" aria-hidden="true">
					&times;
				</button>
			</div>
			<div class="modal-body">
				确定删除这些学生的信息？
			</div>
			<div class="modal-footer">
				<button type="button" class="btn btn-default" data-dismiss="modal">
					取消</button>
				<button type="button" class="btn btn-primary" onclick="deleteStudent()" data-dismiss="modal">
					确定
				</button>
			</div>
		</div><!-- /.modal-content -->
	</div><!-- /.modal -->
</div>`;
        result.innerHTML=output;
}
function deleteStudent() {
    var input_id=document.getElementById("inputId").value;
    var result=document.getElementById("result");
    input_id=input_id.split(',');
    for(let i in input_id) {
        localStorage.removeItem(input_id[i]);
    }
    result.innerHTML=`<tr></tr>`;
}
function modifyStudent() {
    var input_id=document.getElementById("modifyInput").value;
    let result=document.getElementById("modify");
    let modify_student=JSON.parse(localStorage.getItem(input_id));
    result.innerHTML=`<br>
                        <div class="input-group">
                        <span class="input-group-addon">姓名</span>
                        <input id="name1" onkeyup="value=value.replace(/[^\u4E00-\u9FA5]/g,'')"
                               onbeforepaste="clipboardData.setData('text',clipboardData.getData('text').replace(/[^\u4E00-\u9FA5]/g,''))" type="text" class="form-control" value="${modify_student.name}">
                        <span class="input-group-addon">学号</span>
                        <input id="id1" onkeyup="this.value=this.value.replace(/\D/g,'')"
                               onafterpaste="this.value=this.value.replace(/\D/g,'')" type="text" class="form-control" value="${modify_student.id}">
                        <span class="input-group-addon">性别</span>
                        <input id="sex1" type="text" class="form-control" value="${modify_student.sex}">
                        <span class="input-group-addon">班级</span>
                        <input id="klass1" type="text" class="form-control" value="${modify_student.klass}"">
                    </div>
                    <br>
                    <div class="input-group">
                        <span class="input-group-addon">数学</span>
                        <input id="math1" onkeyup="this.value=this.value.replace(/\D/g,'')"
                               onafterpaste="this.value=this.value.replace(/\D/g,'')" type="text" class="form-control"value="${modify_student.math}">
                        <span class="input-group-addon">语文</span>
                        <input id="chinese1" onkeyup="this.value=this.value.replace(/\D/g,'')"
                               onafterpaste="this.value=this.value.replace(/\D/g,'')" type="text" class="form-control" value="${modify_student.chinese}">
                        <span class="input-group-addon">英语</span>
                        <input id="english1" onkeyup="this.value=this.value.replace(/\D/g,'')"
                               onafterpaste="this.value=this.value.replace(/\D/g,'')" type="text" class="form-control" value="${modify_student.english}">
                        <span class="input-group-addon">编程</span>
                        <input id="code1" onkeyup="this.value=this.value.replace(/\D/g,'')"
                               onafterpaste="this.value=this.value.replace(/\D/g,'')" type="text" class="form-control" value="${modify_student.code}">
                    </div>
                    <br>
                    <button type="button" class="btn btn-primary " onclick="addModifyStudent()">确定修改</button>`;
}
function addModifyStudent() {
    let student = new Object();
    student.name = document.getElementById("name1").value;
    student.sex = document.getElementById("sex1").value;
    student.id = document.getElementById("id1").value;
    student.klass = document.getElementById("klass1").value;
    student.math = document.getElementById("math1").value;
    student.chinese = document.getElementById("chinese1").value;
    student.english = document.getElementById("english1").value;
    student.code = document.getElementById("code1").value;
    alert(`成功修改学生${student.name}的信息`);
    localStorage.setItem(student.id,JSON.stringify(student));
    var result=document.getElementById("modify");
    result.innerHTML=`<div>该学生信息已经被修改！</div>`

}
function showAllStudent() {
    let output="";
    let student_id_arry=[];
    var result=document.getElementById("result");
    for (let i=0;i<localStorage.length;i++){
        student_id_arry.push(localStorage.key(i));
    }
    let studentList=[];
    for (let i =0;i<student_id_arry.length;i++){
        var student2=JSON.parse(localStorage.getItem(student_id_arry[i]));
        student2.allScore=parseFloat(student2.math)+parseFloat(student2.chinese)+parseFloat(student2.english)+parseFloat(student2.code);
        student2.avg=student2.allScore/4;
        studentList.push(student2);
    }
    for(let i=0;i<studentList.length;i++){
        output+=`<tr>
                            <th>${studentList[i].name}</th>
                            <th>${studentList[i].math}</th>
                            <th>${studentList[i].chinese}</th>
                            <th>${studentList[i].english}</th>
                            <th>${studentList[i].code}</th>
                            <th>${studentList[i].avg}</th>
                            <th>${studentList[i].allScore}</th>
                      </tr>
                        `;
    }
    output+=`<br><div>
                            <button style="font-size: 12px" class="btn  btn-danger btn-sm" data-toggle="modal" data-target="#myModal">
	删除
</button>
<!-- 模态框（Modal） -->
<div class="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
	<div class="modal-dialog">
		<div class="modal-content">
			<div class="modal-header">
				<button type="button" class="close" data-dismiss="modal" aria-hidden="true">
					&times;
				</button>
			</div>
			<div class="modal-body">
				确定删除这些学生的信息？
			</div>
			<div class="modal-footer">
				<button type="button" class="btn btn-default" data-dismiss="modal">
					取消</button>
				<button type="button" class="btn btn-primary" onclick="deleteStudent()" data-dismiss="modal">
					确定
				</button>
			</div>
		</div><!-- /.modal-content -->
	</div><!-- /.modal -->
</div>`;
    result.innerHTML=output;
}
