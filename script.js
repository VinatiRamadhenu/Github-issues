document.addEventListener("DOMContentLoaded", function () {
    console.log("DOM content loaded");
    const issueList = document.getElementById("issue-list");
    const pageHeading = document.getElementById("page-heading");
    const loadPrevBtn = document.getElementById("load_prev");
    const loadNextBtn = document.getElementById("load_next");
    let currentPage = 1;
    const issuesPerPage = 5;

    const issuesData = [
        {
            "url": "https://api.github.com/repos/octocat/Hello-World/issues/2719",
    "repository_url": "https://api.github.com/repos/octocat/Hello-World",
    "labels_url": "https://api.github.com/repos/octocat/Hello-World/issues/2719/labels{/name}",
    "comments_url": "https://api.github.com/repos/octocat/Hello-World/issues/2719/comments",
    "events_url": "https://api.github.com/repos/octocat/Hello-World/issues/2719/events",
    "html_url": "https://github.com/octocat/Hello-World/pull/2719",
    "id": 1865238434,
    "node_id": "PR_kwDOABPHjc5Ysths",
    "number": 2719,
    "title": "Delete README",
    "user": {
      "login": "jymblucky",
      "id": 143100843,
      "node_id": "U_kgDOCIeLqw",
      "avatar_url": "https://avatars.githubusercontent.com/u/143100843?v=4",
      "gravatar_id": "",
      "url": "https://api.github.com/users/jymblucky",
      "html_url": "https://github.com/jymblucky",
      "followers_url": "https://api.github.com/users/jymblucky/followers",
      "following_url": "https://api.github.com/users/jymblucky/following{/other_user}",
      "gists_url": "https://api.github.com/users/jymblucky/gists{/gist_id}",
      "starred_url": "https://api.github.com/users/jymblucky/starred{/owner}{/repo}",
      "subscriptions_url": "https://api.github.com/users/jymblucky/subscriptions",
      "organizations_url": "https://api.github.com/users/jymblucky/orgs",
      "repos_url": "https://api.github.com/users/jymblucky/repos",
      "events_url": "https://api.github.com/users/jymblucky/events{/privacy}",
      "received_events_url": "https://api.github.com/users/jymblucky/received_events",
      "type": "User",
      "site_admin": false
    },
    "labels": [

    ],
    "state": "open",
    "locked": false,
    "assignee": null,
    "assignees": [

    ],
    "milestone": null,
    "comments": 0,
    "created_at": "2023-08-24T14:03:12Z",
    "updated_at": "2023-08-24T14:06:16Z",
    "closed_at": null,
    "author_association": "NONE",
    "active_lock_reason": null,
    "draft": false,
    "pull_request": {
      "url": "https://api.github.com/repos/octocat/Hello-World/pulls/2719",
      "html_url": "https://github.com/octocat/Hello-World/pull/2719",
      "diff_url": "https://github.com/octocat/Hello-World/pull/2719.diff",
      "patch_url": "https://github.com/octocat/Hello-World/pull/2719.patch",
      "merged_at": null
    },
    "body": null,
    "reactions": {
      "url": "https://api.github.com/repos/octocat/Hello-World/issues/2719/reactions",
      "total_count": 0,
      "+1": 0,
      "-1": 0,
      "laugh": 0,
      "hooray": 0,
      "confused": 0,
      "heart": 0,
      "rocket": 0,
      "eyes": 0
    },
    "timeline_url": "https://api.github.com/repos/octocat/Hello-World/issues/2719/timeline",
    "performed_via_github_app": null,
    "state_reason": null

        },

        //second issue
        {
            "url": "https://api.github.com/repos/octocat/Hello-World/issues/2716",
    "repository_url": "https://api.github.com/repos/octocat/Hello-World",
    "labels_url": "https://api.github.com/repos/octocat/Hello-World/issues/2716/labels{/name}",
    "comments_url": "https://api.github.com/repos/octocat/Hello-World/issues/2716/comments",
    "events_url": "https://api.github.com/repos/octocat/Hello-World/issues/2716/events",
    "html_url": "https://github.com/octocat/Hello-World/issues/2716",
    "id": 1860086711,
    "node_id": "I_kwDOABPHjc5u3qu3",
    "number": 2716,
    "title": "title",
    "user": {
      "login": "toast-marketing[bot]",
      "id": 139590813,
      "node_id": "BOT_kgDOCFH8nQ",
      "avatar_url": "https://avatars.githubusercontent.com/u/6312730?v=4",
      "gravatar_id": "",
      "url": "https://api.github.com/users/toast-marketing%5Bbot%5D",
      "html_url": "https://github.com/apps/toast-marketing",
      "followers_url": "https://api.github.com/users/toast-marketing%5Bbot%5D/followers",
      "following_url": "https://api.github.com/users/toast-marketing%5Bbot%5D/following{/other_user}",
      "gists_url": "https://api.github.com/users/toast-marketing%5Bbot%5D/gists{/gist_id}",
      "starred_url": "https://api.github.com/users/toast-marketing%5Bbot%5D/starred{/owner}{/repo}",
      "subscriptions_url": "https://api.github.com/users/toast-marketing%5Bbot%5D/subscriptions",
      "organizations_url": "https://api.github.com/users/toast-marketing%5Bbot%5D/orgs",
      "repos_url": "https://api.github.com/users/toast-marketing%5Bbot%5D/repos",
      "events_url": "https://api.github.com/users/toast-marketing%5Bbot%5D/events{/privacy}",
      "received_events_url": "https://api.github.com/users/toast-marketing%5Bbot%5D/received_events",
      "type": "Bot",
      "site_admin": false
    },
    "labels": [

    ],
    "state": "open",
    "locked": false,
    "assignee": null,
    "assignees": [

    ],
    "milestone": null,
    "comments": 0,
    "created_at": "2023-08-21T20:20:37Z",
    "updated_at": "2023-08-21T20:20:37Z",
    "closed_at": null,
    "author_association": "NONE",
    "active_lock_reason": null,
    "body": null,
    "reactions": {
      "url": "https://api.github.com/repos/octocat/Hello-World/issues/2716/reactions",
      "total_count": 0,
      "+1": 0,
      "-1": 0,
      "laugh": 0,
      "hooray": 0,
      "confused": 0,
      "heart": 0,
      "rocket": 0,
      "eyes": 0
    },
    "timeline_url": "https://api.github.com/repos/octocat/Hello-World/issues/2716/timeline",
    "performed_via_github_app": null,
    "state_reason": null
        },
        {
            // Third issue data
            "url": "https://api.github.com/repos/octocat/Hello-World/issues/2710",
    "repository_url": "https://api.github.com/repos/octocat/Hello-World",
    "labels_url": "https://api.github.com/repos/octocat/Hello-World/issues/2710/labels{/name}",
    "comments_url": "https://api.github.com/repos/octocat/Hello-World/issues/2710/comments",
    "events_url": "https://api.github.com/repos/octocat/Hello-World/issues/2710/events",
    "html_url": "https://github.com/octocat/Hello-World/issues/2710",
    "id": 1849802469,
    "node_id": "I_kwDOABPHjc5uQb7l",
    "number": 2710,
    "title": "🇲🇾ok",
    "user": {
      "login": "zamry09",
      "id": 139102818,
      "node_id": "U_kgDOCEqKYg",
      "avatar_url": "https://avatars.githubusercontent.com/u/139102818?v=4",
      "gravatar_id": "",
      "url": "https://api.github.com/users/zamry09",
      "html_url": "https://github.com/zamry09",
      "followers_url": "https://api.github.com/users/zamry09/followers",
      "following_url": "https://api.github.com/users/zamry09/following{/other_user}",
      "gists_url": "https://api.github.com/users/zamry09/gists{/gist_id}",
      "starred_url": "https://api.github.com/users/zamry09/starred{/owner}{/repo}",
      "subscriptions_url": "https://api.github.com/users/zamry09/subscriptions",
      "organizations_url": "https://api.github.com/users/zamry09/orgs",
      "repos_url": "https://api.github.com/users/zamry09/repos",
      "events_url": "https://api.github.com/users/zamry09/events{/privacy}",
      "received_events_url": "https://api.github.com/users/zamry09/received_events",
      "type": "User",
      "site_admin": false
    },
    "labels": [

    ],
    "state": "open",
    "locked": false,
    "assignee": null,
    "assignees": [

    ],
    "milestone": null,
    "comments": 0,
    "created_at": "2023-08-14T13:41:49Z",
    "updated_at": "2023-08-14T13:41:49Z",
    "closed_at": null,
    "author_association": "NONE",
    "active_lock_reason": null,
    "body": null,
    "reactions": {
      "url": "https://api.github.com/repos/octocat/Hello-World/issues/2710/reactions",
      "total_count": 1,
      "+1": 0,
      "-1": 0,
      "laugh": 0,
      "hooray": 0,
      "confused": 0,
      "heart": 1,
      "rocket": 0,
      "eyes": 0
    },
    "timeline_url": "https://api.github.com/repos/octocat/Hello-World/issues/2710/timeline",
    "performed_via_github_app": null,
    "state_reason": null
        },
        {
            // Fourth issue data
            "url": "https://api.github.com/repos/octocat/Hello-World/issues/2709",
    "repository_url": "https://api.github.com/repos/octocat/Hello-World",
    "labels_url": "https://api.github.com/repos/octocat/Hello-World/issues/2709/labels{/name}",
    "comments_url": "https://api.github.com/repos/octocat/Hello-World/issues/2709/comments",
    "events_url": "https://api.github.com/repos/octocat/Hello-World/issues/2709/events",
    "html_url": "https://github.com/octocat/Hello-World/pull/2709",
    "id": 1848930448,
    "node_id": "PR_kwDOABPHjc5X1lG2",
    "number": 2709,
    "title": "Create SECURITY.md",
    "user": {
      "login": "Jonnyaliblog1989",
      "id": 142192124,
      "node_id": "U_kgDOCHmt_A",
      "avatar_url": "https://avatars.githubusercontent.com/u/142192124?v=4",
      "gravatar_id": "",
      "url": "https://api.github.com/users/Jonnyaliblog1989",
      "html_url": "https://github.com/Jonnyaliblog1989",
      "followers_url": "https://api.github.com/users/Jonnyaliblog1989/followers",
      "following_url": "https://api.github.com/users/Jonnyaliblog1989/following{/other_user}",
      "gists_url": "https://api.github.com/users/Jonnyaliblog1989/gists{/gist_id}",
      "starred_url": "https://api.github.com/users/Jonnyaliblog1989/starred{/owner}{/repo}",
      "subscriptions_url": "https://api.github.com/users/Jonnyaliblog1989/subscriptions",
      "organizations_url": "https://api.github.com/users/Jonnyaliblog1989/orgs",
      "repos_url": "https://api.github.com/users/Jonnyaliblog1989/repos",
      "events_url": "https://api.github.com/users/Jonnyaliblog1989/events{/privacy}",
      "received_events_url": "https://api.github.com/users/Jonnyaliblog1989/received_events",
      "type": "User",
      "site_admin": false
    },
    "labels": [

    ],
    "state": "open",
    "locked": false,
    "assignee": null,
    "assignees": [

    ],
    "milestone": null,
    "comments": 0,
    "created_at": "2023-08-14T03:34:37Z",
    "updated_at": "2023-08-19T01:32:46Z",
    "closed_at": null,
    "author_association": "NONE",
    "active_lock_reason": null,
    "draft": false,
    "pull_request": {
      "url": "https://api.github.com/repos/octocat/Hello-World/pulls/2709",
      "html_url": "https://github.com/octocat/Hello-World/pull/2709",
      "diff_url": "https://github.com/octocat/Hello-World/pull/2709.diff",
      "patch_url": "https://github.com/octocat/Hello-World/pull/2709.patch",
      "merged_at": null
    },
    "body": null,
    "reactions": {
      "url": "https://api.github.com/repos/octocat/Hello-World/issues/2709/reactions",
      "total_count": 0,
      "+1": 0,
      "-1": 0,
      "laugh": 0,
      "hooray": 0,
      "confused": 0,
      "heart": 0,
      "rocket": 0,
      "eyes": 0
    },
    "timeline_url": "https://api.github.com/repos/octocat/Hello-World/issues/2709/timeline",
    "performed_via_github_app": null,
    "state_reason": null
        },
        {
            // Fifth issue data
            "url": "https://api.github.com/repos/octocat/Hello-World/issues/2708",
    "repository_url": "https://api.github.com/repos/octocat/Hello-World",
    "labels_url": "https://api.github.com/repos/octocat/Hello-World/issues/2708/labels{/name}",
    "comments_url": "https://api.github.com/repos/octocat/Hello-World/issues/2708/comments",
    "events_url": "https://api.github.com/repos/octocat/Hello-World/issues/2708/events",
    "html_url": "https://github.com/octocat/Hello-World/pull/2708",
    "id": 1848929845,
    "node_id": "PR_kwDOABPHjc5X1k-k",
    "number": 2708,
    "title": "Create devcontainer.json",
    "user": {
      "login": "Jonnyaliblog1989",
      "id": 142192124,
      "node_id": "U_kgDOCHmt_A",
      "avatar_url": "https://avatars.githubusercontent.com/u/142192124?v=4",
      "gravatar_id": "",
      "url": "https://api.github.com/users/Jonnyaliblog1989",
      "html_url": "https://github.com/Jonnyaliblog1989",
      "followers_url": "https://api.github.com/users/Jonnyaliblog1989/followers",
      "following_url": "https://api.github.com/users/Jonnyaliblog1989/following{/other_user}",
      "gists_url": "https://api.github.com/users/Jonnyaliblog1989/gists{/gist_id}",
      "starred_url": "https://api.github.com/users/Jonnyaliblog1989/starred{/owner}{/repo}",
      "subscriptions_url": "https://api.github.com/users/Jonnyaliblog1989/subscriptions",
      "organizations_url": "https://api.github.com/users/Jonnyaliblog1989/orgs",
      "repos_url": "https://api.github.com/users/Jonnyaliblog1989/repos",
      "events_url": "https://api.github.com/users/Jonnyaliblog1989/events{/privacy}",
      "received_events_url": "https://api.github.com/users/Jonnyaliblog1989/received_events",
      "type": "User",
      "site_admin": false
    },
    "labels": [

    ],
    "state": "open",
    "locked": false,
    "assignee": null,
    "assignees": [

    ],
    "milestone": null,
    "comments": 0,
    "created_at": "2023-08-14T03:33:42Z",
    "updated_at": "2023-08-14T03:33:42Z",
    "closed_at": null,
    "author_association": "NONE",
    "active_lock_reason": null,
    "draft": false,
    "pull_request": {
      "url": "https://api.github.com/repos/octocat/Hello-World/pulls/2708",
      "html_url": "https://github.com/octocat/Hello-World/pull/2708",
      "diff_url": "https://github.com/octocat/Hello-World/pull/2708.diff",
      "patch_url": "https://github.com/octocat/Hello-World/pull/2708.patch",
      "merged_at": null
    },
    "body": null,
    "reactions": {
      "url": "https://api.github.com/repos/octocat/Hello-World/issues/2708/reactions",
      "total_count": 0,
      "+1": 0,
      "-1": 0,
      "laugh": 0,
      "hooray": 0,
      "confused": 0,
      "heart": 0,
      "rocket": 0,
      "eyes": 0
    },
    "timeline_url": "https://api.github.com/repos/octocat/Hello-World/issues/2708/timeline",
    "performed_via_github_app": null,
    "state_reason": null

        },
        
        {
            // Fifth issue data
            "url": "https://api.github.com/repos/octocat/Hello-World/issues/2708",
    "repository_url": "https://api.github.com/repos/octocat/Hello-World",
    "labels_url": "https://api.github.com/repos/octocat/Hello-World/issues/2708/labels{/name}",
    "comments_url": "https://api.github.com/repos/octocat/Hello-World/issues/2708/comments",
    "events_url": "https://api.github.com/repos/octocat/Hello-World/issues/2708/events",
    "html_url": "https://github.com/octocat/Hello-World/pull/2708",
    "id": 1848929845,
    "node_id": "PR_kwDOABPHjc5X1k-k",
    "number": 2708,
    "title": "Create devcontainer.json",
    "user": {
      "login": "Jonnyaliblog1989",
      "id": 142192124,
      "node_id": "U_kgDOCHmt_A",
      "avatar_url": "https://avatars.githubusercontent.com/u/142192124?v=4",
      "gravatar_id": "",
      "url": "https://api.github.com/users/Jonnyaliblog1989",
      "html_url": "https://github.com/Jonnyaliblog1989",
      "followers_url": "https://api.github.com/users/Jonnyaliblog1989/followers",
      "following_url": "https://api.github.com/users/Jonnyaliblog1989/following{/other_user}",
      "gists_url": "https://api.github.com/users/Jonnyaliblog1989/gists{/gist_id}",
      "starred_url": "https://api.github.com/users/Jonnyaliblog1989/starred{/owner}{/repo}",
      "subscriptions_url": "https://api.github.com/users/Jonnyaliblog1989/subscriptions",
      "organizations_url": "https://api.github.com/users/Jonnyaliblog1989/orgs",
      "repos_url": "https://api.github.com/users/Jonnyaliblog1989/repos",
      "events_url": "https://api.github.com/users/Jonnyaliblog1989/events{/privacy}",
      "received_events_url": "https://api.github.com/users/Jonnyaliblog1989/received_events",
      "type": "User",
      "site_admin": false
    },
    "labels": [

    ],
    "state": "open",
    "locked": false,
    "assignee": null,
    "assignees": [

    ],
    "milestone": null,
    "comments": 0,
    "created_at": "2023-08-14T03:33:42Z",
    "updated_at": "2023-08-14T03:33:42Z",
    "closed_at": null,
    "author_association": "NONE",
    "active_lock_reason": null,
    "draft": false,
    "pull_request": {
      "url": "https://api.github.com/repos/octocat/Hello-World/pulls/2708",
      "html_url": "https://github.com/octocat/Hello-World/pull/2708",
      "diff_url": "https://github.com/octocat/Hello-World/pull/2708.diff",
      "patch_url": "https://github.com/octocat/Hello-World/pull/2708.patch",
      "merged_at": null
    },
    "body": null,
    "reactions": {
      "url": "https://api.github.com/repos/octocat/Hello-World/issues/2708/reactions",
      "total_count": 0,
      "+1": 0,
      "-1": 0,
      "laugh": 0,
      "hooray": 0,
      "confused": 0,
      "heart": 0,
      "rocket": 0,
      "eyes": 0
    },
    "timeline_url": "https://api.github.com/repos/octocat/Hello-World/issues/2708/timeline",
    "performed_via_github_app": null,
    "state_reason": null

        },
    ];


    function displayCurrentPage() {
        const startIndex = (currentPage - 1) * issuesPerPage;
        const endIndex = startIndex + issuesPerPage;
        const currentIssues = issuesData.slice(startIndex, endIndex);


        issueList.innerHTML = "";

        
        currentIssues.forEach(issue => {
            const listItem = document.createElement("li");
            listItem.textContent = issue.title;
            issueList.appendChild(listItem);
        });

        
        pageHeading.textContent = `Page number ${currentPage}`;
    }


    displayCurrentPage();

    
    loadNextBtn.addEventListener("click", function () {
        console.log("Load Next button clicked");
        if (currentPage < Math.ceil(issuesData.length / issuesPerPage)) {
            currentPage++;
            displayCurrentPage();
        }
    });

    
    loadPrevBtn.addEventListener("click", function () {
        if (currentPage > 1) {
            currentPage--;
            displayCurrentPage();
        }
    });
});