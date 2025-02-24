// Code snippet for AWS Cloudfront Function to redirect requests to retrieve the index.html file. Required for a private S3 bucket hosting a static website.
// https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/example_cloudfront_functions_url_rewrite_single_page_apps_section.html
// The following code example shows how to add index.html to request URLs without a file name in a CloudFront Functions viewer request event.

async function handler(event) {
    var request = event.request;
    var uri = request.uri;

    // Check whether the URI is missing a file name.
    if (uri.endsWith('/')) {
        request.uri += 'index.html';
    }
    // Check whether the URI is missing a file extension.
    else if (!uri.includes('.')) {
        request.uri += '/index.html';
    }

    return request;
}

