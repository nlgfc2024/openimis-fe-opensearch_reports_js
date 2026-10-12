import React from "react";

/* eslint-disable */
function OpenSearchDashboard(props) {
  // origin keeps the scheme and port, so it also works on the http dev server
  const currentOrigin = window.location.origin;
  const openSearchBaseRootPath =
    process.env.OPENSEARCH_PROXY_ROOT ?? "opensearch";
  const dashboardUrl = props.dashboardUrl;
  return (
    <iframe
      src={`${currentOrigin}/${openSearchBaseRootPath}/${dashboardUrl}`}
      title="OpenSearch Dashboard" // Add a unique title property
      style={{ position: "absolute", width: "80%", height: "90%" }}
      allow="same-origin allow-scripts"
    />
  );
}

export default OpenSearchDashboard;
