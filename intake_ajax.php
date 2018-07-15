<?php 
require_once($_SERVER['DOCUMENT_ROOT'] . '/inc/init.php');
header('Content-type:text/json;charset=utf-8');

if(isset($_POST)){
    global $connect;
    if($_POST['broi_dni'] > 14 OR $_POST['broi_dni'] < 0){
        return false;
    }
    

    if(isset($_POST['day1'])){
        if(empty($_POST['day1'])){
            $_SESSION['errors']['day1'] = 'Полето не може да бъде празно!';
        }
    else if (filter_var($_POST['day1'], FILTER_VALIDATE_FLOAT) === false){
        	$_SESSION['errors']['day1'] = 'Използвайте само цифри!';
            }
           $day1 = clean_xss($_POST['day1']);
        }
        
    if(isset($_POST['day2'])){
        if(empty($_POST['day2'])){
            $_SESSION['errors']['day2'] = 'Полето не може да бъде празно!';
        }
      else  if (filter_var($_POST['day2'], FILTER_VALIDATE_FLOAT) === false){
        	$_SESSION['errors']['day2'] = 'Използвайте само цифри!';
            }
           $day2 = clean_xss($_POST['day2']);
        }
        
    if(isset($_POST['day3'])){
        if(empty($_POST['day3'])){
            $_SESSION['errors']['day3'] = 'Полето не може да бъде празно!';
        }
     else if (filter_var($_POST['day3'], FILTER_VALIDATE_FLOAT) === false){
        	$_SESSION['errors']['day3'] = 'Използвайте само цифри!';
            }
           $day3 = clean_xss($_POST['day3']);
        }
        
    if(isset($_POST['day4'])){
        if(empty($_POST['day4'])){
            $_SESSION['errors']['day4'] = 'Полето не може да бъде празно!';
        }
       else if (filter_var($_POST['day4'], FILTER_VALIDATE_FLOAT) === false){
        	$_SESSION['errors']['day4'] = 'Използвайте само цифри!';
            }
           $day4 = clean_xss($_POST['day4']);
        }
        
    if(isset($_POST['day5'])){
        if(empty($_POST['day5'])){
            $_SESSION['errors']['day5'] = 'Полето не може да бъде празно!';
        }
        else if (filter_var($_POST['day5'], FILTER_VALIDATE_FLOAT) === false){
        	$_SESSION['errors']['day5'] = 'Използвайте само цифри!';
            }
           $day5 = clean_xss($_POST['day5']);
        }
        
    if(isset($_POST['day6'])){
        if(empty($_POST['day6'])){
            $_SESSION['errors']['day6'] = 'Полето не може да бъде празно!';
        }
        else if (filter_var($_POST['day6'], FILTER_VALIDATE_FLOAT) === false){
        	$_SESSION['errors']['day6'] = 'Използвайте само цифри!';
            }
           $day6 = clean_xss($_POST['day6']);
        }
        
        
    if(isset($_POST['day7'])){
        if(empty($_POST['day7'])){
            $_SESSION['errors']['day7'] = 'Полето не може да бъде празно!';
        }
        else if (filter_var($_POST['day7'], FILTER_VALIDATE_FLOAT) === false){
        	$_SESSION['errors']['day7'] = 'Използвайте само цифри!';
            }
           $day7 = clean_xss($_POST['day7']);
        }
        
        
    if(isset($_POST['day8'])){
        if(empty($_POST['day8'])){
            $_SESSION['errors']['day8'] = 'Полето не може да бъде празно!';
        }
        else if (filter_var($_POST['day8'], FILTER_VALIDATE_FLOAT) === false){
        	$_SESSION['errors']['day8'] = 'Използвайте само цифри!';
            }
           $day8 = clean_xss($_POST['day8']);
        }
        
        
    if(isset($_POST['day9'])){
        if(empty($_POST['day9'])){
            $_SESSION['errors']['day9'] = 'Полето не може да бъде празно!';
        }
        else if (filter_var($_POST['day9'], FILTER_VALIDATE_FLOAT) === false){
        	$_SESSION['errors']['day9'] = 'Използвайте само цифри!';
            }
           $day9 = clean_xss($_POST['day9']);
        }
        
    if(isset($_POST['day10'])){
        if(empty($_POST['day10'])){
            $_SESSION['errors']['day10'] = 'Полето не може да бъде празно!';
        }
        else if (filter_var($_POST['day10'], FILTER_VALIDATE_FLOAT) === false){
        	$_SESSION['errors']['day10'] = 'Използвайте само цифри!';
            }
           $day10 = clean_xss($_POST['day10']);
        }
        
        
        
    if(isset($_POST['day11'])){
        if(empty($_POST['day11'])){
            $_SESSION['errors']['day11'] = 'Полето не може да бъде празно!';
        }
        else if (filter_var($_POST['day11'], FILTER_VALIDATE_FLOAT) === false){
        	$_SESSION['errors']['day11'] = 'Използвайте само цифри!';
            }
           $day11 = clean_xss($_POST['day11']);
        }
        
        
    if(isset($_POST['day12'])){
        if(empty($_POST['day12'])){
            $_SESSION['errors']['day12'] = 'Полето не може да бъде празно!';
        }
        else if (filter_var($_POST['day12'], FILTER_VALIDATE_FLOAT) === false){
        	$_SESSION['errors']['day12'] = 'Използвайте само цифри!';
            }
           $day12 = clean_xss($_POST['day12']);
        }
        
        
        
        
    if(isset($_POST['day13'])){
        if(empty($_POST['day13'])){
            $_SESSION['errors']['day13'] = 'Полето не може да бъде празно!';
        }
        else if (filter_var($_POST['day13'], FILTER_VALIDATE_FLOAT) === false){
        	$_SESSION['errors']['day13'] = 'Използвайте само цифри!';
            }
           $day13 = clean_xss($_POST['day13']);
        }
        
        
        
    if(isset($_POST['day14'])){
        if(empty($_POST['day14'])){
            $_SESSION['errors']['day14'] = 'Полето не може да бъде празно!';
        }
        else if (filter_var($_POST['day14'], FILTER_VALIDATE_FLOAT) === false){
        	$_SESSION['errors']['day14'] = 'Използвайте само цифри!';
            }
           $day14 = clean_xss($_POST['day14']);
        }
        
        
        
   
}//
if(isset($_SESSION['errors']) && count($_SESSION['errors']) > 0){
    if(!empty($_SERVER['HTTP_X_REQUESTED_WITH']) && strtolower($_SERVER['HTTP_X_REQUESTED_WITH']) == 'xmlhttprequest') 
    {
        
         echo json_encode($_SESSION['errors']);
         unset($_SESSION['errors']);
         exit();
    
    }
        echo "<ul>";
        foreach($_SESSION['errors'] as $key => $value){
        echo "<li>" . $value . "</li>";
        }
        echo "</ul>";
        unset($_SESSION['errors']);
        exit();
}else{
    switch($_POST['broi_dni']){
        case 2:
            $sum1 = array('1' => $day1);
            $sum2 = array('1'  =>$day2);
            break;
        case 3:
            $sum1 = array(
                            '1' =>$day1, 
                            '2' => $day2
                          );
                          
            $sum2 = array( '1' => $day3);
            break;
        case 4:
            $sum1 = array(
                            '1' => $day1, 
                            '2' => $day2
                            );
                            
            $sum2 = array(
                            '1' => $day3,
                            '2' => $day4
                            );
            break;
        case 5:
            $sum1 = array(
                            '1' => $day1,
                            '2' => $day2, 
                            '3' => $day3
                            );
                            
            $sum2 = array(
                            '1' => $day4,
                            '2' => $day5
                            );
            break;
        case 6:
            $sum1 = array(
                            '1' => $day1, 
                            '2' => $day2, 
                            '3' => $day3
                            );
            $sum2 = array(
                            '1' => $day4, 
                            '2' => $day5, 
                            '3' => $day6
                            );
            break;
        case 7:
            $sum1 = array(
                            '1' => $day1, 
                            '2' => $day2,
                            '3' => $day3, 
                            '4' => $day4
                            );
            $sum2 = array(
                            '1' => $day5, 
                            '2' => $day6, 
                            '3' => $day7
                            );
            break;
        case 8:
            $sum1 = array(
                            '1' => $day1, 
                            '2' => $day2,
                            '3' => $day3, 
                            '4' => $day4
                            );
            $sum2 = array(
                            '1' => $day5, 
                            '2' => $day6,
                            '3' => $day7, 
                            '4' => $day8
                            );
            break;
        case 9:
            $sum1 = array(
                            '1' => $day1, 
                            '2' => $day2,
                            '3' => $day3, 
                            '4' => $day4,
                            '5' => $day5
                            );
            $sum2 = array(
                            '1' => $day6, 
                            '2' => $day7,
                            '3' => $day8, 
                            '4' => $day9
                            );
            break;
        case 10:
            $sum1 = array(
                            '1' => $day1, 
                            '2' => $day2,
                            '3' => $day3, 
                            '4' => $day4,
                            '5' => $day5
                            );
            $sum2 = array(
                            '1' => $day6, 
                            '2' => $day7,
                            '3' => $day8, 
                            '4' => $day9,
                            '5' => $day10
                            );
            break;
        case 11:
            $sum1 = array(
                            '1' => $day1, 
                            '2' => $day2,
                            '3' => $day3, 
                            '4' => $day4,
                            '5' => $day5,
                            '6' => $day6
                            );
            $sum2 = array(
                            '1' => $day7, 
                            '2' => $day8,
                            '3' => $day9, 
                            '4' => $day10,
                            '5' => $day11
                            );
            break;
        case 12:
            $sum1 = array(
                            '1' => $day1, 
                            '2' => $day2,
                            '3' => $day3, 
                            '4' => $day4,
                            '5' => $day5,
                            '6' => $day6
                            );
            $sum2 = array(
                            '1' => $day7, 
                            '2' => $day8,
                            '3' => $day9, 
                            '4' => $day10,
                            '5' => $day11,
                            '6' => $day12
                            );
            break;
        case 13:
            $sum1 = array(
                            '1' => $day1, 
                            '2' => $day2,
                            '3' => $day3, 
                            '4' => $day4,
                            '5' => $day5,
                            '6' => $day6,
                            '7' => $day7
                            );
            $sum2 = array(
                            '1' => $day8, 
                            '2' => $day9,
                            '3' => $day10, 
                            '4' => $day11,
                            '5' => $day12,
                            '6' => $day13
                            );
            break;
        case 14:
            $sum1 = array(
                            '1' => $day1, 
                            '2' => $day2,
                            '3' => $day3, 
                            '4' => $day4,
                            '5' => $day5,
                            '6' => $day6,
                            '7' => $day7
                            );
            $sum2 = array(
                            '1' => $day8, 
                            '2' => $day9,
                            '3' => $day10, 
                            '4' => $day11,
                            '5' => $day12,
                            '6' => $day13,
                            '7' => $day14
                            );
            break;
    
            
    }
    
    //бройм дните който са избрани
    $kilos_count1 = count($sum1);
    
    $kilos_count2 = count($sum2);
    
    // Делим сбора от килограмите на дните който са избрани, за да намерим средните стойности
    $calories_division_sum1 = array_sum($sum1) / $kilos_count1;
    $calories_division_sum2 = array_sum($sum2) / $kilos_count2;
    
    $result = $calories_division_sum2 - $calories_division_sum1;
    
    
    if($result < 0){
        $sum_of_week = 'Свалил/ла сте '   . abs(round($result, 2 )) . 'кг';
    }
    else if ($result > 0){
        $sum_of_week = 'Качил/а сте ' . round($result, 2 ). 'кг';
    }
    else if($result == 0){
        $sum_of_week = 'В застой сте !';
    }
    
    
    $sum_to_calories = 7700 * round($result, 2); // умножаваме резултата от сбора, по-горе на 7700 по правилото на Форбс 1 кг мас = 7700 калории
    $result_from_sum = round($sum_to_calories, 2 ) / $_POST['broi_dni']; // делим получените калории горе,на броя дни за да получим дневния недостиг/превишаване на калории
    
    if($result_from_sum < 0){
        $calories_per_day = 'В дефицит от '. abs(round($result_from_sum,2)) . ' калории сте';
    }
    else if ($result_from_sum > 0){
        $calories_per_day = 'Положителен калориен баланс с/със '. round($result_from_sum,2) . ' калории';
    }
    else if($result_frum_sum == 0){
        //
    }
        $data = array(
            'sum_of_week'           => $sum_of_week,
            'calories_per_day'      => $calories_per_day,
            'result_from_sum'       => round($result_from_sum,2),
            'average_weight'        => $calories_division_sum2,
            'number_of_days'        => $_POST['broi_dni'],
            'responce'              => 'true'
            /*'1' => $day1,
            '2' => $day2,
            '3' => $day3,
            '4' => $day4,
            '5' => $day5,
            '6' => $day6,
            '7' => $day7,
            '8' => $day8,
            '9' => $day9,
            '10' => $day10,
            '11' => $day11,
            '12' => $day12,
            '13' => $day13,
            '14' => $day14,
            '15' => 'true'*/

        );
         

        echo json_encode($data);
}
?>