$(document).ready(function () {
  var menus= ['首页', '项目', '技能', '教育', '实习', '简历']
  $('#pagepiling').pagepiling({
     loopBottom: true,
     navigation:{
       'tooltips':menus
     }
  });
})
