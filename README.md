# QTags
Simple input tags for bootstrap
# Usage
	<div id="tags">
		<input type="text" name="tags">
	</div>
`<div>` must use `id` not `class`

	$("#tags").qtags();
# Options
<table>
	<thead>
		<tr>
			<th>Name</th>
			<th>Type</th>
			<th>Default</th>
			<th>Description</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>source</td>
			<td>array</td>
			<td>[ ]</td>
			<td>the data source for make tags button</td>
		</tr>
		<tr>
			<td>readonly</td>
			<td>boolean</td>
			<td>false</td>
			<td>this make <code>input</code> <code>readonly</code></td>
		</tr>
		<tr>
			<td>tagColor</td>
			<td>array</td>
			<td>['btn-default', 'btn-info']</td>
			<td>background color for tag button <code>none active</code> & <code>active</code></td>
		</tr>
	</tbody>
</table>