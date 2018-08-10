panel.plugin("jenstornell/panelstats", {
  fields: {
    panelstats: {
      props: {
        label: String,
        values: Array
      },
      template: `
        <p-stats>
          <table>
            <tr>
              <th>
                <h2 class="k-headline">Files on site</h2>
              </th>
            </tr>
            <tr>
              <th>All</th>
              <td>{{ this.values.files }}</td>
            </tr>
            <tr>
              <th>Images</th>
              <td>{{ this.values.site_images }}</td>
            </tr>
            <tr>
              <th>Jpeg</th>
              <td>{{ this.values.jpg }}</td>
            </tr>
            <tr>
              <th>Png</th>
              <td>{{ this.values.png }}</td>
            </tr>
            <tr>
              <th>
                <h2 class="k-headline">Pages</h2>
              </th>
            </tr>
            <tr>
              <th>Pages on site</th>
              <td>{{ this.values.site_pages_count }}</td>
            </tr>
            <tr>
              <th>Children on root</th>
              <td>{{ this.values.site_pages_count_children }}</td>
            </tr>
            <tr>
              <th>Children max</th>
              <td>{{ this.values.children_max }}</td>
            </tr>
            <tr>
              <th>Depth max</th>
              <td>{{ this.values.site_depth }}</td>
            </tr>
          </table>
        </p-stats>
      `
    }
  }
});
