import org.junit.Test;

import java.util.ArrayList;
import java.util.List;

public class RestoreIpAddresses {


    @Test
    public void test(){
        String ips = "25525511135";
//        String ips = "2552";
        List<String> stringList = restoreIpAddresses(ips);
        for(String item : stringList){
            System.out.println(item + "\n");
        }
    }

    public List<String> restoreIpAddresses(String s) {
        List<String> stringList = new ArrayList<>();
        if(s.length() < 4){
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
            if(i % 2 == 1){
                checkChar[i * 2] = ' ';
            }else{
                checkChar[i] = chars[i];
            }
        }

        for(int i = 0 ; i < checkChar.length - 5 ; i++){
            for(int j = 3 ; j < checkChar.length - 3 ; j++){
                for (int k = 5 ; k < checkChar.length - 1 ; k++){

                }
            }
        }

        return stringList;
    }


    public List<String> buildIpAddress(char[] chars , int index , String subString){

        return null;
    }

}
