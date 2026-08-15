// LeetCode Hot 100 Complete Memorization Dataset (100 Problems - Official LeetCode Classification & Order)

export const HOT_100_PROBLEMS = [
  {
    "id": 1,
    "title": "两数之和",
    "englishTitle": "Two Sum",
    "difficulty": "简单",
    "category": "哈希",
    "description": "给定一个整数数组 nums 和一个目标值 target，请你在该数组中找出和为目标值 target 的那两个整数，并返回它们的数组下标。\n假设每种输入只会对应一个答案，且同一个元素不能重复使用。\n\n【示例】\n输入：nums = [2, 7, 11, 15], target = 9\n输出：[0, 1] (因为 nums[0] + nums[1] = 2 + 7 = 9)",
    "intuition": "【空间换时间】用 HashMap 记录已遍历的数字及索引。遍历 x 时去 Map 查找是否存在 target - x。",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "codeTemplates": {
      "java": "public int[] twoSum(int[] nums, int target) {\n    Map<Integer, Integer> map = new HashMap<>();\n    for (int i = 0; i < nums.length; i++) {\n        int complement = target - nums[i];\n        if (map.containsKey(complement)) return new int[]{map.get(complement), i};\n        map.put(nums[i], i);\n    }\n    return new int[0];\n}",
      "python": "def twoSum(nums: List[int], target: int) -> List[int]:\n    seen = {}\n    for i, num in enumerate(nums):\n        comp = target - num\n        if comp in seen: return [seen[comp], i]\n        seen[num] = i\n    return []"
    }
  },
  {
    "id": 49,
    "title": "字母异位词分组",
    "englishTitle": "Group Anagrams",
    "difficulty": "中等",
    "category": "哈希",
    "description": "给你一个字符串数组，请你将字母异位词组合在一起。可以按任意顺序返回结果列表。\n字母异位词指由相同字母重排列形成的字符串（如 \"eat\", \"tea\", \"ate\" 包含相同字母）。\n\n【示例】\n输入：strs = [\"eat\", \"tea\", \"tan\", \"ate\", \"nat\", \"bat\"]\n输出：[[\"bat\"],[\"nat\",\"tan\"],[\"ate\",\"eat\",\"tea\"]]",
    "intuition": "【键标准化】字母异位词排序后的字符串必然相同。以排序后的字符串为 Key，同组词列表为 Value。",
    "timeComplexity": "O(N * K log K)",
    "spaceComplexity": "O(N * K)",
    "codeTemplates": {
      "java": "public List<List<String>> groupAnagrams(String[] strs) {\n    Map<String, List<String>> map = new HashMap<>();\n    for (String s : strs) {\n        char[] chars = s.toCharArray(); Arrays.sort(chars);\n        String key = new String(chars);\n        map.computeIfAbsent(key, k -> new ArrayList<>()).add(s);\n    }\n    return new ArrayList<>(map.values());\n}",
      "python": "def groupAnagrams(strs: List[str]) -> List[List[str]]:\n    mp = collections.defaultdict(list)\n    for s in strs:\n        key = ''.join(sorted(s))\n        mp[key].append(s)\n    return list(mp.values())"
    }
  },
  {
    "id": 128,
    "title": "最长连续序列",
    "englishTitle": "Longest Consecutive Sequence",
    "difficulty": "中等",
    "category": "哈希",
    "description": "给定一个未排序的整数数组 nums ，找出数字连续的最长序列（不要求序列元素在原数组中连续）的长度。\n请你设计并实现时间复杂度为 O(n) 的算法解决此问题。\n\n【示例】\n输入：nums = [100,4,200,1,3,2] -> 输出：4 (最长数字连续序列是 [1, 2, 3, 4]，长度为 4)",
    "intuition": "【Set 找序列起点】放入 HashSet。只从序列起点 (x - 1 不存在) 开始向下计数，保证每项仅访问常数次。",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "codeTemplates": {
      "java": "public int longestConsecutive(int[] nums) {\n    Set<Integer> set = new HashSet<>();\n    for (int num : nums) set.add(num);\n    int longest = 0;\n    for (int num : set) {\n        if (!set.contains(num - 1)) {\n            int curr = num, streak = 1;\n            while (set.contains(curr + 1)) { curr++; streak++; }\n            longest = Math.max(longest, streak);\n        }\n    }\n    return longest;\n}",
      "python": "def longestConsecutive(nums: List[int]) -> int:\n    num_set, longest = set(nums), 0\n    for num in num_set:\n        if num - 1 not in num_set:\n            curr, streak = num, 1\n            while curr + 1 in num_set: curr += 1; streak += 1\n            longest = max(longest, streak)\n    return longest"
    }
  },
  {
    "id": 283,
    "title": "移动零",
    "englishTitle": "Move Zeroes",
    "difficulty": "简单",
    "category": "双指针",
    "description": "给定一个数组 nums，编写一个函数将所有 0 移动到数组的末尾，同时保持非零元素的相对顺序。\n必须在不复制数组的情况下在原数组上操作。\n\n【示例】\n输入：nums = [0,1,0,3,12] -> 输出：[1,3,12,0,0]",
    "intuition": "【快慢双指针】slow 指向已就位非零区域边界。fast 遇到非零元素即与 slow 交换并 slow++。",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(1)",
    "codeTemplates": {
      "java": "public void moveZeroes(int[] nums) {\n    int slow = 0;\n    for (int fast = 0; fast < nums.length; fast++) {\n        if (nums[fast] != 0) {\n            int t = nums[slow]; nums[slow] = nums[fast]; nums[fast] = t;\n            slow++;\n        }\n    }\n}",
      "python": "def moveZeroes(nums: List[int]) -> None:\n    slow = 0\n    for fast in range(len(nums)):\n        if nums[fast] != 0:\n            nums[slow], nums[fast] = nums[fast], nums[slow]\n            slow += 1"
    }
  },
  {
    "id": 11,
    "title": "盛最多水的容器",
    "englishTitle": "Container With Most Water",
    "difficulty": "中等",
    "category": "双指针",
    "description": "给定一个长度为 n 的整数数组 height。有 n 条垂线，第 i 条线的两个端点是 (i, 0) 和 (i, height[i])。\n找出其中的两条线，使得它们与 x 轴共同构成的容器可以容纳最多的水。返回容器可以容纳的最大水量。\n\n【示例】\n输入：height = [1,8,6,2,5,4,8,3,7] -> 输出：49 (取下标 1 和 8，宽度 7 * 高度 min(8,7) = 49)",
    "intuition": "【对向双指针 + 贪心】左右指针在两端。面积受限于较短那根柱子，因此每次移动较短的一端。",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(1)",
    "codeTemplates": {
      "java": "public int maxArea(int[] height) {\n    int left = 0, right = height.length - 1, max = 0;\n    while (left < right) {\n        int area = Math.min(height[left], height[right]) * (right - left);\n        max = Math.max(max, area);\n        if (height[left] < height[right]) left++; else right--;\n    }\n    return max;\n}",
      "python": "def maxArea(height: List[int]) -> int:\n    l, r, max_w = 0, len(height) - 1, 0\n    while l < r:\n        area = min(height[l], height[r]) * (r - l)\n        max_w = max(max_w, area)\n        if height[l] < height[r]: l += 1\n        else: r -= 1\n    return max_w"
    }
  },
  {
    "id": 15,
    "title": "三数之和",
    "englishTitle": "3Sum",
    "difficulty": "中等",
    "category": "双指针",
    "description": "给你一个整数数组 nums ，判断是否存在三元组 [nums[i], nums[j], nums[k]] 满足 i != j、i != k 且 j != k ，同时满足 nums[i] + nums[j] + nums[k] == 0 。\n请你返回所有和为 0 且不重复的三元组。\n\n【示例】\n输入：nums = [-1,0,1,2,-1,-4]\n输出：[[-1,-1,2],[-1,0,1]]",
    "intuition": "【排序 + 固定 i + L/R 双指针】排序后固定 nums[i]，L=i+1, R=n-1 收缩。跳过重复元素去重。",
    "timeComplexity": "O(N^2)",
    "spaceComplexity": "O(log N)",
    "codeTemplates": {
      "java": "public List<List<Integer>> threeSum(int[] nums) {\n    Arrays.sort(nums);\n    List<List<Integer>> ans = new ArrayList<>();\n    for (int i = 0; i < nums.length - 2; i++) {\n        if (nums[i] > 0) break;\n        if (i > 0 && nums[i] == nums[i - 1]) continue;\n        int L = i + 1, R = nums.length - 1;\n        while (L < R) {\n            int sum = nums[i] + nums[L] + nums[R];\n            if (sum == 0) {\n                ans.add(Arrays.asList(nums[i], nums[L], nums[R]));\n                while (L < R && nums[L] == nums[L + 1]) L++;\n                while (L < R && nums[R] == nums[R - 1]) R--;\n                L++; R--;\n            } else if (sum < 0) L++; else R--;\n        }\n    }\n    return ans;\n}",
      "python": "def threeSum(nums: List[int]) -> List[List[int]]:\n    nums.sort()\n    ans = []\n    for i in range(len(nums) - 2):\n        if nums[i] > 0: break\n        if i > 0 and nums[i] == nums[i - 1]: continue\n        L, R = i + 1, len(nums) - 1\n        while L < R:\n            s = nums[i] + nums[L] + nums[R]\n            if s == 0:\n                ans.append([nums[i], nums[L], nums[R]])\n                while L < R and nums[L] == nums[L + 1]: L += 1\n                while L < R and nums[R] == nums[R - 1]: R -= 1\n                L += 1; R -= 1\n            elif s < 0: L += 1\n            else: R -= 1\n    return ans"
    }
  },
  {
    "id": 42,
    "title": "接雨水",
    "englishTitle": "Trapping Rain Water",
    "difficulty": "困难",
    "category": "双指针",
    "description": "给定 n 个非负整数表示每个宽度为 1 的柱子的高度图，计算按此排列的柱子，下雨之后能接多少雨水。\n\n【示例】\n输入：height = [0,1,0,2,1,0,1,3,2,1,2,1] -> 输出：6 (积水凹槽面积总和为 6)",
    "intuition": "【左右最大值双指针 / 单调递减栈】每个柱子接水量 = min(leftMax, rightMax) - height[i]。",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(1)",
    "codeTemplates": {
      "java": "public int trap(int[] height) {\n    int left = 0, right = height.length - 1, leftMax = 0, rightMax = 0, ans = 0;\n    while (left < right) {\n        if (height[left] < height[right]) {\n            if (height[left] >= leftMax) leftMax = height[left]; else ans += leftMax - height[left];\n            left++;\n        } else {\n            if (height[right] >= rightMax) rightMax = height[right]; else ans += rightMax - height[right];\n            right--;\n        }\n    }\n    return ans;\n}",
      "python": "def trap(height: List[int]) -> int:\n    l, r, l_max, r_max, ans = 0, len(height) - 1, 0, 0, 0\n    while l < r:\n        if height[l] < height[r]:\n            if height[l] >= l_max: l_max = height[l]\n            else: ans += l_max - height[l]\n            l += 1\n        else:\n            if height[r] >= r_max: r_max = height[r]\n            else: ans += r_max - height[r]\n            r -= 1\n    return ans"
    }
  },
  {
    "id": 3,
    "title": "无重复字符的最长子串",
    "englishTitle": "Longest Substring Without Repeating Characters",
    "difficulty": "中等",
    "category": "滑动窗口",
    "description": "给定一个字符串 s ，请你找出其中不含有重复字符的最长子串的长度。\n\n【示例 1】\n输入: s = \"abcabcbb\" -> 输出: 3 (最长无重复子串是 \"abc\")\n【示例 2】\n输入: s = \"bbbbb\" -> 输出: 1 (最长无重复子串是 \"b\")",
    "intuition": "【滑动窗口 + Map】右指针扩展窗口并记录字符上次出现索引。若遇到重复字符，左指针跳跃至 map.get(ch) + 1。",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(128)",
    "codeTemplates": {
      "java": "public int lengthOfLongestSubstring(String s) {\n    Map<Character, Integer> map = new HashMap<>();\n    int maxLen = 0, left = 0;\n    for (int right = 0; right < s.length(); right++) {\n        char ch = s.charAt(right);\n        if (map.containsKey(ch)) left = Math.max(left, map.get(ch) + 1);\n        map.put(ch, right);\n        maxLen = Math.max(maxLen, right - left + 1);\n    }\n    return maxLen;\n}",
      "python": "def lengthOfLongestSubstring(s: str) -> int:\n    mp, left, max_len = {}, 0, 0\n    for right, ch in enumerate(s):\n        if ch in mp: left = max(left, mp[ch] + 1)\n        mp[ch] = right\n        max_len = max(max_len, right - left + 1)\n    return max_len"
    }
  },
  {
    "id": 438,
    "title": "找到字符串中所有字母异位词",
    "englishTitle": "Find All Anagrams in a String",
    "difficulty": "中等",
    "category": "滑动窗口",
    "description": "给定两个字符串 s 和 p，找到 s 中所有 p 的异位词的子串，返回这些子串的起始索引。\n异位词指由相同字母重排列形成的字符串。\n\n【示例】\n输入：s = \"cbaebabacd\", p = \"abc\" -> 输出：[0, 6] (下标 0 的 \"cba\" 和下标 6 的 \"bac\" 均是 \"abc\" 的异位词)",
    "intuition": "【固定长度滑动窗口 + 词频比较】维护长度为 len(p) 的滑动窗口，比较窗口内字符频次与 p 频次数组是否一致。",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(26)",
    "codeTemplates": {
      "java": "public List<Integer> findAnagrams(String s, String p) {\n    List<Integer> res = new ArrayList<>();\n    if (s.length() < p.length()) return res;\n    int[] pCount = new int[26], sCount = new int[26];\n    for (int i = 0; i < p.length(); i++) {\n        pCount[p.charAt(i) - 'a']++; sCount[s.charAt(i) - 'a']++;\n    }\n    if (Arrays.equals(pCount, sCount)) res.add(0);\n    for (int i = p.length(); i < s.length(); i++) {\n        sCount[s.charAt(i) - 'a']++; sCount[s.charAt(i - p.length()) - 'a']--;\n        if (Arrays.equals(pCount, sCount)) res.add(i - p.length() + 1);\n    }\n    return res;\n}",
      "python": "def findAnagrams(s: str, p: str) -> List[int]:\n    if len(s) < len(p): return []\n    p_cnt, s_cnt = [0] * 26, [0] * 26\n    for i in range(len(p)):\n        p_cnt[ord(p[i]) - 97] += 1; s_cnt[ord(s[i]) - 97] += 1\n    res = [0] if p_cnt == s_cnt else []\n    for i in range(len(p), len(s)):\n        s_cnt[ord(s[i]) - 97] += 1; s_cnt[ord(s[i - len(p)]) - 97] -= 1\n        if p_cnt == s_cnt: res.append(i - len(p) + 1)\n    return res"
    }
  },
  {
    "id": 560,
    "title": "和为 K 的子数组",
    "englishTitle": "Subarray Sum Equals K",
    "difficulty": "中等",
    "category": "子串",
    "description": "给你一个整数数组 nums 和一个整数 k ，请你统计并返回该数组中和为 k 的连续子数组的个数。\n\n【示例】\n输入：nums = [1,1,1], k = 2 -> 输出：2",
    "intuition": "【前缀和 + Map】子数组 [i..j] 和为 preSum[j] - preSum[i-1] = k。遍历 j 时在 Map 查找 preSum[j] - k 的出现次数。",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "codeTemplates": {
      "java": "public int subarraySum(int[] nums, int k) {\n    Map<Integer, Integer> map = new HashMap<>(); map.put(0, 1);\n    int count = 0, sum = 0;\n    for (int num : nums) {\n        sum += num;\n        if (map.containsKey(sum - k)) count += map.get(sum - k);\n        map.put(sum, map.getOrDefault(sum, 0) + 1);\n    }\n    return count;\n}",
      "python": "def subarraySum(nums: List[int], k: int) -> int:\n    mp, cnt, curr = {0: 1}, 0, 0\n    for num in nums:\n        curr += num\n        if curr - k in mp: cnt += mp[curr - k]\n        mp[curr] = mp.get(curr, 0) + 1\n    return cnt"
    }
  },
  {
    "id": 239,
    "title": "滑动窗口最大值",
    "englishTitle": "Sliding Window Maximum",
    "difficulty": "困难",
    "category": "子串",
    "description": "给你一个整数数组 nums，有一个大小为 k 的滑动窗口从数组的最左侧移动到数组的最右侧。你只可以看到在滑动窗口内的 k 个数字。滑动窗口每次只向右移动一位。\n返回滑动窗口中的最大值数组。要求时间复杂度 O(n)。\n\n【示例】\n输入：nums = [1,3,-1,-3,5,3,6,7], k = 3 -> 输出：[3,3,5,5,6,7]",
    "intuition": "【单调双端队列 Deque】存储下标，保持队列对应元素严格单调递减。队头即为当前窗口的最大值下标。",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(K)",
    "codeTemplates": {
      "java": "public int[] maxSlidingWindow(int[] nums, int k) {\n    Deque<Integer> deque = new LinkedList<>();\n    int[] res = new int[nums.length - k + 1];\n    for (int i = 0; i < nums.length; i++) {\n        while (!deque.isEmpty() && nums[deque.peekLast()] <= nums[i]) deque.pollLast();\n        deque.addLast(i);\n        if (deque.peekFirst() <= i - k) deque.pollFirst();\n        if (i >= k - 1) res[i - k + 1] = nums[deque.peekFirst()];\n    }\n    return res;\n}",
      "python": "def maxSlidingWindow(nums: List[int], k: int) -> List[int]:\n    q, res = collections.deque(), []\n    for i, num in enumerate(nums):\n        while q and nums[q[-1]] <= num: q.pop()\n        q.append(i)\n        if q[0] <= i - k: q.popleft()\n        if i >= k - 1: res.append(nums[q[0]])\n    return res"
    }
  },
  {
    "id": 76,
    "title": "最小覆盖子串",
    "englishTitle": "Minimum Window Substring",
    "difficulty": "困难",
    "category": "子串",
    "description": "给你一个字符串 s 、一个字符串 t 。返回 s 中涵盖 t 所有字符的最小子串。如果 s 中不存在涵盖 t 所有字符的子串，则返回空字符串 \"\" 。\n\n【示例】\n输入：s = \"ADOBECODEBANC\", t = \"ABC\" -> 输出：\"BANC\" (包含 A,B,C 且长度最小)",
    "intuition": "【滑动窗口 + 欠帐 Counter】用 Count 数组统计 t 字符频次，变量 need 表示尚缺字符数。右指针进窗口，完成覆盖后收缩左指针。",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(128)",
    "codeTemplates": {
      "java": "public String minWindow(String s, String t) {\n    int[] need = new int[128];\n    for (char c : t.toCharArray()) need[c]++;\n    int needCount = t.length(), left = 0, minLen = Integer.MAX_VALUE, start = 0;\n    for (int right = 0; right < s.length(); right++) {\n        char c = s.charAt(right);\n        if (need[c] > 0) needCount--;\n        need[c]--;\n        if (needCount == 0) {\n            while (left < right && need[s.charAt(left)] < 0) {\n                need[s.charAt(left)]++; left++;\n            }\n            if (right - left + 1 < minLen) {\n                minLen = right - left + 1; start = left;\n            }\n            need[s.charAt(left)]++; needCount++; left++;\n        }\n    }\n    return minLen == Integer.MAX_VALUE ? \"\" : s.substring(start, start + minLen);\n}",
      "python": "def minWindow(s: str, t: str) -> str:\n    need = collections.Counter(t)\n    need_cnt = len(t)\n    left, res = 0, (0, float('inf'))\n    for right, c in enumerate(s):\n        if need[c] > 0: need_cnt -= 1\n        need[c] -= 1\n        if need_cnt == 0:\n            while left < right and need[s[left]] < 0:\n                need[s[left]] += 1; left += 1\n            if right - left + 1 < res[1] - res[0]: res = (left, right + 1)\n            need[s[left]] += 1; need_cnt += 1; left += 1\n    return \"\" if res[1] == float('inf') else s[res[0]:res[1]]"
    }
  },
  {
    "id": 53,
    "title": "最大子数组和",
    "englishTitle": "Maximum Subarray",
    "difficulty": "中等",
    "category": "普通数组",
    "description": "给你一个整数数组 nums ，请你找出一个具有最大和的连续子数组（子数组最少包含一个元素），返回其最大和。\n\n【示例】\n输入：nums = [-2,1,-3,4,-1,2,1,-5,4] -> 输出：6 (连续子数组 [4,-1,2,1] 的和最大)",
    "intuition": "【Kadane 算法】`currSum = max(nums[i], currSum + nums[i])`。累加和负数时重新以 nums[i] 为起点。",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(1)",
    "codeTemplates": {
      "java": "public int maxSubArray(int[] nums) {\n    int max = nums[0], curr = nums[0];\n    for (int i = 1; i < nums.length; i++) {\n        curr = Math.max(nums[i], curr + nums[i]); max = Math.max(max, curr);\n    }\n    return max;\n}",
      "python": "def maxSubArray(nums: List[int]) -> int:\n    max_s = curr = nums[0]\n    for num in nums[1:]:\n        curr = max(num, curr + num); max_s = max(max_s, curr)\n    return max_s"
    }
  },
  {
    "id": 56,
    "title": "合并区间",
    "englishTitle": "Merge Intervals",
    "difficulty": "中等",
    "category": "普通数组",
    "description": "以数组 intervals 表示若干个区间的集合，其中单个区间为 intervals[i] = [start_i, end_i] 。\n请你合并所有重叠的区间，并返回一个不重叠的区间数组，该数组需恰好覆盖输入中的所有区间。\n\n【示例】\n输入：intervals = [[1,3],[2,6],[8,10],[15,18]]\n输出：[[1,6],[8,10],[15,18]] (区间 [1,3] 和 [2,6] 重叠，合并为 [1,6])",
    "intuition": "【按 start 排序】若当前 interval[0] <= 最后一个已合并区间的 end，产生重叠，更新 `end = max(end1, end2)`。",
    "timeComplexity": "O(N log N)",
    "spaceComplexity": "O(N)",
    "codeTemplates": {
      "java": "public int[][] merge(int[][] intervals) {\n    Arrays.sort(intervals, (a, b) -> Integer.compare(a[0], b[0]));\n    List<int[]> res = new ArrayList<>();\n    for (int[] interval : intervals) {\n        if (res.isEmpty() || res.get(res.size() - 1)[1] < interval[0]) res.add(interval);\n        else res.get(res.size() - 1)[1] = Math.max(res.get(res.size() - 1)[1], interval[1]);\n    }\n    return res.toArray(new int[res.size()][]);\n}",
      "python": "def merge(intervals: List[List[int]]) -> List[List[int]]:\n    intervals.sort(key=lambda x: x[0]); res = []\n    for interval in intervals:\n        if not res or res[-1][1] < interval[0]: res.append(interval)\n        else: res[-1][1] = max(res[-1][1], interval[1])\n    return res"
    }
  },
  {
    "id": 189,
    "title": "轮转数组",
    "englishTitle": "Rotate Array",
    "difficulty": "中等",
    "category": "普通数组",
    "description": "给定一个整数数组 nums，将数组中的元素向右轮转 k 个位置，其中 k 是非负数。要求空间复杂度为 O(1)。\n\n【示例】\n输入：nums = [1,2,3,4,5,6,7], k = 3 -> 输出：[5,6,7,1,2,3,4] (向右旋转 3 步)",
    "intuition": "【三次反转法】整体反转数组，再分别反转前 k 个元素和后 n-k 个元素。",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(1)",
    "codeTemplates": {
      "java": "public void rotate(int[] nums, int k) {\n    k %= nums.length;\n    reverse(nums, 0, nums.length - 1);\n    reverse(nums, 0, k - 1);\n    reverse(nums, k, nums.length - 1);\n}\nprivate void reverse(int[] nums, int start, int end) {\n    while (start < end) {\n        int temp = nums[start]; nums[start] = nums[end]; nums[end] = temp;\n        start++; end--;\n    }\n}",
      "python": "def rotate(nums: List[int], k: int) -> None:\n    k %= len(nums)\n    nums.reverse()\n    nums[:k] = reversed(nums[:k])\n    nums[k:] = reversed(nums[k:])"
    }
  },
  {
    "id": 238,
    "title": "除自身以外数组的乘积",
    "englishTitle": "Product of Array Except Self",
    "difficulty": "中等",
    "category": "普通数组",
    "description": "给你一个整数数组 nums，返回数组 answer ，其中 answer[i] 等于 nums 中除 nums[i] 之外其余各元素的乘积。\n请不要使用除法，且在 O(n) 时间复杂度内完成。\n\n【示例】\n输入：nums = [1,2,3,4] -> 输出：[24,12,8,6] (例如 answer[0] = 2*3*4 = 24)",
    "intuition": "【前缀积 * 后缀积】先遍历一次存储 i 左侧所有元素的乘积，再从右向左遍历用变量 right 维护右侧乘积进行乘积累加。",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(1)",
    "codeTemplates": {
      "java": "public int[] productExceptSelf(int[] nums) {\n    int n = nums.length;\n    int[] res = new int[n];\n    res[0] = 1;\n    for (int i = 1; i < n; i++) res[i] = res[i - 1] * nums[i - 1];\n    int right = 1;\n    for (int i = n - 1; i >= 0; i--) {\n        res[i] *= right;\n        right *= nums[i];\n    }\n    return res;\n}",
      "python": "def productExceptSelf(nums: List[int]) -> List[int]:\n    n = len(nums)\n    res = [1] * n\n    for i in range(1, n): res[i] = res[i - 1] * nums[i - 1]\n    right = 1\n    for i in range(n - 1, -1, -1):\n        res[i] *= right\n        right *= nums[i]\n    return res"
    }
  },
  {
    "id": 41,
    "title": "缺失的第一个正数",
    "englishTitle": "First Missing Positive",
    "difficulty": "困难",
    "category": "普通数组",
    "description": "给你一个未排序的整数数组 nums ，请你找出其中没有出现的最小的正整数。\n请实现时间复杂度为 O(n) 并且只使用常数级别额外空间的解决方案。\n\n【示例】\n输入：nums = [1,2,0] -> 输出：3\n输入：nums = [3,4,-1,1] -> 输出：2\n输入：nums = [7,8,9,11,12] -> 输出：1",
    "intuition": "【原地哈希/置换】把每个正数 x 放在索引 x-1 的位置上（当 1 <= x <= n 且 nums[x-1] != x 时 swap）。最后遍历数组，首个 nums[i] != i+1 的位置，i+1 即为解。",
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
    "description": "给定一个 m x n 的矩阵，如果一个元素为 0 ，则将其所在行和列的所有元素都设为 0 。请使用 原地 算法。\n\n【示例】\n输入：matrix = [[1,1,1],[1,0,1],[1,1,1]]\n输出：[[1,0,1],[0,0,0],[1,0,1]]",
    "intuition": "【第一行与第一列做标记位】使用矩阵的第一行和第一列标记该行/列是否有 0，另用变量 firstRowZero/firstColZero 标记第一行/第一列本身是否包含 0。",
    "timeComplexity": "O(M * N)",
    "spaceComplexity": "O(1)",
    "codeTemplates": {
      "java": "public void setZeroes(int[][] matrix) {\n    int m = matrix.length, n = matrix[0].length;\n    boolean row0 = false, col0 = false;\n    for (int i = 0; i < m; i++) if (matrix[i][0] == 0) col0 = true;\n    for (int j = 0; j < n; j++) if (matrix[0][j] == 0) row0 = true;\n    for (int i = 1; i < m; i++) {\n        for (int j = 1; j < n; j++) {\n            if (matrix[i][j] == 0) {\n                matrix[i][0] = 0;\n                matrix[0][j] = 0;\n            }\n        }\n    }\n    for (int i = 1; i < m; i++) {\n        for (int j = 1; j < n; j++) {\n            if (matrix[i][0] == 0 || matrix[0][j] == 0) matrix[i][j] = 0;\n        }\n    }\n    if (col0) for (int i = 0; i < m; i++) matrix[i][0] = 0;\n    if (row0) for (int j = 0; j < n; j++) matrix[0][j] = 0;\n}",
      "python": "def setZeroes(matrix: List[List[int]]) -> None:\n    m, n = len(matrix), len(matrix[0])\n    row0 = any(matrix[0][j] == 0 for j in range(n))\n    col0 = any(matrix[i][0] == 0 for i in range(m))\n    for i in range(1, m):\n        for j in range(1, n):\n            if matrix[i][j] == 0:\n                matrix[i][0] = matrix[0][j] = 0\n    for i in range(1, m):\n        for j in range(1, n):\n            if matrix[i][0] == 0 or matrix[0][j] == 0:\n                matrix[i][j] = 0\n    if col0:\n        for i in range(m): matrix[i][0] = 0\n    if row0:\n        for j in range(n): matrix[0][j] = 0"
    }
  },
  {
    "id": 54,
    "title": "螺旋矩阵",
    "englishTitle": "Spiral Matrix",
    "difficulty": "中等",
    "category": "矩阵",
    "description": "给你一个 m 行 n 列的矩阵 matrix ，请按照 顺时针螺旋顺序 ，返回矩阵中的所有元素。\n\n【示例】\n输入：matrix = [[1,2,3],[4,5,6],[7,8,9]]\n输出：[1,2,3,6,9,8,7,4,5]",
    "intuition": "【边界模拟】维护 top, bottom, left, right 四个边界。顺时针按 上->右->下->左 依次遍历，每走完一条边就向内收缩对应的边界。",
    "timeComplexity": "O(M * N)",
    "spaceComplexity": "O(1)",
    "codeTemplates": {
      "java": "public List<Integer> spiralOrder(int[][] matrix) {\n    List<Integer> res = new ArrayList<>();\n    if (matrix == null || matrix.length == 0) return res;\n    int top = 0, bottom = matrix.length - 1;\n    int left = 0, right = matrix[0].length - 1;\n    while (top <= bottom && left <= right) {\n        for (int j = left; j <= right; j++) res.add(matrix[top][j]);\n        top++;\n        for (int i = top; i <= bottom; i++) res.add(matrix[i][right]);\n        right--;\n        if (top <= bottom) {\n            for (int j = right; j >= left; j--) res.add(matrix[bottom][j]);\n            bottom--;\n        }\n        if (left <= right) {\n            for (int i = bottom; i >= top; i--) res.add(matrix[i][left]);\n            left++;\n        }\n    }\n    return res;\n}",
      "python": "def spiralOrder(matrix: List[List[int]]) -> List[int]:\n    res = []\n    top, bottom = 0, len(matrix) - 1\n    left, right = 0, len(matrix[0]) - 1\n    while top <= bottom and left <= right:\n        for j in range(left, right + 1): res.append(matrix[top][j])\n        top += 1\n        for i in range(top, bottom + 1): res.append(matrix[i][right])\n        right -= 1\n        if top <= bottom:\n            for j in range(right, left - 1, -1): res.append(matrix[bottom][j])\n            bottom -= 1\n        if left <= right:\n            for i in range(bottom, top - 1, -1): res.append(matrix[i][left])\n            left += 1\n    return res"
    }
  },
  {
    "id": 48,
    "title": "旋转图像",
    "englishTitle": "Rotate Image",
    "difficulty": "中等",
    "category": "矩阵",
    "description": "给定一个 n × n 的二维矩阵 matrix 表示一个图像。请你将图像顺时针旋转 90 度。必须在原地旋转，即直接修改输入的二维矩阵。\n\n【示例】\n输入：matrix = [[1,2,3],[4,5,6],[7,8,9]]\n输出：[[7,4,1],[8,5,2],[9,6,3]]",
    "intuition": "【主对角线转置 + 左右镜像】顺时针 90 度 = 先按主对角线 `matrix[i][j] <-> matrix[j][i]` 转置，再将每行左右翻转。",
    "timeComplexity": "O(N^2)",
    "spaceComplexity": "O(1)",
    "codeTemplates": {
      "java": "public void rotate(int[][] matrix) {\n    int n = matrix.length;\n    for (int i = 0; i < n; i++) {\n        for (int j = i + 1; j < n; j++) {\n            int t = matrix[i][j]; matrix[i][j] = matrix[j][i]; matrix[j][i] = t;\n        }\n    }\n    for (int i = 0; i < n; i++) {\n        for (int j = 0; j < n / 2; j++) {\n            int t = matrix[i][j]; matrix[i][j] = matrix[i][n - 1 - j]; matrix[i][n - 1 - j] = t;\n        }\n    }\n}",
      "python": "def rotate(matrix: List[List[int]]) -> None:\n    n = len(matrix)\n    for i in range(n):\n        for j in range(i + 1, n):\n            matrix[i][j], matrix[j][i] = matrix[j][i], matrix[i][j]\n    for i in range(n):\n        matrix[i].reverse()"
    }
  },
  {
    "id": 240,
    "title": "搜索二维矩阵 II",
    "englishTitle": "Search a 2D Matrix II",
    "difficulty": "中等",
    "category": "矩阵",
    "description": "编写一个高效的算法来搜索 m x n 矩阵 matrix 中的一个目标值 target 。该矩阵具有以下特性：\n- 每行的元素从左到右按升序排列。\n- 每列的元素从上到下按升序排列。\n\n【示例】\n输入：matrix = [[1,4,7,11,15],[2,5,8,12,19],[3,6,9,16,22],[10,13,14,17,24],[18,21,23,26,30]], target = 5 -> 输出：true",
    "intuition": "【右上角 BST 裁剪】从右上角 (0, n-1) 开始。target < 当前值向左(col--)；target > 当前值向下(row++)。",
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
    "description": "给你两个单链表的头节点 headA 和 headB ，请你找出并返回两个单链表相交的起始节点。如果两个链表不存在相交节点，返回 null 。\n\n【示例】\n输入：intersectVal = 8, listA = [4,1,8,4,5], listB = [5,6,1,8,4,5] -> 输出：Reference to node with value 8",
    "intuition": "【双指针交替走】pA 走完走 B，pB 走完走 A。两人走过的距离均为 L_A + L_B，必在交点相遇。",
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
    "description": "给你单链表的头节点 head ，请你反转链表，并返回反转后的链表。\n\n【示例】\n输入：head = [1,2,3,4,5] -> 输出：[5,4,3,2,1]",
    "intuition": "【双指针迭代】prev=null, curr=head。每次暂存 nextTemp = curr.next，而后 curr.next = prev，整体向前平移。",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(1)",
    "codeTemplates": {
      "java": "public ListNode reverseList(ListNode head) {\n    ListNode prev = null, curr = head;\n    while (curr != null) {\n        ListNode next = curr.next; curr.next = prev; prev = curr; curr = next;\n    }\n    return prev;\n}",
      "python": "def reverseList(head: Optional[ListNode]) -> Optional[ListNode]:\n    prev, curr = None, head\n    while curr:\n        nxt = curr.next; curr.next = prev; prev, curr = curr, nxt\n    return prev"
    }
  },
  {
    "id": 234,
    "title": "回文链表",
    "englishTitle": "Palindrome Linked List",
    "difficulty": "简单",
    "category": "链表",
    "description": "给你一个单链表的头节点 head ，请你判断该链表是否为回文链表（正着读和倒着读值序列完全相同）。\n\n【示例】\n输入：head = [1,2,2,1] -> 输出：true",
    "intuition": "【快慢指针中点 + 反转后半段】快慢指针找中点，反转后半部分链表，左右双指针同时向中间比对。",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(1)",
    "codeTemplates": {
      "java": "public boolean isPalindrome(ListNode head) {\n    if (head == null || head.next == null) return true;\n    ListNode slow = head, fast = head;\n    while (fast.next != null && fast.next.next != null) { slow = slow.next; fast = fast.next.next; }\n    ListNode p2 = reverse(slow.next), p1 = head;\n    while (p2 != null) {\n        if (p1.val != p2.val) return false;\n        p1 = p1.next; p2 = p2.next;\n    }\n    return true;\n}\nprivate ListNode reverse(ListNode head) {\n    ListNode prev = null, curr = head;\n    while (curr != null) { ListNode nxt = curr.next; curr.next = prev; prev = curr; curr = nxt; }\n    return prev;\n}",
      "python": "def isPalindrome(head: Optional[ListNode]) -> bool:\n    if not head or not head.next: return True\n    slow = fast = head\n    while fast.next and fast.next.next: slow, fast = slow.next, fast.next.next\n    prev, curr = None, slow.next\n    while curr: nxt = curr.next; curr.next = prev; prev, curr = curr, nxt\n    p1, p2 = head, prev\n    while p2:\n        if p1.val != p2.val: return False\n        p1, p2 = p1.next, p2.next\n    return True"
    }
  },
  {
    "id": 141,
    "title": "环形链表",
    "englishTitle": "Linked List Cycle",
    "difficulty": "简单",
    "category": "链表",
    "description": "给你一个链表的头节点 head ，判断链表中是否有环。\n如果链表中有某个节点，可以通过连续跟踪 next 指针再次到达，则链表中存在环。如果存在环则返回 true ；否则返回 false 。\n\n【示例】\n输入：head = [3,2,0,-4], pos = 1 -> 输出：true (末尾 -4 连到了第二个节点 2，形成环)",
    "intuition": "【快慢指针】slow 走 1 步，fast 走 2 步。若有环，快指针必在环内追上慢指针 (`slow == fast`)。",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(1)",
    "codeTemplates": {
      "java": "public boolean hasCycle(ListNode head) {\n    ListNode slow = head, fast = head;\n    while (fast != null && fast.next != null) {\n        slow = slow.next; fast = fast.next.next;\n        if (slow == fast) return true;\n    }\n    return false;\n}",
      "python": "def hasCycle(head: Optional[ListNode]) -> bool:\n    slow = fast = head\n    while fast and fast.next:\n        slow = slow.next; fast = fast.next.next\n        if slow == fast: return True\n    return False"
    }
  },
  {
    "id": 142,
    "title": "环形链表 II",
    "englishTitle": "Linked List Cycle II",
    "difficulty": "中等",
    "category": "链表",
    "description": "给定一个链表的头节点 head ，返回链表开始入环的第一个节点。如果链表无环，则返回 null。\n\n【示例】\n输入：head = [3,2,0,-4], pos = 1 -> 输出：返回值为 2 的那个节点",
    "intuition": "【相遇点找入环】快慢指针相遇时，使 ptr 从 head 出发与 slow 同速前进，二者相遇处即为入环节点。",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(1)",
    "codeTemplates": {
      "java": "public ListNode detectCycle(ListNode head) {\n    ListNode slow = head, fast = head;\n    while (fast != null && fast.next != null) {\n        slow = slow.next; fast = fast.next.next;\n        if (slow == fast) {\n            ListNode ptr = head;\n            while (ptr != slow) { ptr = ptr.next; slow = slow.next; }\n            return ptr;\n        }\n    }\n    return null;\n}",
      "python": "def detectCycle(head: Optional[ListNode]) -> Optional[ListNode]:\n    slow = fast = head\n    while fast and fast.next:\n        slow = slow.next; fast = fast.next.next\n        if slow == fast:\n            ptr = head\n            while ptr != slow: ptr = ptr.next; slow = slow.next\n            return ptr\n    return None"
    }
  },
  {
    "id": 21,
    "title": "合并两个有序链表",
    "englishTitle": "Merge Two Sorted Lists",
    "difficulty": "简单",
    "category": "链表",
    "description": "将两个升序链表合并为一个新的升序链表并返回。新链表是通过拼接给定的两个链表的所有节点组成的。\n\n【示例】\n输入：l1 = [1,2,4], l2 = [1,3,4] -> 输出：[1,1,2,3,4,4]",
    "intuition": "【Dummy 节点双指针比较】比较 list1 和 list2 当前节点值，较小者接入 tail.next 并向前推进。",
    "timeComplexity": "O(M + N)",
    "spaceComplexity": "O(1)",
    "codeTemplates": {
      "java": "public ListNode mergeTwoLists(ListNode list1, ListNode list2) {\n    ListNode dummy = new ListNode(0), curr = dummy;\n    while (list1 != null && list2 != null) {\n        if (list1.val <= list2.val) { curr.next = list1; list1 = list1.next; }\n        else { curr.next = list2; list2 = list2.next; }\n        curr = curr.next;\n    }\n    curr.next = (list1 != null) ? list1 : list2;\n    return dummy.next;\n}",
      "python": "def mergeTwoLists(l1: Optional[ListNode], l2: Optional[ListNode]) -> Optional[ListNode]:\n    dummy = curr = ListNode(0)\n    while l1 and l2:\n        if l1.val <= l2.val: curr.next, l1 = l1, l1.next\n        else: curr.next, l2 = l2, l2.next\n        curr = curr.next\n    curr.next = l1 or l2\n    return dummy.next"
    }
  },
  {
    "id": 2,
    "title": "两数相加",
    "englishTitle": "Add Two Numbers",
    "difficulty": "中等",
    "category": "链表",
    "description": "给你两个非空的链表，表示两个非负的整数。它们每位数字都是按照逆序的方式存储的，并且每个节点只能存储一位数字。\n请你将这两个数相加，并以相同形式返回一个表示和的链表。\n\n【示例】\n输入：l1 = [2, 4, 3], l2 = [5, 6, 4]  (分别代表整数 342 和 465)\n输出：[7, 0, 8]  (342 + 465 = 807)",
    "intuition": "【模拟加法 + 进位 carry】遍历 l1 和 l2，计算 sum = x + y + carry，构建节点 `sum % 10` 并进位 `carry = sum / 10`。",
    "timeComplexity": "O(max(M, N))",
    "spaceComplexity": "O(1)",
    "codeTemplates": {
      "java": "public ListNode addTwoNumbers(ListNode l1, ListNode l2) {\n    ListNode dummy = new ListNode(0), curr = dummy;\n    int carry = 0;\n    while (l1 != null || l2 != null || carry != 0) {\n        int x = (l1 != null) ? l1.val : 0;\n        int y = (l2 != null) ? l2.val : 0;\n        int sum = x + y + carry;\n        carry = sum / 10;\n        curr.next = new ListNode(sum % 10);\n        curr = curr.next;\n        if (l1 != null) l1 = l1.next;\n        if (l2 != null) l2 = l2.next;\n    }\n    return dummy.next;\n}",
      "python": "def addTwoNumbers(l1: Optional[ListNode], l2: Optional[ListNode]) -> Optional[ListNode]:\n    dummy = curr = ListNode(0)\n    carry = 0\n    while l1 or l2 or carry:\n        x = l1.val if l1 else 0\n        y = l2.val if l2 else 0\n        s = x + y + carry\n        carry = s // 10\n        curr.next = ListNode(s % 10)\n        curr = curr.next\n        l1 = l1.next if l1 else None\n        l2 = l2.next if l2 else None\n    return dummy.next"
    }
  },
  {
    "id": 19,
    "title": "删除链表的倒数第 N 个结点",
    "englishTitle": "Remove Nth Node From End of List",
    "difficulty": "中等",
    "category": "链表",
    "description": "给你一个链表，删除链表的倒数第 n 个结点，并且返回链表的头结点。要求最好用一次遍历实现。\n\n【示例】\n输入：head = [1,2,3,4,5], n = 2 -> 输出：[1,2,3,5] (删除了倒数第 2 个节点 4)",
    "intuition": "【双指针相差 n 步】fast 先走 n 步。而后 slow 与 fast 同时前进，fast 达末尾时 slow 恰好停在待删除节点的前驱位置。",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(1)",
    "codeTemplates": {
      "java": "public ListNode removeNthFromEnd(ListNode head, int n) {\n    ListNode dummy = new ListNode(0, head), fast = dummy, slow = dummy;\n    for (int i = 0; i <= n; i++) fast = fast.next;\n    while (fast != null) { fast = fast.next; slow = slow.next; }\n    slow.next = slow.next.next;\n    return dummy.next;\n}",
      "python": "def removeNthFromEnd(head: Optional[ListNode], n: int) -> Optional[ListNode]:\n    dummy = ListNode(0, head)\n    fast = slow = dummy\n    for _ in range(n + 1): fast = fast.next\n    while fast: fast = fast.next; slow = slow.next\n    slow.next = slow.next.next\n    return dummy.next"
    }
  },
  {
    "id": 24,
    "title": "两两交换链表中的节点",
    "englishTitle": "Swap Nodes in Pairs",
    "difficulty": "中等",
    "category": "链表",
    "description": "给你一个链表，两两交换其中相邻的节点，并返回交换后链表的头节点。你必须在不修改节点内部的值的情况下完成本题（即，只能进行节点交换）。\n\n【示例】\n输入：head = [1,2,3,4] -> 输出：[2,1,4,3]",
    "intuition": "【虚拟头节点 + 迭代】使用 dummyHead，指针 cur 指向交换节点的前驱。每次调整 node1 与 node2 的 next 指向完成两两翻转。",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(1)",
    "codeTemplates": {
      "java": "public ListNode swapPairs(ListNode head) {\n    ListNode dummy = new ListNode(0);\n    dummy.next = head;\n    ListNode cur = dummy;\n    while (cur.next != null && cur.next.next != null) {\n        ListNode n1 = cur.next, n2 = cur.next.next;\n        cur.next = n2;\n        n1.next = n2.next;\n        n2.next = n1;\n        cur = n1;\n    }\n    return dummy.next;\n}",
      "python": "def swapPairs(head: Optional[ListNode]) -> Optional[ListNode]:\n    dummy = ListNode(0, head)\n    cur = dummy\n    while cur.next and cur.next.next:\n        n1, n2 = cur.next, cur.next.next\n        cur.next = n2\n        n1.next = n2.next\n        n2.next = n1\n        cur = n1\n    return dummy.next"
    }
  },
  {
    "id": 25,
    "title": "K 个一组翻转链表",
    "englishTitle": "Reverse Nodes in k-Group",
    "difficulty": "困难",
    "category": "链表",
    "description": "给你链表的头节点 head ，每 k 个节点一组进行翻转，请你返回修改后的链表。k 是一个正整数，它的值小于或等于链表的长度。如果节点总数不是 k 的整数倍，那么请将最后剩余的节点保持原有顺序。\n\n【示例】\n输入：head = [1,2,3,4,5], k = 2 -> 输出：[2,1,4,3,5]",
    "intuition": "【分组检查 + 局部翻转】维护 prev 指向待翻转组的前驱，每次遍历 k 个节点检查剩余长度。若足够 k 个则断开并局部翻转，重新拼回主链表。",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(1)",
    "codeTemplates": {
      "java": "public ListNode reverseKGroup(ListNode head, int k) {\n    ListNode dummy = new ListNode(0);\n    dummy.next = head;\n    ListNode prev = dummy, end = dummy;\n    while (end.next != null) {\n        for (int i = 0; i < k && end != null; i++) end = end.next;\n        if (end == null) break;\n        ListNode start = prev.next, next = end.next;\n        end.next = null;\n        prev.next = reverse(start);\n        start.next = next;\n        prev = start;\n        end = prev;\n    }\n    return dummy.next;\n}\nprivate ListNode reverse(ListNode head) {\n    ListNode pre = null, cur = head;\n    while (cur != null) {\n        ListNode next = cur.next;\n        cur.next = pre;\n        pre = cur;\n        cur = next;\n    }\n    return pre;\n}",
      "python": "def reverseKGroup(head: Optional[ListNode], k: int) -> Optional[ListNode]:\n    dummy = ListNode(0, head)\n    prev = end = dummy\n    while end.next:\n        for _ in range(k):\n            if end: end = end.next\n        if not end: break\n        start, nxt = prev.next, end.next\n        end.next = None\n        prev.next = reverse(start)\n        start.next = nxt\n        prev = end = start\n    return dummy.next\n\ndef reverse(head):\n    pre, cur = None, head\n    while cur:\n        nxt = cur.next\n        cur.next = pre\n        pre = cur\n        cur = nxt\n    return pre"
    }
  },
  {
    "id": 138,
    "title": "随机链表的复制",
    "englishTitle": "Copy List with Random Pointer",
    "difficulty": "中等",
    "category": "链表",
    "description": "给你一个长度为 n 的链表，每个节点包含一个额外增加的随机指针 random ，该指针可以指向链表中的任何节点或空节点。构造该链表的 深拷贝 。\n\n【示例】\n输入：head = [[7,null],[13,0],[11,4],[10,2],[1,0]]\n输出：[[7,null],[13,0],[11,4],[10,2],[1,0]]",
    "intuition": "【哈希表映射】使用 HashMap<Node, Node> 建立原节点到新节点的映射；第二次遍历拼接 next 和 random 指针。",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "codeTemplates": {
      "java": "public Node copyRandomList(Node head) {\n    if (head == null) return null;\n    Map<Node, Node> map = new HashMap<>();\n    Node cur = head;\n    while (cur != null) {\n        map.put(cur, new Node(cur.val));\n        cur = cur.next;\n    }\n    cur = head;\n    while (cur != null) {\n        map.get(cur).next = map.get(cur.next);\n        map.get(cur).random = map.get(cur.random);\n        cur = cur.next;\n    }\n    return map.get(head);\n}",
      "python": "def copyRandomList(head: 'Optional[Node]') -> 'Optional[Node]':\n    if not head: return None\n    dic = {}\n    cur = head\n    while cur:\n        dic[cur] = Node(cur.val)\n        cur = cur.next\n    cur = head\n    while cur:\n        dic[cur].next = dic.get(cur.next)\n        dic[cur].random = dic.get(cur.random)\n        cur = cur.next\n    return dic[head]"
    }
  },
  {
    "id": 148,
    "title": "排序链表",
    "englishTitle": "Sort List",
    "difficulty": "中等",
    "category": "链表",
    "description": "给你链表的头节点 head ，请将其按升序排列并返回排序后的链表。\n要求：时间复杂度 O(n log n)，空间复杂度最好为 O(1)。\n\n【示例】\n输入：head = [4,2,1,3] -> 输出：[1,2,3,4]",
    "intuition": "【归并排序 (Merge Sort)】快慢指针找中点切断为两条子链表，分别递归排序，而后合并两个有序链表。",
    "timeComplexity": "O(N log N)",
    "spaceComplexity": "O(log N)",
    "codeTemplates": {
      "java": "public ListNode sortList(ListNode head) {\n    if (head == null || head.next == null) return head;\n    ListNode slow = head, fast = head.next;\n    while (fast != null && fast.next != null) { slow = slow.next; fast = fast.next.next; }\n    ListNode mid = slow.next; slow.next = null;\n    return merge(sortList(head), sortList(mid));\n}\nprivate ListNode merge(ListNode l1, ListNode l2) {\n    ListNode dummy = new ListNode(0), curr = dummy;\n    while (l1 != null && l2 != null) {\n        if (l1.val < l2.val) { curr.next = l1; l1 = l1.next; }\n        else { curr.next = l2; l2 = l2.next; }\n        curr = curr.next;\n    }\n    curr.next = (l1 != null) ? l1 : l2;\n    return dummy.next;\n}",
      "python": "def sortList(head: Optional[ListNode]) -> Optional[ListNode]:\n    if not head or not head.next: return head\n    slow, fast = head, head.next\n    while fast and fast.next: slow, fast = slow.next, fast.next.next\n    mid, slow.next = slow.next, None\n    left, right = sortList(head), sortList(mid)\n    dummy = curr = ListNode(0)\n    while left and right:\n        if left.val < right.val: curr.next, left = left, left.next\n        else: curr.next, right = right, right.next\n        curr = curr.next\n    curr.next = left or right\n    return dummy.next"
    }
  },
  {
    "id": 23,
    "title": "合并K个升序链表",
    "englishTitle": "Merge k Sorted Lists",
    "difficulty": "困难",
    "category": "链表",
    "description": "给你一个链表数组，每个链表都已经按升序排列。请你将所有链表合并到一个升序链表中，返回合并后的链表。\n\n【示例】\n输入：lists = [[1,4,5],[1,3,4],[2,6]] -> 输出：[1,1,2,3,4,4,5,6]",
    "intuition": "【小顶堆 PriorityQueue】把 k 个链表头节点放入小顶堆。每次弹出最小节点接入结果，并将 `.next` 节点压入堆中。",
    "timeComplexity": "O(N log K)",
    "spaceComplexity": "O(K)",
    "codeTemplates": {
      "java": "public ListNode mergeKLists(ListNode[] lists) {\n    if (lists == null || lists.length == 0) return null;\n    PriorityQueue<ListNode> pq = new PriorityQueue<>((a, b) -> Integer.compare(a.val, b.val));\n    for (ListNode node : lists) if (node != null) pq.add(node);\n    ListNode dummy = new ListNode(0), curr = dummy;\n    while (!pq.isEmpty()) {\n        ListNode minNode = pq.poll();\n        curr.next = minNode; curr = curr.next;\n        if (minNode.next != null) pq.add(minNode.next);\n    }\n    return dummy.next;\n}",
      "python": "def mergeKLists(lists: List[Optional[ListNode]]) -> Optional[ListNode]:\n    import heapq\n    heap = []\n    for i, node in enumerate(lists):\n        if node: heapq.heappush(heap, (node.val, i, node))\n    dummy = curr = ListNode(0)\n    while heap:\n        val, i, node = heapq.heappop(heap)\n        curr.next = node; curr = curr.next\n        if node.next: heapq.heappush(heap, (node.next.val, i, node.next))\n    return dummy.next"
    }
  },
  {
    "id": 146,
    "title": "LRU 缓存",
    "englishTitle": "LRU Cache",
    "difficulty": "中等",
    "category": "链表",
    "description": "请你设计并实现一个满足 LRU (最近最少使用) 缓存约束的数据结构。\n实现 LRUCache 类：\n- `LRUCache(int capacity)` 以正整数作为容量 capacity 初始化 LRU 缓存。\n- `int get(int key)` 如果关键字 key 存在于缓存中，则返回关键字的值，否则返回 -1 。\n- `void put(int key, int value)` 如果关键字已存在则变更其值；如果不存在，则插入该组 key-value。当缓存容量达到上限时，应当在写入新数据之前淘汰最久未使用的数据。\n`get` 和 `put` 必须以 O(1) 平均时间复杂度运行。",
    "intuition": "【HashMap + 双向链表】HashMap 提供 O(1) 查找；双向链表头部维护最新访问节点，尾部淘汰最久未访问节点。",
    "timeComplexity": "O(1)",
    "spaceComplexity": "O(Capacity)",
    "codeTemplates": {
      "java": "class LRUCache {\n    class Node { int key, value; Node prev, next; Node(int k, int v) { key = k; value = v; } }\n    private int cap;\n    private Map<Integer, Node> map = new HashMap<>();\n    private Node head = new Node(0, 0), tail = new Node(0, 0);\n    public LRUCache(int capacity) { this.cap = capacity; head.next = tail; tail.prev = head; }\n    public int get(int key) {\n        if (!map.containsKey(key)) return -1;\n        Node n = map.get(key); moveToHead(n); return n.value;\n    }\n    public void put(int key, int value) {\n        if (map.containsKey(key)) { Node n = map.get(key); n.value = value; moveToHead(n); }\n        else {\n            if (map.size() >= cap) { Node remove = tail.prev; removeNode(remove); map.remove(remove.key); }\n            Node n = new Node(key, value); map.put(key, n); addToHead(n);\n        }\n    }\n    private void removeNode(Node n) { n.prev.next = n.next; n.next.prev = n.prev; }\n    private void addToHead(Node n) { n.next = head.next; n.prev = head; head.next.prev = n; head.next = n; }\n    private void moveToHead(Node n) { removeNode(n); addToHead(n); }\n}",
      "python": "class LRUCache:\n    def __init__(self, capacity: int):\n        self.cap = capacity\n        self.cache = collections.OrderedDict()\n    def get(self, key: int) -> int:\n        if key not in self.cache: return -1\n        self.cache.move_to_end(key)\n        return self.cache[key]\n    def put(self, key: int, value: int) -> None:\n        if key in self.cache: self.cache.move_to_end(key)\n        self.cache[key] = value\n        if len(self.cache) > self.cap: self.cache.popitem(last=False)"
    }
  },
  {
    "id": 94,
    "title": "二叉树的中序遍历",
    "englishTitle": "Binary Tree Inorder Traversal",
    "difficulty": "简单",
    "category": "二叉树",
    "description": "给定一个二叉树的根节点 root ，返回它的中序遍历（按 “左子树 -> 根节点 -> 右子树” 的顺序访问）。\n\n【示例】\n输入：root = [1,null,2,3] -> 输出：[1,3,2]",
    "intuition": "【DFS 递归 / 显式栈】中序遍历顺序为 左子树 -> 当前根节点 -> 右子树。",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "codeTemplates": {
      "java": "public List<Integer> inorderTraversal(TreeNode root) {\n    List<Integer> res = new ArrayList<>(); inorder(root, res); return res;\n}\nprivate void inorder(TreeNode root, List<Integer> res) {\n    if (root == null) return;\n    inorder(root.left, res); res.add(root.val); inorder(root.right, res);\n}",
      "python": "def inorderTraversal(root: Optional[TreeNode]) -> List[int]:\n    res = []\n    def dfs(node):\n        if not node: return\n        dfs(node.left); res.append(node.val); dfs(node.right)\n    dfs(root); return res"
    }
  },
  {
    "id": 104,
    "title": "二叉树的最大深度",
    "englishTitle": "Maximum Depth of Binary Tree",
    "difficulty": "简单",
    "category": "二叉树",
    "description": "给定一个二叉树 root ，返回其最大深度（从根节点到最远叶子节点的最长路径上的节点数）。\n\n【示例】\n输入：root = [3,9,20,null,null,15,7] -> 输出：3",
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
    "description": "给你一棵二叉树的根节点 root ，翻转这棵二叉树（左右子树互换），并返回其根节点。\n\n【示例】\n输入：root = [4,2,7,1,3,6,9] -> 输出：[4,7,2,9,6,3,1]",
    "intuition": "【镜像递归】交换当前节点的左右子树 `root.left <-> root.right`，而后递归镜像处理。",
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
    "description": "给你一个二叉树的根节点 root ，检查它是否轴对称（左右两半关于中心镜像对称）。\n\n【示例】\n输入：root = [1,2,2,3,4,4,3] -> 输出：true",
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
    "description": "给定一棵二叉树，你需要计算它的直径长度。一棵二叉树的直径长度是任意两个节点路径长度中的最大值。这条路径可能穿过也可能不穿过根节点。\n\n【示例】\n输入：root = [1,2,3,4,5] -> 输出：3 (路径 [4,2,1,3] 或 [5,2,1,3] 长度为 3)",
    "intuition": "【全局 max 维护路径】穿过该节点的最长路径 = leftDepth + rightDepth。在计算深度的后序 DFS 中更新全局最大值。",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "codeTemplates": {
      "java": "private int maxD = 0;\npublic int diameterOfBinaryTree(TreeNode root) {\n    depth(root); return maxD;\n}\nprivate int depth(TreeNode node) {\n    if (node == null) return 0;\n    int L = depth(node.left), R = depth(node.right);\n    maxD = Math.max(maxD, L + R);\n    return Math.max(L, R) + 1;\n}",
      "python": "def diameterOfBinaryTree(root: Optional[TreeNode]) -> int:\n    max_d = 0\n    def depth(node):\n        nonlocal max_d\n        if not node: return 0\n        L, R = depth(node.left), depth(node.right)\n        max_d = max(max_d, L + R)\n        return max(L, R) + 1\n    depth(root); return max_d"
    }
  },
  {
    "id": 102,
    "title": "二叉树的层序遍历",
    "englishTitle": "Binary Tree Level Order Traversal",
    "difficulty": "中等",
    "category": "二叉树",
    "description": "给你二叉树的根节点 root ，返回其节点值的层序遍历。（即逐层从左到右访问所有节点）。\n\n【示例】\n输入：root = [3,9,20,null,null,15,7] -> 输出：[[3],[9,20],[15,7]]",
    "intuition": "【Queue BFS】维护 Queue，按当前 queue.size() 取出该层所有节点，把值加入列表并将左右子节点压入 Queue。",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "codeTemplates": {
      "java": "public List<List<Integer>> levelOrder(TreeNode root) {\n    List<List<Integer>> res = new ArrayList<>(); if (root == null) return res;\n    Queue<TreeNode> q = new LinkedList<>(); q.offer(root);\n    while (!q.isEmpty()) {\n        int sz = q.size(); List<Integer> level = new ArrayList<>();\n        for (int i = 0; i < sz; i++) {\n            TreeNode n = q.poll(); level.add(n.val);\n            if (n.left != null) q.offer(n.left);\n            if (n.right != null) q.offer(n.right);\n        }\n        res.add(level);\n    }\n    return res;\n}",
      "python": "def levelOrder(root: Optional[TreeNode]) -> List[List[int]]:\n    if not root: return []\n    res, q = [], collections.deque([root])\n    while q:\n        level = []\n        for _ in range(len(q)):\n            n = q.popleft(); level.append(n.val)\n            if n.left: q.append(n.left)\n            if n.right: q.append(n.right)\n        res.append(level)\n    return res"
    }
  },
  {
    "id": 108,
    "title": "将有序数组转换为二叉搜索树",
    "englishTitle": "Convert Sorted Array to Binary Search Tree",
    "difficulty": "简单",
    "category": "二叉树",
    "description": "给你一个整数数组 nums ，其中元素已经按 升序 排列，请你将其转换为一棵 高度平衡 二叉搜索树。\n\n【示例】\n输入：nums = [-10,-3,0,5,9] -> 输出：[0,-3,9,-10,null,5]",
    "intuition": "【分治/中点递归】升序数组的中点 mid = (left + right) / 2 作为根节点，左半数组递归构建左子树，右半数组递归构建右子树。",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(log N)",
    "codeTemplates": {
      "java": "public TreeNode sortedArrayToBST(int[] nums) {\n    return helper(nums, 0, nums.length - 1);\n}\nprivate TreeNode helper(int[] nums, int left, int right) {\n    if (left > right) return null;\n    int mid = left + (right - left) / 2;\n    TreeNode root = new TreeNode(nums[mid]);\n    root.left = helper(nums, left, mid - 1);\n    root.right = helper(nums, mid + 1, right);\n    return root;\n}",
      "python": "def sortedArrayToBST(nums: List[int]) -> Optional[TreeNode]:\n    def build(l, r):\n        if l > r: return None\n        mid = (l + r) // 2\n        root = TreeNode(nums[mid])\n        root.left = build(l, mid - 1)\n        root.right = build(mid + 1, r)\n        return root\n    return build(0, len(nums) - 1)"
    }
  },
  {
    "id": 98,
    "title": "验证二叉搜索树",
    "englishTitle": "Validate Binary Search Tree",
    "difficulty": "中等",
    "category": "二叉树",
    "description": "给你一个二叉树的根节点 root ，判断其是否是一个有效的二叉搜索树(BST)。\n有效 BST 满足：节点的左子树只包含小于当前节点的数；右子树只包含大于当前节点的数；左右子树本身也必须是二叉搜索树。\n\n【示例】\n输入：root = [2,1,3] -> 输出：true",
    "intuition": "【区间边界 (lower, upper) 传递】递归向下传递允许的值域区间 `validate(node, lower, upper)`。",
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
    "description": "给定一个二叉搜索树的根节点 root ，和一个整数 k ，请设计一个算法查找其中第 k 个最小的元素（从 1 开始计数）。\n\n【示例】\n输入：root = [3,1,4,null,2], k = 1 -> 输出：1",
    "intuition": "【BST 中序遍历】BST 的中序遍历（左-根-右）结果按升序排列。递归或迭代访问中序节点，计数到第 k 个即为答案。",
    "timeComplexity": "O(H + K)",
    "spaceComplexity": "O(H)",
    "codeTemplates": {
      "java": "private int count = 0, res = 0;\npublic int kthSmallest(TreeNode root, int k) {\n    count = k;\n    inorder(root);\n    return res;\n}\nprivate void inorder(TreeNode root) {\n    if (root == null) return;\n    inorder(root.left);\n    if (--count == 0) {\n        res = root.val;\n        return;\n    }\n    inorder(root.right);\n}",
      "python": "def kthSmallest(root: Optional[TreeNode], k: int) -> int:\n    stack = []\n    cur = root\n    while cur or stack:\n        while cur:\n            stack.append(cur)\n            cur = cur.left\n        cur = stack.pop()\n        k -= 1\n        if k == 0: return cur.val\n        cur = cur.right"
    }
  },
  {
    "id": 199,
    "title": "二叉树的右视图",
    "englishTitle": "Binary Tree Right Side View",
    "difficulty": "中等",
    "category": "二叉树",
    "description": "给定一个二叉树的根节点 root，想象自己站在它的右侧，按照从顶部到底部的顺序，返回从右侧所能看到的节点值。\n\n【示例】\n输入：root = [1,2,3,null,5,null,4] -> 输出：[1,3,4]",
    "intuition": "【BFS 层序遍历 / DFS 优先右子树】BFS 遍历每层时取最后一个节点；或 DFS（根-右-左）遍历，当递归深度等于结果数组长度时加入该值。",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "codeTemplates": {
      "java": "public List<Integer> rightSideView(TreeNode root) {\n    List<Integer> res = new ArrayList<>();\n    if (root == null) return res;\n    Queue<TreeNode> queue = new LinkedList<>();\n    queue.offer(root);\n    while (!queue.isEmpty()) {\n        int size = queue.size();\n        for (int i = 0; i < size; i++) {\n            TreeNode node = queue.poll();\n            if (i == size - 1) res.add(node.val);\n            if (node.left != null) queue.offer(node.left);\n            if (node.right != null) queue.offer(node.right);\n        }\n    }\n    return res;\n}",
      "python": "def rightSideView(root: Optional[TreeNode]) -> List[int]:\n    res = []\n    def dfs(node, depth):\n        if not node: return\n        if depth == len(res): res.append(node.val)\n        dfs(node.right, depth + 1)\n        dfs(node.left, depth + 1)\n    dfs(root, 0)\n    return res"
    }
  },
  {
    "id": 114,
    "title": "二叉树展开为链表",
    "englishTitle": "Flatten Binary Tree to Linked List",
    "difficulty": "中等",
    "category": "二叉树",
    "description": "给你二叉树的根结点 root ，请你将它展开为一个单链表：\n1. 展开后的单链表应该同样使用 TreeNode ，其中 right 子节点指针指向链表中下一个节点，而 left 子节点指针始终为 null 。\n2. 展开后的单链表应该与二叉树先序遍历顺序相同。\n\n【示例】\n输入：root = [1,2,5,3,4,null,6] -> 输出：[1,null,2,null,3,null,4,null,5,null,6]",
    "intuition": "【寻找左子树的最右前驱】若左子树存在，将其最右节点连接到当前节点的右子树，而后将左子树移至右侧。",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(1)",
    "codeTemplates": {
      "java": "public void flatten(TreeNode root) {\n    TreeNode curr = root;\n    while (curr != null) {\n        if (curr.left != null) {\n            TreeNode pred = curr.left;\n            while (pred.right != null) pred = pred.right;\n            pred.right = curr.right;\n            curr.right = curr.left;\n            curr.left = null;\n        }\n        curr = curr.right;\n    }\n}",
      "python": "def flatten(root: Optional[TreeNode]) -> None:\n    curr = root\n    while curr:\n        if curr.left:\n            pred = curr.left\n            while pred.right: pred = pred.right\n            pred.right = curr.right\n            curr.right = curr.left\n            curr.left = None\n        curr = curr.right"
    }
  },
  {
    "id": 105,
    "title": "从前序与中序遍历序列构造二叉树",
    "englishTitle": "Construct Binary Tree from Preorder and Inorder Traversal",
    "difficulty": "中等",
    "category": "二叉树",
    "description": "给定两个整数数组 preorder 和 inorder ，其中 preorder 是二叉树的前序遍历，inorder 是同一棵树的中序遍历，请构造二叉树并返回其根节点。\n\n【示例】\n输入：preorder = [3,9,20,15,7], inorder = [9,3,15,20,7] -> 输出：[3,9,20,null,null,15,7]",
    "intuition": "【前序找根 + 中序切分】preorder[0] 为根节点。在中序遍历找到根节点位置，切分为左右子树并递归构建。",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "codeTemplates": {
      "java": "private Map<Integer, Integer> inMap = new HashMap<>();\npublic TreeNode buildTree(int[] preorder, int[] inorder) {\n    for (int i = 0; i < inorder.length; i++) inMap.put(inorder[i], i);\n    return helper(preorder, 0, preorder.length - 1, 0);\n}\nprivate TreeNode helper(int[] pre, int pS, int pE, int iS) {\n    if (pS > pE) return null;\n    TreeNode root = new TreeNode(pre[pS]);\n    int inRoot = inMap.get(root.val), leftLen = inRoot - iS;\n    root.left = helper(pre, pS + 1, pS + leftLen, iS);\n    root.right = helper(pre, pS + leftLen + 1, pE, inRoot + 1);\n    return root;\n}",
      "python": "def buildTree(preorder: List[int], inorder: List[int]) -> Optional[TreeNode]:\n    in_map = {v: i for i, v in enumerate(inorder)}\n    def helper(pS, pE, iS):\n        if pS > pE: return None\n        root_val = preorder[pS]\n        root = TreeNode(root_val)\n        in_root = in_map[root_val]; left_len = in_root - iS\n        root.left = helper(pS + 1, pS + left_len, iS)\n        root.right = helper(pS + left_len + 1, pE, in_root + 1)\n        return root\n    return helper(0, len(preorder) - 1, 0)"
    }
  },
  {
    "id": 437,
    "title": "路径总和 III",
    "englishTitle": "Path Sum III",
    "difficulty": "中等",
    "category": "二叉树",
    "description": "给定一个二叉树的根节点 root ，和一个整数 targetSum ，求该二叉树里节点值之和等于 targetSum 的路径的数目。\n路径不需要从根节点开始，也不需要在叶子节点结束，但是路径方向必须是向下的（只能从父节点到子节点）。\n\n【示例】\n输入：root = [10,5,-3,3,2,null,11,3,-2,null,1], targetSum = 8 -> 输出：3",
    "intuition": "【树上前缀和 + HashMap 回溯】维护前缀和 Map。递归向下累加 currSum，在 Map 查 `currSum - targetSum` 频次。",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "codeTemplates": {
      "java": "private Map<Long, Integer> prefix = new HashMap<>();\npublic int pathSum(TreeNode root, int targetSum) {\n    prefix.put(0L, 1); return dfs(root, 0L, targetSum);\n}\nprivate int dfs(TreeNode node, long curr, int target) {\n    if (node == null) return 0;\n    curr += node.val;\n    int res = prefix.getOrDefault(curr - target, 0);\n    prefix.put(curr, prefix.getOrDefault(curr, 0) + 1);\n    res += dfs(node.left, curr, target) + dfs(node.right, curr, target);\n    prefix.put(curr, prefix.get(curr) - 1);\n    return res;\n}",
      "python": "def pathSum(root: Optional[TreeNode], targetSum: int) -> int:\n    prefix = collections.defaultdict(int)\n    prefix[0] = 1\n    def dfs(node, curr):\n        if not node: return 0\n        curr += node.val\n        res = prefix[curr - targetSum]\n        prefix[curr] += 1\n        res += dfs(node.left, curr) + dfs(node.right, curr)\n        prefix[curr] -= 1\n        return res\n    return dfs(root, 0)"
    }
  },
  {
    "id": 236,
    "title": "二叉树的最近公共祖先",
    "englishTitle": "Lowest Common Ancestor of a Binary Tree",
    "difficulty": "中等",
    "category": "二叉树",
    "description": "给定一个二叉树, 找到该树中两个指定节点 p 和 q 的最近公共祖先 (LCA)。\n最近公共祖先指：在树中同时拥有 p 和 q 为子孙的深度最大的那个节点（一个节点也可以是它自己的子孙）。\n\n【示例】\n输入：root = [3,5,1,6,2,0,8,null,null,7,4], p = 5, q = 1 -> 输出：节点 3",
    "intuition": "【后序 DFS】若当前节点为 null 或等于 p/q 直接返回。若左右子树递归返回值均不为空，说明当前节点即为 LCA！",
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
    "description": "二叉树中的路径被定义为一条节点序列，序列中每对相邻节点之间都存在一条边。同一个节点在一条路径序列中至多出现一次。\n路径和是路径中各节点值的总和。给你一个二叉树的根节点 root ，返回其最大路径和。\n\n【示例】\n输入：root = [-10,9,20,null,null,15,7] -> 输出：42 (最优路径为 15 -> 20 -> 7，和为 42)",
    "intuition": "【树形 DP 递归】单侧最大贡献 = max(0, maxGain(child))。穿过该节点的最长路径为 `val + leftGain + rightGain`，用于更新全局最大值。",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "codeTemplates": {
      "java": "private int maxSum = Integer.MIN_VALUE;\npublic int maxPathSum(TreeNode root) {\n    maxGain(root); return maxSum;\n}\nprivate int maxGain(TreeNode node) {\n    if (node == null) return 0;\n    int L = Math.max(maxGain(node.left), 0);\n    int R = Math.max(maxGain(node.right), 0);\n    maxSum = Math.max(maxSum, node.val + L + R);\n    return node.val + Math.max(L, R);\n}",
      "python": "def maxPathSum(root: Optional[TreeNode]) -> int:\n    max_s = float('-inf')\n    def maxGain(node):\n        nonlocal max_s\n        if not node: return 0\n        L = max(maxGain(node.left), 0)\n        R = max(maxGain(node.right), 0)\n        max_s = max(max_s, node.val + L + R)\n        return node.val + max(L, R)\n    maxGain(root)\n    return max_s"
    }
  },
  {
    "id": 200,
    "title": "岛屿数量",
    "englishTitle": "Number of Islands",
    "difficulty": "中等",
    "category": "图论",
    "description": "给你一个由 '1'（陆地）和 '0'（水）组成的的二维网格，请你计算网格中岛屿的数量。\n岛屿总是被水包围，并且是由相邻的陆地在水平方向或垂直方向连接而成的。你可以假设网格的四个边均被水包围。\n\n【示例】\n输入：grid = [\n  [\"1\",\"1\",\"0\",\"0\",\"0\"],\n  [\"1\",\"1\",\"0\",\"0\",\"0\"],\n  [\"0\",\"0\",\"1\",\"0\",\"0\"],\n  [\"0\",\"0\",\"0\",\"1\",\"1\"]\n] -> 输出：3",
    "intuition": "【Grid BFS / DFS 沉岛】遇 '1' 计数器+1，启动 BFS 将相邻四连通的 '1' 染色淹没置为 '0'。",
    "timeComplexity": "O(M * N)",
    "spaceComplexity": "O(M * N)",
    "codeTemplates": {
      "java": "public int numIslands(char[][] grid) {\n    int count = 0;\n    for (int r = 0; r < grid.length; r++) {\n        for (int c = 0; c < grid[0].length; c++) {\n            if (grid[r][c] == '1') { count++; dfs(grid, r, c); }\n        }\n    }\n    return count;\n}\nprivate void dfs(char[][] g, int r, int c) {\n    if (r < 0 || r >= g.length || c < 0 || c >= g[0].length || g[r][c] != '1') return;\n    g[r][c] = '0'; dfs(g, r-1, c); dfs(g, r+1, c); dfs(g, r, c-1); dfs(g, r, c+1);\n}",
      "python": "def numIslands(grid: List[List[str]]) -> int:\n    cnt = 0\n    def dfs(r, c):\n        if r < 0 or r >= len(grid) or c < 0 or c >= len(grid[0]) or grid[r][c] != '1': return\n        grid[r][c] = '0'\n        dfs(r-1, c); dfs(r+1, c); dfs(r, c-1); dfs(r, c+1)\n    for r in range(len(grid)):\n        for c in range(len(grid[0])):\n            if grid[r][c] == '1': cnt += 1; dfs(r, c)\n    return cnt"
    }
  },
  {
    "id": 994,
    "title": "腐烂的橘子",
    "englishTitle": "Rotting Oranges",
    "difficulty": "中等",
    "category": "图论",
    "description": "在给定的 m x n 网格 grid 中，0 代表空单元格，1 代表新鲜橘子，2 代表腐烂的橘子。每分钟腐烂的橘子会使其上下左右相邻的新鲜橘子腐烂。返回直到单元格中没有新鲜橘子为止所经过的最少分钟数。如果不可能，返回 -1 。\n\n【示例】\n输入：grid = [[2,1,1],[1,1,0],[0,1,1]] -> 输出：4",
    "intuition": "【多源 BFS】先将所有初始腐烂橘子 (值为 2) 的坐标入队，统计新鲜橘子数量。多源 BFS 按层向四周扩散，直到队伍为空或新鲜橘子清零。",
    "timeComplexity": "O(M * N)",
    "spaceComplexity": "O(M * N)",
    "codeTemplates": {
      "java": "public int orangesRotting(int[][] grid) {\n    int m = grid.length, n = grid[0].length;\n    Queue<int[]> queue = new LinkedList<>();\n    int fresh = 0;\n    for (int i = 0; i < m; i++) {\n        for (int j = 0; j < n; j++) {\n            if (grid[i][j] == 2) queue.offer(new int[]{i, j});\n            else if (grid[i][j] == 1) fresh++;\n        }\n    }\n    if (fresh == 0) return 0;\n    int minutes = 0;\n    int[][] dirs = {{1,0}, {-1,0}, {0,1}, {0,-1}};\n    while (!queue.isEmpty() && fresh > 0) {\n        minutes++;\n        int size = queue.size();\n        for (int k = 0; k < size; k++) {\n            int[] cur = queue.poll();\n            for (int[] d : dirs) {\n                int r = cur[0] + d[0], c = cur[1] + d[1];\n                if (r >= 0 && r < m && c >= 0 && c < n && grid[r][c] == 1) {\n                    grid[r][c] = 2;\n                    fresh--;\n                    queue.offer(new int[]{r, c});\n                }\n            }\n        }\n    }\n    return fresh == 0 ? minutes : -1;\n}",
      "python": "def orangesRotting(grid: List[List[int]]) -> int:\n    from collections import deque\n    m, n = len(grid), len(grid[0])\n    queue = deque()\n    fresh = 0\n    for i in range(m):\n        for j in range(n):\n            if grid[i][j] == 2: queue.append((i, j))\n            elif grid[i][j] == 1: fresh += 1\n    if fresh == 0: return 0\n    minutes = 0\n    while queue and fresh > 0:\n        minutes += 1\n        for _ in range(len(queue)):\n            r, c = queue.popleft()\n            for dr, dc in [(1,0),(-1,0),(0,1),(0,-1)]:\n                nr, nc = r + dr, c + dc\n                if 0 <= nr < m and 0 <= nc < n and grid[nr][nc] == 1:\n                    grid[nr][nc] = 2\n                    fresh -= 1\n                    queue.append((nr, nc))\n    return minutes if fresh == 0 else -1"
    }
  },
  {
    "id": 207,
    "title": "课程表",
    "englishTitle": "Course Schedule",
    "difficulty": "中等",
    "category": "图论",
    "description": "你这个学期必须选修 numCourses 门课程，记为 0 到 numCourses - 1 。在选修某些课程之前需要一些先修课程。先修课程按数组 prerequisites 给出，其中 prerequisites[i] = [a, b] ，表示如果要学习课程 a 则必须先学习课程 b 。\n请你判断是否可能完成所有课程的学习？如果存在环形依赖则无法完成。\n\n【示例】\n输入：numCourses = 2, prerequisites = [[1,0]] -> 输出：true (学完 0 即可学 1)",
    "intuition": "【拓扑排序 BFS】计算各节点入度。将入度为 0 的节点加入 Queue，弹出时使其邻居入度减 1。最终节点数等于总课程数则有解。",
    "timeComplexity": "O(V + E)",
    "spaceComplexity": "O(V + E)",
    "codeTemplates": {
      "java": "public boolean canFinish(int numCourses, int[][] prerequisites) {\n    int[] inDegree = new int[numCourses];\n    List<List<Integer>> adj = new ArrayList<>();\n    for (int i = 0; i < numCourses; i++) adj.add(new ArrayList<>());\n    for (int[] p : prerequisites) { inDegree[p[0]]++; adj.get(p[1]).add(p[0]); }\n    Queue<Integer> q = new LinkedList<>();\n    for (int i = 0; i < numCourses; i++) if (inDegree[i] == 0) q.offer(i);\n    int count = 0;\n    while (!q.isEmpty()) {\n        int curr = q.poll(); count++;\n        for (int next : adj.get(curr)) if (--inDegree[next] == 0) q.offer(next);\n    }\n    return count == numCourses;\n}",
      "python": "def canFinish(numCourses: int, prerequisites: List[List[int]]) -> bool:\n    in_deg = [0] * numCourses\n    adj = collections.defaultdict(list)\n    for cur, pre in prerequisites: in_deg[cur] += 1; adj[pre].append(cur)\n    q = collections.deque([i for i in range(numCourses) if in_deg[i] == 0])\n    cnt = 0\n    while q:\n        curr = q.popleft(); cnt += 1\n        for nxt in adj[curr]:\n            in_deg[nxt] -= 1\n            if in_deg[nxt] == 0: q.append(nxt)\n    return cnt == numCourses"
    }
  },
  {
    "id": 208,
    "title": "实现 Trie (前缀树)",
    "englishTitle": "Implement Trie (Prefix Tree)",
    "difficulty": "中等",
    "category": "图论",
    "description": "Trie（发音类似 \"try\"）或前缀树是一种树形数据结构，用于高效地存储和检索字符串数据集中的键。\n请实现 Trie 类：\n- `Trie()` 初始化前缀树对象。\n- `void insert(String word)` 向前缀树中插入字符串 word 。\n- `boolean search(String word)` 如果字符串 word 在前缀树中，返回 true ；否则返回 false 。\n- `boolean startsWith(String prefix)` 如果之前已经插入的字符串 word 的前缀之一为 prefix ，返回 true 。",
    "intuition": "【26 叉树节点 TrieNode】每个节点包含 `children[26]` 和 `isEnd` 标志。字符串字符逐位向树枝匹配扩展。",
    "timeComplexity": "O(L)",
    "spaceComplexity": "O(L * 26)",
    "codeTemplates": {
      "java": "class Trie {\n    class TrieNode {\n        TrieNode[] children = new TrieNode[26];\n        boolean isEnd = false;\n    }\n    private TrieNode root = new TrieNode();\n    public void insert(String word) {\n        TrieNode node = root;\n        for (char c : word.toCharArray()) {\n            if (node.children[c - 'a'] == null) node.children[c - 'a'] = new TrieNode();\n            node = node.children[c - 'a'];\n        }\n        node.isEnd = true;\n    }\n    public boolean search(String word) {\n        TrieNode node = find(word);\n        return node != null && node.isEnd;\n    }\n    public boolean startsWith(String prefix) {\n        return find(prefix) != null;\n    }\n    private TrieNode find(String s) {\n        TrieNode node = root;\n        for (char c : s.toCharArray()) {\n            if (node.children[c - 'a'] == null) return null;\n            node = node.children[c - 'a'];\n        }\n        return node;\n    }\n}",
      "python": "class Trie:\n    def __init__(self):\n        self.children = {}\n        self.is_end = False\n    def insert(self, word: str) -> None:\n        node = self\n        for c in word:\n            if c not in node.children: node.children[c] = Trie()\n            node = node.children[c]\n        node.is_end = True\n    def search(self, word: str) -> bool:\n        node = self._find(word)\n        return node is not None and node.is_end\n    def startsWith(self, prefix: str) -> bool:\n        return self._find(prefix) is not None\n    def _find(self, prefix):\n        node = self\n        for c in prefix:\n            if c not in node.children: return None\n            node = node.children[c]\n        return node"
    }
  },
  {
    "id": 46,
    "title": "全排列",
    "englishTitle": "Permutations",
    "difficulty": "中等",
    "category": "回溯",
    "description": "给定一个不含重复数字的数组 nums ，返回其所有可能的全排列 。你可以按任意顺序返回答案。\n\n【示例】\n输入：nums = [1,2,3]\n输出：[[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]",
    "intuition": "【used 数组记录】决策树每层选未使用的数字压入 path，回溯时撤销选择 `used[i]=false`。",
    "timeComplexity": "O(N * N!)",
    "spaceComplexity": "O(N)",
    "codeTemplates": {
      "java": "public List<List<Integer>> permute(int[] nums) {\n    List<List<Integer>> res = new ArrayList<>();\n    backtrack(res, new ArrayList<>(), nums, new boolean[nums.length]); return res;\n}\nprivate void backtrack(List<List<Integer>> res, List<Integer> path, int[] nums, boolean[] used) {\n    if (path.size() == nums.length) { res.add(new ArrayList<>(path)); return; }\n    for (int i = 0; i < nums.length; i++) {\n        if (used[i]) continue;\n        used[i] = true; path.add(nums[i]); backtrack(res, path, nums, used);\n        path.remove(path.size() - 1); used[i] = false;\n    }\n}",
      "python": "def permute(nums: List[int]) -> List[List[int]]:\n    res = []\n    def backtrack(path, used):\n        if len(path) == len(nums): res.append(path[:]); return\n        for i in range(len(nums)):\n            if not used[i]:\n                used[i] = True; path.append(nums[i]); backtrack(path, used)\n                path.pop(); used[i] = False\n    backtrack([], [False] * len(nums)); return res"
    }
  },
  {
    "id": 78,
    "title": "子集",
    "englishTitle": "Subsets",
    "difficulty": "中等",
    "category": "回溯",
    "description": "给你一个整数数组 nums ，数组中的元素互不相同 。返回该数组所有可能的子集（幂集）。解集不能包含重复的子集。\n\n【示例】\n输入：nums = [1,2,3]\n输出：[[],[1],[2],[1,2],[3],[1,3],[2,3],[1,2,3]]",
    "intuition": "【所有节点皆解】遍历 start 索引。每个递归入口将 path 深拷贝加入结果 res。",
    "timeComplexity": "O(N * 2^N)",
    "spaceComplexity": "O(N)",
    "codeTemplates": {
      "java": "public List<List<Integer>> subsets(int[] nums) {\n    List<List<Integer>> res = new ArrayList<>(); backtrack(res, new ArrayList<>(), nums, 0); return res;\n}\nprivate void backtrack(List<List<Integer>> res, List<Integer> path, int[] nums, int start) {\n    res.add(new ArrayList<>(path));\n    for (int i = start; i < nums.length; i++) {\n        path.add(nums[i]); backtrack(res, path, nums, i + 1); path.remove(path.size() - 1);\n    }\n}",
      "python": "def subsets(nums: List[int]) -> List[List[int]]:\n    res = []\n    def backtrack(start, path):\n        res.append(path[:])\n        for i in range(start, len(nums)):\n            path.append(nums[i]); backtrack(i + 1, path); path.pop()\n    backtrack(0, []); return res"
    }
  },
  {
    "id": 17,
    "title": "电话号码的字母组合",
    "englishTitle": "Letter Combinations of a Phone Number",
    "difficulty": "中等",
    "category": "回溯",
    "description": "给定一个仅包含数字 2-9 的字符串 digits，返回所有它能表示的字母组合。按九宫格按键映射（如 2 对应 \"abc\"，3 对应 \"def\"）。\n\n【示例】\n输入：digits = \"23\" -> 输出：[\"ad\",\"ae\",\"af\",\"bd\",\"be\",\"bf\",\"cd\",\"ce\",\"cf\"]",
    "intuition": "【按层映射 DFS 回溯】数字 -> 字母映射表。按 index 逐层选择当前数字对应的字母递归，达到长度时归纳结果。",
    "timeComplexity": "O(3^N * 4^M)",
    "spaceComplexity": "O(N + M)",
    "codeTemplates": {
      "java": "private String[] map = {\"\", \"\", \"abc\", \"def\", \"ghi\", \"jkl\", \"mno\", \"pqrs\", \"tuv\", \"wxyz\"};\npublic List<String> letterCombinations(String digits) {\n    List<String> res = new ArrayList<>(); if (digits.isEmpty()) return res;\n    backtrack(res, new StringBuilder(), digits, 0);\n    return res;\n}\nprivate void backtrack(List<String> res, StringBuilder sb, String digits, int idx) {\n    if (idx == digits.length()) { res.add(sb.toString()); return; }\n    String letters = map[digits.charAt(idx) - '0'];\n    for (char c : letters.toCharArray()) {\n        sb.append(c); backtrack(res, sb, digits, idx + 1); sb.deleteCharAt(sb.length() - 1);\n    }\n}",
      "python": "def letterCombinations(digits: str) -> List[str]:\n    if not digits: return []\n    mapping = {\"2\":\"abc\", \"3\":\"def\", \"4\":\"ghi\", \"5\":\"jkl\", \"6\":\"mno\", \"7\":\"pqrs\", \"8\":\"tuv\", \"9\":\"wxyz\"}\n    res = []\n    def backtrack(idx, path):\n        if idx == len(digits): res.append(\"\".join(path)); return\n        for c in mapping[digits[idx]]: path.append(c); backtrack(idx + 1, path); path.pop()\n    backtrack(0, []); return res"
    }
  },
  {
    "id": 39,
    "title": "组合总和",
    "englishTitle": "Combination Sum",
    "difficulty": "中等",
    "category": "回溯",
    "description": "给你一个无重复元素的整数数组 candidates 和一个目标整数 target ，找出 candidates 中可以使数字和为目标数 target 的所有不同组合。\ncandidates 中的同一个数字可以无限制重复被选取 。如果至少一个数字的被选数量不同，则两种组合是不同的。\n\n【示例】\n输入：candidates = [2,3,6,7], target = 7 -> 输出：[[2,2,3],[7]]",
    "intuition": "【可重复选择回溯 + 剪枝】遍历 start 索引。因为允许重复使用当前元素，下一层 start 仍传入 `i`。",
    "timeComplexity": "O(N^(Target/Min))",
    "spaceComplexity": "O(Target/Min)",
    "codeTemplates": {
      "java": "public List<List<Integer>> combinationSum(int[] candidates, int target) {\n    List<List<Integer>> res = new ArrayList<>(); Arrays.sort(candidates);\n    backtrack(res, new ArrayList<>(), candidates, target, 0); return res;\n}\nprivate void backtrack(List<List<Integer>> res, List<Integer> path, int[] cand, int rem, int start) {\n    if (rem == 0) { res.add(new ArrayList<>(path)); return; }\n    for (int i = start; i < cand.length; i++) {\n        if (cand[i] > rem) break;\n        path.add(cand[i]); backtrack(res, path, cand, rem - cand[i], i); path.remove(path.size() - 1);\n    }\n}",
      "python": "def combinationSum(candidates: List[int], target: int) -> List[List[int]]:\n    res = []; candidates.sort()\n    def backtrack(start, rem, path):\n        if rem == 0: res.append(path[:]); return\n        for i in range(start, len(candidates)):\n            if candidates[i] > rem: break\n            path.append(candidates[i]); backtrack(i, rem - candidates[i], path); path.pop()\n    backtrack(0, target, []); return res"
    }
  },
  {
    "id": 22,
    "title": "括号生成",
    "englishTitle": "Generate Parentheses",
    "difficulty": "中等",
    "category": "回溯",
    "description": "数字 n 代表生成括号的对数，请你设计一个函数，用于能够生成所有可能的并且有效的括号组合。\n\n【示例】\n输入：n = 3 -> 输出：[\"((()))\",\"(()())\",\"(())()\",\"()(())\",\"()()()\"]",
    "intuition": "【左/右括号计数剪枝】left < n 时可加 '('；right < left 时可加 ')'。达 2*n 长度收集结果。",
    "timeComplexity": "O(4^N / sqrt(N))",
    "spaceComplexity": "O(N)",
    "codeTemplates": {
      "java": "public List<String> generateParenthesis(int n) {\n    List<String> res = new ArrayList<>(); backtrack(res, new StringBuilder(), 0, 0, n); return res;\n}\nprivate void backtrack(List<String> res, StringBuilder sb, int l, int r, int max) {\n    if (sb.length() == max * 2) { res.add(sb.toString()); return; }\n    if (l < max) { sb.append('('); backtrack(res, sb, l + 1, r, max); sb.deleteCharAt(sb.length() - 1); }\n    if (r < l) { sb.append(')'); backtrack(res, sb, l, r + 1, max); sb.deleteCharAt(sb.length() - 1); }\n}",
      "python": "def generateParenthesis(n: int) -> List[str]:\n    res = []\n    def backtrack(l, r, path):\n        if len(path) == 2 * n: res.append(\"\".join(path)); return\n        if l < n: path.append('('); backtrack(l + 1, r, path); path.pop()\n        if r < l: path.append(')'); backtrack(l, r + 1, path); path.pop()\n    backtrack(0, 0, []); return res"
    }
  },
  {
    "id": 79,
    "title": "单词搜索",
    "englishTitle": "Word Search",
    "difficulty": "中等",
    "category": "回溯",
    "description": "给定一个 m x n 二维字符网格 board 和一个字符串单词 word 。如果 word 存在于网格中，返回 true ；否则，返回 false 。\n单词必须按照字母顺序，通过相邻的单元格(水平或垂直相邻)内的字母构成。同一个单元格内的字母不允许被重复使用。\n\n【示例】\n输入：board = [[\"A\",\"B\",\"C\",\"E\"],[\"S\",\"F\",\"C\",\"S\"],[\"A\",\"D\",\"E\",\"E\"]], word = \"ABCCED\" -> 输出：true",
    "intuition": "【Grid DFS 标记恢复】匹配当前字符后将格子标为 `#`，递归四个方向搜索，回溯时恢复原字符。",
    "timeComplexity": "O(M * N * 3^L)",
    "spaceComplexity": "O(L)",
    "codeTemplates": {
      "java": "public boolean exist(char[][] board, String word) {\n    int m = board.length, n = board[0].length;\n    for (int r = 0; r < m; r++) {\n        for (int c = 0; c < n; c++) {\n            if (dfs(board, word, r, c, 0)) return true;\n        }\n    }\n    return false;\n}\nprivate boolean dfs(char[][] b, String w, int r, int c, int k) {\n    if (k == w.length()) return true;\n    if (r < 0 || r >= b.length || c < 0 || c >= b[0].length || b[r][c] != w.charAt(k)) return false;\n    char t = b[r][c]; b[r][c] = '#';\n    boolean res = dfs(b, w, r+1, c, k+1) || dfs(b, w, r-1, c, k+1) || dfs(b, w, r, c+1, k+1) || dfs(b, w, r, c-1, k+1);\n    b[r][c] = t;\n    return res;\n}",
      "python": "def exist(board: List[List[str]], word: str) -> bool:\n    m, n = len(board), len(board[0])\n    def dfs(r, c, k):\n        if k == len(word): return True\n        if r < 0 or r >= m or c < 0 or c >= n or board[r][c] != word[k]: return False\n        t, board[r][c] = board[r][c], '#'\n        res = dfs(r+1, c, k+1) or dfs(r-1, c, k+1) or dfs(r, c+1, k+1) or dfs(r, c-1, k+1)\n        board[r][c] = t; return res\n    for r in range(m):\n        for c in range(n):\n            if dfs(r, c, 0): return True\n    return False"
    }
  },
  {
    "id": 131,
    "title": "分割回文串",
    "englishTitle": "Palindrome Partitioning",
    "difficulty": "中等",
    "category": "回溯",
    "description": "给你一个字符串 s，请你将 s 分割成一些子串，使每个子串都是 回文串 。返回 s 所有可能的分割方案。\n\n【示例】\n输入：s = \"aab\" -> 输出：[[\"a\",\"a\",\"b\"],[\"aa\",\"b\"]]",
    "intuition": "【回溯 + 双指针校验】从 index 开始切割字符串，如果子串 s[index..i] 是回文串，将其加入当前 path 并递归切割 i+1 剩余部分。",
    "timeComplexity": "O(N * 2^N)",
    "spaceComplexity": "O(N)",
    "codeTemplates": {
      "java": "public List<List<String>> partition(String s) {\n    List<List<String>> res = new ArrayList<>();\n    backtrack(s, 0, new ArrayList<>(), res);\n    return res;\n}\nprivate void backtrack(String s, int start, List<String> path, List<List<String>> res) {\n    if (start == s.length()) {\n        res.add(new ArrayList<>(path));\n        return;\n    }\n    for (int i = start; i < s.length(); i++) {\n        if (isPalindrome(s, start, i)) {\n            path.add(s.substring(start, i + 1));\n            backtrack(s, i + 1, path, res);\n            path.remove(path.size() - 1);\n        }\n    }\n}\nprivate boolean isPalindrome(String s, int l, int r) {\n    while (l < r) {\n        if (s.charAt(l++) != s.charAt(r--)) return false;\n    }\n    return true;\n}",
      "python": "def partition(s: str) -> List[List[str]]:\n    res = []\n    def backtrack(start, path):\n        if start == len(s):\n            res.append(path[:])\n            return\n        for i in range(start, len(s)):\n            sub = s[start:i+1]\n            if sub == sub[::-1]:\n                path.append(sub)\n                backtrack(i + 1, path)\n                path.pop()\n    backtrack(0, [])\n    return res"
    }
  },
  {
    "id": 51,
    "title": "N 皇后",
    "englishTitle": "N-Queens",
    "difficulty": "困难",
    "category": "回溯",
    "description": "按照国际象棋的规则，皇后可以攻击与处在同一行、同一列或同一斜线上的棋子。n 皇后问题 研究的是如何将 n 个皇后放置在 n×n 的棋盘上，并且使皇后彼此之间不能相互攻击。返回所有不同的 n 皇后问题的解决方案。\n\n【示例】\n输入：n = 4 -> 输出：[[\".Q..\",\"...Q\",\"Q...\",\"..Q.\"],[\"..Q.\",\"Q...\",\"...Q\",\".Q..\"]]",
    "intuition": "【逐行回溯 + 列与斜线 Hash 标记】逐行放置皇后，用 boolean[] 数组或 Set 标记已占据的列 col、主对角线 row-col 和副对角线 row+col。",
    "timeComplexity": "O(N!)",
    "spaceComplexity": "O(N)",
    "codeTemplates": {
      "java": "public List<List<String>> solveNQueens(int n) {\n    List<List<String>> res = new ArrayList<>();\n    char[][] board = new char[n][n];\n    for (char[] row : board) Arrays.fill(row, '.');\n    boolean[] cols = new boolean[n];\n    boolean[] diag1 = new boolean[2 * n];\n    boolean[] diag2 = new boolean[2 * n];\n    backtrack(0, n, board, cols, diag1, diag2, res);\n    return res;\n}\nprivate void backtrack(int r, int n, char[][] board, boolean[] cols, boolean[] d1, boolean[] d2, List<List<String>> res) {\n    if (r == n) {\n        List<String> list = new ArrayList<>();\n        for (char[] row : board) list.add(new String(row));\n        res.add(list);\n        return;\n    }\n    for (int c = 0; c < n; c++) {\n        int id1 = r - c + n, id2 = r + c;\n        if (cols[c] || d1[id1] || d2[id2]) continue;\n        board[r][c] = 'Q';\n        cols[c] = d1[id1] = d2[id2] = true;\n        backtrack(r + 1, n, board, cols, d1, d2, res);\n        board[r][c] = '.';\n        cols[c] = d1[id1] = d2[id2] = false;\n    }\n}",
      "python": "def solveNQueens(n: int) -> List[List[str]]:\n    res = []\n    cols, d1, d2 = set(), set(), set()\n    board = [['.'] * n for _ in range(n)]\n    def backtrack(r):\n        if r == n:\n            res.append([''.join(row) for row in board])\n            return\n        for c in range(n):\n            if c in cols or (r - c) in d1 or (r + c) in d2: continue\n            cols.add(c); d1.add(r - c); d2.add(r + c)\n            board[r][c] = 'Q'\n            backtrack(r + 1)\n            board[r][c] = '.'\n            cols.remove(c); d1.remove(r - c); d2.remove(r + c)\n    backtrack(0)\n    return res"
    }
  },
  {
    "id": 35,
    "title": "搜索插入位置",
    "englishTitle": "Search Insert Position",
    "difficulty": "简单",
    "category": "二分查找",
    "description": "给定一个排序数组和一个目标值，在数组中找到目标值，并返回其索引。如果目标值不存在于数组中，返回它将会被按顺序插入的位置。必须编写对数时间复杂度的算法。\n\n【示例】\n输入：nums = [1,3,5,6], target = 5 -> 输出：2\n输入：nums = [1,3,5,6], target = 2 -> 输出：1",
    "intuition": "【标准二分】查找首个 >= target 的位置。初始化 left = 0, right = nums.length - 1，二分迭代更新答案。",
    "timeComplexity": "O(log N)",
    "spaceComplexity": "O(1)",
    "codeTemplates": {
      "java": "public int searchInsert(int[] nums, int target) {\n    int left = 0, right = nums.length - 1;\n    while (left <= right) {\n        int mid = left + (right - left) / 2;\n        if (nums[mid] >= target) right = mid - 1;\n        else left = mid + 1;\n    }\n    return left;\n}",
      "python": "def searchInsert(nums: List[int], target: int) -> int:\n    l, r = 0, len(nums) - 1\n    while l <= r:\n        mid = (l + r) // 2\n        if nums[mid] >= target: r = mid - 1\n        else: l = mid + 1\n    return l"
    }
  },
  {
    "id": 74,
    "title": "搜索二维矩阵",
    "englishTitle": "Search a 2D Matrix",
    "difficulty": "中等",
    "category": "二分查找",
    "description": "给你一个 m x n 的整数矩阵 matrix ，具有如下特性：每行从左到右升序排列；每行的第一个整数大于前一行的最后一个整数。给你一个目标值 target ，如果 target 在矩阵中，返回 true ；否则，返回 false 。\n\n【示例】\n输入：matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]], target = 3 -> 输出：true",
    "intuition": "【看作一维单调数组二分】将 m x n 矩阵虚拟为长 m*n 的有序数组，映射坐标 row = mid / n, col = mid % n 执行二分查找。",
    "timeComplexity": "O(log(M * N))",
    "spaceComplexity": "O(1)",
    "codeTemplates": {
      "java": "public boolean searchMatrix(int[][] matrix, int target) {\n    int m = matrix.length, n = matrix[0].length;\n    int left = 0, right = m * n - 1;\n    while (left <= right) {\n        int mid = left + (right - left) / 2;\n        int val = matrix[mid / n][mid % n];\n        if (val == target) return true;\n        else if (val < target) left = mid + 1;\n        else right = mid - 1;\n    }\n    return false;\n}",
      "python": "def searchMatrix(matrix: List[List[int]], target: int) -> bool:\n    m, n = len(matrix), len(matrix[0])\n    l, r = 0, m * n - 1\n    while l <= r:\n        mid = (l + r) // 2\n        val = matrix[mid // n][mid % n]\n        if val == target: return True\n        elif val < target: l = mid + 1\n        else: r = mid - 1\n    return False"
    }
  },
  {
    "id": 34,
    "title": "在排序数组中查找元素的第一个和最后一个位置",
    "englishTitle": "Find First and Last Position of Element in Sorted Array",
    "difficulty": "中等",
    "category": "二分查找",
    "description": "给你一个按照非递减顺序排列的整数数组 nums，和一个目标值 target。请你找出给定目标值在数组中的开始位置和结束位置。\n如果数组中不存在目标值 target，返回 [-1, -1]。要求时间复杂度为 O(log n)。\n\n【示例】\n输入：nums = [5,7,7,8,8,10], target = 8 -> 输出：[3, 4]",
    "intuition": "【两次二分】第一次二分寻找首个 >= target 的位置；第二次二分寻找首个 > target 的位置 minus 1。",
    "timeComplexity": "O(log N)",
    "spaceComplexity": "O(1)",
    "codeTemplates": {
      "java": "public int[] searchRange(int[] nums, int target) {\n    int l = searchLower(nums, target);\n    int r = searchLower(nums, target + 1) - 1;\n    if (l <= r && r < nums.length && nums[l] == target) return new int[]{l, r};\n    return new int[]{-1, -1};\n}\nprivate int searchLower(int[] nums, int target) {\n    int left = 0, right = nums.length - 1, ans = nums.length;\n    while (left <= right) {\n        int mid = (left + right) / 2;\n        if (nums[mid] >= target) { ans = mid; right = mid - 1; }\n        else left = mid + 1;\n    }\n    return ans;\n}",
      "python": "def searchRange(nums: List[int], target: int) -> List[int]:\n    def lower(t):\n        l, r, ans = 0, len(nums) - 1, len(nums)\n        while l <= r:\n            m = (l + r) // 2\n            if nums[m] >= t: ans = m; r = m - 1\n            else: l = m + 1\n        return ans\n    l = lower(target)\n    r = lower(target + 1) - 1\n    if l <= r and r < len(nums) and nums[l] == target: return [l, r]\n    return [-1, -1]"
    }
  },
  {
    "id": 33,
    "title": "搜索旋转排序数组",
    "englishTitle": "Search in Rotated Sorted Array",
    "difficulty": "中等",
    "category": "二分查找",
    "description": "整数数组 nums 按升序排列，但在某个未知的下标上进行了旋转（例如 [0,1,2,4,5,6,7] 可能变成 [4,5,6,7,0,1,2]）。\n给你旋转后的数组 nums 和一个目标值 target ，如果 nums 中存在这个目标值 target ，则返回它的下标，否则返回 -1 。设计 O(log n) 算法。\n\n【示例】\n输入：nums = [4,5,6,7,0,1,2], target = 0 -> 输出：4",
    "intuition": "【判断哪一侧有序二分】计算 mid，`nums[left..mid]` 和 `nums[mid..right]` 中必然有一侧严格递增。判断 target 是否落在有序区间内。",
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
    "description": "已知长度为 n 的数组在未知点上进行了旋转。请找出并返回数组中的 最小元素 。必须编写时间复杂度为 O(log n) 的算法。\n\n【示例】\n输入：nums = [3,4,5,1,2] -> 输出：1\n输入：nums = [4,5,6,7,0,1,2] -> 输出：0",
    "intuition": "【比较 mid 与 right】比较 nums[mid] 和 nums[right]：若 nums[mid] > nums[right] 说明最小值在右半部分（left = mid + 1）；否则最小值在左半部分（right = mid）。",
    "timeComplexity": "O(log N)",
    "spaceComplexity": "O(1)",
    "codeTemplates": {
      "java": "public int findMin(int[] nums) {\n    int left = 0, right = nums.length - 1;\n    while (left < right) {\n        int mid = left + (right - left) / 2;\n        if (nums[mid] > nums[right]) left = mid + 1;\n        else right = mid;\n    }\n    return nums[left];\n}",
      "python": "def findMin(nums: List[int]) -> int:\n    l, r = 0, len(nums) - 1\n    while l < r:\n        mid = (l + r) // 2\n        if nums[mid] > nums[r]: l = mid + 1\n        else: r = mid\n    return nums[l]"
    }
  },
  {
    "id": 4,
    "title": "寻找两个正序数组的中位数",
    "englishTitle": "Median of Two Sorted Arrays",
    "difficulty": "困难",
    "category": "二分查找",
    "description": "给定两个大小分别为 m 和 n 的正序（从小到大排序）数组 nums1 和 nums2。请你找出并返回这两个正序数组的中位数。\n算法的总时间复杂度应该为 O(log(m+n))。\n\n【示例】\n输入：nums1 = [1, 3], nums2 = [2]\n输出：2.00000 (合并数组为 [1,2,3]，中位数是 2)",
    "intuition": "【二分划分分割线】对较短数组进行二分寻找分割线 i，使得左侧所有元素 <= 右侧所有元素。比较 `max(L1, L2)` 与 `min(R1, R2)`。",
    "timeComplexity": "O(log min(M, N))",
    "spaceComplexity": "O(1)",
    "codeTemplates": {
      "java": "public double findMedianSortedArrays(int[] nums1, int[] nums2) {\n    if (nums1.length > nums2.length) return findMedianSortedArrays(nums2, nums1);\n    int m = nums1.length, n = nums2.length;\n    int left = 0, right = m;\n    while (left <= right) {\n        int i = (left + right) / 2, j = (m + n + 1) / 2 - i;\n        int maxL1 = (i == 0) ? Integer.MIN_VALUE : nums1[i - 1];\n        int minR1 = (i == m) ? Integer.MAX_VALUE : nums1[i];\n        int maxL2 = (j == 0) ? Integer.MIN_VALUE : nums2[j - 1];\n        int minR2 = (j == n) ? Integer.MAX_VALUE : nums2[j];\n        if (maxL1 <= minR2 && maxL2 <= minR1) {\n            if ((m + n) % 2 == 1) return Math.max(maxL1, maxL2);\n            else return (Math.max(maxL1, maxL2) + Math.min(minR1, minR2)) / 2.0;\n        } else if (maxL1 > minR2) right = i - 1;\n        else left = i + 1;\n    }\n    return 0.0;\n}",
      "python": "def findMedianSortedArrays(nums1: List[int], nums2: List[int]) -> float:\n    if len(nums1) > len(nums2): nums1, nums2 = nums2, nums1\n    m, n = len(nums1), len(nums2)\n    left, right = 0, m\n    while left <= right:\n        i = (left + right) // 2\n        j = (m + n + 1) // 2 - i\n        maxL1 = float('-inf') if i == 0 else nums1[i - 1]\n        minR1 = float('inf') if i == m else nums1[i]\n        maxL2 = float('-inf') if j == 0 else nums2[j - 1]\n        minR2 = float('inf') if j == n else nums2[j]\n        if maxL1 <= minR2 and maxL2 <= minR1:\n            if (m + n) % 2 == 1: return max(maxL1, maxL2)\n            else: return (max(maxL1, maxL2) + min(minR1, minR2)) / 2.0\n        elif maxL1 > minR2: right = i - 1\n        else: left = i + 1\n    return 0.0"
    }
  },
  {
    "id": 20,
    "title": "有效的括号",
    "englishTitle": "Valid Parentheses",
    "difficulty": "简单",
    "category": "栈",
    "description": "给定一个只包括 '('，')'，'{'，'}'，'['，']' 的字符串 s ，判断字符串是否有效。\n有效字符串需满足：左括号必须用相同类型的右括号闭合，且左括号必须以正确的顺序闭合。\n\n【示例】\n输入：s = \"()[]{}\" -> 输出：true\n输入：s = \"(]\" -> 输出：false",
    "intuition": "【辅助栈 Stack】遇到左括号压入对应右括号；遇右括号时，栈空或弹出不匹配则返回 false。",
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
    "category": "栈",
    "description": "设计一个支持 push ，pop ，top 操作，并能在常数时间内检索到最小元素的栈 MinStack：\n- `push(val)` 将元素 val 推入堆栈。\n- `pop()` 删除堆栈顶部的元素。\n- `top()` 获取堆栈顶部的元素。\n- `getMin()` 获取堆栈中的最小元素。所有操作时间复杂度均需为 O(1)。",
    "intuition": "【双栈 / 辅助 minStack】维护主数据栈 dataStack 和辅助 minStack。入栈时压入当前最小值 `min(val, minStack.peek())`。",
    "timeComplexity": "O(1)",
    "spaceComplexity": "O(N)",
    "codeTemplates": {
      "java": "class MinStack {\n    private Stack<Integer> stack = new Stack<>(), minStack = new Stack<>();\n    public MinStack() {}\n    public void push(int val) {\n        stack.push(val);\n        if (minStack.isEmpty() || val <= minStack.peek()) minStack.push(val);\n        else minStack.push(minStack.peek());\n    }\n    public void pop() { stack.pop(); minStack.pop(); }\n    public int top() { return stack.peek(); }\n    public int getMin() { return minStack.peek(); }\n}",
      "python": "class MinStack:\n    def __init__(self):\n        self.stack = []\n        self.min_stack = []\n    def push(self, val: int) -> None:\n        self.stack.append(val)\n        if not self.min_stack or val <= self.min_stack[-1]: self.min_stack.append(val)\n        else: self.min_stack.append(self.min_stack[-1])\n    def pop(self) -> None:\n        self.stack.pop()\n        self.min_stack.pop()\n    def top(self) -> int: return self.stack[-1]\n    def getMin(self) -> int: return self.min_stack[-1]"
    }
  },
  {
    "id": 394,
    "title": "字符串解码",
    "englishTitle": "Decode String",
    "difficulty": "中等",
    "category": "栈",
    "description": "给定一个经过编码的字符串 s，返回它解码后的字符串。\n编码规则为: k[encoded_string]，表示其中括号内部的 encoded_string 正好重复 k 次。注意 k 保证为正整数。\n\n【示例】\n输入：s = \"3[a2[c]]\" -> 输出：\"accaccacc\" (\"2[c]\" -> \"cc\", \"3[acc]\" -> \"accaccacc\")",
    "intuition": "【双栈保存 (k, prevStr)】遇 '[' 时把当前 count 与已有字符串 resStr 压栈清空；遇 ']' 时弹出上次字符串与重复次数拼接。",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "codeTemplates": {
      "java": "public String decodeString(String s) {\n    Stack<Integer> countStack = new Stack<>();\n    Stack<StringBuilder> stringStack = new Stack<>();\n    StringBuilder curr = new StringBuilder(); int k = 0;\n    for (char c : s.toCharArray()) {\n        if (Character.isDigit(c)) k = k * 10 + (c - '0');\n        else if (c == '[') {\n            countStack.push(k); stringStack.push(curr); curr = new StringBuilder(); k = 0;\n        } else if (c == ']') {\n            StringBuilder prev = stringStack.pop(); int repeat = countStack.pop();\n            for (int i = 0; i < repeat; i++) prev.append(curr);\n            curr = prev;\n        } else curr.append(c);\n    }\n    return curr.toString();\n}",
      "python": "def decodeString(s: str) -> str:\n    count_stack, str_stack, curr, k = [], [], \"\", 0\n    for c in s:\n        if c.isdigit(): k = k * 10 + int(c)\n        elif c == '[':\n            count_stack.append(k); str_stack.append(curr); curr = \"\"; k = 0\n        elif c == ']':\n            prev = str_stack.pop(); repeat = count_stack.pop()\n            curr = prev + curr * repeat\n        else: curr += c\n    return curr"
    }
  },
  {
    "id": 739,
    "title": "每日温度",
    "englishTitle": "Daily Temperatures",
    "difficulty": "中等",
    "category": "栈",
    "description": "给定一个整数数组 temperatures ，表示每天的温度，返回一个数组 answer ，其中 answer[i] 是指对于第 i 天，下一个更高温度出现在几天后。如果气温在这之后都不会升高，请在该位置用 0 来代替。\n\n【示例】\n输入：temperatures = [73,74,75,71,69,72,76,73] -> 输出：[1,1,4,2,1,1,0,0]",
    "intuition": "【单调递减栈】栈存下标。遍历时遇温度大于栈顶，说明找到更高温度，弹出计算 `i - prev`。",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "codeTemplates": {
      "java": "public int[] dailyTemperatures(int[] temperatures) {\n    int n = temperatures.length; int[] ans = new int[n];\n    Stack<Integer> st = new Stack<>();\n    for (int i = 0; i < n; i++) {\n        while (!st.isEmpty() && temperatures[i] > temperatures[st.peek()]) {\n            int prev = st.pop(); ans[prev] = i - prev;\n        }\n        st.push(i);\n    }\n    return ans;\n}",
      "python": "def dailyTemperatures(temperatures: List[int]) -> List[int]:\n    ans, st = [0] * len(temperatures), []\n    for i, t in enumerate(temperatures):\n        while st and t > temperatures[st[-1]]:\n            prev = st.pop(); ans[prev] = i - prev\n        st.append(i)\n    return ans"
    }
  },
  {
    "id": 84,
    "title": "柱状图中最大的矩形",
    "englishTitle": "Largest Rectangle in Histogram",
    "difficulty": "困难",
    "category": "栈",
    "description": "给定 n 个非负整数，用来表示柱状图中各个柱子的高度。每个柱子彼此相邻，且宽度为 1 。求在该柱状图中，能够勾勒出的矩形的最大面积。\n\n【示例】\n输入：heights = [2,1,5,6,2,3] -> 输出：10 (由高度 5 和 6 构成的矩形面积最大，5 * 2 = 10)",
    "intuition": "【单调递增栈 + 哨兵 0】遇到较矮柱子时，栈顶柱子确定了高度，左右较矮柱子确定了宽度 `h * (right - left - 1)`。",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "codeTemplates": {
      "java": "public int largestRectangleArea(int[] heights) {\n    int n = heights.length;\n    int[] h = new int[n + 2]; System.arraycopy(heights, 0, h, 1, n);\n    Stack<Integer> st = new Stack<>(); int maxArea = 0;\n    for (int i = 0; i < h.length; i++) {\n        while (!st.isEmpty() && h[i] < h[st.peek()]) {\n            int height = h[st.pop()], width = i - st.peek() - 1;\n            maxArea = Math.max(maxArea, height * width);\n        }\n        st.push(i);\n    }\n    return maxArea;\n}",
      "python": "def largestRectangleArea(heights: List[int]) -> int:\n    h = [0] + heights + [0]\n    st, max_a = [], 0\n    for i, val in enumerate(h):\n        while st and val < h[st[-1]]:\n            height = h[st.pop()]\n            width = i - st[-1] - 1\n            max_a = max(max_a, height * width)\n        st.append(i)\n    return max_a"
    }
  },
  {
    "id": 215,
    "title": "数组中的第K个最大元素",
    "englishTitle": "Kth Largest Element in an Array",
    "difficulty": "中等",
    "category": "堆",
    "description": "给定整数数组 nums 和整数 k，请返回数组中第 k 个最大的元素。\n请注意，你需要找的是数组排序后第 k 个最大的元素，而不是第 k 个不同的元素。最好不用全局库函数排序。\n\n【示例】\n输入：nums = [3,2,1,5,6,4], k = 2 -> 输出：5",
    "intuition": "【大小为 K 的小顶堆 / 快速选择】维护大小为 k 的小顶堆 PriorityQueue，遍历数组保留最大的 k 个数，堆顶即为第 k 大。",
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
    "category": "堆",
    "description": "给你一个整数数组 nums 和一个整数 k ，请你返回其中出现频率前 k 高的元素。你可以按任意顺序返回答案。\n\n【示例】\n输入：nums = [1,1,1,2,2,3], k = 2 -> 输出：[1,2]",
    "intuition": "【Map 频次统计 + 桶排序】统计词频 Map 后，以频次为数组下标建桶，倒序提取前 k 个元素。",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "codeTemplates": {
      "java": "public int[] topKFrequent(int[] nums, int k) {\n    Map<Integer, Integer> map = new HashMap<>();\n    for (int num : nums) map.put(num, map.getOrDefault(num, 0) + 1);\n    List<Integer>[] buckets = new List[nums.length + 1];\n    for (int key : map.keySet()) {\n        int freq = map.get(key);\n        if (buckets[freq] == null) buckets[freq] = new ArrayList<>();\n        buckets[freq].add(key);\n    }\n    int[] res = new int[k]; int idx = 0;\n    for (int i = buckets.length - 1; i >= 0 && idx < k; i--) {\n        if (buckets[i] != null) {\n            for (int num : buckets[i]) { res[idx++] = num; if (idx == k) break; }\n        }\n    }\n    return res;\n}",
      "python": "def topKFrequent(nums: List[int], k: int) -> List[int]:\n    count = collections.Counter(nums)\n    return [item[0] for item in count.most_common(k)]"
    }
  },
  {
    "id": 295,
    "title": "数据流的中位数",
    "englishTitle": "Find Median from Data Stream",
    "difficulty": "困难",
    "category": "堆",
    "description": "中位数是有序整数列表中的中间值。如果列表的大小是偶数，则没有中间值，中位数是两个中间值的平均值。实现 MedianFinder 类，支持 addNum 和 findMedian 操作。\n\n【示例】\naddNum(1), addNum(2), findMedian() -> 1.5, addNum(3), findMedian() -> 2.0",
    "intuition": "【对半开双堆】大顶堆 maxHeap 维护较小的前半部分，小顶堆 minHeap 维护较大的后半部分。保证 0 <= maxHeap.size - minHeap.size <= 1。",
    "timeComplexity": "addNum O(log N), findMedian O(1)",
    "spaceComplexity": "O(N)",
    "codeTemplates": {
      "java": "class MedianFinder {\n    private PriorityQueue<Integer> maxHeap = new PriorityQueue<>((a, b) -> b - a);\n    private PriorityQueue<Integer> minHeap = new PriorityQueue<>();\n    public void addNum(int num) {\n        if (maxHeap.isEmpty() || num <= maxHeap.peek()) maxHeap.offer(num);\n        else minHeap.offer(num);\n        if (maxHeap.size() > minHeap.size() + 1) minHeap.offer(maxHeap.poll());\n        else if (minHeap.size() > maxHeap.size()) maxHeap.offer(minHeap.poll());\n    }\n    public double findMedian() {\n        if (maxHeap.size() > minHeap.size()) return maxHeap.peek();\n        return (maxHeap.peek() + minHeap.peek()) / 2.0;\n    }\n}",
      "python": "class MedianFinder:\n    def __init__(self):\n        import heapq\n        self.small = [] # maxHeap (negated)\n        self.large = [] # minHeap\n    def addNum(self, num: int) -> None:\n        import heapq\n        heapq.heappush(self.small, -num)\n        heapq.heappush(self.large, -heapq.heappop(self.small))\n        if len(self.large) > len(self.small):\n            heapq.heappush(self.small, -heapq.heappop(self.large))\n    def findMedian(self) -> float:\n        if len(self.small) > len(self.large):\n            return float(-self.small[0])\n        return (-self.small[0] + self.large[0]) / 2.0"
    }
  },
  {
    "id": 121,
    "title": "买卖股票的最佳时机",
    "englishTitle": "Best Time to Buy and Sell Stock",
    "difficulty": "简单",
    "category": "贪心算法",
    "description": "给定一个数组 prices ，它的第 i 个元素 prices[i] 表示一支给定股票在第 i 天的价格。\n你只能选择某一天买入这只股票，并选择在未来的某一天卖出该股票。设计一个算法来计算你所能获得的最大利润。如果无法获得利润返回 0。\n\n【示例】\n输入：prices = [7,1,5,3,6,4] -> 输出：5 (在第 2 天价格 1 时买入，第 5 天价格 6 时卖出，利润 6-1 = 5)",
    "intuition": "【动态维护最低价格 minPrice】遍历价格计算当前卖出利润 `p - minPrice`，更新 maxProfit。",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(1)",
    "codeTemplates": {
      "java": "public int maxProfit(int[] prices) {\n    int minPrice = Integer.MAX_VALUE, maxProfit = 0;\n    for (int p : prices) {\n        if (p < minPrice) minPrice = p;\n        else if (p - minPrice > maxProfit) maxProfit = p - minPrice;\n    }\n    return maxProfit;\n}",
      "python": "def maxProfit(prices: List[int]) -> int:\n    min_p, max_p = float('inf'), 0\n    for p in prices:\n        min_p = min(min_p, p)\n        max_p = max(max_p, p - min_p)\n    return max_p"
    }
  },
  {
    "id": 55,
    "title": "跳跃游戏",
    "englishTitle": "Jump Game",
    "difficulty": "中等",
    "category": "贪心算法",
    "description": "给你一个非负整数数组 nums ，你最初位于数组的第一个下标。数组中的每个元素代表你在该位置可以向前跳跃的最大长度。\n判断你是否能够到达最后一个下标。\n\n【示例 1】\n输入：nums = [2,3,1,1,4] -> 输出：true (跳 1 步到下标 1，再跳 3 步到终点)\n【示例 2】\n输入：nums = [3,2,1,0,4] -> 输出：false (无论怎么跳都会停在 0，无法到达终点)",
    "intuition": "【最远可达位置 maxReach】实时更新 `maxReach = max(maxReach, i + nums[i])`。若 i > maxReach 则无法继续前进。",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(1)",
    "codeTemplates": {
      "java": "public boolean canJump(int[] nums) {\n    int maxReach = 0;\n    for (int i = 0; i < nums.length; i++) {\n        if (i > maxReach) return false;\n        maxReach = Math.max(maxReach, i + nums[i]);\n    }\n    return true;\n}",
      "python": "def canJump(nums: List[int]) -> bool:\n    max_r = 0\n    for i, num in enumerate(nums):\n        if i > max_r: return False\n        max_r = max(max_r, i + num)\n    return True"
    }
  },
  {
    "id": 45,
    "title": "跳跃游戏 II",
    "englishTitle": "Jump Game II",
    "difficulty": "中等",
    "category": "贪心算法",
    "description": "给定一个长度为 n 的 0 索引整数数组 nums。初始位置为 nums[0]。每个元素 nums[i] 表示从索引 i 向前跳转的最大长度。返回到达 nums[n - 1] 的最小跳跃次数。\n\n【示例】\n输入：nums = [2,3,1,1,4] -> 输出：2 (从 0 跳到 1，再跳到最后一个位置)",
    "intuition": "【贪心边界递推】维护当前跳跃能到达的最远边界 end 和遍历过程中能到达的最远位置 maxPosition。到达 end 时步数 step++ 并更新 end = maxPosition。",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(1)",
    "codeTemplates": {
      "java": "public int jump(int[] nums) {\n    int jumps = 0, curEnd = 0, maxPos = 0;\n    for (int i = 0; i < nums.length - 1; i++) {\n        maxPos = Math.max(maxPos, i + nums[i]);\n        if (i == curEnd) {\n            jumps++;\n            curEnd = maxPos;\n        }\n    }\n    return jumps;\n}",
      "python": "def jump(nums: List[int]) -> int:\n    jumps = cur_end = max_pos = 0\n    for i in range(len(nums) - 1):\n        max_pos = max(max_pos, i + nums[i])\n        if i == cur_end:\n            jumps += 1\n            cur_end = max_pos\n    return jumps"
    }
  },
  {
    "id": 763,
    "title": "划分字母区间",
    "englishTitle": "Partition Labels",
    "difficulty": "中等",
    "category": "贪心算法",
    "description": "给你一个字符串 s 。我们要把这个字符串划分为尽可能多的片段，同一字母最多出现在一个片段中。注意，划分结果需要满足：将所有片段按顺序连接，合起来恰好是 s 。返回一个表示每个字符串片段的长度的列表。\n\n【示例】\n输入：s = \"ababcbacadefegdehijhklij\" -> 输出：[9,7,8]",
    "intuition": "【贪心 + 字符终点标记】先预处理每个字符在字符串中出现的最后位置 lastIndex。遍历字符串，持续更新片段最远边界 maxEnd = max(maxEnd, lastIndex[c])，当 i == maxEnd 时截断片段。",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(1)",
    "codeTemplates": {
      "java": "public List<Integer> partitionLabels(String s) {\n    int[] last = new int[26];\n    for (int i = 0; i < s.length(); i++) last[s.charAt(i) - 'a'] = i;\n    List<Integer> res = new ArrayList<>();\n    int start = 0, end = 0;\n    for (int i = 0; i < s.length(); i++) {\n        end = Math.max(end, last[s.charAt(i) - 'a']);\n        if (i == end) {\n            res.add(end - start + 1);\n            start = i + 1;\n        }\n    }\n    return res;\n}",
      "python": "def partitionLabels(s: str) -> List[int]:\n    last = {c: i for i, c in enumerate(s)}\n    res = []\n    start = end = 0\n    for i, c in enumerate(s):\n        end = max(end, last[c])\n        if i == end:\n            res.append(end - start + 1)\n            start = i + 1\n    return res"
    }
  },
  {
    "id": 70,
    "title": "爬楼梯",
    "englishTitle": "Climbing Stairs",
    "difficulty": "简单",
    "category": "动态规划",
    "description": "假设你正在爬楼梯。需要 n 阶你才能到达楼顶。每次你可以爬 1 或 2 个台阶。你有多少种不同的方法可以爬到楼顶呢？\n\n【示例】\n输入：n = 3 -> 输出：3 (1+1+1, 1+2, 2+1)",
    "intuition": "【斐波那契 DP】dp[n] = dp[n-1] + dp[n-2]。",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(1)",
    "codeTemplates": {
      "java": "public int climbStairs(int n) {\n    if (n <= 2) return n;\n    int a = 1, b = 2;\n    for (int i = 3; i <= n; i++) {\n        int t = a + b; a = b; b = t;\n    }\n    return b;\n}",
      "python": "def climbStairs(n: int) -> int:\n    if n <= 2: return n\n    a, b = 1, 2\n    for _ in range(3, n + 1): a, b = b, a + b\n    return b"
    }
  },
  {
    "id": 118,
    "title": "杨辉三角",
    "englishTitle": "Pascal's Triangle",
    "difficulty": "简单",
    "category": "动态规划",
    "description": "给定一个非负整数 numRows，生成「杨辉三角」的前 numRows 行。在「杨辉三角」中，每个数是它左上方和右上方的数的和。\n\n【示例】\n输入：numRows = 5 -> 输出：[[1],[1,1],[1,2,1],[1,3,3,1],[1,4,6,4,1]]",
    "intuition": "【按行递推】第一列和最后一列均为 1。对于中间的数字，row[j] = prevRow[j-1] + prevRow[j]。",
    "timeComplexity": "O(N^2)",
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
    "description": "你是一个专业的小偷，计划偷窃沿街的房屋。每间房内都藏有一定的现金，影响你偷窃的唯一制约因素就是相邻的房屋装有相互连通的防盗系统，如果两间相邻的房屋在同一晚上被小偷闯入，系统会自动报警。计算你在不触动警报装置的情况下，一夜之内能够偷窃到的最高金额。\n\n【示例】\n输入：nums = [1,2,3,1] -> 输出：4 (偷 1 号和 3 号房屋)",
    "intuition": "【滚动数组 DP】状态转移方程：dp[i] = max(dp[i-1], dp[i-2] + nums[i])。只维护前前一间 prev 和前一间 curr 即可。",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(1)",
    "codeTemplates": {
      "java": "public int rob(int[] nums) {\n    int prev = 0, curr = 0;\n    for (int num : nums) {\n        int temp = Math.max(curr, prev + num);\n        prev = curr;\n        curr = temp;\n    }\n    return curr;\n}",
      "python": "def rob(nums: List[int]) -> int:\n    prev = curr = 0\n    for num in nums:\n        prev, curr = curr, max(curr, prev + num)\n    return curr"
    }
  },
  {
    "id": 279,
    "title": "完全平方数",
    "englishTitle": "Perfect Squares",
    "difficulty": "中等",
    "category": "动态规划",
    "description": "给你一个整数 n ，返回和为 n 的完全平方数（如 1, 4, 9, 16...）的最少数量。\n\n【示例】\n输入：n = 12 -> 输出：3 (12 = 4 + 4 + 4)",
    "intuition": "【完全背包 DP】`dp[i] = min(dp[i], dp[i - j*j] + 1)`。",
    "timeComplexity": "O(N * sqrt(N))",
    "spaceComplexity": "O(N)",
    "codeTemplates": {
      "java": "public int numSquares(int n) {\n    int[] dp = new int[n + 1]; Arrays.fill(dp, Integer.MAX_VALUE); dp[0] = 0;\n    for (int i = 1; i <= n; i++) {\n        for (int j = 1; j * j <= i; j++) dp[i] = Math.min(dp[i], dp[i - j * j] + 1);\n    }\n    return dp[n];\n}",
      "python": "def numSquares(n: int) -> int:\n    dp = [float('inf')] * (n + 1); dp[0] = 0\n    for i in range(1, n + 1):\n        j = 1\n        while j * j <= i:\n            dp[i] = min(dp[i], dp[i - j * j] + 1); j += 1\n    return dp[n]"
    }
  },
  {
    "id": 322,
    "title": "零钱兑换",
    "englishTitle": "Coin Change",
    "difficulty": "中等",
    "category": "动态规划",
    "description": "给你一个整数数组 coins ，表示不同面额的硬币；以及一个整数 amount ，表示总金额。\n计算并返回可以凑成总金额所需的 最少的硬币个数 。如果没有任何一种硬币组合能组成总金额，返回 -1 。假设每种硬币的数量无限。\n\n【示例】\n输入：coins = [1, 2, 5], amount = 11 -> 输出：3 (11 = 5 + 5 + 1)",
    "intuition": "【完全背包 DP】`dp[i] = min(dp[i], dp[i - coin] + 1)`。",
    "timeComplexity": "O(Amount * N)",
    "spaceComplexity": "O(Amount)",
    "codeTemplates": {
      "java": "public int coinChange(int[] coins, int amount) {\n    int max = amount + 1;\n    int[] dp = new int[amount + 1]; Arrays.fill(dp, max); dp[0] = 0;\n    for (int i = 1; i <= amount; i++) {\n        for (int c : coins) if (i >= c) dp[i] = Math.min(dp[i], dp[i - c] + 1);\n    }\n    return dp[amount] > amount ? -1 : dp[amount];\n}",
      "python": "def coinChange(coins: List[int], amount: int) -> int:\n    dp = [float('inf')] * (amount + 1); dp[0] = 0\n    for c in coins:\n        for i in range(c, amount + 1): dp[i] = min(dp[i], dp[i - c] + 1)\n    return dp[amount] if dp[amount] != float('inf') else -1"
    }
  },
  {
    "id": 139,
    "title": "单词拆分",
    "englishTitle": "Word Break",
    "difficulty": "中等",
    "category": "动态规划",
    "description": "给你一个字符串 s 和一个字符串列表 wordDict 作为字典。如果可以利用字典中出现的一个或多个单词拼接出 s 则返回 true。\n不要求字典中出现的单词全部使用，字典中的单词可以重复使用。\n\n【示例】\n输入：s = \"leetcode\", wordDict = [\"leet\", \"code\"] -> 输出：true (\"leetcode\" 可以由 \"leet\" 和 \"code\" 拼接)",
    "intuition": "【前缀字符串 DP】`dp[i]` 表示前 i 个字符 s[0..i-1] 是否可被词典拆分。`dp[i] = dp[j] && wordSet.contains(s[j..i-1])`。",
    "timeComplexity": "O(N^2)",
    "spaceComplexity": "O(N)",
    "codeTemplates": {
      "java": "public boolean wordBreak(String s, List<String> wordDict) {\n    Set<String> wordSet = new HashSet<>(wordDict);\n    boolean[] dp = new boolean[s.length() + 1]; dp[0] = true;\n    for (int i = 1; i <= s.length(); i++) {\n        for (int j = 0; j < i; j++) {\n            if (dp[j] && wordSet.contains(s.substring(j, i))) { dp[i] = true; break; }\n        }\n    }\n    return dp[s.length()];\n}",
      "python": "def wordBreak(s: str, wordDict: List[str]) -> bool:\n    word_set = set(wordDict)\n    dp = [True] + [False] * len(s)\n    for i in range(1, len(s) + 1):\n        for j in range(i):\n            if dp[j] and s[j:i] in word_set: dp[i] = True; break\n    return dp[len(s)]"
    }
  },
  {
    "id": 300,
    "title": "最长递增子序列",
    "englishTitle": "Longest Increasing Subsequence",
    "difficulty": "中等",
    "category": "动态规划",
    "description": "给你一个整数数组 nums ，找到其中最长严格递增子序列的长度。\n子序列是由数组派生出来的序列，删除（或不删除）数组中的元素而不改变其余元素的顺序。\n\n【示例】\n输入：nums = [10,9,2,5,3,7,101,18] -> 输出：4 (最长递增子序列是 [2,3,7,101])",
    "intuition": "【贪心 + 二分 (tails 数组)】tails[i] 维护长度 i+1 的递增子序列末尾最小元素。用二分查找首个 >= num 覆盖。",
    "timeComplexity": "O(N log N)",
    "spaceComplexity": "O(N)",
    "codeTemplates": {
      "java": "public int lengthOfLIS(int[] nums) {\n    int[] tails = new int[nums.length]; int res = 0;\n    for (int num : nums) {\n        int i = 0, j = res;\n        while (i < j) {\n            int m = (i + j) / 2;\n            if (tails[m] < num) i = m + 1; else j = m;\n        }\n        tails[i] = num;\n        if (j == res) res++;\n    }\n    return res;\n}",
      "python": "def lengthOfLIS(nums: List[int]) -> int:\n    import bisect\n    tails = []\n    for num in nums:\n        idx = bisect.bisect_left(tails, num)\n        if idx == len(tails): tails.append(num)\n        else: tails[idx] = num\n    return len(tails)"
    }
  },
  {
    "id": 152,
    "title": "乘积最大子数组",
    "englishTitle": "Maximum Product Subarray",
    "difficulty": "中等",
    "category": "动态规划",
    "description": "给你一个整数数组 nums ，请你找出数组中乘积最大的非空连续子数组（该子数组中至少包含一个数字），并返回该子数组所对应的乘积。\n\n【示例】\n输入：nums = [2,3,-2,4] -> 输出：6 (连续子数组 [2,3] 乘积最大为 6)",
    "intuition": "【双变量维护 maxDP 与 minDP】负负得正！遇负数交换 `maxVal <-> minVal`，同时更新乘积最大值。",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(1)",
    "codeTemplates": {
      "java": "public int maxProduct(int[] nums) {\n    int max = nums[0], min = nums[0], res = nums[0];\n    for (int i = 1; i < nums.length; i++) {\n        if (nums[i] < 0) { int t = max; max = min; min = t; }\n        max = Math.max(nums[i], max * nums[i]);\n        min = Math.min(nums[i], min * nums[i]);\n        res = Math.max(res, max);\n    }\n    return res;\n}",
      "python": "def maxProduct(nums: List[int]) -> int:\n    max_p = min_p = res = nums[0]\n    for num in nums[1:]:\n        if num < 0: max_p, min_p = min_p, max_p\n        max_p = max(num, max_p * num); min_p = min(num, min_p * num)\n        res = max(res, max_p)\n    return res"
    }
  },
  {
    "id": 416,
    "title": "分割等和子集",
    "englishTitle": "Partition Equal Subset Sum",
    "difficulty": "中等",
    "category": "动态规划",
    "description": "给你一个只包含正整数的非空数组 nums 。请你判断是否可以将这个数组分割成两个子集，使得两个子集的元素和相等。\n\n【示例】\n输入：nums = [1,5,11,5] -> 输出：true (可以分割成 [1, 5, 5] 和 [11])",
    "intuition": "【0-1 背包 DP】判断是否存在子集和等于 sum / 2。`dp[j] = dp[j] || dp[j - num]`。",
    "timeComplexity": "O(N * Target)",
    "spaceComplexity": "O(Target)",
    "codeTemplates": {
      "java": "public boolean canPartition(int[] nums) {\n    int sum = 0; for (int num : nums) sum += num;\n    if (sum % 2 != 0) return false;\n    int target = sum / 2;\n    boolean[] dp = new boolean[target + 1]; dp[0] = true;\n    for (int num : nums) {\n        for (int j = target; j >= num; j--) dp[j] = dp[j] || dp[j - num];\n    }\n    return dp[target];\n}",
      "python": "def canPartition(nums: List[int]) -> bool:\n    total = sum(nums)\n    if total % 2 != 0: return False\n    target = total // 2\n    dp = [True] + [False] * target\n    for num in nums:\n        for j in range(target, num - 1, -1): dp[j] = dp[j] or dp[j - num]\n    return dp[target]"
    }
  },
  {
    "id": 32,
    "title": "最长有效括号",
    "englishTitle": "Longest Valid Parentheses",
    "difficulty": "困难",
    "category": "动态规划",
    "description": "给你一个只包含 '(' 和 ')' 的字符串，找出最长有效（格式正确且连续）括号子串的长度。\n\n【示例】\n输入：s = \")()())\" -> 输出：4 (最长有效括号子串是 \"()()\")",
    "intuition": "【栈存未匹配边界下标】栈初始压入 -1。遇 '(' 压栈下标，遇 ')' 弹出栈顶。若栈空则将当前下标压栈，否则更新 `i - stack.peek()`。",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(N)",
    "codeTemplates": {
      "java": "public int longestValidParentheses(String s) {\n    Stack<Integer> st = new Stack<>(); st.push(-1);\n    int maxLen = 0;\n    for (int i = 0; i < s.length(); i++) {\n        if (s.charAt(i) == '(') st.push(i);\n        else {\n            st.pop();\n            if (st.isEmpty()) st.push(i);\n            else maxLen = Math.max(maxLen, i - st.peek());\n        }\n    }\n    return maxLen;\n}",
      "python": "def longestValidParentheses(s: str) -> int:\n    st, max_l = [-1], 0\n    for i, c in enumerate(s):\n        if c == '(': st.append(i)\n        else:\n            st.pop()\n            if not st: st.append(i)\n            else: max_l = max(max_l, i - st[-1])\n    return max_l"
    }
  },
  {
    "id": 62,
    "title": "不同路径",
    "englishTitle": "Unique Paths",
    "difficulty": "中等",
    "category": "多维动态规划",
    "description": "一个机器人位于一个 m x n 网格的左上角 (0, 0)。机器人每次只能向下或者向右移动一步。机器人试图达到网格的右下角 (m-1, n-1)。\n问总共有多少条不同的路径？\n\n【示例】\n输入：m = 3, n = 7 -> 输出：28",
    "intuition": "【网格 1D DP 优化】`dp[j] += dp[j-1]`。初始化数组全为 1。",
    "timeComplexity": "O(M * N)",
    "spaceComplexity": "O(N)",
    "codeTemplates": {
      "java": "public int uniquePaths(int m, int n) {\n    int[] dp = new int[n]; Arrays.fill(dp, 1);\n    for (int i = 1; i < m; i++) {\n        for (int j = 1; j < n; j++) dp[j] += dp[j - 1];\n    }\n    return dp[n - 1];\n}",
      "python": "def uniquePaths(m: int, n: int) -> int:\n    dp = [1] * n\n    for i in range(1, m):\n        for j in range(1, n): dp[j] += dp[j - 1]\n    return dp[-1]"
    }
  },
  {
    "id": 64,
    "title": "最小路径和",
    "englishTitle": "Minimum Path Sum",
    "difficulty": "中等",
    "category": "多维动态规划",
    "description": "给定一个包含非负整数的 m x n 网格 grid ，请找出一条从左上角到右下角的路径，使得路径上的数字总和为最小。\n说明：每次只能向下或者向右移动一步。\n\n【示例】\n输入：grid = [[1,3,1],[1,5,1],[4,2,1]] -> 输出：7 (路径 1→3→1→1→1 的和最小)",
    "intuition": "【网格 DP】`grid[i][j] += Math.min(grid[i-1][j], grid[i][j-1])`。",
    "timeComplexity": "O(M * N)",
    "spaceComplexity": "O(1)",
    "codeTemplates": {
      "java": "public int minPathSum(int[][] grid) {\n    int m = grid.length, n = grid[0].length;\n    for (int i = 0; i < m; i++) {\n        for (int j = 0; j < n; j++) {\n            if (i == 0 && j == 0) continue;\n            else if (i == 0) grid[i][j] += grid[i][j - 1];\n            else if (j == 0) grid[i][j] += grid[i - 1][j];\n            else grid[i][j] += Math.min(grid[i - 1][j], grid[i][j - 1]);\n        }\n    }\n    return grid[m - 1][n - 1];\n}",
      "python": "def minPathSum(grid: List[List[int]]) -> int:\n    m, n = len(grid), len(grid[0])\n    for i in range(m):\n        for j in range(n):\n            if i == 0 and j == 0: continue\n            elif i == 0: grid[i][j] += grid[i][j - 1]\n            elif j == 0: grid[i][j] += grid[i - 1][j]\n            else: grid[i][j] += min(grid[i - 1][j], grid[i][j - 1])\n    return grid[-1][-1]"
    }
  },
  {
    "id": 5,
    "title": "最长回文子串",
    "englishTitle": "Longest Palindromic Substring",
    "difficulty": "中等",
    "category": "多维动态规划",
    "description": "给你一个字符串 s，找到 s 中最长的回文子串（正着读和反着读都一样的子串）。\n\n【示例 1】\n输入：s = \"babad\" -> 输出：\"bab\"（或 \"aba\"）\n【示例 2】\n输入：s = \"cbbd\" -> 输出：\"bb\"",
    "intuition": "【中心扩散双指针】遍历每个字符/字符间隙作为中心，分别向左右双向扩散扩张，找到最长回文半径。",
    "timeComplexity": "O(N^2)",
    "spaceComplexity": "O(1)",
    "codeTemplates": {
      "java": "public String longestPalindrome(String s) {\n    if (s == null || s.length() < 1) return \"\";\n    int start = 0, end = 0;\n    for (int i = 0; i < s.length(); i++) {\n        int len1 = expand(s, i, i);\n        int len2 = expand(s, i, i + 1);\n        int len = Math.max(len1, len2);\n        if (len > end - start) {\n            start = i - (len - 1) / 2;\n            end = i + len / 2;\n        }\n    }\n    return s.substring(start, end + 1);\n}\nprivate int expand(String s, int left, int right) {\n    while (left >= 0 && right < s.length() && s.charAt(left) == s.charAt(right)) {\n        left--; right++;\n    }\n    return right - left - 1;\n}",
      "python": "def longestPalindrome(s: str) -> str:\n    res = \"\"\n    for i in range(len(s)):\n        # 奇数长\n        l, r = i, i\n        while l >= 0 and r < len(s) and s[l] == s[r]:\n            if (r - l + 1) > len(res): res = s[l:r+1]\n            l -= 1; r += 1\n        # 偶数长\n        l, r = i, i + 1\n        while l >= 0 and r < len(s) and s[l] == s[r]:\n            if (r - l + 1) > len(res): res = s[l:r+1]\n            l -= 1; r += 1\n    return res"
    }
  },
  {
    "id": 1143,
    "title": "最长公共子序列",
    "englishTitle": "Longest Common Subsequence",
    "difficulty": "中等",
    "category": "多维动态规划",
    "description": "给定两个字符串 text1 和 text2，返回这两个字符串的最长 公共子序列 的长度。如果不存在 公共子序列 ，返回 0 。一个字符串的 子序列 是指从原字符串中在不改变字符相对顺序的情况下删除某些字符（也可以不删除）后组成的新字符串。\n\n【示例】\n输入：text1 = \"abcde\", text2 = \"ace\" -> 输出：3 (LCS 为 \"ace\")",
    "intuition": "【二维 DP】dp[i][j] 表示 text1[0..i-1] 与 text2[0..j-1] 的 LCS 长度。若 text1[i-1] == text2[j-1]，dp[i][j] = dp[i-1][j-1] + 1；否则 max(dp[i-1][j], dp[i][j-1])。",
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
    "category": "多维动态规划",
    "description": "给你两个单词 word1 和 word2，请你计算出将 word1 转换成 word2 所使用的最少操作数。\n你可以对一个单词进行三种操作：1. 插入一个字符；2. 删除一个字符；3. 替换一个字符。\n\n【示例】\n输入：word1 = \"horse\", word2 = \"ros\" -> 输出：3 (horse->rorse->rose->ros)",
    "intuition": "【2D DP】字符匹配 `dp[i][j] = dp[i-1][j-1]`，不匹配 `min(插入, 删除, 替换) + 1`。",
    "timeComplexity": "O(M * N)",
    "spaceComplexity": "O(M * N)",
    "codeTemplates": {
      "java": "public int minDistance(String word1, String word2) {\n    int m = word1.length(), n = word2.length();\n    int[][] dp = new int[m + 1][n + 1];\n    for (int i = 0; i <= m; i++) dp[i][0] = i;\n    for (int j = 0; j <= n; j++) dp[0][j] = j;\n    for (int i = 1; i <= m; i++) {\n        for (int j = 1; j <= n; j++) {\n            if (word1.charAt(i - 1) == word2.charAt(j - 1)) dp[i][j] = dp[i - 1][j - 1];\n            else dp[i][j] = Math.min(dp[i - 1][j - 1], Math.min(dp[i - 1][j], dp[i][j - 1])) + 1;\n        }\n    }\n    return dp[m][n];\n}",
      "python": "def minDistance(word1: str, word2: str) -> int:\n    m, n = len(word1), len(word2)\n    dp = [[0] * (n + 1) for _ in range(m + 1)]\n    for i in range(m + 1): dp[i][0] = i\n    for j in range(n + 1): dp[0][j] = j\n    for i in range(1, m + 1):\n        for j in range(1, n + 1):\n            if word1[i - 1] == word2[j - 1]: dp[i][j] = dp[i - 1][j - 1]\n            else: dp[i][j] = min(dp[i - 1][j - 1], dp[i - 1][j], dp[i][j - 1]) + 1\n    return dp[m][n]"
    }
  },
  {
    "id": 136,
    "title": "只出现一次的数字",
    "englishTitle": "Single Number",
    "difficulty": "简单",
    "category": "技巧",
    "description": "给你一个非空整数数组 nums ，除了某个元素只出现一次以外，其余每个元素均出现两次。找出那个只出现了一次的元素。\n要求：线性时间复杂度 O(n) 且只使用常数额外空间 O(1)。\n\n【示例】\n输入：nums = [4,1,2,1,2] -> 输出：4",
    "intuition": "【异或 XOR 性质】a ^ a = 0, a ^ 0 = a。遍历对所有数字异或，成对的消除为 0，剩下的即为目标数。",
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
    "category": "技巧",
    "description": "给定一个大小为 n 的数组 nums ，返回其中的多数元素。多数元素是指在数组中出现次数大于 ⌊ n/2 ⌋ 的元素。你可以假设数组是非空的，并且给定的数组总是存在多数元素。\n\n【示例】\n输入：nums = [2,2,1,1,1,2,2] -> 输出：2",
    "intuition": "【摩尔投票法 Boyer-Moore】维护 candidate 和 count。遇相同 `count++`，不同 `count--`；`count == 0` 时更换 candidate。",
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
    "category": "技巧",
    "description": "给定一个包含红色(0)、白色(1)和蓝色(2)的数组 nums ，原地对它们进行排序，使得相同颜色的元素相邻，并按红、白、蓝顺序排列。\n必须在不使用库排序函数的情况下解决这个问题。\n\n【示例】\n输入：nums = [2,0,2,1,1,0] -> 输出：[0,0,1,1,2,2]",
    "intuition": "【荷航国旗问题三指针】p0 指向 0 区边界，p2 指向 2 区边界。curr 遇 0 与 p0 换，遇 2 与 p2 换。",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(1)",
    "codeTemplates": {
      "java": "public void sortColors(int[] nums) {\n    int p0 = 0, curr = 0, p2 = nums.length - 1;\n    while (curr <= p2) {\n        if (nums[curr] == 0) {\n            int t = nums[p0]; nums[p0++] = nums[curr]; nums[curr++] = t;\n        } else if (nums[curr] == 2) {\n            int t = nums[curr]; nums[curr] = nums[p2]; nums[p2--] = t;\n        } else curr++;\n    }\n}",
      "python": "def sortColors(nums: List[int]) -> None:\n    p0, curr, p2 = 0, 0, len(nums) - 1\n    while curr <= p2:\n        if nums[curr] == 0:\n            nums[p0], nums[curr] = nums[curr], nums[p0]\n            p0 += 1; curr += 1\n        elif nums[curr] == 2:\n            nums[curr], nums[p2] = nums[p2], nums[curr]\n            p2 -= 1\n        else: curr += 1"
    }
  },
  {
    "id": 31,
    "title": "下一个排列",
    "englishTitle": "Next Permutation",
    "difficulty": "中等",
    "category": "技巧",
    "description": "整数数组的“下一个排列”是指其整数按字典序排列的下一个更大排列。如果不存在下一个更大的排列，则将数组重排为最小的排列（即升序排列）。必须在原数组上原地修改。\n\n【示例】\n输入：nums = [1,2,3] -> 输出：[1,3,2]\n输入：nums = [3,2,1] -> 输出：[1,2,3] (字典序最大，重排为最小升序)",
    "intuition": "【从右找升序对 + 交换反转】从后向前找首个 nums[i] < nums[i+1]；再从后向前找首个 nums[j] > nums[i] 交换，最后反转 i+1 到末尾。",
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
    "category": "技巧",
    "description": "给定一个包含 n + 1 个整数的数组 nums ，其数字都在 [1, n] 范围内（包括 1 和 n），可知至少存在一个重复的整数。\n假设 nums 只有一个重复的整数，返回这个重复的数。要求：不修改原数组，且只使用常数空间 O(1)。\n\n【示例】\n输入：nums = [1,3,4,2,2] -> 输出：2",
    "intuition": "【Floyd 判圈算法】视数组下标为链表节点 `next = nums[i]`。快慢指针相遇后，指针从 head 出发同速前进求入环节点。",
    "timeComplexity": "O(N)",
    "spaceComplexity": "O(1)",
    "codeTemplates": {
      "java": "public int findDuplicate(int[] nums) {\n    int slow = nums[0], fast = nums[0];\n    do { slow = nums[slow]; fast = nums[nums[fast]]; } while (slow != fast);\n    int p1 = nums[0], p2 = slow;\n    while (p1 != p2) { p1 = nums[p1]; p2 = nums[p2]; }\n    return p1;\n}",
      "python": "def findDuplicate(nums: List[int]) -> int:\n    slow = fast = nums[0]\n    while True:\n        slow = nums[slow]; fast = nums[nums[fast]]\n        if slow == fast: break\n    p1, p2 = nums[0], slow\n    while p1 != p2: p1 = nums[p1]; p2 = nums[p2]\n    return p1"
    }
  }
];
