import org.junit.Test;

import java.util.ArrayList;
import java.util.List;

public class RestoreIpAddresses {


    @Test
    public void test(){
        String ips = "25525511135";
//        String ips = "010010";
        List<String> stringList = restoreIpAddresses(ips);
        for(String item : stringList){
            System.out.println(item + "\n");
        }
    }

    public List<String> restoreIpAddresses(String s) {
        List<String> stringList = new ArrayList<>();
        if(s.length() < 4 || s.length() > 12){
            return stringList;
        }


        char[] chars = s.toCharArray();
        if(chars.length == 4){
            String ip = "";
            for(char item : chars){
                ip += item + ".";
            }
            ip = ip.substring(0 , ip.length() - 1);
            stringList.add(ip);
            return stringList;
        }

        char[] checkChar = new char[2 * chars.length - 1];

        for(int i = 0 ; i < chars.length ; i++){
            if(i != chars.length - 1){
                checkChar[(i * 2) + 1] = '*';
            }
            checkChar[i * 2] = chars[i];
        }

//        for(int i = 1 ; i < checkChar.length - 5 ; i+=2){
//            for(int j = 3 ; j < checkChar.length - 3 ; j+=2){
//                for (int k = 5 ; k < checkChar.length - 1 ; k+=2){
//                    char[] temp = checkChar;
//                    buildIpAddress(i , j , k ,temp , stringList);
//                }
//            }
//        }

        for(int i = 0 ; i < chars.length - 3 ; i++){
            for(int j = i + 1 ; j < chars.length - 2 ; j++){
                for (int k = j + 1 ; k < chars.length - 1 ; k++){
                    buildIpAddress(i , j , k ,chars , stringList);
                }
            }
        }

        return stringList;
    }


    public void buildIpAddress(int i , int j ,int k , char[] checkChar , List<String> stringList){
        String str = "";
        for(char item : checkChar){
            if(item != '*'){
                str += item;
            }
        }

        String st1 = str.substring(0 , i + 1);
        String st2 = str.substring(i + 1 , j + 1);
        String st3 = str.substring(j + 1 , k + 1);
        String st4 = str.substring(k + 1 , str.length());

        if(checkNumber(st1) && checkNumber(st2) && checkNumber(st3) & checkNumber(st4)){
            stringList.add(st1 + "." + st2 + "." + st3 + "." + st4);
        }
    }


    public boolean checkNumber(String s){
        boolean result = false;

        if(s.length() == 1 && (0 <= Integer.valueOf(s) && Integer.valueOf(s)<= 255)){
            return true;
        }

        if(s.length() > 1  && s.length() < 4){
            if((0 <= Integer.valueOf(s) && Integer.valueOf(s)<= 255) && !s.startsWith("0")){
                return true;
            }else{
                return false;
            }
        }

        return result;
    }
}
