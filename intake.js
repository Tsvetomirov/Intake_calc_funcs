$(document).ready(function($) {
 $('.intake-pick').on('change', function() {
  var value = $(this).find(":selected").val();


  $('.intake-calc-field').remove();
  $('.odd_intake, .even_intake').remove();
  $('.intake_submit').remove();

  for (i = 1; i <= value; i++) {


   switch (i) {

    case i < 1:
     var countBG = 'Грешен ден ';
     break;
    case i > 14:
     var countBG = 'Грешен ден';
     break;
    case i = 1:
     var countBG = 'Първи ден';
     break;
    case i = 2:
     var countBG = 'Втори ден';
     break;
    case i = 3:
     var countBG = 'Трети ден';
     break;
    case i = 4:
     var countBG = 'Четвърти ден';
     break;
    case i = 5:
     var countBG = 'Пети ден';
     break;
    case i = 6:
     var countBG = 'Шест ден';
     break;
    case i = 7:
     var countBG = 'Седми ден';
     break;
    case i = 8:
     var countBG = 'Осми ден';
     break;
    case i = 9:
     var countBG = 'Девети ден';
     break;
    case i = 10:
     var countBG = 'Десети ден';
     break;
    case i = 11:
     var countBG = 'Единадесети ден';
     break;
    case i = 12:
     var countBG = 'Дванадесети ден';
     break;
    case i = 13:
     var countBG = 'Тринaдесети ден';
     break;
    case i = 14:
     var countBG = 'Четиринaдесети ден';
     break;
   }
   if (i % 2 == 0) {
    $(".intake-body").append('<section class = "even_intake"><div class = "days_count"><span>' + countBG + '</span> <input type = "text" class = "intake-calc-field" for ="field-' + i + '" name ="day' + i + '"/></div><section>').after();
   } else {
    $(".intake-body").append('<section class = "odd_intake"><div class = "days_count"><span>' + countBG + '</span> <input type = "text" class = "intake-calc-field" for ="field-' + i + '" name ="day' + i + '"/></div><section>').after();
   }
  }
  $('#intake_input').append('<input  class = "intake_submit" type = "submit"  value = "Изпращане"/>');
 });





 $('#intake_input').on('click', function(e) {
  //e.preventDefault();
  var posts = $('.wrapper > #intake-form-x1');
  resetErrors();
  $.ajax({
   type: "POST",
   data: posts.serialize(),
   cache: false,
   url: '/ajax/intake/intake_ajax.php',
   dataType: "JSON",
   success: function(result) {
    var elements = [];
    //var lastElement = Object.keys(result).sort().pop();
    $.each(result, function(i, v) {
     if (v === null) {
      v = 0;
     }
     elements[i] = v;
    });
    var lastElement = elements.responce;
    if (lastElement == "true") {


     $('#intake-form-x1').after().append('<form><section id = "intake_goal_main"><select id = "intake-pick-goal"><option>-- Изберете цел --</option><option value = \'intake-bulk\'>Покачване на килограми</option><option value = \'intake-cut\'>Сваляне на килограми</option><option value = \'intake-maintenance\'>Поддържане на килограми</option></select></form> ');



     // na promqna            
     $('#intake-pick-goal').on('change', function() {

      var goal = $(this).find(':selected').val();
      if (goal === '') {
       $('.intake-goal-choosen').remove();
      } else if (goal == 'intake-bulk') {
       $('.intake-goal-choosen').remove();
       $(this).append().after("<div class =\"intake-goal-choosen\" ><label class = 'ig-label'><span><input type = \"radio\" name= \"intake-bulk-pick\" class = \"intake-picked\" value = \"880\"/></span>Най-сигурно качване на мускулна маса, но и най-сигурно качване на мазнини!(около 0,7-0,9 кг на седмица)</label><label class = 'ig-label'><span><input type = \"radio\" name= \"intake-bulk-pick\" class =\"intake-picked\" value = \"660\"/></span>Умерено покачване на мускулна маса, с редуцирано покачване на мазнини (около 0,5-0,7 кг седмично) </label><label class = 'ig-label'><span><input type = radio name= \"intake-bulk-pick\" value = \"440\" class = \"intake-picked\"/></span>Покачване на възможно най-чисто количество мускулна маса, с минимално покачване на мазнини(около 0,3-0,5 кг седмично)</label></div>"

       ); //затваряща на добавените елементи
       $('input[type=radio][name=intake-bulk-pick]').on('click', function() {

        $('.intake_goal_cal_result').remove();
        var goal = $(this).attr('value');
        var goal = parseInt(goal);

        var path = $(this).closest('label');
        if (goal < elements.result_from_sum) {
         var result = goal - elements.result_from_sum;

         $(path).append().after('<div class = "intake_goal_cal_result">Превишили сте калориите с/със ' + Math.abs(Math.round(result)) + '</div>');
        } else {
         if (elements.result_from_sum < 0) {
          var result = goal * (-1) + elements.result_from_sum;
          $(path).append().after('<div class = "intake_goal_cal_result">Трябват ви още ' + Math.abs(Math.round(result)) + 'калории' + "</div>");
         } else {
          var result = goal - elements.result_from_sum;

          $(path).append().after('<div class = "intake_goal_cal_result" > Трябват ви още ' + Math.abs(Math.round(result)) + 'калории' + "</div>");
         }
        }
        // return false;
       });
      } //ако избраното е intake-bulk от #intake-pick-goal
      else if (goal = 'intake-cut') {
       $('.intake-goal-choosen').remove();

       var fastest_weight_loss = 0.012 * elements.average_weight;
       var average_weight_loss = 0.008 * elements.average_weight;
       var lowest_weight_loss = 0.005 * elements.average_weight


       var weight_loss_result = average_weight_loss -
        $(this).append().after("<div class =\"intake-goal-choosen\" ><label class = 'ig-label'><span><input type = \"radio\" name= \"intake-cut-pick\" class = \"intake-picked\"value = '" + fastest_weight_loss + "'/></span>Най-бързо сваляне, с най-голям риск от загуба на мускулна маса(" + Math.round(fastest_weight_loss * 100) / 100 + " кг на седмица)</label><label class = 'ig-label'><span><input type = \"radio\" name= \"intake-cut-pick\" class = \"intake-picked\" value = '" + average_weight_loss + "'/></span>Умерено сваляне, със щадене на мускулната тъкан (около " + Math.round(average_weight_loss * 100) / 100 + " кг седмично) </label><label class = 'ig-label'><span><input type = radio name= \"intake-cut-pick\" class = \"intake-picked\" value = '" + lowest_weight_loss + "'/></span>Най-бавното сваляне на мазнини, с възможно най-щадящ ефект над мускулната тъкан!(около " + Math.round(lowest_weight_loss * 100) / 100 + " кг седмично)</label></div>"); // затваряща на добавените елементи, ако потребителя е избрал 'cut'

       $('input[type=radio][name=intake-cut-pick]').on('click', function() {
        var goal = $(this).attr('value');
        var path = $(this).closest('label');
        $('.intake_goal_cal_result').remove();
        if (elements.result_from_sum > 0) {
         var deficit_calories = 7700 * goal;
         var deficit_calories_per_day = deficit_calories / 7;
         var result = elements.result_from_sum * -1 + deficit_calories_per_day * -1;
         $(path).append().after('<div class = "intake_goal_cal_result">Вие сте в положителен калориен баланс, т.е качвате килограми, калориите,които трябва да отнемете за постигането на целта ви са: ' + Math.round(result) + '</div>');
        } else {

         var goal_calories = 7700 * goal;
         var goal_calories = goal_calories / elements.number_of_days;
         if (goal_calories > Math.abs(elements.result_from_sum)) {
          var result = goal_calories + elements.result_from_sum; // елементс е отрицателно число !! за това ги събирам
          ;

          $(path).append().after('<div class = "intake_goal_cal_result">Трябва да премахнете още ' + Math.round(result) + ' калории за достигане на целта!</div>');

         } else {

          var result = elements.result_from_sum + goal_calories; //събирам ги,защото elements.result_from_sum е отрицателно!

          $(path).append().after('<div class = "intake_goal_cal_result" >Превишили сте целта си с/със ' + Math.abs(Math.round(result)) + 'калории' + "</div>");
         }

        }

       }); // ELSE If
       return false;
      }


     });
     //Директно добавяме сърч поле извън цикъла и след всички добавени елементи !

     $('#intake_goal_main').after('<label class = "is-label">Търсене на храни:</label><input type = "text" name = "intake-search-field " class = "intake-search-field" autocomplete = "off"/>');


     //Махаме дефаут събмит функцията ...
     $('.intake-search-field').keydown(function(event) {
      if (event.keyCode == 13) {
       event.preventDefault();
       return false;
      }
     });





     var choosen_goal_result = [];





     //Слагаме функция на пускане на бутона... 
     $('.intake-search-field').on('keyup', function() {

      var intake_search_product_name = $(this).val();

      $.ajax({
       type: "POST",
       dataType: "json",
       data: {
        'product_name': intake_search_product_name
       },
       cache: false,
       url: '/ajax/intake/intake_search.php',
       success: function(result) {
        if (result) {

         $('.intake_search_result_box').remove();

         $('.intake-search-field').after('<div class = "intake_search_result_box"></div>');
         $.each(result, function(i, v) {
          var image_path = '';
          try {

           if (v.image.length < 1) {
            var image_path = '/uploads/images/no_result.png';
           } else {
            var image_path = v.image;
           }

          } catch (err) {
           $('.intake_search_result_box').append('<div>Няма резултати !</div>');
           //console.log(err);
           return false;
          }


          if ($('#intake-pick-goal').find(':selected').val() == 'intake-bulk') {
           var choosen_goal_cals = $("input[name=intake-bulk-pick]:checked").val();
           // Първо проверяваме, дали не е празен избора, т.е потребителя е избрал сваляне/качвае но не и цел!
           if (typeof choosen_goal_cals == 'undefined') {
            if (elements.result_from_sum == 0) {
             var choosen_goal_result = 'Изберете цел';
            } else if (elements.result_from_sum < 0) {
             var calc_1 = elements.result_from_sum * (-1);
             var calc_2 = calc_1 / v.calories;
             var calc_3 = calc_2 * 100;
             var choosen_goal_result = '+' + Math.round(calc_3) + 'гр'; //'Добавете още '+Math.round(calc_3)+' грама, за да поддържате сегашните килограми или изберете цел, от полето за цели!'  ;
            } else {
             var calc_1 = elements.result_from_sum / v.calories;
             var calc_2 = calc_1 * 100;
             var choosen_goal_result = '-' + Math.round(calc_2) + 'гр'; //'Премахете '+Math.round(calc_2)+'грама , за да поддържате сегашните килограми или изберете цел, от полето за цели!' ;
            }
           } else {
            // от тук вече проверяваме и сравнявваме изборите от радио бутоните... потребителя е избрал цел 
            if (elements.result_from_sum == 0) {
             var calc_1 = choosen_goal_cals / v.calories;
             var calc_2 = calc_1 * 100;
             var choosen_goal_result = '+' + Math.round(calc_2) + 'гр';
            } else if (elements.result_from_sum < 0) {
             var calc_1 = elements.result_from_sum * (-1);
             var calc_2 = parseInt(choosen_goal_cals) + calc_1;
             var calc_3 = calc_2 / v.calories;
             var calc_4 = calc_3 * 100;
             var choosen_goal_result = '+' + Math.round(calc_4) + 'гр'; //'Повишете храната с  ' + Math.round(calc_4) + ' грама,  за да достигане на избраната от Вас цел!';
            } else {
             if (choosen_goal_cals < elements.result_from_sum) {
              //превишили са целта
              var calc_1 = elements.result_from_sum - parseInt(choosen_goal_cals);
              var calc_2 = calc_1 / v.calories;
              var calc_3 = calc_2 * 100;
              var choosen_goal_result = '-' + Math.round(calc_3) + 'гр'; //'Превишили сте целта с/със '+Math.round(calc_1)+ ' калории, намалете дадената храна с/със '+Math.round(calc_3)+'грама!';
             } else {
              // в положителен баланс са, под целта от дадения radio button
              var calc_1 = parseInt(choosen_goal_cals) - elements.result_from_sum;
              var calc_2 = calc_1 / v.calories;
              var calc_3 = calc_2 * 100;
              var choosen_goal_result = '+' + Math.round(calc_3) + 'гр'; //'Повишете храната с/със '+Math.round(calc_3)+'грама, за достигане на избраната от Вас цел!';
             }
            }
           }
          } else if ($('#intake-pick-goal').find(':selected').val() == 'intake-cut') {

           var choosen_goal_value = $('input[name=intake-cut-pick]:checked').val();

           if (typeof choosen_goal_value == 'undefined') {
            if (elements.result_from_sum == 0) {
             var choosen_goal_result = 'Изберете цел';
            } else if (elements.result_from_sum < 0) {
             var calc_1 = elements.result_from_sum * (-1);
             var calc_2 = calc_1 / v.calories;
             var calc_3 = calc_2 * 100;
             var choosen_goal_result = '+' + Math.round(calc_3) + 'гр'; //'Добавете още '+Math.round(calc_3)+' грама, за да поддържате сегашните килограми или изберете цел, от полето за цели!' ;
            } else {
             var calc_1 = elements.result_from_sum / v.calories;
             var calc_2 = calc_1 * 100;
             var choosen_goal_result = '-' + Math.round(calc_2) + ' гр';
             //'Премахете '+Math.round(calc_2)+'грама , за да поддържате сегашните килограми или изберете цел, от полето за цели!' ;

            }
           } else {
            //превръщаме килограмите взети от инпът филда в калории и сравняваме кое е по-голямо
            if (elements.result_from_sum == 0) {

             var calc_1 = choosen_goal_value * 7700;
             var calc_2 = calc_1 / elements.number_of_days;
             var calc_3 = calc_2 / v.calories;
             var calc_4 = calc_3 * 100;
             if (calc_4 == 0) {
              var choosen_goal_result = Math.round(calc_4) + ' гр';
             } else {
              var choosen_goal_result = '-' + Math.round(calc_4) + ' гр';

             }
             //за да поддържате сегашните килограми или изберете цел, от полето по-горе!'  ;
            } else if (elements.result_from_sum < 0) {
             var choosen_goal_to_cals = choosen_goal_value * 7700;
             var choosen_goal_day_division = choosen_goal_to_cals / elements.number_of_days * (-1);



             if (elements.result_from_sum > choosen_goal_day_division) {
              // Трябва да премахнем //грамове за достигане на целта
              var positive1 = elements.result_from_sum * (-1);
              var positive2 = choosen_goal_day_division * (-1);
              var calc1 = positive2 - positive1;
              var calc2 = Math.round(calc1) / v.calories;
              var calc3 = calc2 * 100;
              var choosen_goal_result = '+' + Math.round(calc3) + 'гр'; //'Сваляте прекалено бързо, добавете '+Math.round(calc3)+'грама, за да достигнете целта от '+choosen_goal_value+' кг на седмица!' ;

             } else {

              // Svalqte prekaleno burzo,dobavete //gramove
              var positive1 = elements.result_from_sum * (-1);
              var positive2 = choosen_goal_day_division * (-1);
              var calc1 = positive1 - positive2;
              var calc2 = Math.round(calc1) / v.calories;
              var calc3 = calc2 * 100;
              var choosen_goal_result = '-' + Math.round(calc3) + 'гр'; //'Премахнете '+Math.round(calc3)+'грама , от дадената храна за да постигнете целта от '+choosen_goal_value+' кг на седмица!' ;


             }

            } else if (elements.result_from_sum > 0) {
             var positive1 = elements.result_from_sum;
             var positive2 = choosen_goal_value * (-1);
             var calc1 = positive1 + positive2;
             var calc2 = calc1 / v.calories;
             var calc3 = calc2 * 100;
             var choosen_goal_result = '-' + Math.round(calc3) + 'гр'; //'Трябва да намалите храната с'+calc2+'грама, за да достигнете целта си от'+choosen_goal_value+'!';
            }
           }
          } else { //else if  dobavi za maintenance !!
           if (elements.result_from_sum == 0) {
            var choosen_goal_result = 'Изберете цел';
           } else if (elements.result_from_sum < 0) {
            var calc_1 = elements.result_from_sum * (-1);
            var calc_2 = calc_1 / v.calories;
            var calc_3 = calc_2 * 100;
            var choosen_goal_result = '+' + Math.round(calc_3) + 'гр'; //'Добавете още '+Math.round(calc_3)+' грама, за да поддържате сегашните килограми или изберете цел, от полето по-горе!'  ;
           } else {
            var calc_1 = elements.result_from_sum / v.calories;
            var calc_2 = calc_1 * 100;
            var choosen_goal_result = '-' + Math.round(calc_2) + 'гр'; //'Премахете '+Math.round(calc_2)+'грама , за да поддържате сегашните килограми или изберете цел, от полето по-горе!' ;
           }
          }

          var state = v.state.replace(',', '</br>');
          var food_result_print = $('.intake_search_result_box').append('<div class="search-result_for_intake"><div class = "i-search-food-info"><a href="/foods/Food-Information-BG.php?id=' + v.id + '" ><img id="result-image"src="' + image_path + '"/></a><div style = "display:inline-block; vertical-align: middle;"><div class="intake-result-title"><a href="/foods/Food-Information-BG.php?id=' + v.id + '">' + v.title + '</a></div><span id = "intake-result-state">' + state + '</span></div></div><div class = "i-needed-grams">' + choosen_goal_result + '</div></div>');

         });
        } else {
         return false;
        }



       },
       error: function(jqXHR, textStatus, errorThrown) {
        alert(jqXHR.status);
        alert(textStatus);
        alert(errorThrown);
       }
      })
     });




     $("#res_sect").remove();
     var result_section = $('<section id = "res_sect"><div id = "result_kilograms" style= "                              width:49.8%;                                                display:inline-block;                                    text-align:center;" ></div><div id = "caloric_balance" style = "width:49.8%;                                            display:inline-block;                                    text-align:center;"></div></section>');
     $(".intake-body").append(result_section);

     $('#caloric_balance').append(elements['calories_per_day']);
     $('#result_kilograms').append(elements['sum_of_week']);
     // console.log(lastElement);
     return false;
    } else {
     $.each(result, function(i, v) {
      var msg = '<label class="intake-error" for="' + i + '" style="background:red;">' + v + '</label>';
      $('input[name="' + i + '"], select[name="' + i + '"]').css({
       'border-color': '#cc0000',
       'box-shadow': '0 0 10px #cc0000'
      }).closest('div').addClass('inputTxtError').after(msg);
     });
     var keys = Object.keys(result);
     $('input[name="' + keys[0] + '"]').focus();
    }
    return false;

   },
   error: function(jqXHR, textStatus, errorThrown) {
    alert(jqXHR.status);
    alert(textStatus);
    alert(errorThrown);
   }

  });

  function resetErrors() {
   $('form input, form select').removeClass('inputTxtError');
   $('label.intake-error').remove();
   $('.inputTxtError').children('form input').css({
    'border-color': '',
    'box-shadow': ''
   });
   $('#intake_goal_main').remove();
   $('.intake-search-field').remove();
   $('.intake_search_result_box').remove();
   $('.is-label').remove()
  }

 });




});