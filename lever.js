jQuery(document).ready(($) => {

    // REPLACE "LEVERDEMO" WITH YOUR COMPANY NAME BELOW

    url = 'https://api.lever.co/v0/postings/vaxcyte?mode=json&group=department'

    //Setting up the structure for each job posting
    function createJobs(_data) {

        //Checking for potential Lever source or origin parameters
        let pageUrl = window.location.href;
        let leverParameter = '';
        let trackingPrefix = '?lever-';

        if (pageUrl.indexOf(trackingPrefix) >= 0) {
            // Found Lever parameter
            let pageUrlSplit = pageUrl.split(trackingPrefix);
            leverParameter = '?lever-' + pageUrlSplit[1];
        }

        for (i = 0; i < _data.length; i++) {
            let posting = _data[i];
            let department = _data[i].title || 'Others';
            $('#jobs-container .jobs-list').append(
                '<h3 class="job-department">' + department + '</>'
            );
            for (let j = 0; j < posting.postings.length; j++) {
                let jobText = posting.postings[j].text;
                let jobLink = posting.postings[j].hostedUrl + leverParameter;
                $('#jobs-container .jobs-list').append(
                    '<div class="job">' +
                    '<a class="job-title" target="_blank" href="' + jobLink + '"">' + jobText + '</a>' +
                    '</div>'
                );
            }
        }
    }

    //Fetching job postings from Lever's postings API
    $.ajax({
        dataType: "json",
        url: url,
        success: function (data) {
            createJobs(data);
        }
    });

})