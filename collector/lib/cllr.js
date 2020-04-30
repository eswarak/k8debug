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
 Global object for application variables
*/ 

"use strict"
let sepLine =  '--------------------------------------------';
let cllr = module.exports = {
    config: {},                                       // configuration data read from config.json file
    softwareVersion: '0.0.1',                         // default software version
    enablePrint: true,
    startTime: 0,              //
    startMilli: 0,             //
    ofile: '',                 //
    auditCnt: 0,               //
    icount: 0,                 //
    eventCnt: 0,               //
    instructorURL: '',         //
    instructorLocal: 'http://127.0.0.1:4200',          // default url when running local 
    instructorCloud: 'http://dashboard.default',       // default url when running in cloud
    courseNumb: 100,                                   // default beginning course number
    app_namespace: 'Unknown',                          //
    app_user: 'Unknown',                               //
    reported: '',                                      //
    data: '{"items": []}',                             //
    reported: {},                                      //
    counted: {},                                       //
    countkey: '',                                      //
    skipAudit: 0,                                      //
    sepxx: sepLine,                                    // sep line
    stats: {},                                         // events as reported
    sep00: sepLine,                                    // sep line
    namespace: {},                                     // contains the audit entries for each namespace
    sep01: sepLine,                                    // sep line 
    namespacekey: '',                                  // string with comma seperated namespaces
    sep02: sepLine,                                    // sep line
    auditlog: {},                                      // instructor audit log info received, not used when student
    sep03: sepLine,                                    // sep line
    printFileNames: [],                                // files that can be printed to PDF 
    labels: '',                                        //
    courseIds: '',                                     //
    //courseTitles: '@@',                                //
    courseConfig: {},                                  // all course configurations
    courses: {},                                       // gets populated with the course content that is shown
    segmentKeys: [],                                   //
    autoLinks: {},                                     // auto report links
    coursePublished: {},
    

    // ------------------ default values for course definitions --------------------
    button1_label: 'Question',
    button1_delay: 0,
    button1_color: '#e6f2ff',
    button1_size: 500,
    
    button2_label: 'Hint',
    button2_delay: 0,
    button2_color: '#e6ffe6',
    button2_size: 100,

    button3_label: 'Answer',
    button3_delay: 0,
    button3_color: '#ffe6b3',
    button3_size: 500,

    course_title: 'Student course',
    course_desc: 'Learning provided by Dave',
    course_id: 'CS-',                                  // DO NOT change, will break UI
    course_max: 10,                                    // number of segments/tasks to show in UI 
    course_auto: "no",                                 // Does this source auto report completion
    
    // -------------------------------------------------------
    courseDirectory: '/public/coursecatalog/',         // the directory where the course MD files are located
    createHtml: true,                                  // should the course segement files be created for debugging
    blackText: '',                                     // NO LONGER USED
    environment: {},                                   // local environment variables
    // ---------------------- default english labels for UI ---------------------------------

    uiL2: {
      "modal_efile_btn1":"Edit",
      "modal_efile_btn2":"Close",
      "modal_efile_hdr1":"Select course file to edit",
      "modal_efile_lbl":"File to edit",
      "modal_efile_list":" select file",
      "menu12": "Edit Course"

    },

    uiLabels: { 
         "collectorName": "Collector",
         "completeMsg": "Marked complete",
         "graph_01_title": "Time to complete work",
         "graph_01_xTitle": "Seconds",
         "graph_01_yTitle": "Course work",
         "instructor": "Instructor",
         "markComplete":"Press to mark completed",
         "menu00": "About Collector",
         "menu01": "Start Timer",
         "menu02": "Clear Timer",
         "menu03": "Clear Stats",
         "menu04": "Upload course",
         "menu05": "Validate courses",
         "menu06": "Print course to PDF",
         "menu07": "Teams",
         "menu08": "Update available courses",
         "menu09": "Publish courses",
         "menu10": "Delete course",
         "menu11": "Select Language",
         "menu12": "Edit course",
         "modal_about_hdr": "Collector",
         "modal_about_lbl": "This application is intended to assist with training an enablement courses provided by IBM",
         "modal_about_mid": "Server technology used",
         "modal_about_ui": "User interface technology used",
         "modal_about_ver": "Version",
         "modal_del_btn1": "Delete",
         "modal_del_btn2": "Cancel",
         "modal_del_confirm": "Do you want to proceed?",
         "modal_del_hdr1": "Confirm clear stats",
         "modal_del_hdr2": "You are about to delete the completion statistics.",
         "modal_delete_btn1": "Delete",
         "modal_delete_btn2": "Close",
         "modal_delete_fail": "Failed to delete courese",
         "modal_delete_hdr1": "Course delete",
         "modal_delete_list": " select course to delete",
         "modal_delete_pass": "Course successfully deleted",

         "modal_efile_btn1":"Edit",
         "modal_efile_btn2":"Close",
         "modal_efile_hdr1":"Select course file to edit",
         "modal_efile_lbl":"File to edit",
         "modal_efile_list":" select file",

         "modal_ful_btn1": "Validate courses",
         "modal_ful_btn2": "Close",
         "modal_ful_hdr": "Course upload",
         "modal_ful_msg": "Drop course file(s) here or click to upload.<br />",
         "modal_login_btn1": "Login",
         "modal_login_btn2": "Cancel",
         "modal_login_fail": "Invalid credentials",
         "modal_login_hdr1": "User Login",
         "modal_login_lbl1": "User",
         "modal_login_lbl2": "Password",
         "modal_print_btn1": "Print",
         "modal_print_btn2": "Close",
         "modal_print_fail": "Failed to generate PDF",
         "modal_print_hdr1": "Print course to PDF",
         "modal_print_lbl": "Minutes to count down",
         "modal_print_list": " select file",
         "modal_print_preview": "Preview generated PDF",
         "modal_publish_btn1": "Close",
         "modal_publish_btn2": "Toggle",
         "modal_publish_hdr1": "Publish Courses",
         "modal_publish_pub": "Yes",
         "modal_publish_th1": "Toggle",
         "modal_publish_th2": "Published",
         "modal_publish_th3": "Course",
         "modal_publish_unp": "No",
         "modal_team_btn": "Close",
         "modal_team_hdr": "Team name and color",
         "modal_team_lbl": "Team",
         "modal_time_btn1": "Start timer",
         "modal_time_btn2": "Close",
         "modal_time_hdr1": "TIMER - Set and Start",
         "modal_time_lbl": "Minutes to count down",
         "modal_updateC_btn1": "Update",
         "modal_updateC_btn2": "Close",
         "modal_updateC_desc": "Press the update button to retrieve the latest course catalog",
         "modal_updateC_fail": "Update failed",
         "modal_updateC_hdr1": "Update Course Catalog",
         "modal_updateC_pass": "Update completed successfully",
         "modal_valid_btn": "Close",
         "modal_valid_hdr": "Course validation results",
         "pmsg_001": "Processing course",
         "pmsg_002": "...INFO: Content added for work area",
         "pmsg_003": "...WARN: Invalid course parameter",
         "pmsg_004": "Parameter",
         "pmsg_005": "------ Start new topic ------",
         "pmsg_006": "Inserting complete button",
         "pmsg_007": "Error building course auto links, message",
         "pmsg_008": "Will create Cousre ID: ",
         "pmsg_009": "Errors occurred that must be resolved",
         "pmsg_010": "",
         "pmsg_011": "",
         "pmsg_012": "",
         "pmsg_013": "",
         "pmsg_014": "Changed to user provided Course ID - ", 
         "pmsg_015": "",
         "pmsg_016": "",
         "pmsg_017": "",
         "pmsg_018": "",
         "pmsg_019": "SectionHeader: Located section: ",
         "pmsg_020": ">>>ERROR: Section 1 not located",
         "pmsg_021": ">>>ERROR: Section 2 not located",
         "pmsg_022": ">>>ERROR: Section 3 not located",
         "pmsg_023": ">>>ERROR: Required button1_label is missing from section_1 definition",
         "pmsg_024": ">>>ERROR: Required button2_label is missing from section_2 definition",
         "pmsg_025": ">>>ERROR: Required button3_label is missing from section_3 definition",
         "pmsg_026": ">>>ERROR: Section label is duplicate and cannot be used more than once, Section and Value: ",
         "pmsg_027": ">>>ERROR: More than one Confirm button defined in this topic",
         "pmsg_028": "...INFO: Did not output line: ",
         "pmsg_029": "...INFO: All sections located",
         "pmsg_030": ">>>ERROR: Missing parameter :course_title:",
         "pmsg_031": ">>>ERROR: Missing parameter :course_desc:",
         "pmsg_032": ">>>ERROR: Missing parameter :course_max:",
         "pmsg_033": ">>>ERROR: Missing parameter :button1_labal:",
         "pmsg_034": ">>>ERROR: Missing parameter :button2_label",
         "pmsg_035": ">>>ERROR: Missing parameter :button3_label",
         "softwareVersion": "0.0.1",
         "student": "Student",
         "tab00_btn": "Begin course",
         "tab00_hdr": "Catalog of courses",
         "tab00_list": "select course",
         "tab00": "Courses",
         "tab01_hdr": "Completed Work",
         "tab01_ns": "namespace",
         "tab01_wait": "Waiting for data",
         "tab01": "Statistics",
         "tab02_begin": "Begin course to populate",
         "tab02_hdr": "Select item from drop down to begin",
         "tab02_list": "select work",
         "tab02": "Class work",
         "tab03_btn": "Send",
         "tab03_hdr": "Feedback",
         "tab03_inst": "Enter feedback in the following section and press Send when complete",
         "tab03_nothing": "Nothing submitted, feedback comments are blank",
         "tab03_ok": "Feedback was successfully received, thank you.",
         "tab03": "Feedback",
         "tab04_hdr": "Supplemental information. Document links may open new tab.",
         "tab04": "Information",
         "tab05_hdr": "Course Insight",
         "tab05": "Insight",
         "time_hour": "h ",
         "time_min": "m ",
         "time_msg": "Remaining time",
         "time_sec": "s",
         "time_stop": "&#x1F6D1; STOP"
    },



    // ---------------------- default team colors and names ---------------------------------


    
    teams:{  
           "red":{  
              "color":"#FF0000",
              "text":"black"
           },
           "tan":{  
              "color":"#D2B48C",
              "text":"black"
           },
           "aqua":{  
              "color":"#00FFFF",
              "text":"white"
           },
           "blue":{  
              "color":"#0000FF",
              "text":"white"
           },
           "gold":{  
              "color":"#FFD700",
              "text":"black"
           },
           "gray":{  
              "color":"#D3D3D3",
              "text":"white"
           },
           "lime":{  
              "color":"#00FF00",
              "text":"white"
           },
           "navy":{  
              "color":"#000080",
              "text":"white"
           },
           "peru":{  
              "color":"#CD853F",
              "text":"white"
           },
           "pink":{  
              "color":"#FFC0CB",
              "text":"black"
           },
           "plum":{  
              "color":"#DDA0DD",
              "text":"black"
           },
           "teal":{  
              "color":"#008080",
              "text":"white"
           },
           "azure":{  
              "color":"#F0FFFF",
              "text":"black"
           },
           "beige":{
              "color":"#FFE4C4",  
              "text":"black"
           },
           "black":{  
              "color":"#000000",
              "text":"white"
           },
           "brown":{  
              "color":"#A52A2A",
              "text":"white"
           },
           "coral":{  
              "color":"#FF7F50",
              "text":"black"
           },
           "green":{  
              "color":"#008000",
              "text":"white"
           },
           "khaki":{  
              "color":"#F0E68C",
              "text":"black"
           },
          "olive":{  
              "color":"#808000",
              "text":"white"
           },
           "wheat":{  
              "color":"#F5DEB3",
              "text":"black"
           },
           "indigo":{  
              "color":"#4B0082",
              "text":"white"
           },
           "maroon":{  
              "color":"#800000",
              "text":"white"
           },
           "orange":{  
              "color":"#FFA500",
              "text":"black"
           },
           "purple":{  
              "color":"#800080",
              "text":"white"
           },
           "salmon":{  
              "color":"#FA8072",
              "text":"black"
           },
           "sienna":{  
              "color":"#A0522D",
              "text":"white"
           },
           "tomato":{  
              "color":"#FF6347",
              "text":"black"
           },
           "violet":{  
              "color":"#EE82EE",
              "text":"black"
           },
           "yellow":{  
              "color":"#FFFF00",
              "text":"black"
           },
           "crimson":{  
              "color":"#DC143C",
              "text":"black"
           },
           "darkred":{  
              "color":"#8B0000",
              "text":"white"
           },
           "dimgray":{  
              "color":"#696969",
              "text":"white"
           },
           "fuchsia":{  
              "color":"#FF44FF",
              "text":"black"
           },
           "hotpink":{  
              "color":"#FF69B4",
              "text":"black"
           },
           "magenta":{  
              "color":"#FF00FF",
              "text":"black"
           },
           "skyblue":{  
              "color":"#87CEEB",
              "text":"white"
           },
           "thistle":{  
              "color":"#D8BFD8",
              "text":"black"
           },
           "darkblue":{  
              "color":"#00008B",
              "text":"white"
           },
           "darkcyan":{  
              "color":"#008B8B",
              "text":"white"
           },
           "darkgray":{  
              "color":"#A9A9A9",
              "text":"white"
           },
           "deeppink":{  
              "color":"#FF1493",
              "text":"black"
           },
           "honeydew":{  
              "color":"#F0FFF0",
              "text":"black"
           },
           "seagreen":{  
              "color":"#2E8B57",
              "text":"white"
           },
           "burlywood":{  
              "color":"#DEB887",
              "text":"black"
           },
           "cadetblue":{  
              "color":"#5F9EA0",
              "text":"white"
           },
           "chocolate":{  
              "color":"#D2691E",
              "text":"white"
           },
           "darkgreen":{  
              "color":"#006400",
              "text":"white"
           },
           "darkkhaki":{  
              "color":"#BDB76B",
              "text":"white"
           },
           "firebrick":{  
              "color":"#B22222",
              "text":"white"
           },
           "goldenrod":{  
              "color":"#DAA520",
              "text":"black"
           },
           "indianred":{  
              "color":"#CD5C5C",
              "text":"white"
           },
           "lawngreen":{  
              "color":"#7CFC00",
              "text":"white"
           },
           "lightblue":{  
              "color":"#ADD8E6",
              "text":"white"
           },
           "lightgray":{  
              "color":"#808080",
              "text":"black"
           },
           "lightpink":{  
              "color":"#FFB6C1",
              "text":"black"
           },
           "limegreen":{  
              "color":"#32CD32",
              "text":"white"
           },
           "olivedrab":{  
              "color":"#6B8E23",
              "text":"white"
           },
           "orangered":{  
              "color":"#FF4500",
              "text":"black"
           },
           "palegreen":{  
              "color":"#98FB98",
              "text":"white"
           },
           "peachpuff":{  
              "color":"#FFDAB9",
              "text":"black"
           },
           "rosybrown":{  
              "color":"#BC8F8F",
              "text":"white"
           },
           "royalblue":{  
              "color":"#4169E1",
              "text":"white"
           },
           "slateblue":{  
              "color":"#6A5ACD",
              "text":"white"
           },
           "slategray":{  
              "color":"#708090",
              "text":"white"
           },
           "steelblue":{  
              "color":"#4682B4",
              "text":"white"
           },
           "turquoise":{  
              "color":"#40E0D0",
              "text":"white"
           },
           "aquamarine":{  
              "color":"#7FFFD4",
              "text":"white"
           },
           "blueviolet":{  
              "color":"#8A2BE2",
              "text":"white"
           },
           "darksalmon":{  
              "color":"#E9967A",
              "text":"black"
           },
           "darkviolet":{  
              "color":"#9400D3",
              "text":"white"
           },
           "dodgerblue":{  
              "color":"#1E90FF",
              "text":"white"
           },
           "lightcoral":{  
              "color":"#F08080",
              "text":"black"
           },
           "lightgreen":{  
              "color":"#90EE90",
              "text":"white"
           },
           "mediumblue":{  
              "color":"#0000CD",
              "text":"white"
           },
           "sandybrown":{  
              "color":"#F4A460",
              "text":"black"
           },
           "darkmagenta":{  
              "color":"#8B008B",
              "text":"white"
           },
           "forestgreen":{  
              "color":"#228B22",
              "text":"white"
           },
           "greenyellow":{  
              "color":"#ADFF2F",
              "text":"white"
           },
           "navajowhite":{  
              "color":"#FFDEAD",
              "text":"black"
           },
           "saddlebrown":{  
              "color":"#8B4513",
              "text":"white"
           },
           "springgreen":{  
              "color":"#00FF7F",
              "text":"white"
           },
           "yellowgreen":{  
              "color":"#9ACD32",
              "text":"white"
           },
           "darkseagreen":{  
              "color":"#8FBC8F",
              "text":"white"
           },
           "mediumorchid":{  
              "color":"#BA55D3",
              "text":"white"
           },
           "mediumpurple":{  
              "color":"#9370DB",
              "text":"white"
           },
           "midnightblue":{  
              "color":"#191970",
              "text":"white"
           },
           "darkgoldenrod":{  
              "color":"#B8860B",
              "text":"white"
           },
           "darkslateblue":{  
              "color":"#483D8B",
              "text":"white"
           },
           "lightseagreen":{  
              "color":"#20B2AA",
              "text":"white"
           },
           "palevioletred":{  
              "color":"#DB7093",
              "text":"black"
           },
          "cornflowerblue":{  
              "color":"#6495ED",
              "text":"white"
           },
           "darkolivegreen":{  
              "color":"#556B2F",
              "text":"white"
           },
           "lightslategray":{  
              "color":"#778899",
              "text":"white"
           },
           "mediumseagreen":{  
              "color":"#3CB371",
              "text":"white"
           },
           "mediumturquoise":{  
              "color":"#48D1CC",
              "text":"white"
           },
           "mediumvioletred":{  
              "color":"#C71585",
              "text":"white"
           },
           "mediumaquamarine":{  
              "color":"#66CDAA",
              "text":"white"
           },
           "mediumspringgreen":{  
              "color":"#00FA9A",
              "text":"white"
           }
     },


    //last le is a holder
    do_not_delete: 'do not delete'
};