// LeetCode Hot 100 Complete Memorization Dataset (100 Problems)

export const HOT_100_PROBLEMS = [
  {
    "id": 1,
    "title": "两数之和",
    "englishTitle": "Two Sum",
    "difficulty": "简单",
    "category": "哈希表",
    "description": "给定一个整数数组 nums 和一个整数目标值 target，请你在该数组中找出和为目标值 target 的那两个整数，并返回它们的数组下标。",
    "intuition": "【空间换时间】用 HashMap 记录已遍历过的数字及其索引。遍历到数字 x 时，查找 target - x 是否在 Map 中。",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "codeTemplates": {
      "java": "public int[] twoSum(int[] nums, int target) {\n    Map<Integer, Integer> map = new HashMap<>();\n    for (int i = 0; i < nums.length; i++) {\n        int complement = target - nums[i];\n        if (map.containsKey(complement)) {\n            return new int[]{map.get(complement), i};\n        }\n        map.put(nums[i], i);\n    }\n    return new int[0];\n}",
      "python": "def twoSum(nums: List[int], target: int) -> List[int]:\n    seen = {}\n    for i, num in enumerate(nums):\n        complement = target - num\n        if complement in seen:\n            return [seen[complement], i]\n        seen[num] = i\n    return []"
    }
  },
  {
    "id": 49,
    "title": "字母异位词分组",
    "englishTitle": "Group Anagrams",
    "difficulty": "中等",
    "category": "哈希表",
    "description": "给你一个字符串数组，请你将 字母异位词 组合在一起。可以按任意顺序返回结果列表。",
    "intuition": "【键标准化】字母异位词排序后的字符串必然相同。以排序后的字符串作为 HashMap 的 Key，同组词作为 Value 列表。",
    "timeComplexity": "O(N * K log K)",
    "spaceComplexity": "O(N * K)",
    "codeTemplates": {
      "java": "public List<List<String>> groupAnagrams(String[] strs) {\n    Map<String, List<String>> map = new HashMap<>();\n    for (String s : strs) {\n        char[] chars = s.toCharArray();\n        Arrays.sort(chars);\n        String key = new String(chars);\n        map.computeIfAbsent(key, k -> new ArrayList<>()).add(s);\n    }\n    return new ArrayList<>(map.values());\n}",
      "python": "def groupAnagrams(strs: List[str]) -> List[List[str]]:\n    mp = collections.defaultdict(list)\n    for s in strs:\n        key = ''.join(sorted(s))\n        mp[key].append(s)\n    return list(mp.values())"
    }
  },
  {
    "id": 128,
    "title": "最长连续序列",
    "englishTitle": "Longest Consecutive Sequence",
    "difficulty": "中等",
    "category": "哈希表",
    "description": "给定一个未排序的整数数组 nums ，找出数字连续的最长序列（不要求序列元素在原数组中连续）的长度。要求时间复杂度 O(n)。",
    "intuition": "【HashSet 寻找起点】放入 Set 后，只从连续序列的起点 (x - 1 不存在于 Set) 开始向下计数，确保每项只访问常数次。",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "codeTemplates": {
      "java": "public int longestConsecutive(int[] nums) {\n    Set<Integer> numSet = new HashSet<>();\n    for (int num : nums) numSet.add(num);\n    int longest = 0;\n    for (int num : numSet) {\n        if (!numSet.contains(num - 1)) {\n            int curr = num;\n            int streak = 1;\n            while (numSet.contains(curr + 1)) {\n                curr += 1;\n                streak += 1;\n            }\n            longest = Math.max(longest, streak);\n        }\n    }\n    return longest;\n}",
      "python": "def longestConsecutive(nums: List[int]) -> int:\n    num_set = set(nums)\n    longest = 0\n    for num in num_set:\n        if num - 1 not in num_set:\n            curr = num\n            streak = 1\n            while curr + 1 in num_set:\n                curr += 1\n                streak += 1\n            longest = max(longest, streak)\n    return longest"
    }
  },
  {
    "id": 283,
    "title": "移动零",
    "englishTitle": "Move Zeroes",
    "difficulty": "简单",
    "category": "双指针",
    "description": "给定一个数组 nums，编写一个函数将所有 0 移动到数组的末尾，同时保持非零元素的相对顺序。要在原数组上操作。",
    "intuition": "【快慢双指针】慢指针 slow 指向当前已就位的非零区域边界。快指针 fast 遇到非零元素即与 slow 交换并 slow++。",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(1)",
    "codeTemplates": {
      "java": "public void moveZeroes(int[] nums) {\n    int slow = 0;\n    for (int fast = 0; fast < nums.length; fast++) {\n        if (nums[fast] != 0) {\n            int temp = nums[slow];\n            nums[slow] = nums[fast];\n            nums[fast] = temp;\n            slow++;\n        }\n    }\n}",
      "python": "def moveZeroes(nums: List[int]) -> None:\n    slow = 0\n    for fast in range(len(nums)):\n        if nums[fast] != 0:\n            nums[slow], nums[fast] = nums[fast], nums[slow]\n            slow += 1"
    }
  },
  {
    "id": 11,
    "title": "盛最多水的容器",
    "englishTitle": "Container With Most Water",
    "difficulty": "中等",
    "category": "双指针",
    "description": "给定一个长度为 n 的整数数组 height。找出其中的两条线，使得它们与 x 轴共同构成的容器可以容纳最多的水。",
    "intuition": "【对向双指针 + 贪心】左右指针分别在两端。面积受限于较短的那根柱子，因此每次收缩较短的一端，才可能获得更大水面积。",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(1)",
    "codeTemplates": {
      "java": "public int maxArea(int[] height) {\n    int left = 0, right = height.length - 1;\n    int max = 0;\n    while (left < right) {\n        int area = Math.min(height[left], height[right]) * (right - left);\n        max = Math.max(max, area);\n        if (height[left] < height[right]) left++;\n        else right--;\n    }\n    return max;\n}",
      "python": "def maxArea(height: List[int]) -> int:\n    left, right = 0, len(height) - 1\n    max_w = 0\n    while left < right:\n        area = min(height[left], height[right]) * (right - left)\n        max_w = max(max_w, area)\n        if height[left] < height[right]: left += 1\n        else: right -= 1\n    return max_w"
    }
  },
  {
    "id": 15,
    "title": "三数之和",
    "englishTitle": "3Sum",
    "difficulty": "中等",
    "category": "双指针",
    "description": "给你一个整数数组 nums ，判断是否存在三元组 [nums[i], nums[j], nums[k]] 满足 nums[i] + nums[j] + nums[k] == 0 。返回所有不重复的三元组。",
    "intuition": "【排序 + 固定 i + 双指针】先排序。固定第一个数 nums[i]，后续两个数用 L/R 双指针收缩。注意跳过重复元素去重。",
    "timeComplexity": "O(N^2)",
    "spaceComplexity": "O(log N)",
    "codeTemplates": {
      "java": "public List<List<Integer>> threeSum(int[] nums) {\n    Arrays.sort(nums);\n    List<List<Integer>> ans = new ArrayList<>();\n    for (int i = 0; i < nums.length - 2; i++) {\n        if (nums[i] > 0) break;\n        if (i > 0 && nums[i] == nums[i - 1]) continue;\n        int L = i + 1, R = nums.length - 1;\n        while (L < R) {\n            int sum = nums[i] + nums[L] + nums[R];\n            if (sum == 0) {\n                ans.add(Arrays.asList(nums[i], nums[L], nums[R]));\n                while (L < R && nums[L] == nums[L + 1]) L++;\n                while (L < R && nums[R] == nums[R - 1]) R--;\n                L++; R--;\n            } else if (sum < 0) L++;\n            else R--;\n        }\n    }\n    return ans;\n}",
      "python": "def threeSum(nums: List[int]) -> List[List[int]]:\n    nums.sort()\n    ans = []\n    for i in range(len(nums) - 2):\n        if nums[i] > 0: break\n        if i > 0 and nums[i] == nums[i - 1]: continue\n        L, R = i + 1, len(nums) - 1\n        while L < R:\n            s = nums[i] + nums[L] + nums[R]\n            if s == 0:\n                ans.append([nums[i], nums[L], nums[R]])\n                while L < R and nums[L] == nums[L + 1]: L += 1\n                while L < R and nums[R] == nums[R - 1]: R -= 1\n                L += 1; R -= 1\n            elif s < 0: L += 1\n            else: R -= 1\n    return ans"
    }
  },
  {
    "id": 42,
    "title": "接雨水",
    "englishTitle": "Trapping Rain Water",
    "difficulty": "困难",
    "category": "双指针",
    "description": "给定 n 个非负整数表示每个宽度为 1 的柱子的高度图，计算按此排列的柱子，下雨之后能接多少雨水。",
    "intuition": "【左右最大值双指针】每个柱子接水量 = min(leftMax, rightMax) - height[i]。用左右指针动态维护左/右最大高度，较小者确定积水量。",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(1)",
    "codeTemplates": {
      "java": "public int trap(int[] height) {\n    int left = 0, right = height.length - 1;\n    int leftMax = 0, rightMax = 0;\n    int ans = 0;\n    while (left < right) {\n        if (height[left] < height[right]) {\n            if (height[left] >= leftMax) leftMax = height[left];\n            else ans += leftMax - height[left];\n            left++;\n        } else {\n            if (height[right] >= rightMax) rightMax = height[right];\n            else ans += rightMax - height[right];\n            right--;\n        }\n    }\n    return ans;\n}",
      "python": "def trap(height: List[int]) -> int:\n    left, right = 0, len(height) - 1\n    left_max = right_max = ans = 0\n    while left < right:\n        if height[left] < height[right]:\n            if height[left] >= left_max: left_max = height[left]\n            else: ans += left_max - height[left]\n            left += 1\n        else:\n            if height[right] >= right_max: right_max = height[right]\n            else: ans += right_max - height[right]\n            right -= 1\n    return ans"
    }
  },
  {
    "id": 3,
    "title": "无重复字符的最长子串",
    "englishTitle": "Longest Substring Without Repeating Characters",
    "difficulty": "中等",
    "category": "滑动窗口",
    "description": "给定一个字符串 s ，请你找出其中不含有重复字符的最长子串的长度。",
    "intuition": "【滑动窗口 + Map】右指针扩展窗口并记录字符上一次出现的索引。若遇到重复字符，左指针跳跃至 map.get(ch) + 1。",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(128)",
    "codeTemplates": {
      "java": "public int lengthOfLongestSubstring(String s) {\n    Map<Character, Integer> map = new HashMap<>();\n    int maxLen = 0, left = 0;\n    for (int right = 0; right < s.length(); right++) {\n        char ch = s.charAt(right);\n        if (map.containsKey(ch)) {\n            left = Math.max(left, map.get(ch) + 1);\n        }\n        map.put(ch, right);\n        maxLen = Math.max(maxLen, right - left + 1);\n    }\n    return maxLen;\n}",
      "python": "def lengthOfLongestSubstring(s: str) -> int:\n    mp = {}\n    left = max_len = 0\n    for right, ch in enumerate(s):\n        if ch in mp:\n            left = max(left, mp[ch] + 1)\n        mp[ch] = right\n        max_len = max(max_len, right - left + 1)\n    return max_len"
    }
  },
  {
    "id": 438,
    "title": "找到字符串中所有字母异位词",
    "englishTitle": "Find All Anagrams in a String",
    "difficulty": "中等",
    "category": "滑动窗口",
    "description": "给定两个字符串 s 和 p，找到 s 中所有 p 的 异位词 的子串，返回这些子串的起始索引。",
    "intuition": "【固定长度滑动窗口 + 词频数组】维护长度为 p.length() 的滑动窗口，比较窗口内字符频次与 p 的字符频次数组是否相同。",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(26)",
    "codeTemplates": {
      "java": "public List<Integer> findAnagrams(String s, String p) {\n    List<Integer> res = new ArrayList<>();\n    if (s.length() < p.length()) return res;\n    int[] pCount = new int[26], sCount = new int[26];\n    for (int i = 0; i < p.length(); i++) {\n        pCount[p.charAt(i) - 'a']++;\n        sCount[s.charAt(i) - 'a']++;\n    }\n    if (Arrays.equals(pCount, sCount)) res.add(0);\n    for (int i = p.length(); i < s.length(); i++) {\n        sCount[s.charAt(i) - 'a']++;\n        sCount[s.charAt(i - p.length()) - 'a']--;\n        if (Arrays.equals(pCount, sCount)) res.add(i - p.length() + 1);\n    }\n    return res;\n}",
      "python": "def findAnagrams(s: str, p: str) -> List[int]:\n    if len(s) < len(p): return []\n    p_cnt = [0] * 26\n    s_cnt = [0] * 26\n    for i in range(len(p)):\n        p_cnt[ord(p[i]) - 97] += 1\n        s_cnt[ord(s[i]) - 97] += 1\n    res = [0] if p_cnt == s_cnt else []\n    for i in range(len(p), len(s)):\n        s_cnt[ord(s[i]) - 97] += 1\n        s_cnt[ord(s[i - len(p)]) - 97] -= 1\n        if p_cnt == s_cnt: res.append(i - len(p) + 1)\n    return res"
    }
  },
  {
    "id": 560,
    "title": "和为 K 的子数组",
    "englishTitle": "Subarray Sum Equals K",
    "difficulty": "中等",
    "category": "子串/串联",
    "description": "给你一个整数数组 nums 和一个整数 k ，请你统计并返回 该数组中和为 k 的子数组的个数。",
    "intuition": "【前缀和 + HashMap】子数组 [i..j] 的和为 preSum[j] - preSum[i-1] = k。因此遍历到 j 时，查找 HashMap 中 preSum[j] - k 出现的次数。",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "codeTemplates": {
      "java": "public int subarraySum(int[] nums, int k) {\n    Map<Integer, Integer> map = new HashMap<>();\n    map.put(0, 1);\n    int count = 0, sum = 0;\n    for (int num : nums) {\n        sum += num;\n        if (map.containsKey(sum - k)) count += map.get(sum - k);\n        map.put(sum, map.getOrDefault(sum, 0) + 1);\n    }\n    return count;\n}",
      "python": "def subarraySum(nums: List[int], k: int) -> int:\n    mp = {0: 1}\n    cnt = curr = 0\n    for num in nums:\n        curr += num\n        if curr - k in mp: cnt += mp[curr - k]\n        mp[curr] = mp.get(curr, 0) + 1\n    return cnt"
    }
  },
  {
    "id": 239,
    "title": "滑动窗口最大值",
    "englishTitle": "Sliding Window Maximum",
    "difficulty": "困难",
    "category": "子串/串联",
    "description": "给你一个整数数组 nums，有一个大小为 k 的滑动窗口从数组的最左侧移动到最右侧。返回滑动窗口中的最大值。",
    "intuition": "【单调双端队列 Deque】Deque 中存储元素下标，保持队列元素值严格单调递减。队头即为当前窗口的最大值下标。",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(K)",
    "codeTemplates": {
      "java": "public int[] maxSlidingWindow(int[] nums, int k) {\n    Deque<Integer> deque = new LinkedList<>();\n    int[] res = new int[nums.length - k + 1];\n    for (int i = 0; i < nums.length; i++) {\n        while (!deque.isEmpty() && nums[deque.peekLast()] <= nums[i]) deque.pollLast();\n        deque.addLast(i);\n        if (deque.peekFirst() <= i - k) deque.pollFirst();\n        if (i >= k - 1) res[i - k + 1] = nums[deque.peekFirst()];\n    }\n    return res;\n}",
      "python": "def maxSlidingWindow(nums: List[int], k: int) -> List[int]:\n    q = collections.deque()\n    res = []\n    for i, num in enumerate(nums):\n        while q and nums[q[-1]] <= num: q.pop()\n        q.append(i)\n        if q[0] <= i - k: q.popleft()\n        if i >= k - 1: res.append(nums[q[0]])\n    return res"
    }
  },
  {
    "id": 76,
    "title": "最小覆盖子串",
    "englishTitle": "Minimum Window Substring",
    "difficulty": "困难",
    "category": "子串/串联",
    "description": "给你一个字符串 s 、一个字符串 t 。返回 s 中涵盖 t 所有字符的最小子串。如果 s 中不存在涵盖 t 所有字符的子串，则返回空字符串 \"\" 。",
    "intuition": "【滑动窗口 + 欠帐 Counter】用 Count 数组统计 t 字符频次，变量 need 表示尚缺字符总数。右指针进窗口收缩 need，当 need==0 时收缩左指针更新最小子串。",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(128)",
    "codeTemplates": {
      "java": "public String minWindow(String s, String t) {\n    int[] need = new int[128];\n    for (char c : t.toCharArray()) need[c]++;\n    int needCount = t.length();\n    int left = 0, minLen = Integer.MAX_VALUE, start = 0;\n    for (int right = 0; right < s.length(); right++) {\n        char c = s.charAt(right);\n        if (need[c] > 0) needCount--;\n        need[c]--;\n        if (needCount == 0) {\n            while (left < right && need[s.charAt(left)] < 0) {\n                need[s.charAt(left)]++;\n                left++;\n            }\n            if (right - left + 1 < minLen) {\n                minLen = right - left + 1;\n                start = left;\n            }\n            need[s.charAt(left)]++;\n            needCount++;\n            left++;\n        }\n    }\n    return minLen == Integer.MAX_VALUE ? \"\" : s.substring(start, start + minLen);\n}",
      "python": "def minWindow(s: str, t: str) -> str:\n    need = collections.Counter(t)\n    need_cnt = len(t)\n    left = 0\n    res = (0, float('inf'))\n    for right, c in enumerate(s):\n        if need[c] > 0: need_cnt -= 1\n        need[c] -= 1\n        if need_cnt == 0:\n            while left < right and need[s[left]] < 0:\n                need[s[left]] += 1\n                left += 1\n            if right - left + 1 < res[1] - res[0]:\n                res = (left, right + 1)\n            need[s[left]] += 1\n            need_cnt += 1\n            left += 1\n    return \"\" if res[1] == float('inf') else s[res[0]:res[1]]"
    }
  },
  {
    "id": 53,
    "title": "最大子数组和",
    "englishTitle": "Maximum Subarray",
    "difficulty": "中等",
    "category": "普通数组",
    "description": "给你一个整数数组 nums ，请你找出一个具有最大和的连续子数组（子数组最少包含一个元素），返回其最大和。",
    "intuition": "【Kadane 算法】currSum = max(nums[i], currSum + nums[i])。若当前累加和降为负数，不如放弃重新以 nums[i] 为起点。",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(1)",
    "codeTemplates": {
      "java": "public int maxSubArray(int[] nums) {\n    int max = nums[0], curr = nums[0];\n    for (int i = 1; i < nums.length; i++) {\n        curr = Math.max(nums[i], curr + nums[i]);\n        max = Math.max(max, curr);\n    }\n    return max;\n}",
      "python": "def maxSubArray(nums: List[int]) -> int:\n    max_s = curr = nums[0]\n    for num in nums[1:]:\n        curr = max(num, curr + num)\n        max_s = max(max_s, curr)\n    return max_s"
    }
  },
  {
    "id": 56,
    "title": "合并区间",
    "englishTitle": "Merge Intervals",
    "difficulty": "中等",
    "category": "普通数组",
    "description": "以数组 intervals 表示若干个区间的集合，合并所有重叠的区间，并返回一个不重叠的区间数组。",
    "intuition": "【按 start 排序】按 start 排序后，若当前 interval[0] <= 最后一个合并区间的 end，产生重叠，更新 end = max(end1, end2)。",
    "timeComplexity": "O(N log N)",
    "spaceComplexity": "O(N)",
    "codeTemplates": {
      "java": "public int[][] merge(int[][] intervals) {\n    Arrays.sort(intervals, (a, b) -> Integer.compare(a[0], b[0]));\n    List<int[]> res = new ArrayList<>();\n    for (int[] interval : intervals) {\n        if (res.isEmpty() || res.get(res.size() - 1)[1] < interval[0]) {\n            res.add(interval);\n        } else {\n            res.get(res.size() - 1)[1] = Math.max(res.get(res.size() - 1)[1], interval[1]);\n        }\n    }\n    return res.toArray(new int[res.size()][]);\n}",
      "python": "def merge(intervals: List[List[int]]) -> List[List[int]]:\n    intervals.sort(key=lambda x: x[0])\n    res = []\n    for interval in intervals:\n        if not res or res[-1][1] < interval[0]:\n            res.append(interval)\n        else:\n            res[-1][1] = max(res[-1][1], interval[1])\n    return res"
    }
  },
  {
    "id": 189,
    "title": "轮转数组",
    "englishTitle": "Rotate Array",
    "difficulty": "中等",
    "category": "普通数组",
    "description": "给定一个整数数组 nums，将数组中的元素向右轮转 k 个位置，其中 k 是非负数。",
    "intuition": "【三次反转法】k = k % n。先反转整个数组，再反转前 k 个元素，最后反转剩余 n-k 个元素。",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(1)",
    "codeTemplates": {
      "java": "public void rotate(int[] nums, int k) {\n    k %= nums.length;\n    reverse(nums, 0, nums.length - 1);\n    reverse(nums, 0, k - 1);\n    reverse(nums, k, nums.length - 1);\n}\nprivate void reverse(int[] nums, int start, int end) {\n    while (start < end) {\n        int temp = nums[start];\n        nums[start++] = nums[end];\n        nums[end--] = temp;\n    }\n}",
      "python": "def rotate(nums: List[int], k: int) -> None:\n    k %= len(nums)\n    nums.reverse()\n    nums[:k] = reversed(nums[:k])\n    nums[k:] = reversed(nums[k:])"
    }
  },
  {
    "id": 238,
    "title": "除自身以外数组的乘积",
    "englishTitle": "Product of Array Except Self",
    "difficulty": "中等",
    "category": "普通数组",
    "description": "给你一个整数数组 nums，返回数组 answer ，其中 answer[i] 等于 nums 中除 nums[i] 之外其余各元素的乘积。不能使用除法。",
    "intuition": "【前缀积 * 后缀积】先遍历一次用 res[i] 存储 i 左侧所有元素的乘积，再从右向左遍历用变量 right 维护右侧乘积进行乘积累加。",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(1)",
    "codeTemplates": {
      "java": "public int[] productExceptSelf(int[] nums) {\n    int n = nums.length;\n    int[] res = new int[n];\n    res[0] = 1;\n    for (int i = 1; i < n; i++) {\n        res[i] = res[i - 1] * nums[i - 1];\n    }\n    int right = 1;\n    for (int i = n - 1; i >= 0; i--) {\n        res[i] *= right;\n        right *= nums[i];\n    }\n    return res;\n}",
      "python": "def productExceptSelf(nums: List[int]) -> List[int]:\n    n = len(nums)\n    res = [1] * n\n    for i in range(1, n):\n        res[i] = res[i - 1] * nums[i - 1]\n    right = 1\n    for i in range(n - 1, -1, -1):\n        res[i] *= right\n        right *= nums[i]\n    return res"
    }
  },
  {
    "id": 41,
    "title": "缺失的第一个正数",
    "englishTitle": "First Missing Positive",
    "difficulty": "困难",
    "category": "普通数组",
    "description": "给你一个未排序的整数数组 nums ，请你找出其中没有出现的最小的正整数。请实现时间复杂度为 O(n) 并且只使用常数级别额外空间的算法。",
    "intuition": "【原地哈希/置换】把数值 x (在 1..N 范围内) 交换回它的正确索引位置 `x - 1` 上 (即 `nums[i] = i + 1`)。交换后再遍历首个位置不匹配的即为缺失的正数。",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(1)",
    "codeTemplates": {
      "java": "public int firstMissingPositive(int[] nums) {\n    int n = nums.length;\n    for (int i = 0; i < n; i++) {\n        while (nums[i] > 0 && nums[i] <= n && nums[nums[i] - 1] != nums[i]) {\n            int temp = nums[nums[i] - 1];\n            nums[nums[i] - 1] = nums[i];\n            nums[i] = temp;\n        }\n    }\n    for (int i = 0; i < n; i++) {\n        if (nums[i] != i + 1) return i + 1;\n    }\n    return n + 1;\n}",
      "python": "def firstMissingPositive(nums: List[int]) -> int:\n    n = len(nums)\n    for i in range(n):\n        while 1 <= nums[i] <= n and nums[nums[i] - 1] != nums[i]:\n            idx = nums[i] - 1\n            nums[i], nums[idx] = nums[idx], nums[i]\n    for i in range(n):\n        if nums[i] != i + 1:\n            return i + 1\n    return n + 1"
    }
  },
  {
    "id": 73,
    "title": "矩阵置零",
    "englishTitle": "Set Matrix Zeroes",
    "difficulty": "中等",
    "category": "矩阵",
    "description": "给定一个 m x n 的矩阵，如果一个元素为 0 ，则将其所在行和列的所有元素都设为 0 。请使用 原地 算法。",
    "intuition": "【第 0 行第 0 列标记】用矩阵第 0 行和第 0 列作为标记区，额外使用 row0/col0 变量单独标记第一行/第一列本身是否含 0。",
    "timeComplexity": "O(M * N)",
    "spaceComplexity": "O(1)",
    "codeTemplates": {
      "java": "public void setZeroes(int[][] matrix) {\n    int m = matrix.length, n = matrix[0].length;\n    boolean row0 = false, col0 = false;\n    for (int i = 0; i < m; i++) if (matrix[i][0] == 0) col0 = true;\n    for (int j = 0; j < n; j++) if (matrix[0][j] == 0) row0 = true;\n    for (int i = 1; i < m; i++) {\n        for (int j = 1; j < n; j++) {\n            if (matrix[i][j] == 0) {\n                matrix[i][0] = 0;\n                matrix[0][j] = 0;\n            }\n        }\n    }\n    for (int i = 1; i < m; i++) {\n        for (int j = 1; j < n; j++) {\n            if (matrix[i][0] == 0 || matrix[0][j] == 0) matrix[i][j] = 0;\n        }\n    }\n    if (col0) for (int i = 0; i < m; i++) matrix[i][0] = 0;\n    if (row0) for (int j = 0; j < n; j++) matrix[0][j] = 0;\n}",
      "python": "def setZeroes(matrix: List[List[int]]) -> None:\n    m, n = len(matrix), len(matrix[0])\n    row0 = any(matrix[0][j] == 0 for j in range(n))\n    col0 = any(matrix[i][0] == 0 for i in range(m))\n    for i in range(1, m):\n        for j in range(1, n):\n            if matrix[i][j] == 0: matrix[i][0] = matrix[0][j] = 0\n    for i in range(1, m):\n        for j in range(1, n):\n            if matrix[i][0] == 0 or matrix[0][j] == 0: matrix[i][j] = 0\n    if col0: \n        for i in range(m): matrix[i][0] = 0\n    if row0:\n        for j in range(n): matrix[0][j] = 0"
    }
  },
  {
    "id": 54,
    "title": "螺旋矩阵",
    "englishTitle": "Spiral Matrix",
    "difficulty": "中等",
    "category": "矩阵",
    "description": "给你一个 m 行 n 列的矩阵 matrix ，请按照 顺时针螺旋顺序 ，返回矩阵中的所有元素。",
    "intuition": "【按边界收缩】维护 top, bottom, left, right 四个边界指针。按照 上->右->下->左 的顺序遍历并不断向内收缩边界。",
    "timeComplexity": "O(M * N)",
    "spaceComplexity": "O(1)",
    "codeTemplates": {
      "java": "public List<Integer> spiralOrder(int[][] matrix) {\n    List<Integer> res = new ArrayList<>();\n    int top = 0, bottom = matrix.length - 1;\n    int left = 0, right = matrix[0].length - 1;\n    while (top <= bottom && left <= right) {\n        for (int i = left; i <= right; i++) res.add(matrix[top][i]);\n        top++;\n        for (int i = top; i <= bottom; i++) res.add(matrix[i][right]);\n        right--;\n        if (top <= bottom) {\n            for (int i = right; i >= left; i--) res.add(matrix[bottom][i]);\n            bottom--;\n        }\n        if (left <= right) {\n            for (int i = bottom; i >= top; i--) res.add(matrix[i][left]);\n            left++;\n        }\n    }\n    return res;\n}",
      "python": "def spiralOrder(matrix: List[List[int]]) -> List[int]:\n    res = []\n    top, bottom = 0, len(matrix) - 1\n    left, right = 0, len(matrix[0]) - 1\n    while top <= bottom and left <= right:\n        for i in range(left, right + 1): res.append(matrix[top][i])\n        top += 1\n        for i in range(top, bottom + 1): res.append(matrix[i][right])\n        right -= 1\n        if top <= bottom:\n            for i in range(right, left - 1, -1): res.append(matrix[bottom][i])\n            bottom -= 1\n        if left <= right:\n            for i in range(bottom, top - 1, -1): res.append(matrix[i][left])\n            left += 1\n    return res"
    }
  },
  {
    "id": 48,
    "title": "旋转图像",
    "englishTitle": "Rotate Image",
    "difficulty": "中等",
    "category": "矩阵",
    "description": "给定一个 n × n 的二维矩阵 matrix 表示一个图像。请你将图像顺时针旋转 90 度。必须在 原地 旋转。",
    "intuition": "【主对角线转置 + 左右翻转】顺时针 90 度 = 先按照主对角线 `matrix[i][j] <-> matrix[j][i]` 进行转置，再将每一行对称左右反转。",
    "timeComplexity": "O(N^2)",
    "spaceComplexity": "O(1)",
    "codeTemplates": {
      "java": "public void rotate(int[][] matrix) {\n    int n = matrix.length;\n    for (int i = 0; i < n; i++) {\n        for (int j = i + 1; j < n; j++) {\n            int temp = matrix[i][j];\n            matrix[i][j] = matrix[j][i];\n            matrix[j][i] = temp;\n        }\n    }\n    for (int i = 0; i < n; i++) {\n        for (int j = 0; j < n / 2; j++) {\n            int temp = matrix[i][j];\n            matrix[i][j] = matrix[i][n - 1 - j];\n            matrix[i][n - 1 - j] = temp;\n        }\n    }\n}",
      "python": "def rotate(matrix: List[List[int]]) -> None:\n    n = len(matrix)\n    for i in range(n):\n        for j in range(i + 1, n):\n            matrix[i][j], matrix[j][i] = matrix[j][i], matrix[i][j]\n    for i in range(n):\n        matrix[i].reverse()"
    }
  },
  {
    "id": 240,
    "title": "搜索二维矩阵 II",
    "englishTitle": "Search a 2D Matrix II",
    "difficulty": "中等",
    "category": "矩阵",
    "description": "编写一个高效的算法搜索 m x n 矩阵 matrix 中的一个目标值 target 。该矩阵具有特性：每行的元素从左到右升序，每列的元素从上到下升序。",
    "intuition": "【从右上角开始二叉搜索树裁剪】右上角元素 (0, n-1) 类似于 BST 根节点。若 target < 当前值，向左走(col--)；若 target > 当前值，向下走(row++)。",
    "timeComplexity": "O(M + N)",
    "spaceComplexity": "O(1)",
    "codeTemplates": {
      "java": "public boolean searchMatrix(int[][] matrix, int target) {\n    int row = 0, col = matrix[0].length - 1;\n    while (row < matrix.length && col >= 0) {\n        if (matrix[row][col] == target) return true;\n        if (matrix[row][col] > target) col--;\n        else row++;\n    }\n    return false;\n}",
      "python": "def searchMatrix(matrix: List[List[int]], target: int) -> bool:\n    row, col = 0, len(matrix[0]) - 1\n    while row < len(matrix) and col >= 0:\n        if matrix[row][col] == target: return True\n        if matrix[row][col] > target: col -= 1\n        else: row += 1\n    return False"
    }
  },
  {
    "id": 160,
    "title": "相交链表",
    "englishTitle": "Intersection of Two Linked Lists",
    "difficulty": "简单",
    "category": "链表",
    "description": "给你两个单链表的头节点 headA 和 headB ，请你找出并返回两个单链表相交的起始节点。",
    "intuition": "【双指针交替走】A 走完走 B，B 走完走 A。两人走过的总距离均为 L_A + L_B，必定在交点处同时相遇；若不相交则同时到达 null。",
    "timeComplexity": "O(M + N)",
    "spaceComplexity": "O(1)",
    "codeTemplates": {
      "java": "public ListNode getIntersectionNode(ListNode headA, ListNode headB) {\n    if (headA == null || headB == null) return null;\n    ListNode pA = headA, pB = headB;\n    while (pA != pB) {\n        pA = (pA == null) ? headB : pA.next;\n        pB = (pB == null) ? headA : pB.next;\n    }\n    return pA;\n}",
      "python": "def getIntersectionNode(headA: ListNode, headB: ListNode) -> ListNode:\n    if not headA or not headB: return None\n    pA, pB = headA, headB\n    while pA != pB:\n        pA = headB if pA is None else pA.next\n        pB = headA if pB is None else pB.next\n    return pA"
    }
  },
  {
    "id": 206,
    "title": "反转链表",
    "englishTitle": "Reverse Linked List",
    "difficulty": "简单",
    "category": "链表",
    "description": "给你单链表的头节点 head ，请你反转链表，并返回反转后的链表。",
    "intuition": "【双指针迭代】prev=null, curr=head。每次暂存 nextTemp = curr.next，而后 curr.next = prev，整体向前平移。",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(1)",
    "codeTemplates": {
      "java": "public ListNode reverseList(ListNode head) {\n    ListNode prev = null, curr = head;\n    while (curr != null) {\n        ListNode next = curr.next;\n        curr.next = prev;\n        prev = curr;\n        curr = next;\n    }\n    return prev;\n}",
      "python": "def reverseList(head: Optional[ListNode]) -> Optional[ListNode]:\n    prev, curr = None, head\n    while curr:\n        nxt = curr.next\n        curr.next = prev\n        prev = curr\n        curr = nxt\n    return prev"
    }
  },
  {
    "id": 234,
    "title": "回文链表",
    "englishTitle": "Palindrome Linked List",
    "difficulty": "简单",
    "category": "链表",
    "description": "给你一个单链表的头节点 head ，请你判断该链表是否为回文链表。",
    "intuition": "【快慢指针找到中点 + 反转后半链表】快慢指针找到中点，反转后半部分链表，而后左右双指针同时向中间比对。",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(1)",
    "codeTemplates": {
      "java": "public boolean isPalindrome(ListNode head) {\n    if (head == null || head.next == null) return true;\n    ListNode slow = head, fast = head;\n    while (fast.next != null && fast.next.next != null) {\n        slow = slow.next;\n        fast = fast.next.next;\n    }\n    ListNode secondHalf = reverse(slow.next);\n    ListNode p1 = head, p2 = secondHalf;\n    boolean res = true;\n    while (res && p2 != null) {\n        if (p1.val != p2.val) res = false;\n        p1 = p1.next;\n        p2 = p2.next;\n    }\n    return res;\n}\nprivate ListNode reverse(ListNode head) {\n    ListNode prev = null, curr = head;\n    while (curr != null) {\n        ListNode next = curr.next;\n        curr.next = prev;\n        prev = curr;\n        curr = next;\n    }\n    return prev;\n}",
      "python": "def isPalindrome(head: Optional[ListNode]) -> bool:\n    if not head or not head.next: return True\n    slow = fast = head\n    while fast.next and fast.next.next:\n        slow = slow.next\n        fast = fast.next.next\n    prev, curr = None, slow.next\n    while curr:\n        nxt = curr.next\n        curr.next = prev\n        prev, curr = curr, nxt\n    p1, p2 = head, prev\n    while p2:\n        if p1.val != p2.val: return False\n        p1 = p1.next\n        p2 = p2.next\n    return True"
    }
  },
  {
    "id": 141,
    "title": "环形链表",
    "englishTitle": "Linked List Cycle",
    "difficulty": "简单",
    "category": "链表",
    "description": "给你一个链表的头节点 head ，判断链表中是否有环。",
    "intuition": "【快慢指针】slow 走 1 步，fast 走 2 步。若有环，快指针必定追上慢指针 (`slow == fast`)。",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(1)",
    "codeTemplates": {
      "java": "public boolean hasCycle(ListNode head) {\n    ListNode slow = head, fast = head;\n    while (fast != null && fast.next != null) {\n        slow = slow.next;\n        fast = fast.next.next;\n        if (slow == fast) return true;\n    }\n    return false;\n}",
      "python": "def hasCycle(head: Optional[ListNode]) -> bool:\n    slow = fast = head\n    while fast and fast.next:\n        slow = slow.next\n        fast = fast.next.next\n        if slow == fast: return True\n    return False"
    }
  },
  {
    "id": 142,
    "title": "环形链表 II",
    "englishTitle": "Linked List Cycle II",
    "difficulty": "中等",
    "category": "链表",
    "description": "给定一个链表的头节点  head ，返回链表开始入环的第一个节点。 如果链表无环，则返回 null。",
    "intuition": "【相遇后头指针同速前进】快慢指针相遇时，将指针 ptr 从 head 出发，与 slow 同时每次走 1 步，二者再次相遇点即为入环节点！",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(1)",
    "codeTemplates": {
      "java": "public ListNode detectCycle(ListNode head) {\n    ListNode slow = head, fast = head;\n    while (fast != null && fast.next != null) {\n        slow = slow.next;\n        fast = fast.next.next;\n        if (slow == fast) {\n            ListNode ptr = head;\n            while (ptr != slow) {\n                ptr = ptr.next;\n                slow = slow.next;\n            }\n            return ptr;\n        }\n    }\n    return null;\n}",
      "python": "def detectCycle(head: Optional[ListNode]) -> Optional[ListNode]:\n    slow = fast = head\n    while fast and fast.next:\n        slow = slow.next\n        fast = fast.next.next\n        if slow == fast:\n            ptr = head\n            while ptr != slow:\n                ptr = ptr.next;\n                slow = slow.next\n            return ptr\n    return None"
    }
  },
  {
    "id": 21,
    "title": "合并两个有序链表",
    "englishTitle": "Merge Two Sorted Lists",
    "difficulty": "简单",
    "category": "链表",
    "description": "将两个升序链表合并为一个新的 升序 链表并返回。新链表是通过拼接给定的两个链表的所有节点组成的。",
    "intuition": "【哑节点 Dummy + 双指针比较】创建 dummy 节点，比较 list1 和 list2 当前值，较小者接入 tail.next 并向前推进。",
    "timeComplexity": "O(M + N)",
    "spaceComplexity": "O(1)",
    "codeTemplates": {
      "java": "public ListNode mergeTwoLists(ListNode list1, ListNode list2) {\n    ListNode dummy = new ListNode(0);\n    ListNode curr = dummy;\n    while (list1 != null && list2 != null) {\n        if (list1.val <= list2.val) {\n            curr.next = list1;\n            list1 = list1.next;\n        } else {\n            curr.next = list2;\n            list2 = list2.next;\n        }\n        curr = curr.next;\n    }\n    curr.next = (list1 != null) ? list1 : list2;\n    return dummy.next;\n}",
      "python": "def mergeTwoLists(l1: Optional[ListNode], l2: Optional[ListNode]) -> Optional[ListNode]:\n    dummy = curr = ListNode(0)\n    while l1 and l2:\n        if l1.val <= l2.val:\n            curr.next = l1\n            l1 = l1.next\n        else:\n            curr.next = l2\n            l2 = l2.next\n        curr = curr.next\n    curr.next = l1 or l2\n    return dummy.next"
    }
  },
  {
    "id": 2,
    "title": "两数相加",
    "englishTitle": "Add Two Numbers",
    "difficulty": "中等",
    "category": "链表",
    "description": "给你两个 非空 的链表，表示两个非负的整数。数字最高位位于链表末尾。请你将两个数相加，并以相同形式返回一个表示和的链表。",
    "intuition": "【模拟加法 + 进位 carry】同时遍历 l1 和 l2，计算 sum = val1 + val2 + carry，当前位为 sum % 10，进位 carry = sum / 10。",
    "timeComplexity": "O(max(M, N))",
    "spaceComplexity": "O(1)",
    "codeTemplates": {
      "java": "public ListNode addTwoNumbers(ListNode l1, ListNode l2) {\n    ListNode dummy = new ListNode(0);\n    ListNode curr = dummy;\n    int carry = 0;\n    while (l1 != null || l2 != null || carry != 0) {\n        int x = (l1 != null) ? l1.val : 0;\n        int y = (l2 != null) ? l2.val : 0;\n        int sum = x + y + carry;\n        carry = sum / 10;\n        curr.next = new ListNode(sum % 10);\n        curr = curr.next;\n        if (l1 != null) l1 = l1.next;\n        if (l2 != null) l2 = l2.next;\n    }\n    return dummy.next;\n}",
      "python": "def addTwoNumbers(l1: Optional[ListNode], l2: Optional[ListNode]) -> Optional[ListNode]:\n    dummy = curr = ListNode(0)\n    carry = 0\n    while l1 or l2 or carry:\n        x = l1.val if l1 else 0\n        y = l2.val if l2 else 0\n        s = x + y + carry\n        carry = s // 10\n        curr.next = ListNode(s % 10)\n        curr = curr.next\n        l1 = l1.next if l1 else None\n        l2 = l2.next if l2 else None\n    return dummy.next"
    }
  },
  {
    "id": 19,
    "title": "删除链表的倒数第 N 个结点",
    "englishTitle": "Remove Nth Node From End of List",
    "difficulty": "中等",
    "category": "链表",
    "description": "给你一个链表，删除链表的倒数第 n 个结点，并且返回链表的头结点。",
    "intuition": "【前后双指针 (相差 n 步)】fast 先走 n 步。而后 slow 与 fast 同时前进。当 fast 达到尾部时，slow 正好停在待删除节点的前驱位置。",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(1)",
    "codeTemplates": {
      "java": "public ListNode removeNthFromEnd(ListNode head, int n) {\n    ListNode dummy = new ListNode(0, head);\n    ListNode fast = dummy, slow = dummy;\n    for (int i = 0; i <= n; i++) fast = fast.next;\n    while (fast != null) {\n        fast = fast.next;\n        slow = slow.next;\n    }\n    slow.next = slow.next.next;\n    return dummy.next;\n}",
      "python": "def removeNthFromEnd(head: Optional[ListNode], n: int) -> Optional[ListNode]:\n    dummy = ListNode(0, head)\n    fast = slow = dummy\n    for _ in range(n + 1):\n        fast = fast.next\n    while fast:\n        fast = fast.next\n        slow = slow.next\n    slow.next = slow.next.next\n    return dummy.next"
    }
  },
  {
    "id": 24,
    "title": "两两交换链表中的节点",
    "englishTitle": "Swap Nodes in Pairs",
    "difficulty": "中等",
    "category": "链表",
    "description": "给你一个链表，两两交换其中相邻的节点，并返回交换后链表的头节点。必须在不修改节点内部的值的情况下完成。",
    "intuition": "【Dummy 节点 + 改变指针连接】改变 node1 与 node2 的指针方向：dummy.next = node2; node1.next = node2.next; node2.next = node1。",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(1)",
    "codeTemplates": {
      "java": "public ListNode swapPairs(ListNode head) {\n    ListNode dummy = new ListNode(0, head);\n    ListNode temp = dummy;\n    while (temp.next != null && temp.next.next != null) {\n        ListNode node1 = temp.next;\n        ListNode node2 = temp.next.next;\n        temp.next = node2;\n        node1.next = node2.next;\n        node2.next = node1;\n        temp = node1;\n    }\n    return dummy.next;\n}",
      "python": "def swapPairs(head: Optional[ListNode]) -> Optional[ListNode]:\n    dummy = temp = ListNode(0, head)\n    while temp.next and temp.next.next:\n        n1, n2 = temp.next, temp.next.next\n        temp.next = n2\n        n1.next = n2.next\n        n2.next = n1\n        temp = n1\n    return dummy.next"
    }
  },
  {
    "id": 25,
    "title": "K 个一组翻转链表",
    "englishTitle": "Reverse Nodes in k-Group",
    "difficulty": "困难",
    "category": "链表",
    "description": "给你链表的头节点 head ，每 k 个节点一组进行翻转，请你返回修改后的链表。",
    "intuition": "【分组反转】检查剩余节点是否 >= k。若满足，反转这 k 个节点并返回新头节点，递归/迭代处理剩余链表段并连接。",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(1)",
    "codeTemplates": {
      "java": "public ListNode reverseKGroup(ListNode head, int k) {\n    ListNode curr = head;\n    int count = 0;\n    while (curr != null && count != k) {\n        curr = curr.next;\n        count++;\n    }\n    if (count == k) {\n        curr = reverseKGroup(curr, k);\n        while (count-- > 0) {\n            ListNode tmp = head.next;\n            head.next = curr;\n            curr = head;\n            head = tmp;\n        }\n        head = curr;\n    }\n    return head;\n}",
      "python": "def reverseKGroup(head: Optional[ListNode], k: int) -> Optional[ListNode]:\n    curr = head\n    count = 0\n    while curr and count != k:\n        curr = curr.next\n        count += 1\n    if count == k:\n        curr = reverseKGroup(curr, k)\n        while count > 0:\n            tmp = head.next\n            head.next = curr\n            curr = head\n            head = tmp\n            count -= 1\n        head = curr\n    return head"
    }
  },
  {
    "id": 138,
    "title": "随机链表的复制",
    "englishTitle": "Copy List with Random Pointer",
    "difficulty": "中等",
    "category": "链表",
    "description": "给你一个长度为 n 的链表，每个节点包含一个额外增加的随机指针 random ，该指针可以指向链表中的任何节点或空节点。构造这个链表的 深拷贝。",
    "intuition": "【哈希映射 / 节点插空拷贝】用 Map 保存 oldNode -> newNode 的映射；或者将新节点交错插在旧节点之后，复制 random 指针后再拆分。",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "codeTemplates": {
      "java": "public Node copyRandomList(Node head) {\n    if (head == null) return null;\n    Map<Node, Node> map = new HashMap<>();\n    Node curr = head;\n    while (curr != null) {\n        map.put(curr, new Node(curr.val));\n        curr = curr.next;\n    }\n    curr = head;\n    while (curr != null) {\n        map.get(curr).next = map.get(curr.next);\n        map.get(curr).random = map.get(curr.random);\n        curr = curr.next;\n    }\n    return map.get(head);\n}",
      "python": "def copyRandomList(head: 'Optional[Node]') -> 'Optional[Node]':\n    if not head: return None\n    mp = {}\n    curr = head\n    while curr:\n        mp[curr] = Node(curr.val)\n        curr = curr.next\n    curr = head\n    while curr:\n        mp[curr].next = mp.get(curr.next)\n        mp[curr].random = mp.get(curr.random)\n        curr = curr.next\n    return mp[head]"
    }
  },
  {
    "id": 148,
    "title": "排序链表",
    "englishTitle": "Sort List",
    "difficulty": "中等",
    "category": "链表",
    "description": "给你链表的头节点 head ，请将其按 升序 排列并返回 排序后的链表。要求 O(n log n) 时间复杂度和常数级空间复杂度。",
    "intuition": "【归并排序 (Merge Sort)】快慢指针找中点切断为两条子链表，分别递归排序，而后合并两个有序链表。",
    "timeComplexity": "O(N log N)",
    "spaceComplexity": "O(log N)",
    "codeTemplates": {
      "java": "public ListNode sortList(ListNode head) {\n    if (head == null || head.next == null) return head;\n    ListNode slow = head, fast = head.next;\n    while (fast != null && fast.next != null) {\n        slow = slow.next;\n        fast = fast.next.next;\n    }\n    ListNode mid = slow.next;\n    slow.next = null;\n    ListNode left = sortList(head);\n    ListNode right = sortList(mid);\n    return merge(left, right);\n}\nprivate ListNode merge(ListNode l1, ListNode l2) {\n    ListNode dummy = new ListNode(0), curr = dummy;\n    while (l1 != null && l2 != null) {\n        if (l1.val < l2.val) { curr.next = l1; l1 = l1.next; }\n        else { curr.next = l2; l2 = l2.next; }\n        curr = curr.next;\n    }\n    curr.next = (l1 != null) ? l1 : l2;\n    return dummy.next;\n}",
      "python": "def sortList(head: Optional[ListNode]) -> Optional[ListNode]:\n    if not head or not head.next: return head\n    slow, fast = head, head.next\n    while fast and fast.next:\n        slow = slow.next\n        fast = fast.next.next\n    mid = slow.next\n    slow.next = None\n    left = sortList(head)\n    right = sortList(mid)\n    dummy = curr = ListNode(0)\n    while left and right:\n        if left.val < right.val: curr.next, left = left, left.next\n        else: curr.next, right = right, right.next\n        curr = curr.next\n    curr.next = left or right\n    return dummy.next"
    }
  },
  {
    "id": 23,
    "title": "合并 K 个升序链表",
    "englishTitle": "Merge k Sorted Lists",
    "difficulty": "困难",
    "category": "链表",
    "description": "给你一个链表数组，每个链表都已经按升序排列。请你将所有链表合并到一个升序链表中，返回合并后的链表。",
    "intuition": "【小顶堆 PriorityQueue 或 分治归并】把 k 个链表头节点放入小顶堆。每次弹出最小节点接入结果，并将其 `.next` 节点压入堆中。",
    "timeComplexity": "O(N log K)",
    "spaceComplexity": "O(K)",
    "codeTemplates": {
      "java": "public ListNode mergeKLists(ListNode[] lists) {\n    if (lists == null || lists.length == 0) return null;\n    PriorityQueue<ListNode> pq = new PriorityQueue<>((a, b) -> Integer.compare(a.val, b.val));\n    for (ListNode node : lists) if (node != null) pq.add(node);\n    ListNode dummy = new ListNode(0), curr = dummy;\n    while (!pq.isEmpty()) {\n        ListNode minNode = pq.poll();\n        curr.next = minNode;\n        curr = curr.next;\n        if (minNode.next != null) pq.add(minNode.next);\n    }\n    return dummy.next;\n}",
      "python": "def mergeKLists(lists: List[Optional[ListNode]]) -> Optional[ListNode]:\n    import heapq\n    heap = []\n    for i, node in enumerate(lists):\n        if node: heapq.heappush(heap, (node.val, i, node))\n    dummy = curr = ListNode(0)\n    while heap:\n        val, i, node = heapq.heappop(heap)\n        curr.next = node\n        curr = curr.next\n        if node.next:\n            heapq.heappush(heap, (node.next.val, i, node.next))\n    return dummy.next"
    }
  },
  {
    "id": 146,
    "title": "LRU 缓存",
    "englishTitle": "LRU Cache",
    "difficulty": "中等",
    "category": "链表",
    "description": "设计并实现一个满足 LRU (最近最少使用) 缓存 约束的数据结构。",
    "intuition": "【HashMap + 双向链表】HashMap 提供 O(1) 查找；双向链表头部维护最新访问节点，尾部淘汰最久未访问节点。",
    "timeComplexity": "O(1)",
    "spaceComplexity": "O(Capacity)",
    "codeTemplates": {
      "java": "class LRUCache {\n    class Node {\n        int key, value;\n        Node prev, next;\n        Node(int k, int v) { key = k; value = v; }\n    }\n    private int capacity;\n    private Map<Integer, Node> map = new HashMap<>();\n    private Node head = new Node(0, 0), tail = new Node(0, 0);\n    public LRUCache(int capacity) {\n        this.capacity = capacity;\n        head.next = tail; tail.prev = head;\n    }\n    public int get(int key) {\n        if (!map.containsKey(key)) return -1;\n        Node n = map.get(key);\n        moveToHead(n);\n        return n.value;\n    }\n    public void put(int key, int value) {\n        if (map.containsKey(key)) {\n            Node n = map.get(key);\n            n.value = value;\n            moveToHead(n);\n        } else {\n            if (map.size() >= capacity) {\n                Node remove = tail.prev;\n                removeNode(remove);\n                map.remove(remove.key);\n            }\n            Node newNode = new Node(key, value);\n            map.put(key, newNode);\n            addToHead(newNode);\n        }\n    }\n    private void removeNode(Node n) { n.prev.next = n.next; n.next.prev = n.prev; }\n    private void addToHead(Node n) { n.next = head.next; n.prev = head; head.next.prev = n; head.next = n; }\n    private void moveToHead(Node n) { removeNode(n); addToHead(n); }\n}",
      "python": "class LRUCache:\n    def __init__(self, capacity: int):\n        self.cap = capacity\n        self.cache = collections.OrderedDict()\n    def get(self, key: int) -> int:\n        if key not in self.cache: return -1\n        self.cache.move_to_end(key)\n        return self.cache[key]\n    def put(self, key: int, value: int) -> None:\n        if key in self.cache: self.cache.move_to_end(key)\n        self.cache[key] = value\n        if len(self.cache) > self.cap: self.cache.popitem(last=False)"
    }
  },
  {
    "id": 94,
    "title": "二叉树的中序遍历",
    "englishTitle": "Binary Tree Inorder Traversal",
    "difficulty": "简单",
    "category": "二叉树",
    "description": "给定一个二叉树的根节点 root ，返回它的 中序 遍历 (左 -> 根 -> 右)。",
    "intuition": "【DFS 递归 / 显式栈】中序遍历顺序为 左子树 -> 当前根节点 -> 右子树。",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "codeTemplates": {
      "java": "public List<Integer> inorderTraversal(TreeNode root) {\n    List<Integer> res = new ArrayList<>();\n    inorder(root, res);\n    return res;\n}\nprivate void inorder(TreeNode root, List<Integer> res) {\n    if (root == null) return;\n    inorder(root.left, res);\n    res.add(root.val);\n    inorder(root.right, res);\n}",
      "python": "def inorderTraversal(root: Optional[TreeNode]) -> List[int]:\n    res = []\n    def dfs(node):\n        if not node: return\n        dfs(node.left)\n        res.append(node.val)\n        dfs(node.right)\n    dfs(root)\n    return res"
    }
  },
  {
    "id": 104,
    "title": "二叉树的最大深度",
    "englishTitle": "Maximum Depth of Binary Tree",
    "difficulty": "简单",
    "category": "二叉树",
    "description": "给定一个二叉树 root ，返回其最大深度。二叉树的深度为根节点到最远叶子节点的最长路径上的节点数。",
    "intuition": "【树形 DP 递归】最大深度 = max(maxDepth(root.left), maxDepth(root.right)) + 1。",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "codeTemplates": {
      "java": "public int maxDepth(TreeNode root) {\n    if (root == null) return 0;\n    return Math.max(maxDepth(root.left), maxDepth(root.right)) + 1;\n}",
      "python": "def maxDepth(root: Optional[TreeNode]) -> int:\n    if not root: return 0\n    return max(maxDepth(root.left), maxDepth(root.right)) + 1"
    }
  },
  {
    "id": 226,
    "title": "翻转二叉树",
    "englishTitle": "Invert Binary Tree",
    "difficulty": "简单",
    "category": "二叉树",
    "description": "给你一棵二叉树的根节点 root ，翻转这棵二叉树，并返回其根节点。",
    "intuition": "【前序/后序递归镜像】交换当前节点的左右子树 `root.left <-> root.right`，而后递归镜像左右子树。",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "codeTemplates": {
      "java": "public TreeNode invertTree(TreeNode root) {\n    if (root == null) return null;\n    TreeNode temp = root.left;\n    root.left = invertTree(root.right);\n    root.right = invertTree(temp);\n    return root;\n}",
      "python": "def invertTree(root: Optional[TreeNode]) -> Optional[TreeNode]:\n    if not root: return None\n    root.left, root.right = invertTree(root.right), invertTree(root.left)\n    return root"
    }
  },
  {
    "id": 101,
    "title": "对称二叉树",
    "englishTitle": "Symmetric Tree",
    "difficulty": "简单",
    "category": "二叉树",
    "description": "给你一个二叉树的根节点 root ，检查它是否轴对称。",
    "intuition": "【双指针镜像递归】比较 left.val == right.val 且 isMirror(left.left, right.right) 且 isMirror(left.right, right.left)。",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "codeTemplates": {
      "java": "public boolean isSymmetric(TreeNode root) {\n    return root == null || check(root.left, root.right);\n}\nprivate boolean check(TreeNode p, TreeNode q) {\n    if (p == null && q == null) return true;\n    if (p == null || q == null || p.val != q.val) return false;\n    return check(p.left, q.right) && check(p.right, q.left);\n}",
      "python": "def isSymmetric(root: Optional[TreeNode]) -> bool:\n    def isMirror(p, q):\n        if not p and not q: return True\n        if not p or not q or p.val != q.val: return False\n        return isMirror(p.left, q.right) and isMirror(p.right, q.left)\n    return not root or isMirror(root.left, root.right)"
    }
  },
  {
    "id": 543,
    "title": "二叉树的直径",
    "englishTitle": "Diameter of Binary Tree",
    "difficulty": "简单",
    "category": "二叉树",
    "description": "给你一棵二叉树的根节点，返回该树的 直径 。二叉树的直径是指树中任意两个节点之间最长路径的 长度 。",
    "intuition": "【全局 max 维护路径】对于每个节点，穿过该节点的最长路径 = leftDepth + rightDepth。在计算深度的后序 DFS 中顺便更新全局最大值。",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "codeTemplates": {
      "java": "private int maxDiameter = 0;\npublic int diameterOfBinaryTree(TreeNode root) {\n    depth(root);\n    return maxDiameter;\n}\nprivate int depth(TreeNode node) {\n    if (node == null) return 0;\n    int L = depth(node.left);\n    int R = depth(node.right);\n    maxDiameter = Math.max(maxDiameter, L + R);\n    return Math.max(L, R) + 1;\n}",
      "python": "def diameterOfBinaryTree(root: Optional[TreeNode]) -> int:\n    max_d = 0\n    def depth(node):\n        nonlocal max_d\n        if not node: return 0\n        L = depth(node.left)\n        R = depth(node.right)\n        max_d = max(max_d, L + R)\n        return max(L, R) + 1\n    depth(root)\n    return max_d"
    }
  },
  {
    "id": 102,
    "title": "二叉树的层序遍历",
    "englishTitle": "Binary Tree Level Order Traversal",
    "difficulty": "中等",
    "category": "二叉树",
    "description": "给你二叉树的根节点 root ，返回其节点值的 层序遍历 。",
    "intuition": "【Queue BFS】维护 Queue，每次按当前 queue.size() 取出该层全部节点，压入当前层结果后加入它们的左右子节点。",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "codeTemplates": {
      "java": "public List<List<Integer>> levelOrder(TreeNode root) {\n    List<List<Integer>> res = new ArrayList<>();\n    if (root == null) return res;\n    Queue<TreeNode> q = new LinkedList<>();\n    q.offer(root);\n    while (!q.isEmpty()) {\n        int size = q.size();\n        List<Integer> level = new ArrayList<>();\n        for (int i = 0; i < size; i++) {\n            TreeNode node = q.poll();\n            level.add(node.val);\n            if (node.left != null) q.offer(node.left);\n            if (node.right != null) q.offer(node.right);\n        }\n        res.add(level);\n    }\n    return res;\n}",
      "python": "def levelOrder(root: Optional[TreeNode]) -> List[List[int]]:\n    if not root: return []\n    res, q = [], collections.deque([root])\n    while q:\n        level = []\n        for _ in range(len(q)):\n            node = q.popleft()\n            level.append(node.val)\n            if node.left: q.append(node.left)\n            if node.right: q.append(node.right)\n        res.append(level)\n    return res"
    }
  },
  {
    "id": 108,
    "title": "将有序数组转换为二叉搜索树",
    "englishTitle": "Convert Sorted Array to Binary Search Tree",
    "difficulty": "简单",
    "category": "二叉树",
    "description": "给你一个整数数组 nums ，其中元素已按 升序 排列，请你将其转换为一棵 高度平衡 二叉搜索树 (BST)。",
    "intuition": "【二分分治递归】选取中间元素 `mid = (left + right) / 2` 作为根节点，递归将其左半部分构建为左子树，右半部分构建为右子树。",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(log N)",
    "codeTemplates": {
      "java": "public TreeNode sortedArrayToBST(int[] nums) {\n    return helper(nums, 0, nums.length - 1);\n}\nprivate TreeNode helper(int[] nums, int left, int right) {\n    if (left > right) return null;\n    int mid = (left + right) / 2;\n    TreeNode root = new TreeNode(nums[mid]);\n    root.left = helper(nums, left, mid - 1);\n    root.right = helper(nums, mid + 1, right);\n    return root;\n}",
      "python": "def sortedArrayToBST(nums: List[int]) -> Optional[TreeNode]:\n    def helper(left, right):\n        if left > right: return None\n        mid = (left + right) // 2\n        root = TreeNode(nums[mid])\n        root.left = helper(left, mid - 1)\n        root.right = helper(mid + 1, right)\n        return root\n    return helper(0, len(nums) - 1)"
    }
  },
  {
    "id": 98,
    "title": "验证二叉搜索树",
    "englishTitle": "Validate Binary Search Tree",
    "difficulty": "中等",
    "category": "二叉树",
    "description": "给你一个二叉树的根节点 root ，判断其是否是一个有效的二叉搜索树。",
    "intuition": "【区间边界 [lower, upper] 传递 或 中序遍历单调递增】递归传递允许的值域区间 (lower, upper)，或者使用中序遍历校验前序值小于当前值。",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "codeTemplates": {
      "java": "public boolean isValidBST(TreeNode root) {\n    return validate(root, null, null);\n}\nprivate boolean validate(TreeNode node, Integer lower, Integer upper) {\n    if (node == null) return true;\n    if (lower != null && node.val <= lower) return false;\n    if (upper != null && node.val >= upper) return false;\n    return validate(node.left, lower, node.val) && validate(node.right, node.val, upper);\n}",
      "python": "def isValidBST(root: Optional[TreeNode]) -> bool:\n    def validate(node, low=float('-inf'), high=float('inf')):\n        if not node: return True\n        if node.val <= low or node.val >= high: return False\n        return validate(node.left, low, node.val) and validate(node.right, node.val, high)\n    return validate(root)"
    }
  },
  {
    "id": 230,
    "title": "二叉搜索树中第 K 小的元素",
    "englishTitle": "Kth Smallest Element in a BST",
    "difficulty": "中等",
    "category": "二叉树",
    "description": "给定一个二叉搜索树的根节点 root ，和一个整数 k ，请你设计一个脚本，查找其中第 k 小的元素。",
    "intuition": "【BST 中序遍历第 K 个】BST 的中序遍历序列严格单调递增。进行中序遍历并在每次访问节点时 k--，当 k==0 即找到答案。",
    "timeComplexity": "O(H + K)",
    "spaceComplexity": "O(H)",
    "codeTemplates": {
      "java": "private int count = 0, res = 0;\npublic int kthSmallest(TreeNode root, int k) {\n    count = k;\n    inorder(root);\n    return res;\n}\nprivate void inorder(TreeNode node) {\n    if (node == null) return;\n    inorder(node.left);\n    count--;\n    if (count == 0) { res = node.val; return; }\n    inorder(node.right);\n}",
      "python": "def kthSmallest(root: Optional[TreeNode], k: int) -> int:\n    res = 0\n    def inorder(node):\n        nonlocal k, res\n        if not node: return\n        inorder(node.left)\n        k -= 1\n        if k == 0: res = node.val; return\n        inorder(node.right)\n    inorder(root)\n    return res"
    }
  },
  {
    "id": 199,
    "title": "二叉树的右视图",
    "englishTitle": "Binary Tree Right Side View",
    "difficulty": "中等",
    "category": "二叉树",
    "description": "给定一个二叉树的根节点 root ，想象自己站在它的右侧，按照从顶部到底部的顺序，返回从右侧所能看到的节点值。",
    "intuition": "【根->右->左 优先 DFS】优先访问右子树的 DFS 遍历。当首次访问某一新的深度 (`res.size() == depth`) 时，该节点即为该层右视图节点。",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "codeTemplates": {
      "java": "public List<Integer> rightSideView(TreeNode root) {\n    List<Integer> res = new ArrayList<>();\n    dfs(root, 0, res);\n    return res;\n}\nprivate void dfs(TreeNode node, int depth, List<Integer> res) {\n    if (node == null) return;\n    if (depth == res.size()) res.add(node.val);\n    dfs(node.right, depth + 1, res);\n    dfs(node.left, depth + 1, res);\n}",
      "python": "def rightSideView(root: Optional[TreeNode]) -> List[int]:\n    res = []\n    def dfs(node, depth):\n        if not node: return\n        if depth == len(res): res.append(node.val)\n        dfs(node.right, depth + 1)\n        dfs(node.left, depth + 1)\n    dfs(root, 0)\n    return res"
    }
  },
  {
    "id": 114,
    "title": "二叉树展开为链表",
    "englishTitle": "Flatten Binary Tree to Linked List",
    "difficulty": "中等",
    "category": "二叉树",
    "description": "给你二叉树的根结点 root ，请你将它展开为一个单链表。展开后的单链表应该同样使用 TreeNode ，其中 right 子节点指向链表中下一个节点，而 left 子节点始终为 null 。",
    "intuition": "【寻找左子树的最右前驱节点】对于当前节点，若存在左子树，将其左子树的最右节点连接到当前节点的右子树，而后将左子树移至右边。",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(1)",
    "codeTemplates": {
      "java": "public void flatten(TreeNode root) {\n    TreeNode curr = root;\n    while (curr != null) {\n        if (curr.left != null) {\n            TreeNode predecessor = curr.left;\n            while (predecessor.right != null) predecessor = predecessor.right;\n            predecessor.right = curr.right;\n            curr.right = curr.left;\n            curr.left = null;\n        }\n        curr = curr.right;\n    }\n}",
      "python": "def flatten(root: Optional[TreeNode]) -> None:\n    curr = root\n    while curr:\n        if curr.left:\n            pred = curr.left\n            while pred.right: pred = pred.right\n            pred.right = curr.right\n            curr.right = curr.left\n            curr.left = None\n        curr = curr.right"
    }
  },
  {
    "id": 105,
    "title": "从前序与中序遍历序列构造二叉树",
    "englishTitle": "Construct Binary Tree from Preorder and Inorder Traversal",
    "difficulty": "中等",
    "category": "二叉树",
    "description": "给定两个整数数组 preorder 和 inorder ，其中 preorder 是二叉树的先序遍历， inorder 是同一棵树的中序遍历，请构造二叉树并返回其根节点。",
    "intuition": "【前序找根 + 中序切分左右子树】preorder[0] 是根节点。在中序遍历中找到根节点的索引 inRoot，该索引左侧为左子树，右侧为右子树。",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "codeTemplates": {
      "java": "private Map<Integer, Integer> inMap = new HashMap<>();\npublic TreeNode buildTree(int[] preorder, int[] inorder) {\n    for (int i = 0; i < inorder.length; i++) inMap.put(inorder[i], i);\n    return helper(preorder, 0, preorder.length - 1, 0);\n}\nprivate TreeNode helper(int[] preorder, int preStart, int preEnd, int inStart) {\n    if (preStart > preEnd) return null;\n    TreeNode root = new TreeNode(preorder[preStart]);\n    int inRoot = inMap.get(root.val);\n    int leftLen = inRoot - inStart;\n    root.left = helper(preorder, preStart + 1, preStart + leftLen, inStart);\n    root.right = helper(preorder, preStart + leftLen + 1, preEnd, inRoot + 1);\n    return root;\n}",
      "python": "def buildTree(preorder: List[int], inorder: List[int]) -> Optional[TreeNode]:\n    in_map = {val: i for i, val in enumerate(inorder)}\n    def helper(pre_start, pre_end, in_start):\n        if pre_start > pre_end: return None\n        root_val = preorder[pre_start]\n        root = TreeNode(root_val)\n        in_root = in_map[root_val]\n        left_len = in_root - in_start\n        root.left = helper(pre_start + 1, pre_start + left_len, in_start)\n        root.right = helper(pre_start + left_len + 1, pre_end, in_root + 1)\n        return root\n    return helper(0, len(preorder) - 1, 0)"
    }
  },
  {
    "id": 437,
    "title": "路径总和 III",
    "englishTitle": "Path Sum III",
    "difficulty": "中等",
    "category": "二叉树",
    "description": "给定一个二叉树的根节点 root ，和一个整数 targetSum ，求该二叉树里节点值之和等于 targetSum 的 路径 的数目。路径不需要从根节点开始，也不需要在叶子节点结束。",
    "intuition": "【树上前缀和 + HashMap 回溯】树上路径和转化为 currSum。维护前缀和频率 Map，递归向下加，回溯时减去对应频次。",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "codeTemplates": {
      "java": "private Map<Long, Integer> prefixMap = new HashMap<>();\npublic int pathSum(TreeNode root, int targetSum) {\n    prefixMap.put(0L, 1);\n    return dfs(root, 0L, targetSum);\n}\nprivate int dfs(TreeNode node, long currSum, int targetSum) {\n    if (node == null) return 0;\n    currSum += node.val;\n    int res = prefixMap.getOrDefault(currSum - targetSum, 0);\n    prefixMap.put(currSum, prefixMap.getOrDefault(currSum, 0) + 1);\n    res += dfs(node.left, currSum, targetSum);\n    res += dfs(node.right, currSum, targetSum);\n    prefixMap.put(currSum, prefixMap.get(currSum) - 1);\n    return res;\n}",
      "python": "def pathSum(root: Optional[TreeNode], targetSum: int) -> int:\n    prefix = collections.defaultdict(int)\n    prefix[0] = 1\n    def dfs(node, curr):\n        if not node: return 0\n        curr += node.val\n        res = prefix[curr - targetSum]\n        prefix[curr] += 1\n        res += dfs(node.left, curr)\n        res += dfs(node.right, curr)\n        prefix[curr] -= 1\n        return res\n    return dfs(root, 0)"
    }
  },
  {
    "id": 236,
    "title": "二叉树的最近公共祖先",
    "englishTitle": "Lowest Common Ancestor of a Binary Tree",
    "difficulty": "中等",
    "category": "二叉树",
    "description": "给定一个二叉树, 找到该树中两个指定节点 p 和 q 的最近公共祖先 (LCA)。",
    "intuition": "【后序 DFS 递归】若当前节点为 null 或等于 p/q 直接返回。递归左右子树，若左右子树都不为空，说明当前节点即为 LCA！",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "codeTemplates": {
      "java": "public TreeNode lowestCommonAncestor(TreeNode root, TreeNode p, TreeNode q) {\n    if (root == null || root == p || root == q) return root;\n    TreeNode left = lowestCommonAncestor(root.left, p, q);\n    TreeNode right = lowestCommonAncestor(root.right, p, q);\n    if (left != null && right != null) return root;\n    return left != null ? left : right;\n}",
      "python": "def lowestCommonAncestor(root: 'TreeNode', p: 'TreeNode', q: 'TreeNode') -> 'TreeNode':\n    if not root or root == p or root == q: return root\n    left = lowestCommonAncestor(root.left, p, q)\n    right = lowestCommonAncestor(root.right, p, q)\n    if left and right: return root\n    return left or right"
    }
  },
  {
    "id": 124,
    "title": "二叉树中的最大路径和",
    "englishTitle": "Binary Tree Maximum Path Sum",
    "difficulty": "困难",
    "category": "二叉树",
    "description": "二叉树中的 路径 被定义为一条节点序列，序列中每对相邻节点之间都存在一条边。路径和 是路径中各节点值的总和。计算二叉树的最大路径和。",
    "intuition": "【树形 DP 递归】单侧最大贡献 = Math.max(0, maxGain(node.left/right))。在遍历每个节点时，穿过该节点的最长路径为 node.val + left + right，用于更新全局最大值。",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "codeTemplates": {
      "java": "private int maxSum = Integer.MIN_VALUE;\npublic int maxPathSum(TreeNode root) {\n    maxGain(root);\n    return maxSum;\n}\nprivate int maxGain(TreeNode node) {\n    if (node == null) return 0;\n    int leftGain = Math.max(maxGain(node.left), 0);\n    int rightGain = Math.max(maxGain(node.right), 0);\n    int priceNewpath = node.val + leftGain + rightGain;\n    maxSum = Math.max(maxSum, priceNewpath);\n    return node.val + Math.max(leftGain, rightGain);\n}",
      "python": "def maxPathSum(root: Optional[TreeNode]) -> int:\n    max_s = float('-inf')\n    def maxGain(node):\n        nonlocal max_s\n        if not node: return 0\n        L = max(maxGain(node.left), 0)\n        R = max(maxGain(node.right), 0)\n        max_s = max(max_s, node.val + L + R)\n        return node.val + max(L, R)\n    maxGain(root)\n    return max_s"
    }
  },
  {
    "id": 200,
    "title": "岛屿数量",
    "englishTitle": "Number of Islands",
    "difficulty": "中等",
    "category": "图论",
    "description": "给你一个由 '1'（陆地）和 '0'（水）组成的的二维网格，请你计算网格中岛屿的数量。",
    "intuition": "【Grid DFS 沉岛法】遍历网格，遇到 '1' 则岛屿数 count++，并启动 DFS 递归将相邻连接的所有 '1' 淹没置为 '0'。",
    "timeComplexity": "O(M * N)",
    "spaceComplexity": "O(M * N)",
    "codeTemplates": {
      "java": "public int numIslands(char[][] grid) {\n    int count = 0;\n    for (int r = 0; r < grid.length; r++) {\n        for (int c = 0; c < grid[0].length; c++) {\n            if (grid[r][c] == '1') {\n                count++;\n                dfs(grid, r, c);\n            }\n        }\n    }\n    return count;\n}\nprivate void dfs(char[][] grid, int r, int c) {\n    if (r < 0 || r >= grid.length || c < 0 || c >= grid[0].length || grid[r][c] != '1') return;\n    grid[r][c] = '0';\n    dfs(grid, r - 1, c); dfs(grid, r + 1, c);\n    dfs(grid, r, c - 1); dfs(grid, r, c + 1);\n}",
      "python": "def numIslands(grid: List[List[str]]) -> int:\n    count = 0\n    def dfs(r, c):\n        if r < 0 or r >= len(grid) or c < 0 or c >= len(grid[0]) or grid[r][c] != '1': return\n        grid[r][c] = '0'\n        dfs(r-1, c); dfs(r+1, c); dfs(r, c-1); dfs(r, c+1)\n    for r in range(len(grid)):\n        for c in range(len(grid[0])):\n            if grid[r][c] == '1':\n                count += 1\n                dfs(r, c)\n    return count"
    }
  },
  {
    "id": 994,
    "title": "腐烂的橘子",
    "englishTitle": "Rotting Oranges",
    "difficulty": "中等",
    "category": "图论",
    "description": "在给定的 m x n 网格 grid 中，每个格子可能是 0(空)、1(新鲜橘子)、2(腐烂橘子)。每分钟腐烂橘子会让向四个方向相邻的新鲜橘子腐烂。求最少经过多少分钟使得没有新鲜橘子。",
    "intuition": "【多源 BFS】先将所有腐烂橘子 '2' 的坐标压入 Queue。逐分钟 BFS 向四周辐射扩散，每次把周边 '1' 变为 '2' 并 freshCount--。",
    "timeComplexity": "O(M * N)",
    "spaceComplexity": "O(M * N)",
    "codeTemplates": {
      "java": "public int orangesRotting(int[][] grid) {\n    Queue<int[]> q = new LinkedList<>();\n    int fresh = 0, minutes = 0;\n    int m = grid.length, n = grid[0].length;\n    for (int i = 0; i < m; i++) {\n        for (int j = 0; j < n; j++) {\n            if (grid[i][j] == 2) q.offer(new int[]{i, j});\n            else if (grid[i][j] == 1) fresh++;\n        }\n    }\n    int[][] dirs = {{-1,0},{1,0},{0,-1},{0,1}};\n    while (!q.isEmpty() && fresh > 0) {\n        minutes++;\n        int size = q.size();\n        for (int i = 0; i < size; i++) {\n            int[] curr = q.poll();\n            for (int[] d : dirs) {\n                int r = curr[0] + d[0], c = curr[1] + d[1];\n                if (r >= 0 && r < m && c >= 0 && c < n && grid[r][c] == 1) {\n                    grid[r][c] = 2;\n                    fresh--;\n                    q.offer(new int[]{r, c});\n                }\n            }\n        }\n    }\n    return fresh == 0 ? minutes : -1;\n}",
      "python": "def orangesRotting(grid: List[List[int]]) -> int:\n    m, n = len(grid), len(grid[0])\n    q = collections.deque()\n    fresh = 0\n    for i in range(m):\n        for j in range(n):\n            if grid[i][j] == 2: q.append((i, j))\n            elif grid[i][j] == 1: fresh += 1\n    minutes = 0\n    dirs = [(-1,0), (1,0), (0,-1), (0,1)]\n    while q and fresh > 0:\n        minutes += 1\n        for _ in range(len(q)):\n            r, c = q.popleft()\n            for dr, dc in dirs:\n                nr, nc = r + dr, c + dc\n                if 0 <= nr < m and 0 <= nc < n and grid[nr][nc] == 1:\n                    grid[nr][nc] = 2\n                    fresh -= 1\n                    q.append((nr, nc))\n    return minutes if fresh == 0 else -1"
    }
  },
  {
    "id": 207,
    "title": "课程表",
    "englishTitle": "Course Schedule",
    "difficulty": "中等",
    "category": "图论",
    "description": "你这个学期必须选修 numCourses 门课程。在选修某些课程之前需要先修课程。判断你是否可能完成所有课程的学习？",
    "intuition": "【拓扑排序 (Kahn 算法 / 入度数组 + Queue)】计算每个节点的入度。将所有入度为 0 的节点推入 Queue，弹出时使其邻居节点的入度 minus 1。若最终弹出的节点总数等于 numCourses 说明有向无环。",
    "timeComplexity": "O(V + E)",
    "spaceComplexity": "O(V + E)",
    "codeTemplates": {
      "java": "public boolean canFinish(int numCourses, int[][] prerequisites) {\n    int[] inDegree = new int[numCourses];\n    List<List<Integer>> adj = new ArrayList<>();\n    for (int i = 0; i < numCourses; i++) adj.add(new ArrayList<>());\n    for (int[] p : prerequisites) {\n        inDegree[p[0]]++;\n        adj.get(p[1]).add(p[0]);\n    }\n    Queue<Integer> q = new LinkedList<>();\n    for (int i = 0; i < numCourses; i++) if (inDegree[i] == 0) q.offer(i);\n    int count = 0;\n    while (!q.isEmpty()) {\n        int curr = q.poll();\n        count++;\n        for (int next : adj.get(curr)) {\n            if (--inDegree[next] == 0) q.offer(next);\n        }\n    }\n    return count == numCourses;\n}",
      "python": "def canFinish(numCourses: int, prerequisites: List[List[int]]) -> bool:\n    in_degree = [0] * numCourses\n    adj = collections.defaultdict(list)\n    for cur, pre in prerequisites:\n        in_degree[cur] += 1\n        adj[pre].append(cur)\n    q = collections.deque([i for i in range(numCourses) if in_degree[i] == 0])\n    count = 0\n    while q:\n        curr = q.popleft()\n        count += 1\n        for nxt in adj[curr]:\n            in_degree[nxt] -= 1\n            if in_degree[nxt] == 0: q.append(nxt)\n    return count == numCourses"
    }
  },
  {
    "id": 46,
    "title": "全排列",
    "englishTitle": "Permutations",
    "difficulty": "中等",
    "category": "回溯算法",
    "description": "给定一个不含重复数字的数组 nums ，返回其 所有可能的全排列 。",
    "intuition": "【DFS 回溯 + used 数组】递归决策树每一层选择一个未使用的数字放入当前 path，回溯时撤销选择 (`path.removeLast()`, `used[i]=false`)。",
    "timeComplexity": "O(N * N!)",
    "spaceComplexity": "O(N)",
    "codeTemplates": {
      "java": "public List<List<Integer>> permute(int[] nums) {\n    List<List<Integer>> res = new ArrayList<>();\n    backtrack(res, new ArrayList<>(), nums, new boolean[nums.length]);\n    return res;\n}\nprivate void backtrack(List<List<Integer>> res, List<Integer> path, int[] nums, boolean[] used) {\n    if (path.size() == nums.length) {\n        res.add(new ArrayList<>(path));\n        return;\n    }\n    for (int i = 0; i < nums.length; i++) {\n        if (used[i]) continue;\n        used[i] = true;\n        path.add(nums[i]);\n        backtrack(res, path, nums, used);\n        path.remove(path.size() - 1);\n        used[i] = false;\n    }\n}",
      "python": "def permute(nums: List[int]) -> List[List[int]]:\n    res = []\n    def backtrack(path, used):\n        if len(path) == len(nums):\n            res.append(path[:]); return\n        for i in range(len(nums)):\n            if not used[i]:\n                used[i] = True\n                path.append(nums[i])\n                backtrack(path, used)\n                path.pop()\n                used[i] = False\n    backtrack([], [False] * len(nums))\n    return res"
    }
  },
  {
    "id": 78,
    "title": "子集",
    "englishTitle": "Subsets",
    "difficulty": "中等",
    "category": "回溯算法",
    "description": "给你一个整数数组 nums ，数组中的元素 互不相同 。返回该数组所有可能的子集（幂集）。",
    "intuition": "【DFS 回溯 / 每一个节点都是合法解】遍历每个 start 索引，选择或者不选择当前元素，在每个递归入口都将 path 深拷贝加入结果 res。",
    "timeComplexity": "O(N * 2^N)",
    "spaceComplexity": "O(N)",
    "codeTemplates": {
      "java": "public List<List<Integer>> subsets(int[] nums) {\n    List<List<Integer>> res = new ArrayList<>();\n    backtrack(res, new ArrayList<>(), nums, 0);\n    return res;\n}\nprivate void backtrack(List<List<Integer>> res, List<Integer> path, int[] nums, int start) {\n    res.add(new ArrayList<>(path));\n    for (int i = start; i < nums.length; i++) {\n        path.add(nums[i]);\n        backtrack(res, path, nums, i + 1);\n        path.remove(path.size() - 1);\n    }\n}",
      "python": "def subsets(nums: List[int]) -> List[List[int]]:\n    res = []\n    def backtrack(start, path):\n        res.append(path[:])\n        for i in range(start, len(nums)):\n            path.append(nums[i])\n            backtrack(i + 1, path)\n            path.pop()\n    backtrack(0, [])\n    return res"
    }
  },
  {
    "id": 17,
    "title": "电话号码的字母组合",
    "englishTitle": "Letter Combinations of a Phone Number",
    "difficulty": "中等",
    "category": "回溯算法",
    "description": "给定一个仅包含数字 2-9 的字符串 digits，返回所有它能表示的字母组合。",
    "intuition": "【DFS 映射回溯】建立数字 -> 字母字符串数组的映射。按层选择当前数字对应的每个字符递归，到达 digits.length() 时保存字符串。",
    "timeComplexity": "O(3^N * 4^M)",
    "spaceComplexity": "O(N + M)",
    "codeTemplates": {
      "java": "private String[] map = {\"\", \"\", \"abc\", \"def\", \"ghi\", \"jkl\", \"mno\", \"pqrs\", \"tuv\", \"wxyz\"};\npublic List<String> letterCombinations(String digits) {\n    List<String> res = new ArrayList<>();\n    if (digits.isEmpty()) return res;\n    backtrack(res, new StringBuilder(), digits, 0);\n    return res;\n}\nprivate void backtrack(List<String> res, StringBuilder sb, String digits, int index) {\n    if (index == digits.length()) {\n        res.add(sb.toString());\n        return;\n    }\n    String letters = map[digits.charAt(index) - '0'];\n    for (char c : letters.toCharArray()) {\n        sb.append(c);\n        backtrack(res, sb, digits, index + 1);\n        sb.deleteCharAt(sb.length() - 1);\n    }\n}",
      "python": "def letterCombinations(digits: str) -> List[str]:\n    if not digits: return []\n    mapping = {\"2\":\"abc\", \"3\":\"def\", \"4\":\"ghi\", \"5\":\"jkl\", \"6\":\"mno\", \"7\":\"pqrs\", \"8\":\"tuv\", \"9\":\"wxyz\"}\n    res = []\n    def backtrack(idx, path):\n        if idx == len(digits):\n            res.append(\"\".join(path)); return\n        for c in mapping[digits[idx]]:\n            path.append(c)\n            backtrack(idx + 1, path)\n            path.pop()\n    backtrack(0, [])\n    return res"
    }
  },
  {
    "id": 39,
    "title": "组合总和",
    "englishTitle": "Combination Sum",
    "difficulty": "中等",
    "category": "回溯算法",
    "description": "给你一个 无重复元素 的整数数组 candidates 和一个目标整数 target ，找出 candidates 中所有可以使数字和为目标数 target 的 所有 组合 。candidates 中的同一个数字可以 无限制重复被选取 。",
    "intuition": "【可重复选择回溯 + 减法剪枝】按 start 遍历 candidates。递归时由于数字可重复使用，下一层的 start 仍然传入当前索引 `i`。",
    "timeComplexity": "O(N^(Target/Min))",
    "spaceComplexity": "O(Target/Min)",
    "codeTemplates": {
      "java": "public List<List<Integer>> combinationSum(int[] candidates, int target) {\n    List<List<Integer>> res = new ArrayList<>();\n    Arrays.sort(candidates);\n    backtrack(res, new ArrayList<>(), candidates, target, 0);\n    return res;\n}\nprivate void backtrack(List<List<Integer>> res, List<Integer> path, int[] candidates, int remain, int start) {\n    if (remain == 0) {\n        res.add(new ArrayList<>(path));\n        return;\n    }\n    for (int i = start; i < candidates.length; i++) {\n        if (candidates[i] > remain) break; // 剪枝\n        path.add(candidates[i]);\n        backtrack(res, path, candidates, remain - candidates[i], i); // 可重复选 i\n        path.remove(path.size() - 1);\n    }\n}",
      "python": "def combinationSum(candidates: List[int], target: int) -> List[List[int]]:\n    res = []\n    candidates.sort()\n    def backtrack(start, remain, path):\n        if remain == 0:\n            res.append(path[:]); return\n        for i in range(start, len(candidates)):\n            if candidates[i] > remain: break\n            path.append(candidates[i])\n            backtrack(i, remain - candidates[i], path)\n            path.pop()\n    backtrack(0, target, [])\n    return res"
    }
  },
  {
    "id": 22,
    "title": "括号生成",
    "englishTitle": "Generate Parentheses",
    "difficulty": "中等",
    "category": "回溯算法",
    "description": "数字 n 代表生成括号的对数，请你设计一个函数，用于能够生成所有可能的并且 有效的 括号组合。",
    "intuition": "【左括号与右括号计数回溯】只要 left < n 即可添加 '('；只要 right < left 即可添加 ')'。达到 2*n 长度归纳结果。",
    "timeComplexity": "O(4^N / sqrt(N))",
    "spaceComplexity": "O(N)",
    "codeTemplates": {
      "java": "public List<String> generateParenthesis(int n) {\n    List<String> res = new ArrayList<>();\n    backtrack(res, new StringBuilder(), 0, 0, n);\n    return res;\n}\nprivate void backtrack(List<String> res, StringBuilder sb, int left, int right, int max) {\n    if (sb.length() == max * 2) {\n        res.add(sb.toString());\n        return;\n    }\n    if (left < max) {\n        sb.append('(');\n        backtrack(res, sb, left + 1, right, max);\n        sb.deleteCharAt(sb.length() - 1);\n    }\n    if (right < left) {\n        sb.append(')');\n        backtrack(res, sb, left, right + 1, max);\n        sb.deleteCharAt(sb.length() - 1);\n    }\n}",
      "python": "def generateParenthesis(n: int) -> List[str]:\n    res = []\n    def backtrack(left, right, path):\n        if len(path) == 2 * n:\n            res.append(\"\".join(path)); return\n        if left < n:\n            path.append('(')\n            backtrack(left + 1, right, path)\n            path.pop()\n        if right < left:\n            path.append(')')\n            backtrack(left, right + 1, path)\n            path.pop()\n    backtrack(0, 0, [])\n    return res"
    }
  },
  {
    "id": 79,
    "title": "单词搜索",
    "englishTitle": "Word Search",
    "difficulty": "中等",
    "category": "回溯算法",
    "description": "给定一个 m x n 二维字符网格 board 和一个字符串单词 word 。如果 word 存在于网格中，返回 true ；否则，返回 false 。",
    "intuition": "【Grid DFS 回溯】匹配当前字符后将格子标记为已访问(如 `board[r][c] = '#'`），递归搜索上下左右邻居，回溯时恢复原字符。",
    "timeComplexity": "O(M * N * 3^L)",
    "spaceComplexity": "O(L)",
    "codeTemplates": {
      "java": "public boolean exist(char[][] board, String word) {\n    int m = board.length, n = board[0].length;\n    for (int r = 0; r < m; r++) {\n        for (int c = 0; c < n; c++) {\n            if (dfs(board, word, r, c, 0)) return true;\n        }\n    }\n    return false;\n}\nprivate boolean dfs(char[][] board, String word, int r, int c, int k) {\n    if (k == word.length()) return true;\n    if (r < 0 || r >= board.length || c < 0 || c >= board[0].length || board[r][c] != word.charAt(k)) return false;\n    char temp = board[r][c];\n    board[r][c] = '#';\n    boolean res = dfs(board, word, r + 1, c, k + 1) || dfs(board, word, r - 1, c, k + 1) ||\n                  dfs(board, word, r, c + 1, k + 1) || dfs(board, word, r, c - 1, k + 1);\n    board[r][c] = temp;\n    return res;\n}",
      "python": "def exist(board: List[List[str]], word: str) -> bool:\n    m, n = len(board), len(board[0])\n    def dfs(r, c, k):\n        if k == len(word): return True\n        if r < 0 or r >= m or c < 0 or c >= n or board[r][c] != word[k]: return False\n        temp, board[r][c] = board[r][c], '#'\n        res = dfs(r+1, c, k+1) or dfs(r-1, c, k+1) or dfs(r, c+1, k+1) or dfs(r, c-1, k+1)\n        board[r][c] = temp\n        return res\n    for r in range(m):\n        for c in range(n):\n            if dfs(r, c, 0): return True\n    return False"
    }
  },
  {
    "id": 131,
    "title": "分割回文串",
    "englishTitle": "Palindrome Partitioning",
    "difficulty": "中等",
    "category": "回溯算法",
    "description": "给你一个字符串 s，请你将 s 分割成一些子串，使每个子串都是 回文串 。返回 s 所有可能的分割方案。",
    "intuition": "【切片回溯 + 回文判断】从 start 索引开始截取前缀 s[start..i]，若是回文串则将其加入 path，并递归搜索剩余后半部分 `i + 1`。",
    "timeComplexity": "O(N * 2^N)",
    "spaceComplexity": "O(N)",
    "codeTemplates": {
      "java": "public List<List<String>> partition(String s) {\n    List<List<String>> res = new ArrayList<>();\n    backtrack(res, new ArrayList<>(), s, 0);\n    return res;\n}\nprivate void backtrack(List<List<String>> res, List<String> path, String s, int start) {\n    if (start == s.length()) {\n        res.add(new ArrayList<>(path));\n        return;\n    }\n    for (int i = start; i < s.length(); i++) {\n        if (isPalindrome(s, start, i)) {\n            path.add(s.substring(start, i + 1));\n            backtrack(res, path, s, i + 1);\n            path.remove(path.size() - 1);\n        }\n    }\n}\nprivate boolean isPalindrome(String s, int l, int r) {\n    while (l < r) if (s.charAt(l++) != s.charAt(r--)) return false;\n    return true;\n}",
      "python": "def partition(s: str) -> List[List[str]]:\n    res = []\n    def is_palindrome(sub): return sub == sub[::-1]\n    def backtrack(start, path):\n        if start == len(s):\n            res.append(path[:]); return\n        for i in range(start, len(s)):\n            sub = s[start:i+1]\n            if is_palindrome(sub):\n                path.append(sub)\n                backtrack(i + 1, path)\n                path.pop()\n    backtrack(0, [])\n    return res"
    }
  },
  {
    "id": 51,
    "title": "N 皇后",
    "englishTitle": "N-Queens",
    "difficulty": "困难",
    "category": "回溯算法",
    "description": "按棋盘规则在 n×n 的棋盘上放置 n 个皇后，使得皇后彼此不能相互攻击（不在同一行、同一列或同一斜线上）。",
    "intuition": "【按行递归 + 3个集合冲突检查】维护 cols, diag1(row - col), diag2(row + col) 集合。逐行决策列索引放皇后，剪枝冲突列。",
    "timeComplexity": "O(N!)",
    "spaceComplexity": "O(N)",
    "codeTemplates": {
      "java": "public List<List<String>> solveNQueens(int n) {\n    List<List<String>> res = new ArrayList<>();\n    char[][] board = new char[n][n];\n    for (char[] row : board) Arrays.fill(row, '.');\n    backtrack(res, board, 0, new boolean[n], new boolean[2 * n], new boolean[2 * n]);\n    return res;\n}\nprivate void backtrack(List<List<String>> res, char[][] board, int row, boolean[] cols, boolean[] d1, boolean[] d2) {\n    int n = board.length;\n    if (row == n) {\n        List<String> list = new ArrayList<>();\n        for (char[] r : board) list.add(new String(r));\n        res.add(list);\n        return;\n    }\n    for (int col = 0; col < n; col++) {\n        int id1 = row - col + n, id2 = row + col;\n        if (cols[col] || d1[id1] || d2[id2]) continue;\n        board[row][col] = 'Q';\n        cols[col] = d1[id1] = d2[id2] = true;\n        backtrack(res, board, row + 1, cols, d1, d2);\n        board[row][col] = '.';\n        cols[col] = d1[id1] = d2[id2] = false;\n    }\n}",
      "python": "def solveNQueens(n: int) -> List[List[str]]:\n    res = []\n    cols = set(); d1 = set(); d2 = set()\n    board = [['.'] * n for _ in range(n)]\n    def backtrack(r):\n        if r == n:\n            res.append([\"\".join(row) for row in board]); return\n        for c in range(n):\n            if c in cols or (r - c) in d1 or (r + c) in d2: continue\n            board[r][c] = 'Q'\n            cols.add(c); d1.add(r - c); d2.add(r + c)\n            backtrack(r + 1)\n            board[r][c] = '.'\n            cols.remove(c); d1.remove(r - c); d2.remove(r + c)\n    backtrack(0)\n    return res"
    }
  },
  {
    "id": 35,
    "title": "搜索插入位置",
    "englishTitle": "Search Insert Position",
    "difficulty": "简单",
    "category": "二分查找",
    "description": "给定一个排序数组和一个目标值，在数组中找到目标值，并返回其索引。如果目标值不存在于数组中，返回它将会被按顺序插入的位置。",
    "intuition": "【标准二分查找】维护 left=0, right=n-1。计算 mid，若 nums[mid] >= target 则 right = mid - 1，最终返回 left。",
    "timeComplexity": "O(log N)",
    "spaceComplexity": "O(1)",
    "codeTemplates": {
      "java": "public int searchInsert(int[] nums, int target) {\n    int left = 0, right = nums.length - 1;\n    while (left <= right) {\n        int mid = left + (right - left) / 2;\n        if (nums[mid] == target) return mid;\n        else if (nums[mid] < target) left = mid + 1;\n        else right = mid - 1;\n    }\n    return left;\n}",
      "python": "def searchInsert(nums: List[int], target: int) -> int:\n    left, right = 0, len(nums) - 1\n    while left <= right:\n        mid = (left + right) // 2\n        if nums[mid] == target: return mid\n        elif nums[mid] < target: left = mid + 1\n        else: right = mid - 1\n    return left"
    }
  },
  {
    "id": 74,
    "title": "搜索二维矩阵",
    "englishTitle": "Search a 2D Matrix",
    "difficulty": "中等",
    "category": "二分查找",
    "description": "给你一个满足特性的 m x n 整数矩阵：每行自左向右升序，每行的第一个整数大于前一行的最后一个整数。给你 target 判断是否存在。",
    "intuition": "【一维展平二分】将 m x n 矩阵视为长度为 m*n 的有序数组。虚拟索引 idx 对应的二维坐标为 `row = idx / n, col = idx % n`。",
    "timeComplexity": "O(log(M * N))",
    "spaceComplexity": "O(1)",
    "codeTemplates": {
      "java": "public boolean searchMatrix(int[][] matrix, int target) {\n    int m = matrix.length, n = matrix[0].length;\n    int left = 0, right = m * n - 1;\n    while (left <= right) {\n        int mid = left + (right - left) / 2;\n        int val = matrix[mid / n][mid % n];\n        if (val == target) return true;\n        else if (val < target) left = mid + 1;\n        else right = mid - 1;\n    }\n    return false;\n}",
      "python": "def searchMatrix(matrix: List[List[int]], target: int) -> bool:\n    m, n = len(matrix), len(matrix[0])\n    left, right = 0, m * n - 1\n    while left <= right:\n        mid = (left + right) // 2\n        val = matrix[mid // n][mid % n]\n        if val == target: return True\n        elif val < target: left = mid + 1\n        else: right = mid - 1\n    return False"
    }
  },
  {
    "id": 34,
    "title": "在排序数组中查找元素的第一个和最后一个位置",
    "englishTitle": "Find First and Last Position of Element in Sorted Array",
    "difficulty": "中等",
    "category": "二分查找",
    "description": "给你一个按照非递减顺序排列的整数数组 nums，和一个目标值 target。请你找出给定目标值在数组中的开始位置和结束位置。",
    "intuition": "【两次二分找左右边界】第一次二分寻找首个 >= target 的位置；第二次二分寻找首个 > target 的位置 minus 1。",
    "timeComplexity": "O(log N)",
    "spaceComplexity": "O(1)",
    "codeTemplates": {
      "java": "public int[] searchRange(int[] nums, int target) {\n    int leftIdx = binarySearch(nums, target, true);\n    int rightIdx = binarySearch(nums, target, false) - 1;\n    if (leftIdx <= rightIdx && rightIdx < nums.length && nums[leftIdx] == target && nums[rightIdx] == target) {\n        return new int[]{leftIdx, rightIdx};\n    }\n    return new int[]{-1, -1};\n}\nprivate int binarySearch(int[] nums, int target, boolean lower) {\n    int left = 0, right = nums.length - 1, ans = nums.length;\n    while (left <= right) {\n        int mid = (left + right) / 2;\n        if (nums[mid] > target || (lower && nums[mid] >= target)) {\n            right = mid - 1;\n            ans = mid;\n        } else {\n            left = mid + 1;\n        }\n    }\n    return ans;\n}",
      "python": "def searchRange(nums: List[int], target: int) -> List[int]:\n    def search_lower(target):\n        left, right = 0, len(nums) - 1\n        ans = len(nums)\n        while left <= right:\n            mid = (left + right) // 2\n            if nums[mid] >= target:\n                ans = mid; right = mid - 1\n            else: left = mid + 1\n        return ans\n    l = search_lower(target)\n    r = search_lower(target + 1) - 1\n    if l <= r and r < len(nums) and nums[l] == target: return [l, r]\n    return [-1, -1]"
    }
  },
  {
    "id": 33,
    "title": "搜索旋转排序数组",
    "englishTitle": "Search in Rotated Sorted Array",
    "difficulty": "中等",
    "category": "二分查找",
    "description": "整数数组 nums 按升序排列，但在预先未知的某个下标上进行了旋转。求 target 的下标，不存在返回 -1。",
    "intuition": "【判断哪一侧有序二分】计算 mid，由于数组被旋转，`nums[left..mid]` 和 `nums[mid..right]` 中必然有一侧严格递增。判断 target 是否落在有序一侧区间内收缩区间。",
    "timeComplexity": "O(log N)",
    "spaceComplexity": "O(1)",
    "codeTemplates": {
      "java": "public int search(int[] nums, int target) {\n    int left = 0, right = nums.length - 1;\n    while (left <= right) {\n        int mid = (left + right) / 2;\n        if (nums[mid] == target) return mid;\n        if (nums[left] <= nums[mid]) {\n            if (nums[left] <= target && target < nums[mid]) right = mid - 1;\n            else left = mid + 1;\n        } else {\n            if (nums[mid] < target && target <= nums[right]) left = mid + 1;\n            else right = mid - 1;\n        }\n    }\n    return -1;\n}",
      "python": "def search(nums: List[int], target: int) -> int:\n    left, right = 0, len(nums) - 1\n    while left <= right:\n        mid = (left + right) // 2\n        if nums[mid] == target: return mid\n        if nums[left] <= nums[mid]:\n            if nums[left] <= target < nums[mid]: right = mid - 1\n            else: left = mid + 1\n        else:\n            if nums[mid] < target <= nums[right]: left = mid + 1\n            else: right = mid - 1\n    return -1"
    }
  },
  {
    "id": 153,
    "title": "寻找旋转排序数组中的最小值",
    "englishTitle": "Find Minimum in Rotated Sorted Array",
    "difficulty": "中等",
    "category": "二分查找",
    "description": "已知一个长度为 n 的升序数组在某个点旋转。找出并返回数组中的 最小元素 。要求 O(log n)。",
    "intuition": "【与右端点 nums[right] 比较二分】若 nums[mid] < nums[right]，说明最小值在左侧(含 mid)，`right = mid`；否则说明最小值在右侧 `left = mid + 1`。",
    "timeComplexity": "O(log N)",
    "spaceComplexity": "O(1)",
    "codeTemplates": {
      "java": "public int findMin(int[] nums) {\n    int left = 0, right = nums.length - 1;\n    while (left < right) {\n        int mid = (left + right) / 2;\n        if (nums[mid] < nums[right]) right = mid;\n        else left = mid + 1;\n    }\n    return nums[left];\n}",
      "python": "def findMin(nums: List[int]) -> int:\n    left, right = 0, len(nums) - 1\n    while left < right:\n        mid = (left + right) // 2\n        if nums[mid] < nums[right]: right = mid\n        else: left = mid + 1\n    return nums[left]"
    }
  },
  {
    "id": 4,
    "title": "寻找两个正序数组的中位数",
    "englishTitle": "Median of Two Sorted Arrays",
    "difficulty": "困难",
    "category": "二分查找",
    "description": "给定两个大小分别为 m 和 n 的正序数组 nums1 和 nums2。请你找出并返回这两个正序数组的 中位数 。要求时间复杂度为 O(log (m+n))。",
    "intuition": "【二分划分分割线】对较短数组进行二分寻找分割线 i，使得左侧所有元素 <= 右侧所有元素。比较 `max(L1, L2)` 与 `min(R1, R2)`。",
    "timeComplexity": "O(log min(M, N))",
    "spaceComplexity": "O(1)",
    "codeTemplates": {
      "java": "public double findMedianSortedArrays(int[] nums1, int[] nums2) {\n    if (nums1.length > nums2.length) return findMedianSortedArrays(nums2, nums1);\n    int m = nums1.length, n = nums2.length;\n    int left = 0, right = m;\n    while (left <= right) {\n        int i = (left + right) / 2;\n        int j = (m + n + 1) / 2 - i;\n        int maxL1 = (i == 0) ? Integer.MIN_VALUE : nums1[i - 1];\n        int minR1 = (i == m) ? Integer.MAX_VALUE : nums1[i];\n        int maxL2 = (j == 0) ? Integer.MIN_VALUE : nums2[j - 1];\n        int minR2 = (j == n) ? Integer.MAX_VALUE : nums2[j];\n        if (maxL1 <= minR2 && maxL2 <= minR1) {\n            if ((m + n) % 2 == 1) return Math.max(maxL1, maxL2);\n            else return (Math.max(maxL1, maxL2) + Math.min(minR1, minR2)) / 2.0;\n        } else if (maxL1 > minR2) right = i - 1;\n        else left = i + 1;\n    }\n    return 0.0;\n}",
      "python": "def findMedianSortedArrays(nums1: List[int], nums2: List[int]) -> float:\n    if len(nums1) > len(nums2): nums1, nums2 = nums2, nums1\n    m, n = len(nums1), len(nums2)\n    left, right = 0, m\n    while left <= right:\n        i = (left + right) // 2\n        j = (m + n + 1) // 2 - i\n        maxL1 = float('-inf') if i == 0 else nums1[i - 1]\n        minR1 = float('inf') if i == m else nums1[i]\n        maxL2 = float('-inf') if j == 0 else nums2[j - 1]\n        minR2 = float('inf') if j == n else nums2[j]\n        if maxL1 <= minR2 and maxL2 <= minR1:\n            if (m + n) % 2 == 1: return max(maxL1, maxL2)\n            else: return (max(maxL1, maxL2) + min(minR1, minR2)) / 2.0\n        elif maxL1 > minR2: right = i - 1\n        else: left = i + 1\n    return 0.0"
    }
  },
  {
    "id": 20,
    "title": "有效的括号",
    "englishTitle": "Valid Parentheses",
    "difficulty": "简单",
    "category": "栈与单调栈",
    "description": "给定一个只包括 '(',')','{','}','[' ']' 的字符串 s ，判断字符串是否有效。",
    "intuition": "【辅助栈 Stack】遇到左括号压入对应的右括号；遇到右括号时，栈空或不匹配则返回 false。",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "codeTemplates": {
      "java": "public boolean isValid(String s) {\n    Stack<Character> stack = new Stack<>();\n    for (char c : s.toCharArray()) {\n        if (c == '(') stack.push(')');\n        else if (c == '{') stack.push('}');\n        else if (c == '[') stack.push(']');\n        else if (stack.isEmpty() || stack.pop() != c) return false;\n    }\n    return stack.isEmpty();\n}",
      "python": "def isValid(s: str) -> bool:\n    stack = []\n    mp = {')': '(', '}': '{', ']': '['}\n    for char in s:\n        if char in mp:\n            top = stack.pop() if stack else '#'\n            if mp[char] != top: return False\n        else: stack.append(char)\n    return not stack"
    }
  },
  {
    "id": 155,
    "title": "最小栈",
    "englishTitle": "Min Stack",
    "difficulty": "中等",
    "category": "栈与单调栈",
    "description": "设计一个支持 push ，pop ，top 操作，并能在常数时间内检索到最小元素的栈。",
    "intuition": "【双栈 / 辅助单调递减 minStack】维护主数据栈 dataStack 和辅助 minStack。入栈时同步压入当前为止的最小值 `Math.min(val, minStack.peek())`。",
    "timeComplexity": "O(1)",
    "spaceComplexity": "O(N)",
    "codeTemplates": {
      "java": "class MinStack {\n    private Stack<Integer> stack = new Stack<>();\n    private Stack<Integer> minStack = new Stack<>();\n    public MinStack() {}\n    public void push(int val) {\n        stack.push(val);\n        if (minStack.isEmpty() || val <= minStack.peek()) minStack.push(val);\n        else minStack.push(minStack.peek());\n    }\n    public void pop() { stack.pop(); minStack.pop(); }\n    public int top() { return stack.peek(); }\n    public int getMin() { return minStack.peek(); }\n}",
      "python": "class MinStack:\n    def __init__(self):\n        self.stack = []\n        self.min_stack = []\n    def push(self, val: int) -> None:\n        self.stack.append(val)\n        if not self.min_stack or val <= self.min_stack[-1]: self.min_stack.append(val)\n        else: self.min_stack.append(self.min_stack[-1])\n    def pop(self) -> None:\n        self.stack.pop()\n        self.min_stack.pop()\n    def top(self) -> int: return self.stack[-1]\n    def getMin(self) -> int: return self.min_stack[-1]"
    }
  },
  {
    "id": 394,
    "title": "字符串解码",
    "englishTitle": "Decode String",
    "difficulty": "中等",
    "category": "栈与单调栈",
    "description": "给定一个经过编码的字符串，返回它解码后的字符串。编码规则为: k[encoded_string]，表示中括号内部的 encoded_string 重复 k 次。",
    "intuition": "【辅助栈保存 (repeatCount, prevString)】遇到 '[' 时将当前数字 count 与已有字符串 resStr 压栈并清空；遇到 ']' 时弹出上次字符串与重复次数拼接。",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "codeTemplates": {
      "java": "public String decodeString(String s) {\n    Stack<Integer> countStack = new Stack<>();\n    Stack<StringBuilder> stringStack = new Stack<>();\n    StringBuilder curr = new StringBuilder();\n    int k = 0;\n    for (char c : s.toCharArray()) {\n        if (Character.isDigit(c)) {\n            k = k * 10 + (c - '0');\n        } else if (c == '[') {\n            countStack.push(k);\n            stringStack.push(curr);\n            curr = new StringBuilder();\n            k = 0;\n        } else if (c == ']') {\n            StringBuilder prev = stringStack.pop();\n            int repeatTimes = countStack.pop();\n            for (int i = 0; i < repeatTimes; i++) prev.append(curr);\n            curr = prev;\n        } else {\n            curr.append(c);\n        }\n    }\n    return curr.toString();\n}",
      "python": "def decodeString(s: str) -> str:\n    count_stack = []\n    str_stack = []\n    curr = \"\"\n    k = 0\n    for c in s:\n        if c.isdigit(): k = k * 10 + int(c)\n        elif c == '[':\n            count_stack.append(k)\n            str_stack.append(curr)\n            curr = \"\"\n            k = 0\n        elif c == ']':\n            prev = str_stack.pop()\n            repeat = count_stack.pop()\n            curr = prev + curr * repeat\n        else:\n            curr += c\n    return curr"
    }
  },
  {
    "id": 739,
    "title": "每日温度",
    "englishTitle": "Daily Temperatures",
    "difficulty": "中等",
    "category": "栈与单调栈",
    "description": "给定一个整数数组 temperatures ，返回一个数组 answer ，其中 answer[i] 是指对于第 i 天，下一个更高温度出现在几天后。",
    "intuition": "【单调递减栈】栈存下标。遇到温度大于栈顶下标对应的温度时，说明找到了更高温度，弹出栈顶并计算天数差 `i - prevIdx`。",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "codeTemplates": {
      "java": "public int[] dailyTemperatures(int[] temperatures) {\n    int n = temperatures.length;\n    int[] ans = new int[n];\n    Stack<Integer> stack = new Stack<>();\n    for (int i = 0; i < n; i++) {\n        while (!stack.isEmpty() && temperatures[i] > temperatures[stack.peek()]) {\n            int prev = stack.pop();\n            ans[prev] = i - prev;\n        }\n        stack.push(i);\n    }\n    return ans;\n}",
      "python": "def dailyTemperatures(temperatures: List[int]) -> List[int]:\n    ans = [0] * len(temperatures)\n    stack = []\n    for i, t in enumerate(temperatures):\n        while stack and t > temperatures[stack[-1]]:\n            prev = stack.pop()\n            ans[prev] = i - prev\n        stack.append(i)\n    return ans"
    }
  },
  {
    "id": 84,
    "title": "柱状图中的最大矩形",
    "englishTitle": "Largest Rectangle in Histogram",
    "difficulty": "困难",
    "category": "栈与单调栈",
    "description": "给定 n 个非负整数，用来表示柱状图中各个柱子的高度。每个柱子彼此相邻，且宽度为 1 。求在该柱状图中，能够勾勒出的矩形的最大面积。",
    "intuition": "【单调递增栈 + 哨兵 0】维护单调递增栈。当出现较矮柱子时，确定了栈顶柱子的右边界，栈顶下方元素确定了其左边界。面积 = height * (right - left - 1)。",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "codeTemplates": {
      "java": "public int largestRectangleArea(int[] heights) {\n    int n = heights.length;\n    int[] h = new int[n + 2];\n    System.arraycopy(heights, 0, h, 1, n);\n    Stack<Integer> stack = new Stack<>();\n    int maxArea = 0;\n    for (int i = 0; i < h.length; i++) {\n        while (!stack.isEmpty() && h[i] < h[stack.peek()]) {\n            int height = h[stack.pop()];\n            int width = i - stack.peek() - 1;\n            maxArea = Math.max(maxArea, height * width);\n        }\n        stack.push(i);\n    }\n    return maxArea;\n}",
      "python": "def largestRectangleArea(heights: List[int]) -> int:\n    h = [0] + heights + [0]\n    stack = []\n    max_area = 0\n    for i, val in enumerate(h):\n        while stack and val < h[stack[-1]]:\n            height = h[stack.pop()]\n            width = i - stack[-1] - 1\n            max_area = max(max_area, height * width)\n        stack.append(i)\n    return max_area"
    }
  },
  {
    "id": 215,
    "title": "数组中的第 K 个最大元素",
    "englishTitle": "Kth Largest Element in an Array",
    "difficulty": "中等",
    "category": "堆与优先队列",
    "description": "给定整数数组 nums 和整数 k，请返回数组中第 k 个最大的元素。请注意，你需要找的是数组排序后的第 k 个最大的元素。",
    "intuition": "【大小为 K 的小顶堆 / Quick Select 快速选择】维护大小为 k 的小顶堆，遍历数组保证堆中留存最大的 k 个数，堆顶即为第 k 大元素。",
    "timeComplexity": "O(N log K)",
    "spaceComplexity": "O(K)",
    "codeTemplates": {
      "java": "public int findKthLargest(int[] nums, int k) {\n    PriorityQueue<Integer> pq = new PriorityQueue<>();\n    for (int num : nums) {\n        pq.offer(num);\n        if (pq.size() > k) pq.poll();\n    }\n    return pq.peek();\n}",
      "python": "def findKthLargest(nums: List[int], k: int) -> int:\n    import heapq\n    return heapq.nlargest(k, nums)[-1]"
    }
  },
  {
    "id": 347,
    "title": "前 K 个高频元素",
    "englishTitle": "Top K Frequent Elements",
    "difficulty": "中等",
    "category": "堆与优先队列",
    "description": "给你一个整数数组 nums 和一个整数 k ，请你返回其中出现频率前 k 高的元素。",
    "intuition": "【Map 频次统计 + 桶排序 / 小顶堆】统计词频 Map 后，利用桶排序（以频次作为数组下标）可以在 O(N) 时间内选出前 K 个元素。",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "codeTemplates": {
      "java": "public int[] topKFrequent(int[] nums, int k) {\n    Map<Integer, Integer> map = new HashMap<>();\n    for (int num : nums) map.put(num, map.getOrDefault(num, 0) + 1);\n    List<Integer>[] buckets = new List[nums.length + 1];\n    for (int key : map.keySet()) {\n        int freq = map.get(key);\n        if (buckets[freq] == null) buckets[freq] = new ArrayList<>();\n        buckets[freq].add(key);\n    }\n    int[] res = new int[k];\n    int idx = 0;\n    for (int i = buckets.length - 1; i >= 0 && idx < k; i--) {\n        if (buckets[i] != null) {\n            for (int num : buckets[i]) {\n                res[idx++] = num;\n                if (idx == k) break;\n            }\n        }\n    }\n    return res;\n}",
      "python": "def topKFrequent(nums: List[int], k: int) -> List[int]:\n    count = collections.Counter(nums)\n    return [item[0] for item in count.most_common(k)]"
    }
  },
  {
    "id": 295,
    "title": "数据流的中位数",
    "englishTitle": "Find Median from Data Stream",
    "difficulty": "困难",
    "category": "堆与优先队列",
    "description": "中位数是有序列表中间的数。如果列表长度是偶数，中位数则是中间两个数的平均值。设计数据结构支持 addNum 与 findMedian。",
    "intuition": "【对顶堆 (大顶堆 maxHeap + 小顶堆 minHeap)】大顶堆存较小的一半元素，小顶堆存较大的一半元素，保持大顶堆数量比小顶堆最多多 1。",
    "timeComplexity": "O(log N)",
    "spaceComplexity": "O(N)",
    "codeTemplates": {
      "java": "class MedianFinder {\n    private PriorityQueue<Integer> maxHeap = new PriorityQueue<>(Collections.reverseOrder());\n    private PriorityQueue<Integer> minHeap = new PriorityQueue<>();\n    public MedianFinder() {}\n    public void addNum(int num) {\n        maxHeap.offer(num);\n        minHeap.offer(maxHeap.poll());\n        if (maxHeap.size() < minHeap.size()) {\n            maxHeap.offer(minHeap.poll());\n        }\n    }\n    public double findMedian() {\n        return maxHeap.size() > minHeap.size() ? maxHeap.peek() : (maxHeap.peek() + minHeap.peek()) / 2.0;\n    }\n}",
      "python": "class MedianFinder:\n    def __init__(self):\n        self.small = [] # max_heap (negated)\n        self.large = [] # min_heap\n    def addNum(self, num: int) -> None:\n        heapq.heappush(self.small, -num)\n        heapq.heappush(self.large, -heapq.heappop(self.small))\n        if len(self.small) < len(self.large):\n            heapq.heappush(self.small, -heapq.heappop(self.large))\n    def findMedian(self) -> float:\n        if len(self.small) > len(self.large): return -self.small[0]\n        return (-self.small[0] + self.large[0]) / 2.0"
    }
  },
  {
    "id": 121,
    "title": "买卖股票的最佳时机",
    "englishTitle": "Best Time to Buy and Sell Stock",
    "difficulty": "简单",
    "category": "贪心算法",
    "description": "给定一个数组 prices ，它的第 i 个元素 prices[i] 表示一株给定股票第 i 天的价格。选择某一天买入并选择未来某一天卖出，求最大利润。",
    "intuition": "【一次遍历 + 动态维护最低历史价格】维护 minPrice。遍历计算当前价格卖出的利润 `prices[i] - minPrice`，更新 maxProfit。",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(1)",
    "codeTemplates": {
      "java": "public int maxProfit(int[] prices) {\n    int minPrice = Integer.MAX_VALUE;\n    int maxProfit = 0;\n    for (int price : prices) {\n        if (price < minPrice) minPrice = price;\n        else if (price - minPrice > maxProfit) maxProfit = price - minPrice;\n    }\n    return maxProfit;\n}",
      "python": "def maxProfit(prices: List[int]) -> int:\n    min_price = float('inf')\n    max_profit = 0\n    for p in prices:\n        min_price = min(min_price, p)\n        max_profit = max(max_profit, p - min_price)\n    return max_profit"
    }
  },
  {
    "id": 55,
    "title": "跳跃游戏",
    "englishTitle": "Jump Game",
    "difficulty": "中等",
    "category": "贪心算法",
    "description": "给你一个非负整数数组 nums ，你最初位于数组的 第一个下标 。数组中的每个元素代表你在该位置可以跳跃的最大长度。判断你是否能够到达最后一个下标。",
    "intuition": "【贪心最远可达位置 maxReach】遍历数组，实时更新 `maxReach = Math.max(maxReach, i + nums[i])`。若 i > maxReach，说明卡住无法前进。",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(1)",
    "codeTemplates": {
      "java": "public boolean canJump(int[] nums) {\n    int maxReach = 0;\n    for (int i = 0; i < nums.length; i++) {\n        if (i > maxReach) return false;\n        maxReach = Math.max(maxReach, i + nums[i]);\n    }\n    return true;\n}",
      "python": "def canJump(nums: List[int]) -> bool:\n    max_reach = 0\n    for i, num in enumerate(nums):\n        if i > max_reach: return False\n        max_reach = max(max_reach, i + num)\n    return True"
    }
  },
  {
    "id": 45,
    "title": "跳跃游戏 II",
    "englishTitle": "Jump Game II",
    "difficulty": "中等",
    "category": "贪心算法",
    "description": "给你一个长度为 n 的 0 索引整数数组 nums。返回到达 nums[n - 1] 的最小跳跃次数。",
    "intuition": "【贪心边界起跳】维护当前跳跃能到达的最远边界 end 和下一次的最远位置 maxPos。当遍历到达 end 时，必须跳一步 `steps++` 并更新 `end = maxPos`。",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(1)",
    "codeTemplates": {
      "java": "public int jump(int[] nums) {\n    int steps = 0, end = 0, maxPos = 0;\n    for (int i = 0; i < nums.length - 1; i++) {\n        maxPos = Math.max(maxPos, i + nums[i]);\n        if (i == end) {\n            end = maxPos;\n            steps++;\n        }\n    }\n    return steps;\n}",
      "python": "def jump(nums: List[int]) -> int:\n    steps = end = max_pos = 0\n    for i in range(len(nums) - 1):\n        max_pos = max(max_pos, i + nums[i])\n        if i == end:\n            end = max_pos\n            steps += 1\n    return steps"
    }
  },
  {
    "id": 763,
    "title": "划分字母区间",
    "englishTitle": "Partition Labels",
    "difficulty": "中等",
    "category": "贪心算法",
    "description": "给你一个字符串 s 。我们要把这个字符串划分为尽可能多的片段，同一字母最多出现在一个片段中。返回片段长度列表。",
    "intuition": "【统计字符最后出现位置 + 贪心边界扩展】预处理每个字符最后一次出现的下标 lastPos。遍历时不断扩展当前片段的结束边界 `end = max(end, lastPos[ch])`，当到达 end 时切分。",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(26)",
    "codeTemplates": {
      "java": "public List<Integer> partitionLabels(String s) {\n    int[] last = new int[26];\n    for (int i = 0; i < s.length(); i++) last[s.charAt(i) - 'a'] = i;\n    List<Integer> res = new ArrayList<>();\n    int start = 0, end = 0;\n    for (int i = 0; i < s.length(); i++) {\n        end = Math.max(end, last[s.charAt(i) - 'a']);\n        if (i == end) {\n            res.add(end - start + 1);\n            start = i + 1;\n        }\n    }\n    return res;\n}",
      "python": "def partitionLabels(s: str) -> List[int]:\n    last = {c: i for i, c in enumerate(s)}\n    start = end = 0\n    res = []\n    for i, c in enumerate(s):\n        end = max(end, last[c])\n        if i == end:\n            res.append(end - start + 1)\n            start = i + 1\n    return res"
    }
  },
  {
    "id": 70,
    "title": "爬楼梯",
    "englishTitle": "Climbing Stairs",
    "difficulty": "简单",
    "category": "动态规划",
    "description": "假设你正在爬楼梯。需要 n 阶才能到达楼顶。每次你可以爬 1 或 2 个台阶。你有多少种不同的方法可以爬到楼顶呢？",
    "intuition": "【斐波那契 DP】dp[n] = dp[n-1] + dp[n-2]。用两个变量滚动保存前两项状态即可。",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(1)",
    "codeTemplates": {
      "java": "public int climbStairs(int n) {\n    if (n <= 2) return n;\n    int a = 1, b = 2;\n    for (int i = 3; i <= n; i++) {\n        int temp = a + b; a = b; b = temp;\n    }\n    return b;\n}",
      "python": "def climbStairs(n: int) -> int:\n    if n <= 2: return n\n    a, b = 1, 2\n    for _ in range(3, n + 1): a, b = b, a + b\n    return b"
    }
  },
  {
    "id": 118,
    "title": "杨辉三角",
    "englishTitle": "Pascal's Triangle",
    "difficulty": "简单",
    "category": "动态规划",
    "description": "给定一个非负整数 numRows，生成「杨辉三角」的前 numRows 行。",
    "intuition": "【DP 递推】`row[j] = prevRow[j-1] + prevRow[j]`（首尾元素固定为 1）。",
    "timeComplexity": "O(numRows^2)",
    "spaceComplexity": "O(1)",
    "codeTemplates": {
      "java": "public List<List<Integer>> generate(int numRows) {\n    List<List<Integer>> res = new ArrayList<>();\n    for (int i = 0; i < numRows; i++) {\n        List<Integer> row = new ArrayList<>();\n        for (int j = 0; j <= i; j++) {\n            if (j == 0 || j == i) row.add(1);\n            else row.add(res.get(i - 1).get(j - 1) + res.get(i - 1).get(j));\n        }\n        res.add(row);\n    }\n    return res;\n}",
      "python": "def generate(numRows: int) -> List[List[int]]:\n    res = []\n    for i in range(numRows):\n        row = [1] * (i + 1)\n        for j in range(1, i):\n            row[j] = res[i - 1][j - 1] + res[i - 1][j]\n        res.append(row)\n    return res"
    }
  },
  {
    "id": 198,
    "title": "打家劫舍",
    "englishTitle": "House Robber",
    "difficulty": "中等",
    "category": "动态规划",
    "description": "你是一个专业的小偷，计划偷窃沿街的房屋。每间房内都藏有一定的现金。相邻的房屋装有报警系统。计算不触发报警能偷窃到的最高金额。",
    "intuition": "【滚动 DP】dp[i] 表示偷前 i 间房的最大金额。`dp[i] = max(dp[i-1], dp[i-2] + nums[i])`。",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(1)",
    "codeTemplates": {
      "java": "public int rob(int[] nums) {\n    int prev1 = 0, prev2 = 0;\n    for (int num : nums) {\n        int temp = Math.max(prev1, prev2 + num);\n        prev2 = prev1;\n        prev1 = temp;\n    }\n    return prev1;\n}",
      "python": "def rob(nums: List[int]) -> int:\n    prev1 = prev2 = 0\n    for num in nums:\n        temp = max(prev1, prev2 + num)\n        prev2, prev1 = prev1, temp\n    return prev1"
    }
  },
  {
    "id": 279,
    "title": "完全平方数",
    "englishTitle": "Perfect Squares",
    "difficulty": "中等",
    "category": "动态规划",
    "description": "给你一个整数 n ，返回 和为 n 的完全平方数的最少数量 。",
    "intuition": "【完全背包 DP】`dp[i]` 表示凑出数值 i 所需的最少平方数。`dp[i] = min(dp[i], dp[i - j*j] + 1)`。",
    "timeComplexity": "O(N * sqrt(N))",
    "spaceComplexity": "O(N)",
    "codeTemplates": {
      "java": "public int numSquares(int n) {\n    int[] dp = new int[n + 1];\n    Arrays.fill(dp, Integer.MAX_VALUE);\n    dp[0] = 0;\n    for (int i = 1; i <= n; i++) {\n        for (int j = 1; j * j <= i; j++) {\n            dp[i] = Math.min(dp[i], dp[i - j * j] + 1);\n        }\n    }\n    return dp[n];\n}",
      "python": "def numSquares(n: int) -> int:\n    dp = [float('inf')] * (n + 1)\n    dp[0] = 0\n    for i in range(1, n + 1):\n        j = 1\n        while j * j <= i:\n            dp[i] = min(dp[i], dp[i - j * j] + 1)\n            j += 1\n    return dp[n]"
    }
  },
  {
    "id": 322,
    "title": "零钱兑换",
    "englishTitle": "Coin Change",
    "difficulty": "中等",
    "category": "动态规划",
    "description": "给你一个整数数组 coins 和一个整数 amount。计算并返回可以凑成总金额所需的 最少硬币个数 。",
    "intuition": "【完全背包 DP】`dp[i] = min(dp[i], dp[i - coin] + 1)`。初始化为 amount + 1。",
    "timeComplexity": "O(Amount * N)",
    "spaceComplexity": "O(Amount)",
    "codeTemplates": {
      "java": "public int coinChange(int[] coins, int amount) {\n    int max = amount + 1;\n    int[] dp = new int[amount + 1];\n    Arrays.fill(dp, max);\n    dp[0] = 0;\n    for (int i = 1; i <= amount; i++) {\n        for (int coin : coins) {\n            if (i >= coin) dp[i] = Math.min(dp[i], dp[i - coin] + 1);\n        }\n    }\n    return dp[amount] > amount ? -1 : dp[amount];\n}",
      "python": "def coinChange(coins: List[int], amount: int) -> int:\n    dp = [float('inf')] * (amount + 1)\n    dp[0] = 0\n    for coin in coins:\n        for i in range(coin, amount + 1):\n            dp[i] = min(dp[i], dp[i - coin] + 1)\n    return dp[amount] if dp[amount] != float('inf') else -1"
    }
  },
  {
    "id": 139,
    "title": "单词拆分",
    "englishTitle": "Word Break",
    "difficulty": "中等",
    "category": "动态规划",
    "description": "给你一个字符串 s 和一个字符串字典 wordDict 。判断 s 是否可以由 wordDict 中出现的单词拼接而成。",
    "intuition": "【前缀字符串 DP】`dp[i]` 表示前 i 个字符 s[0..i-1] 是否可以被字典拆分。`dp[i] = dp[j] && wordDict.contains(s[j..i-1])`。",
    "timeComplexity": "O(N^2)",
    "spaceComplexity": "O(N)",
    "codeTemplates": {
      "java": "public boolean wordBreak(String s, List<String> wordDict) {\n    Set<String> wordSet = new HashSet<>(wordDict);\n    boolean[] dp = new boolean[s.length() + 1];\n    dp[0] = true;\n    for (int i = 1; i <= s.length(); i++) {\n        for (int j = 0; j < i; j++) {\n            if (dp[j] && wordSet.contains(s.substring(j, i))) {\n                dp[i] = true;\n                break;\n            }\n        }\n    }\n    return dp[s.length()];\n}",
      "python": "def wordBreak(s: str, wordDict: List[str]) -> bool:\n    word_set = set(wordDict)\n    dp = [False] * (len(s) + 1)\n    dp[0] = True\n    for i in range(1, len(s) + 1):\n        for j in range(i):\n            if dp[j] and s[j:i] in word_set:\n                dp[i] = True\n                break\n    return dp[len(s)]"
    }
  },
  {
    "id": 300,
    "title": "最长递增子序列",
    "englishTitle": "Longest Increasing Subsequence",
    "difficulty": "中等",
    "category": "动态规划",
    "description": "给你一个整数数组 nums ，找到其中最长严格递增子序列的长度。",
    "intuition": "【贪心+二分 (耐心排序 tails 数组)】tails[i] 维护长度为 i+1 的递增子序列末尾最小元素。用二分查找寻找首个 >= num 覆盖。",
    "timeComplexity": "O(N log N)",
    "spaceComplexity": "O(N)",
    "codeTemplates": {
      "java": "public int lengthOfLIS(int[] nums) {\n    int[] tails = new int[nums.length];\n    int res = 0;\n    for (int num : nums) {\n        int i = 0, j = res;\n        while (i < j) {\n            int m = (i + j) / 2;\n            if (tails[m] < num) i = m + 1;\n            else j = m;\n        }\n        tails[i] = num;\n        if (j == res) res++;\n    }\n    return res;\n}",
      "python": "def lengthOfLIS(nums: List[int]) -> int:\n    import bisect\n    tails = []\n    for num in nums:\n        idx = bisect.bisect_left(tails, num)\n        if idx == len(tails): tails.append(num)\n        else: tails[idx] = num\n    return len(tails)"
    }
  },
  {
    "id": 152,
    "title": "乘积最大子数组",
    "englishTitle": "Maximum Product Subarray",
    "difficulty": "中等",
    "category": "动态规划",
    "description": "给你一个整数数组 nums ，请你找出数组中乘积最大的连续子数组（该子数组中至少包含一个数字），并返回该子数组所对应的乘积。",
    "intuition": "【双变量维护 maxDP 与 minDP】负负得正！遍历时同时维护当前位置结尾的最大乘积与最小乘积。若遇负数翻转 `maxVal <-> minVal`。",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(1)",
    "codeTemplates": {
      "java": "public int maxProduct(int[] nums) {\n    int max = nums[0], min = nums[0], res = nums[0];\n    for (int i = 1; i < nums.length; i++) {\n        if (nums[i] < 0) {\n            int temp = max; max = min; min = temp;\n        }\n        max = Math.max(nums[i], max * nums[i]);\n        min = Math.min(nums[i], min * nums[i]);\n        res = Math.max(res, max);\n    }\n    return res;\n}",
      "python": "def maxProduct(nums: List[int]) -> int:\n    max_p = min_p = res = nums[0]\n    for num in nums[1:]:\n        if num < 0: max_p, min_p = min_p, max_p\n        max_p = max(num, max_p * num)\n        min_p = min(num, min_p * num)\n        res = max(res, max_p)\n    return res"
    }
  },
  {
    "id": 416,
    "title": "分割等和子集",
    "englishTitle": "Partition Equal Subset Sum",
    "difficulty": "中等",
    "category": "动态规划",
    "description": "给你一个只包含正整数的非空数组 nums 。请你判断是否可以将这个数组分割成两个子集，使得两个子集的元素和相等。",
    "intuition": "【0-1 背包 DP】总和 sum 为奇数直接返回 false。目标找到子集和等于 target = sum / 2。布尔数组 `dp[j] = dp[j] || dp[j - num]`。",
    "timeComplexity": "O(N * Target)",
    "spaceComplexity": "O(Target)",
    "codeTemplates": {
      "java": "public boolean canPartition(int[] nums) {\n    int sum = 0;\n    for (int num : nums) sum += num;\n    if (sum % 2 != 0) return false;\n    int target = sum / 2;\n    boolean[] dp = new boolean[target + 1];\n    dp[0] = true;\n    for (int num : nums) {\n        for (int j = target; j >= num; j--) {\n            dp[j] = dp[j] || dp[j - num];\n        }\n    }\n    return dp[target];\n}",
      "python": "def canPartition(nums: List[int]) -> bool:\n    total = sum(nums)\n    if total % 2 != 0: return False\n    target = total // 2\n    dp = [True] + [False] * target\n    for num in nums:\n        for j in range(target, num - 1, -1):\n            dp[j] = dp[j] or dp[j - num]\n    return dp[target]"
    }
  },
  {
    "id": 32,
    "title": "最长有效括号",
    "englishTitle": "Longest Valid Parentheses",
    "difficulty": "困难",
    "category": "动态规划",
    "description": "给你一个只包含 '(' 和 ')' 的字符串，找出最长有效（格式正确且连续）括号子串的长度。",
    "intuition": "【栈存未匹配边界下标 或 1D DP】栈初始放入 -1 作为边界。遇 '(' 压栈下标；遇 ')' 弹出栈顶。若栈空则将当前下标压栈作为新的左边界，否则计算 `i - stack.peek()`。",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "codeTemplates": {
      "java": "public int longestValidParentheses(String s) {\n    Stack<Integer> stack = new Stack<>();\n    stack.push(-1);\n    int maxLen = 0;\n    for (int i = 0; i < s.length(); i++) {\n        if (s.charAt(i) == '(') {\n            stack.push(i);\n        } else {\n            stack.pop();\n            if (stack.isEmpty()) stack.push(i);\n            else maxLen = Math.max(maxLen, i - stack.peek());\n        }\n    }\n    return maxLen;\n}",
      "python": "def longestValidParentheses(s: str) -> int:\n    stack = [-1]\n    max_len = 0\n    for i, c in enumerate(s):\n        if c == '(':\n            stack.append(i)\n        else:\n            stack.pop()\n            if not stack: stack.append(i)\n            else: max_len = max(max_len, i - stack[-1])\n    return max_len"
    }
  },
  {
    "id": 62,
    "title": "不同路径",
    "englishTitle": "Unique Paths",
    "difficulty": "中等",
    "category": "动态规划",
    "description": "一个机器人位于一个 m x n 网格的左上角。机器人每次只能向下或向右移动一步。机器人试图达到网格的右下角。问共有多少条不同的路径？",
    "intuition": "【2D 矩阵 DP / 组合数 C(m+n-2, m-1)】`dp[i][j] = dp[i-1][j] + dp[i][j-1]`。可用一维数组优化空间。",
    "timeComplexity": "O(M * N)",
    "spaceComplexity": "O(N)",
    "codeTemplates": {
      "java": "public int uniquePaths(int m, int n) {\n    int[] dp = new int[n];\n    Arrays.fill(dp, 1);\n    for (int i = 1; i < m; i++) {\n        for (int j = 1; j < n; j++) {\n            dp[j] += dp[j - 1];\n        }\n    }\n    return dp[n - 1];\n}",
      "python": "def uniquePaths(m: int, n: int) -> int:\n    dp = [1] * n\n    for i in range(1, m):\n        for j in range(1, n):\n            dp[j] += dp[j - 1]\n    return dp[-1]"
    }
  },
  {
    "id": 64,
    "title": "最小路径和",
    "englishTitle": "Minimum Path Sum",
    "difficulty": "中等",
    "category": "动态规划",
    "description": "给定一个包含非负整数的 m x n 网格 grid ，请找出一条从左上角到右下角的路径，使得路径上的数字总和为最小。",
    "intuition": "【网格 DP】`grid[i][j] += Math.min(grid[i-1][j], grid[i][j-1])`。处理首行与首列累加边界即可。",
    "timeComplexity": "O(M * N)",
    "spaceComplexity": "O(1)",
    "codeTemplates": {
      "java": "public int minPathSum(int[][] grid) {\n    int m = grid.length, n = grid[0].length;\n    for (int i = 0; i < m; i++) {\n        for (int j = 0; j < n; j++) {\n            if (i == 0 && j == 0) continue;\n            else if (i == 0) grid[i][j] += grid[i][j - 1];\n            else if (j == 0) grid[i][j] += grid[i - 1][j];\n            else grid[i][j] += Math.min(grid[i - 1][j], grid[i][j - 1]);\n        }\n    }\n    return grid[m - 1][n - 1];\n}",
      "python": "def minPathSum(grid: List[List[int]]) -> int:\n    m, n = len(grid), len(grid[0])\n    for i in range(m):\n        for j in range(n):\n            if i == 0 and j == 0: continue\n            elif i == 0: grid[i][j] += grid[i][j - 1]\n            elif j == 0: grid[i][j] += grid[i - 1][j]\n            else: grid[i][j] += min(grid[i - 1][j], grid[i][j - 1])\n    return grid[-1][-1]"
    }
  },
  {
    "id": 136,
    "title": "只出现一次的数字",
    "englishTitle": "Single Number",
    "difficulty": "简单",
    "category": "技巧与位运算",
    "description": "给你一个 非空 整数数组 nums ，除了某个元素只出现一次以外，其余每个元素均出现两次。找出那个只出现了一次的元素。要求不使用额外空间。",
    "intuition": "【异或 XOR 性质】a ^ a = 0，a ^ 0 = a。满足交换律与结合律。对数组中所有数字依次进行异或，成对的数字抵消为 0，剩下的即为目标数字。",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(1)",
    "codeTemplates": {
      "java": "public int singleNumber(int[] nums) {\n    int ans = 0;\n    for (int num : nums) ans ^= num;\n    return ans;\n}",
      "python": "def singleNumber(nums: List[int]) -> int:\n    ans = 0\n    for num in nums: ans ^= num\n    return ans"
    }
  },
  {
    "id": 169,
    "title": "多数元素",
    "englishTitle": "Majority Element",
    "difficulty": "简单",
    "category": "技巧与位运算",
    "description": "给定一个大小为 n 的数组 nums ，返回其中的多数元素。多数元素是指在数组中出现次数 大于 ⌊ n/2 ⌋ 的元素。",
    "intuition": "【Boyer-Moore 摩尔投票法】维护 candidate 与 count。遇到同候选人 `count++`，不同 `count--`；当 `count == 0` 时更换候选人。",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(1)",
    "codeTemplates": {
      "java": "public int majorityElement(int[] nums) {\n    int candidate = 0, count = 0;\n    for (int num : nums) {\n        if (count == 0) candidate = num;\n        count += (num == candidate) ? 1 : -1;\n    }\n    return candidate;\n}",
      "python": "def majorityElement(nums: List[int]) -> int:\n    candidate = count = 0\n    for num in nums:\n        if count == 0: candidate = num\n        count += 1 if num == candidate else -1\n    return candidate"
    }
  },
  {
    "id": 75,
    "title": "颜色分类",
    "englishTitle": "Sort Colors",
    "difficulty": "中等",
    "category": "技巧与位运算",
    "description": "给定一个包含红色、白色和蓝色，共 n 个元素的数组 nums ，原地对它们进行排序，使得相同颜色的元素相邻，按红、白、蓝顺序 (0, 1, 2)。",
    "intuition": "【三分三指针 (荷航国旗问题 Dutch National Flag)】维护 p0(0区边界), p2(2区边界) 和 curr。curr 遇 0 与 p0 交换并 p0++, curr++；遇 2 与 p2 交换并 p2--。",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(1)",
    "codeTemplates": {
      "java": "public void sortColors(int[] nums) {\n    int p0 = 0, curr = 0, p2 = nums.length - 1;\n    while (curr <= p2) {\n        if (nums[curr] == 0) {\n            int tmp = nums[p0]; nums[p0++] = nums[curr]; nums[curr++] = tmp;\n        } else if (nums[curr] == 2) {\n            int tmp = nums[curr]; nums[curr] = nums[p2]; nums[p2--] = tmp;\n        } else curr++;\n    }\n}",
      "python": "def sortColors(nums: List[int]) -> None:\n    p0, curr, p2 = 0, 0, len(nums) - 1\n    while curr <= p2:\n        if nums[curr] == 0:\n            nums[p0], nums[curr] = nums[curr], nums[p0]\n            p0 += 1; curr += 1\n        elif nums[curr] == 2:\n            nums[curr], nums[p2] = nums[p2], nums[curr]\n            p2 -= 1\n        else: curr += 1"
    }
  },
  {
    "id": 31,
    "title": "下一个排列",
    "englishTitle": "Next Permutation",
    "difficulty": "中等",
    "category": "技巧与位运算",
    "description": "整数数组的 下一个排列 是指其整数按字典序排列的下一个更大排列。请原地修改数组。",
    "intuition": "【从右查找升序对 + 交换反转】1. 从右向左寻找首个 nums[i] < nums[i+1]；2. 从右向左寻找首个 nums[j] > nums[i] 交换；3. 反转 i+1 到末尾的部分。",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(1)",
    "codeTemplates": {
      "java": "public void nextPermutation(int[] nums) {\n    int i = nums.length - 2;\n    while (i >= 0 && nums[i] >= nums[i + 1]) i--;\n    if (i >= 0) {\n        int j = nums.length - 1;\n        while (j >= 0 && nums[j] <= nums[i]) j--;\n        swap(nums, i, j);\n    }\n    reverse(nums, i + 1, nums.length - 1);\n}\nprivate void swap(int[] nums, int i, int j) {\n    int t = nums[i]; nums[i] = nums[j]; nums[j] = t;\n}\nprivate void reverse(int[] nums, int l, int r) {\n    while (l < r) swap(nums, l++, r--);\n}",
      "python": "def nextPermutation(nums: List[int]) -> None:\n    i = len(nums) - 2\n    while i >= 0 and nums[i] >= nums[i + 1]: i -= 1\n    if i >= 0:\n        j = len(nums) - 1\n        while j >= 0 and nums[j] <= nums[i]: j -= 1\n        nums[i], nums[j] = nums[j], nums[i]\n    nums[i + 1:] = reversed(nums[i + 1:])"
    }
  },
  {
    "id": 287,
    "title": "寻找重复数",
    "englishTitle": "Find the Duplicate Number",
    "difficulty": "中等",
    "category": "技巧与位运算",
    "description": "给定一个包含 n + 1 个整数的数组 nums ，其数字都在 [1, n] 范围内（包括 1 和 n），可知至少存在一个重复的整数。找到这个重复的数。要求不能修改原数组。",
    "intuition": "【Floyd 判圈算法 (把数组下标看作链表 next)】定义链表映射 `next = nums[i]`。因为有重复数字，此链表必有环。用快慢指针求入环节点即可找到重复数。",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(1)",
    "codeTemplates": {
      "java": "public int findDuplicate(int[] nums) {\n    int slow = nums[0], fast = nums[0];\n    do {\n        slow = nums[slow];\n        fast = nums[nums[fast]];\n    } while (slow != fast);\n    int ptr1 = nums[0], ptr2 = slow;\n    while (ptr1 != ptr2) {\n        ptr1 = nums[ptr1];\n        ptr2 = nums[ptr2];\n    }\n    return ptr1;\n}",
      "python": "def findDuplicate(nums: List[int]) -> int:\n    slow = fast = nums[0]\n    while True:\n        slow = nums[slow]\n        fast = nums[nums[fast]]\n        if slow == fast: break\n    p1, p2 = nums[0], slow\n    while p1 != p2:\n        p1 = nums[p1]\n        p2 = nums[p2]\n    return p1"
    }
  },
  {
    "id": 1143,
    "title": "最长公共子序列",
    "englishTitle": "Longest Common Subsequence",
    "difficulty": "中等",
    "category": "技巧与位运算",
    "description": "给定两个字符串 text1 和 text2，返回这两个字符串的最长 公共子序列 的长度。如果不存在 公共子序列 ，返回 0 。",
    "intuition": "【二维 DP】`dp[i][j]` 表示 text1[0..i-1] 和 text2[0..j-1] 的 LCS 长度。若 `c1 == c2`，`dp[i][j] = dp[i-1][j-1] + 1`；否则 `max(dp[i-1][j], dp[i][j-1])`。",
    "timeComplexity": "O(M * N)",
    "spaceComplexity": "O(M * N)",
    "codeTemplates": {
      "java": "public int longestCommonSubsequence(String text1, String text2) {\n    int m = text1.length(), n = text2.length();\n    int[][] dp = new int[m + 1][n + 1];\n    for (int i = 1; i <= m; i++) {\n        for (int j = 1; j <= n; j++) {\n            if (text1.charAt(i - 1) == text2.charAt(j - 1)) {\n                dp[i][j] = dp[i - 1][j - 1] + 1;\n            } else {\n                dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);\n            }\n        }\n    }\n    return dp[m][n];\n}",
      "python": "def longestCommonSubsequence(text1: str, text2: str) -> int:\n    m, n = len(text1), len(text2)\n    dp = [[0] * (n + 1) for _ in range(m + 1)]\n    for i in range(1, m + 1):\n        for j in range(1, n + 1):\n            if text1[i - 1] == text2[j - 1]:\n                dp[i][j] = dp[i - 1][j - 1] + 1\n            else:\n                dp[i][j] = max(dp[i - 1][j], dp[i][j - 1])\n    return dp[m][n]"
    }
  },
  {
    "id": 72,
    "title": "编辑距离",
    "englishTitle": "Edit Distance",
    "difficulty": "困难",
    "category": "技巧与位运算",
    "description": "给你两个单词 word1 和 word2，请你计算出将 word1 转换成 word2 所使用的最少操作数。你可以对一个单词进行插入、删除、替换操作。",
    "intuition": "【二维 DP】`dp[i][j]` 表示 word1[0..i-1] 转换为 word2[0..j-1] 的最少步数。若字符匹配 `dp[i][j] = dp[i-1][j-1]`，否则取 `min(插入, 删除, 替换) + 1`。",
    "timeComplexity": "O(M * N)",
    "spaceComplexity": "O(M * N)",
    "codeTemplates": {
      "java": "public int minDistance(String word1, String word2) {\n    int m = word1.length(), n = word2.length();\n    int[][] dp = new int[m + 1][n + 1];\n    for (int i = 0; i <= m; i++) dp[i][0] = i;\n    for (int j = 0; j <= n; j++) dp[0][j] = j;\n    for (int i = 1; i <= m; i++) {\n        for (int j = 1; j <= n; j++) {\n            if (word1.charAt(i - 1) == word2.charAt(j - 1)) {\n                dp[i][j] = dp[i - 1][j - 1];\n            } else {\n                dp[i][j] = Math.min(dp[i - 1][j - 1], Math.min(dp[i - 1][j], dp[i][j - 1])) + 1;\n            }\n        }\n    }\n    return dp[m][n];\n}",
      "python": "def minDistance(word1: str, word2: str) -> int:\n    m, n = len(word1), len(word2)\n    dp = [[0] * (n + 1) for _ in range(m + 1)]\n    for i in range(m + 1): dp[i][0] = i\n    for j in range(n + 1): dp[0][j] = j\n    for i in range(1, m + 1):\n        for j in range(1, n + 1):\n            if word1[i - 1] == word2[j - 1]:\n                dp[i][j] = dp[i - 1][j - 1]\n            else:\n                dp[i][j] = min(dp[i - 1][j - 1], dp[i - 1][j], dp[i][j - 1]) + 1\n    return dp[m][n]"
    }
  },
  {
    "id": 338,
    "title": "比特位计数",
    "englishTitle": "Counting Bits",
    "difficulty": "简单",
    "category": "技巧与位运算",
    "description": "给你一个整数 n ，对于 0 <= i <= n 中的每个 i ，计算其二进制表示中 1 的个数 ，返回一个长度为 n + 1 的数组 ans 作为答案。",
    "intuition": "【动态规划 + 最低有效位】`bits[i] = bits[i >> 1] + (i & 1)`。一个数二进制中 1 的个数等于其右移一位后的 1 的个数加上最低位的 1（如果是奇数）。",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "codeTemplates": {
      "java": "public int[] countBits(int n) {\n    int[] bits = new int[n + 1];\n    for (int i = 1; i <= n; i++) {\n        bits[i] = bits[i >> 1] + (i & 1);\n    }\n    return bits;\n}",
      "python": "def countBits(n: int) -> List[int]:\n    bits = [0] * (n + 1)\n    for i in range(1, n + 1):\n        bits[i] = bits[i >> 1] + (i & 1)\n    return bits"
    }
  },
  {
    "id": 461,
    "title": "汉明距离",
    "englishTitle": "Hamming Distance",
    "difficulty": "简单",
    "category": "技巧与位运算",
    "description": "两个整数之间的 汉明距离 指的是这两个数字对应二进制位不同的位置的数目。给你两个整数 x 和 y，计算并返回它们之间的汉明距离。",
    "intuition": "【异或运算 + 统计 1 的个数 (Brian Kernighan 算法)】x ^ y 异或结果二进制中 1 的个数即为不同的位数量。用 `v & (v - 1)` 快速统计 1 的个数。",
    "timeComplexity": "O(1)",
    "spaceComplexity": "O(1)",
    "codeTemplates": {
      "java": "public int hammingDistance(int x, int y) {\n    int xor = x ^ y;\n    int distance = 0;\n    while (xor != 0) {\n        distance++;\n        xor &= (xor - 1);\n    }\n    return distance;\n}",
      "python": "def hammingDistance(x: int, y: int) -> int:\n    xor = x ^ y\n    distance = 0\n    while xor:\n        distance += 1\n        xor &= (xor - 1)\n    return distance"
    }
  }
];
