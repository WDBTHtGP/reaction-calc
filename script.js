function calculateTotal()
{
 
    let skill_coeffs={
    'bronze': 6.87,
    'silver': 6.69,
    'gold': 6.56,
    'platinum': 6.42,
    'diamond': 6.32,
    'master': 6.03,
    };
  
    let skill = $("input[name='skill']:checked").val();
    let skill_value = skill_coeffs[skill];
  
    let a_st = ($("#attack_startup").val());
    let p_ag = ($("#player_age").val());
    
    let logLDL = Math.log(a_st * (100/6));
  
    let YearsOver24 = p_ag - 24;
    if (YearsOver24 <= 0) {
      YearsOver24 = 0;
    }
    
    let pred_react = skill_value + (0.01 * YearsOver24);
    let pred_ms = Math.round(Math.E ** pred_react);
    let pred_frames = Math.round(pred_ms / (100/6));
      
    let punch_age = Math.round(((logLDL - skill_value)/0.01) + 24);
    
    let years_left = 0;
    if (punch_age < p_ag) {
      years_left = "You already can't react.";
    } else {
      years_left = punch_age - p_ag;
    }
  
    if (punch_age <= 24) {
       $("t3").text("Never reactable at this rank!");
    } else {
       $("t3").text(punch_age.toString() + " years old");
    }
     
    $("t3").text(punch_age);
  
    if (p_ag == 0) {
    $("t1").text("Input age value!");
    $("t4").text("Input age value!");
    } else {
    $("t1").text(pred_ms.toString() + " ms, " + pred_frames.toString() + " frames");
    $("t4").text(years_left); 
    }
  
  if (!(skill in skill_coeffs)) {
    $("t1").text("Select a rank!");
    $("t3").text("\(Skill affects reactions.");
    $("t4").text("See below video for details!\)");
  }
  }

$(function()
 {
    $(".qty").on("change keyup",calculateTotal);
    $("input[name='skill']").on("change",calculateTotal);
});