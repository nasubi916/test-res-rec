<script setup lang="ts">
import { ref } from 'vue';
import Button from 'primevue/button'

const isLoading=ref(true)

</script>

<template>
	<a href="https://ja.wikipedia.org/wiki/%E3%81%A8%E3%82%8D%E3%82%8D" target="_blank">
	とろろ</a>(test result record)β
	<br>テストの結果を記録、グラフ化する
	<br>各テストごとにレーダーチャートを作成し
	<br>自分は何が得意で何が苦手かはっきりさせられる
	<br>各教科ごとに今までの得点と平均点の推移が見れる
	<br>平均点からの差を見れて、一年間を通した自分の頑張りを視覚化出来る
	<br>pc、ipadから見ることが出来るWebサイト
	<br>名電向けだけど将来的に汎用化するつもり
	<br>ーー始めるーー
	<!-- 始めるボタンを押すとResultが現れて（Visibleを変更）導線を引く -->
	<br><Button class="p-button-raised p-button-rounded p-button-outlined p-button-link" >fffff</Button>
	<Button label="Save" icon="pi pi-check" :loading="isLoading" />
	<br><br>

</template>