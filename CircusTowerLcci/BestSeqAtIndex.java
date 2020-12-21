import org.junit.Test;

import java.util.*;

/**
 * https://leetcode-cn.com/problems/circus-tower-lcci/
 */

public class BestSeqAtIndex {


    @Test
    public void test(){
//        int[] height = {65,70,56,75,60,68};
//        int[] weight = {100,150,90,190,95,110};


//        int[] height = {1,2,3,4};
//        int[] weight = {4,3,2,1};

//        int[] height = {2868,5485,1356,1306,6017,8941,7535,4941,6331,6181};
//        int[] weight = {5042,3995,7985,1651,5991,7036,9391,428,7561,8594};

        int[] height = {2176, 2819, 7426, 3761, 7212, 2092, 8544, 1180, 7176, 8087};
        int[] weight = {748,  1368, 759,  637,  6880, 2006, 284,  3586, 2350, 10000};

        System.out.println(bestSeqAtIndex1(height , weight));
    }

    public int bestSeqAtIndex(int[] height, int[] weight) {
        int result = 0;

        List<Integer> heightList = intArrayToIntegerList(height);

        List<Integer> weightList = intArrayToIntegerList(weight);


        List<Person> personList = new ArrayList<>();

        Person person = new Person();
        for(int i = 0 ; i < heightList.size() ; i++){
            person = new Person(heightList.get(i) , weightList.get(i));
            personList.add(person);
        }

        Collections.sort(personList, new Comparator<Person>() {
            @Override
            public int compare(Person o1, Person o2) {
                return (o1.height + o1.weight) - (o2.height + o2.weight);
            }
        });

        List<Person> resultList1 = new ArrayList<>();

        List<Person> tempList1 = new ArrayList<>();
        tempList1.addAll(personList);

        buildTower(personList , tempList1.size() , resultList1);

        result = resultList1.size();

        return result;
    }

    public List<Integer> intArrayToIntegerList(int[] a){
        List<Integer> list = new ArrayList<>();
        for(int item : a){
            list.add(item);
        }
        return list;
    }

    public void buildTower(List<Person> personList , int size , List<Person> resultList){
        if(size == 0){
            return;
        }

        Person base = personList.get(personList.size() - 1);
        List<Person> tempList = new ArrayList<>();
        if(resultList.size() != 0){
            if (base.height < resultList.get(resultList.size() - 1).height &&
                    base.weight < resultList.get(resultList.size() - 1).weight){
                resultList.add(base);
            }
        }else{
            resultList.add(base);
        }
        personList.remove(personList.size() - 1);
        tempList.addAll(personList);
        buildTower(tempList , size - 1 , resultList);
    }

    class Person{
        int height;
        int weight;

        public Person(int height, int weight) {
            this.height = height;
            this.weight = weight;
        }

        public Person() {

        }
    }


    //评论中的答案
    public int bestSeqAtIndex1(int[] height, int[] weight) {
        int len = height.length;
        int[][] person = new int[len][2];
        for (int i = 0; i < len; ++i)
            person[i] = new int[]{height[i], weight[i]};

        Arrays.sort(person, (a, b) -> a[0] == b[0] ? b[1] - a[1] : a[0] - b[0]);
        int[] dp = new int[len];
        int res = 0;
        for (int[] pair : person) {
            int i = Arrays.binarySearch(dp, 0, res, pair[1]);
            if (i < 0)
                i = -(i + 1);
            dp[i] = pair[1];
            if (i == res)
                ++res;
        }
        return res;
    }
}
