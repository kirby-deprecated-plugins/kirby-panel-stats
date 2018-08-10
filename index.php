<?php
function siteDepth($index) {
    foreach($index as $item) {
        $depth[] = $item->depth();
    }
    return max($depth);
}

function countChildren($index) {
    foreach($index as $item) {
        $children[] = $item->children()->count();
    }
    return $children;
}

function countMime($files, $mime) {
    $count = 0;
    foreach($files as $item) {
        if($item->mime() == $mime) $count++;
    }
    return $count;
}

Kirby::plugin('jenstornell/panelstats', [
    'fields' => [
        'panelstats' => [
            'props' => [
                'values' => function() {
                    $site = site();
                    $index = $site->index();
                    $count_children = countChildren($index);
                    $files = $index->files();
                    $data = [
                        'site_images' => $index->images()->count(),
                        'jpg' => countMime($files, 'image/jpeg'),
                        'png' => countMime($files, 'image/png'),
                        'site_pages_count' => $index->count(),
                        'site_pages_count_children' => $site->children()->count(),
                        'site_depth' => siteDepth($index),
                        'files' => $files->count(),
                        'children_max' => max($count_children)
                    ];
                    return $data;
                },
            ]
        ]
    ]
]);
