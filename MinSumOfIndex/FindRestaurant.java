import org.junit.Test;

import java.util.*;

public class FindRestaurant {


    @Test
    public void test(){
//        String[] list1 = new String[]{"Shogun", "Tapioca Express", "Burger King", "KFC"};
//        String[] list2 = new String[]{"KFC", "Shogun", "Burger King"};

//        String[] list1 = new String[]{"Shogun","Tapioca Express","Burger King","KFC"};
//        String[] list2 = new String[]{"Piatti","The Grill at Torrey Pines","Hungry Hunter Steakhouse","Shogun"};


        String[] list1 = new String[]{"Shogun","Tapioca Express","Burger King","KFC"};
        String[] list2 = new String[]{"KFC","Shogun","Burger King"};
        for(String item : findRestaurant(list1 , list2)){
            System.out.println(item);
        }

    }

    public String[] findRestaurant(String[] list1, String[] list2) {
        Map<String ,Integer> map = new HashMap<>();
        Map<String ,Integer> resultMap = new HashMap<>();


        if(list1.length >= list2.length){
            for (int i = 0 ; i < list1.length ; i++){
                String item = list1[i];
                map.put(item , i);
            }


            for (int i = 0 ; i < list2.length ; i++){
                String item = list2[i];
                if(map.containsKey(item)){
                    resultMap.put(item , map.get(item) + i);
                }else{
                    map.put(item , i);
                }
            }
        }else{
            for (int i = 0 ; i < list2.length ; i++){
                String item = list2[i];
                map.put(item , i);
            }


            for (int i = 0 ; i < list1.length ; i++){
                String item = list1[i];
                if(map.containsKey(item)){
                    resultMap.put(item , map.get(item) + i);
                }else{
                    map.put(item , i);
                }
            }
        }


        if (resultMap.keySet().size() == 0){
            return new String[]{};
        }

        List<String> stringList = new ArrayList<>();
        int totalIndex = list1.length + list2.length - 2;
        Set<Map.Entry<String , Integer>> entrySet = resultMap.entrySet();
        Iterator<Map.Entry<String , Integer>> entryIterator = entrySet.iterator();
        while (entryIterator.hasNext()){
            Map.Entry<String , Integer> item = entryIterator.next();
            if(item.getValue() == totalIndex){
                stringList.add(item.getKey());
            }else if (item.getValue() < totalIndex){
                stringList.clear();
                stringList.add(item.getKey());
                totalIndex = item.getValue();
            }
        }
        String[] result = new String[stringList.size()];
        result = stringList.toArray(result);
        return result;
    }
}
