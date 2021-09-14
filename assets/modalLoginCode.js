<Modal visible={modalToggle}>
  <LoginModal
    setModalToggle={setModalToggle}
    />
</Modal>
{(route.params.user > 0) ?
  <View style={{backgroundColor: "rgb(30, 94, 238)", borderColor: "rgb(30, 94, 238)", height: 40, marginBottom: 50}}>
  </View>
  :
  <View style={{flexDirection: 'row'}}>
      <Button0
        title={"Login"}
        presser={handlePress}
        />
  </View>}
