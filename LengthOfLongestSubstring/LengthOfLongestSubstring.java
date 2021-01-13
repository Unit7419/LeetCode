class Solution {
    public int lengthOfLongestSubstring(String s) {
      
        if ("".equals(s) || s == null) {
            return 0;
        }
        char[] trans = s.toCharArray();
        char[] temp = null;
        char[] check = null;
        List<String> checkList = new ArrayList<>();
        checkList.add(String.valueOf(trans[0]));
        temp = listToChars(checkList);
        check = listToChars(checkList);
        for (int i = 1; i < trans.length; i++) {
            if (!checkList.contains(String.valueOf(trans[i]))) {
                checkList.add(String.valueOf(trans[i]));
                check = listToChars(checkList);
            } else {
                int index = checkList.indexOf(String.valueOf(trans[i]));
                for (int j = index; j > -1; j--) {
                    checkList.remove(j);
                }
                checkList.add(String.valueOf(trans[i]));
            }
            if (temp.length < check.length) {
                temp = check;
            }
        }

        if (temp != null) {
            return temp.length;
        } else {
            return 0;
        }
        
    }
char[] listToChars(List<String> list){

        if(list == null || list.size() == 0){
            return null;
        }
        char[] chars = new char[list.size()];
        StringBuffer sb = new StringBuffer();
        for (int i = 0 ; i < list.size() ; i++){
            sb.append(list.get(i));
        }
        chars = sb.toString().toCharArray();
        return chars;
    }
}