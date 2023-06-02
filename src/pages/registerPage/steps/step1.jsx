import React from "react";

export default function Step1({ toggle }) {
  return (
    <Dialog
      PaperProps={{
        style: { borderRadius: 15 },
      }}
      open={true}
      onClose={handleClose}
    >
      <DialogTitle>
        <Stack direction="row" spacing={3}>
          <div>X</div>
          <div style={{ fontWeight: "600" }}>Step 1 of 3</div>
        </Stack>
      </DialogTitle>
      <DialogContent>
        <div className={style.formContainer}>
          <h1>Create your account</h1>
          <form className={style.form}>
            <TextField
              sx={{ ...textFieldCss, marginBottom: 1.5 }}
              InputProps={{ disableUnderline: true }}
              helperText=""
              id="filled-basic"
              label="Name"
              variant="filled"
              onChange={(e) => setFullName(e.target.value)}
            />
            <TextField
              InputProps={{ disableUnderline: true }}
              helperText=""
              label="Phone"
              variant="filled"
              sx={{ ...textFieldCss }}
              onChange={(e) => {
                setPhone(e.target.value);
              }}
            />
          </form>
          <div
            style={{
              margin: "10px",
              display: "flex",
              justifyContent: "flex-end",
              color: "#00acee",
            }}
          >
            Use email instead
          </div>
          <h3 style={{ marginTop: 60 }}>Date of birth</h3>
          <div>
            This will not be shown publicly. Confirm your own age, even if this
            account is for a business, a pet, or something else.
          </div>

          <DateSelector />
        </div>
      </DialogContent>

      <DialogActions
        style={{ justifyContent: "center", margin: "0rem 3rem 2rem 3rem" }}
      >
        <Button
          sx={{ borderRadius: 6, height: 50 }}
          onClick={handleClose}
          variant="contained"
          color="primary"
          fullWidth
        >
          Next
        </Button>
      </DialogActions>
    </Dialog>
  );
}
