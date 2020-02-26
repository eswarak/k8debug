/*
Copyright 2019 Dave Weilert

Permission is hereby granted, free of charge, to any person obtaining a copy of this software 
and associated documentation files (the "Software"), to deal in the Software without restriction, 
including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, 
and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, 
subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial 
portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT 
LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. 
IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, 
WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE 
SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/

/*----------------------------------------------------------
 Common utility functions
*/

"use strict"

const cllr = require('../lib/cllr');

const euData = 
{
    "pink": [
     {
      "course": "CS-101",
      "segment": "Task",
      "work": "cloudctl",
      "milli": 1548922424801,
      "time": "1/31/2019, 8:13:44 AM",
      "evt": "start"
     },
     {
      "course": "CS-101",
      "segment": "Task",
      "work": "docker",
      "milli": 1548922553680,
      "time": "1/31/2019, 8:15:53 AM",
      "evt": "start"
     },
     {
      "course": "CS-101",
      "segment": "Task",
      "work": "kubectl",
      "milli": 1548922558434,
      "time": "1/31/2019, 8:15:58 AM",
      "evt": "start"
     },
     {
      "course": "CS-101",
      "segment": "Task",
      "work": "cloudctl",
      "milli": 1548922560289,
      "time": "1/31/2019, 8:16:00 AM",
      "evt": "start"
     },
     {
      "course": "CS-101",
      "segment": "MarkComplete",
      "work": "cloudctl",
      "milli": 1548922622713,
      "time": "1/31/2019, 8:17:02 AM",
      "evt": "complete"
     },
     {
      "course": "CS-101",
      "segment": "Task",
      "work": "docker",
      "milli": 1548922624665,
      "time": "1/31/2019, 8:17:04 AM",
      "evt": "start"
     },
     {
      "course": "CS-101",
      "segment": "MarkComplete",
      "work": "docker",
      "milli": 1548923018945,
      "time": "1/31/2019, 8:23:38 AM",
      "evt": "complete"
     },
     {
      "course": "CS-101",
      "segment": "Task",
      "work": "kubectl",
      "milli": 1548923029355,
      "time": "1/31/2019, 8:23:49 AM",
      "evt": "start"
     },
     {
      "course": "CS-101",
      "segment": "MarkComplete",
      "work": "kubectl",
      "milli": 1548923169840,
      "time": "1/31/2019, 8:26:09 AM",
      "evt": "complete"
     },
     {
      "course": "CS-102",
      "segment": "Task",
      "work": "T01",
      "milli": 1548924292737,
      "time": "1/31/2019, 8:44:52 AM",
      "evt": "start"
     },
     {
      "course": "CS-102",
      "segment": "Task",
      "work": "Introduction",
      "milli": 1548924294880,
      "time": "1/31/2019, 8:44:54 AM",
      "evt": "start"
     },
     {
      "course": "CS-102",
      "segment": "Task",
      "work": "T02",
      "milli": 1548924297999,
      "time": "1/31/2019, 8:44:57 AM",
      "evt": "start"
     },
     {
      "course": "CS-102",
      "segment": "Task",
      "work": "T01",
      "milli": 1548924300451,
      "time": "1/31/2019, 8:45:00 AM",
      "evt": "start"
     },
     {
      "course": "CS-102",
      "segment": "Task",
      "work": "Introduction",
      "milli": 1548924302661,
      "time": "1/31/2019, 8:45:02 AM",
      "evt": "start"
     },
     {
      "course": "CS-102",
      "segment": "Task",
      "work": "T01",
      "milli": 1548924348226,
      "time": "1/31/2019, 8:45:48 AM",
      "evt": "start"
     },
     {
      "course": "CS-102",
      "segment": "Task",
      "work": "T02",
      "milli": 1548924351698,
      "time": "1/31/2019, 8:45:51 AM",
      "evt": "start"
     },
     {
      "course": "CS-102",
      "segment": "Task",
      "work": "T01",
      "milli": 1548924358407,
      "time": "1/31/2019, 8:45:58 AM",
      "evt": "start"
     },
     {
      "course": "CS-102",
      "segment": "MarkComplete",
      "work": "T01",
      "milli": 1548924424126,
      "time": "1/31/2019, 8:47:04 AM",
      "evt": "complete"
     },
     {
      "course": "CS-102",
      "segment": "Task",
      "work": "T02",
      "milli": 1548924427595,
      "time": "1/31/2019, 8:47:07 AM",
      "evt": "start"
     },
     {
      "course": "CS-102",
      "segment": "Task",
      "work": "T03",
      "milli": 1548924539189,
      "time": "1/31/2019, 8:48:59 AM",
      "evt": "start"
     },
     {
      "course": "CS-102",
      "segment": "Task",
      "work": "T04",
      "milli": 1548924591588,
      "time": "1/31/2019, 8:49:51 AM",
      "evt": "start"
     },
     {
      "course": "CS-102",
      "segment": "MarkComplete",
      "work": "T04",
      "milli": 1548924617053,
      "time": "1/31/2019, 8:50:17 AM",
      "evt": "complete"
     },
     {
      "course": "CS-102",
      "segment": "Task",
      "work": "T05",
      "milli": 1548924636487,
      "time": "1/31/2019, 8:50:36 AM",
      "evt": "start"
     },
     {
      "course": "CS-102",
      "segment": "Task",
      "work": "T06",
      "milli": 1548924715580,
      "time": "1/31/2019, 8:51:55 AM",
      "evt": "start"
     },
     {
      "course": "CS-102",
      "segment": "Task",
      "work": "T07",
      "milli": 1548924756291,
      "time": "1/31/2019, 8:52:36 AM",
      "evt": "start"
     },
     {
      "course": "CS-102",
      "segment": "MarkComplete",
      "work": "T07",
      "milli": 1548924912497,
      "time": "1/31/2019, 8:55:12 AM",
      "evt": "complete"
     },
     {
      "course": "CS-102",
      "segment": "Task",
      "work": "T03",
      "milli": 1548924944586,
      "time": "1/31/2019, 8:55:44 AM",
      "evt": "start"
     },
     {
      "course": "CS-102",
      "segment": "MarkComplete",
      "work": "T03",
      "milli": 1548924948615,
      "time": "1/31/2019, 8:55:48 AM",
      "evt": "complete"
     },
     {
      "course": "CS-102",
      "segment": "Task",
      "work": "T04",
      "milli": 1548924952385,
      "time": "1/31/2019, 8:55:52 AM",
      "evt": "start"
     },
     {
      "course": "CS-102",
      "segment": "Task",
      "work": "T05",
      "milli": 1548924956018,
      "time": "1/31/2019, 8:55:56 AM",
      "evt": "start"
     },
     {
      "course": "CS-102",
      "segment": "MarkComplete",
      "work": "T05",
      "milli": 1548924957938,
      "time": "1/31/2019, 8:55:57 AM",
      "evt": "complete"
     },
     {
      "course": "CS-102",
      "segment": "Task",
      "work": "T06",
      "milli": 1548924961704,
      "time": "1/31/2019, 8:56:01 AM",
      "evt": "start"
     },
     {
      "course": "CS-102",
      "segment": "MarkComplete",
      "work": "T06",
      "milli": 1548924963961,
      "time": "1/31/2019, 8:56:03 AM",
      "evt": "complete"
     },
     {
      "course": "CS-102",
      "segment": "Task",
      "work": "T07",
      "milli": 1548924965918,
      "time": "1/31/2019, 8:56:05 AM",
      "evt": "start"
     },
     {
      "course": "CS-102",
      "segment": "Task",
      "work": "T08",
      "milli": 1548924975971,
      "time": "1/31/2019, 8:56:15 AM",
      "evt": "start"
     },
     {
      "course": "CS-102",
      "segment": "MarkComplete",
      "work": "T08",
      "milli": 1548925584157,
      "time": "1/31/2019, 9:06:24 AM",
      "evt": "complete"
     },
     {
      "course": "CS-102",
      "segment": "Task",
      "work": "T09",
      "milli": 1548925722811,
      "time": "1/31/2019, 9:08:42 AM",
      "evt": "start"
     },
     {
      "course": "CS-102",
      "segment": "MarkComplete",
      "work": "T09",
      "milli": 1548925821408,
      "time": "1/31/2019, 9:10:21 AM",
      "evt": "complete"
     },
     {
      "course": "CS-102",
      "segment": "Task",
      "work": "T10",
      "milli": 1548925824155,
      "time": "1/31/2019, 9:10:24 AM",
      "evt": "start"
     },
     {
      "course": "CS-102",
      "segment": "Task",
      "work": "T10",
      "milli": 1548926097445,
      "time": "1/31/2019, 9:14:57 AM",
      "evt": "start"
     },
     {
      "course": "CS-102",
      "segment": "Task",
      "work": "T10",
      "milli": 1548926098339,
      "time": "1/31/2019, 9:14:58 AM",
      "evt": "start"
     },
     {
      "course": "CS-102",
      "segment": "Task",
      "work": "T10",
      "milli": 1548926100305,
      "time": "1/31/2019, 9:15:00 AM",
      "evt": "start"
     },
     {
      "course": "CS-102",
      "segment": "MarkComplete",
      "work": "T10",
      "milli": 1548926104279,
      "time": "1/31/2019, 9:15:04 AM",
      "evt": "complete"
     },
     {
      "course": "CS-102",
      "segment": "Task",
      "work": "T11",
      "milli": 1548926107754,
      "time": "1/31/2019, 9:15:07 AM",
      "evt": "start"
     },
     {
      "course": "CS-102",
      "segment": "MarkComplete",
      "work": "T11",
      "milli": 1548926167312,
      "time": "1/31/2019, 9:16:07 AM",
      "evt": "complete"
     },
     {
      "course": "CS-102",
      "segment": "Task",
      "work": "T12",
      "milli": 1548926174537,
      "time": "1/31/2019, 9:16:14 AM",
      "evt": "start"
     },
     {
      "course": "CS-102",
      "segment": "MarkComplete",
      "work": "T12",
      "milli": 1548926205003,
      "time": "1/31/2019, 9:16:45 AM",
      "evt": "complete"
     },
     {
      "course": "CS-103",
      "segment": "Lab",
      "work": "Create",
      "milli": 1548926847907,
      "time": "1/31/2019, 9:27:27 AM",
      "evt": "start"
     },
     {
      "course": "CS-103",
      "segment": "Lab",
      "work": "Create",
      "milli": 1548927862142,
      "time": "1/31/2019, 9:44:22 AM",
      "evt": "start"
     },
     {
      "course": "CS-103",
      "segment": "Lab",
      "work": "Create",
      "milli": 1548928055196,
      "time": "1/31/2019, 9:47:35 AM",
      "evt": "start"
     },
     {
      "course": "CS-103",
      "segment": "Lab",
      "work": "Create",
      "milli": 1548928057692,
      "time": "1/31/2019, 9:47:37 AM",
      "evt": "start"
     },
     {
      "course": "CS-103",
      "segment": "Lab",
      "work": "Create",
      "milli": 1548928075429,
      "time": "1/31/2019, 9:47:55 AM",
      "evt": "start"
     },
     {
      "course": "CS-103",
      "segment": "Lab",
      "work": "Starting",
      "milli": 1548928084810,
      "time": "1/31/2019, 9:48:04 AM",
      "evt": "start"
     },
     {
      "course": "CS-103",
      "segment": "Lab",
      "work": "Create",
      "milli": 1548928087556,
      "time": "1/31/2019, 9:48:07 AM",
      "evt": "start"
     },
     {
      "course": "CS-103",
      "segment": "Lab",
      "work": "Create",
      "milli": 1548928089058,
      "time": "1/31/2019, 9:48:09 AM",
      "evt": "start"
     },
     {
      "course": "CS-103",
      "segment": "Lab",
      "work": "Create",
      "milli": 1548928114415,
      "time": "1/31/2019, 9:48:34 AM",
      "evt": "start"
     },
     {
      "course": "CS-103",
      "segment": "Lab",
      "work": "Create",
      "milli": 1548928118177,
      "time": "1/31/2019, 9:48:38 AM",
      "evt": "start"
     },
     {
      "course": "CS-103",
      "segment": "Lab",
      "work": "Create",
      "milli": 1548928118787,
      "time": "1/31/2019, 9:48:38 AM",
      "evt": "start"
     },
     {
      "course": "CS-103",
      "segment": "Lab",
      "work": "Syntax",
      "milli": 1548928138608,
      "time": "1/31/2019, 9:48:58 AM",
      "evt": "start"
     },
     {
      "course": "CS-103",
      "segment": "Lab",
      "work": "Create",
      "milli": 1548928140178,
      "time": "1/31/2019, 9:49:00 AM",
      "evt": "start"
     },
     {
      "course": "CS-103",
      "segment": "Lab",
      "work": "Create",
      "milli": 1548928148482,
      "time": "1/31/2019, 9:49:08 AM",
      "evt": "start"
     },
     {
      "course": "CS-103",
      "segment": "Lab",
      "work": "Create",
      "milli": 1548928275043,
      "time": "1/31/2019, 9:51:15 AM",
      "evt": "start"
     },
     {
      "course": "CS-103",
      "segment": "Lab",
      "work": "Create",
      "milli": 1548928279124,
      "time": "1/31/2019, 9:51:19 AM",
      "evt": "start"
     },
     {
      "course": "CS-103",
      "segment": "AutoComplete",
      "work": "Create",
      "milli": 1548928344460,
      "time": "1/31/2019, 9:52:24 AM",
      "evt": "complete"
     },
     {
      "course": "CS-103",
      "segment": "Lab",
      "work": "Syntax",
      "milli": 1548928489567,
      "time": "1/31/2019, 9:54:49 AM",
      "evt": "start"
     },
     {
      "course": "CS-103",
      "segment": "AutoComplete",
      "work": "Syntax",
      "milli": 1548929109708,
      "time": "1/31/2019, 10:05:09 AM",
      "evt": "complete"
     },
     {
      "course": "CS-103",
      "segment": "Lab",
      "work": "Resources",
      "milli": 1548929119339,
      "time": "1/31/2019, 10:05:19 AM",
      "evt": "start"
     },
     {
      "course": "CS-103",
      "segment": "AutoComplete",
      "work": "Resources",
      "milli": 1548929694324,
      "time": "1/31/2019, 10:14:54 AM",
      "evt": "complete"
     },
     {
      "course": "CS-103",
      "segment": "Lab",
      "work": "Images",
      "milli": 1548929713205,
      "time": "1/31/2019, 10:15:13 AM",
      "evt": "start"
     },
     {
      "course": "CS-103",
      "segment": "AutoComplete",
      "work": "Images",
      "milli": 1548930297451,
      "time": "1/31/2019, 10:24:57 AM",
      "evt": "complete"
     },
     {
      "course": "CS-103",
      "segment": "AutoComplete",
      "work": "Images",
      "milli": 1548930488764,
      "time": "1/31/2019, 10:28:08 AM",
      "evt": "complete"
     },
     {
      "course": "CS-103",
      "segment": "Lab",
      "work": "Security",
      "milli": 1548930528049,
      "time": "1/31/2019, 10:28:48 AM",
      "evt": "start"
     },
     {
      "course": "CS-103",
      "segment": "AutoComplete",
      "work": "Security",
      "milli": 1548931214271,
      "time": "1/31/2019, 10:40:14 AM",
      "evt": "complete"
     },
     {
      "course": "CS-103",
      "segment": "Lab",
      "work": "Networking",
      "milli": 1548931234386,
      "time": "1/31/2019, 10:40:34 AM",
      "evt": "start"
     },
     {
      "course": "CS-103",
      "segment": "AutoComplete",
      "work": "Networking",
      "milli": 1548932099244,
      "time": "1/31/2019, 10:54:59 AM",
      "evt": "complete"
     },
     {
      "course": "CS-103",
      "segment": "Lab",
      "work": "Running",
      "milli": 1548932117510,
      "time": "1/31/2019, 10:55:17 AM",
      "evt": "start"
     },
     {
      "course": "CS-103",
      "segment": "AutoComplete",
      "work": "Running",
      "milli": 1548932381641,
      "time": "1/31/2019, 10:59:41 AM",
      "evt": "complete"
     },
     {
      "course": "CS-103",
      "segment": "Lab",
      "work": "Starting",
      "milli": 1548932412038,
      "time": "1/31/2019, 11:00:12 AM",
      "evt": "start"
     },
     {
      "course": "CS-103",
      "segment": "AutoComplete",
      "work": "Starting",
      "milli": 1548932774438,
      "time": "1/31/2019, 11:06:14 AM",
      "evt": "complete"
     },
     {
      "course": "CS-104",
      "segment": "Task",
      "work": "ICP01",
      "milli": 1548932822788,
      "time": "1/31/2019, 11:07:02 AM",
      "evt": "start"
     },
     {
      "course": "CS-104",
      "segment": "MarkComplete",
      "work": "ICP01",
      "milli": 1548933195376,
      "time": "1/31/2019, 11:13:15 AM",
      "evt": "complete"
     },
     {
      "course": "CS-104",
      "segment": "Task",
      "work": "ICP02",
      "milli": 1548933200023,
      "time": "1/31/2019, 11:13:20 AM",
      "evt": "start"
     },
     {
      "course": "CS-104",
      "segment": "MarkComplete",
      "work": "ICP02",
      "milli": 1548933253616,
      "time": "1/31/2019, 11:14:13 AM",
      "evt": "complete"
     },
     {
      "course": "CS-104",
      "segment": "Task",
      "work": "ICP03",
      "milli": 1548933255525,
      "time": "1/31/2019, 11:14:15 AM",
      "evt": "start"
     },
     {
      "course": "CS-104",
      "segment": "MarkComplete",
      "work": "ICP03",
      "milli": 1548933425435,
      "time": "1/31/2019, 11:17:05 AM",
      "evt": "complete"
     },
     {
      "course": "CS-104",
      "segment": "Task",
      "work": "ICP04",
      "milli": 1548933430766,
      "time": "1/31/2019, 11:17:10 AM",
      "evt": "start"
     },
     {
      "course": "CS-104",
      "segment": "MarkComplete",
      "work": "ICP04",
      "milli": 1548933472188,
      "time": "1/31/2019, 11:17:52 AM",
      "evt": "complete"
     }
    ],
    "lime": [
     {
      "course": "CS-101",
      "segment": "Task",
      "work": "cloudctl",
      "milli": 1548922862020,
      "time": "1/31/2019, 8:21:02 AM",
      "evt": "start"
     },
     {
      "course": "CS-101",
      "segment": "MarkComplete",
      "work": "cloudctl",
      "milli": 1548922937190,
      "time": "1/31/2019, 8:22:17 AM",
      "evt": "complete"
     },
     {
      "course": "CS-101",
      "segment": "Task",
      "work": "docker",
      "milli": 1548922949655,
      "time": "1/31/2019, 8:22:29 AM",
      "evt": "start"
     },
     {
      "course": "CS-101",
      "segment": "Task",
      "work": "kubectl",
      "milli": 1548923065424,
      "time": "1/31/2019, 8:24:25 AM",
      "evt": "start"
     },
     {
      "course": "CS-101",
      "segment": "Task",
      "work": "cloudctl",
      "milli": 1548923088632,
      "time": "1/31/2019, 8:24:48 AM",
      "evt": "start"
     },
     {
      "course": "CS-101",
      "segment": "Task",
      "work": "docker",
      "milli": 1548923123550,
      "time": "1/31/2019, 8:25:23 AM",
      "evt": "start"
     },
     {
      "course": "CS-101",
      "segment": "Task",
      "work": "kubectl",
      "milli": 1548923126112,
      "time": "1/31/2019, 8:25:26 AM",
      "evt": "start"
     },
     {
      "course": "CS-101",
      "segment": "MarkComplete",
      "work": "kubectl",
      "milli": 1548923229419,
      "time": "1/31/2019, 8:27:09 AM",
      "evt": "complete"
     },
     {
      "course": "CS-101",
      "segment": "Task",
      "work": "docker",
      "milli": 1548923232442,
      "time": "1/31/2019, 8:27:12 AM",
      "evt": "start"
     },
     {
      "course": "CS-101",
      "segment": "MarkComplete",
      "work": "docker",
      "milli": 1548923235389,
      "time": "1/31/2019, 8:27:15 AM",
      "evt": "complete"
     },
     {
      "course": "CS-101",
      "segment": "Task",
      "work": "kubectl",
      "milli": 1548923237797,
      "time": "1/31/2019, 8:27:17 AM",
      "evt": "start"
     },
     {
      "course": "CS-101",
      "segment": "Task",
      "work": "cloudctl",
      "milli": 1548923242074,
      "time": "1/31/2019, 8:27:22 AM",
      "evt": "start"
     },
     {
      "course": "CS-101",
      "segment": "Task",
      "work": "cloudctl",
      "milli": 1548924223171,
      "time": "1/31/2019, 8:43:43 AM",
      "evt": "start"
     },
     {
      "course": "CS-102",
      "segment": "Task",
      "work": "T01",
      "milli": 1548924324233,
      "time": "1/31/2019, 8:45:24 AM",
      "evt": "start"
     },
     {
      "course": "CS-102",
      "segment": "Task",
      "work": "T01",
      "milli": 1548924408037,
      "time": "1/31/2019, 8:46:48 AM",
      "evt": "start"
     },
     {
      "course": "CS-102",
      "segment": "Task",
      "work": "T01",
      "milli": 1548924418278,
      "time": "1/31/2019, 8:46:58 AM",
      "evt": "start"
     },
     {
      "course": "CS-102",
      "segment": "Task",
      "work": "T01",
      "milli": 1548924424013,
      "time": "1/31/2019, 8:47:04 AM",
      "evt": "start"
     },
     {
      "course": "CS-102",
      "segment": "Task",
      "work": "T01",
      "milli": 1548924425078,
      "time": "1/31/2019, 8:47:05 AM",
      "evt": "start"
     },
     {
      "course": "CS-102",
      "segment": "Task",
      "work": "T01",
      "milli": 1548924426970,
      "time": "1/31/2019, 8:47:06 AM",
      "evt": "start"
     },
     {
      "course": "CS-102",
      "segment": "Task",
      "work": "T02",
      "milli": 1548924428855,
      "time": "1/31/2019, 8:47:08 AM",
      "evt": "start"
     },
     {
      "course": "CS-102",
      "segment": "Task",
      "work": "T02",
      "milli": 1548924432776,
      "time": "1/31/2019, 8:47:12 AM",
      "evt": "start"
     },
     {
      "course": "CS-102",
      "segment": "MarkComplete",
      "work": "T02",
      "milli": 1548924517436,
      "time": "1/31/2019, 8:48:37 AM",
      "evt": "complete"
     },
     {
      "course": "CS-102",
      "segment": "Task",
      "work": "T01",
      "milli": 1548924540780,
      "time": "1/31/2019, 8:49:00 AM",
      "evt": "start"
     },
     {
      "course": "CS-102",
      "segment": "MarkComplete",
      "work": "T01",
      "milli": 1548924544364,
      "time": "1/31/2019, 8:49:04 AM",
      "evt": "complete"
     },
     {
      "course": "CS-102",
      "segment": "Task",
      "work": "T03",
      "milli": 1548924547549,
      "time": "1/31/2019, 8:49:07 AM",
      "evt": "start"
     },
     {
      "course": "CS-102",
      "segment": "Task",
      "work": "T03",
      "milli": 1548924571192,
      "time": "1/31/2019, 8:49:31 AM",
      "evt": "start"
     },
     {
      "course": "CS-102",
      "segment": "MarkComplete",
      "work": "T03",
      "milli": 1548924574276,
      "time": "1/31/2019, 8:49:34 AM",
      "evt": "complete"
     },
     {
      "course": "CS-102",
      "segment": "Task",
      "work": "T04",
      "milli": 1548924583418,
      "time": "1/31/2019, 8:49:43 AM",
      "evt": "start"
     },
     {
      "course": "CS-102",
      "segment": "Task",
      "work": "T04",
      "milli": 1548924586615,
      "time": "1/31/2019, 8:49:46 AM",
      "evt": "start"
     },
     {
      "course": "CS-102",
      "segment": "MarkComplete",
      "work": "T04",
      "milli": 1548924605579,
      "time": "1/31/2019, 8:50:05 AM",
      "evt": "complete"
     },
     {
      "course": "CS-102",
      "segment": "Task",
      "work": "T05",
      "milli": 1548924608014,
      "time": "1/31/2019, 8:50:08 AM",
      "evt": "start"
     },
     {
      "course": "CS-102",
      "segment": "Task",
      "work": "T05",
      "milli": 1548924609550,
      "time": "1/31/2019, 8:50:09 AM",
      "evt": "start"
     },
     {
      "course": "CS-102",
      "segment": "Task",
      "work": "T05",
      "milli": 1548924617527,
      "time": "1/31/2019, 8:50:17 AM",
      "evt": "start"
     },
     {
      "course": "CS-102",
      "segment": "Task",
      "work": "T05",
      "milli": 1548924620365,
      "time": "1/31/2019, 8:50:20 AM",
      "evt": "start"
     },
     {
      "course": "CS-102",
      "segment": "Task",
      "work": "T04",
      "milli": 1548924622859,
      "time": "1/31/2019, 8:50:22 AM",
      "evt": "start"
     },
     {
      "course": "CS-102",
      "segment": "Task",
      "work": "T05",
      "milli": 1548924624577,
      "time": "1/31/2019, 8:50:24 AM",
      "evt": "start"
     },
     {
      "course": "CS-102",
      "segment": "Task",
      "work": "T05",
      "milli": 1548924629240,
      "time": "1/31/2019, 8:50:29 AM",
      "evt": "start"
     },
     {
      "course": "CS-102",
      "segment": "MarkComplete",
      "work": "T05",
      "milli": 1548924742272,
      "time": "1/31/2019, 8:52:22 AM",
      "evt": "complete"
     },
     {
      "course": "CS-102",
      "segment": "Task",
      "work": "T04",
      "milli": 1548924747140,
      "time": "1/31/2019, 8:52:27 AM",
      "evt": "start"
     },
     {
      "course": "CS-102",
      "segment": "Task",
      "work": "T06",
      "milli": 1548924758629,
      "time": "1/31/2019, 8:52:38 AM",
      "evt": "start"
     },
     {
      "course": "CS-102",
      "segment": "MarkComplete",
      "work": "T06",
      "milli": 1548924799446,
      "time": "1/31/2019, 8:53:19 AM",
      "evt": "complete"
     },
     {
      "course": "CS-102",
      "segment": "Task",
      "work": "T07",
      "milli": 1548924802045,
      "time": "1/31/2019, 8:53:22 AM",
      "evt": "start"
     },
     {
      "course": "CS-102",
      "segment": "MarkComplete",
      "work": "T07",
      "milli": 1548924846529,
      "time": "1/31/2019, 8:54:06 AM",
      "evt": "complete"
     },
     {
      "course": "CS-102",
      "segment": "Task",
      "work": "T08",
      "milli": 1548924852649,
      "time": "1/31/2019, 8:54:12 AM",
      "evt": "start"
     },
     {
      "course": "CS-102",
      "segment": "Task",
      "work": "T08",
      "milli": 1548924854333,
      "time": "1/31/2019, 8:54:14 AM",
      "evt": "start"
     },
     {
      "course": "CS-102",
      "segment": "Task",
      "work": "T08",
      "milli": 1548924872389,
      "time": "1/31/2019, 8:54:32 AM",
      "evt": "start"
     },
     {
      "course": "CS-102",
      "segment": "Task",
      "work": "T07",
      "milli": 1548924874144,
      "time": "1/31/2019, 8:54:34 AM",
      "evt": "start"
     },
     {
      "course": "CS-102",
      "segment": "Task",
      "work": "T08",
      "milli": 1548924875631,
      "time": "1/31/2019, 8:54:35 AM",
      "evt": "start"
     },
     {
      "course": "CS-102",
      "segment": "Task",
      "work": "T07",
      "milli": 1548925059784,
      "time": "1/31/2019, 8:57:39 AM",
      "evt": "start"
     },
     {
      "course": "CS-102",
      "segment": "Task",
      "work": "T08",
      "milli": 1548925095848,
      "time": "1/31/2019, 8:58:15 AM",
      "evt": "start"
     },
     {
      "course": "CS-102",
      "segment": "MarkComplete",
      "work": "T08",
      "milli": 1548925142974,
      "time": "1/31/2019, 8:59:02 AM",
      "evt": "complete"
     },
     {
      "course": "CS-102",
      "segment": "Task",
      "work": "T09",
      "milli": 1548925146616,
      "time": "1/31/2019, 8:59:06 AM",
      "evt": "start"
     },
     {
      "course": "CS-102",
      "segment": "Task",
      "work": "T09",
      "milli": 1548925172962,
      "time": "1/31/2019, 8:59:32 AM",
      "evt": "start"
     },
     {
      "course": "CS-102",
      "segment": "Task",
      "work": "T08",
      "milli": 1548925174807,
      "time": "1/31/2019, 8:59:34 AM",
      "evt": "start"
     },
     {
      "course": "CS-102",
      "segment": "Task",
      "work": "T08",
      "milli": 1548925178942,
      "time": "1/31/2019, 8:59:38 AM",
      "evt": "start"
     },
     {
      "course": "CS-102",
      "segment": "Task",
      "work": "T10",
      "milli": 1548925189564,
      "time": "1/31/2019, 8:59:49 AM",
      "evt": "start"
     },
     {
      "course": "CS-102",
      "segment": "Task",
      "work": "T09",
      "milli": 1548925192595,
      "time": "1/31/2019, 8:59:52 AM",
      "evt": "start"
     },
     {
      "course": "CS-102",
      "segment": "MarkComplete",
      "work": "T09",
      "milli": 1548925268393,
      "time": "1/31/2019, 9:01:08 AM",
      "evt": "complete"
     },
     {
      "course": "CS-102",
      "segment": "Task",
      "work": "T10",
      "milli": 1548925275900,
      "time": "1/31/2019, 9:01:15 AM",
      "evt": "start"
     },
     {
      "course": "CS-102",
      "segment": "Task",
      "work": "T10",
      "milli": 1548925398318,
      "time": "1/31/2019, 9:03:18 AM",
      "evt": "start"
     },
     {
      "course": "CS-102",
      "segment": "Task",
      "work": "T09",
      "milli": 1548925399903,
      "time": "1/31/2019, 9:03:19 AM",
      "evt": "start"
     },
     {
      "course": "CS-102",
      "segment": "Task",
      "work": "T10",
      "milli": 1548925401448,
      "time": "1/31/2019, 9:03:21 AM",
      "evt": "start"
     },
     {
      "course": "CS-102",
      "segment": "Task",
      "work": "T10",
      "milli": 1548925405439,
      "time": "1/31/2019, 9:03:25 AM",
      "evt": "start"
     },
     {
      "course": "CS-102",
      "segment": "Task",
      "work": "T10",
      "milli": 1548925406524,
      "time": "1/31/2019, 9:03:26 AM",
      "evt": "start"
     },
     {
      "course": "CS-102",
      "segment": "MarkComplete",
      "work": "T10",
      "milli": 1548925412007,
      "time": "1/31/2019, 9:03:32 AM",
      "evt": "complete"
     },
     {
      "course": "CS-102",
      "segment": "Task",
      "work": "T09",
      "milli": 1548925414860,
      "time": "1/31/2019, 9:03:34 AM",
      "evt": "start"
     },
     {
      "course": "CS-102",
      "segment": "Task",
      "work": "T10",
      "milli": 1548925416513,
      "time": "1/31/2019, 9:03:36 AM",
      "evt": "start"
     },
     {
      "course": "CS-102",
      "segment": "Task",
      "work": "T10",
      "milli": 1548925417692,
      "time": "1/31/2019, 9:03:37 AM",
      "evt": "start"
     },
     {
      "course": "CS-102",
      "segment": "Task",
      "work": "T11",
      "milli": 1548925442400,
      "time": "1/31/2019, 9:04:02 AM",
      "evt": "start"
     },
     {
      "course": "CS-102",
      "segment": "MarkComplete",
      "work": "T11",
      "milli": 1548925505090,
      "time": "1/31/2019, 9:05:05 AM",
      "evt": "complete"
     },
     {
      "course": "CS-102",
      "segment": "Task",
      "work": "T12",
      "milli": 1548925508389,
      "time": "1/31/2019, 9:05:08 AM",
      "evt": "start"
     },
     {
      "course": "CS-102",
      "segment": "Task",
      "work": "T12",
      "milli": 1548925511905,
      "time": "1/31/2019, 9:05:11 AM",
      "evt": "start"
     },
     {
      "course": "CS-102",
      "segment": "MarkComplete",
      "work": "T12",
      "milli": 1548925525827,
      "time": "1/31/2019, 9:05:25 AM",
      "evt": "complete"
     },
     {
      "course": "CS-103",
      "segment": "Lab",
      "work": "Create",
      "milli": 1548926886612,
      "time": "1/31/2019, 9:28:06 AM",
      "evt": "start"
     },
     {
      "course": "CS-103",
      "segment": "Lab",
      "work": "Create",
      "milli": 1548927085364,
      "time": "1/31/2019, 9:31:25 AM",
      "evt": "start"
     },
     {
      "course": "CS-103",
      "segment": "Lab",
      "work": "Syntax",
      "milli": 1548927089333,
      "time": "1/31/2019, 9:31:29 AM",
      "evt": "start"
     },
     {
      "course": "CS-103",
      "segment": "Lab",
      "work": "Create",
      "milli": 1548927091175,
      "time": "1/31/2019, 9:31:31 AM",
      "evt": "start"
     },
     {
      "course": "CS-103",
      "segment": "Lab",
      "work": "Create",
      "milli": 1548927093019,
      "time": "1/31/2019, 9:31:33 AM",
      "evt": "start"
     },
     {
      "course": "CS-103",
      "segment": "Lab",
      "work": "Syntax",
      "milli": 1548927112232,
      "time": "1/31/2019, 9:31:52 AM",
      "evt": "start"
     },
     {
      "course": "CS-103",
      "segment": "Lab",
      "work": "Create",
      "milli": 1548927113884,
      "time": "1/31/2019, 9:31:53 AM",
      "evt": "start"
     },
     {
      "course": "CS-103",
      "segment": "AutoComplete",
      "work": "Create",
      "milli": 1548927188023,
      "time": "1/31/2019, 9:33:08 AM",
      "evt": "complete"
     },
     {
      "course": "CS-103",
      "segment": "Lab",
      "work": "Syntax",
      "milli": 1548927218098,
      "time": "1/31/2019, 9:33:38 AM",
      "evt": "start"
     },
     {
      "course": "CS-103",
      "segment": "Lab",
      "work": "Create",
      "milli": 1548927591544,
      "time": "1/31/2019, 9:39:51 AM",
      "evt": "start"
     },
     {
      "course": "CS-103",
      "segment": "Lab",
      "work": "Syntax",
      "milli": 1548927627467,
      "time": "1/31/2019, 9:40:27 AM",
      "evt": "start"
     },
     {
      "course": "CS-103",
      "segment": "AutoComplete",
      "work": "Syntax",
      "milli": 1548927833156,
      "time": "1/31/2019, 9:43:53 AM",
      "evt": "complete"
     },
     {
      "course": "CS-103",
      "segment": "Lab",
      "work": "Syntax",
      "milli": 1548927885034,
      "time": "1/31/2019, 9:44:45 AM",
      "evt": "start"
     },
     {
      "course": "CS-103",
      "segment": "Lab",
      "work": "Create",
      "milli": 1548927887063,
      "time": "1/31/2019, 9:44:47 AM",
      "evt": "start"
     },
     {
      "course": "CS-103",
      "segment": "Lab",
      "work": "Syntax",
      "milli": 1548927892745,
      "time": "1/31/2019, 9:44:52 AM",
      "evt": "start"
     },
     {
      "course": "CS-103",
      "segment": "Lab",
      "work": "Create",
      "milli": 1548927896684,
      "time": "1/31/2019, 9:44:56 AM",
      "evt": "start"
     },
     {
      "course": "CS-103",
      "segment": "Lab",
      "work": "Resources",
      "milli": 1548927907746,
      "time": "1/31/2019, 9:45:07 AM",
      "evt": "start"
     },
     {
      "course": "CS-103",
      "segment": "AutoComplete",
      "work": "Resources",
      "milli": 1548928390746,
      "time": "1/31/2019, 9:53:10 AM",
      "evt": "complete"
     },
     {
      "course": "CS-103",
      "segment": "Lab",
      "work": "Images",
      "milli": 1548928489924,
      "time": "1/31/2019, 9:54:49 AM",
      "evt": "start"
     },
     {
      "course": "CS-103",
      "segment": "Lab",
      "work": "Images",
      "milli": 1548928491974,
      "time": "1/31/2019, 9:54:51 AM",
      "evt": "start"
     },
     {
      "course": "CS-103",
      "segment": "AutoComplete",
      "work": "Images",
      "milli": 1548928870307,
      "time": "1/31/2019, 10:01:10 AM",
      "evt": "complete"
     },
     {
      "course": "CS-103",
      "segment": "Lab",
      "work": "Resources",
      "milli": 1548928893703,
      "time": "1/31/2019, 10:01:33 AM",
      "evt": "start"
     },
     {
      "course": "CS-103",
      "segment": "Lab",
      "work": "Syntax",
      "milli": 1548928898503,
      "time": "1/31/2019, 10:01:38 AM",
      "evt": "start"
     },
     {
      "course": "CS-103",
      "segment": "Lab",
      "work": "Images",
      "milli": 1548928915777,
      "time": "1/31/2019, 10:01:55 AM",
      "evt": "start"
     },
     {
      "course": "CS-103",
      "segment": "Lab",
      "work": "Security",
      "milli": 1548928921010,
      "time": "1/31/2019, 10:02:01 AM",
      "evt": "start"
     },
     {
      "course": "CS-103",
      "segment": "Lab",
      "work": "Security",
      "milli": 1548928946375,
      "time": "1/31/2019, 10:02:26 AM",
      "evt": "start"
     },
     {
      "course": "CS-103",
      "segment": "Lab",
      "work": "Images",
      "milli": 1548928948902,
      "time": "1/31/2019, 10:02:28 AM",
      "evt": "start"
     },
     {
      "course": "CS-103",
      "segment": "Lab",
      "work": "Security",
      "milli": 1548928951827,
      "time": "1/31/2019, 10:02:31 AM",
      "evt": "start"
     },
     {
      "course": "CS-103",
      "segment": "AutoComplete",
      "work": "Security",
      "milli": 1548929153128,
      "time": "1/31/2019, 10:05:53 AM",
      "evt": "complete"
     },
     {
      "course": "CS-103",
      "segment": "Lab",
      "work": "Networking",
      "milli": 1548929594936,
      "time": "1/31/2019, 10:13:14 AM",
      "evt": "start"
     },
     {
      "course": "CS-103",
      "segment": "Lab",
      "work": "Networking",
      "milli": 1548929667250,
      "time": "1/31/2019, 10:14:27 AM",
      "evt": "start"
     },
     {
      "course": "CS-103",
      "segment": "Lab",
      "work": "Images",
      "milli": 1548929669052,
      "time": "1/31/2019, 10:14:29 AM",
      "evt": "start"
     },
     {
      "course": "CS-103",
      "segment": "Lab",
      "work": "Networking",
      "milli": 1548929670577,
      "time": "1/31/2019, 10:14:30 AM",
      "evt": "start"
     },
     {
      "course": "CS-103",
      "segment": "AutoComplete",
      "work": "Networking",
      "milli": 1548930021520,
      "time": "1/31/2019, 10:20:21 AM",
      "evt": "complete"
     },
     {
      "course": "CS-103",
      "segment": "Lab",
      "work": "Running",
      "milli": 1548930039621,
      "time": "1/31/2019, 10:20:39 AM",
      "evt": "start"
     },
     {
      "course": "CS-103",
      "segment": "AutoComplete",
      "work": "Running",
      "milli": 1548930330938,
      "time": "1/31/2019, 10:25:30 AM",
      "evt": "complete"
     },
     {
      "course": "CS-103",
      "segment": "Lab",
      "work": "Starting",
      "milli": 1548930360458,
      "time": "1/31/2019, 10:26:00 AM",
      "evt": "start"
     },
     {
      "course": "CS-103",
      "segment": "AutoComplete",
      "work": "Starting",
      "milli": 1548930674650,
      "time": "1/31/2019, 10:31:14 AM",
      "evt": "complete"
     },
     {
      "course": "CS-104",
      "segment": "Task",
      "work": "ICP01",
      "milli": 1548930697395,
      "time": "1/31/2019, 10:31:37 AM",
      "evt": "start"
     },
     {
      "course": "CS-104",
      "segment": "MarkComplete",
      "work": "ICP01",
      "milli": 1548930764684,
      "time": "1/31/2019, 10:32:44 AM",
      "evt": "complete"
     },
     {
      "course": "CS-104",
      "segment": "Task",
      "work": "ICP02",
      "milli": 1548930768188,
      "time": "1/31/2019, 10:32:48 AM",
      "evt": "start"
     },
     {
      "course": "CS-104",
      "segment": "MarkComplete",
      "work": "ICP02",
      "milli": 1548931039170,
      "time": "1/31/2019, 10:37:19 AM",
      "evt": "complete"
     },
     {
      "course": "CS-104",
      "segment": "Task",
      "work": "ICP03",
      "milli": 1548931041805,
      "time": "1/31/2019, 10:37:21 AM",
      "evt": "start"
     },
     {
      "course": "CS-104",
      "segment": "MarkComplete",
      "work": "ICP03",
      "milli": 1548931076779,
      "time": "1/31/2019, 10:37:56 AM",
      "evt": "complete"
     },
     {
      "course": "CS-104",
      "segment": "Task",
      "work": "ICP04",
      "milli": 1548931081111,
      "time": "1/31/2019, 10:38:01 AM",
      "evt": "start"
     },
     {
      "course": "CS-104",
      "segment": "MarkComplete",
      "work": "ICP04",
      "milli": 1548931113985,
      "time": "1/31/2019, 10:38:33 AM",
      "evt": "complete"
     }
    ],
    "gold": [
     {
      "course": "CS-101",
      "segment": "Task",
      "work": "cloudctl",
      "milli": 1548922326351,
      "time": "1/31/2019, 8:12:06 AM",
      "evt": "start"
     },
     {
      "course": "CS-101",
      "segment": "Task",
      "work": "cloudctl",
      "milli": 1548922388013,
      "time": "1/31/2019, 8:13:08 AM",
      "evt": "start"
     },
     {
      "course": "CS-101",
      "segment": "Task",
      "work": "docker",
      "milli": 1548922467894,
      "time": "1/31/2019, 8:14:27 AM",
      "evt": "start"
     },
     {
      "course": "CS-101",
      "segment": "Task",
      "work": "kubectl",
      "milli": 1548922521182,
      "time": "1/31/2019, 8:15:21 AM",
      "evt": "start"
     },
     {
      "course": "CS-101",
      "segment": "MarkComplete",
      "work": "kubectl",
      "milli": 1548922615541,
      "time": "1/31/2019, 8:16:55 AM",
      "evt": "complete"
     },
     {
      "course": "CS-101",
      "segment": "Task",
      "work": "cloudctl",
      "milli": 1548922618992,
      "time": "1/31/2019, 8:16:58 AM",
      "evt": "start"
     },
     {
      "course": "CS-101",
      "segment": "MarkComplete",
      "work": "cloudctl",
      "milli": 1548922621220,
      "time": "1/31/2019, 8:17:01 AM",
      "evt": "complete"
     },
     {
      "course": "CS-101",
      "segment": "Task",
      "work": "docker",
      "milli": 1548922625081,
      "time": "1/31/2019, 8:17:05 AM",
      "evt": "start"
     },
     {
      "course": "CS-101",
      "segment": "MarkComplete",
      "work": "docker",
      "milli": 1548922627757,
      "time": "1/31/2019, 8:17:07 AM",
      "evt": "complete"
     },
     {
      "course": "CS-101",
      "segment": "Task",
      "work": "kubectl",
      "milli": 1548922746702,
      "time": "1/31/2019, 8:19:06 AM",
      "evt": "start"
     },
     {
      "course": "CS-102",
      "segment": "Task",
      "work": "Introduction",
      "milli": 1548922835821,
      "time": "1/31/2019, 8:20:35 AM",
      "evt": "start"
     },
     {
      "course": "CS-102",
      "segment": "Task",
      "work": "Introduction",
      "milli": 1548922920194,
      "time": "1/31/2019, 8:22:00 AM",
      "evt": "start"
     },
     {
      "course": "CS-102",
      "segment": "Task",
      "work": "T01",
      "milli": 1548922927390,
      "time": "1/31/2019, 8:22:07 AM",
      "evt": "start"
     },
     {
      "course": "CS-102",
      "segment": "Task",
      "work": "Introduction",
      "milli": 1548922931212,
      "time": "1/31/2019, 8:22:11 AM",
      "evt": "start"
     },
     {
      "course": "CS-102",
      "segment": "Task",
      "work": "T01",
      "milli": 1548924412268,
      "time": "1/31/2019, 8:46:52 AM",
      "evt": "start"
     },
     {
      "course": "CS-102",
      "segment": "Task",
      "work": "T01",
      "milli": 1548924468178,
      "time": "1/31/2019, 8:47:48 AM",
      "evt": "start"
     },
     {
      "course": "CS-102",
      "segment": "Task",
      "work": "T02",
      "milli": 1548924484152,
      "time": "1/31/2019, 8:48:04 AM",
      "evt": "start"
     },
     {
      "course": "CS-102",
      "segment": "Task",
      "work": "T01",
      "milli": 1548924502717,
      "time": "1/31/2019, 8:48:22 AM",
      "evt": "start"
     },
     {
      "course": "CS-102",
      "segment": "MarkComplete",
      "work": "T01",
      "milli": 1548924507021,
      "time": "1/31/2019, 8:48:27 AM",
      "evt": "complete"
     },
     {
      "course": "CS-102",
      "segment": "Task",
      "work": "T02",
      "milli": 1548924511645,
      "time": "1/31/2019, 8:48:31 AM",
      "evt": "start"
     },
     {
      "course": "CS-102",
      "segment": "MarkComplete",
      "work": "T02",
      "milli": 1548924584073,
      "time": "1/31/2019, 8:49:44 AM",
      "evt": "complete"
     },
     {
      "course": "CS-102",
      "segment": "Task",
      "work": "T03",
      "milli": 1548924592324,
      "time": "1/31/2019, 8:49:52 AM",
      "evt": "start"
     },
     {
      "course": "CS-102",
      "segment": "MarkComplete",
      "work": "T03",
      "milli": 1548924668395,
      "time": "1/31/2019, 8:51:08 AM",
      "evt": "complete"
     },
     {
      "course": "CS-102",
      "segment": "Task",
      "work": "T04",
      "milli": 1548924672672,
      "time": "1/31/2019, 8:51:12 AM",
      "evt": "start"
     },
     {
      "course": "CS-102",
      "segment": "MarkComplete",
      "work": "T04",
      "milli": 1548924707447,
      "time": "1/31/2019, 8:51:47 AM",
      "evt": "complete"
     },
     {
      "course": "CS-102",
      "segment": "Task",
      "work": "T05",
      "milli": 1548924710910,
      "time": "1/31/2019, 8:51:50 AM",
      "evt": "start"
     },
     {
      "course": "CS-102",
      "segment": "MarkComplete",
      "work": "T05",
      "milli": 1548924787450,
      "time": "1/31/2019, 8:53:07 AM",
      "evt": "complete"
     },
     {
      "course": "CS-102",
      "segment": "Task",
      "work": "T06",
      "milli": 1548924790310,
      "time": "1/31/2019, 8:53:10 AM",
      "evt": "start"
     },
     {
      "course": "CS-102",
      "segment": "MarkComplete",
      "work": "T06",
      "milli": 1548924819535,
      "time": "1/31/2019, 8:53:39 AM",
      "evt": "complete"
     },
     {
      "course": "CS-102",
      "segment": "Task",
      "work": "T07",
      "milli": 1548924821972,
      "time": "1/31/2019, 8:53:41 AM",
      "evt": "start"
     },
     {
      "course": "CS-102",
      "segment": "MarkComplete",
      "work": "T07",
      "milli": 1548925095520,
      "time": "1/31/2019, 8:58:15 AM",
      "evt": "complete"
     },
     {
      "course": "CS-102",
      "segment": "Task",
      "work": "T08",
      "milli": 1548925098169,
      "time": "1/31/2019, 8:58:18 AM",
      "evt": "start"
     },
     {
      "course": "CS-102",
      "segment": "MarkComplete",
      "work": "T08",
      "milli": 1548925197517,
      "time": "1/31/2019, 8:59:57 AM",
      "evt": "complete"
     },
     {
      "course": "CS-102",
      "segment": "Task",
      "work": "T09",
      "milli": 1548925201834,
      "time": "1/31/2019, 9:00:01 AM",
      "evt": "start"
     },
     {
      "course": "CS-102",
      "segment": "MarkComplete",
      "work": "T09",
      "milli": 1548925256265,
      "time": "1/31/2019, 9:00:56 AM",
      "evt": "complete"
     },
     {
      "course": "CS-102",
      "segment": "Task",
      "work": "T10",
      "milli": 1548925259246,
      "time": "1/31/2019, 9:00:59 AM",
      "evt": "start"
     },
     {
      "course": "CS-102",
      "segment": "MarkComplete",
      "work": "T10",
      "milli": 1548925543216,
      "time": "1/31/2019, 9:05:43 AM",
      "evt": "complete"
     },
     {
      "course": "CS-102",
      "segment": "Task",
      "work": "T11",
      "milli": 1548925546048,
      "time": "1/31/2019, 9:05:46 AM",
      "evt": "start"
     },
     {
      "course": "CS-102",
      "segment": "MarkComplete",
      "work": "T11",
      "milli": 1548925608471,
      "time": "1/31/2019, 9:06:48 AM",
      "evt": "complete"
     },
     {
      "course": "CS-102",
      "segment": "Task",
      "work": "T12",
      "milli": 1548925611383,
      "time": "1/31/2019, 9:06:51 AM",
      "evt": "start"
     },
     {
      "course": "CS-102",
      "segment": "MarkComplete",
      "work": "T12",
      "milli": 1548925698074,
      "time": "1/31/2019, 9:08:18 AM",
      "evt": "complete"
     },
     {
      "course": "CS-102",
      "segment": "Task",
      "work": "T07",
      "milli": 1548926047122,
      "time": "1/31/2019, 9:14:07 AM",
      "evt": "start"
     },
     {
      "course": "CS-103",
      "segment": "Lab",
      "work": "Create",
      "milli": 1548926310268,
      "time": "1/31/2019, 9:18:30 AM",
      "evt": "start"
     },
     {
      "course": "CS-103",
      "segment": "AutoComplete",
      "work": "Create",
      "milli": 1548927428179,
      "time": "1/31/2019, 9:37:08 AM",
      "evt": "complete"
     },
     {
      "course": "CS-103",
      "segment": "Lab",
      "work": "Create",
      "milli": 1548927677109,
      "time": "1/31/2019, 9:41:17 AM",
      "evt": "start"
     },
     {
      "course": "CS-103",
      "segment": "Lab",
      "work": "Create",
      "milli": 1548927689200,
      "time": "1/31/2019, 9:41:29 AM",
      "evt": "start"
     },
     {
      "course": "CS-103",
      "segment": "Lab",
      "work": "Create",
      "milli": 1548927691164,
      "time": "1/31/2019, 9:41:31 AM",
      "evt": "start"
     },
     {
      "course": "CS-103",
      "segment": "Lab",
      "work": "Syntax",
      "milli": 1548927745643,
      "time": "1/31/2019, 9:42:25 AM",
      "evt": "start"
     },
     {
      "course": "CS-103",
      "segment": "AutoComplete",
      "work": "Syntax",
      "milli": 1548927919606,
      "time": "1/31/2019, 9:45:19 AM",
      "evt": "complete"
     },
     {
      "course": "CS-103",
      "segment": "Lab",
      "work": "Resources",
      "milli": 1548927927915,
      "time": "1/31/2019, 9:45:27 AM",
      "evt": "start"
     },
     {
      "course": "CS-103",
      "segment": "AutoComplete",
      "work": "Resources",
      "milli": 1548928260866,
      "time": "1/31/2019, 9:51:00 AM",
      "evt": "complete"
     },
     {
      "course": "CS-103",
      "segment": "Lab",
      "work": "Images",
      "milli": 1548928275456,
      "time": "1/31/2019, 9:51:15 AM",
      "evt": "start"
     },
     {
      "course": "CS-103",
      "segment": "AutoComplete",
      "work": "Images",
      "milli": 1548928365022,
      "time": "1/31/2019, 9:52:45 AM",
      "evt": "complete"
     },
     {
      "course": "CS-103",
      "segment": "Lab",
      "work": "Security",
      "milli": 1548928381427,
      "time": "1/31/2019, 9:53:01 AM",
      "evt": "start"
     },
     {
      "course": "CS-103",
      "segment": "AutoComplete",
      "work": "Security",
      "milli": 1548929201036,
      "time": "1/31/2019, 10:06:41 AM",
      "evt": "complete"
     },
     {
      "course": "CS-103",
      "segment": "Lab",
      "work": "Networking",
      "milli": 1548929522998,
      "time": "1/31/2019, 10:12:02 AM",
      "evt": "start"
     },
     {
      "course": "CS-103",
      "segment": "AutoComplete",
      "work": "Networking",
      "milli": 1548929988891,
      "time": "1/31/2019, 10:19:48 AM",
      "evt": "complete"
     },
     {
      "course": "CS-103",
      "segment": "Lab",
      "work": "Running",
      "milli": 1548930959494,
      "time": "1/31/2019, 10:35:59 AM",
      "evt": "start"
     },
     {
      "course": "CS-103",
      "segment": "AutoComplete",
      "work": "Running",
      "milli": 1548931082555,
      "time": "1/31/2019, 10:38:02 AM",
      "evt": "complete"
     },
     {
      "course": "CS-103",
      "segment": "Lab",
      "work": "Starting",
      "milli": 1548931170628,
      "time": "1/31/2019, 10:39:30 AM",
      "evt": "start"
     },
     {
      "course": "CS-103",
      "segment": "AutoComplete",
      "work": "Starting",
      "milli": 1548931746143,
      "time": "1/31/2019, 10:49:06 AM",
      "evt": "complete"
     },
     {
      "course": "CS-104",
      "segment": "Task",
      "work": "ICP01",
      "milli": 1548931824046,
      "time": "1/31/2019, 10:50:24 AM",
      "evt": "start"
     },
     {
      "course": "CS-104",
      "segment": "MarkComplete",
      "work": "ICP01",
      "milli": 1548932540040,
      "time": "1/31/2019, 11:02:20 AM",
      "evt": "complete"
     },
     {
      "course": "CS-104",
      "segment": "Task",
      "work": "ICP02",
      "milli": 1548932543097,
      "time": "1/31/2019, 11:02:23 AM",
      "evt": "start"
     },
     {
      "course": "CS-104",
      "segment": "MarkComplete",
      "work": "ICP02",
      "milli": 1548932844228,
      "time": "1/31/2019, 11:07:24 AM",
      "evt": "complete"
     },
     {
      "course": "CS-104",
      "segment": "Task",
      "work": "ICP03",
      "milli": 1548932849891,
      "time": "1/31/2019, 11:07:29 AM",
      "evt": "start"
     },
     {
      "course": "CS-104",
      "segment": "MarkComplete",
      "work": "ICP03",
      "milli": 1548932898125,
      "time": "1/31/2019, 11:08:18 AM",
      "evt": "complete"
     },
     {
      "course": "CS-104",
      "segment": "Task",
      "work": "ICP04",
      "milli": 1548932903256,
      "time": "1/31/2019, 11:08:23 AM",
      "evt": "start"
     },
     {
      "course": "CS-104",
      "segment": "MarkComplete",
      "work": "ICP04",
      "milli": 1548932956867,
      "time": "1/31/2019, 11:09:16 AM",
      "evt": "complete"
     }
    ],
    "yellow": [
     {
      "course": "CS-101",
      "segment": "Task",
      "work": "cloudctl",
      "milli": 1548922307618,
      "time": "1/31/2019, 8:11:47 AM",
      "evt": "start"
     },
     {
      "course": "CS-101",
      "segment": "MarkComplete",
      "work": "cloudctl",
      "milli": 1548922317610,
      "time": "1/31/2019, 8:11:57 AM",
      "evt": "complete"
     },
     {
      "course": "CS-101",
      "segment": "Task",
      "work": "docker",
      "milli": 1548922320875,
      "time": "1/31/2019, 8:12:00 AM",
      "evt": "start"
     },
     {
      "course": "CS-101",
      "segment": "MarkComplete",
      "work": "docker",
      "milli": 1548922324209,
      "time": "1/31/2019, 8:12:04 AM",
      "evt": "complete"
     },
     {
      "course": "CS-101",
      "segment": "Task",
      "work": "kubectl",
      "milli": 1548922326492,
      "time": "1/31/2019, 8:12:06 AM",
      "evt": "start"
     },
     {
      "course": "CS-101",
      "segment": "MarkComplete",
      "work": "kubectl",
      "milli": 1548922329185,
      "time": "1/31/2019, 8:12:09 AM",
      "evt": "complete"
     },
     {
      "course": "CS-101",
      "segment": "Task",
      "work": "docker",
      "milli": 1548922339333,
      "time": "1/31/2019, 8:12:19 AM",
      "evt": "start"
     },
     {
      "course": "CS-102",
      "segment": "Task",
      "work": "Introduction",
      "milli": 1548922350546,
      "time": "1/31/2019, 8:12:30 AM",
      "evt": "start"
     },
     {
      "course": "CS-102",
      "segment": "Task",
      "work": "Introduction",
      "milli": 1548922407898,
      "time": "1/31/2019, 8:13:27 AM",
      "evt": "start"
     },
     {
      "course": "CS-101",
      "segment": "Task",
      "work": "cloudctl",
      "milli": 1548922446392,
      "time": "1/31/2019, 8:14:06 AM",
      "evt": "start"
     },
     {
      "course": "CS-101",
      "segment": "Task",
      "work": "kubectl",
      "milli": 1548923160709,
      "time": "1/31/2019, 8:26:00 AM",
      "evt": "start"
     },
     {
      "course": "CS-101",
      "segment": "Task",
      "work": "docker",
      "milli": 1548923226596,
      "time": "1/31/2019, 8:27:06 AM",
      "evt": "start"
     },
     {
      "course": "CS-101",
      "segment": "Task",
      "work": "cloudctl",
      "milli": 1548923258972,
      "time": "1/31/2019, 8:27:38 AM",
      "evt": "start"
     },
     {
      "course": "CS-102",
      "segment": "Task",
      "work": "Introduction",
      "milli": 1548924213793,
      "time": "1/31/2019, 8:43:33 AM",
      "evt": "start"
     },
     {
      "course": "CS-102",
      "segment": "Task",
      "work": "T01",
      "milli": 1548924224367,
      "time": "1/31/2019, 8:43:44 AM",
      "evt": "start"
     },
     {
      "course": "CS-102",
      "segment": "Task",
      "work": "T01",
      "milli": 1548924229557,
      "time": "1/31/2019, 8:43:49 AM",
      "evt": "start"
     },
     {
      "course": "CS-102",
      "segment": "MarkComplete",
      "work": "T01",
      "milli": 1548924305673,
      "time": "1/31/2019, 8:45:05 AM",
      "evt": "complete"
     },
     {
      "course": "CS-102",
      "segment": "Task",
      "work": "T02",
      "milli": 1548924315000,
      "time": "1/31/2019, 8:45:15 AM",
      "evt": "start"
     },
     {
      "course": "CS-102",
      "segment": "MarkComplete",
      "work": "T02",
      "milli": 1548924397042,
      "time": "1/31/2019, 8:46:37 AM",
      "evt": "complete"
     },
     {
      "course": "CS-102",
      "segment": "Task",
      "work": "T03",
      "milli": 1548924401335,
      "time": "1/31/2019, 8:46:41 AM",
      "evt": "start"
     },
     {
      "course": "CS-102",
      "segment": "Task",
      "work": "T03",
      "milli": 1548924417393,
      "time": "1/31/2019, 8:46:57 AM",
      "evt": "start"
     },
     {
      "course": "CS-102",
      "segment": "Task",
      "work": "T03",
      "milli": 1548924418538,
      "time": "1/31/2019, 8:46:58 AM",
      "evt": "start"
     },
     {
      "course": "CS-102",
      "segment": "MarkComplete",
      "work": "T03",
      "milli": 1548924446147,
      "time": "1/31/2019, 8:47:26 AM",
      "evt": "complete"
     },
     {
      "course": "CS-102",
      "segment": "Task",
      "work": "T04",
      "milli": 1548924451939,
      "time": "1/31/2019, 8:47:31 AM",
      "evt": "start"
     },
     {
      "course": "CS-102",
      "segment": "MarkComplete",
      "work": "T04",
      "milli": 1548924504693,
      "time": "1/31/2019, 8:48:24 AM",
      "evt": "complete"
     },
     {
      "course": "CS-102",
      "segment": "Task",
      "work": "T05",
      "milli": 1548924508611,
      "time": "1/31/2019, 8:48:28 AM",
      "evt": "start"
     },
     {
      "course": "CS-102",
      "segment": "MarkComplete",
      "work": "T05",
      "milli": 1548924620809,
      "time": "1/31/2019, 8:50:20 AM",
      "evt": "complete"
     },
     {
      "course": "CS-102",
      "segment": "Task",
      "work": "T06",
      "milli": 1548924630232,
      "time": "1/31/2019, 8:50:30 AM",
      "evt": "start"
     },
     {
      "course": "CS-102",
      "segment": "Task",
      "work": "T06",
      "milli": 1548924631813,
      "time": "1/31/2019, 8:50:31 AM",
      "evt": "start"
     },
     {
      "course": "CS-102",
      "segment": "MarkComplete",
      "work": "T06",
      "milli": 1548924722704,
      "time": "1/31/2019, 8:52:02 AM",
      "evt": "complete"
     },
     {
      "course": "CS-102",
      "segment": "Task",
      "work": "T07",
      "milli": 1548924731665,
      "time": "1/31/2019, 8:52:11 AM",
      "evt": "start"
     },
     {
      "course": "CS-102",
      "segment": "MarkComplete",
      "work": "T07",
      "milli": 1548924979704,
      "time": "1/31/2019, 8:56:19 AM",
      "evt": "complete"
     },
     {
      "course": "CS-102",
      "segment": "Task",
      "work": "T08",
      "milli": 1548924982541,
      "time": "1/31/2019, 8:56:22 AM",
      "evt": "start"
     },
     {
      "course": "CS-102",
      "segment": "MarkComplete",
      "work": "T08",
      "milli": 1548925174755,
      "time": "1/31/2019, 8:59:34 AM",
      "evt": "complete"
     },
     {
      "course": "CS-102",
      "segment": "Task",
      "work": "T09",
      "milli": 1548925180628,
      "time": "1/31/2019, 8:59:40 AM",
      "evt": "start"
     },
     {
      "course": "CS-102",
      "segment": "MarkComplete",
      "work": "T09",
      "milli": 1548925266299,
      "time": "1/31/2019, 9:01:06 AM",
      "evt": "complete"
     },
     {
      "course": "CS-102",
      "segment": "Task",
      "work": "T10",
      "milli": 1548925269195,
      "time": "1/31/2019, 9:01:09 AM",
      "evt": "start"
     },
     {
      "course": "CS-102",
      "segment": "MarkComplete",
      "work": "T10",
      "milli": 1548925376292,
      "time": "1/31/2019, 9:02:56 AM",
      "evt": "complete"
     },
     {
      "course": "CS-102",
      "segment": "Task",
      "work": "T11",
      "milli": 1548925380143,
      "time": "1/31/2019, 9:03:00 AM",
      "evt": "start"
     },
     {
      "course": "CS-102",
      "segment": "MarkComplete",
      "work": "T11",
      "milli": 1548925412469,
      "time": "1/31/2019, 9:03:32 AM",
      "evt": "complete"
     },
     {
      "course": "CS-102",
      "segment": "Task",
      "work": "T12",
      "milli": 1548925421220,
      "time": "1/31/2019, 9:03:41 AM",
      "evt": "start"
     },
     {
      "course": "CS-102",
      "segment": "MarkComplete",
      "work": "T12",
      "milli": 1548925473327,
      "time": "1/31/2019, 9:04:33 AM",
      "evt": "complete"
     },
     {
      "course": "CS-103",
      "segment": "Lab",
      "work": "Create",
      "milli": 1548926862171,
      "time": "1/31/2019, 9:27:42 AM",
      "evt": "start"
     },
     {
      "course": "CS-103",
      "segment": "AutoComplete",
      "work": "Create",
      "milli": 1548927320852,
      "time": "1/31/2019, 9:35:20 AM",
      "evt": "complete"
     },
     {
      "course": "CS-103",
      "segment": "Lab",
      "work": "Syntax",
      "milli": 1548927341683,
      "time": "1/31/2019, 9:35:41 AM",
      "evt": "start"
     },
     {
      "course": "CS-103",
      "segment": "AutoComplete",
      "work": "Syntax",
      "milli": 1548927473861,
      "time": "1/31/2019, 9:37:53 AM",
      "evt": "complete"
     },
     {
      "course": "CS-103",
      "segment": "Lab",
      "work": "Resources",
      "milli": 1548927485559,
      "time": "1/31/2019, 9:38:05 AM",
      "evt": "start"
     },
     {
      "course": "CS-103",
      "segment": "AutoComplete",
      "work": "Resources",
      "milli": 1548927775832,
      "time": "1/31/2019, 9:42:55 AM",
      "evt": "complete"
     },
     {
      "course": "CS-103",
      "segment": "Lab",
      "work": "Images",
      "milli": 1548927809816,
      "time": "1/31/2019, 9:43:29 AM",
      "evt": "start"
     },
     {
      "course": "CS-103",
      "segment": "AutoComplete",
      "work": "Images",
      "milli": 1548928026642,
      "time": "1/31/2019, 9:47:06 AM",
      "evt": "complete"
     },
     {
      "course": "CS-103",
      "segment": "Lab",
      "work": "Security",
      "milli": 1548928068719,
      "time": "1/31/2019, 9:47:48 AM",
      "evt": "start"
     },
     {
      "course": "CS-103",
      "segment": "AutoComplete",
      "work": "Security",
      "milli": 1548928139161,
      "time": "1/31/2019, 9:48:59 AM",
      "evt": "complete"
     },
     {
      "course": "CS-103",
      "segment": "Lab",
      "work": "Networking",
      "milli": 1548928462720,
      "time": "1/31/2019, 9:54:22 AM",
      "evt": "start"
     },
     {
      "course": "CS-103",
      "segment": "AutoComplete",
      "work": "Networking",
      "milli": 1548928856175,
      "time": "1/31/2019, 10:00:56 AM",
      "evt": "complete"
     },
     {
      "course": "CS-103",
      "segment": "Lab",
      "work": "Running",
      "milli": 1548928872921,
      "time": "1/31/2019, 10:01:12 AM",
      "evt": "start"
     },
     {
      "course": "CS-103",
      "segment": "AutoComplete",
      "work": "Running",
      "milli": 1548928980600,
      "time": "1/31/2019, 10:03:00 AM",
      "evt": "complete"
     },
     {
      "course": "CS-103",
      "segment": "Lab",
      "work": "Starting",
      "milli": 1548928993471,
      "time": "1/31/2019, 10:03:13 AM",
      "evt": "start"
     },
     {
      "course": "CS-103",
      "segment": "AutoComplete",
      "work": "Starting",
      "milli": 1548929412402,
      "time": "1/31/2019, 10:10:12 AM",
      "evt": "complete"
     },
     {
      "course": "CS-104",
      "segment": "Task",
      "work": "ICP01",
      "milli": 1548932182119,
      "time": "1/31/2019, 10:56:22 AM",
      "evt": "start"
     },
     {
      "course": "CS-104",
      "segment": "MarkComplete",
      "work": "ICP01",
      "milli": 1548932662428,
      "time": "1/31/2019, 11:04:22 AM",
      "evt": "complete"
     },
     {
      "course": "CS-104",
      "segment": "Task",
      "work": "ICP02",
      "milli": 1548932667284,
      "time": "1/31/2019, 11:04:27 AM",
      "evt": "start"
     },
     {
      "course": "CS-104",
      "segment": "MarkComplete",
      "work": "ICP02",
      "milli": 1548932699405,
      "time": "1/31/2019, 11:04:59 AM",
      "evt": "complete"
     },
     {
      "course": "CS-104",
      "segment": "Task",
      "work": "ICP03",
      "milli": 1548932701772,
      "time": "1/31/2019, 11:05:01 AM",
      "evt": "start"
     },
     {
      "course": "CS-104",
      "segment": "MarkComplete",
      "work": "ICP03",
      "milli": 1548932823404,
      "time": "1/31/2019, 11:07:03 AM",
      "evt": "complete"
     },
     {
      "course": "CS-104",
      "segment": "Task",
      "work": "ICP04",
      "milli": 1548932826939,
      "time": "1/31/2019, 11:07:06 AM",
      "evt": "start"
     },
     {
      "course": "CS-104",
      "segment": "MarkComplete",
      "work": "ICP04",
      "milli": 1548932878840,
      "time": "1/31/2019, 11:07:58 AM",
      "evt": "complete"
     }
    ],
    "orange": [
     {
      "course": "CS-102",
      "segment": "Task",
      "work": "Introduction",
      "milli": 1548922333490,
      "time": "1/31/2019, 8:12:13 AM",
      "evt": "start"
     },
     {
      "course": "CS-101",
      "segment": "Task",
      "work": "cloudctl",
      "milli": 1548922628584,
      "time": "1/31/2019, 8:17:08 AM",
      "evt": "start"
     },
     {
      "course": "CS-101",
      "segment": "Task",
      "work": "cloudctl",
      "milli": 1548922638029,
      "time": "1/31/2019, 8:17:18 AM",
      "evt": "start"
     },
     {
      "course": "CS-101",
      "segment": "MarkComplete",
      "work": "cloudctl",
      "milli": 1548922645621,
      "time": "1/31/2019, 8:17:25 AM",
      "evt": "complete"
     },
     {
      "course": "CS-101",
      "segment": "Task",
      "work": "docker",
      "milli": 1548922652871,
      "time": "1/31/2019, 8:17:32 AM",
      "evt": "start"
     },
     {
      "course": "CS-101",
      "segment": "MarkComplete",
      "work": "docker",
      "milli": 1548922656203,
      "time": "1/31/2019, 8:17:36 AM",
      "evt": "complete"
     },
     {
      "course": "CS-101",
      "segment": "Task",
      "work": "kubectl",
      "milli": 1548922661495,
      "time": "1/31/2019, 8:17:41 AM",
      "evt": "start"
     },
     {
      "course": "CS-101",
      "segment": "MarkComplete",
      "work": "kubectl",
      "milli": 1548922665692,
      "time": "1/31/2019, 8:17:45 AM",
      "evt": "complete"
     },
     {
      "course": "CS-102",
      "segment": "Task",
      "work": "Introduction",
      "milli": 1548922851859,
      "time": "1/31/2019, 8:20:51 AM",
      "evt": "start"
     },
     {
      "course": "CS-101",
      "segment": "Task",
      "work": "docker",
      "milli": 1548922912951,
      "time": "1/31/2019, 8:21:52 AM",
      "evt": "start"
     },
     {
      "course": "CS-101",
      "segment": "Task",
      "work": "kubectl",
      "milli": 1548922953539,
      "time": "1/31/2019, 8:22:33 AM",
      "evt": "start"
     },
     {
      "course": "CS-102",
      "segment": "Task",
      "work": "Introduction",
      "milli": 1548923170599,
      "time": "1/31/2019, 8:26:10 AM",
      "evt": "start"
     },
     {
      "course": "CS-102",
      "segment": "Task",
      "work": "Introduction",
      "milli": 1548924316861,
      "time": "1/31/2019, 8:45:16 AM",
      "evt": "start"
     },
     {
      "course": "CS-102",
      "segment": "Task",
      "work": "T01",
      "milli": 1548924330595,
      "time": "1/31/2019, 8:45:30 AM",
      "evt": "start"
     },
     {
      "course": "CS-102",
      "segment": "Task",
      "work": "T01",
      "milli": 1548924333065,
      "time": "1/31/2019, 8:45:33 AM",
      "evt": "start"
     },
     {
      "course": "CS-102",
      "segment": "MarkComplete",
      "work": "T01",
      "milli": 1548924502594,
      "time": "1/31/2019, 8:48:22 AM",
      "evt": "complete"
     },
     {
      "course": "CS-102",
      "segment": "Task",
      "work": "T02",
      "milli": 1548924518031,
      "time": "1/31/2019, 8:48:38 AM",
      "evt": "start"
     },
     {
      "course": "CS-102",
      "segment": "Task",
      "work": "T02",
      "milli": 1548924644727,
      "time": "1/31/2019, 8:50:44 AM",
      "evt": "start"
     },
     {
      "course": "CS-102",
      "segment": "Task",
      "work": "T01",
      "milli": 1548924670107,
      "time": "1/31/2019, 8:51:10 AM",
      "evt": "start"
     },
     {
      "course": "CS-102",
      "segment": "Task",
      "work": "T02",
      "milli": 1548924733582,
      "time": "1/31/2019, 8:52:13 AM",
      "evt": "start"
     },
     {
      "course": "CS-102",
      "segment": "MarkComplete",
      "work": "T02",
      "milli": 1548924814043,
      "time": "1/31/2019, 8:53:34 AM",
      "evt": "complete"
     },
     {
      "course": "CS-102",
      "segment": "Task",
      "work": "T03",
      "milli": 1548924821577,
      "time": "1/31/2019, 8:53:41 AM",
      "evt": "start"
     },
     {
      "course": "CS-102",
      "segment": "MarkComplete",
      "work": "T03",
      "milli": 1548924863295,
      "time": "1/31/2019, 8:54:23 AM",
      "evt": "complete"
     },
     {
      "course": "CS-102",
      "segment": "Task",
      "work": "T04",
      "milli": 1548924965486,
      "time": "1/31/2019, 8:56:05 AM",
      "evt": "start"
     },
     {
      "course": "CS-102",
      "segment": "Task",
      "work": "T03",
      "milli": 1548925004664,
      "time": "1/31/2019, 8:56:44 AM",
      "evt": "start"
     },
     {
      "course": "CS-102",
      "segment": "Task",
      "work": "T04",
      "milli": 1548925011253,
      "time": "1/31/2019, 8:56:51 AM",
      "evt": "start"
     },
     {
      "course": "CS-102",
      "segment": "MarkComplete",
      "work": "T04",
      "milli": 1548925032900,
      "time": "1/31/2019, 8:57:12 AM",
      "evt": "complete"
     },
     {
      "course": "CS-102",
      "segment": "Task",
      "work": "T05",
      "milli": 1548925042015,
      "time": "1/31/2019, 8:57:22 AM",
      "evt": "start"
     },
     {
      "course": "CS-102",
      "segment": "Task",
      "work": "T03",
      "milli": 1548925047655,
      "time": "1/31/2019, 8:57:27 AM",
      "evt": "start"
     },
     {
      "course": "CS-102",
      "segment": "Task",
      "work": "T04",
      "milli": 1548925051833,
      "time": "1/31/2019, 8:57:31 AM",
      "evt": "start"
     },
     {
      "course": "CS-102",
      "segment": "MarkComplete",
      "work": "T05",
      "milli": 1548925088002,
      "time": "1/31/2019, 8:58:08 AM",
      "evt": "complete"
     },
     {
      "course": "CS-102",
      "segment": "Task",
      "work": "T05",
      "milli": 1548925109020,
      "time": "1/31/2019, 8:58:29 AM",
      "evt": "start"
     },
     {
      "course": "CS-102",
      "segment": "Task",
      "work": "T05",
      "milli": 1548925109722,
      "time": "1/31/2019, 8:58:29 AM",
      "evt": "start"
     },
     {
      "course": "CS-102",
      "segment": "Task",
      "work": "T06",
      "milli": 1548925119022,
      "time": "1/31/2019, 8:58:39 AM",
      "evt": "start"
     },
     {
      "course": "CS-102",
      "segment": "MarkComplete",
      "work": "T06",
      "milli": 1548925187641,
      "time": "1/31/2019, 8:59:47 AM",
      "evt": "complete"
     },
     {
      "course": "CS-102",
      "segment": "Task",
      "work": "T07",
      "milli": 1548925297861,
      "time": "1/31/2019, 9:01:37 AM",
      "evt": "start"
     },
     {
      "course": "CS-102",
      "segment": "Task",
      "work": "T06",
      "milli": 1548925348482,
      "time": "1/31/2019, 9:02:28 AM",
      "evt": "start"
     },
     {
      "course": "CS-102",
      "segment": "MarkComplete",
      "work": "T07",
      "milli": 1548925369161,
      "time": "1/31/2019, 9:02:49 AM",
      "evt": "complete"
     },
     {
      "course": "CS-102",
      "segment": "Task",
      "work": "T08",
      "milli": 1548925412891,
      "time": "1/31/2019, 9:03:32 AM",
      "evt": "start"
     },
     {
      "course": "CS-102",
      "segment": "Task",
      "work": "T07",
      "milli": 1548925483977,
      "time": "1/31/2019, 9:04:43 AM",
      "evt": "start"
     },
     {
      "course": "CS-102",
      "segment": "Task",
      "work": "T08",
      "milli": 1548925508347,
      "time": "1/31/2019, 9:05:08 AM",
      "evt": "start"
     },
     {
      "course": "CS-102",
      "segment": "MarkComplete",
      "work": "T08",
      "milli": 1548925823131,
      "time": "1/31/2019, 9:10:23 AM",
      "evt": "complete"
     },
     {
      "course": "CS-102",
      "segment": "Task",
      "work": "T09",
      "milli": 1548925830108,
      "time": "1/31/2019, 9:10:30 AM",
      "evt": "start"
     },
     {
      "course": "CS-102",
      "segment": "Task",
      "work": "T09",
      "milli": 1548925833595,
      "time": "1/31/2019, 9:10:33 AM",
      "evt": "start"
     },
     {
      "course": "CS-102",
      "segment": "MarkComplete",
      "work": "T09",
      "milli": 1548926246105,
      "time": "1/31/2019, 9:17:26 AM",
      "evt": "complete"
     },
     {
      "course": "CS-102",
      "segment": "Task",
      "work": "T10",
      "milli": 1548926268529,
      "time": "1/31/2019, 9:17:48 AM",
      "evt": "start"
     },
     {
      "course": "CS-103",
      "segment": "Lab",
      "work": "Create",
      "milli": 1548926677156,
      "time": "1/31/2019, 9:24:37 AM",
      "evt": "start"
     },
     {
      "course": "CS-102",
      "segment": "MarkComplete",
      "work": "T10",
      "milli": 1548927626195,
      "time": "1/31/2019, 9:40:26 AM",
      "evt": "complete"
     },
     {
      "course": "CS-102",
      "segment": "Task",
      "work": "T11",
      "milli": 1548927629792,
      "time": "1/31/2019, 9:40:29 AM",
      "evt": "start"
     },
     {
      "course": "CS-102",
      "segment": "MarkComplete",
      "work": "T11",
      "milli": 1548927717185,
      "time": "1/31/2019, 9:41:57 AM",
      "evt": "complete"
     },
     {
      "course": "CS-102",
      "segment": "Task",
      "work": "T12",
      "milli": 1548927722383,
      "time": "1/31/2019, 9:42:02 AM",
      "evt": "start"
     },
     {
      "course": "CS-102",
      "segment": "MarkComplete",
      "work": "T12",
      "milli": 1548927856493,
      "time": "1/31/2019, 9:44:16 AM",
      "evt": "complete"
     },
     {
      "course": "CS-103",
      "segment": "Lab",
      "work": "Create",
      "milli": 1548927912287,
      "time": "1/31/2019, 9:45:12 AM",
      "evt": "start"
     },
     {
      "course": "CS-103",
      "segment": "Lab",
      "work": "Create",
      "milli": 1548928118336,
      "time": "1/31/2019, 9:48:38 AM",
      "evt": "start"
     },
     {
      "course": "CS-103",
      "segment": "Lab",
      "work": "Syntax",
      "milli": 1548928276738,
      "time": "1/31/2019, 9:51:16 AM",
      "evt": "start"
     },
     {
      "course": "CS-103",
      "segment": "AutoComplete",
      "work": "Create",
      "milli": 1548928658111,
      "time": "1/31/2019, 9:57:38 AM",
      "evt": "complete"
     },
     {
      "course": "CS-103",
      "segment": "Lab",
      "work": "Syntax",
      "milli": 1548928696752,
      "time": "1/31/2019, 9:58:16 AM",
      "evt": "start"
     },
     {
      "course": "CS-103",
      "segment": "AutoComplete",
      "work": "Syntax",
      "milli": 1548928891772,
      "time": "1/31/2019, 10:01:31 AM",
      "evt": "complete"
     },
     {
      "course": "CS-103",
      "segment": "Lab",
      "work": "Resources",
      "milli": 1548928897077,
      "time": "1/31/2019, 10:01:37 AM",
      "evt": "start"
     },
     {
      "course": "CS-103",
      "segment": "Lab",
      "work": "Resources",
      "milli": 1548928903554,
      "time": "1/31/2019, 10:01:43 AM",
      "evt": "start"
     },
     {
      "course": "CS-103",
      "segment": "Lab",
      "work": "Resources",
      "milli": 1548928944334,
      "time": "1/31/2019, 10:02:24 AM",
      "evt": "start"
     },
     {
      "course": "CS-103",
      "segment": "Lab",
      "work": "Images",
      "milli": 1548929222767,
      "time": "1/31/2019, 10:07:02 AM",
      "evt": "start"
     },
     {
      "course": "CS-103",
      "segment": "Lab",
      "work": "Images",
      "milli": 1548929228949,
      "time": "1/31/2019, 10:07:08 AM",
      "evt": "start"
     },
     {
      "course": "CS-103",
      "segment": "AutoComplete",
      "work": "Images",
      "milli": 1548929645404,
      "time": "1/31/2019, 10:14:05 AM",
      "evt": "complete"
     },
     {
      "course": "CS-103",
      "segment": "Lab",
      "work": "Security",
      "milli": 1548929687090,
      "time": "1/31/2019, 10:14:47 AM",
      "evt": "start"
     },
     {
      "course": "CS-103",
      "segment": "Lab",
      "work": "Security",
      "milli": 1548929695117,
      "time": "1/31/2019, 10:14:55 AM",
      "evt": "start"
     },
     {
      "course": "CS-103",
      "segment": "Lab",
      "work": "Networking",
      "milli": 1548929719867,
      "time": "1/31/2019, 10:15:19 AM",
      "evt": "start"
     },
     {
      "course": "CS-103",
      "segment": "Lab",
      "work": "Images",
      "milli": 1548929735796,
      "time": "1/31/2019, 10:15:35 AM",
      "evt": "start"
     },
     {
      "course": "CS-103",
      "segment": "Lab",
      "work": "Images",
      "milli": 1548929798340,
      "time": "1/31/2019, 10:16:38 AM",
      "evt": "start"
     },
     {
      "course": "CS-103",
      "segment": "Lab",
      "work": "Images",
      "milli": 1548930267542,
      "time": "1/31/2019, 10:24:27 AM",
      "evt": "start"
     },
     {
      "course": "CS-103",
      "segment": "Lab",
      "work": "Create",
      "milli": 1548930376000,
      "time": "1/31/2019, 10:26:16 AM",
      "evt": "start"
     },
     {
      "course": "CS-103",
      "segment": "Lab",
      "work": "Syntax",
      "milli": 1548930400763,
      "time": "1/31/2019, 10:26:40 AM",
      "evt": "start"
     },
     {
      "course": "CS-103",
      "segment": "Lab",
      "work": "Resources",
      "milli": 1548930404466,
      "time": "1/31/2019, 10:26:44 AM",
      "evt": "start"
     },
     {
      "course": "CS-103",
      "segment": "Lab",
      "work": "Resources",
      "milli": 1548930417448,
      "time": "1/31/2019, 10:26:57 AM",
      "evt": "start"
     },
     {
      "course": "CS-103",
      "segment": "AutoComplete",
      "work": "Resources",
      "milli": 1548930602012,
      "time": "1/31/2019, 10:30:02 AM",
      "evt": "complete"
     },
     {
      "course": "CS-103",
      "segment": "Lab",
      "work": "Networking",
      "milli": 1548930615161,
      "time": "1/31/2019, 10:30:15 AM",
      "evt": "start"
     },
     {
      "course": "CS-103",
      "segment": "Lab",
      "work": "Images",
      "milli": 1548930618093,
      "time": "1/31/2019, 10:30:18 AM",
      "evt": "start"
     },
     {
      "course": "CS-103",
      "segment": "Lab",
      "work": "Networking",
      "milli": 1548930621159,
      "time": "1/31/2019, 10:30:21 AM",
      "evt": "start"
     },
     {
      "course": "CS-103",
      "segment": "AutoComplete",
      "work": "Networking",
      "milli": 1548930810931,
      "time": "1/31/2019, 10:33:30 AM",
      "evt": "complete"
     },
     {
      "course": "CS-103",
      "segment": "Lab",
      "work": "Running",
      "milli": 1548930823351,
      "time": "1/31/2019, 10:33:43 AM",
      "evt": "start"
     },
     {
      "course": "CS-103",
      "segment": "Lab",
      "work": "Running",
      "milli": 1548930832689,
      "time": "1/31/2019, 10:33:52 AM",
      "evt": "start"
     },
     {
      "course": "CS-103",
      "segment": "AutoComplete",
      "work": "Running",
      "milli": 1548931084876,
      "time": "1/31/2019, 10:38:04 AM",
      "evt": "complete"
     },
     {
      "course": "CS-103",
      "segment": "Lab",
      "work": "Starting",
      "milli": 1548931119703,
      "time": "1/31/2019, 10:38:39 AM",
      "evt": "start"
     },
     {
      "course": "CS-103",
      "segment": "Lab",
      "work": "Starting",
      "milli": 1548931122872,
      "time": "1/31/2019, 10:38:42 AM",
      "evt": "start"
     },
     {
      "course": "CS-103",
      "segment": "Lab",
      "work": "Starting",
      "milli": 1548931498411,
      "time": "1/31/2019, 10:44:58 AM",
      "evt": "start"
     },
     {
      "course": "CS-103",
      "segment": "AutoComplete",
      "work": "Starting",
      "milli": 1548931696570,
      "time": "1/31/2019, 10:48:16 AM",
      "evt": "complete"
     },
     {
      "course": "CS-103",
      "segment": "Lab",
      "work": "Security",
      "milli": 1548931763118,
      "time": "1/31/2019, 10:49:23 AM",
      "evt": "start"
     },
     {
      "course": "CS-104",
      "segment": "Task",
      "work": "ICP01",
      "milli": 1548932023122,
      "time": "1/31/2019, 10:53:43 AM",
      "evt": "start"
     },
     {
      "course": "CS-104",
      "segment": "Task",
      "work": "ICP02",
      "milli": 1548932170754,
      "time": "1/31/2019, 10:56:10 AM",
      "evt": "start"
     },
     {
      "course": "CS-104",
      "segment": "Task",
      "work": "ICP01",
      "milli": 1548932180410,
      "time": "1/31/2019, 10:56:20 AM",
      "evt": "start"
     },
     {
      "course": "CS-104",
      "segment": "MarkComplete",
      "work": "ICP02",
      "milli": 1548932219606,
      "time": "1/31/2019, 10:56:59 AM",
      "evt": "complete"
     },
     {
      "course": "CS-104",
      "segment": "Task",
      "work": "ICP03",
      "milli": 1548932223699,
      "time": "1/31/2019, 10:57:03 AM",
      "evt": "start"
     },
     {
      "course": "CS-104",
      "segment": "Task",
      "work": "ICP01",
      "milli": 1548932647638,
      "time": "1/31/2019, 11:04:07 AM",
      "evt": "start"
     },
     {
      "course": "CS-104",
      "segment": "MarkComplete",
      "work": "ICP01",
      "milli": 1548933154102,
      "time": "1/31/2019, 11:12:34 AM",
      "evt": "complete"
     },
     {
      "course": "CS-104",
      "segment": "Task",
      "work": "ICP02",
      "milli": 1548933159734,
      "time": "1/31/2019, 11:12:39 AM",
      "evt": "start"
     },
     {
      "course": "CS-104",
      "segment": "Task",
      "work": "ICP03",
      "milli": 1548933164241,
      "time": "1/31/2019, 11:12:44 AM",
      "evt": "start"
     },
     {
      "course": "CS-104",
      "segment": "MarkComplete",
      "work": "ICP03",
      "milli": 1548933392459,
      "time": "1/31/2019, 11:16:32 AM",
      "evt": "complete"
     },
     {
      "course": "CS-104",
      "segment": "Task",
      "work": "ICP04",
      "milli": 1548933401838,
      "time": "1/31/2019, 11:16:41 AM",
      "evt": "start"
     },
     {
      "course": "CS-104",
      "segment": "MarkComplete",
      "work": "ICP04",
      "milli": 1548933438330,
      "time": "1/31/2019, 11:17:18 AM",
      "evt": "complete"
     }
    ],
    "navy": [],
    "aqua": [
     {
      "course": "CS-102",
      "segment": "Task",
      "work": "T01",
      "milli": 1548923716730,
      "time": "1/31/2019, 8:35:16 AM",
      "evt": "start"
     },
     {
      "course": "CS-102",
      "segment": "Task",
      "work": "Introduction",
      "milli": 1548923723892,
      "time": "1/31/2019, 8:35:23 AM",
      "evt": "start"
     },
     {
      "course": "CS-101",
      "segment": "Task",
      "work": "cloudctl",
      "milli": 1548924403928,
      "time": "1/31/2019, 8:46:43 AM",
      "evt": "start"
     },
     {
      "course": "CS-102",
      "segment": "Task",
      "work": "T01",
      "milli": 1548924453358,
      "time": "1/31/2019, 8:47:33 AM",
      "evt": "start"
     },
     {
      "course": "CS-102",
      "segment": "Task",
      "work": "Introduction",
      "milli": 1548924690763,
      "time": "1/31/2019, 8:51:30 AM",
      "evt": "start"
     },
     {
      "course": "CS-102",
      "segment": "Task",
      "work": "T01",
      "milli": 1548924693081,
      "time": "1/31/2019, 8:51:33 AM",
      "evt": "start"
     },
     {
      "course": "CS-102",
      "segment": "MarkComplete",
      "work": "T01",
      "milli": 1548924707587,
      "time": "1/31/2019, 8:51:47 AM",
      "evt": "complete"
     },
     {
      "course": "CS-102",
      "segment": "Task",
      "work": "T02",
      "milli": 1548924769300,
      "time": "1/31/2019, 8:52:49 AM",
      "evt": "start"
     },
     {
      "course": "CS-102",
      "segment": "Task",
      "work": "T01",
      "milli": 1548924797488,
      "time": "1/31/2019, 8:53:17 AM",
      "evt": "start"
     },
     {
      "course": "CS-102",
      "segment": "Task",
      "work": "T02",
      "milli": 1548924825068,
      "time": "1/31/2019, 8:53:45 AM",
      "evt": "start"
     },
     {
      "course": "CS-102",
      "segment": "MarkComplete",
      "work": "T02",
      "milli": 1548925029261,
      "time": "1/31/2019, 8:57:09 AM",
      "evt": "complete"
     },
     {
      "course": "CS-102",
      "segment": "Task",
      "work": "T03",
      "milli": 1548925038390,
      "time": "1/31/2019, 8:57:18 AM",
      "evt": "start"
     },
     {
      "course": "CS-102",
      "segment": "MarkComplete",
      "work": "T03",
      "milli": 1548925139264,
      "time": "1/31/2019, 8:58:59 AM",
      "evt": "complete"
     },
     {
      "course": "CS-102",
      "segment": "Task",
      "work": "T04",
      "milli": 1548925152035,
      "time": "1/31/2019, 8:59:12 AM",
      "evt": "start"
     },
     {
      "course": "CS-102",
      "segment": "MarkComplete",
      "work": "T04",
      "milli": 1548925225959,
      "time": "1/31/2019, 9:00:25 AM",
      "evt": "complete"
     },
     {
      "course": "CS-102",
      "segment": "Task",
      "work": "T05",
      "milli": 1548925237235,
      "time": "1/31/2019, 9:00:37 AM",
      "evt": "start"
     },
     {
      "course": "CS-102",
      "segment": "MarkComplete",
      "work": "T05",
      "milli": 1548925534348,
      "time": "1/31/2019, 9:05:34 AM",
      "evt": "complete"
     },
     {
      "course": "CS-102",
      "segment": "Task",
      "work": "T06",
      "milli": 1548925541314,
      "time": "1/31/2019, 9:05:41 AM",
      "evt": "start"
     },
     {
      "course": "CS-102",
      "segment": "MarkComplete",
      "work": "T06",
      "milli": 1548925637011,
      "time": "1/31/2019, 9:07:17 AM",
      "evt": "complete"
     },
     {
      "course": "CS-102",
      "segment": "Task",
      "work": "T07",
      "milli": 1548925640312,
      "time": "1/31/2019, 9:07:20 AM",
      "evt": "start"
     },
     {
      "course": "CS-102",
      "segment": "MarkComplete",
      "work": "T07",
      "milli": 1548925792923,
      "time": "1/31/2019, 9:09:52 AM",
      "evt": "complete"
     },
     {
      "course": "CS-102",
      "segment": "Task",
      "work": "T08",
      "milli": 1548925805924,
      "time": "1/31/2019, 9:10:05 AM",
      "evt": "start"
     },
     {
      "course": "CS-102",
      "segment": "MarkComplete",
      "work": "T08",
      "milli": 1548926137205,
      "time": "1/31/2019, 9:15:37 AM",
      "evt": "complete"
     },
     {
      "course": "CS-102",
      "segment": "Task",
      "work": "T09",
      "milli": 1548926141683,
      "time": "1/31/2019, 9:15:41 AM",
      "evt": "start"
     },
     {
      "course": "CS-102",
      "segment": "MarkComplete",
      "work": "T09",
      "milli": 1548926226801,
      "time": "1/31/2019, 9:17:06 AM",
      "evt": "complete"
     },
     {
      "course": "CS-102",
      "segment": "Task",
      "work": "T10",
      "milli": 1548926231062,
      "time": "1/31/2019, 9:17:11 AM",
      "evt": "start"
     },
     {
      "course": "CS-102",
      "segment": "MarkComplete",
      "work": "T10",
      "milli": 1548926807376,
      "time": "1/31/2019, 9:26:47 AM",
      "evt": "complete"
     },
     {
      "course": "CS-102",
      "segment": "Task",
      "work": "T11",
      "milli": 1548926812483,
      "time": "1/31/2019, 9:26:52 AM",
      "evt": "start"
     },
     {
      "course": "CS-102",
      "segment": "MarkComplete",
      "work": "T11",
      "milli": 1548927497762,
      "time": "1/31/2019, 9:38:17 AM",
      "evt": "complete"
     },
     {
      "course": "CS-102",
      "segment": "Task",
      "work": "T12",
      "milli": 1548927521096,
      "time": "1/31/2019, 9:38:41 AM",
      "evt": "start"
     },
     {
      "course": "CS-102",
      "segment": "MarkComplete",
      "work": "T12",
      "milli": 1548927667901,
      "time": "1/31/2019, 9:41:07 AM",
      "evt": "complete"
     },
     {
      "course": "CS-103",
      "segment": "Lab",
      "work": "Create",
      "milli": 1548927803774,
      "time": "1/31/2019, 9:43:23 AM",
      "evt": "start"
     },
     {
      "course": "CS-103",
      "segment": "AutoComplete",
      "work": "Create",
      "milli": 1548928591445,
      "time": "1/31/2019, 9:56:31 AM",
      "evt": "complete"
     },
     {
      "course": "CS-103",
      "segment": "Lab",
      "work": "Syntax",
      "milli": 1548928748111,
      "time": "1/31/2019, 9:59:08 AM",
      "evt": "start"
     },
     {
      "course": "CS-103",
      "segment": "AutoComplete",
      "work": "Syntax",
      "milli": 1548929864977,
      "time": "1/31/2019, 10:17:44 AM",
      "evt": "complete"
     },
     {
      "course": "CS-103",
      "segment": "Lab",
      "work": "Resources",
      "milli": 1548929924607,
      "time": "1/31/2019, 10:18:44 AM",
      "evt": "start"
     },
     {
      "course": "CS-103",
      "segment": "AutoComplete",
      "work": "Resources",
      "milli": 1548930672538,
      "time": "1/31/2019, 10:31:12 AM",
      "evt": "complete"
     },
     {
      "course": "CS-103",
      "segment": "AutoComplete",
      "work": "Resources",
      "milli": 1548930707192,
      "time": "1/31/2019, 10:31:47 AM",
      "evt": "complete"
     },
     {
      "course": "CS-103",
      "segment": "Lab",
      "work": "Images",
      "milli": 1548930815913,
      "time": "1/31/2019, 10:33:35 AM",
      "evt": "start"
     },
     {
      "course": "CS-103",
      "segment": "AutoComplete",
      "work": "Images",
      "milli": 1548931499755,
      "time": "1/31/2019, 10:44:59 AM",
      "evt": "complete"
     },
     {
      "course": "CS-103",
      "segment": "Lab",
      "work": "Security",
      "milli": 1548931545769,
      "time": "1/31/2019, 10:45:45 AM",
      "evt": "start"
     },
     {
      "course": "CS-103",
      "segment": "AutoComplete",
      "work": "Security",
      "milli": 1548931647738,
      "time": "1/31/2019, 10:47:27 AM",
      "evt": "complete"
     },
     {
      "course": "CS-103",
      "segment": "Lab",
      "work": "Networking",
      "milli": 1548931784482,
      "time": "1/31/2019, 10:49:44 AM",
      "evt": "start"
     },
     {
      "course": "CS-103",
      "segment": "Lab",
      "work": "Running",
      "milli": 1548932025573,
      "time": "1/31/2019, 10:53:45 AM",
      "evt": "start"
     },
     {
      "course": "CS-103",
      "segment": "Lab",
      "work": "Running",
      "milli": 1548932261115,
      "time": "1/31/2019, 10:57:41 AM",
      "evt": "start"
     },
     {
      "course": "CS-103",
      "segment": "AutoComplete",
      "work": "Running",
      "milli": 1548933259078,
      "time": "1/31/2019, 11:14:19 AM",
      "evt": "complete"
     },
     {
      "course": "CS-103",
      "segment": "AutoComplete",
      "work": "Running",
      "milli": 1548933672493,
      "time": "1/31/2019, 11:21:12 AM",
      "evt": "complete"
     },
     {
      "course": "CS-103",
      "segment": "Lab",
      "work": "Starting",
      "milli": 1548933786500,
      "time": "1/31/2019, 11:23:06 AM",
      "evt": "start"
     }
    ],
    "coral": [],
    "brown": [
     {
      "course": "CS-101",
      "segment": "Task",
      "work": "cloudctl",
      "milli": 1548922436675,
      "time": "1/31/2019, 8:13:56 AM",
      "evt": "start"
     },
     {
      "course": "CS-101",
      "segment": "Task",
      "work": "docker",
      "milli": 1548922883940,
      "time": "1/31/2019, 8:21:23 AM",
      "evt": "start"
     },
     {
      "course": "CS-101",
      "segment": "Task",
      "work": "kubectl",
      "milli": 1548922931971,
      "time": "1/31/2019, 8:22:11 AM",
      "evt": "start"
     },
     {
      "course": "CS-101",
      "segment": "Task",
      "work": "docker",
      "milli": 1548923217700,
      "time": "1/31/2019, 8:26:57 AM",
      "evt": "start"
     },
     {
      "course": "CS-101",
      "segment": "MarkComplete",
      "work": "docker",
      "milli": 1548923239553,
      "time": "1/31/2019, 8:27:19 AM",
      "evt": "complete"
     },
     {
      "course": "CS-101",
      "segment": "Task",
      "work": "cloudctl",
      "milli": 1548923244062,
      "time": "1/31/2019, 8:27:24 AM",
      "evt": "start"
     },
     {
      "course": "CS-101",
      "segment": "MarkComplete",
      "work": "cloudctl",
      "milli": 1548923246329,
      "time": "1/31/2019, 8:27:26 AM",
      "evt": "complete"
     },
     {
      "course": "CS-101",
      "segment": "Task",
      "work": "kubectl",
      "milli": 1548923248547,
      "time": "1/31/2019, 8:27:28 AM",
      "evt": "start"
     },
     {
      "course": "CS-101",
      "segment": "MarkComplete",
      "work": "kubectl",
      "milli": 1548923250735,
      "time": "1/31/2019, 8:27:30 AM",
      "evt": "complete"
     },
     {
      "course": "CS-102",
      "segment": "Task",
      "work": "Introduction",
      "milli": 1548926234235,
      "time": "1/31/2019, 9:17:14 AM",
      "evt": "start"
     },
     {
      "course": "CS-102",
      "segment": "Task",
      "work": "T01",
      "milli": 1548926262221,
      "time": "1/31/2019, 9:17:42 AM",
      "evt": "start"
     },
     {
      "course": "CS-102",
      "segment": "MarkComplete",
      "work": "T01",
      "milli": 1548926417079,
      "time": "1/31/2019, 9:20:17 AM",
      "evt": "complete"
     },
     {
      "course": "CS-102",
      "segment": "Task",
      "work": "T02",
      "milli": 1548926424373,
      "time": "1/31/2019, 9:20:24 AM",
      "evt": "start"
     },
     {
      "course": "CS-102",
      "segment": "MarkComplete",
      "work": "T02",
      "milli": 1548926619828,
      "time": "1/31/2019, 9:23:39 AM",
      "evt": "complete"
     },
     {
      "course": "CS-102",
      "segment": "Task",
      "work": "T03",
      "milli": 1548926622958,
      "time": "1/31/2019, 9:23:42 AM",
      "evt": "start"
     },
     {
      "course": "CS-102",
      "segment": "MarkComplete",
      "work": "T03",
      "milli": 1548926852348,
      "time": "1/31/2019, 9:27:32 AM",
      "evt": "complete"
     },
     {
      "course": "CS-102",
      "segment": "Task",
      "work": "T04",
      "milli": 1548926856179,
      "time": "1/31/2019, 9:27:36 AM",
      "evt": "start"
     },
     {
      "course": "CS-102",
      "segment": "MarkComplete",
      "work": "T04",
      "milli": 1548927131648,
      "time": "1/31/2019, 9:32:11 AM",
      "evt": "complete"
     },
     {
      "course": "CS-102",
      "segment": "Task",
      "work": "T05",
      "milli": 1548927134224,
      "time": "1/31/2019, 9:32:14 AM",
      "evt": "start"
     },
     {
      "course": "CS-102",
      "segment": "MarkComplete",
      "work": "T05",
      "milli": 1548927287179,
      "time": "1/31/2019, 9:34:47 AM",
      "evt": "complete"
     },
     {
      "course": "CS-102",
      "segment": "Task",
      "work": "T06",
      "milli": 1548927289752,
      "time": "1/31/2019, 9:34:49 AM",
      "evt": "start"
     },
     {
      "course": "CS-102",
      "segment": "MarkComplete",
      "work": "T06",
      "milli": 1548927468984,
      "time": "1/31/2019, 9:37:48 AM",
      "evt": "complete"
     },
     {
      "course": "CS-102",
      "segment": "Task",
      "work": "T07",
      "milli": 1548927471339,
      "time": "1/31/2019, 9:37:51 AM",
      "evt": "start"
     },
     {
      "course": "CS-102",
      "segment": "Task",
      "work": "T08",
      "milli": 1548927657944,
      "time": "1/31/2019, 9:40:57 AM",
      "evt": "start"
     },
     {
      "course": "CS-102",
      "segment": "MarkComplete",
      "work": "T08",
      "milli": 1548927729539,
      "time": "1/31/2019, 9:42:09 AM",
      "evt": "complete"
     },
     {
      "course": "CS-102",
      "segment": "Task",
      "work": "T09",
      "milli": 1548927733040,
      "time": "1/31/2019, 9:42:13 AM",
      "evt": "start"
     },
     {
      "course": "CS-102",
      "segment": "MarkComplete",
      "work": "T09",
      "milli": 1548927823837,
      "time": "1/31/2019, 9:43:43 AM",
      "evt": "complete"
     },
     {
      "course": "CS-102",
      "segment": "Task",
      "work": "T10",
      "milli": 1548927826306,
      "time": "1/31/2019, 9:43:46 AM",
      "evt": "start"
     },
     {
      "course": "CS-102",
      "segment": "Task",
      "work": "T11",
      "milli": 1548927836738,
      "time": "1/31/2019, 9:43:56 AM",
      "evt": "start"
     },
     {
      "course": "CS-102",
      "segment": "Task",
      "work": "T12",
      "milli": 1548927882616,
      "time": "1/31/2019, 9:44:42 AM",
      "evt": "start"
     },
     {
      "course": "CS-102",
      "segment": "MarkComplete",
      "work": "T12",
      "milli": 1548927925060,
      "time": "1/31/2019, 9:45:25 AM",
      "evt": "complete"
     },
     {
      "course": "CS-102",
      "segment": "Task",
      "work": "T11",
      "milli": 1548927939617,
      "time": "1/31/2019, 9:45:39 AM",
      "evt": "start"
     },
     {
      "course": "CS-102",
      "segment": "MarkComplete",
      "work": "T11",
      "milli": 1548927943562,
      "time": "1/31/2019, 9:45:43 AM",
      "evt": "complete"
     },
     {
      "course": "CS-102",
      "segment": "Task",
      "work": "T10",
      "milli": 1548927951904,
      "time": "1/31/2019, 9:45:51 AM",
      "evt": "start"
     },
     {
      "course": "CS-102",
      "segment": "MarkComplete",
      "work": "T10",
      "milli": 1548927989414,
      "time": "1/31/2019, 9:46:29 AM",
      "evt": "complete"
     },
     {
      "course": "CS-102",
      "segment": "Task",
      "work": "T11",
      "milli": 1548927996172,
      "time": "1/31/2019, 9:46:36 AM",
      "evt": "start"
     },
     {
      "course": "CS-102",
      "segment": "Task",
      "work": "T12",
      "milli": 1548928001930,
      "time": "1/31/2019, 9:46:41 AM",
      "evt": "start"
     },
     {
      "course": "CS-102",
      "segment": "Task",
      "work": "T05",
      "milli": 1548928014560,
      "time": "1/31/2019, 9:46:54 AM",
      "evt": "start"
     },
     {
      "course": "CS-103",
      "segment": "Lab",
      "work": "Create",
      "milli": 1548928030105,
      "time": "1/31/2019, 9:47:10 AM",
      "evt": "start"
     },
     {
      "course": "CS-103",
      "segment": "Lab",
      "work": "Syntax",
      "milli": 1548928098046,
      "time": "1/31/2019, 9:48:18 AM",
      "evt": "start"
     },
     {
      "course": "CS-103",
      "segment": "Lab",
      "work": "Images",
      "milli": 1548928104746,
      "time": "1/31/2019, 9:48:24 AM",
      "evt": "start"
     },
     {
      "course": "CS-103",
      "segment": "Lab",
      "work": "Security",
      "milli": 1548928107396,
      "time": "1/31/2019, 9:48:27 AM",
      "evt": "start"
     },
     {
      "course": "CS-103",
      "segment": "Lab",
      "work": "Networking",
      "milli": 1548928110435,
      "time": "1/31/2019, 9:48:30 AM",
      "evt": "start"
     },
     {
      "course": "CS-103",
      "segment": "Lab",
      "work": "Running",
      "milli": 1548928117936,
      "time": "1/31/2019, 9:48:37 AM",
      "evt": "start"
     },
     {
      "course": "CS-103",
      "segment": "Lab",
      "work": "Starting",
      "milli": 1548928121298,
      "time": "1/31/2019, 9:48:41 AM",
      "evt": "start"
     },
     {
      "course": "CS-104",
      "segment": "Task",
      "work": "ICP01",
      "milli": 1548928392622,
      "time": "1/31/2019, 9:53:12 AM",
      "evt": "start"
     },
     {
      "course": "CS-104",
      "segment": "Task",
      "work": "ICP02",
      "milli": 1548928488228,
      "time": "1/31/2019, 9:54:48 AM",
      "evt": "start"
     },
     {
      "course": "CS-104",
      "segment": "Task",
      "work": "ICP01",
      "milli": 1548928504074,
      "time": "1/31/2019, 9:55:04 AM",
      "evt": "start"
     },
     {
      "course": "CS-104",
      "segment": "MarkComplete",
      "work": "ICP01",
      "milli": 1548929112131,
      "time": "1/31/2019, 10:05:12 AM",
      "evt": "complete"
     },
     {
      "course": "CS-104",
      "segment": "Task",
      "work": "ICP02",
      "milli": 1548929116511,
      "time": "1/31/2019, 10:05:16 AM",
      "evt": "start"
     },
     {
      "course": "CS-104",
      "segment": "MarkComplete",
      "work": "ICP02",
      "milli": 1548929262149,
      "time": "1/31/2019, 10:07:42 AM",
      "evt": "complete"
     },
     {
      "course": "CS-104",
      "segment": "Task",
      "work": "ICP03",
      "milli": 1548929264837,
      "time": "1/31/2019, 10:07:44 AM",
      "evt": "start"
     },
     {
      "course": "CS-104",
      "segment": "MarkComplete",
      "work": "ICP03",
      "milli": 1548930731620,
      "time": "1/31/2019, 10:32:11 AM",
      "evt": "complete"
     },
     {
      "course": "CS-104",
      "segment": "Task",
      "work": "ICP04",
      "milli": 1548930735112,
      "time": "1/31/2019, 10:32:15 AM",
      "evt": "start"
     },
     {
      "course": "CS-104",
      "segment": "MarkComplete",
      "work": "ICP04",
      "milli": 1548930817692,
      "time": "1/31/2019, 10:33:37 AM",
      "evt": "complete"
     },
     {
      "course": "CS-103",
      "segment": "Lab",
      "work": "Running",
      "milli": 1548931797356,
      "time": "1/31/2019, 10:49:57 AM",
      "evt": "start"
     },
     {
      "course": "CS-104",
      "segment": "Task",
      "work": "ICP01",
      "milli": 1548932339090,
      "time": "1/31/2019, 10:58:59 AM",
      "evt": "start"
     }
    ],
    "blue": [],
    "maroon": [
     {
      "course": "CS-101",
      "segment": "Task",
      "work": "cloudctl",
      "milli": 1548922306070,
      "time": "1/31/2019, 8:11:46 AM",
      "evt": "start"
     },
     {
      "course": "CS-101",
      "segment": "Task",
      "work": "cloudctl",
      "milli": 1548922308441,
      "time": "1/31/2019, 8:11:48 AM",
      "evt": "start"
     },
     {
      "course": "CS-101",
      "segment": "Task",
      "work": "cloudctl",
      "milli": 1548922454254,
      "time": "1/31/2019, 8:14:14 AM",
      "evt": "start"
     },
     {
      "course": "CS-101",
      "segment": "Task",
      "work": "docker",
      "milli": 1548922644585,
      "time": "1/31/2019, 8:17:24 AM",
      "evt": "start"
     },
     {
      "course": "CS-101",
      "segment": "Task",
      "work": "cloudctl",
      "milli": 1548922675968,
      "time": "1/31/2019, 8:17:55 AM",
      "evt": "start"
     },
     {
      "course": "CS-101",
      "segment": "MarkComplete",
      "work": "cloudctl",
      "milli": 1548922679394,
      "time": "1/31/2019, 8:17:59 AM",
      "evt": "complete"
     },
     {
      "course": "CS-101",
      "segment": "Task",
      "work": "docker",
      "milli": 1548922681567,
      "time": "1/31/2019, 8:18:01 AM",
      "evt": "start"
     },
     {
      "course": "CS-101",
      "segment": "MarkComplete",
      "work": "docker",
      "milli": 1548922684097,
      "time": "1/31/2019, 8:18:04 AM",
      "evt": "complete"
     },
     {
      "course": "CS-101",
      "segment": "Task",
      "work": "kubectl",
      "milli": 1548922686075,
      "time": "1/31/2019, 8:18:06 AM",
      "evt": "start"
     },
     {
      "course": "CS-101",
      "segment": "MarkComplete",
      "work": "kubectl",
      "milli": 1548922687967,
      "time": "1/31/2019, 8:18:07 AM",
      "evt": "complete"
     },
     {
      "course": "CS-102",
      "segment": "Task",
      "work": "Introduction",
      "milli": 1548922775180,
      "time": "1/31/2019, 8:19:35 AM",
      "evt": "start"
     },
     {
      "course": "CS-102",
      "segment": "Task",
      "work": "Introduction",
      "milli": 1548922985224,
      "time": "1/31/2019, 8:23:05 AM",
      "evt": "start"
     },
     {
      "course": "CS-102",
      "segment": "Task",
      "work": "Introduction",
      "milli": 1548922996400,
      "time": "1/31/2019, 8:23:16 AM",
      "evt": "start"
     },
     {
      "course": "CS-102",
      "segment": "Task",
      "work": "Introduction",
      "milli": 1548924295143,
      "time": "1/31/2019, 8:44:55 AM",
      "evt": "start"
     },
     {
      "course": "CS-102",
      "segment": "Task",
      "work": "Introduction",
      "milli": 1548924341637,
      "time": "1/31/2019, 8:45:41 AM",
      "evt": "start"
     },
     {
      "course": "CS-102",
      "segment": "Task",
      "work": "T01",
      "milli": 1548924347709,
      "time": "1/31/2019, 8:45:47 AM",
      "evt": "start"
     },
     {
      "course": "CS-102",
      "segment": "Task",
      "work": "T02",
      "milli": 1548924419447,
      "time": "1/31/2019, 8:46:59 AM",
      "evt": "start"
     },
     {
      "course": "CS-102",
      "segment": "Task",
      "work": "T03",
      "milli": 1548924759445,
      "time": "1/31/2019, 8:52:39 AM",
      "evt": "start"
     },
     {
      "course": "CS-102",
      "segment": "Task",
      "work": "T04",
      "milli": 1548924796533,
      "time": "1/31/2019, 8:53:16 AM",
      "evt": "start"
     },
     {
      "course": "CS-102",
      "segment": "MarkComplete",
      "work": "T04",
      "milli": 1548924831154,
      "time": "1/31/2019, 8:53:51 AM",
      "evt": "complete"
     },
     {
      "course": "CS-102",
      "segment": "Task",
      "work": "T01",
      "milli": 1548924833841,
      "time": "1/31/2019, 8:53:53 AM",
      "evt": "start"
     },
     {
      "course": "CS-102",
      "segment": "MarkComplete",
      "work": "T01",
      "milli": 1548924917625,
      "time": "1/31/2019, 8:55:17 AM",
      "evt": "complete"
     },
     {
      "course": "CS-102",
      "segment": "Task",
      "work": "T02",
      "milli": 1548924925029,
      "time": "1/31/2019, 8:55:25 AM",
      "evt": "start"
     },
     {
      "course": "CS-102",
      "segment": "MarkComplete",
      "work": "T02",
      "milli": 1548924929840,
      "time": "1/31/2019, 8:55:29 AM",
      "evt": "complete"
     },
     {
      "course": "CS-102",
      "segment": "Task",
      "work": "T03",
      "milli": 1548924932303,
      "time": "1/31/2019, 8:55:32 AM",
      "evt": "start"
     },
     {
      "course": "CS-102",
      "segment": "MarkComplete",
      "work": "T03",
      "milli": 1548924936810,
      "time": "1/31/2019, 8:55:36 AM",
      "evt": "complete"
     },
     {
      "course": "CS-102",
      "segment": "Task",
      "work": "T04",
      "milli": 1548924939426,
      "time": "1/31/2019, 8:55:39 AM",
      "evt": "start"
     },
     {
      "course": "CS-102",
      "segment": "Task",
      "work": "T04",
      "milli": 1548924941334,
      "time": "1/31/2019, 8:55:41 AM",
      "evt": "start"
     },
     {
      "course": "CS-102",
      "segment": "Task",
      "work": "T05",
      "milli": 1548924951032,
      "time": "1/31/2019, 8:55:51 AM",
      "evt": "start"
     },
     {
      "course": "CS-102",
      "segment": "Task",
      "work": "T05",
      "milli": 1548924956322,
      "time": "1/31/2019, 8:55:56 AM",
      "evt": "start"
     },
     {
      "course": "CS-102",
      "segment": "Task",
      "work": "T05",
      "milli": 1548924957448,
      "time": "1/31/2019, 8:55:57 AM",
      "evt": "start"
     },
     {
      "course": "CS-102",
      "segment": "MarkComplete",
      "work": "T05",
      "milli": 1548925074940,
      "time": "1/31/2019, 8:57:54 AM",
      "evt": "complete"
     },
     {
      "course": "CS-102",
      "segment": "Task",
      "work": "T06",
      "milli": 1548925078692,
      "time": "1/31/2019, 8:57:58 AM",
      "evt": "start"
     },
     {
      "course": "CS-102",
      "segment": "MarkComplete",
      "work": "T06",
      "milli": 1548925115989,
      "time": "1/31/2019, 8:58:35 AM",
      "evt": "complete"
     },
     {
      "course": "CS-102",
      "segment": "Task",
      "work": "T07",
      "milli": 1548925118865,
      "time": "1/31/2019, 8:58:38 AM",
      "evt": "start"
     },
     {
      "course": "CS-102",
      "segment": "MarkComplete",
      "work": "T07",
      "milli": 1548925313736,
      "time": "1/31/2019, 9:01:53 AM",
      "evt": "complete"
     },
     {
      "course": "CS-102",
      "segment": "Task",
      "work": "T08",
      "milli": 1548925317815,
      "time": "1/31/2019, 9:01:57 AM",
      "evt": "start"
     },
     {
      "course": "CS-102",
      "segment": "MarkComplete",
      "work": "T08",
      "milli": 1548925691676,
      "time": "1/31/2019, 9:08:11 AM",
      "evt": "complete"
     },
     {
      "course": "CS-102",
      "segment": "Task",
      "work": "T09",
      "milli": 1548925695349,
      "time": "1/31/2019, 9:08:15 AM",
      "evt": "start"
     },
     {
      "course": "CS-102",
      "segment": "MarkComplete",
      "work": "T09",
      "milli": 1548925813525,
      "time": "1/31/2019, 9:10:13 AM",
      "evt": "complete"
     },
     {
      "course": "CS-102",
      "segment": "Task",
      "work": "T10",
      "milli": 1548925817254,
      "time": "1/31/2019, 9:10:17 AM",
      "evt": "start"
     },
     {
      "course": "CS-102",
      "segment": "MarkComplete",
      "work": "T10",
      "milli": 1548926083858,
      "time": "1/31/2019, 9:14:43 AM",
      "evt": "complete"
     },
     {
      "course": "CS-102",
      "segment": "Task",
      "work": "T11",
      "milli": 1548926088856,
      "time": "1/31/2019, 9:14:48 AM",
      "evt": "start"
     },
     {
      "course": "CS-102",
      "segment": "Task",
      "work": "T11",
      "milli": 1548926090341,
      "time": "1/31/2019, 9:14:50 AM",
      "evt": "start"
     },
     {
      "course": "CS-102",
      "segment": "MarkComplete",
      "work": "T11",
      "milli": 1548926107967,
      "time": "1/31/2019, 9:15:07 AM",
      "evt": "complete"
     },
     {
      "course": "CS-102",
      "segment": "Task",
      "work": "T12",
      "milli": 1548926110585,
      "time": "1/31/2019, 9:15:10 AM",
      "evt": "start"
     },
     {
      "course": "CS-102",
      "segment": "MarkComplete",
      "work": "T12",
      "milli": 1548926123040,
      "time": "1/31/2019, 9:15:23 AM",
      "evt": "complete"
     },
     {
      "course": "CS-103",
      "segment": "Lab",
      "work": "Create",
      "milli": 1548926990262,
      "time": "1/31/2019, 9:29:50 AM",
      "evt": "start"
     },
     {
      "course": "CS-103",
      "segment": "AutoComplete",
      "work": "Create",
      "milli": 1548927689674,
      "time": "1/31/2019, 9:41:29 AM",
      "evt": "complete"
     },
     {
      "course": "CS-103",
      "segment": "Lab",
      "work": "Syntax",
      "milli": 1548927763599,
      "time": "1/31/2019, 9:42:43 AM",
      "evt": "start"
     },
     {
      "course": "CS-103",
      "segment": "AutoComplete",
      "work": "Syntax",
      "milli": 1548927953379,
      "time": "1/31/2019, 9:45:53 AM",
      "evt": "complete"
     },
     {
      "course": "CS-103",
      "segment": "Lab",
      "work": "Syntax",
      "milli": 1548927963792,
      "time": "1/31/2019, 9:46:03 AM",
      "evt": "start"
     },
     {
      "course": "CS-103",
      "segment": "Lab",
      "work": "Resources",
      "milli": 1548927975513,
      "time": "1/31/2019, 9:46:15 AM",
      "evt": "start"
     },
     {
      "course": "CS-103",
      "segment": "AutoComplete",
      "work": "Resources",
      "milli": 1548928218843,
      "time": "1/31/2019, 9:50:18 AM",
      "evt": "complete"
     },
     {
      "course": "CS-103",
      "segment": "Lab",
      "work": "Images",
      "milli": 1548928356581,
      "time": "1/31/2019, 9:52:36 AM",
      "evt": "start"
     },
     {
      "course": "CS-103",
      "segment": "AutoComplete",
      "work": "Images",
      "milli": 1548928988772,
      "time": "1/31/2019, 10:03:08 AM",
      "evt": "complete"
     },
     {
      "course": "CS-103",
      "segment": "AutoComplete",
      "work": "Images",
      "milli": 1548929354937,
      "time": "1/31/2019, 10:09:14 AM",
      "evt": "complete"
     },
     {
      "course": "CS-103",
      "segment": "Lab",
      "work": "Security",
      "milli": 1548929385302,
      "time": "1/31/2019, 10:09:45 AM",
      "evt": "start"
     },
     {
      "course": "CS-103",
      "segment": "Lab",
      "work": "Networking",
      "milli": 1548930006548,
      "time": "1/31/2019, 10:20:06 AM",
      "evt": "start"
     },
     {
      "course": "CS-103",
      "segment": "AutoComplete",
      "work": "Networking",
      "milli": 1548930878728,
      "time": "1/31/2019, 10:34:38 AM",
      "evt": "complete"
     },
     {
      "course": "CS-103",
      "segment": "Lab",
      "work": "Running",
      "milli": 1548930890632,
      "time": "1/31/2019, 10:34:50 AM",
      "evt": "start"
     },
     {
      "course": "CS-103",
      "segment": "AutoComplete",
      "work": "Running",
      "milli": 1548931270883,
      "time": "1/31/2019, 10:41:10 AM",
      "evt": "complete"
     },
     {
      "course": "CS-103",
      "segment": "Lab",
      "work": "Starting",
      "milli": 1548931284190,
      "time": "1/31/2019, 10:41:24 AM",
      "evt": "start"
     },
     {
      "course": "CS-103",
      "segment": "AutoComplete",
      "work": "Starting",
      "milli": 1548931896433,
      "time": "1/31/2019, 10:51:36 AM",
      "evt": "complete"
     },
     {
      "course": "CS-104",
      "segment": "Task",
      "work": "ICP01",
      "milli": 1548932021412,
      "time": "1/31/2019, 10:53:41 AM",
      "evt": "start"
     },
     {
      "course": "CS-104",
      "segment": "MarkComplete",
      "work": "ICP01",
      "milli": 1548932553711,
      "time": "1/31/2019, 11:02:33 AM",
      "evt": "complete"
     },
     {
      "course": "CS-104",
      "segment": "Task",
      "work": "ICP02",
      "milli": 1548932557661,
      "time": "1/31/2019, 11:02:37 AM",
      "evt": "start"
     },
     {
      "course": "CS-104",
      "segment": "MarkComplete",
      "work": "ICP02",
      "milli": 1548932640747,
      "time": "1/31/2019, 11:04:00 AM",
      "evt": "complete"
     },
     {
      "course": "CS-104",
      "segment": "Task",
      "work": "ICP03",
      "milli": 1548932644650,
      "time": "1/31/2019, 11:04:04 AM",
      "evt": "start"
     },
     {
      "course": "CS-104",
      "segment": "MarkComplete",
      "work": "ICP03",
      "milli": 1548932897747,
      "time": "1/31/2019, 11:08:17 AM",
      "evt": "complete"
     },
     {
      "course": "CS-104",
      "segment": "Task",
      "work": "ICP04",
      "milli": 1548932901208,
      "time": "1/31/2019, 11:08:21 AM",
      "evt": "start"
     },
     {
      "course": "CS-104",
      "segment": "MarkComplete",
      "work": "ICP04",
      "milli": 1548933079034,
      "time": "1/31/2019, 11:11:19 AM",
      "evt": "complete"
     }
    ],
    "lightblue": [],
    "wheat": [],
    "tan": [
     {
      "course": "CS-101",
      "segment": "Task",
      "work": "cloudctl",
      "milli": 1548922308292,
      "time": "1/31/2019, 8:11:48 AM",
      "evt": "start"
     },
     {
      "course": "CS-101",
      "segment": "Task",
      "work": "cloudctl",
      "milli": 1548922478485,
      "time": "1/31/2019, 8:14:38 AM",
      "evt": "start"
     },
     {
      "course": "CS-101",
      "segment": "MarkComplete",
      "work": "cloudctl",
      "milli": 1548923038274,
      "time": "1/31/2019, 8:23:58 AM",
      "evt": "complete"
     },
     {
      "course": "CS-101",
      "segment": "Task",
      "work": "docker",
      "milli": 1548923055195,
      "time": "1/31/2019, 8:24:15 AM",
      "evt": "start"
     },
     {
      "course": "CS-101",
      "segment": "MarkComplete",
      "work": "docker",
      "milli": 1548924019917,
      "time": "1/31/2019, 8:40:19 AM",
      "evt": "complete"
     },
     {
      "course": "CS-101",
      "segment": "Task",
      "work": "kubectl",
      "milli": 1548924024894,
      "time": "1/31/2019, 8:40:24 AM",
      "evt": "start"
     },
     {
      "course": "CS-101",
      "segment": "MarkComplete",
      "work": "kubectl",
      "milli": 1548924237248,
      "time": "1/31/2019, 8:43:57 AM",
      "evt": "complete"
     }
    ],
    "plum": [],
    "black": [
     {
      "course": "CS-101",
      "segment": "Task",
      "work": "cloudctl",
      "milli": 1548922294481,
      "time": "1/31/2019, 8:11:34 AM",
      "evt": "start"
     },
     {
      "course": "CS-101",
      "segment": "Task",
      "work": "cloudctl",
      "milli": 1548922301291,
      "time": "1/31/2019, 8:11:41 AM",
      "evt": "start"
     },
     {
      "course": "CS-101",
      "segment": "MarkComplete",
      "work": "cloudctl",
      "milli": 1548922302418,
      "time": "1/31/2019, 8:11:42 AM",
      "evt": "complete"
     },
     {
      "course": "CS-101",
      "segment": "Task",
      "work": "docker",
      "milli": 1548922308767,
      "time": "1/31/2019, 8:11:48 AM",
      "evt": "start"
     },
     {
      "course": "CS-101",
      "segment": "Task",
      "work": "kubectl",
      "milli": 1548922312002,
      "time": "1/31/2019, 8:11:52 AM",
      "evt": "start"
     },
     {
      "course": "CS-101",
      "segment": "Task",
      "work": "docker",
      "milli": 1548922324032,
      "time": "1/31/2019, 8:12:04 AM",
      "evt": "start"
     },
     {
      "course": "CS-101",
      "segment": "MarkComplete",
      "work": "docker",
      "milli": 1548922332933,
      "time": "1/31/2019, 8:12:12 AM",
      "evt": "complete"
     },
     {
      "course": "CS-101",
      "segment": "Task",
      "work": "kubectl",
      "milli": 1548922338024,
      "time": "1/31/2019, 8:12:18 AM",
      "evt": "start"
     },
     {
      "course": "CS-101",
      "segment": "MarkComplete",
      "work": "kubectl",
      "milli": 1548922349389,
      "time": "1/31/2019, 8:12:29 AM",
      "evt": "complete"
     },
     {
      "course": "CS-101",
      "segment": "Task",
      "work": "cloudctl",
      "milli": 1548922721905,
      "time": "1/31/2019, 8:18:41 AM",
      "evt": "start"
     },
     {
      "course": "CS-102",
      "segment": "Task",
      "work": "Introduction",
      "milli": 1548924291779,
      "time": "1/31/2019, 8:44:51 AM",
      "evt": "start"
     },
     {
      "course": "CS-102",
      "segment": "Task",
      "work": "Introduction",
      "milli": 1548924293798,
      "time": "1/31/2019, 8:44:53 AM",
      "evt": "start"
     },
     {
      "course": "CS-102",
      "segment": "Task",
      "work": "Introduction",
      "milli": 1548924308149,
      "time": "1/31/2019, 8:45:08 AM",
      "evt": "start"
     },
     {
      "course": "CS-102",
      "segment": "Task",
      "work": "T01",
      "milli": 1548924312726,
      "time": "1/31/2019, 8:45:12 AM",
      "evt": "start"
     },
     {
      "course": "CS-102",
      "segment": "Task",
      "work": "T01",
      "milli": 1548924313360,
      "time": "1/31/2019, 8:45:13 AM",
      "evt": "start"
     },
     {
      "course": "CS-102",
      "segment": "Task",
      "work": "T01",
      "milli": 1548924330732,
      "time": "1/31/2019, 8:45:30 AM",
      "evt": "start"
     },
     {
      "course": "CS-102",
      "segment": "Task",
      "work": "Introduction",
      "milli": 1548924407423,
      "time": "1/31/2019, 8:46:47 AM",
      "evt": "start"
     },
     {
      "course": "CS-102",
      "segment": "Task",
      "work": "T01",
      "milli": 1548924417987,
      "time": "1/31/2019, 8:46:57 AM",
      "evt": "start"
     },
     {
      "course": "CS-102",
      "segment": "Task",
      "work": "Introduction",
      "milli": 1548924424733,
      "time": "1/31/2019, 8:47:04 AM",
      "evt": "start"
     },
     {
      "course": "CS-102",
      "segment": "MarkComplete",
      "work": "T01",
      "milli": 1548924430578,
      "time": "1/31/2019, 8:47:10 AM",
      "evt": "complete"
     },
     {
      "course": "CS-102",
      "segment": "Task",
      "work": "T01",
      "milli": 1548924433111,
      "time": "1/31/2019, 8:47:13 AM",
      "evt": "start"
     },
     {
      "course": "CS-102",
      "segment": "Task",
      "work": "T02",
      "milli": 1548924435029,
      "time": "1/31/2019, 8:47:15 AM",
      "evt": "start"
     },
     {
      "course": "CS-102",
      "segment": "Task",
      "work": "T03",
      "milli": 1548924445398,
      "time": "1/31/2019, 8:47:25 AM",
      "evt": "start"
     },
     {
      "course": "CS-102",
      "segment": "Task",
      "work": "T02",
      "milli": 1548924447427,
      "time": "1/31/2019, 8:47:27 AM",
      "evt": "start"
     },
     {
      "course": "CS-102",
      "segment": "Task",
      "work": "T02",
      "milli": 1548924448603,
      "time": "1/31/2019, 8:47:28 AM",
      "evt": "start"
     },
     {
      "course": "CS-102",
      "segment": "MarkComplete",
      "work": "T02",
      "milli": 1548924560887,
      "time": "1/31/2019, 8:49:20 AM",
      "evt": "complete"
     },
     {
      "course": "CS-102",
      "segment": "Task",
      "work": "T03",
      "milli": 1548924564043,
      "time": "1/31/2019, 8:49:24 AM",
      "evt": "start"
     },
     {
      "course": "CS-102",
      "segment": "Task",
      "work": "T03",
      "milli": 1548924570967,
      "time": "1/31/2019, 8:49:30 AM",
      "evt": "start"
     },
     {
      "course": "CS-102",
      "segment": "MarkComplete",
      "work": "T03",
      "milli": 1548924664677,
      "time": "1/31/2019, 8:51:04 AM",
      "evt": "complete"
     },
     {
      "course": "CS-102",
      "segment": "Task",
      "work": "T04",
      "milli": 1548924670697,
      "time": "1/31/2019, 8:51:10 AM",
      "evt": "start"
     },
     {
      "course": "CS-102",
      "segment": "Task",
      "work": "T04",
      "milli": 1548924671404,
      "time": "1/31/2019, 8:51:11 AM",
      "evt": "start"
     },
     {
      "course": "CS-102",
      "segment": "Task",
      "work": "T04",
      "milli": 1548924683650,
      "time": "1/31/2019, 8:51:23 AM",
      "evt": "start"
     },
     {
      "course": "CS-102",
      "segment": "Task",
      "work": "T04",
      "milli": 1548924809422,
      "time": "1/31/2019, 8:53:29 AM",
      "evt": "start"
     },
     {
      "course": "CS-102",
      "segment": "MarkComplete",
      "work": "T04",
      "milli": 1548924818676,
      "time": "1/31/2019, 8:53:38 AM",
      "evt": "complete"
     },
     {
      "course": "CS-102",
      "segment": "Task",
      "work": "T05",
      "milli": 1548924828377,
      "time": "1/31/2019, 8:53:48 AM",
      "evt": "start"
     },
     {
      "course": "CS-102",
      "segment": "Task",
      "work": "T05",
      "milli": 1548924838932,
      "time": "1/31/2019, 8:53:58 AM",
      "evt": "start"
     },
     {
      "course": "CS-102",
      "segment": "MarkComplete",
      "work": "T05",
      "milli": 1548925040215,
      "time": "1/31/2019, 8:57:20 AM",
      "evt": "complete"
     },
     {
      "course": "CS-102",
      "segment": "Task",
      "work": "T06",
      "milli": 1548925043239,
      "time": "1/31/2019, 8:57:23 AM",
      "evt": "start"
     },
     {
      "course": "CS-102",
      "segment": "Task",
      "work": "T06",
      "milli": 1548925062994,
      "time": "1/31/2019, 8:57:42 AM",
      "evt": "start"
     },
     {
      "course": "CS-102",
      "segment": "MarkComplete",
      "work": "T06",
      "milli": 1548925091451,
      "time": "1/31/2019, 8:58:11 AM",
      "evt": "complete"
     },
     {
      "course": "CS-102",
      "segment": "Task",
      "work": "T07",
      "milli": 1548925093274,
      "time": "1/31/2019, 8:58:13 AM",
      "evt": "start"
     },
     {
      "course": "CS-102",
      "segment": "Task",
      "work": "T07",
      "milli": 1548925096124,
      "time": "1/31/2019, 8:58:16 AM",
      "evt": "start"
     },
     {
      "course": "CS-102",
      "segment": "MarkComplete",
      "work": "T07",
      "milli": 1548925328709,
      "time": "1/31/2019, 9:02:08 AM",
      "evt": "complete"
     },
     {
      "course": "CS-102",
      "segment": "Task",
      "work": "T08",
      "milli": 1548925337651,
      "time": "1/31/2019, 9:02:17 AM",
      "evt": "start"
     },
     {
      "course": "CS-102",
      "segment": "Task",
      "work": "T08",
      "milli": 1548925355482,
      "time": "1/31/2019, 9:02:35 AM",
      "evt": "start"
     },
     {
      "course": "CS-102",
      "segment": "MarkComplete",
      "work": "T08",
      "milli": 1548925503057,
      "time": "1/31/2019, 9:05:03 AM",
      "evt": "complete"
     },
     {
      "course": "CS-102",
      "segment": "Task",
      "work": "T09",
      "milli": 1548925505115,
      "time": "1/31/2019, 9:05:05 AM",
      "evt": "start"
     },
     {
      "course": "CS-102",
      "segment": "Task",
      "work": "T09",
      "milli": 1548925544516,
      "time": "1/31/2019, 9:05:44 AM",
      "evt": "start"
     },
     {
      "course": "CS-102",
      "segment": "MarkComplete",
      "work": "T09",
      "milli": 1548925618243,
      "time": "1/31/2019, 9:06:58 AM",
      "evt": "complete"
     },
     {
      "course": "CS-102",
      "segment": "Task",
      "work": "T10",
      "milli": 1548925622157,
      "time": "1/31/2019, 9:07:02 AM",
      "evt": "start"
     },
     {
      "course": "CS-102",
      "segment": "Task",
      "work": "T10",
      "milli": 1548925623428,
      "time": "1/31/2019, 9:07:03 AM",
      "evt": "start"
     },
     {
      "course": "CS-102",
      "segment": "MarkComplete",
      "work": "T10",
      "milli": 1548925793668,
      "time": "1/31/2019, 9:09:53 AM",
      "evt": "complete"
     },
     {
      "course": "CS-102",
      "segment": "Task",
      "work": "T11",
      "milli": 1548925795830,
      "time": "1/31/2019, 9:09:55 AM",
      "evt": "start"
     },
     {
      "course": "CS-102",
      "segment": "Task",
      "work": "T11",
      "milli": 1548925800276,
      "time": "1/31/2019, 9:10:00 AM",
      "evt": "start"
     },
     {
      "course": "CS-102",
      "segment": "MarkComplete",
      "work": "T11",
      "milli": 1548925920525,
      "time": "1/31/2019, 9:12:00 AM",
      "evt": "complete"
     },
     {
      "course": "CS-102",
      "segment": "Task",
      "work": "T12",
      "milli": 1548925922651,
      "time": "1/31/2019, 9:12:02 AM",
      "evt": "start"
     },
     {
      "course": "CS-102",
      "segment": "MarkComplete",
      "work": "T12",
      "milli": 1548925954168,
      "time": "1/31/2019, 9:12:34 AM",
      "evt": "complete"
     },
     {
      "course": "CS-102",
      "segment": "Task",
      "work": "T12",
      "milli": 1548925966442,
      "time": "1/31/2019, 9:12:46 AM",
      "evt": "start"
     },
     {
      "course": "CS-103",
      "segment": "Lab",
      "work": "Create",
      "milli": 1548926840877,
      "time": "1/31/2019, 9:27:20 AM",
      "evt": "start"
     },
     {
      "course": "CS-103",
      "segment": "Lab",
      "work": "Create",
      "milli": 1548927298871,
      "time": "1/31/2019, 9:34:58 AM",
      "evt": "start"
     },
     {
      "course": "CS-103",
      "segment": "AutoComplete",
      "work": "Create",
      "milli": 1548927567350,
      "time": "1/31/2019, 9:39:27 AM",
      "evt": "complete"
     },
     {
      "course": "CS-103",
      "segment": "Lab",
      "work": "Syntax",
      "milli": 1548927604524,
      "time": "1/31/2019, 9:40:04 AM",
      "evt": "start"
     },
     {
      "course": "CS-103",
      "segment": "Lab",
      "work": "Syntax",
      "milli": 1548927640733,
      "time": "1/31/2019, 9:40:40 AM",
      "evt": "start"
     },
     {
      "course": "CS-103",
      "segment": "AutoComplete",
      "work": "Syntax",
      "milli": 1548927807083,
      "time": "1/31/2019, 9:43:27 AM",
      "evt": "complete"
     },
     {
      "course": "CS-103",
      "segment": "Lab",
      "work": "Resources",
      "milli": 1548927862813,
      "time": "1/31/2019, 9:44:22 AM",
      "evt": "start"
     },
     {
      "course": "CS-103",
      "segment": "Lab",
      "work": "Resources",
      "milli": 1548928017535,
      "time": "1/31/2019, 9:46:57 AM",
      "evt": "start"
     },
     {
      "course": "CS-103",
      "segment": "AutoComplete",
      "work": "Resources",
      "milli": 1548928204624,
      "time": "1/31/2019, 9:50:04 AM",
      "evt": "complete"
     },
     {
      "course": "CS-103",
      "segment": "Lab",
      "work": "Images",
      "milli": 1548928230248,
      "time": "1/31/2019, 9:50:30 AM",
      "evt": "start"
     },
     {
      "course": "CS-103",
      "segment": "AutoComplete",
      "work": "Images",
      "milli": 1548928348729,
      "time": "1/31/2019, 9:52:28 AM",
      "evt": "complete"
     },
     {
      "course": "CS-103",
      "segment": "Lab",
      "work": "Images",
      "milli": 1548928365028,
      "time": "1/31/2019, 9:52:45 AM",
      "evt": "start"
     },
     {
      "course": "CS-103",
      "segment": "Lab",
      "work": "Security",
      "milli": 1548928367081,
      "time": "1/31/2019, 9:52:47 AM",
      "evt": "start"
     },
     {
      "course": "CS-103",
      "segment": "Lab",
      "work": "Security",
      "milli": 1548928400908,
      "time": "1/31/2019, 9:53:20 AM",
      "evt": "start"
     },
     {
      "course": "CS-103",
      "segment": "Lab",
      "work": "Networking",
      "milli": 1548928638681,
      "time": "1/31/2019, 9:57:18 AM",
      "evt": "start"
     },
     {
      "course": "CS-103",
      "segment": "AutoComplete",
      "work": "Security",
      "milli": 1548928660730,
      "time": "1/31/2019, 9:57:40 AM",
      "evt": "complete"
     },
     {
      "course": "CS-103",
      "segment": "Lab",
      "work": "Networking",
      "milli": 1548928680196,
      "time": "1/31/2019, 9:58:00 AM",
      "evt": "start"
     },
     {
      "course": "CS-103",
      "segment": "AutoComplete",
      "work": "Networking",
      "milli": 1548928906882,
      "time": "1/31/2019, 10:01:46 AM",
      "evt": "complete"
     },
     {
      "course": "CS-103",
      "segment": "Lab",
      "work": "Running",
      "milli": 1548928915392,
      "time": "1/31/2019, 10:01:55 AM",
      "evt": "start"
     },
     {
      "course": "CS-103",
      "segment": "Lab",
      "work": "Running",
      "milli": 1548928934536,
      "time": "1/31/2019, 10:02:14 AM",
      "evt": "start"
     },
     {
      "course": "CS-103",
      "segment": "AutoComplete",
      "work": "Running",
      "milli": 1548929098534,
      "time": "1/31/2019, 10:04:58 AM",
      "evt": "complete"
     },
     {
      "course": "CS-103",
      "segment": "Lab",
      "work": "Starting",
      "milli": 1548929121165,
      "time": "1/31/2019, 10:05:21 AM",
      "evt": "start"
     },
     {
      "course": "CS-103",
      "segment": "Lab",
      "work": "Starting",
      "milli": 1548929124067,
      "time": "1/31/2019, 10:05:24 AM",
      "evt": "start"
     },
     {
      "course": "CS-103",
      "segment": "AutoComplete",
      "work": "Starting",
      "milli": 1548929766507,
      "time": "1/31/2019, 10:16:06 AM",
      "evt": "complete"
     },
     {
      "course": "CS-104",
      "segment": "Task",
      "work": "ICP01",
      "milli": 1548931807013,
      "time": "1/31/2019, 10:50:07 AM",
      "evt": "start"
     },
     {
      "course": "CS-104",
      "segment": "Task",
      "work": "ICP04",
      "milli": 1548931816553,
      "time": "1/31/2019, 10:50:16 AM",
      "evt": "start"
     },
     {
      "course": "CS-104",
      "segment": "Task",
      "work": "ICP01",
      "milli": 1548931824920,
      "time": "1/31/2019, 10:50:24 AM",
      "evt": "start"
     },
     {
      "course": "CS-104",
      "segment": "MarkComplete",
      "work": "ICP01",
      "milli": 1548932183854,
      "time": "1/31/2019, 10:56:23 AM",
      "evt": "complete"
     },
     {
      "course": "CS-104",
      "segment": "Task",
      "work": "ICP02",
      "milli": 1548932188262,
      "time": "1/31/2019, 10:56:28 AM",
      "evt": "start"
     },
     {
      "course": "CS-104",
      "segment": "MarkComplete",
      "work": "ICP02",
      "milli": 1548932257420,
      "time": "1/31/2019, 10:57:37 AM",
      "evt": "complete"
     },
     {
      "course": "CS-104",
      "segment": "Task",
      "work": "ICP03",
      "milli": 1548932261042,
      "time": "1/31/2019, 10:57:41 AM",
      "evt": "start"
     },
     {
      "course": "CS-104",
      "segment": "MarkComplete",
      "work": "ICP03",
      "milli": 1548932422930,
      "time": "1/31/2019, 11:00:22 AM",
      "evt": "complete"
     },
     {
      "course": "CS-104",
      "segment": "Task",
      "work": "ICP04",
      "milli": 1548932427914,
      "time": "1/31/2019, 11:00:27 AM",
      "evt": "start"
     },
     {
      "course": "CS-104",
      "segment": "MarkComplete",
      "work": "ICP04",
      "milli": 1548932506042,
      "time": "1/31/2019, 11:01:46 AM",
      "evt": "complete"
     }
    ],
    "magenta": [
     {
      "course": "CS-101",
      "segment": "Task",
      "work": "cloudctl",
      "milli": 1548922255364,
      "time": "1/31/2019, 8:10:55 AM",
      "evt": "start"
     },
     {
      "course": "CS-101",
      "segment": "Task",
      "work": "cloudctl",
      "milli": 1548922389567,
      "time": "1/31/2019, 8:13:09 AM",
      "evt": "start"
     },
     {
      "course": "CS-101",
      "segment": "MarkComplete",
      "work": "cloudctl",
      "milli": 1548922559589,
      "time": "1/31/2019, 8:15:59 AM",
      "evt": "complete"
     },
     {
      "course": "CS-101",
      "segment": "Task",
      "work": "docker",
      "milli": 1548922561808,
      "time": "1/31/2019, 8:16:01 AM",
      "evt": "start"
     },
     {
      "course": "CS-101",
      "segment": "Task",
      "work": "docker",
      "milli": 1548922562721,
      "time": "1/31/2019, 8:16:02 AM",
      "evt": "start"
     },
     {
      "course": "CS-101",
      "segment": "Task",
      "work": "kubectl",
      "milli": 1548922564404,
      "time": "1/31/2019, 8:16:04 AM",
      "evt": "start"
     },
     {
      "course": "CS-101",
      "segment": "MarkComplete",
      "work": "kubectl",
      "milli": 1548922582681,
      "time": "1/31/2019, 8:16:22 AM",
      "evt": "complete"
     },
     {
      "course": "CS-101",
      "segment": "Task",
      "work": "docker",
      "milli": 1548922585258,
      "time": "1/31/2019, 8:16:25 AM",
      "evt": "start"
     },
     {
      "course": "CS-101",
      "segment": "MarkComplete",
      "work": "docker",
      "milli": 1548922588158,
      "time": "1/31/2019, 8:16:28 AM",
      "evt": "complete"
     },
     {
      "course": "CS-101",
      "segment": "Task",
      "work": "kubectl",
      "milli": 1548922590458,
      "time": "1/31/2019, 8:16:30 AM",
      "evt": "start"
     },
     {
      "course": "CS-101",
      "segment": "Task",
      "work": "kubectl",
      "milli": 1548922591430,
      "time": "1/31/2019, 8:16:31 AM",
      "evt": "start"
     },
     {
      "course": "CS-101",
      "segment": "Task",
      "work": "cloudctl",
      "milli": 1548922595787,
      "time": "1/31/2019, 8:16:35 AM",
      "evt": "start"
     },
     {
      "course": "CS-102",
      "segment": "Task",
      "work": "Introduction",
      "milli": 1548922687622,
      "time": "1/31/2019, 8:18:07 AM",
      "evt": "start"
     },
     {
      "course": "CS-102",
      "segment": "Task",
      "work": "Introduction",
      "milli": 1548924301028,
      "time": "1/31/2019, 8:45:01 AM",
      "evt": "start"
     },
     {
      "course": "CS-102",
      "segment": "Task",
      "work": "Introduction",
      "milli": 1548924303362,
      "time": "1/31/2019, 8:45:03 AM",
      "evt": "start"
     },
     {
      "course": "CS-102",
      "segment": "Task",
      "work": "Introduction",
      "milli": 1548924312584,
      "time": "1/31/2019, 8:45:12 AM",
      "evt": "start"
     },
     {
      "course": "CS-102",
      "segment": "Task",
      "work": "Introduction",
      "milli": 1548924316652,
      "time": "1/31/2019, 8:45:16 AM",
      "evt": "start"
     },
     {
      "course": "CS-102",
      "segment": "Task",
      "work": "T01",
      "milli": 1548924318689,
      "time": "1/31/2019, 8:45:18 AM",
      "evt": "start"
     },
     {
      "course": "CS-102",
      "segment": "Task",
      "work": "T02",
      "milli": 1548924319092,
      "time": "1/31/2019, 8:45:19 AM",
      "evt": "start"
     },
     {
      "course": "CS-102",
      "segment": "Task",
      "work": "T01",
      "milli": 1548924322247,
      "time": "1/31/2019, 8:45:22 AM",
      "evt": "start"
     },
     {
      "course": "CS-102",
      "segment": "Task",
      "work": "T01",
      "milli": 1548924382548,
      "time": "1/31/2019, 8:46:22 AM",
      "evt": "start"
     },
     {
      "course": "CS-102",
      "segment": "Task",
      "work": "T02",
      "milli": 1548924410501,
      "time": "1/31/2019, 8:46:50 AM",
      "evt": "start"
     },
     {
      "course": "CS-102",
      "segment": "MarkComplete",
      "work": "T01",
      "milli": 1548924443378,
      "time": "1/31/2019, 8:47:23 AM",
      "evt": "complete"
     },
     {
      "course": "CS-102",
      "segment": "Task",
      "work": "T02",
      "milli": 1548924447253,
      "time": "1/31/2019, 8:47:27 AM",
      "evt": "start"
     },
     {
      "course": "CS-102",
      "segment": "MarkComplete",
      "work": "T02",
      "milli": 1548924498920,
      "time": "1/31/2019, 8:48:18 AM",
      "evt": "complete"
     },
     {
      "course": "CS-102",
      "segment": "Task",
      "work": "T03",
      "milli": 1548924506901,
      "time": "1/31/2019, 8:48:26 AM",
      "evt": "start"
     },
     {
      "course": "CS-102",
      "segment": "Task",
      "work": "T02",
      "milli": 1548924553171,
      "time": "1/31/2019, 8:49:13 AM",
      "evt": "start"
     },
     {
      "course": "CS-102",
      "segment": "Task",
      "work": "T01",
      "milli": 1548924565690,
      "time": "1/31/2019, 8:49:25 AM",
      "evt": "start"
     },
     {
      "course": "CS-102",
      "segment": "Task",
      "work": "T03",
      "milli": 1548924571576,
      "time": "1/31/2019, 8:49:31 AM",
      "evt": "start"
     },
     {
      "course": "CS-102",
      "segment": "Task",
      "work": "T03",
      "milli": 1548924590601,
      "time": "1/31/2019, 8:49:50 AM",
      "evt": "start"
     },
     {
      "course": "CS-102",
      "segment": "Task",
      "work": "T03",
      "milli": 1548924593068,
      "time": "1/31/2019, 8:49:53 AM",
      "evt": "start"
     },
     {
      "course": "CS-102",
      "segment": "MarkComplete",
      "work": "T03",
      "milli": 1548924603834,
      "time": "1/31/2019, 8:50:03 AM",
      "evt": "complete"
     },
     {
      "course": "CS-102",
      "segment": "Task",
      "work": "T04",
      "milli": 1548924617877,
      "time": "1/31/2019, 8:50:17 AM",
      "evt": "start"
     },
     {
      "course": "CS-102",
      "segment": "Task",
      "work": "T04",
      "milli": 1548924694840,
      "time": "1/31/2019, 8:51:34 AM",
      "evt": "start"
     },
     {
      "course": "CS-102",
      "segment": "MarkComplete",
      "work": "T04",
      "milli": 1548924747018,
      "time": "1/31/2019, 8:52:27 AM",
      "evt": "complete"
     },
     {
      "course": "CS-102",
      "segment": "Task",
      "work": "T05",
      "milli": 1548924750147,
      "time": "1/31/2019, 8:52:30 AM",
      "evt": "start"
     },
     {
      "course": "CS-102",
      "segment": "Task",
      "work": "T05",
      "milli": 1548924845090,
      "time": "1/31/2019, 8:54:05 AM",
      "evt": "start"
     },
     {
      "course": "CS-102",
      "segment": "MarkComplete",
      "work": "T05",
      "milli": 1548924939775,
      "time": "1/31/2019, 8:55:39 AM",
      "evt": "complete"
     },
     {
      "course": "CS-102",
      "segment": "Task",
      "work": "T06",
      "milli": 1548924961676,
      "time": "1/31/2019, 8:56:01 AM",
      "evt": "start"
     },
     {
      "course": "CS-102",
      "segment": "MarkComplete",
      "work": "T06",
      "milli": 1548925013728,
      "time": "1/31/2019, 8:56:53 AM",
      "evt": "complete"
     },
     {
      "course": "CS-102",
      "segment": "Task",
      "work": "T07",
      "milli": 1548925021038,
      "time": "1/31/2019, 8:57:01 AM",
      "evt": "start"
     },
     {
      "course": "CS-102",
      "segment": "Task",
      "work": "T06",
      "milli": 1548925267535,
      "time": "1/31/2019, 9:01:07 AM",
      "evt": "start"
     },
     {
      "course": "CS-102",
      "segment": "Task",
      "work": "T07",
      "milli": 1548925344523,
      "time": "1/31/2019, 9:02:24 AM",
      "evt": "start"
     },
     {
      "course": "CS-102",
      "segment": "MarkComplete",
      "work": "T07",
      "milli": 1548925427259,
      "time": "1/31/2019, 9:03:47 AM",
      "evt": "complete"
     },
     {
      "course": "CS-102",
      "segment": "Task",
      "work": "T08",
      "milli": 1548925432915,
      "time": "1/31/2019, 9:03:52 AM",
      "evt": "start"
     },
     {
      "course": "CS-102",
      "segment": "Task",
      "work": "T08",
      "milli": 1548925552375,
      "time": "1/31/2019, 9:05:52 AM",
      "evt": "start"
     },
     {
      "course": "CS-102",
      "segment": "MarkComplete",
      "work": "T08",
      "milli": 1548925682137,
      "time": "1/31/2019, 9:08:02 AM",
      "evt": "complete"
     },
     {
      "course": "CS-102",
      "segment": "Task",
      "work": "T09",
      "milli": 1548925694600,
      "time": "1/31/2019, 9:08:14 AM",
      "evt": "start"
     },
     {
      "course": "CS-102",
      "segment": "Task",
      "work": "T09",
      "milli": 1548925704345,
      "time": "1/31/2019, 9:08:24 AM",
      "evt": "start"
     },
     {
      "course": "CS-102",
      "segment": "MarkComplete",
      "work": "T09",
      "milli": 1548925737273,
      "time": "1/31/2019, 9:08:57 AM",
      "evt": "complete"
     },
     {
      "course": "CS-102",
      "segment": "Task",
      "work": "T10",
      "milli": 1548925742258,
      "time": "1/31/2019, 9:09:02 AM",
      "evt": "start"
     },
     {
      "course": "CS-102",
      "segment": "Task",
      "work": "T10",
      "milli": 1548925862028,
      "time": "1/31/2019, 9:11:02 AM",
      "evt": "start"
     },
     {
      "course": "CS-102",
      "segment": "MarkComplete",
      "work": "T10",
      "milli": 1548925884776,
      "time": "1/31/2019, 9:11:24 AM",
      "evt": "complete"
     },
     {
      "course": "CS-102",
      "segment": "Task",
      "work": "T11",
      "milli": 1548925890111,
      "time": "1/31/2019, 9:11:30 AM",
      "evt": "start"
     },
     {
      "course": "CS-102",
      "segment": "MarkComplete",
      "work": "T11",
      "milli": 1548925915276,
      "time": "1/31/2019, 9:11:55 AM",
      "evt": "complete"
     },
     {
      "course": "CS-102",
      "segment": "Task",
      "work": "T12",
      "milli": 1548925917934,
      "time": "1/31/2019, 9:11:57 AM",
      "evt": "start"
     },
     {
      "course": "CS-102",
      "segment": "MarkComplete",
      "work": "T12",
      "milli": 1548925962474,
      "time": "1/31/2019, 9:12:42 AM",
      "evt": "complete"
     },
     {
      "course": "CS-102",
      "segment": "Task",
      "work": "T11",
      "milli": 1548925984806,
      "time": "1/31/2019, 9:13:04 AM",
      "evt": "start"
     },
     {
      "course": "CS-102",
      "segment": "Task",
      "work": "T11",
      "milli": 1548926110657,
      "time": "1/31/2019, 9:15:10 AM",
      "evt": "start"
     },
     {
      "course": "CS-102",
      "segment": "Task",
      "work": "T12",
      "milli": 1548926397297,
      "time": "1/31/2019, 9:19:57 AM",
      "evt": "start"
     },
     {
      "course": "CS-103",
      "segment": "Lab",
      "work": "Create",
      "milli": 1548926803269,
      "time": "1/31/2019, 9:26:43 AM",
      "evt": "start"
     },
     {
      "course": "CS-103",
      "segment": "AutoComplete",
      "work": "Create",
      "milli": 1548927037633,
      "time": "1/31/2019, 9:30:37 AM",
      "evt": "complete"
     },
     {
      "course": "CS-103",
      "segment": "Lab",
      "work": "Create",
      "milli": 1548927151488,
      "time": "1/31/2019, 9:32:31 AM",
      "evt": "start"
     },
     {
      "course": "CS-103",
      "segment": "Lab",
      "work": "Syntax",
      "milli": 1548927178501,
      "time": "1/31/2019, 9:32:58 AM",
      "evt": "start"
     },
     {
      "course": "CS-103",
      "segment": "Lab",
      "work": "Create",
      "milli": 1548927199183,
      "time": "1/31/2019, 9:33:19 AM",
      "evt": "start"
     },
     {
      "course": "CS-103",
      "segment": "Lab",
      "work": "Syntax",
      "milli": 1548927206789,
      "time": "1/31/2019, 9:33:26 AM",
      "evt": "start"
     },
     {
      "course": "CS-103",
      "segment": "AutoComplete",
      "work": "Syntax",
      "milli": 1548927366935,
      "time": "1/31/2019, 9:36:06 AM",
      "evt": "complete"
     },
     {
      "course": "CS-103",
      "segment": "Lab",
      "work": "Resources",
      "milli": 1548927382166,
      "time": "1/31/2019, 9:36:22 AM",
      "evt": "start"
     },
     {
      "course": "CS-103",
      "segment": "Lab",
      "work": "Create",
      "milli": 1548927774638,
      "time": "1/31/2019, 9:42:54 AM",
      "evt": "start"
     },
     {
      "course": "CS-103",
      "segment": "Lab",
      "work": "Syntax",
      "milli": 1548927776425,
      "time": "1/31/2019, 9:42:56 AM",
      "evt": "start"
     },
     {
      "course": "CS-103",
      "segment": "AutoComplete",
      "work": "Resources",
      "milli": 1548927799192,
      "time": "1/31/2019, 9:43:19 AM",
      "evt": "complete"
     },
     {
      "course": "CS-103",
      "segment": "Lab",
      "work": "Images",
      "milli": 1548927885358,
      "time": "1/31/2019, 9:44:45 AM",
      "evt": "start"
     },
     {
      "course": "CS-103",
      "segment": "Lab",
      "work": "Resources",
      "milli": 1548928060679,
      "time": "1/31/2019, 9:47:40 AM",
      "evt": "start"
     },
     {
      "course": "CS-103",
      "segment": "AutoComplete",
      "work": "Images",
      "milli": 1548928166917,
      "time": "1/31/2019, 9:49:26 AM",
      "evt": "complete"
     },
     {
      "course": "CS-103",
      "segment": "Lab",
      "work": "Images",
      "milli": 1548928184752,
      "time": "1/31/2019, 9:49:44 AM",
      "evt": "start"
     },
     {
      "course": "CS-103",
      "segment": "Lab",
      "work": "Security",
      "milli": 1548928248359,
      "time": "1/31/2019, 9:50:48 AM",
      "evt": "start"
     },
     {
      "course": "CS-103",
      "segment": "Lab",
      "work": "Security",
      "milli": 1548928324654,
      "time": "1/31/2019, 9:52:04 AM",
      "evt": "start"
     },
     {
      "course": "CS-103",
      "segment": "AutoComplete",
      "work": "Security",
      "milli": 1548929152408,
      "time": "1/31/2019, 10:05:52 AM",
      "evt": "complete"
     },
     {
      "course": "CS-103",
      "segment": "Lab",
      "work": "Networking",
      "milli": 1548929172432,
      "time": "1/31/2019, 10:06:12 AM",
      "evt": "start"
     },
     {
      "course": "CS-103",
      "segment": "Lab",
      "work": "Create",
      "milli": 1548929468117,
      "time": "1/31/2019, 10:11:08 AM",
      "evt": "start"
     },
     {
      "course": "CS-103",
      "segment": "Lab",
      "work": "Syntax",
      "milli": 1548929471127,
      "time": "1/31/2019, 10:11:11 AM",
      "evt": "start"
     },
     {
      "course": "CS-103",
      "segment": "Lab",
      "work": "Resources",
      "milli": 1548929476390,
      "time": "1/31/2019, 10:11:16 AM",
      "evt": "start"
     },
     {
      "course": "CS-103",
      "segment": "Lab",
      "work": "Images",
      "milli": 1548929479790,
      "time": "1/31/2019, 10:11:19 AM",
      "evt": "start"
     },
     {
      "course": "CS-103",
      "segment": "Lab",
      "work": "Security",
      "milli": 1548929489980,
      "time": "1/31/2019, 10:11:29 AM",
      "evt": "start"
     },
     {
      "course": "CS-103",
      "segment": "Lab",
      "work": "Networking",
      "milli": 1548929493349,
      "time": "1/31/2019, 10:11:33 AM",
      "evt": "start"
     },
     {
      "course": "CS-103",
      "segment": "Lab",
      "work": "Networking",
      "milli": 1548929749588,
      "time": "1/31/2019, 10:15:49 AM",
      "evt": "start"
     },
     {
      "course": "CS-103",
      "segment": "AutoComplete",
      "work": "Networking",
      "milli": 1548930240026,
      "time": "1/31/2019, 10:24:00 AM",
      "evt": "complete"
     },
     {
      "course": "CS-103",
      "segment": "Lab",
      "work": "Running",
      "milli": 1548930270128,
      "time": "1/31/2019, 10:24:30 AM",
      "evt": "start"
     },
     {
      "course": "CS-103",
      "segment": "Lab",
      "work": "Running",
      "milli": 1548930279994,
      "time": "1/31/2019, 10:24:39 AM",
      "evt": "start"
     },
     {
      "course": "CS-103",
      "segment": "AutoComplete",
      "work": "Running",
      "milli": 1548930627284,
      "time": "1/31/2019, 10:30:27 AM",
      "evt": "complete"
     },
     {
      "course": "CS-103",
      "segment": "Lab",
      "work": "Starting",
      "milli": 1548930651951,
      "time": "1/31/2019, 10:30:51 AM",
      "evt": "start"
     },
     {
      "course": "CS-103",
      "segment": "Lab",
      "work": "Starting",
      "milli": 1548930696818,
      "time": "1/31/2019, 10:31:36 AM",
      "evt": "start"
     },
     {
      "course": "CS-103",
      "segment": "AutoComplete",
      "work": "Starting",
      "milli": 1548931196412,
      "time": "1/31/2019, 10:39:56 AM",
      "evt": "complete"
     },
     {
      "course": "CS-104",
      "segment": "Task",
      "work": "ICP01",
      "milli": 1548931321271,
      "time": "1/31/2019, 10:42:01 AM",
      "evt": "start"
     },
     {
      "course": "CS-104",
      "segment": "Task",
      "work": "ICP01",
      "milli": 1548931401897,
      "time": "1/31/2019, 10:43:21 AM",
      "evt": "start"
     },
     {
      "course": "CS-104",
      "segment": "MarkComplete",
      "work": "ICP01",
      "milli": 1548931689507,
      "time": "1/31/2019, 10:48:09 AM",
      "evt": "complete"
     },
     {
      "course": "CS-104",
      "segment": "Task",
      "work": "ICP02",
      "milli": 1548931693431,
      "time": "1/31/2019, 10:48:13 AM",
      "evt": "start"
     },
     {
      "course": "CS-104",
      "segment": "MarkComplete",
      "work": "ICP02",
      "milli": 1548931749178,
      "time": "1/31/2019, 10:49:09 AM",
      "evt": "complete"
     },
     {
      "course": "CS-104",
      "segment": "Task",
      "work": "ICP03",
      "milli": 1548931752235,
      "time": "1/31/2019, 10:49:12 AM",
      "evt": "start"
     },
     {
      "course": "CS-104",
      "segment": "MarkComplete",
      "work": "ICP03",
      "milli": 1548931963701,
      "time": "1/31/2019, 10:52:43 AM",
      "evt": "complete"
     },
     {
      "course": "CS-104",
      "segment": "Task",
      "work": "ICP04",
      "milli": 1548931966048,
      "time": "1/31/2019, 10:52:46 AM",
      "evt": "start"
     },
     {
      "course": "CS-104",
      "segment": "Task",
      "work": "ICP02",
      "milli": 1548932056272,
      "time": "1/31/2019, 10:54:16 AM",
      "evt": "start"
     },
     {
      "course": "CS-104",
      "segment": "Task",
      "work": "ICP01",
      "milli": 1548932115649,
      "time": "1/31/2019, 10:55:15 AM",
      "evt": "start"
     },
     {
      "course": "CS-104",
      "segment": "Task",
      "work": "ICP03",
      "milli": 1548932124645,
      "time": "1/31/2019, 10:55:24 AM",
      "evt": "start"
     },
     {
      "course": "CS-104",
      "segment": "Task",
      "work": "ICP04",
      "milli": 1548932131452,
      "time": "1/31/2019, 10:55:31 AM",
      "evt": "start"
     },
     {
      "course": "CS-104",
      "segment": "MarkComplete",
      "work": "ICP04",
      "milli": 1548932136643,
      "time": "1/31/2019, 10:55:36 AM",
      "evt": "complete"
     },
     {
      "course": "CS-104",
      "segment": "Task",
      "work": "ICP04",
      "milli": 1548932219365,
      "time": "1/31/2019, 10:56:59 AM",
      "evt": "start"
     }
    ],
    "aliceblue": [
     {
      "course": "CS-101",
      "segment": "Task",
      "work": "cloudctl",
      "milli": 1548922414845,
      "time": "1/31/2019, 8:13:34 AM",
      "evt": "start"
     },
     {
      "course": "CS-101",
      "segment": "MarkComplete",
      "work": "cloudctl",
      "milli": 1548922541830,
      "time": "1/31/2019, 8:15:41 AM",
      "evt": "complete"
     },
     {
      "course": "CS-101",
      "segment": "Task",
      "work": "docker",
      "milli": 1548922557437,
      "time": "1/31/2019, 8:15:57 AM",
      "evt": "start"
     },
     {
      "course": "CS-101",
      "segment": "Task",
      "work": "kubectl",
      "milli": 1548922561476,
      "time": "1/31/2019, 8:16:01 AM",
      "evt": "start"
     },
     {
      "course": "CS-101",
      "segment": "MarkComplete",
      "work": "kubectl",
      "milli": 1548922567284,
      "time": "1/31/2019, 8:16:07 AM",
      "evt": "complete"
     },
     {
      "course": "CS-102",
      "segment": "Task",
      "work": "Introduction",
      "milli": 1548922584357,
      "time": "1/31/2019, 8:16:24 AM",
      "evt": "start"
     },
     {
      "course": "CS-101",
      "segment": "Task",
      "work": "cloudctl",
      "milli": 1548922959825,
      "time": "1/31/2019, 8:22:39 AM",
      "evt": "start"
     },
     {
      "course": "CS-101",
      "segment": "Task",
      "work": "docker",
      "milli": 1548922965764,
      "time": "1/31/2019, 8:22:45 AM",
      "evt": "start"
     },
     {
      "course": "CS-101",
      "segment": "MarkComplete",
      "work": "docker",
      "milli": 1548922968452,
      "time": "1/31/2019, 8:22:48 AM",
      "evt": "complete"
     },
     {
      "course": "CS-101",
      "segment": "Task",
      "work": "kubectl",
      "milli": 1548922970520,
      "time": "1/31/2019, 8:22:50 AM",
      "evt": "start"
     },
     {
      "course": "CS-102",
      "segment": "Task",
      "work": "Introduction",
      "milli": 1548923001354,
      "time": "1/31/2019, 8:23:21 AM",
      "evt": "start"
     },
     {
      "course": "CS-102",
      "segment": "Task",
      "work": "Introduction",
      "milli": 1548923080540,
      "time": "1/31/2019, 8:24:40 AM",
      "evt": "start"
     },
     {
      "course": "CS-102",
      "segment": "Task",
      "work": "T01",
      "milli": 1548923086376,
      "time": "1/31/2019, 8:24:46 AM",
      "evt": "start"
     },
     {
      "course": "CS-102",
      "segment": "Task",
      "work": "Introduction",
      "milli": 1548923092382,
      "time": "1/31/2019, 8:24:52 AM",
      "evt": "start"
     },
     {
      "course": "CS-102",
      "segment": "Task",
      "work": "Introduction",
      "milli": 1548924312494,
      "time": "1/31/2019, 8:45:12 AM",
      "evt": "start"
     },
     {
      "course": "CS-102",
      "segment": "Task",
      "work": "T01",
      "milli": 1548924319094,
      "time": "1/31/2019, 8:45:19 AM",
      "evt": "start"
     },
     {
      "course": "CS-102",
      "segment": "Task",
      "work": "T01",
      "milli": 1548924328026,
      "time": "1/31/2019, 8:45:28 AM",
      "evt": "start"
     },
     {
      "course": "CS-102",
      "segment": "MarkComplete",
      "work": "T01",
      "milli": 1548924401768,
      "time": "1/31/2019, 8:46:41 AM",
      "evt": "complete"
     },
     {
      "course": "CS-102",
      "segment": "Task",
      "work": "T02",
      "milli": 1548924439364,
      "time": "1/31/2019, 8:47:19 AM",
      "evt": "start"
     },
     {
      "course": "CS-102",
      "segment": "MarkComplete",
      "work": "T02",
      "milli": 1548924494999,
      "time": "1/31/2019, 8:48:14 AM",
      "evt": "complete"
     },
     {
      "course": "CS-102",
      "segment": "Task",
      "work": "T03",
      "milli": 1548924501788,
      "time": "1/31/2019, 8:48:21 AM",
      "evt": "start"
     },
     {
      "course": "CS-102",
      "segment": "MarkComplete",
      "work": "T03",
      "milli": 1548924565956,
      "time": "1/31/2019, 8:49:25 AM",
      "evt": "complete"
     },
     {
      "course": "CS-102",
      "segment": "Task",
      "work": "T04",
      "milli": 1548924574563,
      "time": "1/31/2019, 8:49:34 AM",
      "evt": "start"
     },
     {
      "course": "CS-102",
      "segment": "Task",
      "work": "T01",
      "milli": 1548924795332,
      "time": "1/31/2019, 8:53:15 AM",
      "evt": "start"
     },
     {
      "course": "CS-102",
      "segment": "Task",
      "work": "T02",
      "milli": 1548924822358,
      "time": "1/31/2019, 8:53:42 AM",
      "evt": "start"
     },
     {
      "course": "CS-102",
      "segment": "Task",
      "work": "T03",
      "milli": 1548924829519,
      "time": "1/31/2019, 8:53:49 AM",
      "evt": "start"
     },
     {
      "course": "CS-102",
      "segment": "Task",
      "work": "T04",
      "milli": 1548924841765,
      "time": "1/31/2019, 8:54:01 AM",
      "evt": "start"
     },
     {
      "course": "CS-102",
      "segment": "Task",
      "work": "T05",
      "milli": 1548924853614,
      "time": "1/31/2019, 8:54:13 AM",
      "evt": "start"
     },
     {
      "course": "CS-102",
      "segment": "MarkComplete",
      "work": "T05",
      "milli": 1548924912188,
      "time": "1/31/2019, 8:55:12 AM",
      "evt": "complete"
     },
     {
      "course": "CS-102",
      "segment": "Task",
      "work": "T06",
      "milli": 1548924915301,
      "time": "1/31/2019, 8:55:15 AM",
      "evt": "start"
     },
     {
      "course": "CS-102",
      "segment": "Task",
      "work": "T07",
      "milli": 1548924931242,
      "time": "1/31/2019, 8:55:31 AM",
      "evt": "start"
     },
     {
      "course": "CS-102",
      "segment": "MarkComplete",
      "work": "T07",
      "milli": 1548925028560,
      "time": "1/31/2019, 8:57:08 AM",
      "evt": "complete"
     },
     {
      "course": "CS-102",
      "segment": "Task",
      "work": "T08",
      "milli": 1548925035557,
      "time": "1/31/2019, 8:57:15 AM",
      "evt": "start"
     },
     {
      "course": "CS-102",
      "segment": "MarkComplete",
      "work": "T08",
      "milli": 1548925145191,
      "time": "1/31/2019, 8:59:05 AM",
      "evt": "complete"
     },
     {
      "course": "CS-102",
      "segment": "Task",
      "work": "T09",
      "milli": 1548925173452,
      "time": "1/31/2019, 8:59:33 AM",
      "evt": "start"
     },
     {
      "course": "CS-102",
      "segment": "Task",
      "work": "T08",
      "milli": 1548925176360,
      "time": "1/31/2019, 8:59:36 AM",
      "evt": "start"
     },
     {
      "course": "CS-102",
      "segment": "Task",
      "work": "T09",
      "milli": 1548925184803,
      "time": "1/31/2019, 8:59:44 AM",
      "evt": "start"
     },
     {
      "course": "CS-102",
      "segment": "MarkComplete",
      "work": "T09",
      "milli": 1548925439248,
      "time": "1/31/2019, 9:03:59 AM",
      "evt": "complete"
     },
     {
      "course": "CS-102",
      "segment": "Task",
      "work": "T10",
      "milli": 1548925468035,
      "time": "1/31/2019, 9:04:28 AM",
      "evt": "start"
     },
     {
      "course": "CS-102",
      "segment": "MarkComplete",
      "work": "T10",
      "milli": 1548925541964,
      "time": "1/31/2019, 9:05:41 AM",
      "evt": "complete"
     },
     {
      "course": "CS-102",
      "segment": "Task",
      "work": "T11",
      "milli": 1548925547237,
      "time": "1/31/2019, 9:05:47 AM",
      "evt": "start"
     },
     {
      "course": "CS-102",
      "segment": "MarkComplete",
      "work": "T11",
      "milli": 1548925573777,
      "time": "1/31/2019, 9:06:13 AM",
      "evt": "complete"
     },
     {
      "course": "CS-102",
      "segment": "Task",
      "work": "T12",
      "milli": 1548925576859,
      "time": "1/31/2019, 9:06:16 AM",
      "evt": "start"
     },
     {
      "course": "CS-102",
      "segment": "MarkComplete",
      "work": "T12",
      "milli": 1548925635556,
      "time": "1/31/2019, 9:07:15 AM",
      "evt": "complete"
     },
     {
      "course": "CS-102",
      "segment": "Task",
      "work": "T11",
      "milli": 1548925697948,
      "time": "1/31/2019, 9:08:17 AM",
      "evt": "start"
     },
     {
      "course": "CS-102",
      "segment": "Task",
      "work": "T12",
      "milli": 1548925707281,
      "time": "1/31/2019, 9:08:27 AM",
      "evt": "start"
     },
     {
      "course": "CS-102",
      "segment": "Task",
      "work": "T10",
      "milli": 1548925816585,
      "time": "1/31/2019, 9:10:16 AM",
      "evt": "start"
     },
     {
      "course": "CS-102",
      "segment": "Task",
      "work": "T11",
      "milli": 1548925822961,
      "time": "1/31/2019, 9:10:22 AM",
      "evt": "start"
     },
     {
      "course": "CS-102",
      "segment": "Task",
      "work": "T12",
      "milli": 1548925837746,
      "time": "1/31/2019, 9:10:37 AM",
      "evt": "start"
     },
     {
      "course": "CS-103",
      "segment": "Lab",
      "work": "Create",
      "milli": 1548926092210,
      "time": "1/31/2019, 9:14:52 AM",
      "evt": "start"
     },
     {
      "course": "CS-103",
      "segment": "Lab",
      "work": "Create",
      "milli": 1548926851437,
      "time": "1/31/2019, 9:27:31 AM",
      "evt": "start"
     },
     {
      "course": "CS-103",
      "segment": "Lab",
      "work": "Create",
      "milli": 1548926859559,
      "time": "1/31/2019, 9:27:39 AM",
      "evt": "start"
     },
     {
      "course": "CS-103",
      "segment": "AutoComplete",
      "work": "Create",
      "milli": 1548927948094,
      "time": "1/31/2019, 9:45:48 AM",
      "evt": "complete"
     },
     {
      "course": "CS-103",
      "segment": "Lab",
      "work": "Create",
      "milli": 1548927971731,
      "time": "1/31/2019, 9:46:11 AM",
      "evt": "start"
     },
     {
      "course": "CS-103",
      "segment": "Lab",
      "work": "Syntax",
      "milli": 1548928050488,
      "time": "1/31/2019, 9:47:30 AM",
      "evt": "start"
     },
     {
      "course": "CS-103",
      "segment": "Lab",
      "work": "Create",
      "milli": 1548928054801,
      "time": "1/31/2019, 9:47:34 AM",
      "evt": "start"
     },
     {
      "course": "CS-103",
      "segment": "Lab",
      "work": "Create",
      "milli": 1548928058162,
      "time": "1/31/2019, 9:47:38 AM",
      "evt": "start"
     },
     {
      "course": "CS-103",
      "segment": "Lab",
      "work": "Syntax",
      "milli": 1548928097847,
      "time": "1/31/2019, 9:48:17 AM",
      "evt": "start"
     },
     {
      "course": "CS-103",
      "segment": "AutoComplete",
      "work": "Syntax",
      "milli": 1548929127298,
      "time": "1/31/2019, 10:05:27 AM",
      "evt": "complete"
     },
     {
      "course": "CS-103",
      "segment": "Lab",
      "work": "Resources",
      "milli": 1548929153398,
      "time": "1/31/2019, 10:05:53 AM",
      "evt": "start"
     },
     {
      "course": "CS-103",
      "segment": "Lab",
      "work": "Images",
      "milli": 1548929520041,
      "time": "1/31/2019, 10:12:00 AM",
      "evt": "start"
     },
     {
      "course": "CS-103",
      "segment": "Lab",
      "work": "Resources",
      "milli": 1548929857891,
      "time": "1/31/2019, 10:17:37 AM",
      "evt": "start"
     },
     {
      "course": "CS-103",
      "segment": "Lab",
      "work": "Resources",
      "milli": 1548929861269,
      "time": "1/31/2019, 10:17:41 AM",
      "evt": "start"
     },
     {
      "course": "CS-103",
      "segment": "Lab",
      "work": "Syntax",
      "milli": 1548929871434,
      "time": "1/31/2019, 10:17:51 AM",
      "evt": "start"
     },
     {
      "course": "CS-103",
      "segment": "Lab",
      "work": "Resources",
      "milli": 1548929874497,
      "time": "1/31/2019, 10:17:54 AM",
      "evt": "start"
     },
     {
      "course": "CS-103",
      "segment": "AutoComplete",
      "work": "Resources",
      "milli": 1548930275154,
      "time": "1/31/2019, 10:24:35 AM",
      "evt": "complete"
     },
     {
      "course": "CS-103",
      "segment": "Lab",
      "work": "Images",
      "milli": 1548930292581,
      "time": "1/31/2019, 10:24:52 AM",
      "evt": "start"
     },
     {
      "course": "CS-103",
      "segment": "AutoComplete",
      "work": "Images",
      "milli": 1548930344619,
      "time": "1/31/2019, 10:25:44 AM",
      "evt": "complete"
     },
     {
      "course": "CS-103",
      "segment": "Lab",
      "work": "Security",
      "milli": 1548930361606,
      "time": "1/31/2019, 10:26:01 AM",
      "evt": "start"
     },
     {
      "course": "CS-103",
      "segment": "AutoComplete",
      "work": "Security",
      "milli": 1548930534360,
      "time": "1/31/2019, 10:28:54 AM",
      "evt": "complete"
     },
     {
      "course": "CS-103",
      "segment": "Lab",
      "work": "Networking",
      "milli": 1548930584980,
      "time": "1/31/2019, 10:29:44 AM",
      "evt": "start"
     },
     {
      "course": "CS-103",
      "segment": "AutoComplete",
      "work": "Networking",
      "milli": 1548931320961,
      "time": "1/31/2019, 10:42:00 AM",
      "evt": "complete"
     },
     {
      "course": "CS-103",
      "segment": "Lab",
      "work": "Running",
      "milli": 1548931354394,
      "time": "1/31/2019, 10:42:34 AM",
      "evt": "start"
     },
     {
      "course": "CS-103",
      "segment": "Lab",
      "work": "Running",
      "milli": 1548931364142,
      "time": "1/31/2019, 10:42:44 AM",
      "evt": "start"
     },
     {
      "course": "CS-103",
      "segment": "AutoComplete",
      "work": "Running",
      "milli": 1548931619465,
      "time": "1/31/2019, 10:46:59 AM",
      "evt": "complete"
     },
     {
      "course": "CS-103",
      "segment": "Lab",
      "work": "Starting",
      "milli": 1548931658424,
      "time": "1/31/2019, 10:47:38 AM",
      "evt": "start"
     },
     {
      "course": "CS-103",
      "segment": "AutoComplete",
      "work": "Starting",
      "milli": 1548931972821,
      "time": "1/31/2019, 10:52:52 AM",
      "evt": "complete"
     },
     {
      "course": "CS-104",
      "segment": "Task",
      "work": "ICP01",
      "milli": 1548931994600,
      "time": "1/31/2019, 10:53:14 AM",
      "evt": "start"
     },
     {
      "course": "CS-104",
      "segment": "Task",
      "work": "ICP01",
      "milli": 1548932035480,
      "time": "1/31/2019, 10:53:55 AM",
      "evt": "start"
     },
     {
      "course": "CS-104",
      "segment": "MarkComplete",
      "work": "ICP01",
      "milli": 1548932098057,
      "time": "1/31/2019, 10:54:58 AM",
      "evt": "complete"
     },
     {
      "course": "CS-104",
      "segment": "Task",
      "work": "ICP02",
      "milli": 1548932101653,
      "time": "1/31/2019, 10:55:01 AM",
      "evt": "start"
     },
     {
      "course": "CS-104",
      "segment": "MarkComplete",
      "work": "ICP02",
      "milli": 1548932176243,
      "time": "1/31/2019, 10:56:16 AM",
      "evt": "complete"
     },
     {
      "course": "CS-104",
      "segment": "Task",
      "work": "ICP03",
      "milli": 1548932181907,
      "time": "1/31/2019, 10:56:21 AM",
      "evt": "start"
     },
     {
      "course": "CS-104",
      "segment": "MarkComplete",
      "work": "ICP03",
      "milli": 1548932592386,
      "time": "1/31/2019, 11:03:12 AM",
      "evt": "complete"
     },
     {
      "course": "CS-104",
      "segment": "Task",
      "work": "ICP04",
      "milli": 1548932599653,
      "time": "1/31/2019, 11:03:19 AM",
      "evt": "start"
     },
     {
      "course": "CS-104",
      "segment": "MarkComplete",
      "work": "ICP04",
      "milli": 1548932802593,
      "time": "1/31/2019, 11:06:42 AM",
      "evt": "complete"
     }
    ],
    "purple": [],
    "beige": [
     {
      "course": "CS-101",
      "segment": "Task",
      "work": "cloudctl",
      "milli": 1548922317202,
      "time": "1/31/2019, 8:11:57 AM",
      "evt": "start"
     },
     {
      "course": "CS-101",
      "segment": "Task",
      "work": "docker",
      "milli": 1548922379549,
      "time": "1/31/2019, 8:12:59 AM",
      "evt": "start"
     },
     {
      "course": "CS-101",
      "segment": "Task",
      "work": "kubectl",
      "milli": 1548922385612,
      "time": "1/31/2019, 8:13:05 AM",
      "evt": "start"
     },
     {
      "course": "CS-102",
      "segment": "Task",
      "work": "Introduction",
      "milli": 1548922411272,
      "time": "1/31/2019, 8:13:31 AM",
      "evt": "start"
     },
     {
      "course": "CS-101",
      "segment": "Task",
      "work": "cloudctl",
      "milli": 1548922626043,
      "time": "1/31/2019, 8:17:06 AM",
      "evt": "start"
     },
     {
      "course": "CS-101",
      "segment": "MarkComplete",
      "work": "cloudctl",
      "milli": 1548922628866,
      "time": "1/31/2019, 8:17:08 AM",
      "evt": "complete"
     },
     {
      "course": "CS-101",
      "segment": "Task",
      "work": "docker",
      "milli": 1548922631962,
      "time": "1/31/2019, 8:17:11 AM",
      "evt": "start"
     },
     {
      "course": "CS-101",
      "segment": "MarkComplete",
      "work": "docker",
      "milli": 1548922633999,
      "time": "1/31/2019, 8:17:13 AM",
      "evt": "complete"
     },
     {
      "course": "CS-101",
      "segment": "Task",
      "work": "kubectl",
      "milli": 1548922636073,
      "time": "1/31/2019, 8:17:16 AM",
      "evt": "start"
     },
     {
      "course": "CS-101",
      "segment": "MarkComplete",
      "work": "kubectl",
      "milli": 1548922638158,
      "time": "1/31/2019, 8:17:18 AM",
      "evt": "complete"
     },
     {
      "course": "CS-102",
      "segment": "Task",
      "work": "Introduction",
      "milli": 1548922648921,
      "time": "1/31/2019, 8:17:28 AM",
      "evt": "start"
     },
     {
      "course": "CS-102",
      "segment": "Task",
      "work": "T01",
      "milli": 1548924206442,
      "time": "1/31/2019, 8:43:26 AM",
      "evt": "start"
     },
     {
      "course": "CS-102",
      "segment": "Task",
      "work": "Introduction",
      "milli": 1548924210640,
      "time": "1/31/2019, 8:43:30 AM",
      "evt": "start"
     },
     {
      "course": "CS-102",
      "segment": "Task",
      "work": "T01",
      "milli": 1548924213651,
      "time": "1/31/2019, 8:43:33 AM",
      "evt": "start"
     },
     {
      "course": "CS-102",
      "segment": "Task",
      "work": "T01",
      "milli": 1548924250403,
      "time": "1/31/2019, 8:44:10 AM",
      "evt": "start"
     },
     {
      "course": "CS-102",
      "segment": "MarkComplete",
      "work": "T01",
      "milli": 1548924272060,
      "time": "1/31/2019, 8:44:32 AM",
      "evt": "complete"
     },
     {
      "course": "CS-102",
      "segment": "Task",
      "work": "Introduction",
      "milli": 1548924277688,
      "time": "1/31/2019, 8:44:37 AM",
      "evt": "start"
     },
     {
      "course": "CS-102",
      "segment": "Task",
      "work": "T01",
      "milli": 1548924284934,
      "time": "1/31/2019, 8:44:44 AM",
      "evt": "start"
     },
     {
      "course": "CS-102",
      "segment": "Task",
      "work": "T02",
      "milli": 1548924287038,
      "time": "1/31/2019, 8:44:47 AM",
      "evt": "start"
     },
     {
      "course": "CS-102",
      "segment": "Task",
      "work": "T02",
      "milli": 1548924372081,
      "time": "1/31/2019, 8:46:12 AM",
      "evt": "start"
     },
     {
      "course": "CS-102",
      "segment": "MarkComplete",
      "work": "T02",
      "milli": 1548924384950,
      "time": "1/31/2019, 8:46:24 AM",
      "evt": "complete"
     },
     {
      "course": "CS-102",
      "segment": "Task",
      "work": "T03",
      "milli": 1548924388158,
      "time": "1/31/2019, 8:46:28 AM",
      "evt": "start"
     },
     {
      "course": "CS-102",
      "segment": "MarkComplete",
      "work": "T03",
      "milli": 1548924692110,
      "time": "1/31/2019, 8:51:32 AM",
      "evt": "complete"
     },
     {
      "course": "CS-102",
      "segment": "Task",
      "work": "T04",
      "milli": 1548924694911,
      "time": "1/31/2019, 8:51:34 AM",
      "evt": "start"
     },
     {
      "course": "CS-102",
      "segment": "MarkComplete",
      "work": "T04",
      "milli": 1548924789103,
      "time": "1/31/2019, 8:53:09 AM",
      "evt": "complete"
     },
     {
      "course": "CS-102",
      "segment": "Task",
      "work": "T05",
      "milli": 1548924793519,
      "time": "1/31/2019, 8:53:13 AM",
      "evt": "start"
     },
     {
      "course": "CS-102",
      "segment": "MarkComplete",
      "work": "T05",
      "milli": 1548924890684,
      "time": "1/31/2019, 8:54:50 AM",
      "evt": "complete"
     },
     {
      "course": "CS-102",
      "segment": "Task",
      "work": "T06",
      "milli": 1548924893193,
      "time": "1/31/2019, 8:54:53 AM",
      "evt": "start"
     },
     {
      "course": "CS-102",
      "segment": "MarkComplete",
      "work": "T06",
      "milli": 1548924954005,
      "time": "1/31/2019, 8:55:54 AM",
      "evt": "complete"
     },
     {
      "course": "CS-102",
      "segment": "Task",
      "work": "T07",
      "milli": 1548924959862,
      "time": "1/31/2019, 8:55:59 AM",
      "evt": "start"
     },
     {
      "course": "CS-102",
      "segment": "MarkComplete",
      "work": "T07",
      "milli": 1548925183778,
      "time": "1/31/2019, 8:59:43 AM",
      "evt": "complete"
     },
     {
      "course": "CS-102",
      "segment": "Task",
      "work": "T08",
      "milli": 1548925197301,
      "time": "1/31/2019, 8:59:57 AM",
      "evt": "start"
     },
     {
      "course": "CS-102",
      "segment": "MarkComplete",
      "work": "T08",
      "milli": 1548925487050,
      "time": "1/31/2019, 9:04:47 AM",
      "evt": "complete"
     },
     {
      "course": "CS-102",
      "segment": "Task",
      "work": "T09",
      "milli": 1548925489616,
      "time": "1/31/2019, 9:04:49 AM",
      "evt": "start"
     },
     {
      "course": "CS-102",
      "segment": "MarkComplete",
      "work": "T09",
      "milli": 1548925587356,
      "time": "1/31/2019, 9:06:27 AM",
      "evt": "complete"
     },
     {
      "course": "CS-102",
      "segment": "Task",
      "work": "T10",
      "milli": 1548925590376,
      "time": "1/31/2019, 9:06:30 AM",
      "evt": "start"
     },
     {
      "course": "CS-102",
      "segment": "MarkComplete",
      "work": "T10",
      "milli": 1548925757819,
      "time": "1/31/2019, 9:09:17 AM",
      "evt": "complete"
     },
     {
      "course": "CS-102",
      "segment": "Task",
      "work": "T11",
      "milli": 1548925762627,
      "time": "1/31/2019, 9:09:22 AM",
      "evt": "start"
     },
     {
      "course": "CS-102",
      "segment": "MarkComplete",
      "work": "T11",
      "milli": 1548925844460,
      "time": "1/31/2019, 9:10:44 AM",
      "evt": "complete"
     },
     {
      "course": "CS-102",
      "segment": "Task",
      "work": "T12",
      "milli": 1548925846723,
      "time": "1/31/2019, 9:10:46 AM",
      "evt": "start"
     },
     {
      "course": "CS-102",
      "segment": "MarkComplete",
      "work": "T12",
      "milli": 1548925951955,
      "time": "1/31/2019, 9:12:31 AM",
      "evt": "complete"
     },
     {
      "course": "CS-103",
      "segment": "Lab",
      "work": "Create",
      "milli": 1548925968054,
      "time": "1/31/2019, 9:12:48 AM",
      "evt": "start"
     },
     {
      "course": "CS-103",
      "segment": "AutoComplete",
      "work": "Create",
      "milli": 1548928151737,
      "time": "1/31/2019, 9:49:11 AM",
      "evt": "complete"
     },
     {
      "course": "CS-103",
      "segment": "Lab",
      "work": "Syntax",
      "milli": 1548928247722,
      "time": "1/31/2019, 9:50:47 AM",
      "evt": "start"
     },
     {
      "course": "CS-103",
      "segment": "Lab",
      "work": "Create",
      "milli": 1548928252057,
      "time": "1/31/2019, 9:50:52 AM",
      "evt": "start"
     },
     {
      "course": "CS-103",
      "segment": "Lab",
      "work": "Syntax",
      "milli": 1548928257627,
      "time": "1/31/2019, 9:50:57 AM",
      "evt": "start"
     },
     {
      "course": "CS-103",
      "segment": "AutoComplete",
      "work": "Syntax",
      "milli": 1548928774232,
      "time": "1/31/2019, 9:59:34 AM",
      "evt": "complete"
     },
     {
      "course": "CS-103",
      "segment": "Lab",
      "work": "Resources",
      "milli": 1548928949475,
      "time": "1/31/2019, 10:02:29 AM",
      "evt": "start"
     },
     {
      "course": "CS-103",
      "segment": "AutoComplete",
      "work": "Resources",
      "milli": 1548929187418,
      "time": "1/31/2019, 10:06:27 AM",
      "evt": "complete"
     },
     {
      "course": "CS-103",
      "segment": "Lab",
      "work": "Images",
      "milli": 1548929214006,
      "time": "1/31/2019, 10:06:54 AM",
      "evt": "start"
     },
     {
      "course": "CS-103",
      "segment": "AutoComplete",
      "work": "Images",
      "milli": 1548929464898,
      "time": "1/31/2019, 10:11:04 AM",
      "evt": "complete"
     },
     {
      "course": "CS-103",
      "segment": "Lab",
      "work": "Security",
      "milli": 1548929484740,
      "time": "1/31/2019, 10:11:24 AM",
      "evt": "start"
     },
     {
      "course": "CS-103",
      "segment": "Lab",
      "work": "Images",
      "milli": 1548929487735,
      "time": "1/31/2019, 10:11:27 AM",
      "evt": "start"
     },
     {
      "course": "CS-103",
      "segment": "Lab",
      "work": "Security",
      "milli": 1548929492389,
      "time": "1/31/2019, 10:11:32 AM",
      "evt": "start"
     },
     {
      "course": "CS-103",
      "segment": "AutoComplete",
      "work": "Security",
      "milli": 1548929538610,
      "time": "1/31/2019, 10:12:18 AM",
      "evt": "complete"
     },
     {
      "course": "CS-103",
      "segment": "Lab",
      "work": "Networking",
      "milli": 1548929569752,
      "time": "1/31/2019, 10:12:49 AM",
      "evt": "start"
     },
     {
      "course": "CS-103",
      "segment": "Lab",
      "work": "Running",
      "milli": 1548930210066,
      "time": "1/31/2019, 10:23:30 AM",
      "evt": "start"
     },
     {
      "course": "CS-103",
      "segment": "AutoComplete",
      "work": "Running",
      "milli": 1548930448076,
      "time": "1/31/2019, 10:27:28 AM",
      "evt": "complete"
     },
     {
      "course": "CS-103",
      "segment": "Lab",
      "work": "Starting",
      "milli": 1548930475181,
      "time": "1/31/2019, 10:27:55 AM",
      "evt": "start"
     },
     {
      "course": "CS-103",
      "segment": "AutoComplete",
      "work": "Starting",
      "milli": 1548931437531,
      "time": "1/31/2019, 10:43:57 AM",
      "evt": "complete"
     },
     {
      "course": "CS-104",
      "segment": "Task",
      "work": "ICP01",
      "milli": 1548931503853,
      "time": "1/31/2019, 10:45:03 AM",
      "evt": "start"
     },
     {
      "course": "CS-104",
      "segment": "MarkComplete",
      "work": "ICP01",
      "milli": 1548932223789,
      "time": "1/31/2019, 10:57:03 AM",
      "evt": "complete"
     },
     {
      "course": "CS-104",
      "segment": "Task",
      "work": "ICP02",
      "milli": 1548932579564,
      "time": "1/31/2019, 11:02:59 AM",
      "evt": "start"
     },
     {
      "course": "CS-104",
      "segment": "MarkComplete",
      "work": "ICP02",
      "milli": 1548932616735,
      "time": "1/31/2019, 11:03:36 AM",
      "evt": "complete"
     },
     {
      "course": "CS-104",
      "segment": "Task",
      "work": "ICP03",
      "milli": 1548932621546,
      "time": "1/31/2019, 11:03:41 AM",
      "evt": "start"
     },
     {
      "course": "CS-104",
      "segment": "MarkComplete",
      "work": "ICP03",
      "milli": 1548932698668,
      "time": "1/31/2019, 11:04:58 AM",
      "evt": "complete"
     },
     {
      "course": "CS-104",
      "segment": "Task",
      "work": "ICP04",
      "milli": 1548932701019,
      "time": "1/31/2019, 11:05:01 AM",
      "evt": "start"
     },
     {
      "course": "CS-104",
      "segment": "MarkComplete",
      "work": "ICP04",
      "milli": 1548932729554,
      "time": "1/31/2019, 11:05:29 AM",
      "evt": "complete"
     }
    ],
    "gray": [
     {
      "course": "CS-101",
      "segment": "Task",
      "work": "cloudctl",
      "milli": 1548922705214,
      "time": "1/31/2019, 8:18:25 AM",
      "evt": "start"
     },
     {
      "course": "CS-101",
      "segment": "MarkComplete",
      "work": "cloudctl",
      "milli": 1548922775267,
      "time": "1/31/2019, 8:19:35 AM",
      "evt": "complete"
     },
     {
      "course": "CS-101",
      "segment": "Task",
      "work": "docker",
      "milli": 1548922780433,
      "time": "1/31/2019, 8:19:40 AM",
      "evt": "start"
     },
     {
      "course": "CS-101",
      "segment": "MarkComplete",
      "work": "docker",
      "milli": 1548922784714,
      "time": "1/31/2019, 8:19:44 AM",
      "evt": "complete"
     },
     {
      "course": "CS-101",
      "segment": "Task",
      "work": "kubectl",
      "milli": 1548922787658,
      "time": "1/31/2019, 8:19:47 AM",
      "evt": "start"
     },
     {
      "course": "CS-101",
      "segment": "MarkComplete",
      "work": "kubectl",
      "milli": 1548922837524,
      "time": "1/31/2019, 8:20:37 AM",
      "evt": "complete"
     },
     {
      "course": "CS-102",
      "segment": "Task",
      "work": "Introduction",
      "milli": 1548924357551,
      "time": "1/31/2019, 8:45:57 AM",
      "evt": "start"
     },
     {
      "course": "CS-102",
      "segment": "Task",
      "work": "T01",
      "milli": 1548924371370,
      "time": "1/31/2019, 8:46:11 AM",
      "evt": "start"
     },
     {
      "course": "CS-102",
      "segment": "MarkComplete",
      "work": "T01",
      "milli": 1548924636724,
      "time": "1/31/2019, 8:50:36 AM",
      "evt": "complete"
     },
     {
      "course": "CS-102",
      "segment": "Task",
      "work": "T02",
      "milli": 1548924644762,
      "time": "1/31/2019, 8:50:44 AM",
      "evt": "start"
     },
     {
      "course": "CS-102",
      "segment": "Task",
      "work": "T02",
      "milli": 1548924647542,
      "time": "1/31/2019, 8:50:47 AM",
      "evt": "start"
     },
     {
      "course": "CS-102",
      "segment": "MarkComplete",
      "work": "T02",
      "milli": 1548924755606,
      "time": "1/31/2019, 8:52:35 AM",
      "evt": "complete"
     },
     {
      "course": "CS-102",
      "segment": "Task",
      "work": "T03",
      "milli": 1548924758428,
      "time": "1/31/2019, 8:52:38 AM",
      "evt": "start"
     },
     {
      "course": "CS-102",
      "segment": "MarkComplete",
      "work": "T03",
      "milli": 1548924789150,
      "time": "1/31/2019, 8:53:09 AM",
      "evt": "complete"
     },
     {
      "course": "CS-102",
      "segment": "Task",
      "work": "T04",
      "milli": 1548924791486,
      "time": "1/31/2019, 8:53:11 AM",
      "evt": "start"
     },
     {
      "course": "CS-102",
      "segment": "MarkComplete",
      "work": "T04",
      "milli": 1548924817703,
      "time": "1/31/2019, 8:53:37 AM",
      "evt": "complete"
     },
     {
      "course": "CS-102",
      "segment": "Task",
      "work": "T05",
      "milli": 1548924819999,
      "time": "1/31/2019, 8:53:39 AM",
      "evt": "start"
     },
     {
      "course": "CS-102",
      "segment": "MarkComplete",
      "work": "T05",
      "milli": 1548925014790,
      "time": "1/31/2019, 8:56:54 AM",
      "evt": "complete"
     },
     {
      "course": "CS-102",
      "segment": "Task",
      "work": "T06",
      "milli": 1548925020099,
      "time": "1/31/2019, 8:57:00 AM",
      "evt": "start"
     },
     {
      "course": "CS-102",
      "segment": "MarkComplete",
      "work": "T06",
      "milli": 1548925060203,
      "time": "1/31/2019, 8:57:40 AM",
      "evt": "complete"
     },
     {
      "course": "CS-102",
      "segment": "Task",
      "work": "T07",
      "milli": 1548925062465,
      "time": "1/31/2019, 8:57:42 AM",
      "evt": "start"
     },
     {
      "course": "CS-102",
      "segment": "MarkComplete",
      "work": "T07",
      "milli": 1548925182784,
      "time": "1/31/2019, 8:59:42 AM",
      "evt": "complete"
     },
     {
      "course": "CS-102",
      "segment": "Task",
      "work": "T08",
      "milli": 1548925198820,
      "time": "1/31/2019, 8:59:58 AM",
      "evt": "start"
     },
     {
      "course": "CS-102",
      "segment": "Task",
      "work": "T07",
      "milli": 1548925371868,
      "time": "1/31/2019, 9:02:51 AM",
      "evt": "start"
     },
     {
      "course": "CS-102",
      "segment": "Task",
      "work": "T08",
      "milli": 1548925377751,
      "time": "1/31/2019, 9:02:57 AM",
      "evt": "start"
     },
     {
      "course": "CS-102",
      "segment": "MarkComplete",
      "work": "T08",
      "milli": 1548925813795,
      "time": "1/31/2019, 9:10:13 AM",
      "evt": "complete"
     },
     {
      "course": "CS-102",
      "segment": "Task",
      "work": "T09",
      "milli": 1548925816113,
      "time": "1/31/2019, 9:10:16 AM",
      "evt": "start"
     },
     {
      "course": "CS-102",
      "segment": "MarkComplete",
      "work": "T09",
      "milli": 1548925911296,
      "time": "1/31/2019, 9:11:51 AM",
      "evt": "complete"
     },
     {
      "course": "CS-102",
      "segment": "Task",
      "work": "T10",
      "milli": 1548925913760,
      "time": "1/31/2019, 9:11:53 AM",
      "evt": "start"
     },
     {
      "course": "CS-102",
      "segment": "MarkComplete",
      "work": "T10",
      "milli": 1548926044932,
      "time": "1/31/2019, 9:14:04 AM",
      "evt": "complete"
     },
     {
      "course": "CS-102",
      "segment": "Task",
      "work": "T11",
      "milli": 1548926047893,
      "time": "1/31/2019, 9:14:07 AM",
      "evt": "start"
     },
     {
      "course": "CS-102",
      "segment": "MarkComplete",
      "work": "T11",
      "milli": 1548926108752,
      "time": "1/31/2019, 9:15:08 AM",
      "evt": "complete"
     },
     {
      "course": "CS-102",
      "segment": "Task",
      "work": "T12",
      "milli": 1548926110905,
      "time": "1/31/2019, 9:15:10 AM",
      "evt": "start"
     },
     {
      "course": "CS-102",
      "segment": "MarkComplete",
      "work": "T12",
      "milli": 1548926133065,
      "time": "1/31/2019, 9:15:33 AM",
      "evt": "complete"
     },
     {
      "course": "CS-103",
      "segment": "Lab",
      "work": "Create",
      "milli": 1548926843964,
      "time": "1/31/2019, 9:27:23 AM",
      "evt": "start"
     },
     {
      "course": "CS-103",
      "segment": "Lab",
      "work": "Create",
      "milli": 1548927227502,
      "time": "1/31/2019, 9:33:47 AM",
      "evt": "start"
     },
     {
      "course": "CS-103",
      "segment": "Lab",
      "work": "Create",
      "milli": 1548927228762,
      "time": "1/31/2019, 9:33:48 AM",
      "evt": "start"
     },
     {
      "course": "CS-103",
      "segment": "AutoComplete",
      "work": "Create",
      "milli": 1548927754422,
      "time": "1/31/2019, 9:42:34 AM",
      "evt": "complete"
     },
     {
      "course": "CS-103",
      "segment": "Lab",
      "work": "Syntax",
      "milli": 1548927818796,
      "time": "1/31/2019, 9:43:38 AM",
      "evt": "start"
     },
     {
      "course": "CS-103",
      "segment": "Lab",
      "work": "Create",
      "milli": 1548927841469,
      "time": "1/31/2019, 9:44:01 AM",
      "evt": "start"
     },
     {
      "course": "CS-103",
      "segment": "Lab",
      "work": "Syntax",
      "milli": 1548927847198,
      "time": "1/31/2019, 9:44:07 AM",
      "evt": "start"
     },
     {
      "course": "CS-103",
      "segment": "AutoComplete",
      "work": "Syntax",
      "milli": 1548928072819,
      "time": "1/31/2019, 9:47:52 AM",
      "evt": "complete"
     },
     {
      "course": "CS-103",
      "segment": "Lab",
      "work": "Resources",
      "milli": 1548928174489,
      "time": "1/31/2019, 9:49:34 AM",
      "evt": "start"
     },
     {
      "course": "CS-103",
      "segment": "AutoComplete",
      "work": "Resources",
      "milli": 1548928922550,
      "time": "1/31/2019, 10:02:02 AM",
      "evt": "complete"
     },
     {
      "course": "CS-103",
      "segment": "Lab",
      "work": "Images",
      "milli": 1548928987934,
      "time": "1/31/2019, 10:03:07 AM",
      "evt": "start"
     },
     {
      "course": "CS-103",
      "segment": "AutoComplete",
      "work": "Images",
      "milli": 1548929270697,
      "time": "1/31/2019, 10:07:50 AM",
      "evt": "complete"
     },
     {
      "course": "CS-103",
      "segment": "Lab",
      "work": "Security",
      "milli": 1548929283672,
      "time": "1/31/2019, 10:08:03 AM",
      "evt": "start"
     },
     {
      "course": "CS-103",
      "segment": "AutoComplete",
      "work": "Security",
      "milli": 1548929725394,
      "time": "1/31/2019, 10:15:25 AM",
      "evt": "complete"
     },
     {
      "course": "CS-103",
      "segment": "Lab",
      "work": "Security",
      "milli": 1548929896213,
      "time": "1/31/2019, 10:18:16 AM",
      "evt": "start"
     },
     {
      "course": "CS-103",
      "segment": "Lab",
      "work": "Networking",
      "milli": 1548930092256,
      "time": "1/31/2019, 10:21:32 AM",
      "evt": "start"
     },
     {
      "course": "CS-103",
      "segment": "AutoComplete",
      "work": "Networking",
      "milli": 1548930527546,
      "time": "1/31/2019, 10:28:47 AM",
      "evt": "complete"
     },
     {
      "course": "CS-103",
      "segment": "Lab",
      "work": "Running",
      "milli": 1548930571448,
      "time": "1/31/2019, 10:29:31 AM",
      "evt": "start"
     },
     {
      "course": "CS-103",
      "segment": "AutoComplete",
      "work": "Running",
      "milli": 1548930687005,
      "time": "1/31/2019, 10:31:27 AM",
      "evt": "complete"
     },
     {
      "course": "CS-103",
      "segment": "Lab",
      "work": "Starting",
      "milli": 1548930734215,
      "time": "1/31/2019, 10:32:14 AM",
      "evt": "start"
     },
     {
      "course": "CS-103",
      "segment": "AutoComplete",
      "work": "Starting",
      "milli": 1548931167382,
      "time": "1/31/2019, 10:39:27 AM",
      "evt": "complete"
     },
     {
      "course": "CS-104",
      "segment": "Task",
      "work": "ICP01",
      "milli": 1548931829455,
      "time": "1/31/2019, 10:50:29 AM",
      "evt": "start"
     },
     {
      "course": "CS-104",
      "segment": "MarkComplete",
      "work": "ICP01",
      "milli": 1548932204850,
      "time": "1/31/2019, 10:56:44 AM",
      "evt": "complete"
     },
     {
      "course": "CS-104",
      "segment": "Task",
      "work": "ICP02",
      "milli": 1548932223268,
      "time": "1/31/2019, 10:57:03 AM",
      "evt": "start"
     },
     {
      "course": "CS-104",
      "segment": "MarkComplete",
      "work": "ICP02",
      "milli": 1548932516412,
      "time": "1/31/2019, 11:01:56 AM",
      "evt": "complete"
     },
     {
      "course": "CS-104",
      "segment": "Task",
      "work": "ICP03",
      "milli": 1548932519512,
      "time": "1/31/2019, 11:01:59 AM",
      "evt": "start"
     },
     {
      "course": "CS-104",
      "segment": "MarkComplete",
      "work": "ICP03",
      "milli": 1548932793875,
      "time": "1/31/2019, 11:06:33 AM",
      "evt": "complete"
     },
     {
      "course": "CS-104",
      "segment": "Task",
      "work": "ICP04",
      "milli": 1548932797261,
      "time": "1/31/2019, 11:06:37 AM",
      "evt": "start"
     },
     {
      "course": "CS-104",
      "segment": "MarkComplete",
      "work": "ICP04",
      "milli": 1548932950103,
      "time": "1/31/2019, 11:09:10 AM",
      "evt": "complete"
     }
    ],
    "green": [
     {
      "course": "CS-101",
      "segment": "Task",
      "work": "cloudctl",
      "milli": 1548922559743,
      "time": "1/31/2019, 8:15:59 AM",
      "evt": "start"
     },
     {
      "course": "CS-101",
      "segment": "MarkComplete",
      "work": "cloudctl",
      "milli": 1548922564341,
      "time": "1/31/2019, 8:16:04 AM",
      "evt": "complete"
     },
     {
      "course": "CS-101",
      "segment": "Task",
      "work": "docker",
      "milli": 1548922566553,
      "time": "1/31/2019, 8:16:06 AM",
      "evt": "start"
     },
     {
      "course": "CS-101",
      "segment": "Task",
      "work": "kubectl",
      "milli": 1548922570544,
      "time": "1/31/2019, 8:16:10 AM",
      "evt": "start"
     },
     {
      "course": "CS-101",
      "segment": "MarkComplete",
      "work": "kubectl",
      "milli": 1548922628343,
      "time": "1/31/2019, 8:17:08 AM",
      "evt": "complete"
     },
     {
      "course": "CS-101",
      "segment": "Task",
      "work": "docker",
      "milli": 1548922631226,
      "time": "1/31/2019, 8:17:11 AM",
      "evt": "start"
     },
     {
      "course": "CS-101",
      "segment": "MarkComplete",
      "work": "docker",
      "milli": 1548922634409,
      "time": "1/31/2019, 8:17:14 AM",
      "evt": "complete"
     },
     {
      "course": "CS-101",
      "segment": "Task",
      "work": "docker",
      "milli": 1548922687483,
      "time": "1/31/2019, 8:18:07 AM",
      "evt": "start"
     },
     {
      "course": "CS-101",
      "segment": "Task",
      "work": "docker",
      "milli": 1548922688474,
      "time": "1/31/2019, 8:18:08 AM",
      "evt": "start"
     },
     {
      "course": "CS-101",
      "segment": "Task",
      "work": "cloudctl",
      "milli": 1548923640997,
      "time": "1/31/2019, 8:34:00 AM",
      "evt": "start"
     },
     {
      "course": "CS-102",
      "segment": "Task",
      "work": "Introduction",
      "milli": 1548924502646,
      "time": "1/31/2019, 8:48:22 AM",
      "evt": "start"
     },
     {
      "course": "CS-102",
      "segment": "Task",
      "work": "T01",
      "milli": 1548924550946,
      "time": "1/31/2019, 8:49:10 AM",
      "evt": "start"
     },
     {
      "course": "CS-102",
      "segment": "Task",
      "work": "T02",
      "milli": 1548924778581,
      "time": "1/31/2019, 8:52:58 AM",
      "evt": "start"
     },
     {
      "course": "CS-102",
      "segment": "Task",
      "work": "T01",
      "milli": 1548924831199,
      "time": "1/31/2019, 8:53:51 AM",
      "evt": "start"
     },
     {
      "course": "CS-102",
      "segment": "MarkComplete",
      "work": "T01",
      "milli": 1548924842826,
      "time": "1/31/2019, 8:54:02 AM",
      "evt": "complete"
     },
     {
      "course": "CS-102",
      "segment": "Task",
      "work": "T02",
      "milli": 1548924849874,
      "time": "1/31/2019, 8:54:09 AM",
      "evt": "start"
     },
     {
      "course": "CS-102",
      "segment": "MarkComplete",
      "work": "T02",
      "milli": 1548925107702,
      "time": "1/31/2019, 8:58:27 AM",
      "evt": "complete"
     },
     {
      "course": "CS-102",
      "segment": "Task",
      "work": "T03",
      "milli": 1548925121360,
      "time": "1/31/2019, 8:58:41 AM",
      "evt": "start"
     },
     {
      "course": "CS-102",
      "segment": "MarkComplete",
      "work": "T03",
      "milli": 1548925225059,
      "time": "1/31/2019, 9:00:25 AM",
      "evt": "complete"
     },
     {
      "course": "CS-102",
      "segment": "Task",
      "work": "T04",
      "milli": 1548925228978,
      "time": "1/31/2019, 9:00:28 AM",
      "evt": "start"
     },
     {
      "course": "CS-102",
      "segment": "MarkComplete",
      "work": "T04",
      "milli": 1548925289632,
      "time": "1/31/2019, 9:01:29 AM",
      "evt": "complete"
     },
     {
      "course": "CS-102",
      "segment": "Task",
      "work": "T05",
      "milli": 1548925293161,
      "time": "1/31/2019, 9:01:33 AM",
      "evt": "start"
     },
     {
      "course": "CS-102",
      "segment": "MarkComplete",
      "work": "T05",
      "milli": 1548925493994,
      "time": "1/31/2019, 9:04:53 AM",
      "evt": "complete"
     },
     {
      "course": "CS-102",
      "segment": "Task",
      "work": "T06",
      "milli": 1548925515096,
      "time": "1/31/2019, 9:05:15 AM",
      "evt": "start"
     },
     {
      "course": "CS-102",
      "segment": "Task",
      "work": "T06",
      "milli": 1548925568292,
      "time": "1/31/2019, 9:06:08 AM",
      "evt": "start"
     },
     {
      "course": "CS-102",
      "segment": "MarkComplete",
      "work": "T06",
      "milli": 1548925571505,
      "time": "1/31/2019, 9:06:11 AM",
      "evt": "complete"
     },
     {
      "course": "CS-102",
      "segment": "Task",
      "work": "T07",
      "milli": 1548925579629,
      "time": "1/31/2019, 9:06:19 AM",
      "evt": "start"
     },
     {
      "course": "CS-102",
      "segment": "MarkComplete",
      "work": "T07",
      "milli": 1548925617240,
      "time": "1/31/2019, 9:06:57 AM",
      "evt": "complete"
     },
     {
      "course": "CS-102",
      "segment": "Task",
      "work": "T08",
      "milli": 1548925620805,
      "time": "1/31/2019, 9:07:00 AM",
      "evt": "start"
     },
     {
      "course": "CS-102",
      "segment": "Task",
      "work": "T08",
      "milli": 1548925635131,
      "time": "1/31/2019, 9:07:15 AM",
      "evt": "start"
     },
     {
      "course": "CS-102",
      "segment": "MarkComplete",
      "work": "T08",
      "milli": 1548925781875,
      "time": "1/31/2019, 9:09:41 AM",
      "evt": "complete"
     },
     {
      "course": "CS-102",
      "segment": "Task",
      "work": "T08",
      "milli": 1548925807026,
      "time": "1/31/2019, 9:10:07 AM",
      "evt": "start"
     },
     {
      "course": "CS-102",
      "segment": "Task",
      "work": "T08",
      "milli": 1548925807419,
      "time": "1/31/2019, 9:10:07 AM",
      "evt": "start"
     },
     {
      "course": "CS-102",
      "segment": "Task",
      "work": "T08",
      "milli": 1548925807677,
      "time": "1/31/2019, 9:10:07 AM",
      "evt": "start"
     },
     {
      "course": "CS-102",
      "segment": "Task",
      "work": "T09",
      "milli": 1548925837235,
      "time": "1/31/2019, 9:10:37 AM",
      "evt": "start"
     },
     {
      "course": "CS-102",
      "segment": "MarkComplete",
      "work": "T09",
      "milli": 1548925921789,
      "time": "1/31/2019, 9:12:01 AM",
      "evt": "complete"
     },
     {
      "course": "CS-102",
      "segment": "Task",
      "work": "T10",
      "milli": 1548925924488,
      "time": "1/31/2019, 9:12:04 AM",
      "evt": "start"
     },
     {
      "course": "CS-102",
      "segment": "MarkComplete",
      "work": "T10",
      "milli": 1548925972775,
      "time": "1/31/2019, 9:12:52 AM",
      "evt": "complete"
     },
     {
      "course": "CS-102",
      "segment": "Task",
      "work": "T11",
      "milli": 1548925978448,
      "time": "1/31/2019, 9:12:58 AM",
      "evt": "start"
     },
     {
      "course": "CS-102",
      "segment": "MarkComplete",
      "work": "T11",
      "milli": 1548926025741,
      "time": "1/31/2019, 9:13:45 AM",
      "evt": "complete"
     },
     {
      "course": "CS-102",
      "segment": "Task",
      "work": "T12",
      "milli": 1548926028332,
      "time": "1/31/2019, 9:13:48 AM",
      "evt": "start"
     },
     {
      "course": "CS-102",
      "segment": "MarkComplete",
      "work": "T12",
      "milli": 1548926060199,
      "time": "1/31/2019, 9:14:20 AM",
      "evt": "complete"
     },
     {
      "course": "CS-103",
      "segment": "Lab",
      "work": "Create",
      "milli": 1548926858830,
      "time": "1/31/2019, 9:27:38 AM",
      "evt": "start"
     },
     {
      "course": "CS-103",
      "segment": "Lab",
      "work": "Create",
      "milli": 1548927207508,
      "time": "1/31/2019, 9:33:27 AM",
      "evt": "start"
     },
     {
      "course": "CS-103",
      "segment": "AutoComplete",
      "work": "Create",
      "milli": 1548927831263,
      "time": "1/31/2019, 9:43:51 AM",
      "evt": "complete"
     },
     {
      "course": "CS-103",
      "segment": "Lab",
      "work": "Syntax",
      "milli": 1548927869260,
      "time": "1/31/2019, 9:44:29 AM",
      "evt": "start"
     },
     {
      "course": "CS-103",
      "segment": "AutoComplete",
      "work": "Syntax",
      "milli": 1548928376880,
      "time": "1/31/2019, 9:52:56 AM",
      "evt": "complete"
     },
     {
      "course": "CS-103",
      "segment": "Lab",
      "work": "Resources",
      "milli": 1548928418838,
      "time": "1/31/2019, 9:53:38 AM",
      "evt": "start"
     },
     {
      "course": "CS-103",
      "segment": "AutoComplete",
      "work": "Resources",
      "milli": 1548928888763,
      "time": "1/31/2019, 10:01:28 AM",
      "evt": "complete"
     },
     {
      "course": "CS-103",
      "segment": "Lab",
      "work": "Images",
      "milli": 1548928960531,
      "time": "1/31/2019, 10:02:40 AM",
      "evt": "start"
     },
     {
      "course": "CS-103",
      "segment": "Lab",
      "work": "Images",
      "milli": 1548929401902,
      "time": "1/31/2019, 10:10:01 AM",
      "evt": "start"
     },
     {
      "course": "CS-103",
      "segment": "Lab",
      "work": "Images",
      "milli": 1548929402725,
      "time": "1/31/2019, 10:10:02 AM",
      "evt": "start"
     },
     {
      "course": "CS-103",
      "segment": "AutoComplete",
      "work": "Images",
      "milli": 1548929890064,
      "time": "1/31/2019, 10:18:10 AM",
      "evt": "complete"
     },
     {
      "course": "CS-103",
      "segment": "Lab",
      "work": "Security",
      "milli": 1548929938967,
      "time": "1/31/2019, 10:18:58 AM",
      "evt": "start"
     },
     {
      "course": "CS-103",
      "segment": "Lab",
      "work": "Security",
      "milli": 1548930271252,
      "time": "1/31/2019, 10:24:31 AM",
      "evt": "start"
     },
     {
      "course": "CS-103",
      "segment": "AutoComplete",
      "work": "Security",
      "milli": 1548930980687,
      "time": "1/31/2019, 10:36:20 AM",
      "evt": "complete"
     },
     {
      "course": "CS-103",
      "segment": "Lab",
      "work": "Networking",
      "milli": 1548931018930,
      "time": "1/31/2019, 10:36:58 AM",
      "evt": "start"
     },
     {
      "course": "CS-103",
      "segment": "Lab",
      "work": "Running",
      "milli": 1548931872867,
      "time": "1/31/2019, 10:51:12 AM",
      "evt": "start"
     },
     {
      "course": "CS-103",
      "segment": "AutoComplete",
      "work": "Running",
      "milli": 1548932209017,
      "time": "1/31/2019, 10:56:49 AM",
      "evt": "complete"
     },
     {
      "course": "CS-103",
      "segment": "Lab",
      "work": "Starting",
      "milli": 1548932321769,
      "time": "1/31/2019, 10:58:41 AM",
      "evt": "start"
     },
     {
      "course": "CS-103",
      "segment": "AutoComplete",
      "work": "Starting",
      "milli": 1548932731116,
      "time": "1/31/2019, 11:05:31 AM",
      "evt": "complete"
     },
     {
      "course": "CS-104",
      "segment": "Task",
      "work": "ICP01",
      "milli": 1548932786824,
      "time": "1/31/2019, 11:06:26 AM",
      "evt": "start"
     },
     {
      "course": "CS-104",
      "segment": "Task",
      "work": "ICP01",
      "milli": 1548932857621,
      "time": "1/31/2019, 11:07:37 AM",
      "evt": "start"
     },
     {
      "course": "CS-104",
      "segment": "Task",
      "work": "ICP01",
      "milli": 1548932895945,
      "time": "1/31/2019, 11:08:15 AM",
      "evt": "start"
     }
    ],
    "darkgray": [
     {
      "course": "CS-101",
      "segment": "Task",
      "work": "cloudctl",
      "milli": 1548922313234,
      "time": "1/31/2019, 8:11:53 AM",
      "evt": "start"
     },
     {
      "course": "CS-102",
      "segment": "Task",
      "work": "Introduction",
      "milli": 1548922356275,
      "time": "1/31/2019, 8:12:36 AM",
      "evt": "start"
     },
     {
      "course": "CS-101",
      "segment": "Task",
      "work": "docker",
      "milli": 1548922443455,
      "time": "1/31/2019, 8:14:03 AM",
      "evt": "start"
     },
     {
      "course": "CS-101",
      "segment": "Task",
      "work": "cloudctl",
      "milli": 1548922468674,
      "time": "1/31/2019, 8:14:28 AM",
      "evt": "start"
     },
     {
      "course": "CS-101",
      "segment": "Task",
      "work": "cloudctl",
      "milli": 1548922477933,
      "time": "1/31/2019, 8:14:37 AM",
      "evt": "start"
     },
     {
      "course": "CS-101",
      "segment": "Task",
      "work": "docker",
      "milli": 1548922544642,
      "time": "1/31/2019, 8:15:44 AM",
      "evt": "start"
     },
     {
      "course": "CS-101",
      "segment": "Task",
      "work": "kubectl",
      "milli": 1548922572043,
      "time": "1/31/2019, 8:16:12 AM",
      "evt": "start"
     },
     {
      "course": "CS-101",
      "segment": "Task",
      "work": "kubectl",
      "milli": 1548922614242,
      "time": "1/31/2019, 8:16:54 AM",
      "evt": "start"
     },
     {
      "course": "CS-101",
      "segment": "MarkComplete",
      "work": "kubectl",
      "milli": 1548922618787,
      "time": "1/31/2019, 8:16:58 AM",
      "evt": "complete"
     },
     {
      "course": "CS-101",
      "segment": "Task",
      "work": "cloudctl",
      "milli": 1548922621237,
      "time": "1/31/2019, 8:17:01 AM",
      "evt": "start"
     },
     {
      "course": "CS-101",
      "segment": "Task",
      "work": "docker",
      "milli": 1548922622578,
      "time": "1/31/2019, 8:17:02 AM",
      "evt": "start"
     },
     {
      "course": "CS-101",
      "segment": "MarkComplete",
      "work": "cloudctl",
      "milli": 1548922623734,
      "time": "1/31/2019, 8:17:03 AM",
      "evt": "complete"
     },
     {
      "course": "CS-101",
      "segment": "MarkComplete",
      "work": "docker",
      "milli": 1548922625987,
      "time": "1/31/2019, 8:17:05 AM",
      "evt": "complete"
     },
     {
      "course": "CS-101",
      "segment": "Task",
      "work": "kubectl",
      "milli": 1548922626591,
      "time": "1/31/2019, 8:17:06 AM",
      "evt": "start"
     },
     {
      "course": "CS-101",
      "segment": "Task",
      "work": "cloudctl",
      "milli": 1548922628298,
      "time": "1/31/2019, 8:17:08 AM",
      "evt": "start"
     },
     {
      "course": "CS-101",
      "segment": "Task",
      "work": "cloudctl",
      "milli": 1548922638199,
      "time": "1/31/2019, 8:17:18 AM",
      "evt": "start"
     },
     {
      "course": "CS-101",
      "segment": "Task",
      "work": "docker",
      "milli": 1548922649822,
      "time": "1/31/2019, 8:17:29 AM",
      "evt": "start"
     },
     {
      "course": "CS-101",
      "segment": "Task",
      "work": "kubectl",
      "milli": 1548922658670,
      "time": "1/31/2019, 8:17:38 AM",
      "evt": "start"
     },
     {
      "course": "CS-101",
      "segment": "Task",
      "work": "docker",
      "milli": 1548922665826,
      "time": "1/31/2019, 8:17:45 AM",
      "evt": "start"
     },
     {
      "course": "CS-101",
      "segment": "Task",
      "work": "docker",
      "milli": 1548922675812,
      "time": "1/31/2019, 8:17:55 AM",
      "evt": "start"
     },
     {
      "course": "CS-102",
      "segment": "Task",
      "work": "Introduction",
      "milli": 1548922744884,
      "time": "1/31/2019, 8:19:04 AM",
      "evt": "start"
     },
     {
      "course": "CS-101",
      "segment": "Task",
      "work": "docker",
      "milli": 1548922801318,
      "time": "1/31/2019, 8:20:01 AM",
      "evt": "start"
     },
     {
      "course": "CS-101",
      "segment": "Task",
      "work": "cloudctl",
      "milli": 1548922823628,
      "time": "1/31/2019, 8:20:23 AM",
      "evt": "start"
     },
     {
      "course": "CS-101",
      "segment": "Task",
      "work": "docker",
      "milli": 1548922841087,
      "time": "1/31/2019, 8:20:41 AM",
      "evt": "start"
     },
     {
      "course": "CS-101",
      "segment": "Task",
      "work": "kubectl",
      "milli": 1548922846335,
      "time": "1/31/2019, 8:20:46 AM",
      "evt": "start"
     },
     {
      "course": "CS-102",
      "segment": "Task",
      "work": "Introduction",
      "milli": 1548922859659,
      "time": "1/31/2019, 8:20:59 AM",
      "evt": "start"
     },
     {
      "course": "CS-102",
      "segment": "Task",
      "work": "Introduction",
      "milli": 1548924288859,
      "time": "1/31/2019, 8:44:48 AM",
      "evt": "start"
     },
     {
      "course": "CS-102",
      "segment": "Task",
      "work": "T01",
      "milli": 1548924293698,
      "time": "1/31/2019, 8:44:53 AM",
      "evt": "start"
     },
     {
      "course": "CS-102",
      "segment": "Task",
      "work": "Introduction",
      "milli": 1548924307996,
      "time": "1/31/2019, 8:45:07 AM",
      "evt": "start"
     },
     {
      "course": "CS-102",
      "segment": "Task",
      "work": "T01",
      "milli": 1548924327632,
      "time": "1/31/2019, 8:45:27 AM",
      "evt": "start"
     },
     {
      "course": "CS-102",
      "segment": "Task",
      "work": "T01",
      "milli": 1548924390404,
      "time": "1/31/2019, 8:46:30 AM",
      "evt": "start"
     },
     {
      "course": "CS-102",
      "segment": "Task",
      "work": "T01",
      "milli": 1548924478185,
      "time": "1/31/2019, 8:47:58 AM",
      "evt": "start"
     },
     {
      "course": "CS-102",
      "segment": "Task",
      "work": "T01",
      "milli": 1548924479142,
      "time": "1/31/2019, 8:47:59 AM",
      "evt": "start"
     },
     {
      "course": "CS-102",
      "segment": "MarkComplete",
      "work": "T01",
      "milli": 1548924482575,
      "time": "1/31/2019, 8:48:02 AM",
      "evt": "complete"
     },
     {
      "course": "CS-102",
      "segment": "Task",
      "work": "T02",
      "milli": 1548924489438,
      "time": "1/31/2019, 8:48:09 AM",
      "evt": "start"
     },
     {
      "course": "CS-102",
      "segment": "Task",
      "work": "T02",
      "milli": 1548924542369,
      "time": "1/31/2019, 8:49:02 AM",
      "evt": "start"
     },
     {
      "course": "CS-102",
      "segment": "Task",
      "work": "T02",
      "milli": 1548924552946,
      "time": "1/31/2019, 8:49:12 AM",
      "evt": "start"
     },
     {
      "course": "CS-102",
      "segment": "Task",
      "work": "T02",
      "milli": 1548924553835,
      "time": "1/31/2019, 8:49:13 AM",
      "evt": "start"
     },
     {
      "course": "CS-102",
      "segment": "MarkComplete",
      "work": "T02",
      "milli": 1548924674600,
      "time": "1/31/2019, 8:51:14 AM",
      "evt": "complete"
     },
     {
      "course": "CS-102",
      "segment": "Task",
      "work": "T03",
      "milli": 1548924678672,
      "time": "1/31/2019, 8:51:18 AM",
      "evt": "start"
     },
     {
      "course": "CS-102",
      "segment": "MarkComplete",
      "work": "T03",
      "milli": 1548924790772,
      "time": "1/31/2019, 8:53:10 AM",
      "evt": "complete"
     },
     {
      "course": "CS-102",
      "segment": "Task",
      "work": "T04",
      "milli": 1548924793571,
      "time": "1/31/2019, 8:53:13 AM",
      "evt": "start"
     },
     {
      "course": "CS-102",
      "segment": "Task",
      "work": "T03",
      "milli": 1548924851750,
      "time": "1/31/2019, 8:54:11 AM",
      "evt": "start"
     },
     {
      "course": "CS-102",
      "segment": "Task",
      "work": "T03",
      "milli": 1548924854297,
      "time": "1/31/2019, 8:54:14 AM",
      "evt": "start"
     },
     {
      "course": "CS-102",
      "segment": "Task",
      "work": "T04",
      "milli": 1548924860940,
      "time": "1/31/2019, 8:54:20 AM",
      "evt": "start"
     },
     {
      "course": "CS-102",
      "segment": "MarkComplete",
      "work": "T04",
      "milli": 1548924873736,
      "time": "1/31/2019, 8:54:33 AM",
      "evt": "complete"
     },
     {
      "course": "CS-102",
      "segment": "Task",
      "work": "T05",
      "milli": 1548924879859,
      "time": "1/31/2019, 8:54:39 AM",
      "evt": "start"
     },
     {
      "course": "CS-102",
      "segment": "Task",
      "work": "T03",
      "milli": 1548925018210,
      "time": "1/31/2019, 8:56:58 AM",
      "evt": "start"
     },
     {
      "course": "CS-102",
      "segment": "MarkComplete",
      "work": "T05",
      "milli": 1548925018707,
      "time": "1/31/2019, 8:56:58 AM",
      "evt": "complete"
     },
     {
      "course": "CS-102",
      "segment": "Task",
      "work": "T06",
      "milli": 1548925021605,
      "time": "1/31/2019, 8:57:01 AM",
      "evt": "start"
     },
     {
      "course": "CS-102",
      "segment": "MarkComplete",
      "work": "T06",
      "milli": 1548925075778,
      "time": "1/31/2019, 8:57:55 AM",
      "evt": "complete"
     },
     {
      "course": "CS-102",
      "segment": "Task",
      "work": "T07",
      "milli": 1548925082098,
      "time": "1/31/2019, 8:58:02 AM",
      "evt": "start"
     },
     {
      "course": "CS-102",
      "segment": "Task",
      "work": "T07",
      "milli": 1548925169585,
      "time": "1/31/2019, 8:59:29 AM",
      "evt": "start"
     },
     {
      "course": "CS-102",
      "segment": "Task",
      "work": "T07",
      "milli": 1548925170706,
      "time": "1/31/2019, 8:59:30 AM",
      "evt": "start"
     },
     {
      "course": "CS-102",
      "segment": "Task",
      "work": "T01",
      "milli": 1548925181762,
      "time": "1/31/2019, 8:59:41 AM",
      "evt": "start"
     },
     {
      "course": "CS-102",
      "segment": "Task",
      "work": "T01",
      "milli": 1548925189597,
      "time": "1/31/2019, 8:59:49 AM",
      "evt": "start"
     },
     {
      "course": "CS-102",
      "segment": "Task",
      "work": "T01",
      "milli": 1548925190760,
      "time": "1/31/2019, 8:59:50 AM",
      "evt": "start"
     },
     {
      "course": "CS-102",
      "segment": "Task",
      "work": "T01",
      "milli": 1548925195501,
      "time": "1/31/2019, 8:59:55 AM",
      "evt": "start"
     },
     {
      "course": "CS-102",
      "segment": "Task",
      "work": "T01",
      "milli": 1548925196127,
      "time": "1/31/2019, 8:59:56 AM",
      "evt": "start"
     },
     {
      "course": "CS-102",
      "segment": "Task",
      "work": "T01",
      "milli": 1548925196294,
      "time": "1/31/2019, 8:59:56 AM",
      "evt": "start"
     },
     {
      "course": "CS-102",
      "segment": "Task",
      "work": "T01",
      "milli": 1548925200471,
      "time": "1/31/2019, 9:00:00 AM",
      "evt": "start"
     },
     {
      "course": "CS-102",
      "segment": "Task",
      "work": "T01",
      "milli": 1548925201006,
      "time": "1/31/2019, 9:00:01 AM",
      "evt": "start"
     },
     {
      "course": "CS-102",
      "segment": "Task",
      "work": "T01",
      "milli": 1548925201208,
      "time": "1/31/2019, 9:00:01 AM",
      "evt": "start"
     },
     {
      "course": "CS-102",
      "segment": "Task",
      "work": "T02",
      "milli": 1548925212163,
      "time": "1/31/2019, 9:00:12 AM",
      "evt": "start"
     },
     {
      "course": "CS-102",
      "segment": "Task",
      "work": "T01",
      "milli": 1548925215162,
      "time": "1/31/2019, 9:00:15 AM",
      "evt": "start"
     },
     {
      "course": "CS-102",
      "segment": "Task",
      "work": "T02",
      "milli": 1548925233108,
      "time": "1/31/2019, 9:00:33 AM",
      "evt": "start"
     },
     {
      "course": "CS-102",
      "segment": "Task",
      "work": "T03",
      "milli": 1548925259762,
      "time": "1/31/2019, 9:00:59 AM",
      "evt": "start"
     },
     {
      "course": "CS-102",
      "segment": "Task",
      "work": "T04",
      "milli": 1548925262991,
      "time": "1/31/2019, 9:01:02 AM",
      "evt": "start"
     },
     {
      "course": "CS-102",
      "segment": "Task",
      "work": "T04",
      "milli": 1548925276909,
      "time": "1/31/2019, 9:01:16 AM",
      "evt": "start"
     },
     {
      "course": "CS-102",
      "segment": "Task",
      "work": "T05",
      "milli": 1548925295381,
      "time": "1/31/2019, 9:01:35 AM",
      "evt": "start"
     },
     {
      "course": "CS-102",
      "segment": "Task",
      "work": "T06",
      "milli": 1548925313775,
      "time": "1/31/2019, 9:01:53 AM",
      "evt": "start"
     },
     {
      "course": "CS-102",
      "segment": "Task",
      "work": "T07",
      "milli": 1548925332716,
      "time": "1/31/2019, 9:02:12 AM",
      "evt": "start"
     },
     {
      "course": "CS-102",
      "segment": "Task",
      "work": "T08",
      "milli": 1548925348197,
      "time": "1/31/2019, 9:02:28 AM",
      "evt": "start"
     },
     {
      "course": "CS-102",
      "segment": "Task",
      "work": "T07",
      "milli": 1548925363866,
      "time": "1/31/2019, 9:02:43 AM",
      "evt": "start"
     },
     {
      "course": "CS-102",
      "segment": "Task",
      "work": "T08",
      "milli": 1548925366917,
      "time": "1/31/2019, 9:02:46 AM",
      "evt": "start"
     },
     {
      "course": "CS-102",
      "segment": "Task",
      "work": "T05",
      "milli": 1548925382009,
      "time": "1/31/2019, 9:03:02 AM",
      "evt": "start"
     },
     {
      "course": "CS-102",
      "segment": "Task",
      "work": "T09",
      "milli": 1548925415740,
      "time": "1/31/2019, 9:03:35 AM",
      "evt": "start"
     },
     {
      "course": "CS-102",
      "segment": "MarkComplete",
      "work": "T07",
      "milli": 1548925434481,
      "time": "1/31/2019, 9:03:54 AM",
      "evt": "complete"
     },
     {
      "course": "CS-102",
      "segment": "Task",
      "work": "T10",
      "milli": 1548925452526,
      "time": "1/31/2019, 9:04:12 AM",
      "evt": "start"
     },
     {
      "course": "CS-102",
      "segment": "Task",
      "work": "T11",
      "milli": 1548925475404,
      "time": "1/31/2019, 9:04:35 AM",
      "evt": "start"
     },
     {
      "course": "CS-102",
      "segment": "Task",
      "work": "T08",
      "milli": 1548925496932,
      "time": "1/31/2019, 9:04:56 AM",
      "evt": "start"
     },
     {
      "course": "CS-102",
      "segment": "Task",
      "work": "T12",
      "milli": 1548925502528,
      "time": "1/31/2019, 9:05:02 AM",
      "evt": "start"
     },
     {
      "course": "CS-102",
      "segment": "Task",
      "work": "T06",
      "milli": 1548925519117,
      "time": "1/31/2019, 9:05:19 AM",
      "evt": "start"
     },
     {
      "course": "CS-102",
      "segment": "MarkComplete",
      "work": "T08",
      "milli": 1548925616444,
      "time": "1/31/2019, 9:06:56 AM",
      "evt": "complete"
     },
     {
      "course": "CS-102",
      "segment": "Task",
      "work": "T09",
      "milli": 1548925620844,
      "time": "1/31/2019, 9:07:00 AM",
      "evt": "start"
     },
     {
      "course": "CS-102",
      "segment": "Task",
      "work": "T07",
      "milli": 1548925674595,
      "time": "1/31/2019, 9:07:54 AM",
      "evt": "start"
     },
     {
      "course": "CS-102",
      "segment": "Task",
      "work": "T01",
      "milli": 1548925765683,
      "time": "1/31/2019, 9:09:25 AM",
      "evt": "start"
     },
     {
      "course": "CS-102",
      "segment": "Task",
      "work": "Introduction",
      "milli": 1548925769417,
      "time": "1/31/2019, 9:09:29 AM",
      "evt": "start"
     },
     {
      "course": "CS-102",
      "segment": "Task",
      "work": "T10",
      "milli": 1548925810772,
      "time": "1/31/2019, 9:10:10 AM",
      "evt": "start"
     },
     {
      "course": "CS-102",
      "segment": "Task",
      "work": "T10",
      "milli": 1548925874107,
      "time": "1/31/2019, 9:11:14 AM",
      "evt": "start"
     },
     {
      "course": "CS-102",
      "segment": "MarkComplete",
      "work": "T10",
      "milli": 1548925953174,
      "time": "1/31/2019, 9:12:33 AM",
      "evt": "complete"
     },
     {
      "course": "CS-102",
      "segment": "Task",
      "work": "T11",
      "milli": 1548925964216,
      "time": "1/31/2019, 9:12:44 AM",
      "evt": "start"
     },
     {
      "course": "CS-102",
      "segment": "Task",
      "work": "T06",
      "milli": 1548926034488,
      "time": "1/31/2019, 9:13:54 AM",
      "evt": "start"
     },
     {
      "course": "CS-102",
      "segment": "Task",
      "work": "T05",
      "milli": 1548926046285,
      "time": "1/31/2019, 9:14:06 AM",
      "evt": "start"
     },
     {
      "course": "CS-102",
      "segment": "Task",
      "work": "T07",
      "milli": 1548926052713,
      "time": "1/31/2019, 9:14:12 AM",
      "evt": "start"
     },
     {
      "course": "CS-102",
      "segment": "Task",
      "work": "T08",
      "milli": 1548926060080,
      "time": "1/31/2019, 9:14:20 AM",
      "evt": "start"
     },
     {
      "course": "CS-103",
      "segment": "Lab",
      "work": "Create",
      "milli": 1548926423017,
      "time": "1/31/2019, 9:20:23 AM",
      "evt": "start"
     },
     {
      "course": "CS-103",
      "segment": "Lab",
      "work": "Create",
      "milli": 1548926808448,
      "time": "1/31/2019, 9:26:48 AM",
      "evt": "start"
     },
     {
      "course": "CS-103",
      "segment": "Lab",
      "work": "Syntax",
      "milli": 1548926824321,
      "time": "1/31/2019, 9:27:04 AM",
      "evt": "start"
     },
     {
      "course": "CS-103",
      "segment": "Lab",
      "work": "Syntax",
      "milli": 1548926825099,
      "time": "1/31/2019, 9:27:05 AM",
      "evt": "start"
     },
     {
      "course": "CS-103",
      "segment": "Lab",
      "work": "Create",
      "milli": 1548926828011,
      "time": "1/31/2019, 9:27:08 AM",
      "evt": "start"
     },
     {
      "course": "CS-103",
      "segment": "Lab",
      "work": "Starting",
      "milli": 1548926838574,
      "time": "1/31/2019, 9:27:18 AM",
      "evt": "start"
     },
     {
      "course": "CS-103",
      "segment": "Lab",
      "work": "Starting",
      "milli": 1548926842379,
      "time": "1/31/2019, 9:27:22 AM",
      "evt": "start"
     },
     {
      "course": "CS-103",
      "segment": "Lab",
      "work": "Create",
      "milli": 1548926844265,
      "time": "1/31/2019, 9:27:24 AM",
      "evt": "start"
     },
     {
      "course": "CS-103",
      "segment": "Lab",
      "work": "Create",
      "milli": 1548926848076,
      "time": "1/31/2019, 9:27:28 AM",
      "evt": "start"
     },
     {
      "course": "CS-103",
      "segment": "Lab",
      "work": "Create",
      "milli": 1548926848760,
      "time": "1/31/2019, 9:27:28 AM",
      "evt": "start"
     },
     {
      "course": "CS-103",
      "segment": "Lab",
      "work": "Create",
      "milli": 1548927375875,
      "time": "1/31/2019, 9:36:15 AM",
      "evt": "start"
     },
     {
      "course": "CS-103",
      "segment": "AutoComplete",
      "work": "Create",
      "milli": 1548927484227,
      "time": "1/31/2019, 9:38:04 AM",
      "evt": "complete"
     },
     {
      "course": "CS-103",
      "segment": "Lab",
      "work": "Syntax",
      "milli": 1548927601978,
      "time": "1/31/2019, 9:40:01 AM",
      "evt": "start"
     },
     {
      "course": "CS-103",
      "segment": "Lab",
      "work": "Syntax",
      "milli": 1548927842761,
      "time": "1/31/2019, 9:44:02 AM",
      "evt": "start"
     },
     {
      "course": "CS-103",
      "segment": "Lab",
      "work": "Syntax",
      "milli": 1548927861032,
      "time": "1/31/2019, 9:44:21 AM",
      "evt": "start"
     },
     {
      "course": "CS-103",
      "segment": "Lab",
      "work": "Resources",
      "milli": 1548927866452,
      "time": "1/31/2019, 9:44:26 AM",
      "evt": "start"
     },
     {
      "course": "CS-103",
      "segment": "Lab",
      "work": "Syntax",
      "milli": 1548927879066,
      "time": "1/31/2019, 9:44:39 AM",
      "evt": "start"
     },
     {
      "course": "CS-103",
      "segment": "AutoComplete",
      "work": "Syntax",
      "milli": 1548928021519,
      "time": "1/31/2019, 9:47:01 AM",
      "evt": "complete"
     },
     {
      "course": "CS-103",
      "segment": "Lab",
      "work": "Resources",
      "milli": 1548928099841,
      "time": "1/31/2019, 9:48:19 AM",
      "evt": "start"
     },
     {
      "course": "CS-103",
      "segment": "Lab",
      "work": "Syntax",
      "milli": 1548928713105,
      "time": "1/31/2019, 9:58:33 AM",
      "evt": "start"
     },
     {
      "course": "CS-103",
      "segment": "Lab",
      "work": "Resources",
      "milli": 1548928742470,
      "time": "1/31/2019, 9:59:02 AM",
      "evt": "start"
     },
     {
      "course": "CS-103",
      "segment": "Lab",
      "work": "Resources",
      "milli": 1548928750081,
      "time": "1/31/2019, 9:59:10 AM",
      "evt": "start"
     },
     {
      "course": "CS-103",
      "segment": "AutoComplete",
      "work": "Resources",
      "milli": 1548928760199,
      "time": "1/31/2019, 9:59:20 AM",
      "evt": "complete"
     },
     {
      "course": "CS-103",
      "segment": "Lab",
      "work": "Images",
      "milli": 1548928824656,
      "time": "1/31/2019, 10:00:24 AM",
      "evt": "start"
     },
     {
      "course": "CS-103",
      "segment": "Lab",
      "work": "Images",
      "milli": 1548928888179,
      "time": "1/31/2019, 10:01:28 AM",
      "evt": "start"
     },
     {
      "course": "CS-103",
      "segment": "Lab",
      "work": "Security",
      "milli": 1548928901509,
      "time": "1/31/2019, 10:01:41 AM",
      "evt": "start"
     },
     {
      "course": "CS-103",
      "segment": "Lab",
      "work": "Images",
      "milli": 1548928969202,
      "time": "1/31/2019, 10:02:49 AM",
      "evt": "start"
     },
     {
      "course": "CS-103",
      "segment": "Lab",
      "work": "Images",
      "milli": 1548929045716,
      "time": "1/31/2019, 10:04:05 AM",
      "evt": "start"
     },
     {
      "course": "CS-103",
      "segment": "AutoComplete",
      "work": "Images",
      "milli": 1548929334405,
      "time": "1/31/2019, 10:08:54 AM",
      "evt": "complete"
     },
     {
      "course": "CS-103",
      "segment": "Lab",
      "work": "Security",
      "milli": 1548929361657,
      "time": "1/31/2019, 10:09:21 AM",
      "evt": "start"
     },
     {
      "course": "CS-103",
      "segment": "Lab",
      "work": "Security",
      "milli": 1548929419419,
      "time": "1/31/2019, 10:10:19 AM",
      "evt": "start"
     },
     {
      "course": "CS-103",
      "segment": "Lab",
      "work": "Images",
      "milli": 1548929573696,
      "time": "1/31/2019, 10:12:53 AM",
      "evt": "start"
     },
     {
      "course": "CS-103",
      "segment": "Lab",
      "work": "Resources",
      "milli": 1548929583521,
      "time": "1/31/2019, 10:13:03 AM",
      "evt": "start"
     },
     {
      "course": "CS-103",
      "segment": "Lab",
      "work": "Images",
      "milli": 1548929609184,
      "time": "1/31/2019, 10:13:29 AM",
      "evt": "start"
     },
     {
      "course": "CS-103",
      "segment": "Lab",
      "work": "Security",
      "milli": 1548929781730,
      "time": "1/31/2019, 10:16:21 AM",
      "evt": "start"
     },
     {
      "course": "CS-103",
      "segment": "Lab",
      "work": "Security",
      "milli": 1548929815632,
      "time": "1/31/2019, 10:16:55 AM",
      "evt": "start"
     },
     {
      "course": "CS-103",
      "segment": "AutoComplete",
      "work": "Security",
      "milli": 1548929957719,
      "time": "1/31/2019, 10:19:17 AM",
      "evt": "complete"
     },
     {
      "course": "CS-103",
      "segment": "Lab",
      "work": "Networking",
      "milli": 1548930269568,
      "time": "1/31/2019, 10:24:29 AM",
      "evt": "start"
     },
     {
      "course": "CS-103",
      "segment": "Lab",
      "work": "Networking",
      "milli": 1548930468480,
      "time": "1/31/2019, 10:27:48 AM",
      "evt": "start"
     },
     {
      "course": "CS-103",
      "segment": "Lab",
      "work": "Networking",
      "milli": 1548930526088,
      "time": "1/31/2019, 10:28:46 AM",
      "evt": "start"
     },
     {
      "course": "CS-103",
      "segment": "AutoComplete",
      "work": "Networking",
      "milli": 1548930905386,
      "time": "1/31/2019, 10:35:05 AM",
      "evt": "complete"
     },
     {
      "course": "CS-103",
      "segment": "Lab",
      "work": "Running",
      "milli": 1548931000416,
      "time": "1/31/2019, 10:36:40 AM",
      "evt": "start"
     },
     {
      "course": "CS-103",
      "segment": "Lab",
      "work": "Running",
      "milli": 1548931087941,
      "time": "1/31/2019, 10:38:07 AM",
      "evt": "start"
     },
     {
      "course": "CS-103",
      "segment": "AutoComplete",
      "work": "Running",
      "milli": 1548931251372,
      "time": "1/31/2019, 10:40:51 AM",
      "evt": "complete"
     },
     {
      "course": "CS-103",
      "segment": "Lab",
      "work": "Starting",
      "milli": 1548931297668,
      "time": "1/31/2019, 10:41:37 AM",
      "evt": "start"
     },
     {
      "course": "CS-103",
      "segment": "Lab",
      "work": "Running",
      "milli": 1548931503775,
      "time": "1/31/2019, 10:45:03 AM",
      "evt": "start"
     },
     {
      "course": "CS-103",
      "segment": "Lab",
      "work": "Starting",
      "milli": 1548931506987,
      "time": "1/31/2019, 10:45:06 AM",
      "evt": "start"
     },
     {
      "course": "CS-104",
      "segment": "Task",
      "work": "ICP01",
      "milli": 1548931837718,
      "time": "1/31/2019, 10:50:37 AM",
      "evt": "start"
     },
     {
      "course": "CS-104",
      "segment": "Task",
      "work": "ICP01",
      "milli": 1548931893824,
      "time": "1/31/2019, 10:51:33 AM",
      "evt": "start"
     },
     {
      "course": "CS-103",
      "segment": "Lab",
      "work": "Starting",
      "milli": 1548932057023,
      "time": "1/31/2019, 10:54:17 AM",
      "evt": "start"
     },
     {
      "course": "CS-103",
      "segment": "Lab",
      "work": "Starting",
      "milli": 1548932182304,
      "time": "1/31/2019, 10:56:22 AM",
      "evt": "start"
     },
     {
      "course": "CS-103",
      "segment": "AutoComplete",
      "work": "Starting",
      "milli": 1548933082471,
      "time": "1/31/2019, 11:11:22 AM",
      "evt": "complete"
     },
     {
      "course": "CS-104",
      "segment": "Task",
      "work": "ICP01",
      "milli": 1548933213445,
      "time": "1/31/2019, 11:13:33 AM",
      "evt": "start"
     },
     {
      "course": "CS-104",
      "segment": "Task",
      "work": "ICP02",
      "milli": 1548933226297,
      "time": "1/31/2019, 11:13:46 AM",
      "evt": "start"
     },
     {
      "course": "CS-104",
      "segment": "Task",
      "work": "ICP01",
      "milli": 1548933226733,
      "time": "1/31/2019, 11:13:46 AM",
      "evt": "start"
     },
     {
      "course": "CS-104",
      "segment": "Task",
      "work": "ICP03",
      "milli": 1548933233429,
      "time": "1/31/2019, 11:13:53 AM",
      "evt": "start"
     },
     {
      "course": "CS-104",
      "segment": "Task",
      "work": "ICP04",
      "milli": 1548933246845,
      "time": "1/31/2019, 11:14:06 AM",
      "evt": "start"
     },
     {
      "course": "CS-104",
      "segment": "Task",
      "work": "ICP02",
      "milli": 1548933251003,
      "time": "1/31/2019, 11:14:11 AM",
      "evt": "start"
     },
     {
      "course": "CS-104",
      "segment": "Task",
      "work": "ICP01",
      "milli": 1548933254670,
      "time": "1/31/2019, 11:14:14 AM",
      "evt": "start"
     },
     {
      "course": "CS-104",
      "segment": "Task",
      "work": "ICP01",
      "milli": 1548933257031,
      "time": "1/31/2019, 11:14:17 AM",
      "evt": "start"
     },
     {
      "course": "CS-104",
      "segment": "MarkComplete",
      "work": "ICP01",
      "milli": 1548933304543,
      "time": "1/31/2019, 11:15:04 AM",
      "evt": "complete"
     },
     {
      "course": "CS-104",
      "segment": "Task",
      "work": "ICP02",
      "milli": 1548933314904,
      "time": "1/31/2019, 11:15:14 AM",
      "evt": "start"
     },
     {
      "course": "CS-104",
      "segment": "Task",
      "work": "ICP01",
      "milli": 1548933365487,
      "time": "1/31/2019, 11:16:05 AM",
      "evt": "start"
     },
     {
      "course": "CS-104",
      "segment": "Task",
      "work": "ICP02",
      "milli": 1548933412455,
      "time": "1/31/2019, 11:16:52 AM",
      "evt": "start"
     },
     {
      "course": "CS-104",
      "segment": "Task",
      "work": "ICP03",
      "milli": 1548933416534,
      "time": "1/31/2019, 11:16:56 AM",
      "evt": "start"
     },
     {
      "course": "CS-104",
      "segment": "Task",
      "work": "ICP04",
      "milli": 1548933427172,
      "time": "1/31/2019, 11:17:07 AM",
      "evt": "start"
     },
     {
      "course": "CS-104",
      "segment": "Task",
      "work": "ICP02",
      "milli": 1548933542238,
      "time": "1/31/2019, 11:19:02 AM",
      "evt": "start"
     },
     {
      "course": "CS-104",
      "segment": "MarkComplete",
      "work": "ICP02",
      "milli": 1548933566953,
      "time": "1/31/2019, 11:19:26 AM",
      "evt": "complete"
     },
     {
      "course": "CS-104",
      "segment": "Task",
      "work": "ICP01",
      "milli": 1548933570084,
      "time": "1/31/2019, 11:19:30 AM",
      "evt": "start"
     },
     {
      "course": "CS-104",
      "segment": "Task",
      "work": "ICP03",
      "milli": 1548933573111,
      "time": "1/31/2019, 11:19:33 AM",
      "evt": "start"
     },
     {
      "course": "CS-104",
      "segment": "Task",
      "work": "ICP03",
      "milli": 1548933578693,
      "time": "1/31/2019, 11:19:38 AM",
      "evt": "start"
     },
     {
      "course": "CS-104",
      "segment": "MarkComplete",
      "work": "ICP03",
      "milli": 1548933582328,
      "time": "1/31/2019, 11:19:42 AM",
      "evt": "complete"
     },
     {
      "course": "CS-104",
      "segment": "Task",
      "work": "ICP04",
      "milli": 1548933585696,
      "time": "1/31/2019, 11:19:45 AM",
      "evt": "start"
     },
     {
      "course": "CS-104",
      "segment": "MarkComplete",
      "work": "ICP04",
      "milli": 1548933588004,
      "time": "1/31/2019, 11:19:48 AM",
      "evt": "complete"
     },
     {
      "course": "CS-104",
      "segment": "Task",
      "work": "ICP01",
      "milli": 1548938372606,
      "time": "1/31/2019, 12:39:32 PM",
      "evt": "start"
     },
     {
      "course": "CS-104",
      "segment": "Task",
      "work": "ICP02",
      "milli": 1548938388677,
      "time": "1/31/2019, 12:39:48 PM",
      "evt": "start"
     },
     {
      "course": "CS-104",
      "segment": "Task",
      "work": "ICP02",
      "milli": 1548938389340,
      "time": "1/31/2019, 12:39:49 PM",
      "evt": "start"
     },
     {
      "course": "CS-104",
      "segment": "Task",
      "work": "ICP04",
      "milli": 1548938428522,
      "time": "1/31/2019, 12:40:28 PM",
      "evt": "start"
     },
     {
      "course": "CS-104",
      "segment": "Task",
      "work": "ICP03",
      "milli": 1548938431349,
      "time": "1/31/2019, 12:40:31 PM",
      "evt": "start"
     },
     {
      "course": "CS-104",
      "segment": "Task",
      "work": "ICP04",
      "milli": 1548938454640,
      "time": "1/31/2019, 12:40:54 PM",
      "evt": "start"
     },
     {
      "course": "CS-104",
      "segment": "Task",
      "work": "ICP01",
      "milli": 1548938772489,
      "time": "1/31/2019, 12:46:12 PM",
      "evt": "start"
     },
     {
      "course": "CS-104",
      "segment": "Task",
      "work": "ICP02",
      "milli": 1548938776543,
      "time": "1/31/2019, 12:46:16 PM",
      "evt": "start"
     }
    ],
    "cornsilk": [
     {
      "course": "CS-101",
      "segment": "Task",
      "work": "cloudctl",
      "milli": 1548922637535,
      "time": "1/31/2019, 8:17:17 AM",
      "evt": "start"
     },
     {
      "course": "CS-101",
      "segment": "MarkComplete",
      "work": "cloudctl",
      "milli": 1548922808422,
      "time": "1/31/2019, 8:20:08 AM",
      "evt": "complete"
     },
     {
      "course": "CS-101",
      "segment": "Task",
      "work": "docker",
      "milli": 1548922834582,
      "time": "1/31/2019, 8:20:34 AM",
      "evt": "start"
     },
     {
      "course": "CS-101",
      "segment": "MarkComplete",
      "work": "docker",
      "milli": 1548922886997,
      "time": "1/31/2019, 8:21:26 AM",
      "evt": "complete"
     },
     {
      "course": "CS-101",
      "segment": "Task",
      "work": "kubectl",
      "milli": 1548922891991,
      "time": "1/31/2019, 8:21:31 AM",
      "evt": "start"
     },
     {
      "course": "CS-101",
      "segment": "MarkComplete",
      "work": "kubectl",
      "milli": 1548922909674,
      "time": "1/31/2019, 8:21:49 AM",
      "evt": "complete"
     },
     {
      "course": "CS-102",
      "segment": "Task",
      "work": "Introduction",
      "milli": 1548923000873,
      "time": "1/31/2019, 8:23:20 AM",
      "evt": "start"
     },
     {
      "course": "CS-101",
      "segment": "Task",
      "work": "cloudctl",
      "milli": 1548923752075,
      "time": "1/31/2019, 8:35:52 AM",
      "evt": "start"
     },
     {
      "course": "CS-101",
      "segment": "Task",
      "work": "docker",
      "milli": 1548923757455,
      "time": "1/31/2019, 8:35:57 AM",
      "evt": "start"
     },
     {
      "course": "CS-101",
      "segment": "Task",
      "work": "kubectl",
      "milli": 1548923763101,
      "time": "1/31/2019, 8:36:03 AM",
      "evt": "start"
     },
     {
      "course": "CS-101",
      "segment": "Task",
      "work": "kubectl",
      "milli": 1548923773872,
      "time": "1/31/2019, 8:36:13 AM",
      "evt": "start"
     },
     {
      "course": "CS-102",
      "segment": "Task",
      "work": "Introduction",
      "milli": 1548923791669,
      "time": "1/31/2019, 8:36:31 AM",
      "evt": "start"
     },
     {
      "course": "CS-102",
      "segment": "Task",
      "work": "T01",
      "milli": 1548924275706,
      "time": "1/31/2019, 8:44:35 AM",
      "evt": "start"
     },
     {
      "course": "CS-102",
      "segment": "Task",
      "work": "T01",
      "milli": 1548924444117,
      "time": "1/31/2019, 8:47:24 AM",
      "evt": "start"
     },
     {
      "course": "CS-102",
      "segment": "MarkComplete",
      "work": "T01",
      "milli": 1548924453660,
      "time": "1/31/2019, 8:47:33 AM",
      "evt": "complete"
     },
     {
      "course": "CS-102",
      "segment": "Task",
      "work": "T02",
      "milli": 1548924468277,
      "time": "1/31/2019, 8:47:48 AM",
      "evt": "start"
     },
     {
      "course": "CS-102",
      "segment": "MarkComplete",
      "work": "T02",
      "milli": 1548924577211,
      "time": "1/31/2019, 8:49:37 AM",
      "evt": "complete"
     },
     {
      "course": "CS-102",
      "segment": "Task",
      "work": "T03",
      "milli": 1548924585910,
      "time": "1/31/2019, 8:49:45 AM",
      "evt": "start"
     },
     {
      "course": "CS-102",
      "segment": "MarkComplete",
      "work": "T03",
      "milli": 1548924721638,
      "time": "1/31/2019, 8:52:01 AM",
      "evt": "complete"
     },
     {
      "course": "CS-102",
      "segment": "Task",
      "work": "T04",
      "milli": 1548924727382,
      "time": "1/31/2019, 8:52:07 AM",
      "evt": "start"
     },
     {
      "course": "CS-102",
      "segment": "MarkComplete",
      "work": "T04",
      "milli": 1548924878298,
      "time": "1/31/2019, 8:54:38 AM",
      "evt": "complete"
     },
     {
      "course": "CS-102",
      "segment": "Task",
      "work": "T05",
      "milli": 1548924882839,
      "time": "1/31/2019, 8:54:42 AM",
      "evt": "start"
     },
     {
      "course": "CS-102",
      "segment": "MarkComplete",
      "work": "T05",
      "milli": 1548925007320,
      "time": "1/31/2019, 8:56:47 AM",
      "evt": "complete"
     },
     {
      "course": "CS-102",
      "segment": "Task",
      "work": "T06",
      "milli": 1548925020762,
      "time": "1/31/2019, 8:57:00 AM",
      "evt": "start"
     },
     {
      "course": "CS-102",
      "segment": "MarkComplete",
      "work": "T06",
      "milli": 1548925107086,
      "time": "1/31/2019, 8:58:27 AM",
      "evt": "complete"
     },
     {
      "course": "CS-102",
      "segment": "Task",
      "work": "T07",
      "milli": 1548925111491,
      "time": "1/31/2019, 8:58:31 AM",
      "evt": "start"
     },
     {
      "course": "CS-102",
      "segment": "MarkComplete",
      "work": "T07",
      "milli": 1548925244653,
      "time": "1/31/2019, 9:00:44 AM",
      "evt": "complete"
     },
     {
      "course": "CS-102",
      "segment": "Task",
      "work": "T08",
      "milli": 1548925253001,
      "time": "1/31/2019, 9:00:53 AM",
      "evt": "start"
     },
     {
      "course": "CS-102",
      "segment": "MarkComplete",
      "work": "T08",
      "milli": 1548925405254,
      "time": "1/31/2019, 9:03:25 AM",
      "evt": "complete"
     },
     {
      "course": "CS-102",
      "segment": "Task",
      "work": "T09",
      "milli": 1548925410693,
      "time": "1/31/2019, 9:03:30 AM",
      "evt": "start"
     },
     {
      "course": "CS-102",
      "segment": "MarkComplete",
      "work": "T09",
      "milli": 1548925505250,
      "time": "1/31/2019, 9:05:05 AM",
      "evt": "complete"
     },
     {
      "course": "CS-102",
      "segment": "Task",
      "work": "T10",
      "milli": 1548925508792,
      "time": "1/31/2019, 9:05:08 AM",
      "evt": "start"
     },
     {
      "course": "CS-102",
      "segment": "Task",
      "work": "T10",
      "milli": 1548925607123,
      "time": "1/31/2019, 9:06:47 AM",
      "evt": "start"
     },
     {
      "course": "CS-102",
      "segment": "MarkComplete",
      "work": "T10",
      "milli": 1548925628170,
      "time": "1/31/2019, 9:07:08 AM",
      "evt": "complete"
     },
     {
      "course": "CS-102",
      "segment": "Task",
      "work": "T11",
      "milli": 1548925631332,
      "time": "1/31/2019, 9:07:11 AM",
      "evt": "start"
     },
     {
      "course": "CS-102",
      "segment": "MarkComplete",
      "work": "T11",
      "milli": 1548925700265,
      "time": "1/31/2019, 9:08:20 AM",
      "evt": "complete"
     },
     {
      "course": "CS-102",
      "segment": "Task",
      "work": "T12",
      "milli": 1548925703885,
      "time": "1/31/2019, 9:08:23 AM",
      "evt": "start"
     },
     {
      "course": "CS-102",
      "segment": "MarkComplete",
      "work": "T12",
      "milli": 1548925770316,
      "time": "1/31/2019, 9:09:30 AM",
      "evt": "complete"
     },
     {
      "course": "CS-103",
      "segment": "Lab",
      "work": "Create",
      "milli": 1548926897727,
      "time": "1/31/2019, 9:28:17 AM",
      "evt": "start"
     },
     {
      "course": "CS-103",
      "segment": "AutoComplete",
      "work": "Create",
      "milli": 1548927362687,
      "time": "1/31/2019, 9:36:02 AM",
      "evt": "complete"
     },
     {
      "course": "CS-103",
      "segment": "Lab",
      "work": "Syntax",
      "milli": 1548927468435,
      "time": "1/31/2019, 9:37:48 AM",
      "evt": "start"
     },
     {
      "course": "CS-103",
      "segment": "AutoComplete",
      "work": "Syntax",
      "milli": 1548927810584,
      "time": "1/31/2019, 9:43:30 AM",
      "evt": "complete"
     },
     {
      "course": "CS-103",
      "segment": "Lab",
      "work": "Resources",
      "milli": 1548927843368,
      "time": "1/31/2019, 9:44:03 AM",
      "evt": "start"
     },
     {
      "course": "CS-103",
      "segment": "AutoComplete",
      "work": "Syntax",
      "milli": 1548928217092,
      "time": "1/31/2019, 9:50:17 AM",
      "evt": "complete"
     },
     {
      "course": "CS-103",
      "segment": "AutoComplete",
      "work": "Syntax",
      "milli": 1548928385925,
      "time": "1/31/2019, 9:53:05 AM",
      "evt": "complete"
     },
     {
      "course": "CS-103",
      "segment": "Lab",
      "work": "Images",
      "milli": 1548928488911,
      "time": "1/31/2019, 9:54:48 AM",
      "evt": "start"
     },
     {
      "course": "CS-103",
      "segment": "AutoComplete",
      "work": "Images",
      "milli": 1548929077511,
      "time": "1/31/2019, 10:04:37 AM",
      "evt": "complete"
     },
     {
      "course": "CS-103",
      "segment": "Lab",
      "work": "Security",
      "milli": 1548929099600,
      "time": "1/31/2019, 10:04:59 AM",
      "evt": "start"
     },
     {
      "course": "CS-103",
      "segment": "AutoComplete",
      "work": "Security",
      "milli": 1548929746016,
      "time": "1/31/2019, 10:15:46 AM",
      "evt": "complete"
     },
     {
      "course": "CS-103",
      "segment": "Lab",
      "work": "Networking",
      "milli": 1548930020379,
      "time": "1/31/2019, 10:20:20 AM",
      "evt": "start"
     },
     {
      "course": "CS-103",
      "segment": "AutoComplete",
      "work": "Networking",
      "milli": 1548930445768,
      "time": "1/31/2019, 10:27:25 AM",
      "evt": "complete"
     },
     {
      "course": "CS-103",
      "segment": "Lab",
      "work": "Running",
      "milli": 1548930460489,
      "time": "1/31/2019, 10:27:40 AM",
      "evt": "start"
     },
     {
      "course": "CS-103",
      "segment": "AutoComplete",
      "work": "Running",
      "milli": 1548930693376,
      "time": "1/31/2019, 10:31:33 AM",
      "evt": "complete"
     },
     {
      "course": "CS-103",
      "segment": "Lab",
      "work": "Starting",
      "milli": 1548930738006,
      "time": "1/31/2019, 10:32:18 AM",
      "evt": "start"
     },
     {
      "course": "CS-103",
      "segment": "AutoComplete",
      "work": "Starting",
      "milli": 1548931507661,
      "time": "1/31/2019, 10:45:07 AM",
      "evt": "complete"
     },
     {
      "course": "CS-104",
      "segment": "Task",
      "work": "ICP01",
      "milli": 1548931817368,
      "time": "1/31/2019, 10:50:17 AM",
      "evt": "start"
     },
     {
      "course": "CS-104",
      "segment": "Task",
      "work": "ICP01",
      "milli": 1548932068213,
      "time": "1/31/2019, 10:54:28 AM",
      "evt": "start"
     },
     {
      "course": "CS-104",
      "segment": "MarkComplete",
      "work": "ICP01",
      "milli": 1548932465746,
      "time": "1/31/2019, 11:01:05 AM",
      "evt": "complete"
     },
     {
      "course": "CS-104",
      "segment": "Task",
      "work": "ICP02",
      "milli": 1548932479169,
      "time": "1/31/2019, 11:01:19 AM",
      "evt": "start"
     },
     {
      "course": "CS-104",
      "segment": "MarkComplete",
      "work": "ICP02",
      "milli": 1548932717075,
      "time": "1/31/2019, 11:05:17 AM",
      "evt": "complete"
     },
     {
      "course": "CS-104",
      "segment": "Task",
      "work": "ICP03",
      "milli": 1548932725634,
      "time": "1/31/2019, 11:05:25 AM",
      "evt": "start"
     },
     {
      "course": "CS-104",
      "segment": "MarkComplete",
      "work": "ICP03",
      "milli": 1548933005903,
      "time": "1/31/2019, 11:10:05 AM",
      "evt": "complete"
     },
     {
      "course": "CS-104",
      "segment": "Task",
      "work": "ICP04",
      "milli": 1548933022028,
      "time": "1/31/2019, 11:10:22 AM",
      "evt": "start"
     },
     {
      "course": "CS-104",
      "segment": "MarkComplete",
      "work": "ICP04",
      "milli": 1548933069711,
      "time": "1/31/2019, 11:11:09 AM",
      "evt": "complete"
     }
    ],
    "azure": [
     {
      "course": "CS-101",
      "segment": "Task",
      "work": "cloudctl",
      "milli": 1548923232520,
      "time": "1/31/2019, 8:27:12 AM",
      "evt": "start"
     },
     {
      "course": "CS-101",
      "segment": "Task",
      "work": "docker",
      "milli": 1548923235042,
      "time": "1/31/2019, 8:27:15 AM",
      "evt": "start"
     },
     {
      "course": "CS-101",
      "segment": "Task",
      "work": "kubectl",
      "milli": 1548923239095,
      "time": "1/31/2019, 8:27:19 AM",
      "evt": "start"
     },
     {
      "course": "CS-101",
      "segment": "MarkComplete",
      "work": "kubectl",
      "milli": 1548923241396,
      "time": "1/31/2019, 8:27:21 AM",
      "evt": "complete"
     },
     {
      "course": "CS-101",
      "segment": "Task",
      "work": "docker",
      "milli": 1548923243663,
      "time": "1/31/2019, 8:27:23 AM",
      "evt": "start"
     },
     {
      "course": "CS-101",
      "segment": "MarkComplete",
      "work": "docker",
      "milli": 1548923245691,
      "time": "1/31/2019, 8:27:25 AM",
      "evt": "complete"
     },
     {
      "course": "CS-101",
      "segment": "Task",
      "work": "cloudctl",
      "milli": 1548923247664,
      "time": "1/31/2019, 8:27:27 AM",
      "evt": "start"
     },
     {
      "course": "CS-101",
      "segment": "MarkComplete",
      "work": "cloudctl",
      "milli": 1548923250991,
      "time": "1/31/2019, 8:27:30 AM",
      "evt": "complete"
     },
     {
      "course": "CS-103",
      "segment": "Lab",
      "work": "Create",
      "milli": 1548924186273,
      "time": "1/31/2019, 8:43:06 AM",
      "evt": "start"
     },
     {
      "course": "CS-103",
      "segment": "Lab",
      "work": "Create",
      "milli": 1548924204494,
      "time": "1/31/2019, 8:43:24 AM",
      "evt": "start"
     },
     {
      "course": "CS-102",
      "segment": "Task",
      "work": "Introduction",
      "milli": 1548924223775,
      "time": "1/31/2019, 8:43:43 AM",
      "evt": "start"
     },
     {
      "course": "CS-102",
      "segment": "Task",
      "work": "T01",
      "milli": 1548924384254,
      "time": "1/31/2019, 8:46:24 AM",
      "evt": "start"
     },
     {
      "course": "CS-102",
      "segment": "MarkComplete",
      "work": "T01",
      "milli": 1548924437815,
      "time": "1/31/2019, 8:47:17 AM",
      "evt": "complete"
     },
     {
      "course": "CS-102",
      "segment": "Task",
      "work": "T02",
      "milli": 1548924441182,
      "time": "1/31/2019, 8:47:21 AM",
      "evt": "start"
     },
     {
      "course": "CS-102",
      "segment": "MarkComplete",
      "work": "T02",
      "milli": 1548924497226,
      "time": "1/31/2019, 8:48:17 AM",
      "evt": "complete"
     },
     {
      "course": "CS-102",
      "segment": "Task",
      "work": "T03",
      "milli": 1548924499740,
      "time": "1/31/2019, 8:48:19 AM",
      "evt": "start"
     },
     {
      "course": "CS-102",
      "segment": "MarkComplete",
      "work": "T03",
      "milli": 1548924534225,
      "time": "1/31/2019, 8:48:54 AM",
      "evt": "complete"
     },
     {
      "course": "CS-102",
      "segment": "Task",
      "work": "T04",
      "milli": 1548924536875,
      "time": "1/31/2019, 8:48:56 AM",
      "evt": "start"
     },
     {
      "course": "CS-102",
      "segment": "Task",
      "work": "T04",
      "milli": 1548924604819,
      "time": "1/31/2019, 8:50:04 AM",
      "evt": "start"
     },
     {
      "course": "CS-102",
      "segment": "Task",
      "work": "T04",
      "milli": 1548924608310,
      "time": "1/31/2019, 8:50:08 AM",
      "evt": "start"
     },
     {
      "course": "CS-102",
      "segment": "Task",
      "work": "T04",
      "milli": 1548924614949,
      "time": "1/31/2019, 8:50:14 AM",
      "evt": "start"
     },
     {
      "course": "CS-102",
      "segment": "MarkComplete",
      "work": "T04",
      "milli": 1548924754367,
      "time": "1/31/2019, 8:52:34 AM",
      "evt": "complete"
     },
     {
      "course": "CS-102",
      "segment": "Task",
      "work": "T05",
      "milli": 1548924757518,
      "time": "1/31/2019, 8:52:37 AM",
      "evt": "start"
     },
     {
      "course": "CS-102",
      "segment": "MarkComplete",
      "work": "T05",
      "milli": 1548925094385,
      "time": "1/31/2019, 8:58:14 AM",
      "evt": "complete"
     },
     {
      "course": "CS-102",
      "segment": "Task",
      "work": "T06",
      "milli": 1548925099322,
      "time": "1/31/2019, 8:58:19 AM",
      "evt": "start"
     },
     {
      "course": "CS-102",
      "segment": "MarkComplete",
      "work": "T06",
      "milli": 1548925153756,
      "time": "1/31/2019, 8:59:13 AM",
      "evt": "complete"
     },
     {
      "course": "CS-102",
      "segment": "Task",
      "work": "T07",
      "milli": 1548925156998,
      "time": "1/31/2019, 8:59:16 AM",
      "evt": "start"
     },
     {
      "course": "CS-102",
      "segment": "MarkComplete",
      "work": "T07",
      "milli": 1548925172295,
      "time": "1/31/2019, 8:59:32 AM",
      "evt": "complete"
     },
     {
      "course": "CS-102",
      "segment": "Task",
      "work": "T08",
      "milli": 1548925175108,
      "time": "1/31/2019, 8:59:35 AM",
      "evt": "start"
     },
     {
      "course": "CS-102",
      "segment": "MarkComplete",
      "work": "T08",
      "milli": 1548925444659,
      "time": "1/31/2019, 9:04:04 AM",
      "evt": "complete"
     },
     {
      "course": "CS-102",
      "segment": "Task",
      "work": "T09",
      "milli": 1548925454867,
      "time": "1/31/2019, 9:04:14 AM",
      "evt": "start"
     },
     {
      "course": "CS-102",
      "segment": "MarkComplete",
      "work": "T09",
      "milli": 1548925559834,
      "time": "1/31/2019, 9:05:59 AM",
      "evt": "complete"
     },
     {
      "course": "CS-102",
      "segment": "Task",
      "work": "T10",
      "milli": 1548925563944,
      "time": "1/31/2019, 9:06:03 AM",
      "evt": "start"
     },
     {
      "course": "CS-102",
      "segment": "MarkComplete",
      "work": "T10",
      "milli": 1548925727621,
      "time": "1/31/2019, 9:08:47 AM",
      "evt": "complete"
     },
     {
      "course": "CS-102",
      "segment": "Task",
      "work": "T11",
      "milli": 1548925729959,
      "time": "1/31/2019, 9:08:49 AM",
      "evt": "start"
     },
     {
      "course": "CS-102",
      "segment": "MarkComplete",
      "work": "T11",
      "milli": 1548925814056,
      "time": "1/31/2019, 9:10:14 AM",
      "evt": "complete"
     },
     {
      "course": "CS-102",
      "segment": "Task",
      "work": "T12",
      "milli": 1548925816337,
      "time": "1/31/2019, 9:10:16 AM",
      "evt": "start"
     },
     {
      "course": "CS-102",
      "segment": "MarkComplete",
      "work": "T12",
      "milli": 1548925849583,
      "time": "1/31/2019, 9:10:49 AM",
      "evt": "complete"
     },
     {
      "course": "CS-103",
      "segment": "Lab",
      "work": "Create",
      "milli": 1548926825090,
      "time": "1/31/2019, 9:27:05 AM",
      "evt": "start"
     },
     {
      "course": "CS-103",
      "segment": "AutoComplete",
      "work": "Create",
      "milli": 1548927983375,
      "time": "1/31/2019, 9:46:23 AM",
      "evt": "complete"
     },
     {
      "course": "CS-103",
      "segment": "Lab",
      "work": "Syntax",
      "milli": 1548928161956,
      "time": "1/31/2019, 9:49:21 AM",
      "evt": "start"
     },
     {
      "course": "CS-103",
      "segment": "Lab",
      "work": "Create",
      "milli": 1548929044937,
      "time": "1/31/2019, 10:04:04 AM",
      "evt": "start"
     },
     {
      "course": "CS-103",
      "segment": "Lab",
      "work": "Create",
      "milli": 1548929047695,
      "time": "1/31/2019, 10:04:07 AM",
      "evt": "start"
     },
     {
      "course": "CS-103",
      "segment": "Lab",
      "work": "Syntax",
      "milli": 1548929107931,
      "time": "1/31/2019, 10:05:07 AM",
      "evt": "start"
     },
     {
      "course": "CS-103",
      "segment": "AutoComplete",
      "work": "Syntax",
      "milli": 1548929364533,
      "time": "1/31/2019, 10:09:24 AM",
      "evt": "complete"
     },
     {
      "course": "CS-103",
      "segment": "Lab",
      "work": "Resources",
      "milli": 1548929377298,
      "time": "1/31/2019, 10:09:37 AM",
      "evt": "start"
     },
     {
      "course": "CS-103",
      "segment": "AutoComplete",
      "work": "Resources",
      "milli": 1548929810604,
      "time": "1/31/2019, 10:16:50 AM",
      "evt": "complete"
     },
     {
      "course": "CS-103",
      "segment": "Lab",
      "work": "Images",
      "milli": 1548929828098,
      "time": "1/31/2019, 10:17:08 AM",
      "evt": "start"
     },
     {
      "course": "CS-103",
      "segment": "AutoComplete",
      "work": "Images",
      "milli": 1548930074841,
      "time": "1/31/2019, 10:21:14 AM",
      "evt": "complete"
     },
     {
      "course": "CS-103",
      "segment": "Lab",
      "work": "Security",
      "milli": 1548930089395,
      "time": "1/31/2019, 10:21:29 AM",
      "evt": "start"
     },
     {
      "course": "CS-103",
      "segment": "AutoComplete",
      "work": "Security",
      "milli": 1548930505868,
      "time": "1/31/2019, 10:28:25 AM",
      "evt": "complete"
     },
     {
      "course": "CS-103",
      "segment": "Lab",
      "work": "Networking",
      "milli": 1548930523668,
      "time": "1/31/2019, 10:28:43 AM",
      "evt": "start"
     },
     {
      "course": "CS-103",
      "segment": "Lab",
      "work": "Networking",
      "milli": 1548931369121,
      "time": "1/31/2019, 10:42:49 AM",
      "evt": "start"
     },
     {
      "course": "CS-103",
      "segment": "Lab",
      "work": "Running",
      "milli": 1548931493420,
      "time": "1/31/2019, 10:44:53 AM",
      "evt": "start"
     },
     {
      "course": "CS-103",
      "segment": "Lab",
      "work": "Running",
      "milli": 1548931629351,
      "time": "1/31/2019, 10:47:09 AM",
      "evt": "start"
     },
     {
      "course": "CS-103",
      "segment": "AutoComplete",
      "work": "Running",
      "milli": 1548931800502,
      "time": "1/31/2019, 10:50:00 AM",
      "evt": "complete"
     },
     {
      "course": "CS-103",
      "segment": "Lab",
      "work": "Starting",
      "milli": 1548931887816,
      "time": "1/31/2019, 10:51:27 AM",
      "evt": "start"
     },
     {
      "course": "CS-103",
      "segment": "AutoComplete",
      "work": "Starting",
      "milli": 1548932172310,
      "time": "1/31/2019, 10:56:12 AM",
      "evt": "complete"
     }
    ]
   }

//------------------------------------------------------------------------------
module.exports = {

    //------------------------------------------------------------------------------
    // return parsed EU data
    //------------------------------------------------------------------------------
    getData: function() {
      return euData;
  }

    
//end of exports 
};