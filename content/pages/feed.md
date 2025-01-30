---
permalink: /feed/
eleventyExcludeFromCollections: true
layout: empty
---
<?xml version="1.0" encoding="utf-8"?>
<?xml-stylesheet href="/pretty-atom-feed.xsl" type="text/xsl"?>
<feed xmlns="http://www.w3.org/2005/Atom" xml:lang="de">
  <title>Sebastian Moitzheim's Weblog</title>
  <subtitle>neue Texte und Shitposts von Sebastian Moitzheim.</subtitle>
  <link href="https://smoitzheim.online/feed.xml" rel="self" />
  <link href="https://smoitzheim.online/" />
  <updated>{{ collections.posts | getNewestCollectionItemDate | dateToRfc3339 }}</updated>
  <id>https://smoitzheim.online/</id>
  <author>
    <name>Sebastian Moitzheim</name>
  </author>
  {%- for post in collections.posts | reverse %}
  {%- set absolutePostUrl %}{{ post.url | htmlBaseUrl("https://smoitzheim.online/") }}{% endset %}
  <entry>
    <title>{{ post.data.title }}</title>
    <link href="{{ absolutePostUrl }}" />
    <summary>{{ post.content | striptags(true, preserve_linebreaks) | truncate(280) }}</summary>
    <updated>{{ post.date | dateToRfc3339 }}</updated>
    <id>{{ absolutePostUrl }}</id>
    <content type="html">{{ post.content | renderTransforms(post.data.page, "https://smoitzheim.online/") }}</content>
  </entry>
  {%- endfor %}
</feed>