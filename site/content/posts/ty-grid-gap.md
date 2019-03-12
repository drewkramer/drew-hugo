---
title: "Thank you, grid-gap"
date: 2019-03-11T09:47:55-04:00
description:
tags: [css,grid]
post_thumbnail: "https://picsum.photos/1600/600"
draft: false
---

## 👋 Bye bye negative margins.

Take this:

{{< highlight html >}}
<div class="grid">
  <div class="grid-item">
   <h2>{{ .Title }}</h2>
   <p>{{ .Desc }}</p>
  </div>
  <div class="grid-item">
   <h2>{{ .Title }}</h2>
   <p>{{ .Desc }}</p>
  </div>
  <div class="grid-item">
   <h2>{{ .Title }}</h2>
   <p>{{ .Desc }}</p>
  </div>
</div>
{{< /highlight >}}

Add this:

{{< highlight css >}}
.grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, 1fr);
  grid-gap: 20px;
}
{{< /highlight >}}

## BOOM.